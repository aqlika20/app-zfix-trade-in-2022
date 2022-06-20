import { Component, OnInit } from '@angular/core';
import { SellingApiService } from '../../../services/api/selling-api.service';
import { tokenKey } from "../../../config/api";
import { Storage } from "@ionic/storage";
import { UtilitiesService } from '../../../services/utilities.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notification: any = [];

  constructor(
    private storage: Storage,
    private sellingApiService: SellingApiService,
  ) { }

  ngOnInit() {
    this.getNotif();
  }

  getNotif(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getNotification(token).subscribe(
        (response: any) => {
        this.notification = response.data;
        console.log(this.notification)
        },
        (err) => {
        }
      );
    });

    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.readNotification(token).subscribe(
        (success) => {
        
        },
        (err) => {
        }
      );
    });

  }

}
