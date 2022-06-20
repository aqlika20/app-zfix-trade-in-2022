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


    __webpack_exports__["default"] = "ion-content.background ion-card {\n  margin-top: 20px;\n  background: transparent;\n  box-shadow: none;\n}\nion-content.background ion-card .zfix {\n  height: 40px;\n}\nion-content.background ion-card .botton-section {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\nion-content.background ion-card ion-card-title {\n  margin-top: 26px;\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 36px;\n  color: #000000;\n}\nion-content.background ion-card ion-card-subtitle {\n  font-size: 14px;\n  color: #ffffff;\n}\nion-content.background ion-card ion-card-content {\n  margin-top: 10px;\n}\nion-content.background ion-card ion-card-content ion-item {\n  --ion-item-background:transparent;\n  --border--width:0;\n  --inner-border-width:0;\n  border: solid 1px #EBEBEB;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  margin-top: 10px;\n}\nion-content.background ion-card ion-card-content ion-item ion-input {\n  border: 1px;\n  font-size: 14px;\n  font-weight: 300;\n  color: #445F6F;\n}\nion-content.background ion-card ion-card-content .forgot {\n  text-decoration: none;\n  color: #045FC4;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n}\nion-content.background ion-card ion-card-content ion-button {\n  display: flex;\n  flex-direction: row;\n  font-family: Plus Jakarta Sans;\n  width: 210px;\n  height: 38px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: none;\n  --background: #045FC4;\n  --border-radius:20px !important;\n  color: #FFFFFF;\n}\nion-content.background ion-card ion-card-content ion-button.btn_signup {\n  height: 40px;\n  width: 150px;\n  font-size: 20px;\n  font-family: Plus Jakarta Sans;\n  border: 1px solid #fff;\n  text-transform: none;\n  font-weight: 300;\n  --background:transparent;\n  border-radius: 20px !important;\n  color: #ffffff;\n  font-weight: bold;\n  box-shadow: transparent;\n}\nion-content.background ion-card ion-card-content ion-button.btn_signup .button-sigup {\n  margin-top: 19px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: none;\n}\nion-content.background .bg-image {\n  position: relative;\n  bottom: -10%;\n}\nion-content.background .bg-image img {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FESUk7RUFDRSxZQUFBO0FDRk47QURPSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0xOO0FEUUk7RUFDRSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNOTjtBRFNJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNQTjtBRFNJO0VBQ0UsZ0JBQUE7QUNQTjtBRFNNO0VBQ0UsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDUFI7QURTUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUFY7QURXTTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVFI7QURZTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQ2JSO0FEaUJNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNmUjtBRGlCUTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2ZWO0FEb0JFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDbEJKO0FEcUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNuQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6bGluZWFyLWdyYWRpZW50KCMwZjRlZDgsIzAwOTlmZixyZ2IoMTg0LCAyMDIsIDI1MCkpO1xyXG4gIFxyXG4gIGlvbi1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIFxyXG4gICAgLnpmaXh7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgIC8vICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtMXB4IC0xcHggMnB4IHJnYmEoMjU1LDI1NSwyNTUwLjUpIClcclxuICAgIC8vICAgZHJvcC1zaGFkb3coNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjIpKVxyXG4gICAgLy8gIDtcclxuICAgIH1cclxuICAgIC5ib3R0b24tc2VjdGlvbntcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDsgXHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjsgXHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcblxyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1ib3JkZXItLXdpZHRoOjA7XHJcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6MDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRUJFQkVCO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ1RjZGO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9yZ290e1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjojMDQ1RkM0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgICAgICB3aWR0aDogMjEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG5cclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDQ1RkM0O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czoyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6I0ZGRkZGRjtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgIGlvbi1idXR0b24uYnRuX3NpZ251cHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAuYnV0dG9uLXNpZ3Vwe1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDoxOXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG4gIH1cclxuICAuYmctaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAtMTAlO1xyXG5cclxuICB9XHJcbiAgLmJnLWltYWdlIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufSBcclxuICAiLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIC56Zml4IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCAuYm90dG9uLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyNnB4O1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLS13aWR0aDowO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDowO1xuICBib3JkZXI6IHNvbGlkIDFweCAjRUJFQkVCO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSBpb24taW5wdXQge1xuICBib3JkZXI6IDFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzQ0NUY2Rjtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuZm9yZ290IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzA0NUZDNDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgd2lkdGg6IDIxMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogIzA0NUZDNDtcbiAgLS1ib3JkZXItcmFkaXVzOjIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbi5idG5fc2lnbnVwIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbi5idG5fc2lnbnVwIC5idXR0b24tc2lndXAge1xuICBtYXJnaW4tdG9wOiAxOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCAuYmctaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTEwJTtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgLmJnLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */";
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