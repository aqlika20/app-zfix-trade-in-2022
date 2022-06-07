import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { SellingApiService } from './../../../../services/api/selling-api.service';
import { UtilitiesService } from '../../../../services/utilities.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.page.html',
  styleUrls: ['./outlet.page.scss'],
})
export class OutletPage implements OnInit {
  stores: any = [];
  destination:string;
  destinations:string;
  start:string;
  
  constructor(
    private storage: Storage,
    private sellingApiService: SellingApiService,
    public utilsService: UtilitiesService, 
    private launchNavigator: LaunchNavigator,
  ) 
  {
    this.start = "";
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getStore();
  }

    getStore(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getStore(token).subscribe(
        (response: any) => {
         this.stores = response.data.store;
         this.destinations = this.stores;
         console.log(this.stores)
        },
        (err) => {
          this.stores = [];

          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  navigate(address){
    let options: LaunchNavigatorOptions = {
        start: this.start
    };

    this.launchNavigator.navigate(address, options)
        .then(
            success => alert('Launched navigator'),
            error => alert('Error launching navigator: ' + error)
        );
}
  

}
