import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPricePsComponent } from 'src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component';

@Component({
  selector: 'app-modal-form-ps',
  templateUrl: './modal-form-ps.component.html',
  styleUrls: ['./modal-form-ps.component.scss'],
})
export class ModalFormPsComponent implements OnInit {

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
        component: ModalPricePsComponent,
        cssClass: 'my-custom-modal-price-css',
        backdropDismiss: false,
        id: 'my-modal-id',
        componentProps: { 
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
        },
      });
      return await modalSubmit.present();
    }

}
