import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { MembershipService } from "../../../../../services/membership.service";
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../../config/api";
import { MembershipApiService } from "../../../../../services/api/membership-api.service";
import { ActivationKey } from "../../../../../config/api";
import { SellingApiService } from './../../../../../services/api/selling-api.service';
import { UtilitiesService } from "../../../../../services/utilities.service";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ModalController } from '@ionic/angular';

declare var cordova: any;

@Component({
  selector: 'app-modal-price-mesincuci',
  templateUrl: './modal-price-mesincuci.component.html',
  styleUrls: ['./modal-price-mesincuci.component.scss'],
})
export class ModalPriceMesincuciComponent implements OnInit {

  brand: string;
  type: string;
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
  response: any = {}
  price:string;
  formatPrice:string;

  constructor(
    private selling: MembershipService,
    private router: Router,
    private storage: Storage,
    private sellingApiService: SellingApiService,
    private activatedRoute: ActivatedRoute,
    public utilsService: UtilitiesService,
    private localNotifications: LocalNotifications,
    private ModalController: ModalController
  ) { }

  ngOnInit() {
    this.getData();
  }

  dismissModal() {
    this.ModalController.dismiss({ 
      'dismissed': true
    });
  }

  getData(){
    this.storage.get(tokenKey).then((token) => {
  
        let data = {
          brand: this.brand,
          type: this.type,
        }
        // console.log(deviceActivity)
        this.sellingApiService.getMesinCuciDetail(token, data).subscribe(
          (response) => {
            this.response = response,
            this.price = this.response.data,
            this.formatPrice = new Intl.NumberFormat('id-ID').format(this.response.data);
          }
        )
    });
  }

  async submit(){
    this.storage.get(tokenKey).then((token) => {
      let data ={
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
          lokasi_trade: this.lokasi_trade,
          price: this.price
      }
      this.sellingApiService.sellMesinCuci(token, data).subscribe(
       (success) => {
        this.storage.get('Reviews').then((result) => { 
          if(result){
            this.utilsService.showToast("Permintaan berhasil di ajukan.");
            this.router.navigate(["landing/type"]);
          } else {
            this.utilsService.showToast("Permintaan berhasil di ajukan.");
            this.router.navigate(["landing/type"]);
            this.storage.set('Reviews', true);
                cordova.plugins.AppReview.requestReview().catch(function() {
                return cordova.plugins.AppReview.openStoreScreen();
            });
          }
        });
       },
       (err) => {
         var error: any = {}
         error = err.error
         this.utilsService.showToast(error.message);        
       }
     )
    });

    this.localNotifications.schedule({
      id: 1,
      text: 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih',
      data: { secret: 'secret' }
    });
    await this.ModalController.dismiss();
  }

}
 