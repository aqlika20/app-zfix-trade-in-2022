import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { MembershipApiService } from "../../../../services/api/membership-api.service";
import { UtilitiesService } from "../../../../services/utilities.service";

@Component({
  selector: 'app-riwayat-pengajuan',
  templateUrl: './riwayat-pengajuan.page.html',
  styleUrls: ['./riwayat-pengajuan.page.scss'],
})
export class RiwayatPengajuanPage implements OnInit {
  
  user: any = [];
  rawCountdown;
  selectedSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidePerView: 1,
    speed: 400
  }

  constructor(
    private storage: Storage,
    private MembershipService: MembershipApiService,
    private utilsService: UtilitiesService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getMyClaim();
    }

  async segmentChanged(ev){
    await this.selectedSlide.slideTo(this.segment)
  }

 async slideShanged(slides : IonSlides){

    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex =>{
      this.segment = selectedIndex;
    })
  }

  getMyClaim() {
    this.storage.get(tokenKey).then((token) => {
      this.MembershipService.Claim(token).subscribe(
        (response) => {
          this.user = response;
          // console.log(response); 
        },
        (err) => {
          console.log(err); 
          this.user = [];
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }
}
