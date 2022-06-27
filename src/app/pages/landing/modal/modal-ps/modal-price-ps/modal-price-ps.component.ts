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
  selector: 'app-modal-price-ps',
  templateUrl: './modal-price-ps.component.html',
  styleUrls: ['./modal-price-ps.component.scss'],
})
export class ModalPricePsComponent implements OnInit {
  storages: string;
  type: string;
  condition:string;
  addition:string;
  lokasi_trade: string;
  model:string;
  more_addition:string;
  kondisi_ps:string;
  body:string;
  console:string;
  port:string;
  add_games:string;
  jenis_ps:string;
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
          jenis_ps: this.jenis_ps,
          storages: this.storages,
          type: this.type,
        }
        // console.log(deviceActivity)
        this.sellingApiService.getPsDetail(token, data).subscribe(
          (response) => {
            this.response = response,
            this.formatPrice = new Intl.NumberFormat('id-ID').format(this.response.data);
            this.price = this.response.data
          }
        )
    });
  }

  async submit() {
    this.storage.get(tokenKey).then((token) => {
      let data = {
          jenis_ps:this.jenis_ps,
          storages: this.storages,
          type: this.type,
          lokasi_trade: this.lokasi_trade,
          condition:this.condition,
          addition:this.addition,
          kondisi_ps:this.kondisi_ps,
          console:this.console,
          port:this.port,
          add_games:this.add_games,
          price:this.price,
      }
      console.log(data)
      this.sellingApiService.sellPs(token, data).subscribe(
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
