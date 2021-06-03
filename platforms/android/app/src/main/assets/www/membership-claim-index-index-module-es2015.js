(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-claim-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/index/index.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/index/index.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Pengajuan Perbaikan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content fullscreen>\n    <div class=\"vl\" style=\"font-family: 'Arial' !important; margin-left: 10px;\">\n      <h2>Isi Informasi Pengajuan Perbaikan</h2>\n    </div>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>My Voucher Key</ion-card-subtitle>\n        <ion-card-title>{{ user.data?.voucher_key }}</ion-card-title>    \n      </ion-card-header>\n      <ion-card-content>\n        <img src=\"\" />\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-item>\n        <ion-label position=\"floating\">IMEI</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"imei\" [readonly]=\"isReadonly()\" (keyup.enter)=\"utilsService.hideKeyboard()\" readonly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">No. Telepon Alternatif</ion-label>\n        <ion-input name=\"contact_alternatif\"  [(ngModel)]=\"contact_alternatif\" (keyup.enter)=\"utilsService.hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Tanggal Kerusakan</ion-label>\n        <ion-input name=\"tanggal_kerusakan\" type=\"date\"  [(ngModel)]=\"tanggal_kerusakan\" (keyup.enter)=\"utilsService.hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Waktu Kerusakan</ion-label>\n        <ion-input name=\"waktu_kerusakan\" type=\"time\" [(ngModel)]=\"waktu_kerusakan\" (keyup.enter)=\"utilsService.hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Provinsi</ion-label>\n        <ion-input name=\"provinsi\" [(ngModel)]=\"provinsi\" (keyup.enter)=\"utilsService.hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Kota</ion-label>\n        <ion-input name=\"kota\" [(ngModel)]=\"kota\" (keyup.enter)=\"utilsService.hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Alamat Antar/Penjemputan</ion-label>\n        <ion-input name=\"alamat_penjemputan\" [(ngModel)]=\"alamat_penjemputan\"  (keyup.enter)=\"utilsService.hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item line=\"none\">\n        <ion-label position=\"floating\">Kode Pos</ion-label>\n        <ion-input type=\"text\" name=\"kode_pos\" [(ngModel)]=\"kode_pos\" (keyup.enter)=\"utilsService.hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item line=\"none\">\n        <ion-label position=\"floating\">Jenis Layanan Perbaikan</ion-label>\n        <ion-select name=\"layanan_perbaikan\" [(ngModel)]=\"layanan_perbaikan\">\n          <ion-select-option value=\"Pickup Service\">Pickup Service</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item line=\"none\">\n        <ion-label position=\"floating\">Kronologis Kerusakan</ion-label>\n        <ion-textarea type=\"text\" name=\"kronologis\" [(ngModel)]=\"kronologis\" (keyup.enter)=\"utilsService.hideKeyboard()\" ></ion-textarea>\n      </ion-item>\n\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" (click)=\"submit()\"  class=\"ion-margin\">Ajukan Perbaikan\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-card>\n\n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/pages/landing/membership-claim/index/index-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/index/index-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: IndexPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function() { return IndexPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/landing/membership-claim/index/index.page.ts");




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-claim/index/index.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/index/index.module.ts ***!
  \**********************************************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/pages/landing/membership-claim/index/index-routing.module.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/landing/membership-claim/index/index.page.ts");







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"]
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })
], IndexPageModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-claim/index/index.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/index/index.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vl {\n  border-left: 6px solid blue;\n  height: 35px;\n  margin-top: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\nh2 {\n  padding-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWNsYWltL2luZGV4L0M6XFxVc2Vyc1xcQVNVU1xcRGVza3RvcFxcemZpeF9hcHBfYW5ndWxhcl9odHRwX25ldzkvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxtZW1iZXJzaGlwLWNsYWltXFxpbmRleFxcaW5kZXgucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21lbWJlcnNoaXAtY2xhaW0vaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ0N2Qjs7QURFRTtFQUNFLGtCQUFrQjtBQ0N0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbWVtYmVyc2hpcC1jbGFpbS9pbmRleC9pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBibHVlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfSIsIi52bCB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmx1ZTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmgyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/landing/membership-claim/index/index.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/index/index.page.ts ***!
  \********************************************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/uid/ngx */ "./node_modules/@ionic-native/uid/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











let IndexPage = class IndexPage {
    constructor(storage, uid, androidPermissions, platform, membershipApiService, utilsService, MembershipService, navCtrl, router) {
        this.storage = storage;
        this.uid = uid;
        this.androidPermissions = androidPermissions;
        this.platform = platform;
        this.membershipApiService = membershipApiService;
        this.utilsService = utilsService;
        this.MembershipService = MembershipService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.imeiEditable = true;
        this.user = {};
        this.data = [];
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
        return this.isReadonly; //return true/false 
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
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.MembershipService.current(token).subscribe((response) => {
                var _a;
                this.user = response;
                this.imei = (_a = this.user.data) === null || _a === void 0 ? void 0 : _a.process.imei;
                // console.log(this.imei);
                // console.log("image slides", this.listImageSlides);
            }, (err) => {
                this.user = [];
                this.utilsService.showToast("Anda belum memiliki voucher key.");
            });
        });
    }
    submit() {
        if ((this.contact_alternatif == null || this.imei == null || this.tanggal_kerusakan == null || this.waktu_kerusakan == null || this.provinsi == null || this.kota == null || this.alamat_penjemputan == null || this.kode_pos == null || this.layanan_perbaikan == null || this.kronologis == null) || (this.tanggal_kerusakan.replace(/\s/g, "") == "") || (this.contact_alternatif.replace(/\s/g, "") == "") || (this.provinsi.replace(/\s/g, "") == "") || (this.kota.replace(/\s/g, "") == "") || (this.waktu_kerusakan.replace(/\s/g, "") == "") || (this.alamat_penjemputan.replace(/\s/g, "") == "") || (this.kode_pos.replace(/\s/g, "") == "") || (this.layanan_perbaikan.replace(/\s/g, "") == "") || (this.kronologis.replace(/\s/g, "") == "")) {
            this.utilsService.showToast("Lengkapi pengisian form.");
        }
        else {
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
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
                };
                // console.log(membershipClaim)
                this.membershipApiService.requestForClaim(token, membershipClaim).subscribe((response) => {
                    this.router.navigate([
                        "/landing/membership-claim/done",
                    ]);
                }, (err) => {
                    var error = {};
                    error = err.error;
                    this.utilsService.showToast(error.message);
                });
            });
        }
    }
};
IndexPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_4__["Uid"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_7__["MembershipApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"] },
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_7__["MembershipApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/index/index.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.page.scss */ "./src/app/pages/landing/membership-claim/index/index.page.scss")).default]
    })
], IndexPage);



/***/ })

}]);
//# sourceMappingURL=membership-claim-index-index-module-es2015.js.map