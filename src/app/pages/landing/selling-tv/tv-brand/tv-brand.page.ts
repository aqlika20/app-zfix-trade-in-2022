import { Component, OnInit } from '@angular/core';
import { SellingApiService } from './../../../../services/api/selling-api.service';
import { HelperService } from '../../../../services/helper.service';
import { Device } from "@ionic-native/device/ngx";
import { UtilitiesService } from '../../../../services/utilities.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { MembershipService } from "../../../../services/membership.service";
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { MembershipApiService } from "../../../../services/api/membership-api.service";
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalFormTvComponent } from 'src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component';
import { AlarmUnitTolakComponent } from 'src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component';
import { ModalHarapDiperhatikanComponent } from 'src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component';


type Stores = {id: number, name: string};
@Component({
  selector: 'app-tv-brand',
  templateUrl: './tv-brand.page.html',
  styleUrls: ['./tv-brand.page.scss'],
})
export class TvBrandPage implements OnInit {
  brand: string;
  jenis: string;
  data_brand:any = [];
  data_inch:any = [];
  data_jenis:any = [];
  inner_valueSelected:string;
  outer_valueSelected:string;
  condition_valueSelected:string;
  addition_valueSelected:string;
  lokasi_trade: string;
  stores: any = [];
  searchedStores: any = [];
  searchStore;
  inch: string;
  kondisi_tvSelected:string;
  kondisi_layarSelected:string;
  portSelected: string;
  wifiSelected:string;
  suaraSelected:string;

  // selected_merk:string;
  // selected_jenis:string;
  // selected_ukuran:string;
  // selected_suara:string;

  kondisiLayarGores: boolean = false;
  kondisiNormal: boolean = false;
  kondisiTV: boolean = false;

  showHidden: boolean = true;
  agree: boolean;
  constructor(
    private membershipApiService: MembershipApiService,
    private storage: Storage,
    private sellingApiService: SellingApiService,
    private helper: HelperService,
    private device: Device,
    public utilsService: UtilitiesService, 
    public navCtrl: NavController,
    private selling: MembershipService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    public modalController: ModalController,
 
  ) {
    
   }

  ngOnInit() {
    this.toggleInnerScreen();
    this.toggleOuterScreen();
    this.toggleKondisiTV();

    // this.storage.get('Warning').then((result) => { 
    //   if(result){

    //   } else {
    //     this.Announcement();
    //   }
    // });
  }

  ionViewWillEnter() {
    this.getStore();
    this.getBrand();
    this.selling.removeSelling();
  }

  customPopoverOptions: any = {
    header: 'Pilih Tempat Trade In',
    message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
  };

  showMore(){

    if(this.showHidden === true){

      this.showHidden = false;
      document.getElementById("hide").hidden = false;
      document.getElementById("hides").hidden = true;

    }else if(this.showHidden === false){

      this.showHidden = true;
      document.getElementById("hide").hidden = true;

    }
  }

  async Announcement(){
    const modalAlert = await this.modalController.create({
      component: ModalHarapDiperhatikanComponent,
      cssClass: 'harap-diperhatikan-modal-css',
      backdropDismiss: false,
      id: 'my-modal-id',
      componentProps: {
        agree: this.agree
      },
    });
    return await modalAlert.present();
  }

  selectMerk(val){
    this.brand = val;
    
    document.querySelectorAll('.tv-merk-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }
  
  selectJenis(val){
    this.jenis = val;
    
    document.querySelectorAll('.tv-jenis-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectUkuran(val){
    if (val == 32) {
      this.inch = '32" inch';
    }
    if (val == 40) {
      this.inch = '40" inch';
    }
    if (val == 42) {
      this.inch = '42" inch';
    }
    if (val == 55) {
      this.inch = '55" inch';
    }
    
    document.querySelectorAll('.tv-ukuran-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectSuara(val){
    this.suaraSelected = val;
    console.log(this.suaraSelected)
    
    document.querySelectorAll('.tv-suara-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  radioSelectLayar(event) {
    this.kondisi_layarSelected = event.detail.value;
  }

  radioSelectBody(event) {
    this.condition_valueSelected = event.detail.value;
  }

  radioSelectKelengkapan(event) {
    this.addition_valueSelected = event.detail.value;
  }

  toggleOuterScreen() {
    if (this.kondisiLayarGores == true) {
      this.outer_valueSelected = 'Layar Luar Tidak Tergores';
    } else {
      this.outer_valueSelected = 'Layar Luar Tergores';
    }
  }

  toggleInnerScreen() {
    if (this.kondisiNormal == true) {
      this.inner_valueSelected = 'Layar Luar Tidak Tergores';
    } else {
      this.inner_valueSelected = 'Layar Luar Tergores';
    }
  }

  toggleKondisiTV() {
    if (this.kondisiTV == true) {
      this.kondisi_tvSelected = 'Nyala';
    } else {
      this.kondisi_tvSelected = 'Mati';
    }
  }

  getStore(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getStore(token).subscribe(
        (response: any) => {
         this.stores = response.data.store;
        },
        (err) => {
          this.stores = [];

          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  getBrand(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getBrand(token).subscribe(
        (response: any) => {
         this.data_brand = response.data.brand;
         this.data_inch = response.data.inch;
         this.data_jenis = response.data.jenis_tv;
         console.log(this.data_brand)
        },
        (err) => {
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  async submit(event) {
    if ((this.brand == null || this.jenis == null || this.lokasi_trade == null || this.inch == null || this.inner_valueSelected == null || this.outer_valueSelected == null || this.condition_valueSelected == null || this.addition_valueSelected == null )){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else if((this.kondisi_tvSelected == "Mati")){

        const modalAlert = await this.modalController.create({
          component: AlarmUnitTolakComponent,
          cssClass: 'my-custom-modal-tolak-css',
          backdropDismiss: false,
          id: 'my-modal-id'
        });
        return await modalAlert.present();
    } 
    else {
      const modalAlert = await this.modalController.create({
        component: ModalFormTvComponent,
        cssClass: 'my-custom-modal-tolak-css',
        backdropDismiss: false,
        id: 'my-modal-id',
        componentProps: {
          brand: this.brand,
          jenis: this.jenis,
          lokasi_trade: this.lokasi_trade,
          inner_valueSelected: this.inner_valueSelected,
          outer_valueSelected:this.outer_valueSelected,
          condition_valueSelected:this.condition_valueSelected,
          addition_valueSelected:this.addition_valueSelected,
          suara:this.suaraSelected,
          kondisi_tv:this.kondisi_tvSelected,
          kondisi_layar:this.kondisi_layarSelected,
          inch:this.inch
        },
      });
      return await modalAlert.present();
    }
  } 

  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     header: 'ZFix',
  //     message: 'Apakah data yang di pilih sudah sesuai dengan kondisi yang sebenarnya?',
  //     backdropDismiss: false,
  //     buttons: [
  //       {
  //         text: 'Tidak',
  //         role: 'cancel',
  //         cssClass: 'yourClass',
  //         handler: () => {}
  //       }, {
  //         text: 'Lanjut',
  //         handler: () => {
  //           let navigationExtras: NavigationExtras = {
  //             queryParams: {
  //                 brand: this.brand,
  //                 jenis: this.jenis,
  //                 lokasi_trade: this.lokasi_trade,
  //                 inner_valueSelected: this.inner_valueSelected,
  //                 outer_valueSelected:this.outer_valueSelected,
  //                 condition_valueSelected:this.condition_valueSelected,
  //                 addition_valueSelected:this.addition_valueSelected,
  //                 port:this.portSelected,
  //                 wifi:this.wifiSelected,
  //                 suara:this.suaraSelected,
  //                 kondisi_tv:this.kondisi_tvSelected,
  //                 kondisi_layar:this.kondisi_layarSelected,
  //                 inch:this.inch
  //             }
  //           };
  //           this.navCtrl.navigateForward(["/landing/tv-brand/detail-tv"], navigationExtras);
              
  //         }
  //       }, 
  //     ]
  //   });
  //   await alert.present();
  // }
 
  
}
