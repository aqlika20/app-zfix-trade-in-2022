import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ps-brand-modal',
  templateUrl: './ps-brand-modal.component.html',
  styleUrls: ['./ps-brand-modal.component.scss'],
})
export class PsBrandModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
