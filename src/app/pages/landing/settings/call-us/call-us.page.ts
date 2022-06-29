import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx/index';

@Component({
  selector: 'app-call-us',
  templateUrl: './call-us.page.html',
  styleUrls: ['./call-us.page.scss'],
})
export class CallUsPage implements OnInit {
  option: string;
  reason: string;
  description: string;

  sendObj = {
    to: '',
    subject:'',
    body:''
  }

  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  customPopoverOptions: any = {
    header: "What's Your Problem"
  };

  sendEmail(){
    let email = {
      to: 'cs@zfix.id',
      subject: this.option +'-'+ this.reason,
      body: this.description,
      isHtml: true
      }; 
    
    this.emailComposer.open(email);
  }  
 
}
