import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { MembershipApiService } from "../../../../services/api/membership-api.service";
import { UtilitiesService } from '../../../../services/utilities.service';
import { MembershipService } from "../../../../services/membership.service";
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  imei: string;
  contact: string;
  contact_alternatif: string;
  tanggal_kerusakan: string;
  waktu_kerusakan: string;
  provinsi: string;
  kota: string;
  alamat_penjemputan: string;
  kode_pos: string;
  lokasi_beli_membership: string;
  kronologis: string;
  layanan_perbaikan: string;
  imeiEditable: boolean = true;
  user: any = {};
  data:any[]=[];


  constructor( private storage: Storage,
    private uid: Uid, 
    private androidPermissions: AndroidPermissions, 
    private platform: Platform, 
    private membershipApiService: MembershipApiService,
    private utilsService: UtilitiesService, 
    private MembershipService: MembershipApiService,
    public navCtrl: NavController,
    private router: Router,) 
    {
      // let platforms = this.platform.platforms();
      // // console.log(platforms[0]);
      // if (platforms[0] == "android") {
      //   this.imei = this.uid.IMEI;
      //   if(this.imei != null){
      //     this.imeiEditable = false
      //   }
      //   this.getPermission();
      // } 
    }

  ngOnInit() {
    this.getVoucher();
  }

  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

  // getPermission() {
  //   this.androidPermissions.checkPermission(
  //     this.androidPermissions.PERMISSION.READ_PHONE_STATE
  //   ).then(res => {
  //     if(res.hasPermission){
        
  //     }
  //     else{
  //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
  //         this.utilsService.restart("Aplikasi akan restart secara otomatis untuk menampilkan IMEI.");
          
  //       }).catch(error => {
  //         this.utilsService.showAlert(error);
  //       });
  //     }
  //   }).catch(error => {
  //     this.utilsService.showAlert(error);
  //   });
  // }

  getVoucher() {
    this.storage.get(tokenKey).then((token) => {
      this.MembershipService.current(token).subscribe(
        (response) => {
          this.user = response;
          this.imei = this.user.data?.process.imei;
          // console.log(this.imei);
          // console.log("image slides", this.listImageSlides);
        },
        (err) => {
          this.user = [];
          this.utilsService.showToast("Anda belum memiliki voucher key.");
        }
      );
    });
  }

  submit() {
    if ((this.contact_alternatif == null || this.imei == null || this.tanggal_kerusakan == null || this.waktu_kerusakan == null || this.provinsi == null || this.kota == null || this.alamat_penjemputan == null || this.kode_pos == null || this.layanan_perbaikan == null || this.kronologis == null) || (this.tanggal_kerusakan.replace(/\s/g, "") == "") || (this.contact_alternatif.replace(/\s/g, "") == "") || (this.provinsi.replace(/\s/g, "") == "") || (this.kota.replace(/\s/g, "") == "") || (this.waktu_kerusakan.replace(/\s/g, "") == "") || (this.alamat_penjemputan.replace(/\s/g, "") == "") || (this.kode_pos.replace(/\s/g, "") == "") || (this.layanan_perbaikan.replace(/\s/g, "") == "")|| (this.kronologis.replace(/\s/g, "") == "")){

      this.utilsService.showToast("Lengkapi pengisian form.");

    } else {
      this.storage.get(tokenKey).then((token) => {
        let membershipClaim = {
          request_code: 2,
          imei: this.imei,
          contact_alternatif: this.contact_alternatif,
          tanggal_kerusakan: this.tanggal_kerusakan,
          waktu_kerusakan: this.waktu_kerusakan,
          provinsi: this.provinsi,
          kota: this.kota,
          alamat_penjemputan: this.alamat_penjemputan,
          kode_pos: this.kode_pos,
          layanan_perbaikan: this.layanan_perbaikan,
          kronologis: this.kronologis,
          status_claim: 0,
 
        }
        // console.log(membershipClaim)
        this.membershipApiService.requestForClaim(token, membershipClaim).subscribe(
          (response) => {
            this.router.navigate([
              "/landing/membership-claim/done",
             ]);
          },
          (err) => {
            var error: any = {}
            error = err.error
            this.utilsService.showToast(error.message);          
          }
        );
      });
    }
  }
}
