import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPriceMesincuciComponent } from 'src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component';


@Component({
  selector: 'app-modal-form-mesincuci',
  templateUrl: './modal-form-mesincuci.component.html',
  styleUrls: ['./modal-form-mesincuci.component.scss'],
})
export class ModalFormMesincuciComponent implements OnInit {

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

  constructor(
    private ModalController: ModalController

  ) { }

  ngOnInit() {}

  dismissModal() {
    this.ModalController.dismiss({ 
      'dismissed': true
    });
  }

  async openModalNext(event) {
    await this.ModalController.dismiss();
      const modalSubmit = await this.ModalController.create({
        component: ModalPriceMesincuciComponent,
        cssClass: 'my-custom-modal-price-css',
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
        },
      });
      return await modalSubmit.present();
    }
} 
