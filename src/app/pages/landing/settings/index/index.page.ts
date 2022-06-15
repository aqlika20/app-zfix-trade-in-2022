import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { UserApiService } from "../../../../services/api/user-api.service";
import { AuthenticationService } from "../../../../services/authentication.service";
import { UtilitiesService } from "../../../../services/utilities.service";
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  user: any = {};
  VersionNumber:string;

  constructor(
    private authService: AuthenticationService,
    private storage: Storage,
    private userApiService: UserApiService,
    public utilsService: UtilitiesService,
    private appVersion: AppVersion
  ) { 

    this.appVersion.getVersionNumber().then(value => {
      this.VersionNumber = value;
    }).catch(err => {
      alert(err);
    });

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUser();
  }

  getUser() {
    this.storage.get(tokenKey).then((token) => {
      this.userApiService.userDetail(token).subscribe(
        (response) => {
          this.user = response;
          
        },
        (err) => {
          this.user = [];
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  logout() {
    this.authService.logout();
  }

}
