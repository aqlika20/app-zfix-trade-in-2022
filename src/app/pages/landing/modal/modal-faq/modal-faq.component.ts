import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-faq',
  templateUrl: './modal-faq.component.html',
  styleUrls: ['./modal-faq.component.scss'],
})
export class ModalFaqComponent implements OnInit {

  constructor(
    public ModalController: ModalController
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.ModalController.dismiss({ 
      'dismissed': true
    });
  }

}
