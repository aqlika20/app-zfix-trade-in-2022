import { Component, OnInit } from '@angular/core';
import { AuthenticationApiService } from '../../services/api/authentication-api.service';
import { AuthenticationService } from '../../services/authentication.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  credential: any = {}

  constructor(private authApiService: AuthenticationApiService, private authService: AuthenticationService, private utilsService: UtilitiesService) { }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.credential = {}
  }

  register() {
    if ((this.credential.email == null || this.credential.name == null || this.credential.contact == null || this.credential.address == null || this.credential.identity == null || this.credential.birth_date == null || this.credential.gender == null || this.credential.password == null || this.credential.confirm_password == null) || (this.credential.email.replace(/\s/g, "") == "" || this.credential.name.replace(/\s/g, "") == ""  || this.credential.contact.replace(/\s/g, "") == ""  || this.credential.address.replace(/\s/g, "") == ""  || this.credential.identity.replace(/\s/g, "") == ""  || this.credential.birth_date.replace(/\s/g, "") == "" || this.credential.gender.replace(/\s/g, "") == "" || this.credential.password.replace(/\s/g, "") == ""  || this.credential.confirm_password.replace(/\s/g, "") == "" )){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else {
      this.utilsService.showToast('Tunggu Sebentar.');
      this.authApiService.register(this.credential).subscribe(response => {
        var raw: any = response;
        this.authService.login(raw.data.access_token);
      }, (err) => {
        var error: any = {}
        var errors: any = []
        error = err.error.message;
        errors = err.error.messages?.confirm_password[0];
        
        
        if(errors) {
          this.utilsService.showToast(errors);
          return
        }
        if(error) {
          this.utilsService.showToast(error);
          return
        }
       
      });
    }
  }
}
