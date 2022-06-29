import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-syarat-ketentuan',
  templateUrl: './syarat-ketentuan.component.html',
  styleUrls: ['./syarat-ketentuan.component.scss'],
})
export class SyaratKetentuanComponent implements OnInit {

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
