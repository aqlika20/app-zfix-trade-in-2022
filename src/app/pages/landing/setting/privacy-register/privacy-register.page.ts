import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-privacy-register',
  templateUrl: './privacy-register.page.html',
  styleUrls: ['./privacy-register.page.scss'],
})
export class PrivacyRegisterPage implements OnInit {

  visability:boolean = false;
  checkBox: boolean;
  constructor(public navCtrl: NavController) { 
    this.checkBox = false;
  }

  ngOnInit() {
  }

  onChange(){
    let isChecked=false;
      if(this.checkBox == true){
        isChecked = true;
        this.visability = true;
      }
    
    if(isChecked == false){
      this.visability = false;
    }
  }
  
}
