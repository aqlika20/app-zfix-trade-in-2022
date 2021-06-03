import { Component, OnInit } from "@angular/core";
import { Device } from "@ionic-native/device/ngx";
import { MembershipService } from "../../../../services/membership.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

declare var cordova: any;

@Component({
  selector: "app-device-detail",
  templateUrl: "./device-detail.page.html",
  styleUrls: ["./device-detail.page.scss"],
})
export class DeviceDetailPage implements OnInit {

  code: string;
  imei: string;
  type: string;
  version: string;
  manufacturer: string;
  model: string;
  ram: string;
  storage: string;
  lokasi_beli_voucher: string;

  constructor(
    private device: Device,
    private membership: MembershipService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getType();
    this.getManufacturer()
    this.getModel();
    this.getRam();
    this.getStorage();
    this.getVersion();

    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params["code"];
      this.imei = params["imei"];
      this.lokasi_beli_voucher = params["lokasi_beli_voucher"];
      console.log(this.lokasi_beli_voucher)
    });
  }

  getType() {
    this.type = this.device.platform;
  }

  getVersion(){
    this.version = this.device.version;
  }

  getManufacturer() {
    this.manufacturer = this.device.manufacturer;
  }

  getModel() {
    this.model = this.device.model;
  }

  getRam() {
    var raw = cordova.plugins['extended-device-information'].memory;
    raw = raw.replace(",",".");

    if (raw <= 256) {
      this.ram = "256 MB";
    }
    else if (raw <= 512) {
      this.ram = "512 MB";
    }
    else if (raw <= 768) {
      this.ram = "768 MB";
    }
    else if (raw <= 1000) {
      this.ram = "1 GB";
    }
    else if (raw <= 1500) {
      this.ram = "1.5 GB";
    }
    else if (raw <= 2000) {
      this.ram = "2 GB";
    }
    else if (raw <= 3000) {
      this.ram = "3 GB";
    }
    else if (raw <= 4000) {
      this.ram = "4 GB";
    }
    else if (raw <= 6000) {
      this.ram = "6 GB";
    }
    else if (raw <= 8000) {
      this.ram = "8 GB";
    }
    else if (raw <= 10000) {
      this.ram = "10 GB";
    }
    else if (raw <= 12000) {
      this.ram = "12 GB";
    }
    else if (raw <= 14000) {
      this.ram = "14 GB";
    }
    else if (raw <= 16000) {
      this.ram = "16 GB";
    }
    else if (raw <= 18000) {
      this.ram = "18 GB";
    }
    else if (raw <= 20000) {
      this.ram = "20 GB";
    }
  }

  getStorage() {
    var raw = cordova.plugins['extended-device-information'].totalstorage;
    raw = raw.replace(",",".");
    
    if (raw <= 1000) {
      this.storage = "1 GB";
    }
    else if (raw <= 2000) {
      this.storage = "2 GB";
    }
    else if (raw <= 4000) {
      this.storage = "4 GB";
    }
    else if (raw <= 8000) {
      this.storage = "8 GB";
    }
    else if (raw <= 16000) {
      this.storage = "16 GB";
    }
    else if (raw <= 32000) {
      this.storage = "32 GB";
    }
    else if (raw <= 64000) {
      this.storage = "64 GB";
    }
    else if (raw <= 128000) {
      this.storage = "128 GB";
    }
    else if (raw <= 256000) {
      this.storage = "256 GB";
    }
    else if (raw <= 512000) {
      this.storage = "512 GB";
    }
    else if (raw <= 768000) {
      this.storage = "768 GB";
    }
    else if (raw <= 1000000) {
      this.storage = "1 TB";
    }
    else if (raw <= 1500000) {
      this.storage = "1.5 TB";
    }
    else if (raw <= 2000000) {
      this.storage = "2 TB";
    }
  }

  submit() {
    let data = {
      code: this.code,
      imei: this.imei,
      lokasi_beli_voucher: this.lokasi_beli_voucher,
      type: this.type,
      version: this.version,
      manufacturer: this.manufacturer,
      model: this.model,
      ram: this.ram,
      storage: this.storage,
    }
    this.membership.setMembershipActivation(data);
    this.router.navigate([
      "/landing/membership-activation/device-detail/screen-testing",
    ]);
  }
}
 