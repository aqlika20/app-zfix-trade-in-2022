import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-price',
  templateUrl: './modal-price.component.html',
  styleUrls: ['./modal-price.component.scss'],
})
export class ModalPriceComponent implements OnInit {

  constructor(
    public ModalController: ModalController,

  ) { }

  ngOnInit() {}

  dismissModal() {
    this.ModalController.dismiss({ 
      'dismissed': true
    });
  }

}
