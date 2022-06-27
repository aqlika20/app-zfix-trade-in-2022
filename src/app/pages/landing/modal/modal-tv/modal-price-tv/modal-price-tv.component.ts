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
  selector: 'app-modal-price-tv',
  templateUrl: './modal-price-tv.component.html',
  styleUrls: ['./modal-price-tv.component.scss'],
})
export class ModalPriceTvComponent implements OnInit {
  response: any = {}
  brand: string;
  jenis: string;
  inner_valueSelected:string;
  outer_valueSelected:string;
  condition_valueSelected:string;
  addition_valueSelected:string;
  lokasi_trade: string;
  inch: string;
  kondisi_tv:string;
  kondisi_layar:string;
  portSelected: string;
  wifiSelected:string;
  suara:string;
  price:string;
  formatPrice:string;

  constructor(
    public ModalController: ModalController,
    private selling: MembershipService,
    private router: Router,
    private storage: Storage,
    private sellingApiService: SellingApiService,
    private activatedRoute: ActivatedRoute,
    public utilsService: UtilitiesService,
    private localNotifications: LocalNotifications
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
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
          jenis_tv: this.jenis,
          inch: this.inch,
          inner_screen: this.inner_valueSelected,
          outer_screen: this.outer_valueSelected,
          condition: this.condition_valueSelected,
          addition: this.addition_valueSelected,
        }
        console.log(data)
        this.sellingApiService.getTvDetail(token, data).subscribe(
          (response) => {
            this.response = response,
            this.formatPrice = new Intl.NumberFormat('id-ID').format(this.response.data);
            this.price = this.response.data
            console.log(this.price)
          }
        )
    });
  }

  async submit(){
    this.storage.get(tokenKey).then((token) => {
      let data ={
          brand: this.brand,
          jenis: this.jenis,
          lokasi_trade: this.lokasi_trade,
          inner_screen: this.inner_valueSelected,
          outer_screen:this.outer_valueSelected,
          condition:this.condition_valueSelected,
          addition:this.addition_valueSelected,
          suara:this.suara,
          kondisi_tv:this.kondisi_tv,
          kondisi_layar:this.kondisi_layar,
          inch:this.inch,
          price:this.price
      }
      this.sellingApiService.sellTv(token, data).subscribe(
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
