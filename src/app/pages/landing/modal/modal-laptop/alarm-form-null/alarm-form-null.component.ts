import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPriceComponent } from 'src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component';

@Component({
  selector: 'app-alarm-form-null',
  templateUrl: './alarm-form-null.component.html',
  styleUrls: ['./alarm-form-null.component.scss'],
})
export class AlarmFormNullComponent implements OnInit {

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
  price:string;

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
        component: ModalPriceComponent,
        cssClass: 'my-custom-modal-price-css',
        backdropDismiss: false,
        id: 'my-modal-id',
        componentProps: { 
          brand: this.brand,
          memory: this.memory,
          lokasi_trade: this.lokasi_trade,
          outer_valueSelected:this.outer_valueSelected,
          condition_valueSelected:this.condition_valueSelected,
          addition_valueSelected:this. addition_valueSelected,
          jenis_storage:this.jenis_storage,
          kondisi_laptop:this.kondisi_laptop,
          jenis_layar:this.jenis_layar,
          baterai:this.baterai,
          kondisi_layar:this.kondisi_layar,
          keyboard:this.keyboard,
          trackpad:this.trackpad,
          port:this.port,
          wifi:this.wifi,
          camera:this.camera,
          speaker:this.speaker,
          processor:this.processor,
          ukuran_laptop:this.ukuran_laptop,
          os:this.os,
          more_addition:this.more_addition,
          price: this.price,

        },
      });
      return await modalSubmit.present();

  }

}
