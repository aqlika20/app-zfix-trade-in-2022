function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-ps-ps-brand-ps-brand-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingPsPsBrandPsBrandPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"header\">\r\n    <div class=\"card-backgroud\">\r\n      <img src=\"../../../../assets/images/header/ps.png\" alt=\"\">\r\n      <div class=\"img_kanan\">\r\n        <img src=\"../../../../assets/images/baru/form-psxhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"img_kiri\" routerLink=\"/landing/type\">\r\n        <div class=\"icon\">\r\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"title\">\r\n        Trade Playstation\r\n      </div>\r\n      <div class=\"subtitle\">\r\n        Silahkan isi data dibawah ini\r\n      </div>\r\n    </div>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <div class=\"content\">\r\n        <div class=\"itemBorder\">\r\n          <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Pilih tempat melakukan Trade In\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n            <ion-select-option value=\"1\">LG Store Pulogadung</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div class=\"t1\" style=\"margin-top: 30px;\">\r\n          Pilih varian\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"ps5\" class=\"ps-varian-select\" (click)=\"selectVarian('ps5')\">\r\n                <img src=\"../../../../assets/images/baru/ps5xxhdpi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">PS5</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"ps4\" class=\"ps-varian-select\" (click)=\"selectVarian('ps4')\">\r\n                <img src=\"../../../../assets/images/baru/ps3xxhdpi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">PS4</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\" offset-md=\"3\">\r\n              <ion-card id=\"ps3\" class=\"ps-varian-select\" (click)=\"selectVarian('ps3')\">\r\n                <img src=\"../../../../assets/images/baru/ps4xxhdpi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">PS3</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Model\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"digital\" class=\"ps-model-select\" (click)=\"selectModel('digital')\">\r\n                <ion-label>Digital</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"disc\" class=\"ps-model-select\" (click)=\"selectModel('disc')\">\r\n                <ion-label>Disc</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Storage\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"120\" class=\"ps-storage-select\" (click)=\"selectStorage('120')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">120 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"160\" class=\"ps-storage-select\" (click)=\"selectStorage('160')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">160 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\" offset-md=\"3\">\r\n              <ion-card id=\"250\" class=\"ps-storage-select\" (click)=\"selectStorage('250')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">250 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"320\" class=\"ps-storage-select\" (click)=\"selectStorage('320')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">320 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"500\" class=\"ps-storage-select\" (click)=\"selectStorage('500')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">500 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\" offset-md=\"3\">\r\n              <ion-card id=\"1\" class=\"ps-storage-select\" (click)=\"selectStorage('1')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">1 T</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <ion-item class=\"toggle\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Playstation Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiPlaystation\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kondisi Stick/Console PS\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"mulus\" class=\"ps-stick-select\" (click)=\"selectStick('mulus')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Mulus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"lecet\" class=\"ps-stick-select\" (click)=\"selectStick('lecet')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Lecet</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\" offset-md=\"3\">\r\n              <ion-card id=\"dent\" class=\"ps-stick-select\" (click)=\"selectStick('dent')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Dent</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n                  \r\n        <ion-item class=\"toggle\" lines=\"none\">\r\n          <ion-label class=\"t2\">Ada Add On Games</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"addOnGame\"></ion-toggle>\r\n        </ion-item>\r\n        <hr>\r\n\r\n        <div class=\"t1\" style=\"margin-top: 25px;\">\r\n          Fungsi Console PS\r\n        </div>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Stick/Console PS Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"stickNormal\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Port USB Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"usbNormal\"></ion-toggle>\r\n        </ion-item>\r\n        <hr>\r\n\r\n        <div class=\"t1\" style=\"margin-top: 25px;\">\r\n          Kondisi Stick/Console PS\r\n        </div>\r\n        \r\n        <ion-radio-group style=\"margin-top: 14px\">\r\n          <ion-item class=\"radio head\" lines=\"none\">\r\n            <ion-label class=\"t2\">Fullset (Stick,kabel power,HDMI)</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Fullset (Stick,kabel power,HDMI)\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Stick 1pcs + Kabel power+ HDMI</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Stick 1pcs + Kabel power+ HDMI\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Unit Only + Kabel Power (Tanpa Stick)</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Unit Only + Kabel Power (Tanpa Stick)\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        \r\n        <div class=\"btn\">\r\n          <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"openModalSubmit($event)\">Submit</ion-button>\r\n        </div>\r\n\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-ps/ps-brand/ps-brand-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/landing/selling-ps/ps-brand/ps-brand-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: PsBrandPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingPsPsBrandPsBrandRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PsBrandPageRoutingModule", function () {
      return PsBrandPageRoutingModule;
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


    var _ps_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ps-brand.page */
    "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.ts");

    var routes = [{
      path: '',
      component: _ps_brand_page__WEBPACK_IMPORTED_MODULE_3__["PsBrandPage"]
    }];

    var PsBrandPageRoutingModule = function PsBrandPageRoutingModule() {
      _classCallCheck(this, PsBrandPageRoutingModule);
    };

    PsBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PsBrandPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/selling-ps/ps-brand/ps-brand.module.ts ***!
    \**********************************************************************/

  /*! exports provided: PsBrandPageModule */

  /***/
  function srcAppPagesLandingSellingPsPsBrandPsBrandModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PsBrandPageModule", function () {
      return PsBrandPageModule;
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


    var _ps_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ps-brand-routing.module */
    "./src/app/pages/landing/selling-ps/ps-brand/ps-brand-routing.module.ts");
    /* harmony import */


    var _ps_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ps-brand.page */
    "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.ts");

    var PsBrandPageModule = function PsBrandPageModule() {
      _classCallCheck(this, PsBrandPageModule);
    };

    PsBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ps_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["PsBrandPageRoutingModule"]],
      declarations: [_ps_brand_page__WEBPACK_IMPORTED_MODULE_6__["PsBrandPage"]]
    })], PsBrandPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingPsPsBrandPsBrandPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.header.bottom {\n  bottom: 0px;\n}\n\nion-content {\n  --background: linear-gradient(to left, #DBECFF 30%, #fff 70%);\n}\n\n.main-menu {\n  background-color: #fff;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.content {\n  padding: 5%;\n}\n\n.labelSelect {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  top: 2%;\n  bottom: -10%;\n}\n\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 25%;\n  left: 78%;\n  height: 200%;\n}\n\n.card-backgroud .img_kiri {\n  position: absolute;\n  top: 7%;\n  left: 5%;\n  height: 200%;\n}\n\n.card-backgroud .title {\n  position: absolute;\n  top: 40%;\n  left: 5%;\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 800;\n  font-size: 30px;\n  color: black;\n}\n\n.card-backgroud .subtitle {\n  position: absolute;\n  top: 60%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-size: 18px;\n  color: black;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  text-align: left;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: left;\n}\n\n.itemBorder {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\nion-select {\n  max-width: 100%;\n  text-align: left !important;\n  color: black;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\n\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n\n.selected {\n  background: #eaf5ff;\n  border: 1px solid #045fc4;\n}\n\n.ps-varian-select {\n  margin-left: 0;\n  margin-top: 3%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.ps-model-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 9%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.ps-storage-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\n.toggle {\n  margin-left: 0;\n  margin-top: 5%;\n}\n\n.toggle2 {\n  margin-left: 0;\n  margin-top: 0;\n}\n\nion-item::part(native) {\n  --padding-start: 0 !important;\n  --inner-padding-end: 0 !important;\n}\n\n.ps-stick-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n\nhr {\n  border-bottom: 2px solid #EBEBEB;\n}\n\nhr:after {\n  content: '';\n  display: block;\n  border-bottom: 2px solid #EBEBEB;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n\n.radio.head {\n  margin-left: 0;\n}\n\n.radio {\n  margin-left: 0;\n}\n\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n  margin-top: 5%;\n}\n\nion-grid {\n  padding: 0 !important;\n}\n\nion-toggle {\n  height: 50%;\n  width: 13%;\n  --handle-width: 50%;\n}\n\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n}\n\nion-icon {\n  font-size: 25px;\n  color: #045fc4;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLXBzL3BzLWJyYW5kL0Q6XFx6Zml4LXRyYWRlLWluLTIwMjIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZWxsaW5nLXBzXFxwcy1icmFuZFxccHMtYnJhbmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctcHMvcHMtYnJhbmQvcHMtYnJhbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0FDQ1g7O0FEUEE7RUFTSSxRQUFTO0VBQ1QsNEJBQTRCO0FDRWhDOztBRFpBO0VBY0UsV0FBVztBQ0ViOztBREVBO0VBQ0UsNkRBQWE7QUNDZjs7QURHQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsNEJBQTRCO0FDQTlCOztBRElBO0VBQ0UsV0FBVztBQ0RiOztBRElBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0FDRGpCOztBRElBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixPQUFPO0VBQ1AsWUFBWTtBQ0RkOztBREhBO0VBT0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtBQ0FoQjs7QURWQTtFQWNJLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUNBaEI7O0FEakJBO0VBcUJJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUNBaEI7O0FEM0JBO0VBK0JJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsWUFBWTtBQ0FoQjs7QURJQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUNEbEI7O0FESUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FDRGxCOztBRElBO0VBQ0UseUJBQXdDO0VBQ3hDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQjtBQ0RqQzs7QURJQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLDBCQUFvQjtFQUNwQix3QkFBc0I7QUNEeEI7O0FESUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7QUNEWjs7QURJQTtFQUNFLG1CQUFrQztFQUNsQyx5QkFBcUM7QUNEdkM7O0FESUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7QUNEakI7O0FESUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0FDRGpCOztBRElBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtBQ0RqQjs7QURJQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FDRGhCOztBRElBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUNEZjs7QURJQTtFQUNFLDZCQUFnQjtFQUNoQixpQ0FBb0I7QUNEdEI7O0FESUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0FDRGpCOztBRElBO0VBQ0UsZ0NBQWdDO0FDRGxDOztBRElBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGNBQWM7QUNEaEI7O0FESUE7RUFDRSxjQUFjO0FDRGhCOztBRElBO0VBQ0UsY0FBYztBQ0RoQjs7QURJQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7QUNEaEI7O0FESUE7RUFDRSxxQkFBcUI7QUNEdkI7O0FESUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFlO0FDRGpCOztBRElBO0VBQ0UsbUJBQWtDO0VBQ2xDLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQ0RiOztBRElBO0VBQ0UsZUFBZTtFQUNmLGNBQTBCO0FDRDVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLXBzL3BzLWJyYW5kL3BzLWJyYW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gICYudG9wIHtcclxuICAgIHRvcDogIDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgfVxyXG5cclxuICAmLmJvdHRvbSB7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREJFQ0ZGIDMwJSwgI2ZmZiA3MCUpO1xyXG4gIFxyXG59XHJcblxyXG4ubWFpbi1tZW51e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5sYWJlbFNlbGVjdHtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2tncm91ZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdG9wOiAyJTtcclxuICBib3R0b206IC0xMCU7XHJcblxyXG4gIC5pbWdfa2FuYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDc4JTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICB9XHJcblxyXG4gIC5pbWdfa2lyaXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNyU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLnQxe1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnQye1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLml0ZW1Cb3JkZXJ7XHJcbiAgYm9yZGVyOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDEpIHNvbGlkIDFweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pe1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zZWxlY3RlZHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMjQ1LCAyNTUsIDEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbn1cclxuXHJcbi5wcy12YXJpYW4tc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnBzLW1vZGVsLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiA5JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnBzLXN0b3JhZ2Utc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnRvZ2dsZXtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnRvZ2dsZTJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKXtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDsgXHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHMtc3RpY2stc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDExJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xyXG59XHJcblxyXG5ocjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTJweDsgXHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5yYWRpby5oZWFke1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4ucmFkaW97XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9nZ2xle1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMyU7XHJcbiAgLS1oYW5kbGUtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAyMzgsIDI0NSwgMSk7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbn0iLCIuaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4uaGVhZGVyLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuXG4uaGVhZGVyLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNEQkVDRkYgMzAlLCAjZmZmIDcwJSk7XG59XG5cbi5tYWluLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4ubGFiZWxTZWxlY3Qge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcmQtYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAyJTtcbiAgYm90dG9tOiAtMTAlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQgLmltZ19rYW5hbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDc4JTtcbiAgaGVpZ2h0OiAyMDAlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQgLmltZ19raXJpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDclO1xuICBsZWZ0OiA1JTtcbiAgaGVpZ2h0OiAyMDAlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQgLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLWJhY2tncm91ZCAuc3VidGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICBsZWZ0OiA1JTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnQxIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnQyIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLml0ZW1Cb3JkZXIge1xuICBib3JkZXI6ICNlYmViZWIgc29saWQgMXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBjb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNlYWY1ZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNDVmYzQ7XG59XG5cbi5wcy12YXJpYW4tc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDMlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnBzLW1vZGVsLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogOSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5wcy1zdG9yYWdlLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4udG9nZ2xlIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4udG9nZ2xlMiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5pb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnBzLXN0aWNrLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTElO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5ociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xufVxuXG5ocjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4ucmFkaW8uaGVhZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ucmFkaW8ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMyU7XG4gIC0taGFuZGxlLXdpZHRoOiA1MCU7XG59XG5cbi5pY29uIHtcbiAgYmFja2dyb3VuZDogI2ViZWVmNTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDQ1ZmM0O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.ts ***!
    \********************************************************************/

  /*! exports provided: PsBrandPage */

  /***/
  function srcAppPagesLandingSellingPsPsBrandPsBrandPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PsBrandPage", function () {
      return PsBrandPage;
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

    var PsBrandPage = /*#__PURE__*/function () {
      function PsBrandPage(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController, modalCtrl, popoverCtrl, modalController) {
        _classCallCheck(this, PsBrandPage);

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
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalController = modalController;
        this.stores = [];
        this.searchedStores = [];
        this.data_brand = [];
        this.data_type = [];
        this.data_storages = [];
        this.data_jenis = [];
        this.kondisiPlaystation = false;
        this.addOnGame = false;
        this.stickNormal = false;
        this.usbNormal = false;
        this.customPopoverOptions = {
          header: 'Pilih Tempat Trade In',
          message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
        };
      }

      _createClass(PsBrandPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStore();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getStore();
          this.getBrand();
          this.selling.removeSelling();
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
        key: "selectVarian",
        value: function selectVarian(val) {
          this.selected_varian = val;
          document.querySelectorAll('.ps-varian-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectModel",
        value: function selectModel(val) {
          this.selected_model = val;
          document.querySelectorAll('.ps-model-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectStorage",
        value: function selectStorage(val) {
          this.selected_storage = val;
          document.querySelectorAll('.ps-storage-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectStick",
        value: function selectStick(val) {
          this.selected_stick = val;
          document.querySelectorAll('.ps-stick-select').forEach(function (element) {
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
            _this2.sellingApiService.getBrandPS(token).subscribe(function (response) {
              _this2.data_brand = response.data.brand;
              _this2.data_type = response.data.type;
              _this2.data_storages = response.data.storages;
              _this2.data_jenis = response.data.jenis_ps;
              console.log(_this2.data_jenis);
            }, function (err) {
              console.log(err);

              _this2.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.storages == null || this.lokasi_trade == null || this.storages.replace(/\s/g, "") == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else if (this.kondisi_ps == "Mati Total") {
            alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
          } else {
            this.presentAlertConfirm();
          }
        } // async openModal(event){
        //   const modal = await this.modalCtrl.create({
        //     component: PsBrandModalComponent,
        //     cssClass: 'small-modal'
        //   });
        //   await modal.present();
        // }

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
                              storages: _this3.storages,
                              type: _this3.type,
                              lokasi_tade: _this3.lokasi_trade,
                              condition_valueSelected: _this3.condition_valueSelected,
                              addition_valueSelected: _this3.addition_valueSelected,
                              kondisi_ps: _this3.kondisi_ps,
                              console: _this3.console,
                              port: _this3.port,
                              add_games: _this3.add_games,
                              jenis_ps: _this3.jenis_ps
                            }
                          };

                          _this3.navCtrl.navigateForward(["/landing/ps-brand/detail-unit-ps"], navigationExtras);
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

      return PsBrandPage;
    }();

    PsBrandPage.ctorParameters = function () {
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
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    PsBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ps-brand',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ps-brand.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ps-brand.page.scss */
      "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.scss"))["default"]]
    })], PsBrandPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-ps-ps-brand-ps-brand-module-es5.js.map