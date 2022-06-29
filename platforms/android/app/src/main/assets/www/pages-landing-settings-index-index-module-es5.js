function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-settings-index-index-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingsIndexIndexPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>index</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <ion-item lines=\"none\">\r\n   <ion-text>\r\n     <div class=\"t1\">\r\n      Settings\r\n     </div>\r\n   </ion-text>\r\n  </ion-item>\r\n  \r\n  <ion-item lines=\"none\" class=\"current-user\" color=\"transparent\">\r\n    <ion-avatar>\r\n      <img class=\"avatars\" src=\"./assets/images/z_logo.png\">\r\n    </ion-avatar>\r\n    <ion-label class=\"text\">\r\n      <p *ngIf=\"user != {}\">\r\n        <span style=\"font-size: 18px;\">{{ user.data?.user.name }}</span>\r\n        <span style=\"font-size: 11px;\" routerLink=\"../../profile\">Ubah Profile<img class=\"avatars\" style=\"margin-left: 2%;\" src=\"./assets/icon/arrow-circle-rightmdpi.png\"></span></p>\r\n\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">Umum</p>\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ion-item routerLink=\"../../history\">\r\n    <ion-img src=\"./assets/icon/transaction-minusmdpi-1.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"text\">\r\n      Daftar Transaksi\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item routerLink=\"../../outlet\">\r\n    <ion-img src=\"./assets/icon/sharemdpi-1.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"text\">\r\n      Lokasi Tukar Tambah\r\n    </ion-label>\r\n  </ion-item> \r\n  \r\n  <ion-item routerLink=\"../../call-us\">\r\n    <ion-img src=\"./assets/icon/headphonemdpi.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"text\">\r\n      Hubungi Kami\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">Lainnya\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ion-item routerLink=\"../../privacy-policy\">\r\n    <ion-img src=\"./assets/icon/transaction-minusmdpi-1.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"text\">\r\n      Kebijakan Privasi\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item routerLink=\"../../terms\">\r\n    <ion-img src=\"./assets/icon/sharemdpi-1.png\" class=\"img-btn\"></ion-img> \r\n    <ion-label class=\"text\">\r\n      Syarat & Ketentuan\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\" (click)=\"logout()\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">Keluar <img class=\"avatars\" src=\"./assets/icon/arrow-circle-rightmdpi.png\">\r\n      </p>\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">Versi: {{VersionNumber}}</p>\r\n    </ion-text>\r\n  </ion-item>\r\n  \r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/index/index-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/settings/index/index-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: IndexPageRoutingModule */

  /***/
  function srcAppPagesLandingSettingsIndexIndexRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function () {
      return IndexPageRoutingModule;
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


    var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./index.page */
    "./src/app/pages/landing/settings/index/index.page.ts");

    var routes = [{
      path: '',
      component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
    }];

    var IndexPageRoutingModule = function IndexPageRoutingModule() {
      _classCallCheck(this, IndexPageRoutingModule);
    };

    IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IndexPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/index/index.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/landing/settings/index/index.module.ts ***!
    \**************************************************************/

  /*! exports provided: IndexPageModule */

  /***/
  function srcAppPagesLandingSettingsIndexIndexModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPageModule", function () {
      return IndexPageModule;
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


    var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index-routing.module */
    "./src/app/pages/landing/settings/index/index-routing.module.ts");
    /* harmony import */


    var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./index.page */
    "./src/app/pages/landing/settings/index/index.page.ts");

    var IndexPageModule = function IndexPageModule() {
      _classCallCheck(this, IndexPageModule);
    };

    IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"]],
      declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })], IndexPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/index/index.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/landing/settings/index/index.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingsIndexIndexPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text {\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 14px;\n  font-style: normal;\n  color: black;\n  text-align: left;\n  margin-left: 3%;\n}\n\nion-item {\n  padding-right: 20px !important;\n}\n\nion-text {\n  padding-top: 20px;\n  display: block;\n}\n\np span {\n  display: block;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  color: black;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9pbmRleC9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2V0dGluZ3NcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaW5kZXgvaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMyU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxucCBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnQxe1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iLCIudGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuXG5pb24taXRlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRleHQge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnAgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udDEge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/index/index.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/landing/settings/index/index.page.ts ***!
    \************************************************************/

  /*! exports provided: IndexPage */

  /***/
  function srcAppPagesLandingSettingsIndexIndexPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPage", function () {
      return IndexPage;
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


    var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/api/user-api.service */
    "./src/app/services/api/user-api.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");

    var IndexPage = /*#__PURE__*/function () {
      function IndexPage(authService, storage, userApiService, utilsService, appVersion) {
        var _this = this;

        _classCallCheck(this, IndexPage);

        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.utilsService = utilsService;
        this.appVersion = appVersion;
        this.user = {};
        this.appVersion.getVersionNumber().then(function (value) {
          _this.VersionNumber = value;
        })["catch"](function (err) {
          alert(err);
        });
      }

      _createClass(IndexPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getUser();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this2.userApiService.userDetail(token).subscribe(function (response) {
              _this2.user = response;
            }, function (err) {
              _this2.user = [];

              _this2.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }]);

      return IndexPage;
    }();

    IndexPage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"]
      }];
    };

    IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./index.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./index.page.scss */
      "./src/app/pages/landing/settings/index/index.page.scss"))["default"]]
    })], IndexPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-landing-settings-index-index-module-es5.js.map