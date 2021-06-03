import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  rootPage: any = 'Tabs';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
    public storage: Storage,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
       setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);

      this.authService.checkToken();

      setTimeout(() => {
        this.authService.authenticationState.subscribe(state => {
       
          // console.log(state);

          if (state) {
            this.router.navigate(['landing', 'home']);
          }
          else {
            this.storage.get('introShown').then((result) => { 
              if(result){
                this.router.navigate(['login']);
              } else {
                this.router.navigate(['intro']);
                this.storage.set('introShown', true);
              }
            });
            // this.router.navigate(['login']);
          }
        })
      }, 1000);
      
    });
  }
}
  

