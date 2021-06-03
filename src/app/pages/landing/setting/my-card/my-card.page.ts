import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { MembershipApiService } from "../../../../services/api/membership-api.service";
import { UtilitiesService } from "../../../../services/utilities.service";

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.page.html',
  styleUrls: ['./my-card.page.scss'],
})
export class MyCardPage implements OnInit {

  user: any = {};

  constructor(
    private storage: Storage,
    private MembershipService: MembershipApiService,
    private utilsService: UtilitiesService
  ) { }

  ngOnInit() {
    this.getVoucher();
  }

  getVoucher() {
    this.storage.get(tokenKey).then((token) => {
      this.MembershipService.current(token).subscribe(
        (response) => {
          this.user = response;
          console.log(this.user)
          if(this.user.data?.voucher_key == '-')
          {
            this.utilsService.showToast("Anda belum memiliki voucher key.");
          }
          // console.log();
          // console.log("image slides", this.listImageSlides);
        },
        (err) => {
          this.user = [];
          this.utilsService.showToast("There is a problem.");
          console.log(err)
        }
      );
    });
  }

}
