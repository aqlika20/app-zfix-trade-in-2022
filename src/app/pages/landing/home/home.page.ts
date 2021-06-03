import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../config/api";
import { UserApiService } from "../../../services/api/user-api.service";
import { AppVersionApiService } from "../../../services/api/app-version-api.service";
import { UtilitiesService } from "../../../services/utilities.service";
import { MembershipService } from "../../../services/membership.service";
import { ToastController } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { MembershipApiService } from "../../../services/api/membership-api.service";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  user: any = {};
  claim: any = [];
  notif;
  status: any;
 
  constructor(
    private storage: Storage,
    private userApiService: UserApiService,
    private utilsService: UtilitiesService,
    private membership: MembershipService,
    public toastCtrl: ToastController,
    private router: Router,
    private MembershipService: MembershipApiService,
    private LocalNotifications: LocalNotifications,
    private backgroundMode: BackgroundMode,
    private appVersion: AppVersion,
    private appVersionApiService : AppVersionApiService,
    public alertController: AlertController,

  ) {}

  ngOnInit() {
    // this.notification();
  }

  ionViewWillEnter() {

    this.membership.removeMembershipActivation();
    this.getUser();

    this.appVersion.getVersionNumber().then(version => {
      var check: any = {};
      this.storage.get(tokenKey).then((token) => {
        this.appVersionApiService.detail(token).subscribe(
          (response) => {
            check = response;
            if(check.data?.version != version){
            this.needUpdate();
                         
            }
          },
          (err) => {
            check = [];
            this.utilsService.showToast("There is a problem.");
          }
        );
      });    
    }); 
  }

  async needUpdate(){
    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Mohon perbarui ke versi terbaru.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            navigator["app"].exitApp();
          }
        },
      ]
    });
   await alert.present();    
  }

  getUser() {
    
    this.storage.get(tokenKey).then((token) => {
      this.userApiService.userDetail(token).subscribe(
        (response) => {
          this.user = response;
        },
        (err) => {
          this.user = [];
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  goTo(id) {
    if (id == 1) {
      var check: any = {};
      this.storage.get(tokenKey).then((token) => {
        this.userApiService.userDetail(token).subscribe(
          (response) => {
            check = response;
            if(check.data?.customer.contact != '' && check.data?.customer.address ){
              this.router.navigate(['landing', 'membership-activation']);
            } else {
              this.utilsService.showToast("Lengkapi profile dahulu.");
              this.router.navigate(['landing', 'edit-profile']);
            }
          },
          (err) => {
            check = [];
            this.utilsService.showToast("There is a problem.");
          }
        );
      });
    }

    else if (id == 2) {
    this.router.navigate(['landing', 'membership-claim']);
  }
    
    else if (id == 3) {
      this.router.navigate(["/landing/membership-activation/device-detail/screen-testing/device-image"]); 

      this.utilsService.showToast("Coming soon.");
    }

  }

  // notification() {
  //   this.storage.get(tokenKey).then((token) => {
  //     this.MembershipService.getNotif(token).subscribe(
  //       (response) => {
  //         this.claim = response;     
  //         // console.log(response);
  //         if ( this.claim.data.notif.show == 0) {
  //           this.LocalNotifications.schedule({
  //             title: this.claim.data.notif.title,
  //             text: this.claim.data.notif.description,
  //             foreground: true,
  //             });
  //             setInterval(()=> {
  //               this.notification()
  //             }, 5000);
  //           }
  //         },
  //       ); 
  //   });
  // }
  
}

 