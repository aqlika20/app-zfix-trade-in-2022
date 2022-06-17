(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-kulkas-kulkas-brand-kulkas-brand-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"header\">\r\n    <div class=\"card-backgroud\">\r\n      <img src=\"../../../../assets/images/header/kulkas.png\" alt=\"\">\r\n      <div class=\"img_kanan\">\r\n        <img src=\"../../../../assets/images/baru/form-kulkasxhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"img_kiri\" routerLink=\"/landing/type\">\r\n        <div class=\"icon\">\r\n          <ion-icon class=\"ic_back\" name=\"arrow-back-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"title\">\r\n        Trade Kulkas\r\n      </div>\r\n      <div class=\"subtitle\">\r\n        Silahkan isi data dibawah ini\r\n      </div>\r\n    </div>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <div class=\"content\">\r\n        <div class=\"itemBorder\">\r\n          <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Pilih tempat melakukan Trade In\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n            <ion-select-option value=\"1\">LG Store Pulogadung</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div class=\"t1\" style=\"margin-top: 30px;\">\r\n          Pilih Merk\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"lg\" class=\"kulkas-merk-select\" (click)=\"selectMerk('lg')\">\r\n                <img src=\"../../../../assets/sponsor/lg_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">LG</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"sharp\" class=\"kulkas-merk-select\" (click)=\"selectMerk('sharp')\">\r\n                <img src=\"../../../../assets/sponsor/sharp.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Sharp</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"sony\" class=\"kulkas-merk-select\" (click)=\"selectMerk('sony')\">\r\n                <img src=\"../../../../assets/sponsor/sony_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Sony</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"samsung\" class=\"kulkas-merk-select\" (click)=\"selectMerk('samsung')\">\r\n                <img src=\"../../../../assets/sponsor/samsung_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Samsung</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"xiaomi\" class=\"kulkas-merk-select\" (click)=\"selectMerk('xiaomi')\">\r\n                <img src=\"../../../../assets/sponsor/mi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Xiaomi</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"panasonic\" class=\"kulkas-merk-select\" (click)=\"selectMerk('panasonic')\">\r\n                <img src=\"../../../../assets/sponsor/panasonic.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Panasonic</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <div class=\"show\" style=\"margin-top: 14px\">\r\n          <a>Show more brand</a> <ion-icon class=\"ic_drop\" name=\"caret-down-outline\"></ion-icon>\r\n        </div>\r\n        <!-- <ion-button class=\"btn2\">Show more brand</ion-button> -->\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Tipe\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"inverter\" class=\"kulkas-tipe-select\" (click)=\"selectTipe('inverter')\">\r\n                <ion-label>Inverter</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"noninverter\" class=\"kulkas-tipe-select\" (click)=\"selectTipe('noninverter')\">\r\n                <ion-label>Non Inverter</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Model\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"one\" class=\"kulkas-model-select\" (click)=\"selectModel('one')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">1 Pintu</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"two\" class=\"kulkas-model-select\" (click)=\"selectModel('two')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">2 Pintu</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kondisi Fisik\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"mulus\" class=\"kulkas-fisik-select\" (click)=\"selectFisik('mulus')\">\r\n                <ion-label>Mulus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"lecet\" class=\"kulkas-fisik-select\" (click)=\"selectFisik('lecet')\">\r\n                <ion-label>Lecet</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"penyok\" class=\"kulkas-fisik-select\" (click)=\"selectFisik('penyok')\">\r\n                <ion-label>Penyok</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <hr>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Kulkas Menyala</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiKulkas\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Rubber Kulkas Berfungsi</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiRubber\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Tutup Freezer Komplit</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTutupFreezer\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kelengkapan Tray Kulkas Komplit</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTray\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Freezer Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiFreezer\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <div class=\"btn\">\r\n          <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"openModalSubmit($event)\">Submit</ion-button>\r\n        </div>\r\n        \r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: KulkasBrandPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KulkasBrandPageRoutingModule", function() { return KulkasBrandPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _kulkas_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kulkas-brand.page */ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.ts");




const routes = [
    {
        path: '',
        component: _kulkas_brand_page__WEBPACK_IMPORTED_MODULE_3__["KulkasBrandPage"]
    }
];
let KulkasBrandPageRoutingModule = class KulkasBrandPageRoutingModule {
};
KulkasBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KulkasBrandPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.module.ts ***!
  \**********************************************************************************/
/*! exports provided: KulkasBrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KulkasBrandPageModule", function() { return KulkasBrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _kulkas_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kulkas-brand-routing.module */ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand-routing.module.ts");
/* harmony import */ var _kulkas_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kulkas-brand.page */ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.ts");







let KulkasBrandPageModule = class KulkasBrandPageModule {
};
KulkasBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _kulkas_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["KulkasBrandPageRoutingModule"]
        ],
        declarations: [_kulkas_brand_page__WEBPACK_IMPORTED_MODULE_6__["KulkasBrandPage"]]
    })
], KulkasBrandPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.header.bottom {\n  bottom: 0px;\n}\n\nion-content {\n  --background: linear-gradient(to left, #e1ffdb 30%, #fff 70%);\n}\n\n.main-menu {\n  background-color: #fff;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.content {\n  padding: 5%;\n}\n\n.labelSelect {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  top: 2%;\n  bottom: -10%;\n}\n\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 25%;\n  left: 78%;\n  height: 200%;\n}\n\n.card-backgroud .img_kiri {\n  position: absolute;\n  top: 7%;\n  left: 5%;\n  height: 200%;\n}\n\n.card-backgroud .title {\n  position: absolute;\n  top: 40%;\n  left: 5%;\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 800;\n  font-size: 30px;\n  color: black;\n}\n\n.card-backgroud .subtitle {\n  position: absolute;\n  top: 60%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-size: 18px;\n  color: black;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  text-align: left;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: left;\n}\n\n.itemBorder {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.itemBorder2 {\n  margin-top: 10%;\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\nion-select {\n  max-width: 100%;\n  text-align: left !important;\n  color: black;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\n\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n\n.selected {\n  background: #eaf5ff;\n  border: 1px solid #045fc4;\n}\n\n.kulkas-merk-select {\n  margin-left: 0;\n  margin-top: 3%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.kulkas-tipe-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 9%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.kulkas-model-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.kulkas-fisik-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.toggle {\n  margin-left: 0;\n  margin-top: 5%;\n}\n\n.toggle2 {\n  margin-left: 0;\n  margin-top: 0;\n}\n\nion-item::part(native) {\n  --padding-start: 0 !important;\n  --inner-padding-end: 0 !important;\n}\n\nhr {\n  border-bottom: 2px solid #EBEBEB;\n}\n\nhr:after {\n  content: '';\n  display: block;\n  border-bottom: 2px solid #EBEBEB;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n\n.radio.head {\n  margin-left: 0;\n}\n\n.radio {\n  margin-left: 0;\n}\n\n.show {\n  color: black;\n  padding-left: 10px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.ic_drop {\n  margin-left: 6px;\n}\n\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n  margin-top: 5%;\n}\n\nion-grid {\n  padding: 0 !important;\n}\n\nion-toggle {\n  height: 50%;\n  width: 13%;\n  --handle-width: 50%;\n}\n\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n}\n\n.ic_back {\n  font-size: 25px;\n  color: #045fc4;\n}\n\nhr {\n  margin-top: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWt1bGthcy9rdWxrYXMtYnJhbmQvRDpcXHpmaXgtdHJhZGUtaW4tMjAyMi9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNlbGxpbmcta3Vsa2FzXFxrdWxrYXMtYnJhbmRcXGt1bGthcy1icmFuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1rdWxrYXMva3Vsa2FzLWJyYW5kL2t1bGthcy1icmFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7QUNDWDs7QURQQTtFQVNJLFFBQVM7RUFDVCw0QkFBNEI7QUNFaEM7O0FEWkE7RUFjRSxXQUFXO0FDRWI7O0FERUE7RUFDRSw2REFBYTtBQ0NmOztBREdBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUNBOUI7O0FESUE7RUFDRSxXQUFXO0FDRGI7O0FESUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNEakI7O0FESUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxZQUFZO0FDRGQ7O0FESEE7RUFPSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0FDQWhCOztBRFZBO0VBY0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtBQ0FoQjs7QURqQkE7RUFxQkksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1Isb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQ0FoQjs7QUQzQkE7RUErQkksa0JBQWtC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YXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1rdWxrYXMva3Vsa2FzLWJyYW5kL2t1bGthcy1icmFuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICAmLnRvcCB7XHJcbiAgICB0b3A6ICAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuXHJcbiAgJi5ib3R0b20ge1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2UxZmZkYiAzMCUsICNmZmYgNzAlKTtcclxuICBcclxufVxyXG5cclxuLm1haW4tbWVudXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4ubGFiZWxTZWxlY3R7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2FyZC1iYWNrZ3JvdWR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHRvcDogMiU7XHJcbiAgYm90dG9tOiAtMTAlO1xyXG5cclxuICAuaW1nX2thbmFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBsZWZ0OiA3OCU7XHJcbiAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgfVxyXG5cclxuICAuaW1nX2tpcml7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDclO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi50MXtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50MntcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pdGVtQm9yZGVye1xyXG4gIGJvcmRlcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAxKSBzb2xpZCAxcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uaXRlbUJvcmRlcjJ7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGJvcmRlcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAxKSBzb2xpZCAxcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxufVxyXG5cclxuaW9uLXNlbGVjdDo6cGFydChpY29uKXtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2VsZWN0ZWR7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDI0NSwgMjU1LCAxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQsIDk1LCAxOTYsIDEpO1xyXG59XHJcblxyXG4ua3Vsa2FzLW1lcmstc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmt1bGthcy10aXBlLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiA5JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmt1bGthcy1tb2RlbC1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMTElO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ua3Vsa2FzLWZpc2lrLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMTAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi50b2dnbGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi50b2dnbGUye1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSl7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7IFxyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xyXG59XHJcblxyXG5ocjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTJweDsgXHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5yYWRpby5oZWFke1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4ucmFkaW97XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zaG93e1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaWNfZHJvcHtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbmlvbi1ncmlke1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvZ2dsZXtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogMTMlO1xyXG4gIC0taGFuZGxlLXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNSwgMjM4LCAyNDUsIDEpO1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG4uaWNfYmFjayB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDQsIDk1LCAxOTYsIDEpO1xyXG59XHJcblxyXG5ocntcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn0iLCIuaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4uaGVhZGVyLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuXG4uaGVhZGVyLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNlMWZmZGIgMzAlLCAjZmZmIDcwJSk7XG59XG5cbi5tYWluLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4ubGFiZWxTZWxlY3Qge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcmQtYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAyJTtcbiAgYm90dG9tOiAtMTAlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQgLmltZ19rYW5hbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDc4JTtcbiAgaGVpZ2h0OiAyMDAlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQgLmltZ19raXJpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDclO1xuICBsZWZ0OiA1JTtcbiAgaGVpZ2h0OiAyMDAlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQgLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLWJhY2tncm91ZCAuc3VidGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICBsZWZ0OiA1JTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnQxIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnQyIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLml0ZW1Cb3JkZXIge1xuICBib3JkZXI6ICNlYmViZWIgc29saWQgMXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuLml0ZW1Cb3JkZXIyIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBib3JkZXI6ICNlYmViZWIgc29saWQgMXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBjb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNlYWY1ZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNDVmYzQ7XG59XG5cbi5rdWxrYXMtbWVyay1zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ua3Vsa2FzLXRpcGUtc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmt1bGthcy1tb2RlbC1zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDExJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmt1bGthcy1maXNpay1zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnRvZ2dsZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnRvZ2dsZTIge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XG59XG5cbmhyOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5yYWRpby5oZWFkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5yYWRpbyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2hvdyB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmljX2Ryb3Age1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b2dnbGUge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEzJTtcbiAgLS1oYW5kbGUtd2lkdGg6IDUwJTtcbn1cblxuLmljb24ge1xuICBiYWNrZ3JvdW5kOiAjZWJlZWY1O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaWNfYmFjayB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwNDVmYzQ7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.ts ***!
  \********************************************************************************/
/*! exports provided: KulkasBrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KulkasBrandPage", function() { return KulkasBrandPage; });
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
/* harmony import */ var src_app_pages_landing_modal_modal_price_modal_price_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/landing/modal/modal-price/modal-price.component */ "./src/app/pages/landing/modal/modal-price/modal-price.component.ts");
















let KulkasBrandPage = class KulkasBrandPage {
    constructor(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController, modalController) {
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
        this.data_brand = [];
        this.data_model = [];
        this.data_type = [];
        this.stores = [];
        this.kondisiKulkas = false;
        this.kondisiRubber = false;
        this.kondisiTutupFreezer = false;
        this.kondisiTray = false;
        this.kondisiFreezer = false;
        this.customPopoverOptions = {
            header: 'Pilih Tempat Trade In',
            message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getStore();
        this.getBrand();
        this.selling.removeSelling();
    }
    openModalSubmit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modalSubmit = yield this.modalController.create({
                component: src_app_pages_landing_modal_modal_price_modal_price_component__WEBPACK_IMPORTED_MODULE_12__["ModalPriceComponent"],
                cssClass: 'my-custom-modal-css',
                backdropDismiss: false,
                id: 'my-modal-id'
            });
            return yield modalSubmit.present();
        });
    }
    selectMerk(val) {
        this.selected_merk = val;
        document.querySelectorAll('.kulkas-merk-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectTipe(val) {
        this.selected_tipe = val;
        document.querySelectorAll('.kulkas-tipe-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectModel(val) {
        this.selected_model = val;
        document.querySelectorAll('.kulkas-model-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectFisik(val) {
        this.selected_fisik = val;
        document.querySelectorAll('.kulkas-fisik-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    getStore() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then((token) => {
            this.sellingApiService.getStore(token).subscribe((response) => {
                this.stores = response.data.store;
            }, (err) => {
                this.stores = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    getBrand() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then((token) => {
            this.sellingApiService.getBrandKulkas(token).subscribe((response) => {
                this.data_brand = response.data.brand;
                this.data_model = response.data.model;
                this.data_type = response.data.type;
                console.log(this.data_brand);
            }, (err) => {
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    submit() {
        if ((this.brand == null || this.type == null || this.lokasi_trade == null || this.model == null) || (this.brand.replace(/\s/g, "") == "")) {
            this.utilsService.showToast("Lengkapi pengisian form.");
        }
        else if ((this.condition == "Mati Total")) {
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
                                    type: this.type,
                                    model: this.model,
                                    condition: this.condition,
                                    kondisi_fisik: this.kondisi_fisik,
                                    rubber: this.rubber,
                                    tutup_freezer: this.tutup_freezer,
                                    tray: this.tray,
                                    ice_maker: this.ice_maker,
                                    lokasi_trade: this.lokasi_trade
                                }
                            };
                            this.navCtrl.navigateForward(["/landing/kulkas-brand/detail-kulkas"], navigationExtras);
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
};
KulkasBrandPage.ctorParameters = () => [
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
KulkasBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kulkas-brand',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./kulkas-brand.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./kulkas-brand.page.scss */ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.scss")).default]
    })
], KulkasBrandPage);



/***/ })

}]);
//# sourceMappingURL=selling-kulkas-kulkas-brand-kulkas-brand-module-es2015.js.map