import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPriceKulkasComponent } from 'src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component';

@Component({
  selector: 'app-modal-form-kulkas',
  templateUrl: './modal-form-kulkas.component.html',
  styleUrls: ['./modal-form-kulkas.component.scss'],
})
export class ModalFormKulkasComponent implements OnInit {

  brand: string;
  model: string;
  type: string;
  condition: string;
  kondisi_fisik: string;
  rubber: string;
  tutup_freezer: string;
  tray: string;
  ice_maker: string;
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
        component: ModalPriceKulkasComponent,
        cssClass: 'my-custom-modal-price-css',
        backdropDismiss: false,
        id: 'my-modal-id',
        componentProps: { 
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

        },
      });
      return await modalSubmit.present();

  }
 
}
