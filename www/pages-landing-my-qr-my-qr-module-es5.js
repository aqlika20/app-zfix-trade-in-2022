function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-my-qr-my-qr-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingMyQrMyQrPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n  <ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\r\n    <ion-toolbar style=\"padding-top: 10%; --background: transparant;\">\r\n      <ion-segment mode=\"md\" [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\r\n        <ion-segment-button value=\"0\" style=\" --indicator-height: none;\">\r\n          Qr Aktif\r\n          <hr>\r\n        </ion-segment-button>\r\n\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n\r\n        <div class=\"center\" style=\"margin-left: 10%;\">\r\n          <div *ngFor=\"let item of qrLaptop\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\r\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\r\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 2\">\r\n                    <div class=\"title\">Laptop</div>\r\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\r\n                    <ion-card-content >\r\n                      <ngx-qrcode \r\n                        [width]=200\r\n                        value = \"{{item.id}}\">\r\n                      </ngx-qrcode>\r\n\r\n                      <div *ngFor=\"let vou of vouchers\">\r\n                        <div *ngIf = \"item.voucher_id == vou.id \">\r\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div>\r\n                        <div>\r\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\r\n                      <div *ngFor=\"let loc of stores\">\r\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\r\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\r\n                          <p class=\"f-5\">dan scan barcode ini</p> \r\n                        </div>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </div>\r\n                </ion-card>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div *ngFor=\"let item of qrTV\">\r\n              <div class=\"col\">\r\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\r\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\r\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 3\">\r\n                    <div class=\"title\">TV</div>\r\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\r\n                    <ion-card-content >\r\n                      <ngx-qrcode \r\n                      [width]=200\r\n                      value = \"{{item.id}}\">\r\n                      </ngx-qrcode>\r\n\r\n                      <div *ngFor=\"let vou of vouchers\">\r\n                        <div *ngIf = \"item.voucher_id == vou.id \">\r\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div>\r\n                        <div>\r\n                           <strong>Harga: Rp. {{item.price | number}}</strong>\r\n                        </div>\r\n                      </div>\r\n                      \r\n\r\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\r\n                      <div *ngFor=\"let loc of stores\">\r\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\r\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\r\n                          <p class=\"f-5\">dan scan barcode ini</p>\r\n                        </div>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </div>\r\n                </ion-card>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div *ngFor=\"let item of qrPS\">\r\n              <div class=\"col\">\r\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\r\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\r\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 4\">\r\n                    <div class=\"title\">PS</div>\r\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\r\n\r\n                    <ion-card-content >\r\n                      <ngx-qrcode \r\n                      [width]=200\r\n                      value = \"{{item.id}}\" >\r\n                      </ngx-qrcode>\r\n\r\n                      <div *ngFor=\"let vou of vouchers\">\r\n                        <div *ngIf = \"item.voucher_id == vou.id \">\r\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div>\r\n                        <div>\r\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\r\n                      <div *ngFor=\"let loc of stores\">\r\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\r\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\r\n                          <p class=\"f-5\">dan scan barcode ini</p> \r\n                        </div>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </div>\r\n                </ion-card>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div *ngFor=\"let item of qrKulkas\">\r\n              <div class=\"col\">\r\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\r\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\r\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 5\">\r\n                    <div class=\"title\">Kulkas</div>\r\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\r\n\r\n                    <ion-card-content >\r\n                      <ngx-qrcode \r\n                      [width]=200\r\n                      value = \"{{item.id}}\" >\r\n                      </ngx-qrcode>\r\n\r\n                      <div *ngFor=\"let vou of vouchers\">\r\n                        <div *ngIf = \"item.voucher_id == vou.id \">\r\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div>\r\n                        <div>\r\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\r\n                      <div *ngFor=\"let loc of stores\">\r\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\r\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\r\n                          <p class=\"f-5\">dan scan barcode ini</p> \r\n                        </div>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </div>\r\n                </ion-card>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div *ngFor=\"let item of qrMesinCuci\">\r\n              <div class=\"col\">\r\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\r\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\r\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 6\">\r\n                    <div class=\"title\">Mesin Cuci</div>\r\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\r\n\r\n                    <ion-card-content >\r\n                      <ngx-qrcode \r\n                      [width]=200\r\n                      value = \"{{item.id}}\" >\r\n                      </ngx-qrcode>\r\n\r\n                      <div *ngFor=\"let vou of vouchers\">\r\n                        <div *ngIf = \"item.voucher_id == vou.id \">\r\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div>\r\n                        <div>\r\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\r\n                      <div *ngFor=\"let loc of stores\">\r\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\r\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\r\n                          <p class=\"f-5\">dan scan barcode ini</p> \r\n                        </div>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </div>\r\n                </ion-card>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n  </ion-content>\r\n    ";
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: MyQrPageRoutingModule */

  /***/
  function srcAppPagesLandingMyQrMyQrRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyQrPageRoutingModule", function () {
      return MyQrPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _my_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-qr.page */
    "./src/app/pages/landing/my-qr/my-qr.page.ts");

    var routes = [{
      path: '',
      component: _my_qr_page__WEBPACK_IMPORTED_MODULE_3__["MyQrPage"]
    }];

    var MyQrPageRoutingModule = function MyQrPageRoutingModule() {
      _classCallCheck(this, MyQrPageRoutingModule);
    };

    MyQrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyQrPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr.module.ts ***!
    \*****************************************************/

  /*! exports provided: MyQrPageModule */

  /***/
  function srcAppPagesLandingMyQrMyQrModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyQrPageModule", function () {
      return MyQrPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-qr-routing.module */
    "./src/app/pages/landing/my-qr/my-qr-routing.module.ts");
    /* harmony import */


    var _my_qr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-qr.page */
    "./src/app/pages/landing/my-qr/my-qr.page.ts");
    /* harmony import */


    var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @techiediaries/ngx-qrcode */
    "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/techiediaries-ngx-qrcode.js");

    var MyQrPageModule = function MyQrPageModule() {
      _classCallCheck(this, MyQrPageModule);
    };

    MyQrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyQrPageRoutingModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"]],
      // schemas: [
      //   CUSTOM_ELEMENTS_SCHEMA
      // ],
      declarations: [_my_qr_page__WEBPACK_IMPORTED_MODULE_6__["MyQrPage"]]
    })], MyQrPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingMyQrMyQrPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "hr {\n  height: 6px;\n  width: 100%;\n  background-color: #3053A4;\n  border-radius: 99px;\n  margin: 7px;\n}\n\n.garis {\n  margin-top: 30px;\n}\n\n.putus {\n  border-top: 3px dashed #87ABDD;\n  width: 100%;\n  margin-top: 0;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\n.title {\n  font-size: 17px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #3053A4;\n  margin-top: 15px;\n  margin-bottom: 0px;\n}\n\n.title-header {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #FFA95A;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.middle {\n  width: 52vw;\n  top: 46%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.f-5 {\n  font-size: 17px;\n  margin: 0;\n  color: #3053A4;\n}\n\nhtml, body, .container {\n  height: 100%;\n}\n\n.container {\n  display: -webkit-flexbox;\n  display: flex;\n  -webkit-flex-align: center;\n  align-items: center;\n  justify-content: center;\n}\n\n.test-class > img {\n  width: 2000px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\ntable, td, th {\n  border: 1px solid black;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.center {\n  text-align: center;\n}\n\n.vertical-center .fixed-content,\n.vertical-center .scroll-content {\n  display: flex;\n  align-items: center;\n}\n\n.vertical-center .fixed-content ion-list,\n.vertical-center .scroll-content ion-list {\n  max-width: 300px;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbXktcXJcXG15LXFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9teS1xci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztBQ0NmOztBREVBO0VBQ0ksZ0JBQWdCO0FDQ3BCOztBREVBO0VBQ0ksOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQ0NyQjs7QURLQTtFQUNJLGVBQWU7RUFDZiw0REFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FDRnRCOztBREtBO0VBQ0ksZUFBZTtFQUNmLDREQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNGdEI7O0FES0E7RUFDSSxXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLG9DQUFvQztBQ0Z4Qzs7QURLQTtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsY0FBYztBQ0ZsQjs7QURLQTtFQUNJLFlBQVk7QUNGaEI7O0FES0E7RUFDSSx3QkFBd0I7RUFHeEIsYUFBYTtFQUNiLDBCQUEwQjtFQUcxQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FDRjNCOztBREtBO0VBQ0ksYUFBYTtBQ0ZqQjs7QURNQTtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQ0hmOztBREtJO0VBQ0EsWUFBWTtFQUNaLGNBQWM7QUNGbEI7O0FESUk7RUFDQSxXQUFXO0FDRGY7O0FESUk7RUFDQSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUNEdkI7O0FESUk7RUFDQSxXQUFXO0FDRGY7O0FESUk7RUFDQSxlQUFlO0FDRG5COztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsVUFBVTtBQ0RkOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsVUFBVTtBQ0RkOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsVUFBVTtBQ0RkOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsV0FBVztBQ0RmOztBRElJO0VBQ0EsV0FBVztBQ0RmOztBRElJO0VBQ0EsZUFBZTtBQ0RuQjs7QURJSTtFQUNBLGdCQUFnQjtBQ0RwQjs7QURJSTtFQUNBLFVBQVU7QUNEZDs7QURJSTtFQUNBLGdCQUFnQjtBQ0RwQjs7QURJSTtFQUNBLGdCQUFnQjtBQ0RwQjs7QURJSTtFQUNBLFVBQVU7QUNEZDs7QURJSTtFQUNBLGdCQUFnQjtBQ0RwQjs7QURJSTtFQUNBLGdCQUFnQjtBQ0RwQjs7QURJSTtFQUNBLFVBQVU7QUNEZDs7QURJSTtFQUNBLGdCQUFnQjtBQ0RwQjs7QURJSTtFQUNBLGdCQUFnQjtBQ0RwQjs7QURJSTtFQUNBLFdBQVc7QUNEZjs7QURJSTtFQUNBLFVBQVU7QUNEZDs7QURJSTtFQUNBLGNBQWM7QUNEbEI7O0FESUk7RUFDQSxlQUFlO0FDRG5COztBRElJO0VBQ0EsU0FBUztBQ0RiOztBRElJO0VBQ0EsZUFBZTtBQ0RuQjs7QURJSTtFQUNBLGVBQWU7QUNEbkI7O0FESUk7RUFDQSxTQUFTO0FDRGI7O0FESUk7RUFDQSxlQUFlO0FDRG5COztBRElJO0VBQ0EsZUFBZTtBQ0RuQjs7QURJSTtFQUNBLFNBQVM7QUNEYjs7QURJSTtFQUNBLGVBQWU7QUNEbkI7O0FESUk7RUFDQSxlQUFlO0FDRG5COztBRElJO0VBQ0EsVUFBVTtBQ0RkOztBRElJO0VBQ0EsZUFBZTtBQ0RuQjs7QURJSTtFQUNBLHFCQUFxQjtBQ0R6Qjs7QURJSTtFQUNBLHNCQUFzQjtBQ0QxQjs7QURJSTtFQUNBLGdCQUFnQjtBQ0RwQjs7QURJSTtFQUNBLHNCQUFzQjtBQ0QxQjs7QURJSTtFQUNBLHNCQUFzQjtBQ0QxQjs7QURJSTtFQUNBLGdCQUFnQjtBQ0RwQjs7QURJSTtFQUNBLHNCQUFzQjtBQ0QxQjs7QURJSTtFQUNBLHNCQUFzQjtBQ0QxQjs7QURJSTtFQUNBLGdCQUFnQjtBQ0RwQjs7QURJSTtFQUNBLHNCQUFzQjtBQ0QxQjs7QURJSTtFQUNBLHNCQUFzQjtBQ0QxQjs7QURJSTtFQUNBLGlCQUFpQjtBQ0RyQjs7QURJSTtFQUNBLHVCQUF1QjtBQ0QzQjs7QURJSTtFQUNBLFdBQVc7RUFDWCx5QkFBeUI7QUNEN0I7O0FESUk7RUFDSSxrQkFBa0I7QUNEMUI7O0FESUk7O0VBR1EsYUFBYTtFQUNiLG1CQUFtQjtBQ0YvQjs7QURGSTs7RUFPWSxnQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUNBbEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL215LXFyL215LXFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhye1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDUzQTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi5nYXJpc3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5wdXR1c3tcclxuICAgIGJvcmRlci10b3A6IDNweCBkYXNoZWQgIzg3QUJERDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxufVxyXG5cclxuLy8gLnRleHQtY2VudGVye1xyXG4vLyB9XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMzA1M0E0O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnRpdGxlLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRkE5NUE7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuICAgIHdpZHRoOiA1MnZ3O1xyXG4gICAgdG9wOiA0NiU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmYtNSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzMwNTNBNDtcclxufVxyXG5cclxuaHRtbCwgYm9keSwgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGVzdC1jbGFzcyA+IGltZyB7XHJcbiAgICB3aWR0aDogMjAwMHB4O1xyXG4gIH1cclxuICBcclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgICAucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgfVxyXG4gICAgLnJvdzphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLTEge1xyXG4gICAgd2lkdGg6IDguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtMiB7XHJcbiAgICB3aWR0aDogMTYuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtMyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtNCB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtNSB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtNiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtNyB7XHJcbiAgICB3aWR0aDogNTguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtOCB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtOSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtMTAge1xyXG4gICAgd2lkdGg6IDgzLjMzMzMzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLTExIHtcclxuICAgIHdpZHRoOiA5MS42NjY2NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtMCB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtMSB7XHJcbiAgICByaWdodDogOC4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTIge1xyXG4gICAgcmlnaHQ6IDE2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtMyB7XHJcbiAgICByaWdodDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC00IHtcclxuICAgIHJpZ2h0OiAzMy4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTUge1xyXG4gICAgcmlnaHQ6IDQxLjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtNiB7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC03IHtcclxuICAgIHJpZ2h0OiA1OC4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTgge1xyXG4gICAgcmlnaHQ6IDY2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtOSB7XHJcbiAgICByaWdodDogNzUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC0xMCB7XHJcbiAgICByaWdodDogODMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC0xMSB7XHJcbiAgICByaWdodDogOTEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC0xMiB7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtMCB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC0xIHtcclxuICAgIGxlZnQ6IDguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC0yIHtcclxuICAgIGxlZnQ6IDE2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtMyB7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTQge1xyXG4gICAgbGVmdDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC01IHtcclxuICAgIGxlZnQ6IDQxLjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtNiB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTcge1xyXG4gICAgbGVmdDogNTguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC04IHtcclxuICAgIGxlZnQ6IDY2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtOSB7XHJcbiAgICBsZWZ0OiA3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTEwIHtcclxuICAgIGxlZnQ6IDgzLjMzMzMzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtMTEge1xyXG4gICAgbGVmdDogOTEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC0xMiB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC0zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtNCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC02IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtNyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTgge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC05IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtMTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC0xMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTEyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlLCB0ZCwgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtY2VudGVyIHtcclxuICAgICAgICAuZml4ZWQtY29udGVudCxcclxuICAgICAgICAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTsgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSIsImhyIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA1M0E0O1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLmdhcmlzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnB1dHVzIHtcbiAgYm9yZGVyLXRvcDogM3B4IGRhc2hlZCAjODdBQkREO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnRpdGxlLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkE5NUE7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1pZGRsZSB7XG4gIHdpZHRoOiA1MnZ3O1xuICB0b3A6IDQ2JTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mLTUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMzMDUzQTQ7XG59XG5cbmh0bWwsIGJvZHksIC5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXhib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGVzdC1jbGFzcyA+IGltZyB7XG4gIHdpZHRoOiAyMDAwcHg7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2wteHMtMSB7XG4gIHdpZHRoOiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy0yIHtcbiAgd2lkdGg6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvbC14cy00IHtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy01IHtcbiAgd2lkdGg6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy02IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbC14cy03IHtcbiAgd2lkdGg6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy04IHtcbiAgd2lkdGg6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy05IHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmNvbC14cy0xMCB7XG4gIHdpZHRoOiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtMTEge1xuICB3aWR0aDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVsbC0wIHtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVsbC0xIHtcbiAgcmlnaHQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMiB7XG4gIHJpZ2h0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0zIHtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdWxsLTQge1xuICByaWdodDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtNSB7XG4gIHJpZ2h0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC02IHtcbiAgcmlnaHQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdWxsLTcge1xuICByaWdodDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtOCB7XG4gIHJpZ2h0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC05IHtcbiAgcmlnaHQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdWxsLTEwIHtcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTExIHtcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTEyIHtcbiAgcmlnaHQ6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVzaC0wIHtcbiAgbGVmdDogYXV0bztcbn1cblxuLmNvbC14cy1wdXNoLTEge1xuICBsZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTIge1xuICBsZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0zIHtcbiAgbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLXB1c2gtNCB7XG4gIGxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTUge1xuICBsZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC02IHtcbiAgbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLXB1c2gtNyB7XG4gIGxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTgge1xuICBsZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC05IHtcbiAgbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLXB1c2gtMTAge1xuICBsZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMSB7XG4gIGxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTEyIHtcbiAgbGVmdDogMTAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLW9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLW9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTkge1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTIge1xuICBtYXJnaW4tbGVmdDogMTAwJTtcbn1cblxudGFibGUsIHRkLCB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmVydGljYWwtY2VudGVyIC5maXhlZC1jb250ZW50LFxuLnZlcnRpY2FsLWNlbnRlciAuc2Nyb2xsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udmVydGljYWwtY2VudGVyIC5maXhlZC1jb250ZW50IGlvbi1saXN0LFxuLnZlcnRpY2FsLWNlbnRlciAuc2Nyb2xsLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr.page.ts ***!
    \***************************************************/

  /*! exports provided: MyQrPage */

  /***/
  function srcAppPagesLandingMyQrMyQrPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyQrPage", function () {
      return MyQrPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var MyQrPage = /*#__PURE__*/function () {
      function MyQrPage(storage, sellingApiService, utilsService) {
        _classCallCheck(this, MyQrPage);

        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.utilsService = utilsService;
        this.segment = 0;
        this.sliderOptions = {
          initialSlide: 0,
          slidePerView: 1,
          speed: 400
        };
        this.qrLaptop = [];
        this.qrPS = [];
        this.qrTV = [];
        this.qrKulkas = [];
        this.qrMesinCuci = [];
        this.trLaptop = [];
        this.trPS = [];
        this.trTV = [];
        this.trKulkas = [];
        this.trMesinCuci = [];
        this.stores = [];
        this.vouchers = [];
        this.encoded = '1';
      }

      _createClass(MyQrPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          setInterval(function () {
            _this.getQRCODE();
          }, 2000);
          this.getTransaction();
        }
      }, {
        key: "getQRCODE",
        value: function getQRCODE() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this2.sellingApiService.getQR(token).subscribe(function (response) {
              _this2.qrLaptop = response.data.arr;
              _this2.qrTV = response.data.arr2;
              _this2.qrPS = response.data.arr3;
              _this2.qrKulkas = response.data.arr5;
              _this2.qrMesinCuci = response.data.arr6;
              _this2.stores = response.data.store;
              _this2.vouchers = response.data.voucher;
              console.log(response.data.arr2);
            }, function (err) {// this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "getTransaction",
        value: function getTransaction() {
          var _this3 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this3.sellingApiService.getDetailTransaction(token).subscribe(function (response) {
              _this3.trLaptop = response.data.data_arr;
              _this3.trTV = response.data.data_arr2;
              _this3.trPS = response.data.data_arr3;
              _this3.trKulkas = response.data.data_arr5;
              _this3.trMesinCuci = response.data.data_arr6;
            }, function (err) {// this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.selectedSlide.slideTo(this.segment);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "slideShanged",
        value: function slideShanged(slides) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.selectedSlide = slides;
                    slides.getActiveIndex().then(function (selectedIndex) {
                      _this4.segment = selectedIndex;
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return MyQrPage;
    }();

    MyQrPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }];
    };

    MyQrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-qr',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-qr.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-qr.page.scss */
      "./src/app/pages/landing/my-qr/my-qr.page.scss"))["default"]]
    })], MyQrPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-landing-my-qr-my-qr-module-es5.js.map