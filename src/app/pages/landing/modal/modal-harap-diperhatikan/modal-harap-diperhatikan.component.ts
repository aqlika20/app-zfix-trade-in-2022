import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { UtilitiesService } from "../../../../services/utilities.service";

@Component({
  selector: 'app-modal-harap-diperhatikan',
  templateUrl: './modal-harap-diperhatikan.component.html',
  styleUrls: ['./modal-harap-diperhatikan.component.scss'],
})
export class ModalHarapDiperhatikanComponent implements OnInit {
  agree: boolean;

  constructor(
    public ModalController: ModalController,
    private storage: Storage,
    public utilsService: UtilitiesService

  ) { }

  ngOnInit() {

  }

  dismissModal() {
    this.ModalController.dismiss({ 
      'dismissed': true
    });
  }

  checkboxClick() {
    console.log(this.agree);
  }

  submit(event) {
    if (event.detail.checked == true) {
    this.storage.set('Warning', true);
      this.utilsService.showToast("berhasil");  
    } else {
      this.ModalController.dismiss({ 
        'dismissed': true
      });
      this.utilsService.showToast("gagal!");
      console.log("hasilnya"+this.agree)
    }

  }

}
