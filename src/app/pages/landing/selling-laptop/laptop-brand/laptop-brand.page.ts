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
import { AlarmUnitTolakComponent } from 'src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component';
import { AlarmFormNullComponent } from 'src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component';

type Stores = {id: number, name: string}; 

@Component({
  selector: 'app-laptop-brand',
  templateUrl: './laptop-brand.page.html',
  styleUrls: ['./laptop-brand.page.scss'],
})
export class LaptopBrandPage implements OnInit {
  brand: string;
  memory: string;
  storages: string; 
  inner_valueSelected:string;
  outer_valueSelected:string;
  condition_valueSelected:string;
  addition_valueSelected:string;
  lokasi_trade:string;
  jenis_storage:string;
  kondisi_laptop:string;
  jenis_layar:string;
  baterai:string;
  kondisi_layar:string;
  keyboard:string;
  trackpad:string;
  port:string;
  wifi:string;
  camera:string;
  speaker:string;
  processor:string;
  ukuran_laptop:string;
  os:string;
  more_addition:string;

  stores: any = [];
  searchedStores: any = [];
  data_brand:any = [];
  data_storage:any = [];
  data_memory:any = [];
  data_processor:any = [];
  data_jenis_storage:any = ['HDD/SATA', 'SSD'];
  data_storage_ssd:any = ['128GB', '256GB', '500GB', '512GB', '1TB']
  data_storage_hdd_sata:any = ['250GB', '500GB', '1TB']
  data_ukuran_laptop:any = ['10" - 12"inch', '13" - 15"inch']
  data_os:any = ['Windows', 'MacOs', 'Non Operating System']

  selected_merk:string;
  selected_jenis:string;
  selected_suara:string;
  selected_ukuran:string;
  selected_os:string;
  selected_ram:string;
  selected_fisik:string;
  selected_baterai:string;
  selected_kelengkapan:string;

  kondisiLaptop: boolean = false;
  kondisiTouch: boolean = false;
  kondisiLcd: boolean = false;
  kondisiLayarLuar: boolean = false;
  kondisiKeyboard: boolean = false;
  kondisiTrackpad: boolean = false;
  kondisiPort: boolean = false;
  kondisiBluetooth: boolean = false;
  kondisiSpeaker: boolean = false;

  showHidden: boolean = true;

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
    public modalController: ModalController,

  ) {} 

  ngOnInit() {
    this.getStore();
    this.toggleKondisiLaptop();
    this.toggleTouchscreen();
    this.toggleKondisiLayar();
    this.toggleKondisiLayarLuar();
    this.toggleKeyboard();
    this.toggleTrackpad();
    this.togglePort();
    this.toggleBluetooth();
    this.toggleSpeaker();
  }
  
  ionViewWillEnter() {
    this.getStore();
    this.selling.removeSelling();
    this.getBrand();
  }

  customPopoverOptions: any = {
    header: 'Pilih Tempat Trade In',
    message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
  };

  customPopoverProcessor: any = {
    header: 'Pilih Processor'
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
    this.selected_merk = val;
    
    document.querySelectorAll('.laptop-merk-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }
  
  selectJenis(val){
    this.selected_jenis = val;
    
    document.querySelectorAll('.laptop-jenis-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectUkuran(val){
    this.selected_ukuran = val;
    
    document.querySelectorAll('.laptop-ukuran-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectOs(val){
    this.selected_os = val;
    
    document.querySelectorAll('.laptop-os-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectRam(val){
    this.selected_ram = val;
    
    document.querySelectorAll('.laptop-ram-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectFisik(val){
    this.selected_fisik = val;
    
    document.querySelectorAll('.laptop-fisik-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectBaterai(val){
    this.selected_baterai = val;
    
    document.querySelectorAll('.laptop-baterai-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  selectKelengkapan(val){
    this.selected_kelengkapan = val;
    
    document.querySelectorAll('.laptop-kelengkapan-select').forEach(element => {
      element.classList.remove("selected");
    });
    
    var element = document.getElementById(val);
    element.classList.add("selected");
  }

  radioSelect(event) {
    this.kondisi_layar = event.detail.value;
  }

  toggleKondisiLaptop() {
    if (this.kondisiLaptop == true) {
      this.kondisi_laptop = 'Nyala';
    } else {
      this.kondisi_laptop = 'Mati Total';
    }
  }

  toggleTouchscreen() {
    if (this.kondisiTouch == true) {
      this.jenis_layar = 'Touchscreen';
    } else {
      this.jenis_layar = 'Non Touchscreen';
    }
  }

  toggleKondisiLayar() {
    if (this.kondisiLcd == true) {
      this.kondisi_layar = 'Normal';
    } else {
      this.kondisi_layar = 'Layar Bermasalah';
    }
  }

  toggleKondisiLayarLuar() {
    if (this.kondisiLayarLuar == true) {
      this.outer_valueSelected = 'Normal';
    } else {
      this.outer_valueSelected = 'Layar Bermasalah';
    }
  }

  toggleKeyboard() {
    if (this.kondisiKeyboard == true) {
      this.keyboard = 'Normal';
    } else {
      this.keyboard = 'Tidak Berfungsi';
    }
  }

  toggleTrackpad() {
    if (this.kondisiTrackpad == true) {
      this.trackpad = 'Normal';
    } else {
      this.trackpad = 'Tidak Berfungsi';
    }
  }

  togglePort() {
    if (this.kondisiPort == true) {
      this.port = 'Berfungsi';
    } else {
      this.port = 'Tidak Berfungsi';
    }
  }

  toggleBluetooth() {
    if (this.kondisiBluetooth == true) {
      this.wifi = 'Berfungsi';
    } else {
      this.wifi = 'Tidak Berfungsi';
    }
  }

  toggleSpeaker() {
    if (this.kondisiSpeaker == true) {
      this.speaker = 'Berfungsi';
    } else {
      this.speaker = 'Tidak Berfungsi';
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
      this.sellingApiService.getBrandLaptop(token).subscribe(
        (response: any) => {
         this.data_brand = response.data.brand;
         this.data_storage = response.data.storages;
         this.data_memory = response.data.memory;
         this.data_processor = response.data.processor;
        //  console.log(this.data_brand)
        },
        (err) => {
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  async openModalSubmit(event) {

    if ((this.selected_merk == null || this.selected_jenis == null || this.selected_ram == null || this.selected_ukuran == null || this.selected_os == null || this.selected_fisik == null || this.selected_baterai == null || this.selected_kelengkapan == null ))
    {
      this.utilsService.showToast("Lengkapi pengisian form.");

    } else if(this.kondisi_laptop == "Mati Total"){
      const modalAlert = await this.modalController.create({
        component: AlarmUnitTolakComponent,
        cssClass: 'my-custom-modal-tolak-css',
        backdropDismiss: false,
        id: 'my-modal-id'
      });
      return await modalAlert.present();

    } else {
      const modalSubmit = await this.modalController.create({
        component: AlarmFormNullComponent,
        cssClass: 'my-custom-modal-css',
        backdropDismiss: false,
        id: 'my-modal-id',
        componentProps: {
          brand: this.selected_merk,
          memory: this.selected_ram,
          lokasi_trade: this.lokasi_trade,
          outer_valueSelected:this.outer_valueSelected,
          condition_valueSelected:this.selected_fisik,
          addition_valueSelected:this. selected_kelengkapan,
          jenis_storage:this.selected_jenis,
          kondisi_laptop:this.kondisi_laptop,
          jenis_layar:this.jenis_layar,
          baterai:this.selected_baterai,
          kondisi_layar:this.kondisi_layar,
          keyboard:this.keyboard,
          trackpad:this.trackpad,
          port:this.port,
          wifi:this.wifi,
          camera:this.camera,
          speaker:this.speaker,
          processor:this.processor,
          ukuran_laptop:this.selected_ukuran,
          os:this.selected_os,
          more_addition:this.more_addition
        },
      });
      return await modalSubmit.present();

    }
  }

  // submit() {
  //   if ((this.selected_merk == null || this.selected_jenis == null || this.selected_ram == null || this.selected_ukuran == null || this.selected_os == null || this.selected_fisik == null || this.selected_baterai == null || this.selected_kelengkapan == null )){
  //     this.utilsService.showToast("Lengkapi pengisian form.");
  //     console.log(this.kondisi_laptop)
  //   } else if(this.kondisi_laptop == "Mati Total"){
  //     alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");

  //   }else {
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
                  brand: this.selected_merk,
                  memory: this.selected_ram,
                  lokasi_trade: this.lokasi_trade,
                  inner_valueSelected: this.inner_valueSelected,
                  outer_valueSelected:this.outer_valueSelected,
                  condition_valueSelected:this.selected_fisik,
                  addition_valueSelected:this. selected_kelengkapan,
                  jenis_storage:this.selected_jenis,
                  kondisi_laptop:this.kondisi_laptop,
                  jenis_layar:this.jenis_layar,
                  baterai:this.selected_baterai,
                  kondisi_layar:this.kondisi_layar,
                  keyboard:this.keyboard,
                  trackpad:this.trackpad,
                  port:this.port,
                  wifi:this.wifi,
                  camera:this.camera,
                  speaker:this.speaker,
                  processor:this.processor,
                  ukuran_laptop:this.selected_ukuran,
                  os:this.selected_os,
                  more_addition:this.more_addition

              }
            };
            this.navCtrl.navigateForward(["/landing/laptop-brand/detail-unit"], navigationExtras);
          }
        }, 
      ]
    });
    await alert.present();
  }

}