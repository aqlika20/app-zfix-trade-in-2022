function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-qr/modal-qr.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-qr/modal-qr.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingModalModalQrModalQrComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-item>\r\n    <ion-label class=\"title\">Preview</ion-label>\r\n    <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon>\r\n  </ion-item>\r\n  <div class=\"ion-text-center\" style=\"margin-bottom: 0 !important; margin-top: 10%;\">\r\n    <ngx-qrcode \r\n    [width]=240\r\n    [margin]=\"0\"\r\n    value = \"{{id}}\">\r\n    </ngx-qrcode>\r\n  </div>\r\n  <p class=\"t2\" style=\"margin-top: 5%;\">{{voucher_key}}</p> \r\n\r\n  <div class=\"desk ion-text-center\">\r\n    <p class=\"t2\">QR Code ini hanya bisa digunakan di lokasi toko yang telah dipilih diawal, harga diatas adalah harga final setelah pengecekan.</p>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/popover/popover.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/popover/popover.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n  <ion-list-header> ZFix Trade In </ion-list-header>\n\n  <ion-item *ngFor=\"let item of notification\">\n    <ion-label class=\"ion-text-wrap\">\n      <h3>{{item.type}}</h3>\n      <p>{{item.description}}</p>\n    </ion-label>\n  </ion-item>\n\n</ion-list>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/authentication.guard */
    "./src/app/guards/authentication.guard.ts");

    var routes = [{
      path: '',
      canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'landing',
      canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-landing-landing-routing-module */
        "pages-landing-landing-routing-module").then(__webpack_require__.bind(null,
        /*! ./pages/landing/landing-routing.module */
        "./src/app/pages/landing/landing-routing.module.ts")).then(function (m) {
          return m.LandingRoutingModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-login-login-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-register-register-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-register-register-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'forgot-password',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-forgot-password-forgot-password-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/forgot-password/forgot-password.module */
        "./src/app/pages/forgot-password/forgot-password.module.ts")).then(function (m) {
          return m.ForgotPasswordPageModule;
        });
      }
    }, {
      path: 'intro',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-intro-intro-module */
        "pages-intro-intro-module").then(__webpack_require__.bind(null,
        /*! ./pages/intro/intro.module */
        "./src/app/pages/intro/intro.module.ts")).then(function (m) {
          return m.IntroPageModule;
        });
      }
    }, {
      path: 'tabs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, authService, router, storage, network, alerController, oneSignal) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.router = router;
        this.storage = storage;
        this.network = network;
        this.alerController = alerController;
        this.oneSignal = oneSignal;
        this.rootPage = 'Tabs';
        this.initializeApp();
        window.addEventListener('offline', function () {
          _this.openAlert();
        });
      }

      _createClass(AppComponent, [{
        key: "onPushReceived",
        value: function onPushReceived(payload) {// alert('Push recevied:' + payload.body);
        }
      }, {
        key: "onPushOpened",
        value: function onPushOpened(payload) {// alert('Push opened: ' + payload.body);
        }
      }, {
        key: "openAlert",
        value: function openAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alerController.create({
                      header: 'Check Network Connection',
                      message: 'You do not have Internet Connection',
                      buttons: [{
                        text: "OK"
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
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.oneSignal.startInit('65e23d04-6a84-441a-9bed-767d7646033e', '325212809157');

            _this2.oneSignal.inFocusDisplaying(_this2.oneSignal.OSInFocusDisplayOption.Notification);

            _this2.oneSignal.handleNotificationReceived().subscribe(function (data) {
              return _this2.onPushReceived(data.payload);
            });

            _this2.oneSignal.handleNotificationOpened().subscribe(function (data) {
              return _this2.onPushOpened(data.notification.payload);
            });

            _this2.oneSignal.endInit(); // this.oneSignal.setExternalUserId('KEMARAUAJA')


            _this2.statusBar.styleLightContent();

            setTimeout(function () {
              _this2.splashScreen.hide();
            }, 1000);

            _this2.authService.checkToken();

            setTimeout(function () {
              _this2.authService.authenticationState.subscribe(function (state) {
                // console.log(state);
                if (state) {
                  _this2.router.navigate(['landing', 'type']);
                } else {
                  _this2.router.navigate(['login']);
                }
              });
            }, 1000);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/uid/ngx */
    "./node_modules/@ionic-native/uid/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_extended_device_information_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/extended-device-information/ngx */
    "./node_modules/@ionic-native/extended-device-information/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/camera-preview/ngx */
    "./node_modules/@ionic-native/camera-preview/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_phonegap_local_notification_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/phonegap-local-notification/ngx */
    "./node_modules/@ionic-native/phonegap-local-notification/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/background-mode/ngx */
    "./node_modules/@ionic-native/background-mode/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @ionic-native/vibration/ngx */
    "./node_modules/@ionic-native/vibration/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_audio_management_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @ionic-native/audio-management/ngx */
    "./node_modules/@ionic-native/audio-management/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @ionic-native/native-audio/ngx */
    "./node_modules/@ionic-native/native-audio/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @ionic-native/fingerprint-aio/ngx */
    "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @techiediaries/ngx-qrcode */
    "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/techiediaries-ngx-qrcode.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_pages_landing_popover_popover_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! src/app/pages/landing/popover/popover.component */
    "./src/app/pages/landing/popover/popover.component.ts");
    /* harmony import */


    var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @ionic-native/launch-navigator/ngx */
    "./node_modules/@ionic-native/launch-navigator/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_pages_landing_modal_modal_qr_modal_qr_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! src/app/pages/landing/modal/modal-qr/modal-qr.component */
    "./src/app/pages/landing/modal/modal-qr/modal-qr.component.ts");
    /* harmony import */


    var _ionic_native_email_composer_ngx_index__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx/index */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], src_app_pages_landing_popover_popover_component__WEBPACK_IMPORTED_MODULE_35__["PopoverComponent"], src_app_pages_landing_modal_modal_qr_modal_qr_component__WEBPACK_IMPORTED_MODULE_37__["ModalQrComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["IonicStorageModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_33__["NgxQRCodeModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_9__["UniqueDeviceID"], _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_10__["Uid"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"], _ionic_native_extended_device_information_ngx__WEBPACK_IMPORTED_MODULE_11__["ExtendedDeviceInformation"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__["Camera"], _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_18__["CameraPreview"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_20__["Clipboard"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_21__["Keyboard"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_22__["LocalNotifications"], _ionic_native_phonegap_local_notification_ngx__WEBPACK_IMPORTED_MODULE_23__["PhonegapLocalNotification"], _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_24__["BackgroundMode"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_27__["AppVersion"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_28__["Network"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_29__["Vibration"], _ionic_native_audio_management_ngx__WEBPACK_IMPORTED_MODULE_30__["AudioManagement"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_31__["NativeAudio"], _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_32__["FingerprintAIO"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_34__["OneSignal"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_36__["LaunchNavigator"], _ionic_native_email_composer_ngx_index__WEBPACK_IMPORTED_MODULE_38__["EmailComposer"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/config/api.js":
  /*!*******************************!*\
    !*** ./src/app/config/api.js ***!
    \*******************************/

  /*! exports provided: apiUrl, tokenKey, ActivationKey, setToken */

  /***/
  function srcAppConfigApiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiUrl", function () {
      return apiUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenKey", function () {
      return tokenKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivationKey", function () {
      return ActivationKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setToken", function () {
      return setToken;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var apiUrl = "https://trade-in.zfix.id/api/";
    var tokenKey = "auth-token";
    var ActivationKey = "selling";

    function setToken(token) {
      return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append("Authorization", "Bearer " + token);
    }
    /***/

  },

  /***/
  "./src/app/guards/authentication.guard.ts":
  /*!************************************************!*\
    !*** ./src/app/guards/authentication.guard.ts ***!
    \************************************************/

  /*! exports provided: AuthenticationGuard */

  /***/
  function srcAppGuardsAuthenticationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () {
      return AuthenticationGuard;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var AuthenticationGuard = /*#__PURE__*/function () {
      function AuthenticationGuard(authService) {
        _classCallCheck(this, AuthenticationGuard);

        this.authService = authService;
      }

      _createClass(AuthenticationGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return this.authService.isAuthenticated();
        }
      }]);

      return AuthenticationGuard;
    }();

    AuthenticationGuard.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    AuthenticationGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationGuard);
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-qr/modal-qr.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-qr/modal-qr.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingModalModalQrModalQrComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.title {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1xci9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbW9kYWxcXG1vZGFsLXFyXFxtb2RhbC1xci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1xci9tb2RhbC1xci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21vZGFsL21vZGFsLXFyL21vZGFsLXFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG59XHJcblxyXG4uZGVza3tcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsImlvbi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbn1cblxuLmRlc2sge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udDEge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MiB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-qr/modal-qr.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-qr/modal-qr.component.ts ***!
    \********************************************************************/

  /*! exports provided: ModalQrComponent */

  /***/
  function srcAppPagesLandingModalModalQrModalQrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalQrComponent", function () {
      return ModalQrComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @techiediaries/ngx-qrcode */
    "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/techiediaries-ngx-qrcode.js");

    var ModalQrComponent = /*#__PURE__*/function () {
      function ModalQrComponent(ModalController, NgxQRCodeModule) {
        _classCallCheck(this, ModalQrComponent);

        this.ModalController = ModalController;
        this.NgxQRCodeModule = NgxQRCodeModule;
      }

      _createClass(ModalQrComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.ModalController.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ModalQrComponent;
    }();

    ModalQrComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_3__["NgxQRCodeModule"]
      }];
    };

    ModalQrComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-qr',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-qr.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-qr/modal-qr.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-qr.component.scss */
      "./src/app/pages/landing/modal/modal-qr/modal-qr.component.scss"))["default"]]
    })], ModalQrComponent);
    /***/
  },

  /***/
  "./src/app/pages/landing/popover/popover.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/landing/popover/popover.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/landing/popover/popover.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/landing/popover/popover.component.ts ***!
    \************************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function srcAppPagesLandingPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var PopoverComponent = /*#__PURE__*/function () {
      function PopoverComponent(popoverController, sellingApiService, storage, utilsService) {
        _classCallCheck(this, PopoverComponent);

        this.popoverController = popoverController;
        this.sellingApiService = sellingApiService;
        this.storage = storage;
        this.utilsService = utilsService;
        this.notification = [];
        this.list = ["tes1", "tes2"];
      }

      _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getNotif();
        }
      }, {
        key: "getNotif",
        value: function getNotif() {
          var _this3 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then(function (token) {
            _this3.sellingApiService.getNotification(token).subscribe(function (response) {
              _this3.notification = response.data;
              console.log(_this3.notification);
            }, function (err) {
              _this3.utilsService.showToast("There is a problem.");
            });
          });
          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then(function (token) {
            _this3.sellingApiService.readNotification(token).subscribe(function (success) {}, function (err) {
              _this3.utilsService.showToast("There is a problem.");
            });
          });
        }
      }]);

      return PopoverComponent;
    }();

    PopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_3__["SellingApiService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
      }];
    };

    PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/popover/popover.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popover.component.scss */
      "./src/app/pages/landing/popover/popover.component.scss"))["default"]]
    })], PopoverComponent);
    /***/
  },

  /***/
  "./src/app/services/api/selling-api.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/api/selling-api.service.ts ***!
    \*****************************************************/

  /*! exports provided: SellingApiService */

  /***/
  function srcAppServicesApiSellingApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellingApiService", function () {
      return SellingApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/api */
    "./src/app/config/api.js");

    var SellingApiService = /*#__PURE__*/function () {
      function SellingApiService(http) {
        _classCallCheck(this, SellingApiService);

        this.http = http;
      }

      _createClass(SellingApiService, [{
        key: "deviceDetail",
        value: function deviceDetail() {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + 'device');
        }
      }, {
        key: "getDeviceDetail",
        value: function getDeviceDetail(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + 'device/detail', data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "sellDevice",
        value: function sellDevice(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/selling-phone", data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "sellLaptop",
        value: function sellLaptop(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/selling-laptop", data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getLaptopDetail",
        value: function getLaptopDetail(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + 'device/detail-laptop', data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "sellPs",
        value: function sellPs(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/selling-ps", data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getPsDetail",
        value: function getPsDetail(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + 'device/detail-ps', data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "sellTv",
        value: function sellTv(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/selling-tv", data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getTvDetail",
        value: function getTvDetail(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + 'device/detail-tv', data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getStore",
        value: function getStore(token) {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/store", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getBrand",
        value: function getBrand(token) {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/brands", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getBrandPS",
        value: function getBrandPS(token) {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/brands-ps", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getBrandLaptop",
        value: function getBrandLaptop(token) {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/brands-laptop", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getBrandKulkas",
        value: function getBrandKulkas(token) {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/brands-kulkas", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getKulkasDetail",
        value: function getKulkasDetail(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + 'device/detail-kulkas', data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "sellMesinCuci",
        value: function sellMesinCuci(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/selling-mesin-cuci", data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getBrandMesinCuci",
        value: function getBrandMesinCuci(token) {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/brands-mesin-cuci", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getMesinCuciDetail",
        value: function getMesinCuciDetail(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + 'device/detail-mesin-cuci', data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "sellKulkas",
        value: function sellKulkas(token, data) {
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/selling-kulkas", data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getQR",
        value: function getQR(token) {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/qrCode", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getDetailTransaction",
        value: function getDetailTransaction(token) {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/transaction", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "getNotification",
        value: function getNotification(token) {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/notification", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }, {
        key: "readNotification",
        value: function readNotification(token) {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "device/read-notification", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token)
          });
        }
      }]);

      return SellingApiService;
    }();

    SellingApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SellingApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SellingApiService);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config/api */
    "./src/app/config/api.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(storage) {
        _classCallCheck(this, AuthenticationService);

        this.storage = storage;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(AuthenticationService, [{
        key: "sendResetEmail",
        value: function sendResetEmail(token, AuthenticationApiService) {
          throw new Error('Method not implemented.');
        }
      }, {
        key: "login",
        value: function login(token) {
          var _this4 = this;

          return this.storage.set(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"], token).then(function (res) {
            _this4.authenticationState.next(true);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this5 = this;

          return this.storage.remove(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then(function (res) {
            _this5.authenticationState.next(false);
          });
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authenticationState.value;
        }
      }, {
        key: "checkToken",
        value: function checkToken() {
          var _this6 = this;

          return this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then(function (res) {
            if (res) {
              _this6.authenticationState.next(true);
            }
          });
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/utilities.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/utilities.service.ts ***!
    \***********************************************/

  /*! exports provided: UtilitiesService */

  /***/
  function srcAppServicesUtilitiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilitiesService", function () {
      return UtilitiesService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");

    var UtilitiesService = /*#__PURE__*/function () {
      function UtilitiesService(toastCtrl, alertController, splashScreen, router, keyboard) {
        _classCallCheck(this, UtilitiesService);

        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.splashScreen = splashScreen;
        this.router = router;
        this.keyboard = keyboard;
      }

      _createClass(UtilitiesService, [{
        key: "showToast",
        value: function showToast(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: data,
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "showAlert",
        value: function showAlert(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'ZFix',
                      message: data,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context3.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "restart",
        value: function restart(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'ZFix',
                      message: data,
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this7.splashScreen.show();

                          location.href = "/landing";
                          setTimeout(function () {
                            _this7.splashScreen.hide();
                          }, 3000);
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "done",
        value: function done(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'ZFix',
                      message: data,
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this8.router.navigate(["/landing"]);
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "hideKeyboard",
        value: function hideKeyboard() {
          this.keyboard.hide();
        }
      }]);

      return UtilitiesService;
    }();

    UtilitiesService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]
      }];
    };

    UtilitiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilitiesService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ardim\Desktop\hampir selesai\New folder\myTrade_V3.0\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map