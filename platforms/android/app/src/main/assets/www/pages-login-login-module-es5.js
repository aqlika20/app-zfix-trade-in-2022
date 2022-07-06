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


    __webpack_exports__["default"] = "<ion-content class=\"background\" [fullscreen]=\"true\">\r\n  <ion-card>\r\n    <!-- <img src=\"../../../assets/images/zfix_logo.png\" alt=\"\" class=\"zfix\"> -->\r\n    <ion-card-header>\r\n       <ion-card-title>\r\n         Masuk\r\n       </ion-card-title>\r\n       <!-- <ion-card-subtitle>\r\n         Aplikasi Trade In Terpecaya\r\n       </ion-card-subtitle> -->\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Email\"  name=\"email\" type=\"email\" [(ngModel)]=\"credential.email\" pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Password\" name=\"password\" type=\"password\" [(ngModel)]=\"credential.password\" minlength=\"8\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <div class=\"forgot\">\r\n        <a routerLink=\"/forgot-password\">Lupa Kata Sandi?</a>\r\n      </div>\r\n      \r\n      <div class=\"botton-section\" style=\"text-align: center;\">\r\n        <ion-button (click)=\"login() \" routerLink=\"/login\">Masuk</ion-button>\r\n      </div>\r\n      \r\n      <div style=\"margin-top: 20px; text-align: center;\">\r\n        <p style=\"font-family: Plus Jakarta Sans;\">Butuh akun baru? <a class=\"forgot\" routerLink=\"/register\">Daftar</a></p>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
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


    __webpack_exports__["default"] = "ion-content.background ion-card {\n  margin-top: 20px;\n  background: transparent;\n  box-shadow: none;\n}\nion-content.background ion-card .zfix {\n  height: 40px;\n}\nion-content.background ion-card .botton-section {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\nion-content.background ion-card ion-card-title {\n  margin-top: 26px;\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 36px;\n  color: #000000;\n}\nion-content.background ion-card ion-card-subtitle {\n  font-size: 14px;\n  color: #ffffff;\n}\nion-content.background ion-card ion-card-content {\n  margin-top: 10px;\n}\nion-content.background ion-card ion-card-content ion-item {\n  --ion-item-background:transparent;\n  --border--width:0;\n  --inner-border-width:0;\n  border: solid 1px #EBEBEB;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  margin-top: 10px;\n  box-shadow: none !important;\n}\nion-content.background ion-card ion-card-content ion-item ion-input {\n  border: 1px;\n  font-size: 14px;\n  font-weight: 300;\n  color: #445F6F;\n}\nion-content.background ion-card ion-card-content .forgot {\n  text-decoration: none;\n  color: #045FC4;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n}\nion-content.background ion-card ion-card-content ion-button {\n  display: flex;\n  flex-direction: row;\n  font-family: Plus Jakarta Sans;\n  width: 210px;\n  height: 38px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: none;\n  --background: #045FC4;\n  --border-radius:20px !important;\n  color: #FFFFFF;\n}\nion-content.background ion-card ion-card-content ion-button.btn_signup {\n  height: 40px;\n  width: 150px;\n  font-size: 20px;\n  font-family: Plus Jakarta Sans;\n  border: 1px solid #fff;\n  text-transform: none;\n  font-weight: 300;\n  --background:transparent;\n  border-radius: 20px !important;\n  color: #ffffff;\n  font-weight: bold;\n  box-shadow: transparent;\n}\nion-content.background ion-card ion-card-content ion-button.btn_signup .button-sigup {\n  margin-top: 19px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: none;\n}\nion-content.background .bg-image {\n  position: relative;\n  bottom: -10%;\n}\nion-content.background .bg-image img {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FESUk7RUFDRSxZQUFBO0FDRk47QURPSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0xOO0FEUUk7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNOTjtBRFNJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNQTjtBRFNJO0VBQ0UsZ0JBQUE7QUNQTjtBRFNNO0VBQ0UsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNQUjtBRFNRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNQVjtBRFdNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNUUjtBRFlNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBRUEsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FDYlI7QURpQk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ2ZSO0FEaUJRO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDZlY7QURvQkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNsQko7QURxQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjpsaW5lYXItZ3JhZGllbnQoIzBmNGVkOCwjMDA5OWZmLHJnYigxODQsIDIwMiwgMjUwKSk7XHJcbiAgXHJcbiAgaW9uLWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgXHJcbiAgICAuemZpeHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLy8gICBmaWx0ZXI6IGRyb3Atc2hhZG93KC0xcHggLTFweCAycHggcmdiYSgyNTUsMjU1LDI1NTAuNSkgKVxyXG4gICAgLy8gICBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCByZ2JhKDAsMCwwLDAuMikpXHJcbiAgICAvLyAgO1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbi1zZWN0aW9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgbWFyZ2luLXRvcDogMjZweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwOyBcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmOyBcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuXHJcbiAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWJvcmRlci0td2lkdGg6MDtcclxuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDowO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNFQkVCRUI7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ1RjZGO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9yZ290e1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjojMDQ1RkM0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgICAgICB3aWR0aDogMjEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG5cclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDQ1RkM0O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czoyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6I0ZGRkZGRjtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgIGlvbi1idXR0b24uYnRuX3NpZ251cHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAuYnV0dG9uLXNpZ3Vwe1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDoxOXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG4gIH1cclxuICAuYmctaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAtMTAlO1xyXG5cclxuICB9XHJcbiAgLmJnLWltYWdlIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufSBcclxuICAiLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIC56Zml4IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCAuYm90dG9uLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyNnB4O1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLS13aWR0aDowO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDowO1xuICBib3JkZXI6IHNvbGlkIDFweCAjRUJFQkVCO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNDQ1RjZGO1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5mb3Jnb3Qge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDQ1RkM0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDQ1RkM0O1xuICAtLWJvcmRlci1yYWRpdXM6MjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tYnV0dG9uLmJ0bl9zaWdudXAge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tYnV0dG9uLmJ0bl9zaWdudXAgLmJ1dHRvbi1zaWd1cCB7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIC5iZy1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtMTAlO1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCAuYmctaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */";
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