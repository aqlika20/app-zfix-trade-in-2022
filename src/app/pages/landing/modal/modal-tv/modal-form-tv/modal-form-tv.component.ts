import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPriceTvComponent } from 'src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component';

@Component({
  selector: 'app-modal-form-tv',
  templateUrl: './modal-form-tv.component.html',
  styleUrls: ['./modal-form-tv.component.scss'],
})
export class ModalFormTvComponent implements OnInit {

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

  constructor(
    private ModalController: ModalController

  ) { }

  ngOnInit() {
  }

  dismissModal() {
    this.ModalController.dismiss({ 
      'dismissed': true
    });
  }

  async openModalNext(event) {
    await this.ModalController.dismiss();
      const modalSubmit = await this.ModalController.create({
        component: ModalPriceTvComponent,
        cssClass: 'my-custom-modal-price-css',
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
          suara:this.suara,
          kondisi_tv:this.kondisi_tv,
          kondisi_layar:this.kondisi_layar,
          inch:this.inch
        },
      });
      return await modalSubmit.present();
    }
} 
