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
import { ModalPriceComponent } from 'src/app/pages/landing/modal/modal-price/modal-price.component';

@Component({
  selector: 'app-kulkas-brand',
  templateUrl: './kulkas-brand.page.html',
  styleUrls: ['./kulkas-brand.page.scss'],
})
export class KulkasBrandPage implements OnInit {

  brand: string;
  model: string;
  type: string;
  data_brand:any = [];
  data_model:any = [];
  data_type:any = [];
  condition: string;
  kondisi_fisik: string;
  rubber: string;
  tutup_freezer: string;
  tray: string;
  ice_maker: string;
  lokasi_trade: string;
  stores: any = [];

  selected_merk:string;
  selected_tipe:string;
  selected_model:string;
  selected_fisik:string;

  kondisiKulkas: boolean = false;
  kondisiRubber: boolean = false;
  kondisiTutupFreezer: boolean = false;
  kondisiTray: boolean = false;
  kondisiFreezer: boolean = false;
  
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
  }

  ionViewWillEnter() {
    this.getStore();
    this.getBrand();
    this.selling.removeSelling();
  }
 
  async openModalSubmit(event) {
    const modalSubmit = await this.modalController.create({
      component: ModalPriceComponent,
      cssClass: 'my-custom-modal-css',
      backdropDismiss: false,
      id: 'my-modal-id'
    });
    return await modalSubmit.present();
  }
  customPopoverOptions: any = {
    header: 'Pilih Tempat Trade In',
    message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
  };

  showMore(){

    if(this.showHidden === true){

      this.showHidden = false;
      document.getElementById("hide").hidden = false;

    }else if(this.showHidden === false){

      this.showHidden = true;
      document.getElementById("hide").hidden = true;

    }
  }

  selectMerk(val){
    this.selected_merk = val;
    
    document.querySelectorAll('.kulkas-merk-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }
  
  selectTipe(val){
    this.selected_tipe = val;
    
    document.querySelectorAll('.kulkas-tipe-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectModel(val){
    this.selected_model = val;
    
    document.querySelectorAll('.kulkas-model-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectFisik(val){
    this.selected_fisik = val;
    
    document.querySelectorAll('.kulkas-fisik-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
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
      this.sellingApiService.getBrandKulkas(token).subscribe(
        (response: any) => {
         this.data_brand = response.data.brand;
         this.data_model = response.data.model;
         this.data_type = response.data.type;
         console.log(this.data_brand)
        },
        (err) => {
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  submit() {
    if ((this.brand == null || this.type == null || this.lokasi_trade == null || this.model == null ) || (this.brand.replace(/\s/g, "") == "")){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else if((this.condition == "Mati Total")){
      alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
    } 
    else {
      this.presentAlertConfirm();
    }
  } 

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
                  model: this.model,
                  condition: this.condition,
                  kondisi_fisik:this.kondisi_fisik,
                  rubber:this.rubber,
                  tutup_freezer:this.tutup_freezer,
                  tray:this.tray,
                  ice_maker:this.ice_maker,
                  lokasi_trade: this.lokasi_trade

              }
            };
            this.navCtrl.navigateForward(["/landing/kulkas-brand/detail-kulkas"], navigationExtras);
              
          }
        }, 
      ]
    });
    await alert.present();
  }

}
