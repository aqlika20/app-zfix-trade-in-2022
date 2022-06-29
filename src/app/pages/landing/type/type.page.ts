import { Component, OnInit } from '@angular/core';
import { UserApiService } from "../../../services/api/user-api.service";
import { AuthenticationService } from "../../../services/authentication.service";
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../config/api";
import { Router } from '@angular/router';
import  { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/pages/landing/popover/popover.component';
import { SellingApiService } from '../../../services/api/selling-api.service';

declare var cordova: any;

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {
 
  brand: any[] = [
    {
      'id': 1,
      'name': 'Handphone'
    },
    {
      'id': 2,
      'name': 'Television'
    },
    {
      'id': 3,
      'name': 'Laptop'
    },
    {
      'id': 4,
      'name': 'Play Station'
    },
    {
      'id': 5,
      'name': 'Kulkas'
    },
    {
      'id': 4,
      'name': 'Mesin Cuci'
    },
  ];
  count_notification: any;
  dateTime;
  time:string;
  constructor(
    private authService: AuthenticationService,
    private storage: Storage,
    private userApiService: UserApiService,
    private router: Router,
    private faio:FingerprintAIO,
    public popoverController: PopoverController,
    private sellingApiService: SellingApiService,

  ) {
    
   }

  ngOnInit() {
    setInterval(() => { 
      this.Count();
    }, 5000);

    setTimeout(() => {
      var d = new Date();
      
      // this.time = d.getHours().toString();
      if(d.getHours() == 24 || d.getHours() == 1 || d.getHours() == 2 || d.getHours() == 3 || d.getHours() == 4 || d.getHours() == 5 || d.getHours() == 6 || d.getHours() == 7 || d.getHours() == 8 || d.getHours() == 9 || d.getHours() == 10 || d.getHours() == 11){
        this.time = 'Selamat Pagi,';
      } 
      else if(d.getHours() == 12 || d.getHours() == 13 || d.getHours() == 14){
        this.time = "Selamat Siang,";
      }
      else if(d.getHours() == 15 || d.getHours() == 16 || d.getHours() == 17){
        this.time = "Selamat Sore,";
      }
      else if(d.getHours() == 18 || d.getHours() == 19 || d.getHours() == 20 || d.getHours() == 21 || d.getHours() == 22 || d.getHours() == 23){
        this.time = "Selamat Malam,";
      }


    });

  //   cordova.plugins.AppReview.requestReview().catch(function() {
  //     return cordova.plugins.AppReview.openStoreScreen();
  //  });
  }
 
  goTo(id){
     if (id == 1) {
      // this.router.navigate(['landing', 'selling-phone']);
      alert("on progress")
    } else if (id == 2) {
      this.router.navigate(['landing', 'tv-brand']);
    }else if (id == 3) {
      this.router.navigate(['landing', 'laptop-brand']);
    }else if (id == 4) {
      this.router.navigate(['landing', 'ps-brand']);
    }else if (id == 5) {
      this.router.navigate(['landing', 'kulkas-brand']);
    }else if (id == 6) {
      this.router.navigate(['landing', 'mesin-cuci-brand']);
    }else if (id == 'notification') {
      this.router.navigate(['landing', 'notification']);
    }
    
  }

  Count(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getNotification(token).subscribe(
        (response: any) => {
        this.count_notification = response.count;
        },
        (err) => {
          // this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  async popclick(event){
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event
    });
    return await popover.present();
  }

  logout() {
    this.authService.logout();
  }

}
