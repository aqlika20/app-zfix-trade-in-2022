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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\r\n  <ion-toolbar class=\"toolbar-color\">\r\n    <ion-buttons slot=\"start\" style=\"color: white;\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: white;\">Hubungi Kami</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <img class=\"bg-image\" src=\"../../../../assets/images/home/bg_home.png\" alt=\"\">\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <p align=\"center\"><ion-img src=\"./assets/images/contact_mascots.png\" width=\"128\"></ion-img></p>\r\n        <!-- <ion-img src=\"./assets/images/5.0x/contact_mascot.png\"></ion-img> -->\r\n      <div class=\"ion-text-center\">\r\n        Kami Siap Membantu Anda\r\n      </div>\r\n\r\n      <ion-text>\r\n        <p align=\"center\">\r\n          Silahkan menghubungi kami melalui beberapa pilihan opsi di bawah ini. Customer Service\r\n          kami siap melayani segala pernyataan setiap saat.\r\n        </p>\r\n      </ion-text>\r\n\r\n      <ion-grid style=\"padding-left: 20px; padding-top: 20px;\">\r\n        <ion-row> \r\n          <div class=\"span6\" style=\"padding-right:13px; border-right: 1px solid #ccc;\">\r\n            <a href=\"tel:+62 877-0477-5575\"><img class=\"icon-images\" src=\"./assets/images/3.0x/contact_call_icon.png\" /></a>\r\n            <!-- <img href=\"tel:555-555-5555\" src=\"./assets/images/3.0x/contact_call_icon.png\"> -->\r\n            <h3>Call</h3>\r\n          </div>\r\n        \r\n          <div class=\"span6\" style=\"padding-left:13px; padding-right:13px; border-right: 1px solid #ccc;\">\r\n            <a href=\"https://api.whatsapp.com/send?phone=6287704775575\" ><img class=\"icon-images\" src=\"./assets/images/3.0x/contact_chat_icon.png\"></a>\r\n              <h3>Chat</h3>\r\n          </div>\r\n\r\n          <div class=\"span6\" style=\"padding-left: 13px;\">\r\n            <a href=\"mailto:cs@zfix.id\" ><img class=\"icon-images\" src=\"./assets/images/3.0x/contact_email_icon.png\"></a>\r\n            <h3>Email</h3>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n      \r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = ".bg-image {\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.bg-image.bottom {\n  bottom: 0px;\n}\n\nion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\nion-card {\n  border-radius: 15px !important;\n  flex-direction: column;\n  padding-left: 20px;\n  padding-top: 20px;\n  padding-right: 20px;\n  display: flex;\n  width: 90% !important;\n  margin: 5% !important;\n}\n\n.ion-text-center {\n  padding-top: 20px;\n  font-weight: bold;\n  color: black;\n}\n\nion-text {\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 10px;\n  text-align: center;\n  color: black;\n}\n\nion-img {\n  height: 250px;\n}\n\n.icon-images {\n  width: 55px;\n  height: 55px;\n}\n\nh3 {\n  margin-left: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9jYWxsLXVzL0Q6XFx6Zml4LXRyYWRlLWluLTIwMjIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xcY2FsbC11c1xcY2FsbC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvY2FsbC11cy9jYWxsLXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztBQ0NiOztBRFBBO0VBU0ksUUFBUztFQUNULDRCQUE0QjtBQ0VoQzs7QURaQTtFQWVJLFdBQVc7QUNDZjs7QURJQTtFQUNJLHVCQUF1QjtFQUN2QixtQkFBYztBQ0RsQjs7QURJQTtFQUNJLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixxQkFBcUI7QUNEekI7O0FESUE7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7QUNEaEI7O0FESUE7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQ0RoQjs7QURLRTtFQUNFLGFBQWE7QUNGakI7O0FES0E7RUFDSSxXQUFXO0VBQ1gsWUFBWTtBQ0ZoQjs7QURLQTtFQUNJLGlCQUFpQjtBQ0ZyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvY2FsbC11cy9jYWxsLXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgXHJcbiAgICAmLnRvcCB7XHJcbiAgICB0b3A6ICAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgJi5ib3R0b20ge1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbiAgICBcclxuaW9uLWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNSUgIWltcG9ydGFudDtcclxufVxyXG4gICAgXHJcbi5pb24tdGV4dC1jZW50ZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi10ZXh0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuICBpb24taW1ne1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcblxyXG4uaWNvbi1pbWFnZXMge1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG59IiwiLmJnLWltYWdlIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJnLWltYWdlLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuXG4uYmctaW1hZ2UuYm90dG9tIHtcbiAgYm90dG9tOiAwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNSUgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWNlbnRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24taW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLmljb24taW1hZ2VzIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbn1cblxuaDMge1xuICBtYXJnaW4tbGVmdDogMTNweDtcbn1cbiJdfQ== */";
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

    var CallUsPage = /*#__PURE__*/function () {
      function CallUsPage() {
        _classCallCheck(this, CallUsPage);
      }

      _createClass(CallUsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CallUsPage;
    }();

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