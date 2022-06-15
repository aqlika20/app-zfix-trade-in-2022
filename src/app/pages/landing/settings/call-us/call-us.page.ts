import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx/index';

@Component({
  selector: 'app-call-us',
  templateUrl: './call-us.page.html',
  styleUrls: ['./call-us.page.scss'],
})
export class CallUsPage implements OnInit {

  sendObj = {
    to: '',
    subject:'',
    body:''
  }

  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  sendEmail(){
    let email = {
      to: 'aqlika@macantech.asia',
      subject: 'tes',
      body: 'test',
      isHtml: true
      }; 
    
    this.emailComposer.open(email);
  }  
 
}
