import { Component, OnInit } from '@angular/core';
import { SellingApiService } from './../../../../services/api/selling-api.service';
import { HelperService } from '../../../../services/helper.service';
import { Device } from "@ionic-native/device/ngx";
import { UtilitiesService } from '../../../../services/utilities.service';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
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
import { ModalFormPsComponent } from 'src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component';
import { AlarmUnitTolakComponent } from 'src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component';

declare var cordova: any;
type Stores = {id: number, name: string};
@Component({
  selector: 'app-ps-brand',
  templateUrl: './ps-brand.page.html',
  styleUrls: ['./ps-brand.page.scss'],
})
export class PsBrandPage implements OnInit {
  storages: string;
  type: string;
  condition_valueSelected:string;
  addition_valueSelected:string;
  lokasi_trade: string;
  model:string;
  more_addition:string;
  kondisi_ps:string;
  body:string;
  console:string;
  port:string;
  add_games:string;
  jenis_ps:string;

  stores: any = [];
  searchedStores: any = [];
  data_brand:any = [];
  data_type:any = [];
  data_storages:any = [];
  data_jenis:any = [];

  selected_varian:string;
  selected_model:string;
  selected_storage:string;
  selected_stick:string;

  kondisiPlaystation: boolean = false;
  addOnGame: boolean = false;
  stickNormal: boolean = false;
  usbNormal: boolean = false;

  searchStore;
  
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
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    public modalController: ModalController,

  ) { }

  ngOnInit() {
    this.getStore();
    this.toggleKondisiPS();
    this.toggleAddGame();
    this.toggleStick();
    this.togglePort();
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

  selectVarian(val){
    this.selected_varian = val;
    
    document.querySelectorAll('.ps-varian-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }
  
  selectModel(val){
    this.selected_model = val;
    
    document.querySelectorAll('.ps-model-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectStorage(val){
    this.storages = val;
    
    document.querySelectorAll('.ps-storage-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectStick(val){
    this.condition_valueSelected = val;
    
    document.querySelectorAll('.ps-stick-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  toggleKondisiPS() {
    if (this.kondisiPlaystation == true) {
      this.kondisi_ps = 'Nyala';
    } else {
      this.kondisi_ps = 'Mati';
    }
  }

  toggleAddGame() {
    if (this.addOnGame == true) {
      this.add_games = 'Terisi Game';
    } else {
      this.add_games = 'Tidak Terisi';
    }
  }

  toggleStick() {
    if (this.stickNormal == true) {
      this.console = 'Berfungsi Normal';
    } else {
      this.console = 'Tidak Berfungsi Normal';
    }
  }

  togglePort() {
    if (this.usbNormal == true) {
      this.port = 'Berfungsi Normal';
    } else {
      this.port = 'Tidak Berfungsi Normal';
    }
  }

  radioSelectKelengkapan(event) {
    this.addition_valueSelected = event.detail.value;
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
      this.sellingApiService.getBrandPS(token).subscribe(
        (response: any) => {
         this.data_brand = response.data.brand;
         this.data_type = response.data.type;
         this.data_storages = response.data.storages;
         this.data_jenis = response.data.jenis_ps;
         console.log(this.data_jenis)
        },
        (err) => {
          console.log(err)
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  async submit() {
    if ((this.selected_varian == null || this.condition_valueSelected == null || this.storages == null || this.selected_model == null || this.addition_valueSelected == null) ){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else if(this.kondisi_ps == "Mati"){
        const modalSubmit = await this.modalController.create({
          component: AlarmUnitTolakComponent,
          cssClass: 'my-custom-modal-css',
          backdropDismiss: false,
          id: 'my-modal-id'
        });
        return await modalSubmit.present();
      
    } else {
      const modalSubmit = await this.modalController.create({
        component: ModalFormPsComponent,
        cssClass: 'my-custom-modal-css',
        backdropDismiss: false,
        id: 'my-modal-id',
        componentProps: {
          jenis_ps:this.selected_varian,
          storages: this.storages,
          type: this.selected_model,
          lokasi_trade: this.lokasi_trade,
          condition:this.condition_valueSelected,
          addition:this.addition_valueSelected,
          kondisi_ps:this.kondisi_ps,
          console:this.console,
          port:this.port,
          add_games:this.add_games,
        }
      });
      return await modalSubmit.present();
    
    }
  } 

  // async openModal(event){
  //   const modal = await this.modalCtrl.create({
  //     component: PsBrandModalComponent,
  //     cssClass: 'small-modal'
  //   });

  //   await modal.present();
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
                  storages: this.storages,
                  type: this.type,
                  lokasi_tade: this.lokasi_trade,
                  condition_valueSelected:this.condition_valueSelected,
                  addition_valueSelected:this.addition_valueSelected,
                  kondisi_ps:this.kondisi_ps,
                  console:this.console,
                  port:this.port,
                  add_games:this.add_games,
                  jenis_ps:this.jenis_ps,
                }
            };
            this.navCtrl.navigateForward(["/landing/ps-brand/detail-unit-ps"], navigationExtras);
              
          }
        }, 
      ]
    });
    await alert.present();
  }
}
