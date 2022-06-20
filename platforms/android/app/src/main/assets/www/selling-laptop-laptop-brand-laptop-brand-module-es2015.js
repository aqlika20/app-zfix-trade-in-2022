(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-laptop-laptop-brand-laptop-brand-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"header\">\r\n    <div class=\"card-backgroud\">\r\n      <img src=\"../../../../assets/images/header/laptop.png\" alt=\"\">\r\n      <div class=\"img_kanan\">\r\n        <img src=\"../../../../assets/images/baru/form-laptopxhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"img_kiri\">\r\n        <img src=\"../../../../assets/icon/arrow-leftxxxhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"title\">\r\n        Trade Laptop\r\n      </div>\r\n      <div class=\"subtitle\">\r\n        Silahkan isi data dibawah ini\r\n      </div>\r\n    </div>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <div class=\"content\">\r\n        <div class=\"itemBorder\">\r\n          <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Pilih tempat melakukan Trade In\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n            <ion-select-option value=\"1\">LG Store Pulogadung</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div class=\"t1\" style=\"margin-top: 30px;\">\r\n          Pilih Merk\r\n        </div>\r\n\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"asus\" class=\"laptop-merk-select\" (click)=\"selectMerk('asus')\">\r\n                <img src=\"../../../../assets/sponsor/asus_lg.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Asus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"lenovo\" class=\"laptop-merk-select\" (click)=\"selectMerk('lenovo')\">\r\n                <img src=\"../../../../assets/sponsor/lenovo_lg.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Lenovo</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\" offset-md=\"3\">\r\n              <ion-card id=\"acer\" class=\"laptop-merk-select\" (click)=\"selectMerk('acer')\">\r\n                <img src=\"../../../../assets/sponsor/acer_lg.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Acer</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"dell\" class=\"laptop-merk-select\" (click)=\"selectMerk('dell')\">\r\n                <img src=\"../../../../assets/sponsor/dell_lg.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Dell</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"xiaomi\" class=\"laptop-merk-select\" (click)=\"selectMerk('xiaomi')\">\r\n                <img src=\"../../../../assets/sponsor/mi.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Xiaomi</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\" offset-md=\"3\">\r\n              <ion-card id=\"hp\" class=\"laptop-merk-select\" (click)=\"selectMerk('hp')\">\r\n                <img src=\"../../../../assets/sponsor/hp_lg.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">hp</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <div class=\"show\">\r\n          <a>Show more brand</a> <ion-icon class=\"icon\" name=\"caret-down-outline\"></ion-icon>\r\n        </div>\r\n        <!-- <ion-button class=\"btn2\">Show more brand</ion-button> -->\r\n\r\n        <div class=\"t2\">\r\n          Jenis Storage\r\n        </div>\r\n        \r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"hdd\" class=\"laptop-jenis-select\" (click)=\"selectJenis('hdd')\">\r\n                <ion-label>HDD</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"ssd\" class=\"laptop-jenis-select\" (click)=\"selectJenis('ssd')\">\r\n                <ion-label>SSD</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\">\r\n          RAM\r\n        </div>\r\n\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"2\" class=\"laptop-ram-select\" (click)=\"selectRam('2')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">2 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"4\" class=\"laptop-ram-select\" (click)=\"selectRam('4')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">4 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"8\" class=\"laptop-ram-select\" (click)=\"selectRam('8')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">8 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"16\" class=\"laptop-ram-select\" (click)=\"selectRam('16')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">16 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"itemBorder2\">\r\n          <ion-select [interfaceOptions]=\"customPopoverProcessor\" placeholder=\"Pilih Processor\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n            <ion-select-option value=\"1\">Intel 7</ion-select-option>\r\n            <ion-select-option value=\"2\">Ryzen 7000</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n\r\n        <div class=\"t2\">\r\n          Operating System\r\n        </div>\r\n        \r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"mac\" class=\"laptop-os-select\" (click)=\"selectOs('mac')\">\r\n                <ion-label>MAC OS</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"window\" class=\"laptop-os-select\" (click)=\"selectOs('window')\">\r\n                <ion-label>Windows</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        \r\n        <div class=\"t2\">\r\n          Ukuran Laptop\r\n        </div>\r\n        \r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"1012\" class=\"laptop-ukuran-select\" (click)=\"selectUkuran('1012')\">\r\n                <ion-label>10\" - 12\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"1315\" class=\"laptop-ukuran-select\" (click)=\"selectUkuran('1315')\">\r\n                <ion-label>13\" - 15\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t1\" style=\"margin-top: 30px;\">\r\n          Kondisi Layar Laptop\r\n        </div>\r\n\r\n        <ion-radio-group>\r\n          <ion-item class=\"radio head\" lines=\"none\">\r\n            <ion-label class=\"t2\">Normal</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Normal\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Layar Bergaris</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Layar Bergaris\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Whitespot/Titik Hitam</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Whitespot/Titik Hitam\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">LCD Pecah</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"LCD Pecah\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        <hr>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Laptop Menyala</ion-label>\r\n          <ion-toggle [(ngModel)]=\"kondisiLaptop\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Touchscreen</ion-label>\r\n          <ion-toggle [(ngModel)]=\"kondisiTouch\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">LCD Layar Berfungsi Normal</ion-label>\r\n          <ion-toggle [(ngModel)]=\"kondisiLcd\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Layar Luar Berfungsi Normal</ion-label>\r\n          <ion-toggle [(ngModel)]=\"kondisiLayarLuar\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Keyboard Berfungsi Normal</ion-label>\r\n          <ion-toggle [(ngModel)]=\"kondisiKeyboard\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Trackpad Berfungsi Normal</ion-label>\r\n          <ion-toggle [(ngModel)]=\"kondisiTrackpad\"></ion-toggle>\r\n        </ion-item>\r\n        \r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Port Berfungsi Normal</ion-label>\r\n          <ion-toggle [(ngModel)]=\"kondisiPort\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Bluetooth Berfungsi Normal</ion-label>\r\n          <ion-toggle [(ngModel)]=\"kondisiBluetooth\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Speaker Berfungsi Normal</ion-label>\r\n          <ion-toggle [(ngModel)]=\"kondisiSpeaker\"></ion-toggle>\r\n        </ion-item>\r\n        <hr>\r\n\r\n        <div class=\"t2\">\r\n          Kondisi Fisik\r\n        </div>\r\n        \r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"mulus\" class=\"laptop-fisik-select\" (click)=\"selectFisik('mulus')\">\r\n                <ion-label>Mulus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"lecet\" class=\"laptop-fisik-select\" (click)=\"selectFisik('lecet')\">\r\n                <ion-label>Lecet</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"penyok\" class=\"laptop-fisik-select\" (click)=\"selectFisik('penyok')\">\r\n                <ion-label>Penyok</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\">\r\n          Kondisi Baterai\r\n        </div>\r\n        \r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"normal\" class=\"laptop-baterai-select\" (click)=\"selectBaterai('normal')\">\r\n                <ion-label>Normal\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"mati\" class=\"laptop-baterai-select\" (click)=\"selectBaterai('mati')\">\r\n                <ion-label>Mati</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"bocor\" class=\"laptop-baterai-select\" (click)=\"selectBaterai('bocor')\">\r\n                <ion-label>Bocor</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\">\r\n          Kelengkapan\r\n        </div>\r\n        \r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"fullset\" class=\"laptop-kelengkapan-select\" (click)=\"selectKelengkapan('fullset')\">\r\n                <ion-label>Fullset\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"unitcharge\" class=\"laptop-kelengkapan-select\" (click)=\"selectKelengkapan('unitcharge')\">\r\n                <ion-label>Unit Charger</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"unit\" class=\"laptop-kelengkapan-select\" (click)=\"selectKelengkapan('unit')\">\r\n                <ion-label>Unit Only</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <ion-button class=\"btn\" shape=\"round\" (click)=\"submit()\">Submit</ion-button>\r\n\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: LaptopBrandPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopBrandPageRoutingModule", function() { return LaptopBrandPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _laptop_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laptop-brand.page */ "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts");




const routes = [
    {
        path: '',
        component: _laptop_brand_page__WEBPACK_IMPORTED_MODULE_3__["LaptopBrandPage"]
    }
];
let LaptopBrandPageRoutingModule = class LaptopBrandPageRoutingModule {
};
LaptopBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LaptopBrandPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.module.ts ***!
  \**********************************************************************************/
/*! exports provided: LaptopBrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopBrandPageModule", function() { return LaptopBrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _laptop_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./laptop-brand-routing.module */ "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts");
/* harmony import */ var _laptop_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./laptop-brand.page */ "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts");







let LaptopBrandPageModule = class LaptopBrandPageModule {
};
LaptopBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _laptop_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["LaptopBrandPageRoutingModule"]
        ],
        declarations: [_laptop_brand_page__WEBPACK_IMPORTED_MODULE_6__["LaptopBrandPage"]]
    })
], LaptopBrandPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.header.bottom {\n  bottom: 0px;\n}\nion-content {\n  --background: linear-gradient(to left, #FBDAE8 30%, #fff 70%);\n}\n.main-menu {\n  background-color: #fff;\n  display: flex;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.content {\n  padding: 20px;\n}\n.labelSelect {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 14px;\n}\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  top: 2%;\n  bottom: -10%;\n}\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 25%;\n  left: 78%;\n  height: 200%;\n}\n.card-backgroud .img_kiri {\n  position: absolute;\n  top: 7%;\n  left: 5%;\n  height: 200%;\n}\n.card-backgroud .title {\n  position: absolute;\n  top: 40%;\n  left: 5%;\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 800;\n  font-size: 30px;\n  color: black;\n}\n.card-backgroud .subtitle {\n  position: absolute;\n  top: 60%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-size: 18px;\n  color: black;\n}\n.t1 {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 500;\n  font-size: 20px;\n  color: black;\n  text-align: left;\n}\n.t2 {\n  margin-top: 8%;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n.itemBorder {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.itemBorder2 {\n  margin-top: 10%;\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-select {\n  max-width: 100%;\n  text-align: left !important;\n  color: black;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n.selected {\n  background: #eaf5ff;\n  border: 1px solid #045fc4;\n}\n.laptop-merk-select {\n  margin-left: 0;\n  margin-top: 3%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-jenis-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 9%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-ram-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-os-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-ukuran-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-fisik-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-baterai-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-kelengkapan-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.toggle {\n  margin-left: 0;\n  margin-top: 3%;\n}\n.toggle2 {\n  margin-left: 0;\n  margin-top: 0;\n}\nion-item::part(native) {\n  --padding-start: 0 !important;\n  --inner-padding-end: 0 !important;\n}\nhr {\n  border-bottom: 2px solid #EBEBEB;\n}\nhr:after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #EBEBEB;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n.radio.head {\n  margin-left: 0;\n  margin-top: 3%;\n}\n.radio {\n  margin-left: 0;\n}\n.btn {\n  width: 100%;\n  height: 3%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n  margin-top: 5%;\n  margin-bottom: 10%;\n}\n.show {\n  color: black;\n  padding-left: 10px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n.icon {\n  margin-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWxhcHRvcC9sYXB0b3AtYnJhbmQvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNlbGxpbmctbGFwdG9wXFxsYXB0b3AtYnJhbmRcXGxhcHRvcC1icmFuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1sYXB0b3AvbGFwdG9wLWJyYW5kL2xhcHRvcC1icmFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNFLFFBQUE7RUFDQSw0QkFBQTtBQ0NKO0FERUU7RUFDQSxXQUFBO0FDQUY7QURJQTtFQUNFLDZEQUFBO0FDREY7QURLQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0ZGO0FETUE7RUFDRSxhQUFBO0FDSEY7QURNQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0hGO0FES0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0hKO0FETUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0pKO0FET0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDTEo7QURRRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDTko7QURVQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUEY7QURTQTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ05GO0FEU0E7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDTkY7QURTQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDTkY7QURTQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDTkY7QURTQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNORjtBRFNBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNORjtBRFNBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ05GO0FEU0E7RUFDRSw2QkFBQTtFQUNBLGlDQUFBO0FDTkY7QURTQTtFQUNFLGdDQUFBO0FDTkY7QURTQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNORjtBRFNBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNORjtBRFNBO0VBQ0UsY0FBQTtBQ05GO0FEU0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNORjtBRFNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNORjtBRFNBO0VBQ0UsZ0JBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1sYXB0b3AvbGFwdG9wLWJyYW5kL2xhcHRvcC1icmFuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICAmLnRvcCB7XHJcbiAgICB0b3A6ICAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuXHJcbiAgJi5ib3R0b20ge1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0ZCREFFOCAzMCUsICNmZmYgNzAlKTtcclxuICBcclxufVxyXG5cclxuLm1haW4tbWVudXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmxhYmVsU2VsZWN0e1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3Vke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0b3A6IDIlO1xyXG4gIGJvdHRvbTogLTEwJTtcclxuXHJcbiAgLmltZ19rYW5hbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgbGVmdDogNzglO1xyXG4gICAgaGVpZ2h0OiAyMDAlO1xyXG4gIH1cclxuXHJcbiAgLmltZ19raXJpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3JTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiAyMDAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4udDF7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50MntcclxuICBtYXJnaW4tdG9wOiA4JTtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pdGVtQm9yZGVye1xyXG4gIGJvcmRlcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAxKSBzb2xpZCAxcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uaXRlbUJvcmRlcjJ7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGJvcmRlcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAxKSBzb2xpZCAxcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxufVxyXG5cclxuaW9uLXNlbGVjdDo6cGFydChpY29uKXtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2VsZWN0ZWR7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDI0NSwgMjU1LCAxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQsIDk1LCAxOTYsIDEpO1xyXG59XHJcblxyXG4ubGFwdG9wLW1lcmstc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmxhcHRvcC1qZW5pcy1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogOSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5sYXB0b3AtcmFtLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5sYXB0b3Atb3Mtc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDExJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmxhcHRvcC11a3VyYW4tc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmxhcHRvcC1maXNpay1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTEwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubGFwdG9wLWJhdGVyYWktc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmxhcHRvcC1rZWxlbmdrYXBhbi1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTEwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udG9nZ2xle1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4udG9nZ2xlMntcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5pb24taXRlbTo6cGFydChuYXRpdmUpe1xyXG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50OyBcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcclxufVxyXG5cclxuaHI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xyXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7IFxyXG4gIG1heC13aWR0aDogNTAlO1xyXG59XHJcblxyXG4ucmFkaW8uaGVhZHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxuLnJhZGlve1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMyU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uc2hvd3tcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmljb257XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufSIsIi5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uaGVhZGVyLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuLmhlYWRlci5ib3R0b20ge1xuICBib3R0b206IDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRkJEQUU4IDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubGFiZWxTZWxlY3Qge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcmQtYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAyJTtcbiAgYm90dG9tOiAtMTAlO1xufVxuLmNhcmQtYmFja2dyb3VkIC5pbWdfa2FuYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiA3OCU7XG4gIGhlaWdodDogMjAwJTtcbn1cbi5jYXJkLWJhY2tncm91ZCAuaW1nX2tpcmkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNyU7XG4gIGxlZnQ6IDUlO1xuICBoZWlnaHQ6IDIwMCU7XG59XG4uY2FyZC1iYWNrZ3JvdWQgLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4uY2FyZC1iYWNrZ3JvdWQgLnN1YnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwJTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MiB7XG4gIG1hcmdpbi10b3A6IDglO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaXRlbUJvcmRlciB7XG4gIGJvcmRlcjogI2ViZWJlYiBzb2xpZCAxcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG4uaXRlbUJvcmRlcjIge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGJvcmRlcjogI2ViZWJlYiBzb2xpZCAxcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cblxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2VhZjVmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0NWZjNDtcbn1cblxuLmxhcHRvcC1tZXJrLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3AtamVuaXMtc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmxhcHRvcC1yYW0tc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3Atb3Mtc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3AtdWt1cmFuLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubGFwdG9wLWZpc2lrLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubGFwdG9wLWJhdGVyYWktc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3Ata2VsZW5na2FwYW4tc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi50b2dnbGUge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi50b2dnbGUyIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xufVxuXG5ociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xufVxuXG5ocjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5yYWRpby5oZWFkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4ucmFkaW8ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLnNob3cge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts ***!
  \********************************************************************************/
/*! exports provided: LaptopBrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopBrandPage", function() { return LaptopBrandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");














let LaptopBrandPage = class LaptopBrandPage {
    constructor(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController) {
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
            header: 'Pilih Processor',
            message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
        };
    }
    ngOnInit() {
        this.getStore();
    }
    ionViewWillEnter() {
        this.getStore();
        this.selling.removeSelling();
        this.getBrand();
    }
    selectMerk(val) {
        this.selected_merk = val;
        document.querySelectorAll('.laptop-merk-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectJenis(val) {
        this.selected_jenis = val;
        document.querySelectorAll('.laptop-jenis-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectUkuran(val) {
        this.selected_ukuran = val;
        document.querySelectorAll('.laptop-ukuran-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectOs(val) {
        this.selected_os = val;
        document.querySelectorAll('.laptop-os-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectRam(val) {
        this.selected_ram = val;
        document.querySelectorAll('.laptop-ram-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectFisik(val) {
        this.selected_fisik = val;
        document.querySelectorAll('.laptop-fisik-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectBaterai(val) {
        this.selected_baterai = val;
        document.querySelectorAll('.laptop-baterai-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectKelengkapan(val) {
        this.selected_kelengkapan = val;
        document.querySelectorAll('.laptop-kelengkapan-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    getStore() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then((token) => {
            this.sellingApiService.getStore(token).subscribe((response) => {
                this.stores = response.data.store;
                console.log(this.stores);
            }, (err) => {
                this.stores = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    getBrand() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then((token) => {
            this.sellingApiService.getBrandLaptop(token).subscribe((response) => {
                this.data_brand = response.data.brand;
                this.data_storage = response.data.storages;
                this.data_memory = response.data.memory;
                this.data_processor = response.data.processor;
                //  console.log(this.data_brand)
            }, (err) => {
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    submit() {
        if ((this.brand == null || this.memory == null || this.storages == null || this.lokasi_trade == null)) {
            this.utilsService.showToast("Lengkapi pengisian form.");
        }
        else if (this.kondisi_laptop == "Mati Total") {
            alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
        }
        else {
            this.presentAlertConfirm();
        }
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Apakah data yang di pilih sudah sesuai dengan kondisi yang sebenarnya?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: () => { }
                    }, {
                        text: 'Lanjut',
                        handler: () => {
                            let navigationExtras = {
                                queryParams: {
                                    brand: this.brand,
                                    memory: this.memory,
                                    storages: this.storages,
                                    lokasi_trade: this.lokasi_trade,
                                    inner_valueSelected: this.inner_valueSelected,
                                    outer_valueSelected: this.outer_valueSelected,
                                    condition_valueSelected: this.condition_valueSelected,
                                    addition_valueSelected: this.addition_valueSelected,
                                    jenis_storage: this.jenis_storage,
                                    kondisi_laptop: this.kondisi_laptop,
                                    jenis_layar: this.jenis_layar,
                                    baterai: this.baterai,
                                    kondisi_layar: this.kondisi_layar,
                                    keyboard: this.keyboard,
                                    trackpad: this.trackpad,
                                    port: this.port,
                                    wifi: this.wifi,
                                    camera: this.camera,
                                    speaker: this.speaker,
                                    processor: this.processor,
                                    ukuran_laptop: this.ukuran_laptop,
                                    os: this.os,
                                    more_addition: this.more_addition
                                }
                            };
                            this.navCtrl.navigateForward(["/landing/laptop-brand/detail-unit"], navigationExtras);
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
};
LaptopBrandPage.ctorParameters = () => [
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__["MembershipApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__["SellingApiService"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_8__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
LaptopBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-laptop-brand',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./laptop-brand.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./laptop-brand.page.scss */ "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss")).default]
    })
], LaptopBrandPage);



/***/ })

}]);
//# sourceMappingURL=selling-laptop-laptop-brand-laptop-brand-module-es2015.js.map