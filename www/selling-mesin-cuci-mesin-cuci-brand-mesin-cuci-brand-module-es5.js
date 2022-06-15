function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingMesinCuciMesinCuciBrandMesinCuciBrandPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\r\n  <div class=\"div-h1\">\r\n    <h1>Your Trade In</h1>\r\n  </div>\r\n  <div class=\"content\">\r\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n      <ion-label>Merk</ion-label>\r\n      <ion-select (ionChange) = \"this.brand = $event.target.value\">\r\n        <ion-select-option *ngFor=\"let row_brand of data_brand\" value=\"{{row_brand.brand}}\" placeholder=\"Pilih..\">{{row_brand.brand}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n      <ion-label>Type</ion-label>\r\n      <ion-select (ionChange) = \"this.type= $event.target.value\">  \r\n        <ion-select-option *ngFor=\"let row_type of data_type\" [value]=\"row_type.type\" placeholder=\"Pilih..\">{{row_type.type}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n      <ion-label class=\"ion-text-wrap\">Tempat anda melakukan Trade In</ion-label>\r\n      <ion-select (ionChange)=\"this.lokasi_trade = $event.target.value\">\r\n          <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-grid >\r\n      <ion-row size=\"auto\">\r\n        <ion-col >\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"title\">\r\n                <div>Kondisi Mesin Cuci</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" style=\"padding-top: 18px;\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          <ion-radio-group [(ngModel)]=\"condition\" >\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n              <ion-label class=\"ion-text-wrap\">Nyala</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Nyala\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n              <ion-label class=\"ion-text-wrap\">Mati Total</ion-label>\r\n              <ion-radio  slot=\"start\" value=\"Mati Total\"></ion-radio>\r\n            </ion-item>   \r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid >\r\n      <ion-row size=\"auto\">\r\n        <ion-col >\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"title\">\r\n                <div>Kondisi Fisik Mesin Cuci</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" style=\"padding-top: 18px;\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          <ion-radio-group [(ngModel)]=\"kondisi_fisik\" >\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n              <ion-label class=\"ion-text-wrap\">Mulus</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Mulus\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n              <ion-label class=\"ion-text-wrap\">Lecet Parah</ion-label>\r\n              <ion-radio  slot=\"start\" value=\"Dent,Penyok\"></ion-radio>\r\n            </ion-item>  \r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n              <ion-label class=\"ion-text-wrap\">Dent,Penyok</ion-label>\r\n              <ion-radio  slot=\"start\" value=\"Dent,Penyok\"></ion-radio>\r\n            </ion-item>   \r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid >\r\n      <ion-row size=\"auto\">\r\n        <ion-col > \r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"title\">\r\n                <div>Kondisi Rubber Pada Kaki mesin cuci</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" style=\"padding-top: 18px;\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          <ion-radio-group [(ngModel)]=\"rubber\" >\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n              <ion-label class=\"ion-text-wrap\">Normal</ion-label> \r\n              <ion-radio slot=\"start\" value=\"Normal\"></ion-radio>\r\n            </ion-item>\r\n          \r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\r\n              <ion-label class=\"ion-text-wrap\">Tidak Normal</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Tidak Normal\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n    <ion-grid >\r\n      <ion-row size=\"auto\">\r\n        <ion-col >\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"title\">\r\n                <div>Fungsi Tutup pada Mesin Cuci</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" style=\"padding-top: 18px;\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          <ion-radio-group [(ngModel)]=\"tutup\" >\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n              <ion-label class=\"ion-text-wrap\">Berfungsi</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n              <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\r\n              <ion-radio  slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\r\n            </ion-item>   \r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col >\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"title\">\r\n                <div>Fungsi Tombol pada mesin cuci</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" style=\"padding-top: 18px;\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          <ion-radio-group [(ngModel)]=\"tombol\" >\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \r\n              <ion-label class=\"ion-text-wrap\">Berfungsi Normal</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Berfungsi Normal\"></ion-radio> \r\n            </ion-item>\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \r\n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi Normal</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi Normal\"></ion-radio>\r\n              </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col >\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"title\">\r\n                <div>Fungsi Pembuangan Air</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" style=\"padding-top: 18px;\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          <ion-radio-group [(ngModel)]=\"pembuangan\" >\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \r\n              <ion-label>Berfungsi</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \r\n              <ion-label>Tidak berfungsi</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col >\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"title\">\r\n                <div>Fungsi Spinner/Pengering</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" style=\"padding-top: 18px;\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          <ion-radio-group [(ngModel)]=\"pengering\" >\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \r\n              <ion-label>Berfungsi</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \r\n              <ion-label>Tidak berfungsi</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col >\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"title\">\r\n                <div>Fungsi Air Otomatis</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" style=\"padding-top: 18px;\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          <ion-radio-group [(ngModel)]=\"air_otomatis\" >\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \r\n              <ion-label>Berfungsi</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \r\n              <ion-label>Tidak berfungsi</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col >\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"title\">\r\n                <div>Fungsi Pemanas</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" style=\"padding-top: 18px;\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          <ion-radio-group [(ngModel)]=\"pemanas\" >\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \r\n              <ion-label>Berfungsi</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \r\n              <ion-label>Tidak berfungsi</ion-label>\r\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\r\n      <div class=\"col\">\r\n        <ion-button shape=\"round\" fill=\"outline\" style=\" --background:#BCCCF4; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" routerLink=\"/landing/type\">Cancel</ion-button>\r\n      </div>\r\n      <div class=\"col\">\r\n        <ion-button shape=\"round\" style=\"--background:white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" (click)=\"submit()\">Agree</ion-button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts ***!
    \******************************************************************************************************/

  /*! exports provided: MesinCuciBrandPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingMesinCuciMesinCuciBrandMesinCuciBrandRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPageRoutingModule", function () {
      return MesinCuciBrandPageRoutingModule;
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


    var _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mesin-cuci-brand.page */
    "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts");

    var routes = [{
      path: '',
      component: _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_3__["MesinCuciBrandPage"]
    }];

    var MesinCuciBrandPageRoutingModule = function MesinCuciBrandPageRoutingModule() {
      _classCallCheck(this, MesinCuciBrandPageRoutingModule);
    };

    MesinCuciBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MesinCuciBrandPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: MesinCuciBrandPageModule */

  /***/
  function srcAppPagesLandingSellingMesinCuciMesinCuciBrandMesinCuciBrandModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPageModule", function () {
      return MesinCuciBrandPageModule;
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


    var _mesin_cuci_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mesin-cuci-brand-routing.module */
    "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts");
    /* harmony import */


    var _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mesin-cuci-brand.page */
    "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts");

    var MesinCuciBrandPageModule = function MesinCuciBrandPageModule() {
      _classCallCheck(this, MesinCuciBrandPageModule);
    };

    MesinCuciBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mesin_cuci_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["MesinCuciBrandPageRoutingModule"]],
      declarations: [_mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_6__["MesinCuciBrandPage"]]
    })], MesinCuciBrandPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingMesinCuciMesinCuciBrandMesinCuciBrandPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header.header {\n  --ion-background-color: transparent;\n  border: none;\n}\n\nion-header.header .icon-b {\n  color: #34549f;\n}\n\n.bg {\n  background-image: url(/src/assets/images/default/background.png);\n}\n\n.content {\n  margin-top: 40%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.title-image {\n  width: 35vw;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n\n.container {\n  height: auto;\n  width: auto;\n}\n\n.container.bg-white {\n  background-color: white;\n}\n\n.bg-image {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.bg-image.bottom {\n  bottom: 0px;\n}\n\nh1 {\n  margin-bottom: -10px;\n  margin-left: 20px;\n  color: #34549f;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  font-size: 20pt;\n}\n\n.div-h1 {\n  margin: 0;\n  position: absolute;\n  top: 13%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nion-card {\n  text-align: center;\n  width: 80%;\n  height: 90%;\n  background: transparent;\n  text-transform: none;\n  box-shadow: #52657A;\n}\n\nion-card .icon-a {\n  padding: 10px;\n  font-size: 4em;\n  color: #0099ff;\n}\n\nion-card h2 {\n  color: #424348;\n}\n\n.shape {\n  position: relative;\n  bottom: -10%;\n}\n\n.shape img {\n  width: 100%;\n  height: auto;\n}\n\n.mb-2 {\n  margin-bottom: 20px;\n}\n\n.item-a {\n  background: transparent;\n  height: 60px;\n  margin-bottom: 20px;\n  border-radius: 20px;\n  border: 2px solid gainsboro;\n  color: #8c8c8c;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.title {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  color: #3053A4;\n  font-weight: bold;\n  margin-top: 20px;\n}\n\nion-col {\n  background: none;\n}\n\nhr {\n  border-bottom: 2px solid #87ABDD;\n}\n\nhr:after {\n  content: '';\n  display: block;\n  border-bottom: 2px solid #87ABDD;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvbWVzaW4tY3VjaS1icmFuZC9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2VsbGluZy1tZXNpbi1jdWNpXFxtZXNpbi1jdWNpLWJyYW5kXFxtZXNpbi1jdWNpLWJyYW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvbWVzaW4tY3VjaS1icmFuZC9tZXNpbi1jdWNpLWJyYW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUF1QjtFQUN2QixZQUFZO0FDQ2hCOztBREhBO0VBSU0sY0FBYztBQ0dwQjs7QURDRTtFQUNFLGdFQUFnRTtBQ0VwRTs7QURBRTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FDR3JCOztBREFFO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQ0d0Qjs7QURDRTtFQUNFLFlBQVk7RUFDWixXQUFXO0FDRWY7O0FESkU7RUFJSSx1QkFBdUI7QUNJN0I7O0FEQUU7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0FDR2I7O0FEVkU7RUFVRSxRQUFTO0VBQ1QsNEJBQTRCO0FDSWhDOztBRGZFO0VBZ0JFLFdBQVc7QUNHZjs7QURFRTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDREQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIsZUFBZTtBQ0NuQjs7QURFRTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFFVCxnQ0FBZ0M7QUNDcEM7O0FERUU7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQ0N2Qjs7QURQRTtFQVNJLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBYztBQ0VwQjs7QURiRTtFQWVJLGNBQXNCO0FDRTVCOztBREVHO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVk7QUNDaEI7O0FESEc7RUFJSyxXQUFXO0VBQ1gsWUFBWTtBQ0dwQjs7QURDRTtFQUNBLG1CQUFtQjtBQ0VyQjs7QURDRTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBbUM7RUFDbkMsY0FBeUI7QUNFOUI7O0FEQ0U7RUFDRSxrQkFBa0I7QUNFdEI7O0FEQ0U7RUFDRSw0REFBMkQ7RUFDM0QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUNFcEI7O0FEQ0U7RUFDRSxnQkFBZ0I7QUNFcEI7O0FERUU7RUFDRSxnQ0FBZ0M7QUNDcEM7O0FERUU7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsY0FBYztBQ0NsQjs7QURFRTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQ0NmOztBRENJO0VBQ0EsWUFBWTtFQUNaLGNBQWM7QUNFbEI7O0FEQUk7RUFDQSxXQUFXO0FDR2Y7O0FEQUk7RUFDQSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUNHdkI7O0FEQUk7RUFDQSxXQUFXO0FDR2Y7O0FEQUk7RUFDQSxlQUFlO0FDR25COztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsVUFBVTtBQ0dkOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsVUFBVTtBQ0dkOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsVUFBVTtBQ0dkOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsV0FBVztBQ0dmOztBREFJO0VBQ0EsV0FBVztBQ0dmOztBREFJO0VBQ0EsZUFBZTtBQ0duQjs7QURBSTtFQUNBLGdCQUFnQjtBQ0dwQjs7QURBSTtFQUNBLFVBQVU7QUNHZDs7QURBSTtFQUNBLGdCQUFnQjtBQ0dwQjs7QURBSTtFQUNBLGdCQUFnQjtBQ0dwQjs7QURBSTtFQUNBLFVBQVU7QUNHZDs7QURBSTtFQUNBLGdCQUFnQjtBQ0dwQjs7QURBSTtFQUNBLGdCQUFnQjtBQ0dwQjs7QURBSTtFQUNBLFVBQVU7QUNHZDs7QURBSTtFQUNBLGdCQUFnQjtBQ0dwQjs7QURBSTtFQUNBLGdCQUFnQjtBQ0dwQjs7QURBSTtFQUNBLFdBQVc7QUNHZjs7QURBSTtFQUNBLFVBQVU7QUNHZDs7QURBSTtFQUNBLGNBQWM7QUNHbEI7O0FEQUk7RUFDQSxlQUFlO0FDR25COztBREFJO0VBQ0EsU0FBUztBQ0diOztBREFJO0VBQ0EsZUFBZTtBQ0duQjs7QURBSTtFQUNBLGVBQWU7QUNHbkI7O0FEQUk7RUFDQSxTQUFTO0FDR2I7O0FEQUk7RUFDQSxlQUFlO0FDR25COztBREFJO0VBQ0EsZUFBZTtBQ0duQjs7QURBSTtFQUNBLFNBQVM7QUNHYjs7QURBSTtFQUNBLGVBQWU7QUNHbkI7O0FEQUk7RUFDQSxlQUFlO0FDR25COztBREFJO0VBQ0EsVUFBVTtBQ0dkOztBREFJO0VBQ0EsZUFBZTtBQ0duQjs7QURBSTtFQUNBLHFCQUFxQjtBQ0d6Qjs7QURBSTtFQUNBLHNCQUFzQjtBQ0cxQjs7QURBSTtFQUNBLGdCQUFnQjtBQ0dwQjs7QURBSTtFQUNBLHNCQUFzQjtBQ0cxQjs7QURBSTtFQUNBLHNCQUFzQjtBQ0cxQjs7QURBSTtFQUNBLGdCQUFnQjtBQ0dwQjs7QURBSTtFQUNBLHNCQUFzQjtBQ0cxQjs7QURBSTtFQUNBLHNCQUFzQjtBQ0cxQjs7QURBSTtFQUNBLGdCQUFnQjtBQ0dwQjs7QURBSTtFQUNBLHNCQUFzQjtBQ0cxQjs7QURBSTtFQUNBLHNCQUFzQjtBQ0cxQjs7QURBSTtFQUNBLGlCQUFpQjtBQ0dyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1tZXNpbi1jdWNpL21lc2luLWN1Y2ktYnJhbmQvbWVzaW4tY3VjaS1icmFuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyLmhlYWRlcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLmljb24tYntcclxuICAgICAgY29sb3I6ICMzNDU0OWY7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIC5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1hZ2VzL2RlZmF1bHQvYmFja2dyb3VuZC5wbmcpO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1pbWFnZXtcclxuICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgdG9wOiAyMiU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgICYuYmctd2hpdGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJnLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIFxyXG4gICAgJi50b3Age1xyXG4gICAgdG9wOiAgMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgICYuYm90dG9tIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBoMXtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzM0NTQ5ZjtcclxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXYtaDF7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAjNTI2NTdBO1xyXG4gIFxyXG4gICAgLmljb24tYXtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgIGNvbG9yOiAjMDA5OWZmO1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIGNvbG9yOiByZ2IoNjYsIDY3LCA3Mik7XHJcbiAgICB9ICBcclxuICAgfVxyXG4gIFxyXG4gICAuc2hhcGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IC0xMCU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgfVxyXG4gIFxyXG4gIC5tYi0ye1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLWF7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjIwLCAyMjAsIDIyMCk7XHJcbiAgICAgY29sb3I6IHJnYigxNDAsIDE0MCwgMTQwKTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAudGl0bGV7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMzA1M0E0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY29se1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4N0FCREQ7XHJcbiAgfVxyXG4gIFxyXG4gIGhyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg3QUJERDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0ycHg7IFxyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgICAucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgfVxyXG4gICAgLnJvdzphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTEge1xyXG4gICAgd2lkdGg6IDguMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy0yIHtcclxuICAgIHdpZHRoOiAxNi42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTMge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtNCB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy01IHtcclxuICAgIHdpZHRoOiA0MS42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtNyB7XHJcbiAgICB3aWR0aDogNTguMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy04IHtcclxuICAgIHdpZHRoOiA2Ni42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTkge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtMTAge1xyXG4gICAgd2lkdGg6IDgzLjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtMTEge1xyXG4gICAgd2lkdGg6IDkxLjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtMTIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtMCB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC0xIHtcclxuICAgIHJpZ2h0OiA4LjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC0yIHtcclxuICAgIHJpZ2h0OiAxNi42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtMyB7XHJcbiAgICByaWdodDogMjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTQge1xyXG4gICAgcmlnaHQ6IDMzLjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC01IHtcclxuICAgIHJpZ2h0OiA0MS42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtNiB7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTcge1xyXG4gICAgcmlnaHQ6IDU4LjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC04IHtcclxuICAgIHJpZ2h0OiA2Ni42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtOSB7XHJcbiAgICByaWdodDogNzUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTEwIHtcclxuICAgIHJpZ2h0OiA4My4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtMTEge1xyXG4gICAgcmlnaHQ6IDkxLjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC0xMiB7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC0wIHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtMSB7XHJcbiAgICBsZWZ0OiA4LjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC0yIHtcclxuICAgIGxlZnQ6IDE2LjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC0zIHtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC00IHtcclxuICAgIGxlZnQ6IDMzLjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC01IHtcclxuICAgIGxlZnQ6IDQxLjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC02IHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC03IHtcclxuICAgIGxlZnQ6IDU4LjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC04IHtcclxuICAgIGxlZnQ6IDY2LjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC05IHtcclxuICAgIGxlZnQ6IDc1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC0xMCB7XHJcbiAgICBsZWZ0OiA4My4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtMTEge1xyXG4gICAgbGVmdDogOTEuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTEyIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC0wIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtNCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtNSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtNiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtNyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtOCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtOSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtMTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTExIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC0xMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIH0iLCJpb24taGVhZGVyLmhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi1oZWFkZXIuaGVhZGVyIC5pY29uLWIge1xuICBjb2xvcjogIzM0NTQ5Zjtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9kZWZhdWx0L2JhY2tncm91bmQucG5nKTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICB3aWR0aDogMzV2dztcbiAgdG9wOiAyMiU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jb250YWluZXIuYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJnLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG5cbi5iZy1pbWFnZS50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cblxuLmJnLWltYWdlLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6ICMzNDU0OWY7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbn1cblxuLmRpdi1oMSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzJTtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5pb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm94LXNoYWRvdzogIzUyNjU3QTtcbn1cblxuaW9uLWNhcmQgLmljb24tYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBjb2xvcjogIzAwOTlmZjtcbn1cblxuaW9uLWNhcmQgaDIge1xuICBjb2xvcjogIzQyNDM0ODtcbn1cblxuLnNoYXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC0xMCU7XG59XG5cbi5zaGFwZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWItMiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pdGVtLWEge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBnYWluc2Jvcm87XG4gIGNvbG9yOiAjOGM4YzhjO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tY29sIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg3QUJERDtcbn1cblxuaHI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODdBQkREO1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLTIge1xuICB3aWR0aDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTUge1xuICB3aWR0aDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLTgge1xuICB3aWR0aDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy0xMSB7XG4gIHdpZHRoOiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbn1cblxuLmNvbC14cy1wdWxsLTEge1xuICByaWdodDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xufVxuXG4uY29sLXhzLXB1bGwtNCB7XG4gIHJpZ2h0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xufVxuXG4uY29sLXhzLXB1bGwtNyB7XG4gIHJpZ2h0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xufVxuXG4uY29sLXhzLXB1bGwtMTAge1xuICByaWdodDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbn1cblxuLmNvbC14cy1wdXNoLTAge1xuICBsZWZ0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTMge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTYge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTkge1xuICBsZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMTIge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts ***!
    \********************************************************************************************/

  /*! exports provided: MesinCuciBrandPage */

  /***/
  function srcAppPagesLandingSellingMesinCuciMesinCuciBrandMesinCuciBrandPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPage", function () {
      return MesinCuciBrandPage;
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


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../services/api/membership-api.service */
    "./src/app/services/api/membership-api.service.ts");

    var MesinCuciBrandPage = /*#__PURE__*/function () {
      function MesinCuciBrandPage(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController) {
        _classCallCheck(this, MesinCuciBrandPage);

        this.membershipApiService = membershipApiService;
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.helper = helper;
        this.device = device;
        this.utilsService = utilsService;
        this.navCtrl = navCtrl;
        this.selling = selling;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.data_brand = [];
        this.data_type = [];
        this.stores = [];
      }

      _createClass(MesinCuciBrandPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getStore();
          this.getBrand();
          this.selling.removeSelling();
        }
      }, {
        key: "getStore",
        value: function getStore() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then(function (token) {
            _this.sellingApiService.getStore(token).subscribe(function (response) {
              _this.stores = response.data.store;
              console.log(_this.stores);
            }, function (err) {
              _this.stores = [];

              _this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "getBrand",
        value: function getBrand() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then(function (token) {
            _this2.sellingApiService.getBrandMesinCuci(token).subscribe(function (response) {
              _this2.data_brand = response.data.brand;
              _this2.data_type = response.data.type;
              console.log(_this2.data_brand);
            }, function (err) {
              _this2.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.brand == null || this.type == null || this.lokasi_trade == null || this.brand.replace(/\s/g, "") == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else if (this.condition == "Mati Total") {
            alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
          } else {
            this.presentAlertConfirm();
          }
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Apakah data yang di pilih sudah sesuai dengan kondisi yang sebenarnya?',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: function handler() {}
                      }, {
                        text: 'Lanjut',
                        handler: function handler() {
                          var navigationExtras = {
                            queryParams: {
                              brand: _this3.brand,
                              type: _this3.type,
                              condition: _this3.condition,
                              kondisi_fisik: _this3.kondisi_fisik,
                              rubber: _this3.rubber,
                              tutup: _this3.tutup,
                              tombol: _this3.tombol,
                              pembuangan: _this3.pembuangan,
                              pengering: _this3.pengering,
                              air_otomatis: _this3.air_otomatis,
                              pemanas: _this3.pemanas,
                              lokasi_trade: _this3.lokasi_trade
                            }
                          };

                          _this3.navCtrl.navigateForward(["/landing/mesin-cuci-brand/detail-mesin-cuci"], navigationExtras);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return MesinCuciBrandPage;
    }();

    MesinCuciBrandPage.ctorParameters = function () {
      return [{
        type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__["MembershipApiService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__["SellingApiService"]
      }, {
        type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_8__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    MesinCuciBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mesin-cuci-brand',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mesin-cuci-brand.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mesin-cuci-brand.page.scss */
      "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss"))["default"]]
    })], MesinCuciBrandPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module-es5.js.map