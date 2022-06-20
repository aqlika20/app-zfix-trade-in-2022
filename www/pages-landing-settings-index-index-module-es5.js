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


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>index</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-item lines=\"none\">\n   <ion-text>\n     <h2>Settings</h2>\n   </ion-text>\n  </ion-item>\n  \n  <ion-item lines=\"none\" class=\"current-user\" color=\"transparent\">\n    <ion-avatar>\n      <img class=\"avatars\" src=\"./assets/images/z_logo.png\">\n    </ion-avatar>\n    <ion-label class=\"ion-text-nowrap\">\n      <p *ngIf=\"user != {}\"><span style=\"font-size: 18px;\">{{ user.data?.user.name }}</span><span style=\"font-size: 11px;\" routerLink=\"../../profile\">edit profile<img class=\"avatars\" src=\"./assets/images/arrow-circle-right.png\"></span></p>\n\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-text>\n      <p style=\"font-size: 12px;\">General</p>\n    </ion-text>\n   </ion-item>\n\n   <ion-item routerLink=\"../../history\">\n    <ion-img src=\"./assets/images/transaction-minus.png\" class=\"img-btn\"></ion-img>\n    <ion-label class=\"ion-text-nowrap\">\n      <p>Daftar Transaksi</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item routerLink=\"../../outlet\">\n    <ion-img src=\"./assets/images/share.png\" class=\"img-btn\"></ion-img>\n    <ion-label class=\"ion-text-nowrap\">\n      <p>Service Center Zfix</p>\n    </ion-label>\n  </ion-item> \n  \n  <ion-item routerLink=\"../../call-us\">\n    <ion-img src=\"./assets/images/headphone.png\" class=\"img-btn\"></ion-img>\n    <ion-label class=\"ion-text-nowrap\">\n      <p>Hubungi Kami</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-text>\n      <p style=\"font-size: 12px;\">Other</p>\n    </ion-text>\n   </ion-item>\n\n   <ion-item routerLink=\"../../privacy-policy\">\n    <ion-img src=\"./assets/images/transaction-minus.png\" class=\"img-btn\"></ion-img>\n    <ion-label class=\"ion-text-nowrap\">\n      <p>Kebijakan Privasi</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item routerLink=\"../../terms\">\n    <ion-img src=\"./assets/images/share.png\" class=\"img-btn\"></ion-img> \n    <ion-label class=\"ion-text-nowrap\">\n      <p>Syarat & Ketentuan</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" (click)=\"logout()\">\n    <ion-text>\n      <p style=\"font-size: 12px;\">Log out <img class=\"avatars\" src=\"./assets/images/arrow-circle-right.png\">\n      </p>\n    </ion-text>\n   </ion-item>\n\n   <ion-item lines=\"none\">\n    <ion-text>\n      <p style=\"font-size: 12px;\">Version: {{VersionNumber}}</p>\n    </ion-text>\n   </ion-item>\n  \n\n</ion-content>\n";
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


    __webpack_exports__["default"] = "ion-label p {\n  margin-left: 10px;\n  font-weight: bold;\n}\n\n.img-btn {\n  max-width: 80px;\n}\n\nion-item {\n  padding-right: 20px !important;\n}\n\nion-text {\n  padding-top: 20px;\n  display: block;\n}\n\np span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9pbmRleC9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2V0dGluZ3NcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0ROOztBREtFO0VBQ0UsZUFBQTtBQ0ZKOztBREtFO0VBQ0UsOEJBQUE7QUNGSjs7QURLQztFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZIOztBREtDO0VBQ0MsY0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9pbmRleC9pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICBpb24tbGFiZWwgcHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcblxyXG4gIC5pbWctYnRuIHtcclxuICAgIG1heC13aWR0aDogODBweDtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuIGlvbi10ZXh0IHtcclxuICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gfVxyXG5cclxuIHAgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn0iLCJpb24tbGFiZWwgcCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltZy1idG4ge1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGV4dCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxucCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";
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