function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-hp-detail-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/detail/detail.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/detail/detail.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingHpDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\r\n  <div class=\"center\">\r\n    <img src=\"../../../../assets/images/home/zfix.png\" alt=\"\" style=\"margin-top: 20%;\">\r\n    <div class=\"middle\">\r\n      <div class=\"title\">Your Trade In</div>\r\n\r\n      <ion-item style=\"--background: transparant; color: #3053A4; margin-top: 10px;\">\r\n        <div class=\"row\">\r\n          <div class=\"col\" style=\"text-align: left;\">\r\n            <ion-input value=\"Brand\" readonly></ion-input>\r\n          </div>\r\n          <div class=\"col\" style=\"text-align: right;\">\r\n            <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.brand }}\" readonly></ion-input>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n  \r\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n        <div class=\"row\">\r\n          <div class=\"col\" style=\"text-align: left;\">\r\n            <ion-input value=\"RAM\" readonly></ion-input>\r\n          </div>\r\n          <div class=\"col\" style=\"text-align: right;\">\r\n            <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.ram }}\" readonly></ion-input>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n      \r\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n        <div class=\"row\">\r\n          <div class=\"col\" style=\"text-align: left;\">\r\n            <ion-input value=\"Storage\" readonly></ion-input>\r\n          </div>\r\n          <div class=\"col\" style=\"text-align: right;\">\r\n            <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.storages }}\" readonly></ion-input>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-input style=\"color: #3053A4; margin-top: 20px;\" value=\"Estimated Price\" readonly></ion-input>\r\n      <button class=\"button round\" style=\"background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">Rp.{{price}}</button>\r\n\r\n      <div class=\"row\" style=\"margin-top: 60px;\">\r\n        <div class=\"col\">\r\n          <button class=\"button oval\" routerLink=\"/landing/type\" style=\" background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n        <div class=\"col\">\r\n          <button class=\"button oval\" (click)=\"submit()\" style=\"background-color: white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\r\n            Agree\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- <div class=\"div-h1\">\r\n    <h1>Your Trade In</h1>\r\n  </div>\r\n\r\n  <div class=\"content\">\r\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n      <ion-label>Brand</ion-label>\r\n      <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.brand }}\" readonly></ion-input>\r\n    </ion-item>\r\n\r\n    <div class=\"row\">\r\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n        <div class=\"col\" style=\"text-align: left;\">\r\n          <ion-label>RAM</ion-label>\r\n        </div>\r\n        <div class=\"col\" style=\"text-align: right;\">\r\n          <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.ram }}\" readonly></ion-input>\r\n        </div>\r\n      </ion-item>\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n        <div class=\"col\" style=\"text-align: left;\">\r\n          <ion-label>Storage</ion-label>\r\n        </div>\r\n        <div class=\"col\" style=\"text-align: right;\">\r\n          <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.storages }}\" readonly></ion-input>\r\n        </div>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n      <ion-label>Lokasi Trade </ion-label>\r\n      <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.location }}\" readonly></ion-input>\r\n    </ion-item>\r\n\r\n    <div class=\"div-h1\">\r\n      <h1>Estimated Price</h1>\r\n    </div>\r\n\r\n    <ion-input value=\"{{price}}\" readonly>\r\n    </ion-input>\r\n\r\n    <div class=\"row\" style=\"margin-top: 60px;\">\r\n      <div class=\"col\">\r\n        <ion-button shape=\"round\" fill=\"outline\" style=\" --background:#BCCCF4; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" routerLink=\"/landing/type\">Cancel</ion-button>\r\n      </div>\r\n      <div class=\"col\">\r\n        <ion-button shape=\"round\" style=\"--background:white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" (click)=\"submit()\">Next</ion-button>\r\n      </div>\r\n    </div>\r\n\r\n  </div> -->\r\n \r\n</ion-content>\r\n\r\n<!-- <ion-header class=\"header\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" id=\"bg-white\">\r\n  <div class=\"container bg-white\">\r\n    <img class=\"bg-image top\" src=\"../../../../assets/images/Lebar_atas.svg\" alt=\"\">\r\n    \r\n    <ion-card>\r\n      <ion-card-content>\r\n        <h1>Your Trade In</h1>\r\n\r\n        <ion-item mb-2>\r\n          <ion-input class=\"input-1\" *ngFor=\"let x of deviceObj\" value=\"{{x.brand}}\" readonly></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item> \r\n          <ion-input class=\"input-1\" *ngFor=\"let x of deviceObj\" value=\"{{x.ram}}\" readonly></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item >\r\n          <ion-input  class=\"input-1\" *ngFor=\"let x of deviceObj\" value=\"{{x.storages}}\" readonly ></ion-input>\r\n        </ion-item>\r\n        \r\n          <h3>Estimated Price</h3>\r\n          <ion-input value=\"{{price}}\" readonly>\r\n          </ion-input>\r\n  \r\n          <button class=\"btn\" (click)=\"submit()\">Aggree</button>\r\n          <div class=\"a\">\r\n            <a href=\"#\" routerLink=\"/landing/type\">Cancel</a>\r\n          </div>\r\n       \r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n  </div>\r\n  <div class=\"shape\"><img src=\"../../../assets/images/Lebar_bawah.svg\" alt=\"\"></div>\r\n \r\n</ion-content> -->";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/detail/detail-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/detail/detail-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: DetailPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingHpDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
      return DetailPageRoutingModule;
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


    var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/pages/landing/selling-hp/detail/detail.page.ts");

    var routes = [{
      path: '',
      component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }];

    var DetailPageRoutingModule = function DetailPageRoutingModule() {
      _classCallCheck(this, DetailPageRoutingModule);
    };

    DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/detail/detail.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/detail/detail.module.ts ***!
    \******************************************************************/

  /*! exports provided: DetailPageModule */

  /***/
  function srcAppPagesLandingSellingHpDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
      return DetailPageModule;
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


    var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-routing.module */
    "./src/app/pages/landing/selling-hp/detail/detail-routing.module.ts");
    /* harmony import */


    var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/pages/landing/selling-hp/detail/detail.page.ts");

    var DetailPageModule = function DetailPageModule() {
      _classCallCheck(this, DetailPageModule);
    };

    DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]],
      declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })], DetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/detail/detail.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/detail/detail.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingHpDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #3053A4;\n  margin-top: 15%;\n  margin-bottom: 5%;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.oval {\n  border-radius: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL2RldGFpbC9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2VsbGluZy1ocFxcZGV0YWlsXFxkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUNDcEI7O0FERUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7QUNDZDs7QURFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FDQ2Q7O0FERUE7RUFDRSxlQUFlO0VBQ2YsNERBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQ0NuQjs7QURFQTtFQUNFLGVBQWU7RUFDZiw0REFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FDQ3BCOztBREVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUNDbkI7O0FERUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQ0NYOztBREVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDREQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0FDQ2pCOztBREVBO0VBQVEsbUJBQW1CO0FDRTNCOztBRERBO0VBQU8sbUJBQW1CO0FDSzFCOztBREhBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FDTWI7O0FESkU7RUFDQSxZQUFZO0VBQ1osY0FBYztBQ09oQjs7QURMRTtFQUNBLFdBQVc7QUNRYjs7QURMRTtFQUNBLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ1FyQjs7QURMRTtFQUNBLFdBQVc7QUNRYjs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxXQUFXO0FDUWI7O0FETEU7RUFDQSxXQUFXO0FDUWI7O0FETEU7RUFDQSxlQUFlO0FDUWpCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsVUFBVTtBQ1FaOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsVUFBVTtBQ1FaOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsVUFBVTtBQ1FaOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsV0FBVztBQ1FiOztBRExFO0VBQ0EsVUFBVTtBQ1FaOztBRExFO0VBQ0EsY0FBYztBQ1FoQjs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxTQUFTO0FDUVg7O0FETEU7RUFDQSxlQUFlO0FDUWpCOztBRExFO0VBQ0EsZUFBZTtBQ1FqQjs7QURMRTtFQUNBLFNBQVM7QUNRWDs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxlQUFlO0FDUWpCOztBRExFO0VBQ0EsU0FBUztBQ1FYOztBRExFO0VBQ0EsZUFBZTtBQ1FqQjs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxlQUFlO0FDUWpCOztBRExFO0VBQ0EscUJBQXFCO0FDUXZCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0EsaUJBQWlCO0FDUW5CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZi01IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNraXAge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMzA1M0E0O1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmluc3RydWtzaSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBsaWdodGdyZWVuO1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm1pZGRsZSB7IFxyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcblxyXG5ocntcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucm91bmQge2JvcmRlci1yYWRpdXM6IDEycHg7fVxyXG4ub3ZhbCB7Ym9yZGVyLXJhZGl1czogMjBweDt9XHJcblxyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xIHtcclxuICB3aWR0aDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTIge1xyXG4gIHdpZHRoOiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTMge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTQge1xyXG4gIHdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTUge1xyXG4gIHdpZHRoOiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTcge1xyXG4gIHdpZHRoOiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTgge1xyXG4gIHdpZHRoOiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTkge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEwIHtcclxuICB3aWR0aDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xMSB7XHJcbiAgd2lkdGg6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMTIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTAge1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTEge1xyXG4gIHJpZ2h0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0yIHtcclxuICByaWdodDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTMge1xyXG4gIHJpZ2h0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNCB7XHJcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC01IHtcclxuICByaWdodDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTYge1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNyB7XHJcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC04IHtcclxuICByaWdodDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTkge1xyXG4gIHJpZ2h0OiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMTAge1xyXG4gIHJpZ2h0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMTEge1xyXG4gIHJpZ2h0OiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMTIge1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTAge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMSB7XHJcbiAgbGVmdDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMiB7XHJcbiAgbGVmdDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTMge1xyXG4gIGxlZnQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC00IHtcclxuICBsZWZ0OiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNSB7XHJcbiAgbGVmdDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTYge1xyXG4gIGxlZnQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC03IHtcclxuICBsZWZ0OiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtOCB7XHJcbiAgbGVmdDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTkge1xyXG4gIGxlZnQ6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xMCB7XHJcbiAgbGVmdDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTExIHtcclxuICBsZWZ0OiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMTIge1xyXG4gIGxlZnQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0wIHtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xIHtcclxuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0yIHtcclxuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTQge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC01IHtcclxuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTcge1xyXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC04IHtcclxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtOSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEwIHtcclxuICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMTEge1xyXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgfSIsIi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mLTUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2tpcCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzA1M0E0O1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uaW5zdHJ1a3NpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogbGlnaHRncmVlbjtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1pZGRsZSB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4ub3ZhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2wteHMtMSB7XG4gIHdpZHRoOiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy0yIHtcbiAgd2lkdGg6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvbC14cy00IHtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy01IHtcbiAgd2lkdGg6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy02IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbC14cy03IHtcbiAgd2lkdGg6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy04IHtcbiAgd2lkdGg6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy05IHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmNvbC14cy0xMCB7XG4gIHdpZHRoOiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtMTEge1xuICB3aWR0aDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVsbC0wIHtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVsbC0xIHtcbiAgcmlnaHQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMiB7XG4gIHJpZ2h0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0zIHtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdWxsLTQge1xuICByaWdodDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtNSB7XG4gIHJpZ2h0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC02IHtcbiAgcmlnaHQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdWxsLTcge1xuICByaWdodDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtOCB7XG4gIHJpZ2h0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC05IHtcbiAgcmlnaHQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdWxsLTEwIHtcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTExIHtcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTEyIHtcbiAgcmlnaHQ6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVzaC0wIHtcbiAgbGVmdDogYXV0bztcbn1cblxuLmNvbC14cy1wdXNoLTEge1xuICBsZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTIge1xuICBsZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0zIHtcbiAgbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLXB1c2gtNCB7XG4gIGxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTUge1xuICBsZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC02IHtcbiAgbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLXB1c2gtNyB7XG4gIGxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTgge1xuICBsZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC05IHtcbiAgbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLXB1c2gtMTAge1xuICBsZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMSB7XG4gIGxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTEyIHtcbiAgbGVmdDogMTAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLW9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLW9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTkge1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTIge1xuICBtYXJnaW4tbGVmdDogMTAwJTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/detail/detail.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/detail/detail.page.ts ***!
    \****************************************************************/

  /*! exports provided: DetailPage */

  /***/
  function srcAppPagesLandingSellingHpDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
      return DetailPage;
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


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var DetailPage = /*#__PURE__*/function () {
      function DetailPage(selling, router, storage, sellingApiService, activatedRoute, utilsService) {
        _classCallCheck(this, DetailPage);

        this.selling = selling;
        this.router = router;
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.activatedRoute = activatedRoute;
        this.utilsService = utilsService;
        this.response = {};
        this.deviceObj = [];
      }

      _createClass(DetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then(function (token) {
            _this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["ActivationKey"]).then(function (data) {
              var deviceActivity = {
                brand: data.brand,
                ram: data.ram,
                storages: data.storages,
                location: data.lokasi_trade,
                screen_has_problem: data.screenHasProblem,
                camera_has_problem: data.cameraHasProblem,
                wifi_has_problem: data.wifiHasProblem,
                fingerprint_has_problem: data.fingerprintHasProblem,
                button_has_problem: data.buttonHasProblem,
                lokasi_trade: data.lokasi_trade
              }; // console.log(deviceActivity)

              _this.sellingApiService.getDeviceDetail(token, deviceActivity).subscribe(function (response) {
                _this.response = response, _this.price = _this.response.data;
              });

              _this.deviceObj.push(data);
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then(function (token) {
            _this2.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["ActivationKey"]).then(function (data) {
              var deviceActivity = {
                brand: data.brand,
                ram: data.ram,
                storages: data.storages,
                location: data.lokasi_trade,
                screen_has_problem: data.screenHasProblem,
                camera_has_problem: data.cameraHasProblem,
                wifi_has_problem: data.wifiHasProblem,
                finger: data.fingerprintHasProblem,
                vibration: data.vibrateHasProblem,
                button_has_problem: data.buttonHasProblem,
                lokasi_trade: data.lokasi_trade,
                price: _this2.price
              };

              _this2.sellingApiService.sellDevice(token, deviceActivity).subscribe(function (success) {
                _this2.utilsService.showToast("Permintaan berhasil di ajukan.");

                _this2.router.navigate(["landing/type"]);
              }, function (err) {
                var error = {};
                error = err.error;

                _this2.utilsService.showToast(error.message);
              });
            });
          });
        }
      }]);

      return DetailPage;
    }();

    DetailPage.ctorParameters = function () {
      return [{
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_3__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__["SellingApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]
      }];
    };

    DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/detail/detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail.page.scss */
      "./src/app/pages/landing/selling-hp/detail/detail.page.scss"))["default"]]
    })], DetailPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-hp-detail-detail-module-es5.js.map