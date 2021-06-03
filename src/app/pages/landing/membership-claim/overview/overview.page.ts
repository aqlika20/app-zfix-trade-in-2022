import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { MembershipApiService } from "../../../../services/api/membership-api.service";
import { UtilitiesService } from '../../../../services/utilities.service';
import { MembershipService } from "../../../../services/membership.service";
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  imei: string;

  constructor(private storage: Storage,
    private uid: Uid, 
    private androidPermissions: AndroidPermissions, 
    private platform: Platform, 
    private membershipApiService: MembershipApiService,
    private utilsService: UtilitiesService, 
    private membership: MembershipService,
    public navCtrl: NavController,
    private router: Router,
    private activatedRoute: ActivatedRoute) 
    {

    }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.imei = (params["imei"]);
    });
  }

  submit() {
      this.router.navigate([
        "/landing/membership-claim/index",
    ]);
  }

  riwayat() {
    this.router.navigate([
      "/landing/membership-claim/riwayat-pengajuan",
  ]);
}

  // submit() {
  //   if ((this.imei == null) || this.imei.replace(/\s/g, "") == ""){
  //     this.utilsService.showToast("Please capture the photo.");
  //   }
  //   else {
  //     this.storage.get(tokenKey).then((token) => {
  //       this.storage.get(membershipActivationKey).then((data) => {
  //         let membershipActivation = {
  //           voucher_key: data.code,
  //           imei: data.imei,
  //           phone_type: data.type,
  //           phone_manufacturer: data.manufacturer,
  //           phone_model: data.model,
  //           phone_ram: data.ram,
  //           phone_storage: data.storage,
  //           screen_has_problem: this.screenHasProblem,
  //           screen_image: this.screenImage
  //         }
  //         console.log(membershipActivation)
  //         this.membershipApiService.activation(token, membershipActivation).subscribe(
  //           (response) => {
  //             this.router.navigate([
  //               "/landing/membership-activation/done",
  //             ]);
  //           },
  //           (err) => {
  //             console.log(err)
  //             this.utilsService.showToast("Membership activation failed.");
  //           }
  //         );
  //       });
  //     });
  //   }
  // }

}
