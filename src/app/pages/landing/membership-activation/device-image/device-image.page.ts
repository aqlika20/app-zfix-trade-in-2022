import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { membershipActivationKey } from "../../../../config/api";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { MembershipApiService } from "../../../../services/api/membership-api.service";
import { UtilitiesService } from '../../../../services/utilities.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ActionSheetController } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-device-image',
  templateUrl: './device-image.page.html',
  styleUrls: ['./device-image.page.scss'],
})
export class DeviceImagePage implements OnInit {
  subscription: Subscription;

  voucher_key: string;
  screenHasProblem: boolean;
  code: string;
  link: string='https://zfix.id/code/';
  response: any = {}
  

  constructor(
    private storage: Storage,
    private camera: Camera, 
    private membershipApiService: MembershipApiService,
    private utilsService: UtilitiesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private preview: CameraPreview,
    private socialSharing: SocialSharing,
    private clipboard: Clipboard,
    private actionSheetController: ActionSheetController,
    private platform: Platform,
    public alertController: AlertController,
    public navCtrl: NavController,
    private location: Location,

  ) { 
    
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.screenHasProblem = params["screenHasProblem"];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ionViewWillEnter() {
    this.getCode();

    this.subscription = interval(2000).subscribe(x => {
      this.checkCode();
    });
    this.backButton();

  }

  async share() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Bagikan Link',
      buttons: [{
        text: 'Share via Whatsapp',
        icon: 'logo-whatsapp',
        cssClass: 'whatsappIcon',
        handler: () => {
            this.socialSharing.shareViaWhatsApp(this.link)
          }
      }, {
        text: 'Copy Link',
        icon: 'copy',
        cssClass: 'copyIcon',
        handler: () => {
      this.clipboard.copy(this.link);
  }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
    }

  getCode() {
    this.storage.get(tokenKey).then((token) => {
      this.storage.get(membershipActivationKey).then((data) => {
        let membershipActivation = {
          voucher_key: data.code,
          imei: data.imei,
          device_type: data.type,
          device_version: data.version,
          device_manufacturer: data.manufacturer,
          device_model: data.model,
          device_ram: data.ram,
          device_storage: data.storage,
          lokasi_beli_voucher: data.lokasi_beli_voucher,
          screen_has_problem: this.screenHasProblem,
        }
        console.log(membershipActivation)
        this.membershipApiService.activation(token, membershipActivation).subscribe(
          (response) => {
           this.response = response
           this.code = this.response.data.code
           this.link = this.link+this.code
          },
          (err) => {
            console.log(err)
            this.utilsService.showToast(err.error.message);
            this.router.navigate(['landing', 'home']);
          }
        );
      });
    });
  }

  checkCode(){
    this.storage.get(tokenKey).then((token) => {
      let membershipActivation = {
        request_code: -1,
        code: this.code
      }
      var status: any = {}
      this.membershipApiService.check(token, membershipActivation).subscribe(
        (response) => {
          status = response
          if(status.received == true)
            this.utilsService.done("Data sudah diterima dan sedang diproses.")
            this.subscription.unsubscribe();
        },
        (err) => {
          // console.log(err)
        }
      );
    });
  }

  backButton(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.location.isCurrentPathEqualTo('/landing/membership-activation/device-detail/screen-testing/device-image')) {
        this.back();
    } else {
        // Navigate to back page
        console.log('Navigate to back page');
        this.location.back();

    }
  });
}

    async back() {

      const alert = await this.alertController.create({
        header: 'ZFix',
        message: 'Apakah anda yakin ingin kembali ke halaman awal?',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Tidak',
            role: 'cancel',
            cssClass: 'yourClass',
            handler: () => {
            }
          }, {
            text: 'Iya',
            handler: async () => {
              const alert = await this.alertController.create({
                header: 'ZFix',
                message: 'Jika anda kembali code voucher sudah tidak dapat digunakan kembali.',
                backdropDismiss: false,
                buttons: [ 
                  {
                    text: 'Tidak',
                    role: 'cancel',
                    handler: () => {
                    }
                  },{
                      text: 'Iya',
                      handler: () => {
                        this.navCtrl.navigateForward(["landing", 'home']);
                      }
                    }
  
                ]
              });
              await alert.present();
            }
          }, 
        ]
      });
      await alert.present();
    }
}

  // copyText(){
  //   this.clipboard.copy(this.CopyTextAreaText);
  // }

// ShareGeneric(parameter){
//   const url = this.link
//   const text = parameter+'\n'
//   this.socialSharing.share(text, 'MEDIUM', null, url)
// }

// ShareWhatsapp(){
//   this.socialSharing.shareViaWhatsApp(this.link)
// }

 


