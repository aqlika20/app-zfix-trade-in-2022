import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-modal-qr',
  templateUrl: './modal-qr.component.html',
  styleUrls: ['./modal-qr.component.scss'],
})
export class ModalQrComponent implements OnInit {

  voucher_key: string;
  id: string;
  
  constructor(
    public ModalController: ModalController,
    private NgxQRCodeModule: NgxQRCodeModule
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.ModalController.dismiss({ 
      'dismissed': true
    });
  }

}
