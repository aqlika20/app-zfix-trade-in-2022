import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-harap-diperhatikan',
  templateUrl: './modal-harap-diperhatikan.component.html',
  styleUrls: ['./modal-harap-diperhatikan.component.scss'],
})
export class ModalHarapDiperhatikanComponent implements OnInit {

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
