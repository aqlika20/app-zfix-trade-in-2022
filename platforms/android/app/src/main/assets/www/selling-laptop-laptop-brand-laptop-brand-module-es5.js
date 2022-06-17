function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-laptop-laptop-brand-laptop-brand-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"header\">\r\n    <div class=\"card-backgroud\">\r\n      <img src=\"../../../../assets/images/header/laptop.png\" alt=\"\">\r\n      <div class=\"img_kanan\">\r\n        <img src=\"../../../../assets/images/baru/form-laptopxhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"img_kiri\" routerLink=\"/landing/type\">\r\n        <div class=\"icon\">\r\n          <ion-icon class=\"ic_back\" name=\"arrow-back-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"title\">\r\n        Trade Laptop\r\n      </div>\r\n      <div class=\"subtitle\">\r\n        Silahkan isi data dibawah ini\r\n      </div>\r\n    </div>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <div class=\"content\">\r\n        <div class=\"itemBorder\">\r\n          <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Pilih tempat melakukan Trade In\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n            <ion-select-option value=\"1\">LG Store Pulogadung</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div class=\"t1\" style=\"margin-top: 30px;\">\r\n          Pilih Merk\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"asus\" class=\"laptop-merk-select\" (click)=\"selectMerk('asus')\">\r\n                <img src=\"../../../../assets/sponsor/asus_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Asus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"lenovo\" class=\"laptop-merk-select\" (click)=\"selectMerk('lenovo')\">\r\n                <img src=\"../../../../assets/sponsor/lenovo_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Lenovo</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"acer\" class=\"laptop-merk-select\" (click)=\"selectMerk('acer')\">\r\n                <img src=\"../../../../assets/sponsor/acer_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Acer</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"dell\" class=\"laptop-merk-select\" (click)=\"selectMerk('dell')\">\r\n                <img src=\"../../../../assets/sponsor/dell_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Dell</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"xiaomi\" class=\"laptop-merk-select\" (click)=\"selectMerk('xiaomi')\">\r\n                <img src=\"../../../../assets/sponsor/mi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Xiaomi</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"hp\" class=\"laptop-merk-select\" (click)=\"selectMerk('hp')\">\r\n                <img src=\"../../../../assets/sponsor/hp_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">hp</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <div class=\"show\" style=\"margin-top: 14px\">\r\n          <a>Show more brand</a> <ion-icon class=\"ic_drop\" name=\"caret-down-outline\"></ion-icon>\r\n        </div>\r\n        <!-- <ion-button class=\"btn2\">Show more brand</ion-button> -->\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Jenis Storage\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"hdd\" class=\"laptop-jenis-select\" (click)=\"selectJenis('hdd')\">\r\n                <ion-label>HDD</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"ssd\" class=\"laptop-jenis-select\" (click)=\"selectJenis('ssd')\">\r\n                <ion-label>SSD</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          RAM\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"2\" class=\"laptop-ram-select\" (click)=\"selectRam('2')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">2 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"4\" class=\"laptop-ram-select\" (click)=\"selectRam('4')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">4 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"8\" class=\"laptop-ram-select\" (click)=\"selectRam('8')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">8 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"16\" class=\"laptop-ram-select\" (click)=\"selectRam('16')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">16 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"itemBorder2\" style=\"margin-top: 14px\">\r\n          <ion-select [interfaceOptions]=\"customPopoverProcessor\" placeholder=\"Pilih Processor\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n            <ion-select-option value=\"1\">Intel 7</ion-select-option>\r\n            <ion-select-option value=\"2\">Ryzen 7000</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Operating System\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"mac\" class=\"laptop-os-select\" (click)=\"selectOs('mac')\">\r\n                <ion-label>MAC OS</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"window\" class=\"laptop-os-select\" (click)=\"selectOs('window')\">\r\n                <ion-label>Windows</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        \r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Ukuran Laptop\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"1012\" class=\"laptop-ukuran-select\" (click)=\"selectUkuran('1012')\">\r\n                <ion-label>10\" - 12\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"1315\" class=\"laptop-ukuran-select\" (click)=\"selectUkuran('1315')\">\r\n                <ion-label>13\" - 15\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t1\" style=\"margin-top: 25px;\">\r\n          Kondisi Layar Laptop\r\n        </div>\r\n\r\n        <ion-radio-group style=\"margin-top: 14px\">\r\n          <ion-item class=\"radio head\" lines=\"none\">\r\n            <ion-label class=\"t2\">Normal</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Normal\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Layar Bergaris</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Layar Bergaris\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Whitespot/Titik Hitam</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Whitespot/Titik Hitam\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">LCD Pecah</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"LCD Pecah\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        <hr>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Laptop Menyala</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiLaptop\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Touchscreen</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTouch\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">LCD Layar Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiLcd\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Layar Luar Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiLayarLuar\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Keyboard Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiKeyboard\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Trackpad Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTrackpad\"></ion-toggle>\r\n        </ion-item>\r\n        \r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Port Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiPort\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Bluetooth Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiBluetooth\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Speaker Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiSpeaker\"></ion-toggle>\r\n        </ion-item>\r\n        <hr>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kondisi Fisik\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"mulus\" class=\"laptop-fisik-select\" (click)=\"selectFisik('mulus')\">\r\n                <ion-label>Mulus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"lecet\" class=\"laptop-fisik-select\" (click)=\"selectFisik('lecet')\">\r\n                <ion-label>Lecet</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"penyok\" class=\"laptop-fisik-select\" (click)=\"selectFisik('penyok')\">\r\n                <ion-label>Penyok</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kondisi Baterai\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"normal\" class=\"laptop-baterai-select\" (click)=\"selectBaterai('normal')\">\r\n                <ion-label>Normal\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"mati\" class=\"laptop-baterai-select\" (click)=\"selectBaterai('mati')\">\r\n                <ion-label>Mati</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"bocor\" class=\"laptop-baterai-select\" (click)=\"selectBaterai('bocor')\">\r\n                <ion-label>Bocor</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kelengkapan\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"fullset\" class=\"laptop-kelengkapan-select\" (click)=\"selectKelengkapan('fullset')\">\r\n                <ion-label>Fullset\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"unitcharge\" class=\"laptop-kelengkapan-select\" (click)=\"selectKelengkapan('unitcharge')\">\r\n                <ion-label>Unit Charger</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"unit\" class=\"laptop-kelengkapan-select\" (click)=\"selectKelengkapan('unit')\">\r\n                <ion-label>Unit Only</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"btn\">\r\n          <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"openModalSubmit($event)\">Submit</ion-button>\r\n        </div>\r\n\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: LaptopBrandPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaptopBrandPageRoutingModule", function () {
      return LaptopBrandPageRoutingModule;
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


    var _laptop_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./laptop-brand.page */
    "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts");

    var routes = [{
      path: '',
      component: _laptop_brand_page__WEBPACK_IMPORTED_MODULE_3__["LaptopBrandPage"]
    }];

    var LaptopBrandPageRoutingModule = function LaptopBrandPageRoutingModule() {
      _classCallCheck(this, LaptopBrandPageRoutingModule);
    };

    LaptopBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LaptopBrandPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: LaptopBrandPageModule */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaptopBrandPageModule", function () {
      return LaptopBrandPageModule;
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


    var _laptop_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./laptop-brand-routing.module */
    "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts");
    /* harmony import */


    var _laptop_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./laptop-brand.page */
    "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts");

    var LaptopBrandPageModule = function LaptopBrandPageModule() {
      _classCallCheck(this, LaptopBrandPageModule);
    };

    LaptopBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _laptop_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["LaptopBrandPageRoutingModule"]],
      declarations: [_laptop_brand_page__WEBPACK_IMPORTED_MODULE_6__["LaptopBrandPage"]]
    })], LaptopBrandPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.header.bottom {\n  bottom: 0px;\n}\n\nion-content {\n  --background: linear-gradient(to left, #FBDAE8 30%, #fff 70%);\n}\n\n.main-menu {\n  background-color: #fff;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.content {\n  padding: 5%;\n}\n\n.labelSelect {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  top: 2%;\n  bottom: -10%;\n}\n\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 25%;\n  left: 78%;\n  height: 200%;\n}\n\n.card-backgroud .img_kiri {\n  position: absolute;\n  top: 7%;\n  left: 5%;\n  height: 200%;\n}\n\n.card-backgroud .title {\n  position: absolute;\n  top: 40%;\n  left: 5%;\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 800;\n  font-size: 30px;\n  color: black;\n}\n\n.card-backgroud .subtitle {\n  position: absolute;\n  top: 60%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-size: 18px;\n  color: black;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  text-align: left;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: left;\n}\n\n.itemBorder {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.itemBorder2 {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\nion-select {\n  max-width: 100%;\n  text-align: left !important;\n  color: black;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\n\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n\n.selected {\n  background: #eaf5ff;\n  border: 1px solid #045fc4;\n}\n\n.laptop-merk-select {\n  margin-left: 0;\n  margin-top: 3%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.laptop-jenis-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 9%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.laptop-ram-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.laptop-os-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.laptop-ukuran-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.laptop-fisik-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.laptop-baterai-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.laptop-kelengkapan-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.toggle {\n  margin-left: 0;\n  margin-top: 5%;\n}\n\n.toggle2 {\n  margin-left: 0;\n  margin-top: 0;\n}\n\nion-item::part(native) {\n  --padding-start: 0 !important;\n  --inner-padding-end: 0 !important;\n}\n\nhr {\n  border-bottom: 2px solid #EBEBEB;\n}\n\nhr:after {\n  content: '';\n  display: block;\n  border-bottom: 2px solid #EBEBEB;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n\n.radio.head {\n  margin-left: 0;\n}\n\n.radio {\n  margin-left: 0;\n}\n\n.show {\n  color: black;\n  padding-left: 10px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.ic_drop {\n  margin-left: 6px;\n}\n\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n  margin-top: 5%;\n}\n\nion-grid {\n  padding: 0 !important;\n}\n\nion-toggle {\n  height: 50%;\n  width: 13%;\n  --handle-width: 50%;\n}\n\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n}\n\n.ic_back {\n  font-size: 25px;\n  color: #045fc4;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWxhcHRvcC9sYXB0b3AtYnJhbmQvRDpcXHpmaXgtdHJhZGUtaW4tMjAyMi9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNlbGxpbmctbGFwdG9wXFxsYXB0b3AtYnJhbmRcXGxhcHRvcC1icmFuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1sYXB0b3AvbGFwdG9wLWJyYW5kL2xhcHRvcC1icmFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7QUNDWDs7QURQQTtFQVNJLFFBQVM7RUFDVCw0QkFBNEI7QUNFaEM7O0FEWkE7RUFjRSxXQUFXO0FDRWI7O0FERUE7RUFDRSw2REFBYTtBQ0NmOztBREdBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUNBOUI7O0FESUE7RUFDRSxXQUFXO0FDRGI7O0FESUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNEakI7O0FESUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxZQUFZO0FDRGQ7O0FESEE7RUFPSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0FDQWhCOztBRFZBO0VBY0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtBQ0FoQjs7QURqQkE7RUFxQkksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1Isb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQ0FoQjs7QUQzQkE7RUErQkksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixZQUFZO0FDQWhCOztBRElBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtBQ0RsQjs7QURJQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUNEbEI7O0FESUE7RUFDRSx5QkFBd0M7RUFDeEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0FDRGpDOztBRElBO0VBQ0UseUJBQXdDO0VBQ3hDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQjtBQ0RqQzs7QURJQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLDBCQUFvQjtFQUNwQix3QkFBc0I7QUNEeEI7O0FESUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7QUNEWjs7QURJQTtFQUNFLG1CQUFrQztFQUNsQyx5QkFBcUM7QUNEdkM7O0FESUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7QUNEakI7O0FESUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0FDRGpCOztBRElBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtBQ0RqQjs7QURJQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7QUNEakI7O0FESUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0FDRGpCOztBRElBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtBQ0RqQjs7QURJQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7QUNEakI7O0FESUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0FDRGpCOztBRElBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUNEaEI7O0FESUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQ0RmOztBRElBO0VBQ0UsNkJBQWdCO0VBQ2hCLGlDQUFvQjtBQ0R0Qjs7QURJQTtFQUNFLGdDQUFnQztBQ0RsQzs7QURJQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixjQUFjO0FDRGhCOztBRElBO0VBQ0UsY0FBYztBQ0RoQjs7QURJQTtFQUNFLGNBQWM7QUNEaEI7O0FESUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQ0RqQjs7QURJQTtFQUNFLGdCQUFnQjtBQ0RsQjs7QURJQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7QUNEaEI7O0FESUE7RUFDRSxxQkFBcUI7QUNEdkI7O0FESUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFlO0FDRGpCOztBRElBO0VBQ0UsbUJBQWtDO0VBQ2xDLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQ0RiOztBRElBO0VBQ0UsZUFBZTtFQUNmLGNBQTBCO0FDRDVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWxhcHRvcC9sYXB0b3AtYnJhbmQvbGFwdG9wLWJyYW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gICYudG9wIHtcclxuICAgIHRvcDogIDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgfVxyXG5cclxuICAmLmJvdHRvbSB7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRkJEQUU4IDMwJSwgI2ZmZiA3MCUpO1xyXG4gIFxyXG59XHJcblxyXG4ubWFpbi1tZW51e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5sYWJlbFNlbGVjdHtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2tncm91ZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdG9wOiAyJTtcclxuICBib3R0b206IC0xMCU7XHJcblxyXG4gIC5pbWdfa2FuYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDc4JTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICB9XHJcblxyXG4gIC5pbWdfa2lyaXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNyU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLnQxe1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnQye1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLml0ZW1Cb3JkZXJ7XHJcbiAgYm9yZGVyOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDEpIHNvbGlkIDFweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5pdGVtQm9yZGVyMntcclxuICBib3JkZXI6IHJnYmEoMjM1LCAyMzUsIDIzNSwgMSkgc29saWQgMXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbil7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNlbGVjdGVke1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyNDUsIDI1NSwgMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0LCA5NSwgMTk2LCAxKTtcclxufVxyXG5cclxuLmxhcHRvcC1tZXJrLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5sYXB0b3AtamVuaXMtc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDklO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubGFwdG9wLXJhbS1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMTElO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubGFwdG9wLW9zLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5sYXB0b3AtdWt1cmFuLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMTAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5sYXB0b3AtZmlzaWstc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmxhcHRvcC1iYXRlcmFpLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMTAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5sYXB0b3Ata2VsZW5na2FwYW4tc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnRvZ2dsZXtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnRvZ2dsZTJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKXtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDsgXHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XHJcbn1cclxuXHJcbmhyOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcclxuICBtYXJnaW4tYm90dG9tOiAtMnB4OyBcclxuICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnJhZGlvLmhlYWR7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5yYWRpb3tcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLnNob3d7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5pY19kcm9we1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9nZ2xle1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMyU7XHJcbiAgLS1oYW5kbGUtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAyMzgsIDI0NSwgMSk7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5pY19iYWNrIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmhlYWRlci50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cblxuLmhlYWRlci5ib3R0b20ge1xuICBib3R0b206IDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRkJEQUU4IDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmxhYmVsU2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJkLWJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRvcDogMiU7XG4gIGJvdHRvbTogLTEwJTtcbn1cblxuLmNhcmQtYmFja2dyb3VkIC5pbWdfa2FuYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiA3OCU7XG4gIGhlaWdodDogMjAwJTtcbn1cblxuLmNhcmQtYmFja2dyb3VkIC5pbWdfa2lyaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3JTtcbiAgbGVmdDogNSU7XG4gIGhlaWdodDogMjAwJTtcbn1cblxuLmNhcmQtYmFja2dyb3VkIC50aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQgLnN1YnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwJTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MiB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pdGVtQm9yZGVyIHtcbiAgYm9yZGVyOiAjZWJlYmViIHNvbGlkIDFweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG59XG5cbi5pdGVtQm9yZGVyMiB7XG4gIGJvcmRlcjogI2ViZWJlYiBzb2xpZCAxcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cblxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2VhZjVmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0NWZjNDtcbn1cblxuLmxhcHRvcC1tZXJrLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3AtamVuaXMtc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmxhcHRvcC1yYW0tc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3Atb3Mtc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3AtdWt1cmFuLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubGFwdG9wLWZpc2lrLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubGFwdG9wLWJhdGVyYWktc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3Ata2VsZW5na2FwYW4tc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi50b2dnbGUge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi50b2dnbGUyIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xufVxuXG5ociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xufVxuXG5ocjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4ucmFkaW8uaGVhZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ucmFkaW8ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNob3cge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pY19kcm9wIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMyU7XG4gIC0taGFuZGxlLXdpZHRoOiA1MCU7XG59XG5cbi5pY29uIHtcbiAgYmFja2dyb3VuZDogI2ViZWVmNTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmljX2JhY2sge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDQ1ZmM0O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts ***!
    \********************************************************************************/

  /*! exports provided: LaptopBrandPage */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaptopBrandPage", function () {
      return LaptopBrandPage;
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
    /* harmony import */


    var src_app_pages_landing_modal_modal_price_modal_price_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/pages/landing/modal/modal-price/modal-price.component */
    "./src/app/pages/landing/modal/modal-price/modal-price.component.ts");

    var LaptopBrandPage = /*#__PURE__*/function () {
      function LaptopBrandPage(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController, modalController) {
        _classCallCheck(this, LaptopBrandPage);

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
        this.modalController = modalController;
        this.stores = [];
        this.searchedStores = [];
        this.data_brand = [];
        this.data_storage = [];
        this.data_memory = [];
        this.data_processor = [];
        this.data_jenis_storage = ['HDD/SATA', 'SSD'];
        this.data_storage_ssd = ['128GB', '256GB', '500GB', '512GB', '1TB'];
        this.data_storage_hdd_sata = ['250GB', '500GB', '1TB'];
        this.data_ukuran_laptop = ['10" - 12"inch', '13" - 15"inch'];
        this.data_os = ['Windows', 'MacOs', 'Non Operating System'];
        this.kondisiLaptop = false;
        this.kondisiTouch = false;
        this.kondisiLcd = false;
        this.kondisiLayarLuar = false;
        this.kondisiKeyboard = false;
        this.kondisiTrackpad = false;
        this.kondisiPort = false;
        this.kondisiBluetooth = false;
        this.kondisiSpeaker = false;
        this.customPopoverOptions = {
          header: 'Pilih Tempat Trade In',
          message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
        };
        this.customPopoverProcessor = {
          header: 'Pilih Processor'
        };
      }

      _createClass(LaptopBrandPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStore();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getStore();
          this.selling.removeSelling();
          this.getBrand();
        }
      }, {
        key: "openModalSubmit",
        value: function openModalSubmit(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modalSubmit;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: src_app_pages_landing_modal_modal_price_modal_price_component__WEBPACK_IMPORTED_MODULE_12__["ModalPriceComponent"],
                      cssClass: 'my-custom-modal-css',
                      backdropDismiss: false,
                      id: 'my-modal-id'
                    });

                  case 2:
                    modalSubmit = _context.sent;
                    _context.next = 5;
                    return modalSubmit.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectMerk",
        value: function selectMerk(val) {
          this.selected_merk = val;
          document.querySelectorAll('.laptop-merk-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectJenis",
        value: function selectJenis(val) {
          this.selected_jenis = val;
          document.querySelectorAll('.laptop-jenis-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectUkuran",
        value: function selectUkuran(val) {
          this.selected_ukuran = val;
          document.querySelectorAll('.laptop-ukuran-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectOs",
        value: function selectOs(val) {
          this.selected_os = val;
          document.querySelectorAll('.laptop-os-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectRam",
        value: function selectRam(val) {
          this.selected_ram = val;
          document.querySelectorAll('.laptop-ram-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectFisik",
        value: function selectFisik(val) {
          this.selected_fisik = val;
          document.querySelectorAll('.laptop-fisik-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectBaterai",
        value: function selectBaterai(val) {
          this.selected_baterai = val;
          document.querySelectorAll('.laptop-baterai-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectKelengkapan",
        value: function selectKelengkapan(val) {
          this.selected_kelengkapan = val;
          document.querySelectorAll('.laptop-kelengkapan-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
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
            _this2.sellingApiService.getBrandLaptop(token).subscribe(function (response) {
              _this2.data_brand = response.data.brand;
              _this2.data_storage = response.data.storages;
              _this2.data_memory = response.data.memory;
              _this2.data_processor = response.data.processor; //  console.log(this.data_brand)
            }, function (err) {
              _this2.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.brand == null || this.memory == null || this.storages == null || this.lokasi_trade == null) {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else if (this.kondisi_laptop == "Mati Total") {
            alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
          } else {
            this.presentAlertConfirm();
          }
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
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
                              memory: _this3.memory,
                              storages: _this3.storages,
                              lokasi_trade: _this3.lokasi_trade,
                              inner_valueSelected: _this3.inner_valueSelected,
                              outer_valueSelected: _this3.outer_valueSelected,
                              condition_valueSelected: _this3.condition_valueSelected,
                              addition_valueSelected: _this3.addition_valueSelected,
                              jenis_storage: _this3.jenis_storage,
                              kondisi_laptop: _this3.kondisi_laptop,
                              jenis_layar: _this3.jenis_layar,
                              baterai: _this3.baterai,
                              kondisi_layar: _this3.kondisi_layar,
                              keyboard: _this3.keyboard,
                              trackpad: _this3.trackpad,
                              port: _this3.port,
                              wifi: _this3.wifi,
                              camera: _this3.camera,
                              speaker: _this3.speaker,
                              processor: _this3.processor,
                              ukuran_laptop: _this3.ukuran_laptop,
                              os: _this3.os,
                              more_addition: _this3.more_addition
                            }
                          };

                          _this3.navCtrl.navigateForward(["/landing/laptop-brand/detail-unit"], navigationExtras);
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LaptopBrandPage;
    }();

    LaptopBrandPage.ctorParameters = function () {
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
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    LaptopBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-laptop-brand',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./laptop-brand.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./laptop-brand.page.scss */
      "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss"))["default"]]
    })], LaptopBrandPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-laptop-laptop-brand-laptop-brand-module-es5.js.map