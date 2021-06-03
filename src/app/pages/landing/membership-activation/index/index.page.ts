import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { MembershipApiService } from "../../../../services/api/membership-api.service";
import { UtilitiesService } from '../../../../services/utilities.service';
import { MembershipService } from "../../../../services/membership.service";
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';

type Stores = {id: number, name: string};

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  code: string;
  imei: string; 
  imeiEditable: boolean = true;
  lokasi_beli_voucher: string;
  stores: any = [];
  searchedStores: any = [];

  searchStore;

  constructor(
    private storage: Storage,
    private uid: Uid, 
    private androidPermissions: AndroidPermissions, 
    private platform: Platform, 
    private membershipApiService: MembershipApiService,
    private utilsService: UtilitiesService, 
    private membership: MembershipService,
    public navCtrl: NavController,
    private router: Router,
    private splashScreen: SplashScreen,

  ) {
    let platforms = this.platform.platforms();
    // console.log(platforms[0]);
    if (platforms[0] == "android") {
      this.imei = this.uid.IMEI;
      
      if(this.imei != null){
        this.imeiEditable = false
      }

    }
  }

  ngOnInit() {
    this.getPermission();
  }

  ionViewWillEnter() {
    this.getStore();
    this.membership.removeMembershipActivation();    

  }

  getPermission() {
    this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    ).then(res => {
      if(res.hasPermission){
        
      }
      else{
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
          this.utilsService.restart("Aplikasi akan memulai kembali secara otomatis untuk menampilkan IMEI.");
          
        }).catch(error => {
          this.utilsService.showAlert(error);
        });
      }
    }).catch(error => {
      this.utilsService.showAlert(error);
    });
  }

  getStore(){
    this.storage.get(tokenKey).then((token) => {
      this.membershipApiService.getStore(token).subscribe(
        (response) => {
         this.stores = response;
         this.searchedStores = this.stores;
         console.log(this.searchedStores)
        },
        (err) => {
          this.stores = [];
          this.searchedStores = [];

          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  formatter = (store: Stores) => store.name;

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(100),
    distinctUntilChanged(),
    filter(term => term.length >= 1),
    map(term => this.searchedStores.data?.store.filter(store => new RegExp(term, 'mi').test(store.name)).slice(0, 5))
  )

  submit() {
    if ((this.code == null || this.imei == null || this.lokasi_beli_voucher == null )  || (this.code.replace(/\s/g, "") == "")){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else {
      this.storage.get(tokenKey).then((token) => {
        let membershipActivation = {
          request_code: 0,
          voucher_key: this.code,
          lokasi_beli_voucher: this.lokasi_beli_voucher['name'],
          imei: String(this.imei),
        }
        this.membershipApiService.check(token, membershipActivation).subscribe(
          (response) => {
            console.log(this.lokasi_beli_voucher)
            let navigationExtras: NavigationExtras = {
              queryParams: {
                  code: this.code,
                  imei: this.imei,
                  lokasi_beli_voucher: this.lokasi_beli_voucher['name'],
              }
            };
            this.navCtrl.navigateForward(["/landing/membership-activation/device-detail"], navigationExtras);
          },
          (err) => {
            var error: any = {}
            error = err.error
            this.utilsService.showToast(error.message);
          }
        );
      });
    }
  }

}
