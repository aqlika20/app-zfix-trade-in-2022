function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-my-card-my-card-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/my-card/my-card.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/my-card/my-card.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingMyCardMyCardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">My Card</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>My Voucher Key</ion-card-subtitle>\n      <ion-card-title>{{ user.data?.voucher_key }}</ion-card-title>   \n    </ion-card-header>\n    <ion-card-content>\n      <img src=\"\" />\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-card>\n    <ion-title align=\"center\">\n      QR Code\n    </ion-title>\n    <ion-card-content>\n      \n    </ion-card-content>\n    <hr>\n    <ion-title align=\"center\">\n      Barcode\n    </ion-title>\n    <ion-card-content>\n      \n    </ion-card-content>\n  </ion-card> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/my-card/my-card-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/landing/setting/my-card/my-card-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: MyCardPageRoutingModule */

  /***/
  function srcAppPagesLandingSettingMyCardMyCardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardPageRoutingModule", function () {
      return MyCardPageRoutingModule;
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


    var _my_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-card.page */
    "./src/app/pages/landing/setting/my-card/my-card.page.ts");

    var routes = [{
      path: '',
      component: _my_card_page__WEBPACK_IMPORTED_MODULE_3__["MyCardPage"]
    }];

    var MyCardPageRoutingModule = function MyCardPageRoutingModule() {
      _classCallCheck(this, MyCardPageRoutingModule);
    };

    MyCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyCardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/my-card/my-card.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/landing/setting/my-card/my-card.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MyCardPageModule */

  /***/
  function srcAppPagesLandingSettingMyCardMyCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardPageModule", function () {
      return MyCardPageModule;
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


    var _my_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-card-routing.module */
    "./src/app/pages/landing/setting/my-card/my-card-routing.module.ts");
    /* harmony import */


    var _my_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-card.page */
    "./src/app/pages/landing/setting/my-card/my-card.page.ts");

    var MyCardPageModule = function MyCardPageModule() {
      _classCallCheck(this, MyCardPageModule);
    };

    MyCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyCardPageRoutingModule"]],
      declarations: [_my_card_page__WEBPACK_IMPORTED_MODULE_6__["MyCardPage"]]
    })], MyCardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/my-card/my-card.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/landing/setting/my-card/my-card.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingMyCardMyCardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\nhr {\n  border-top: solid #bbb;\n}\n\nion-title {\n  color: black;\n}\n\nion-card {\n  border-radius: 15px !important;\n  width: 90% !important;\n  margin: 5% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL215LWNhcmQvQzpcXFVzZXJzXFxBU1VTXFxEZXNrdG9wXFx6Zml4X2FwcF9hbmd1bGFyX2h0dHBfbmV3OS9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNldHRpbmdcXG15LWNhcmRcXG15LWNhcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmcvbXktY2FyZC9teS1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2QixtQkFBYztBQ0NsQjs7QURFQTtFQUNJLHNCQUFzQjtBQ0MxQjs7QURHQTtFQUNJLFlBQ0o7QUNEQTs7QURHQTtFQUNJLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIscUJBQXFCO0FDQXpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL215LWNhcmQvbXktY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAjYmJiO1xyXG5cclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IGJsYWNrXHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA1JSAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiBzb2xpZCAjYmJiO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNSUgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/my-card/my-card.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/landing/setting/my-card/my-card.page.ts ***!
    \***************************************************************/

  /*! exports provided: MyCardPage */

  /***/
  function srcAppPagesLandingSettingMyCardMyCardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardPage", function () {
      return MyCardPage;
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
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/api/membership-api.service */
    "./src/app/services/api/membership-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var MyCardPage = /*#__PURE__*/function () {
      function MyCardPage(storage, MembershipService, utilsService) {
        _classCallCheck(this, MyCardPage);

        this.storage = storage;
        this.MembershipService = MembershipService;
        this.utilsService = utilsService;
        this.user = {};
      }

      _createClass(MyCardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getVoucher();
        }
      }, {
        key: "getVoucher",
        value: function getVoucher() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this.MembershipService.current(token).subscribe(function (response) {
              var _a;

              _this.user = response;
              console.log(_this.user);

              if (((_a = _this.user.data) === null || _a === void 0 ? void 0 : _a.voucher_key) == '-') {
                _this.utilsService.showToast("Anda belum memiliki voucher key.");
              } // console.log();
              // console.log("image slides", this.listImageSlides);

            }, function (err) {
              _this.user = [];

              _this.utilsService.showToast("There is a problem.");

              console.log(err);
            });
          });
        }
      }]);

      return MyCardPage;
    }();

    MyCardPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_4__["MembershipApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }];
    };

    MyCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-card.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/my-card/my-card.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-card.page.scss */
      "./src/app/pages/landing/setting/my-card/my-card.page.scss"))["default"]]
    })], MyCardPage);
    /***/
  }
}]);
//# sourceMappingURL=setting-my-card-my-card-module-es5.js.map