function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"background\" [fullscreen]=\"true\">\r\n  <ion-card>\r\n    <!-- <img src=\"../../../assets/images/zfix_logo.png\" alt=\"\" class=\"zfix\"> -->\r\n    <ion-card-header>\r\n       <ion-card-title>\r\n         Log in\r\n       </ion-card-title>\r\n       <!-- <ion-card-subtitle>\r\n         Aplikasi Trade In Terpecaya\r\n       </ion-card-subtitle> -->\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Email\"  name=\"email\" type=\"email\" [(ngModel)]=\"credential.email\" pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Password\" name=\"password\" type=\"password\" [(ngModel)]=\"credential.password\" minlength=\"8\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <div class=\"forgot\">\r\n        <a routerLink=\"/forgot-password\">Forgot Password?</a>\r\n      </div>\r\n      \r\n      <div class=\"botton-section\" style=\"text-align: center;\">\r\n        <ion-button (click)=\"login() \" routerLink=\"/login\">Sign In</ion-button>\r\n      </div>\r\n      \r\n      <div style=\"margin-top: 20px; text-align: center;\">\r\n        <p style=\"font-family: Plus Jakarta Sans;\">Butuh akun baru? <a class=\"forgot\" routerLink=\"/register\">Register</a></p>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background ion-card {\n  margin-top: 20px;\n  background: transparent;\n  box-shadow: none;\n}\n\nion-content.background ion-card .zfix {\n  height: 40px;\n}\n\nion-content.background ion-card .botton-section {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content.background ion-card ion-card-title {\n  margin-top: 26px;\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 36px;\n  color: #000000;\n}\n\nion-content.background ion-card ion-card-subtitle {\n  font-size: 14px;\n  color: #ffffff;\n}\n\nion-content.background ion-card ion-card-content {\n  margin-top: 10px;\n}\n\nion-content.background ion-card ion-card-content ion-item {\n  --ion-item-background:transparent;\n  --border--width:0;\n  --inner-border-width:0;\n  border: solid 1px #EBEBEB;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  margin-top: 10px;\n}\n\nion-content.background ion-card ion-card-content ion-item ion-input {\n  border: 1px;\n  font-size: 14px;\n  font-weight: 300;\n  color: #445F6F;\n}\n\nion-content.background ion-card ion-card-content .forgot {\n  text-decoration: none;\n  color: #045FC4;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n}\n\nion-content.background ion-card ion-card-content ion-button {\n  display: flex;\n  flex-direction: row;\n  font-family: Plus Jakarta Sans;\n  width: 210px;\n  height: 38px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: none;\n  --background: #045FC4;\n  --border-radius:20px !important;\n  color: #FFFFFF;\n}\n\nion-content.background ion-card ion-card-content ion-button.btn_signup {\n  height: 40px;\n  width: 150px;\n  font-size: 20px;\n  font-family: Plus Jakarta Sans;\n  border: 1px solid #fff;\n  text-transform: none;\n  font-weight: 300;\n  --background:transparent;\n  border-radius: 20px !important;\n  color: #ffffff;\n  font-weight: bold;\n  box-shadow: transparent;\n}\n\nion-content.background ion-card ion-card-content ion-button.btn_signup .button-sigup {\n  margin-top: 19px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: none;\n}\n\nion-content.background .bg-image {\n  position: relative;\n  bottom: -10%;\n}\n\nion-content.background .bg-image img {\n  width: 100%;\n  height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXHpmaXgtdHJhZGUtaW4tMjAyMi9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FDRnBCOztBREpBO0VBU00sWUFBWTtBQ0RsQjs7QURSQTtFQWVNLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUNIekI7O0FEaEJBO0VBdUJNLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUNIcEI7O0FEMUJBO0VBaUNNLGVBQWM7RUFDZCxjQUFjO0FDSHBCOztBRC9CQTtFQXFDTSxnQkFBZTtBQ0ZyQjs7QURuQ0E7RUF3Q1EsaUNBQXNCO0VBQ3RCLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixnQkFBZ0I7QUNEeEI7O0FEL0NBO0VBbURVLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUNBeEI7O0FEdERBO0VBMkRRLHFCQUFxQjtFQUNyQixjQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FDRHZCOztBRDlEQTtFQW1FUSxhQUFhO0VBQ2IsbUJBQW1CO0VBRW5CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFFcEIscUJBQWE7RUFDYiwrQkFBZ0I7RUFDaEIsY0FBYTtBQ0pyQjs7QUQ5RUE7RUF1RlEsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHdCQUFhO0VBQ2IsOEJBQTZCO0VBQzdCLGNBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0FDTC9COztBRDdGQTtFQXFHVSxnQkFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQ0oxQjs7QURyR0E7RUErR0ksa0JBQWtCO0VBQ2xCLFlBQVk7QUNOaEI7O0FEMUdBO0VBb0hJLFdBQVc7RUFDWCxZQUFZO0FDTmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCgjMGY0ZWQ4LCMwMDk5ZmYscmdiKDE4NCwgMjAyLCAyNTApKTtcclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBcclxuICAgIC56Zml4e1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvLyAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTFweCAtMXB4IDJweCByZ2JhKDI1NSwyNTUsMjU1MC41KSApXHJcbiAgICAvLyAgIGRyb3Atc2hhZG93KDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC4yKSlcclxuICAgIC8vICA7XHJcbiAgICB9XHJcbiAgICAuYm90dG9uLXNlY3Rpb257XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gICAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7IFxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7IFxyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG5cclxuICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tYm9yZGVyLS13aWR0aDowO1xyXG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOjA7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0VCRUJFQjtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICBib3JkZXI6IDFweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NUY2RjtcclxuICAgICAgICB9ICBcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcmdvdHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IzA0NUZDNDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuXHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzA0NUZDNDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6MjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICBpb24tYnV0dG9uLmJ0bl9zaWdudXB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6I2ZmZmZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgLmJ1dHRvbi1zaWd1cHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6MTlweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICBcclxuICAgIH1cclxuICB9XHJcbiAgLmJnLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogLTEwJTtcclxuXHJcbiAgfVxyXG4gIC5iZy1pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn0gXHJcbiAgIiwiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIC56Zml4IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIC5ib3R0b24tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAtLWJvcmRlci0td2lkdGg6MDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6MDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0VCRUJFQjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSBpb24taW5wdXQge1xuICBib3JkZXI6IDFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzQ0NUY2Rjtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5mb3Jnb3Qge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDQ1RkM0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIHdpZHRoOiAyMTBweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJhY2tncm91bmQ6ICMwNDVGQzQ7XG4gIC0tYm9yZGVyLXJhZGl1czoyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbi5idG5fc2lnbnVwIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tYnV0dG9uLmJ0bl9zaWdudXAgLmJ1dHRvbi1zaWd1cCB7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQgLmJnLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC0xMCU7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQgLmJnLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _services_api_authentication_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api/authentication-api.service */
    "./src/app/services/api/authentication-api.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(authApiService, authService, utilsService) {
        _classCallCheck(this, LoginPage);

        this.authApiService = authApiService;
        this.authService = authService;
        this.utilsService = utilsService;
        this.credential = {};
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.credential = {};
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          if (this.credential.email == null || this.credential.password == null || this.credential.email.replace(/\s/g, "") == "" || this.credential.password.replace(/\s/g, "") == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else {
            this.utilsService.showToast("Tunggu sebentar.");
            this.authApiService.login(this.credential).subscribe(function (response) {
              var raw = response;

              _this.authService.login(raw.data.access_token);
            }, function (err) {
              var error = {};
              error = err.error;

              _this.utilsService.showToast(error.message);
            });
          }
        }
      }, {
        key: "hideKeyboard",
        value: function hideKeyboard() {
          this.utilsService.hideKeyboard();
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _services_api_authentication_api_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationApiService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map