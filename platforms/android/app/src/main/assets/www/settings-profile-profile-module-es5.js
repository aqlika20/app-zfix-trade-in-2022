function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingsProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-content [fullscreen]=\"true\" mode=\"md\">\r\n\r\n  <div class=\"content\">\r\n    <div class=\"icon\" routerLink=\"/landing/setting\">\r\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    </div>\r\n    \r\n    <h1>Edit Profile</h1>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-label color=\"primary\" position=\"stacked\">Name</ion-label>\r\n      <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"user.data?.user.name\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-label color=\"primary\" position=\"stacked\">Mobile Phone</ion-label>\r\n      <ion-input name=\"contact\" [(ngModel)]=\"user.data?.user.contact\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-label color=\"primary\" position=\"stacked\">Address</ion-label>\r\n      <ion-input name=\"address\" [(ngModel)]=\"user.data?.user.address\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-label color=\"primary\" position=\"stacked\">Email</ion-label>\r\n      <ion-input type=\"text\" name=\"email\"  [(ngModel)]=\"user.data?.user.email\"></ion-input>\r\n    </ion-item>\r\n    \r\n    <div class=\"btn\">\r\n      <ion-button class=\"btn2\" shape=\"round\" (click)=\"submit()\">Submit</ion-button>\r\n    </div>\r\n\r\n    <!-- <section>\r\n      <ion-button expand=\"block\" (click)=\"submit()\">Submit</ion-button>\r\n    </section> -->\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/profile/profile-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/settings/profile/profile-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesLandingSettingsProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/landing/settings/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/profile/profile.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/settings/profile/profile.module.ts ***!
    \******************************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesLandingSettingsProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/landing/settings/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/landing/settings/profile/profile.page.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/profile/profile.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/settings/profile/profile.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingsProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  color: #035282;\n}\n\n.content {\n  padding: 20px;\n}\n\nh1 {\n  margin-top: 20px;\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n}\n\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n  margin-top: 30px;\n}\n\nion-icon {\n  font-size: 25px;\n  color: #045fc4;\n}\n\n.border {\n  border: black solid 0.5px;\n  border-radius: 10px;\n  margin-top: 5%;\n}\n\n.btn {\n  width: 100%;\n  height: 100%;\n  padding: 0 !important;\n}\n\n.btn2 {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 60%;\n  margin-top: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9wcm9maWxlL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcclxuICBjb2xvcjogcmdiYSgzLCA4MiwgMTMwLCAxKTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuICBcclxuLmljb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAyMzgsIDI0NSwgMSk7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogcmdiYSg0LCA5NSwgMTk2LCAxKTtcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDAuNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bjJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcclxuICBtYXJnaW4tdG9wOiA2JTtcclxufSIsImlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjMDM1MjgyO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmljb24ge1xuICBiYWNrZ3JvdW5kOiAjZWJlZWY1O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwNDVmYzQ7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IGJsYWNrIHNvbGlkIDAuNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmJ0bjIge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcbiAgbWFyZ2luLXRvcDogNiU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/profile/profile.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/landing/settings/profile/profile.page.ts ***!
    \****************************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesLandingSettingsProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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
    /*! ../../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/api/user-api.service */
    "./src/app/services/api/user-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(authService, storage, userApiService, router, alertCtrl, utilsService) {
        _classCallCheck(this, ProfilePage);

        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.utilsService = utilsService;
        this.user = {};
        this.credential = {};
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser();
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.credential = {};
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then(function (token) {
            _this.userApiService.userDetail(token).subscribe(function (response) {
              _this.user = response;
              console.log(_this.user); // console.log("image slides", this.listImageSlides);
            }, function (err) {
              _this.user = [];

              _this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

          if (((_a = this.user.data) === null || _a === void 0 ? void 0 : _a.user.name) == null || ((_b = this.user.data) === null || _b === void 0 ? void 0 : _b.user.address) == null || ((_c = this.user.data) === null || _c === void 0 ? void 0 : _c.user.contact) == null || ((_d = this.user.data) === null || _d === void 0 ? void 0 : _d.user.email.replace(/\s/g, "")) == "" || ((_e = this.user.data) === null || _e === void 0 ? void 0 : _e.user.name.replace(/\s/g, "")) == "" || ((_f = this.user.data) === null || _f === void 0 ? void 0 : _f.user.contact.replace(/\s/g, "")) == "" || ((_g = this.user.data) === null || _g === void 0 ? void 0 : _g.user.address.replace(/\s/g, "")) == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else {
            this.credential.name = (_h = this.user.data) === null || _h === void 0 ? void 0 : _h.user.name;
            this.credential.email = (_j = this.user.data) === null || _j === void 0 ? void 0 : _j.user.email;
            this.credential.address = (_k = this.user.data) === null || _k === void 0 ? void 0 : _k.user.address;
            this.credential.contact = (_l = this.user.data) === null || _l === void 0 ? void 0 : _l.user.contact;
            console.log(this.credential);
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then(function (token) {
              _this2.userApiService.userEdit(token, _this2.credential).subscribe(function (success) {
                _this2.utilsService.showToast("Update profile berhasil.");

                _this2.router.navigate(["landing/type"]);
              }, function (err) {
                var error = {};
                error = err.error;

                _this2.utilsService.showToast(error.message);
              });
            });
          }
        }
      }, {
        key: "hideKeyboard",
        value: function hideKeyboard() {
          this.utilsService.hideKeyboard();
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_5__["UserApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/landing/settings/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=settings-profile-profile-module-es5.js.map