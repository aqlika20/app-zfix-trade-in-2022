import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../config/api";
import { MembershipApiService } from "../../../services/api/membership-api.service";
import { UtilitiesService } from "../../../services/utilities.service";


@Component({
  selector: 'app-my-plans',
  templateUrl: 'my-plans.page.html',
  styleUrls: ['my-plans.page.scss']
})
export class MyPlansPage implements OnInit {
  
  user: any = [];
  rawCountdown;
  selectedSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidePerView: 1,
    speed: 400
  }
  now;
  countdown;
  x;
  days;
  hours;
  minutes;
  seconds;


  constructor(
    private storage: Storage,
    private MembershipService: MembershipApiService,
    private utilsService: UtilitiesService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  this.getMyPlan();
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

  getMyPlan() {
    this.storage.get(tokenKey).then((token) => {
      this.MembershipService.myPlan(token).subscribe(
        (response) => {
          this.user = response;
          this.rawCountdown = new Date(this.user.data.process[0].expired_at).getTime();
          // this.now = new Date().getTime();
          // this.countdown = this.rawCountdown -  this.now;
          this.x = setInterval(() => {
            this.now = new Date().getTime();
            this.countdown = this.rawCountdown - this.now;
            var days = Math.floor(this.countdown / (1000 * 60 * 60 * 24));

            document.getElementById("countdown").innerHTML = days + "Hari lagi ";
          }, 1000);
        },
        (err) => {
          this.user = [];
          this.utilsService.showToast("There is a problem.");
        }
      );
    });

    // let date = new Date().getTime()
    // console.log(date);
  }

}
