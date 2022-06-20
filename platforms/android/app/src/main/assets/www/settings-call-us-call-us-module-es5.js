function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-call-us-call-us-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingsCallUsCallUsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content [fullscreen]=\"true\" mode=\"md\">\n\n  <div class=\"icon\" routerLink=\"/landing/setting\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </div>\n  \n    <h1>Contact US</h1>\n\n    <div class=\"itemBorder\">\n      <ion-select placeholder=\"What's your problem\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"1\">1</ion-select-option>\n      </ion-select>\n    </div>\n  \n    <ion-item style=\"margin: 10px; border: black solid 0.5px; border-radius: 10px;\">\n      <ion-input type=\"text\"  placeholder=\"Your Reason\"></ion-input>\n    </ion-item>\n  \n    <ion-item style=\"margin: 10px; border: black solid 0.5px; border-radius: 10px;\">\n      <ion-textarea type=\"text\"  placeholder=\"Description\" style=\"height: 200px;\"></ion-textarea>\n    </ion-item>\n  \n    <section>\n      <ion-button expand=\"block\" (click)=\"sendEmail()\">Submit</ion-button>\n    </section>\n  \n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/call-us/call-us-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/settings/call-us/call-us-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: CallUsPageRoutingModule */

  /***/
  function srcAppPagesLandingSettingsCallUsCallUsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsPageRoutingModule", function () {
      return CallUsPageRoutingModule;
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


    var _call_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./call-us.page */
    "./src/app/pages/landing/settings/call-us/call-us.page.ts");

    var routes = [{
      path: '',
      component: _call_us_page__WEBPACK_IMPORTED_MODULE_3__["CallUsPage"]
    }];

    var CallUsPageRoutingModule = function CallUsPageRoutingModule() {
      _classCallCheck(this, CallUsPageRoutingModule);
    };

    CallUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CallUsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/call-us/call-us.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/settings/call-us/call-us.module.ts ***!
    \******************************************************************/

  /*! exports provided: CallUsPageModule */

  /***/
  function srcAppPagesLandingSettingsCallUsCallUsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsPageModule", function () {
      return CallUsPageModule;
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


    var _call_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./call-us-routing.module */
    "./src/app/pages/landing/settings/call-us/call-us-routing.module.ts");
    /* harmony import */


    var _call_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./call-us.page */
    "./src/app/pages/landing/settings/call-us/call-us.page.ts");

    var CallUsPageModule = function CallUsPageModule() {
      _classCallCheck(this, CallUsPageModule);
    };

    CallUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _call_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallUsPageRoutingModule"]],
      declarations: [_call_us_page__WEBPACK_IMPORTED_MODULE_6__["CallUsPage"]]
    })], CallUsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/call-us/call-us.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/settings/call-us/call-us.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingsCallUsCallUsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  margin-top: 20px;\n  margin-left: 15px;\n}\n\n.icon {\n  background: lightblue;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n  margin-top: 30px;\n  margin-left: 20px;\n}\n\nion-icon {\n  font-size: 25px;\n  color: blue;\n}\n\n.itemBorder {\n  margin: 10px;\n  border: black solid 0.5px;\n  border-radius: 10px;\n}\n\nion-select {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9jYWxsLXVzL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xcY2FsbC11c1xcY2FsbC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvY2FsbC11cy9jYWxsLXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUVJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmdzL2NhbGwtdXMvY2FsbC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuICBcclxuICAuaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLml0ZW1Cb3JkZXJ7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4OyBcclxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMC41cHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlbGVjdHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9IiwiaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmljb24ge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5pdGVtQm9yZGVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IGJsYWNrIHNvbGlkIDAuNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/call-us/call-us.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/landing/settings/call-us/call-us.page.ts ***!
    \****************************************************************/

  /*! exports provided: CallUsPage */

  /***/
  function srcAppPagesLandingSettingsCallUsCallUsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsPage", function () {
      return CallUsPage;
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


    var _ionic_native_email_composer_ngx_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx/index */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");

    var CallUsPage = /*#__PURE__*/function () {
      function CallUsPage(emailComposer) {
        _classCallCheck(this, CallUsPage);

        this.emailComposer = emailComposer;
        this.sendObj = {
          to: '',
          subject: '',
          body: ''
        };
      }

      _createClass(CallUsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var email = {
            to: 'aqlika@macantech.asia',
            subject: 'tes',
            body: 'test',
            isHtml: true
          };
          this.emailComposer.open(email);
        }
      }]);

      return CallUsPage;
    }();

    CallUsPage.ctorParameters = function () {
      return [{
        type: _ionic_native_email_composer_ngx_index__WEBPACK_IMPORTED_MODULE_2__["EmailComposer"]
      }];
    };

    CallUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-call-us',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./call-us.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./call-us.page.scss */
      "./src/app/pages/landing/settings/call-us/call-us.page.scss"))["default"]]
    })], CallUsPage);
    /***/
  }
}]);
//# sourceMappingURL=settings-call-us-call-us-module-es5.js.map