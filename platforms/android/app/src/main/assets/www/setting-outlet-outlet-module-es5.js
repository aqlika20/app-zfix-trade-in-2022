function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-outlet-outlet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/outlet/outlet.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/outlet/outlet.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingOutletOutletPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Service Center ZFix</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"vl\" style=\"font-family: 'Arial' !important; margin-left: 10px;\">\n      <h2>Service Center ZFix</h2>\n  </div>\n    <ion-text>\n      <p>Kami telah memiliki service center yang tersebar luas di Indonesia.</p>\n    </ion-text>\n\n    <ol>\n      <li>\n        DKI Jakarta\n      </li>\n      <li>\n        Tangerang Selatan\n      </li>\n      <li>\n        Serang\n      </li>\n      <li>\n        Jawa Barat\n        <ol type=\"a\">\n          <li>\n            Bandung\n          </li>\n          <li>\n            Bekasi\n          </li>\n          <li>\n            Bogor\n          </li>\n          <li>\n            Cibinong\n          </li>\n          <li>\n            Cikarang\n          </li>\n          <li>\n            Cilegon\n          </li>\n          <li>\n            Cirebon\n          </li>\n          <li>\n            Depok\n          </li>\n          <li>\n            Karawang\n          </li>\n          <li>\n            Kuningan\n          </li>\n        </ol>\n      </li>\n\n      <li>\n        Jawa Tengah\n      <ol type=\"a\">\n        <li>\n          Boyolali\n        </li>\n        <li>\n          Cilacap\n        </li>\n        <li>\n          Kebumen\n        </li>\n        <li>\n          Magelang\n        </li>\n        <li>\n          Purbalingga\n        </li>\n        <li>\n          Solo\n        </li>\n        <li>\n          Sragen\n        </li>\n      </ol>\n      </li>\n\n      <li>\n        DI Yogyakarta\n      </li>\n      <li>\n        Jawa Timur\n        <ol type=\"a\">\n          <li>\n            Kediri\n          </li>\n          <li>\n            Lumajang\n          </li>\n          <li>\n            Malang\n          </li>\n          <li>\n            Pasuruan\n          </li>\n          <li>\n            Tulungagung\n          </li>\n        </ol>\n      </li>\n\n      <li>\n        Lampung\n      </li>\n      <li>\n        Sumatera Barat\n        <ol type=\"a\">\n          <li>\n            Agam\n          </li>\n          <li>\n            Bukit Tinggi\n          </li>\n          <li>\n            Padang\n          </li>\n          <li>\n            Payahkumbuh\n          </li>\n        </ol>\n      </li>\n\n      <li>\n        Medan\n      </li>\n      <li>\n        Samarinda\n      </li>\n      <li>\n        Pekanbaru\n      </li>\n      <li>\n        Batam\n      </li>\n    </ol>\n    <br>\n    <br>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/outlet/outlet-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/landing/setting/outlet/outlet-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: OutletPageRoutingModule */

  /***/
  function srcAppPagesLandingSettingOutletOutletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutletPageRoutingModule", function () {
      return OutletPageRoutingModule;
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


    var _outlet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./outlet.page */
    "./src/app/pages/landing/setting/outlet/outlet.page.ts");

    var routes = [{
      path: '',
      component: _outlet_page__WEBPACK_IMPORTED_MODULE_3__["OutletPage"]
    }];

    var OutletPageRoutingModule = function OutletPageRoutingModule() {
      _classCallCheck(this, OutletPageRoutingModule);
    };

    OutletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OutletPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/outlet/outlet.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/landing/setting/outlet/outlet.module.ts ***!
    \***************************************************************/

  /*! exports provided: OutletPageModule */

  /***/
  function srcAppPagesLandingSettingOutletOutletModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutletPageModule", function () {
      return OutletPageModule;
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


    var _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./outlet-routing.module */
    "./src/app/pages/landing/setting/outlet/outlet-routing.module.ts");
    /* harmony import */


    var _outlet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./outlet.page */
    "./src/app/pages/landing/setting/outlet/outlet.page.ts");

    var OutletPageModule = function OutletPageModule() {
      _classCallCheck(this, OutletPageModule);
    };

    OutletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletPageRoutingModule"]],
      declarations: [_outlet_page__WEBPACK_IMPORTED_MODULE_6__["OutletPage"]]
    })], OutletPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/outlet/outlet.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/landing/setting/outlet/outlet.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingOutletOutletPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\n.vl {\n  border-left: 6px solid blue;\n  height: 33px;\n}\n\nh2 {\n  padding-left: 10px;\n}\n\np {\n  padding-left: 10px;\n  font-size: 13px;\n}\n\nion-searchbar {\n  --background: #FFF !important;\n  --border-radius: 10px !important;\n  transform: scale(1.1);\n  margin: 0 auto;\n  width: 90%;\n  padding-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL291dGxldC9DOlxcVXNlcnNcXEFTVVNcXERlc2t0b3BcXHpmaXhfYXBwX2FuZ3VsYXJfaHR0cF9uZXc5L3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2V0dGluZ1xcb3V0bGV0XFxvdXRsZXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmcvb3V0bGV0L291dGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIsbUJBQWM7QUNDbEI7O0FERUU7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtBQ0NoQjs7QURFRTtFQUNFLGtCQUFrQjtBQ0N0Qjs7QURFRTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0FDQ3JCOztBREVFO0VBQ0UsNkJBQWE7RUFDYixnQ0FBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCO0FDQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL291dGxldC9vdXRsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudmwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBibHVlO1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBwe1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkYgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogOTAlOyBcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH0iLCJpb24tY29udGVudCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsdWU7XG4gIGhlaWdodDogMzNweDtcbn1cblxuaDIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbnAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0ZGRiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/outlet/outlet.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/landing/setting/outlet/outlet.page.ts ***!
    \*************************************************************/

  /*! exports provided: OutletPage */

  /***/
  function srcAppPagesLandingSettingOutletOutletPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutletPage", function () {
      return OutletPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OutletPage = /*#__PURE__*/function () {
      function OutletPage() {
        _classCallCheck(this, OutletPage);
      }

      _createClass(OutletPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OutletPage;
    }();

    OutletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-outlet',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./outlet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/outlet/outlet.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./outlet.page.scss */
      "./src/app/pages/landing/setting/outlet/outlet.page.scss"))["default"]]
    })], OutletPage);
    /***/
  }
}]);
//# sourceMappingURL=setting-outlet-outlet-module-es5.js.map