import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alarm-unit-tolak',
  templateUrl: './alarm-unit-tolak.component.html',
  styleUrls: ['./alarm-unit-tolak.component.scss'],
})
export class AlarmUnitTolakComponent implements OnInit {

  constructor(
    private ModalController: ModalController

  ) { }

  ngOnInit() {}

  dismissModal() {
    this.ModalController.dismiss({ 
      'dismissed': true
    });
  }

}
