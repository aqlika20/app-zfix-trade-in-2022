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
import { ModalFormMesincuciComponent } from 'src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component';
import { AlarmUnitTolakComponent } from '../../modal/alarm-unit-tolak/alarm-unit-tolak.component';

declare var cordova: any;

@Component({
  selector: 'app-mesin-cuci-brand',
  templateUrl: './mesin-cuci-brand.page.html',
  styleUrls: ['./mesin-cuci-brand.page.scss'],
})
export class MesinCuciBrandPage implements OnInit {
  brand: string;
  type: string;
  data_brand:any = [];
  data_type:any = [];
  condition: string;
  kondisi_fisik: string;
  rubber: string;
  tutup: string;
  tombol: string;
  pembuangan: string;
  pengering: string;
  air_otomatis: string;
  pemanas: string;
  lokasi_trade: string;
  stores: any = [];

  selected_merk:string;
  selected_tipe:string;
  selected_model:string;
  selected_fisik:string;

  kondisiMesinCuci: boolean = false;
  kondisiRubber: boolean = false;
  kondisiTombol: boolean = false;
  kondisiPembuangan: boolean = false;
  kondisiPengering: boolean = false;
  kondisiAirOtomatis: boolean = false;
  kondisiPemanas: boolean = false;
  kondisiTutup: boolean = false;

  showHidden: boolean = true;

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

  ) { }

  ngOnInit() {
    this.toggleAirOtomatis();
    this.toggleKondisiMesinCuci();
    this.toggleKondisiTombol();
    this.togglePemanas();
    this.togglePembuangan();
    this.togglePengering();
    this.toggleRubber();
  }

  ionViewWillEnter() {
    this.getStore();
    this.getBrand();
    this.selling.removeSelling();
  }
  
  customPopoverOptions: any = {
    header: 'Pilih Tempat Trade In',
    message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.',
    cssClass: 'customAlertCss',
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

  selectMerk(val){
    this.brand = val;
    
    document.querySelectorAll('.cuci-merk-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  } 
  
  selectTipe(val){
    this.type = val;
    
    document.querySelectorAll('.cuci-tipe-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  // selectModel(val){
  //   this.selected_model = val;
    
  //   document.querySelectorAll('.cuci-model-select').forEach(element => {
  //     element.classList.remove("selected");
  //   });
    
  //   var element = document.getElementById(val);
  //   element.classList.add("selected");
  // }

  selectFisik(val){
    this.kondisi_fisik = val;
    
    document.querySelectorAll('.cuci-fisik-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  toggleKondisiMesinCuci() {
    if (this.kondisiMesinCuci == true) {
      this.condition = 'Nyala';
    } else {
      this.condition = 'Mati';
    }
  }

  toggleRubber() {
    if (this.kondisiRubber == true) {
      this.rubber = 'Normal';
    } else {
      this.rubber = 'Tidak Normal';
    }
  }

  toggleKondisiTombol() {
    if (this.kondisiTombol == true) {
      this.tombol = 'Berfungsi Normal';
    } else {
      this.tombol = 'Tidak Berfungsi Normal';
    }
  }

  togglePembuangan() {
    if (this.kondisiPembuangan == true) {
      this.pembuangan = 'Berfungsi';
    } else {
      this.pembuangan = 'Tidak Berfungsi';
    }
  }

  togglePengering() {
    if (this.kondisiPengering == true) {
      this.pengering = 'Berfungsi';
    } else {
      this.pengering = 'Tidak Berfungsi';
    }
  }

  toggleAirOtomatis() {
    if (this.kondisiAirOtomatis == true) {
      this.air_otomatis = 'Berfungsi';
    } else {
      this.air_otomatis = 'Tidak Berfungsi';
    }
  }

  togglePemanas() {
    if (this.kondisiPemanas == true) {
      this.pemanas = 'Berfungsi';
    } else {
      this.pemanas = 'Tidak Berfungsi';
    }
  }

  toggleKondisiTutup() {
    if (this.kondisiTutup == true) {
      this.tutup = 'Berfungsi';
    } else {
      this.tutup = 'Tidak Berfungsi';
    }
  }

  getStore(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getStore(token).subscribe(
        (response: any) => {
         this.stores = response.data.store;
         console.log(this.stores)
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
      this.sellingApiService.getBrandMesinCuci(token).subscribe(
        (response: any) => {
         this.data_brand = response.data.brand;
         this.data_type = response.data.type;
         console.log(this.data_brand)
        },
        (err) => {
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  async submit() {
    if ((this.brand == null || this.type == null || this.lokasi_trade == null)){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else if((this.condition == "Mati")){
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
        component: ModalFormMesincuciComponent,
        cssClass: 'my-custom-modal-tolak-css',
        backdropDismiss: false,
        id: 'my-modal-id',
        componentProps: {
          brand: this.brand,
          type: this.type,
          condition: this.condition,
          kondisi_fisik:this.kondisi_fisik,
          rubber:this.rubber,
          tutup:this.tutup,
          tombol:this.tombol,
          pembuangan:this.pembuangan,
          pengering:this.pengering,
          air_otomatis:this.air_otomatis,
          pemanas:this.pemanas,
          lokasi_trade: this.lokasi_trade
        }
      });
      return await modalAlert.present();
    }
  } 

  // submit() {
  //   if ((this.brand == null || this.type == null || this.lokasi_trade == null ) || (this.brand.replace(/\s/g, "") == "")){
  //     this.utilsService.showToast("Lengkapi pengisian form.");
  //   } 
  //   else if((this.condition == "Mati Total")){
  //     alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
  //   } 
  //   else {
  //     this.presentAlertConfirm();
  //   }
  // } 

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Apakah data yang di pilih sudah sesuai dengan kondisi yang sebenarnya?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'yourClass',
          handler: () => {}
        }, {
          text: 'Lanjut',
          handler: () => {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                  brand: this.brand,
                  type: this.type,
                  condition: this.condition,
                  kondisi_fisik:this.kondisi_fisik,
                  rubber:this.rubber,
                  tutup:this.tutup,
                  tombol:this.tombol,
                  pembuangan:this.pembuangan,
                  pengering:this.pengering,
                  air_otomatis:this.air_otomatis,
                  pemanas:this.pemanas,
                  lokasi_trade: this.lokasi_trade

              }
            };
            this.navCtrl.navigateForward(["/landing/mesin-cuci-brand/detail-mesin-cuci"], navigationExtras);
              
          }
        }, 
      ]
    });
    await alert.present();
  }

}
