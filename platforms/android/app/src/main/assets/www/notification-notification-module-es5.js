function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/notification/notification.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/notification/notification.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingNotificationNotificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content [fullscreen]=\"true\" mode=\"md\">\n\n  <div class=\"icon\" routerLink=\"/landing/type\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </div>\n  \n    <h1>Notification</h1>\n\n    <div class=\"ion-text-center\" style=\"margin-top: 20%;\" *ngIf = \"notification == ''\">\n      <ion-icon name=\"notifications\" style=\" color: #045FC4; font-size: 70px;\"></ion-icon>\n      <h2 style=\"font-weight: bold; font-size: 16px;\">Tidak Ada Notifikasi</h2>\n      <p>Stay tuned! This is where you willll find notifications and exicing new offers. Be sure to check back.</p>\n      <button routerLink=\"/landing/type\">Mulai Tukar Tambah</button>\n    </div>\n\n    <div *ngIf = \"notification != ''\">\n    <div *ngFor=\"let item of notification\">\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"2\">\n                <img src=\"../../../../assets/icon/scan-barcode-activehdpi.png\" alt=\"\" >\n              </ion-col>\n              <ion-col size=\"10\">\n                <ion-row>\n                  <h3 class=\"price\">{{item.type}}</h3>\n                </ion-row>\n                <ion-row>\n                  <p style=\"font-size: 12px; color: #747474;\">{{item.description}}</p>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </div>\n    </div>\n    \n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/pages/landing/notification/notification-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/landing/notification/notification-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: NotificationPageRoutingModule */

  /***/
  function srcAppPagesLandingNotificationNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function () {
      return NotificationPageRoutingModule;
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


    var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/pages/landing/notification/notification.page.ts");

    var routes = [{
      path: '',
      component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }];

    var NotificationPageRoutingModule = function NotificationPageRoutingModule() {
      _classCallCheck(this, NotificationPageRoutingModule);
    };

    NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/notification/notification.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/landing/notification/notification.module.ts ***!
    \*******************************************************************/

  /*! exports provided: NotificationPageModule */

  /***/
  function srcAppPagesLandingNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function () {
      return NotificationPageModule;
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


    var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notification-routing.module */
    "./src/app/pages/landing/notification/notification-routing.module.ts");
    /* harmony import */


    var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/pages/landing/notification/notification.page.ts");

    var NotificationPageModule = function NotificationPageModule() {
      _classCallCheck(this, NotificationPageModule);
    };

    NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]],
      declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })], NotificationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/notification/notification.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/landing/notification/notification.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingNotificationNotificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  margin-top: 20px;\n  margin-left: 15px;\n}\n\n.icon {\n  background: lightblue;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n  margin-top: 30px;\n  margin-left: 20px;\n}\n\nion-icon {\n  font-size: 25px;\n  color: blue;\n}\n\n.itemBorder {\n  margin: 10px;\n  border: black solid 0.5px;\n  border-radius: 10px;\n}\n\nion-select {\n  max-width: 100%;\n}\n\nbutton {\n  width: 200px;\n  height: 48px;\n  background: #045FC4;\n  border-radius: 56px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9ub3RpZmljYXRpb24vQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG5vdGlmaWNhdGlvblxcbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUVJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbiAgXHJcbiAgLmljb24ge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5pdGVtQm9yZGVye1xyXG4gICAgLy8gZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweDsgXHJcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDAuNXB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zZWxlY3R7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICMwNDVGQzQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBcclxuICB9IiwiaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmljb24ge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5pdGVtQm9yZGVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IGJsYWNrIHNvbGlkIDAuNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZDogIzA0NUZDNDtcbiAgYm9yZGVyLXJhZGl1czogNTZweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/notification/notification.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/landing/notification/notification.page.ts ***!
    \*****************************************************************/

  /*! exports provided: NotificationPage */

  /***/
  function srcAppPagesLandingNotificationNotificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPage", function () {
      return NotificationPage;
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


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var NotificationPage = /*#__PURE__*/function () {
      function NotificationPage(storage, sellingApiService) {
        _classCallCheck(this, NotificationPage);

        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.notification = [];
      }

      _createClass(NotificationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getNotif();
        }
      }, {
        key: "getNotif",
        value: function getNotif() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this.sellingApiService.getNotification(token).subscribe(function (response) {
              _this.notification = response.data;
              console.log(_this.notification);
            }, function (err) {});
          });
          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this.sellingApiService.readNotification(token).subscribe(function (success) {}, function (err) {});
          });
        }
      }]);

      return NotificationPage;
    }();

    NotificationPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__["SellingApiService"]
      }];
    };

    NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/notification/notification.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notification.page.scss */
      "./src/app/pages/landing/notification/notification.page.scss"))["default"]]
    })], NotificationPage);
    /***/
  }
}]);
//# sourceMappingURL=notification-notification-module-es5.js.map