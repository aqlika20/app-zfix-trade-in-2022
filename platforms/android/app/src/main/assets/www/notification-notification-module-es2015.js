(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/notification/notification.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/notification/notification.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content [fullscreen]=\"true\" mode=\"md\">\r\n\r\n  <div class=\"icon\" routerLink=\"/landing/type\">\r\n    <!-- <ion-icon name=\"arrow-back-outline\"></ion-icon> -->\r\n    <ion-icon class=\"ic_back\" name=\"arrow-back-outline\"></ion-icon>\r\n  </div>\r\n  \r\n    <h1>Notifikasi</h1>\r\n\r\n    <div class=\"ion-text-center\" style=\"margin-top: 20%;\" *ngIf = \"notification == ''\">\r\n      <ion-icon name=\"notifications\" style=\" color: #045FC4; font-size: 70px;\"></ion-icon>\r\n      <h2 style=\"font-weight: bold; font-size: 16px;\">Tidak Ada Notifikasi</h2>\r\n      <p>Di sinilah Anda akan menemukan notifikasi dan penawaran baru yang menarik. Pastikan untuk memeriksa kembali.</p>\r\n      <button routerLink=\"/landing/type\">Mulai Tukar Tambah</button>\r\n    </div>\r\n\r\n    <div *ngIf = \"notification != ''\">\r\n    <div *ngFor=\"let item of notification\">\r\n      <ion-list lines=\"none\">\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <img src=\"../../../../assets/icon/scan-barcode-activehdpi.png\" alt=\"\" >\r\n              </ion-col>\r\n              <ion-col size=\"10\">\r\n                <ion-row>\r\n                  <h3 class=\"price\">{{item.type}}</h3>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p style=\"font-size: 12px; color: #747474;\">{{item.description}}</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    </div>\r\n    \r\n  </ion-content>\r\n  ");

/***/ }),

/***/ "./src/app/pages/landing/notification/notification-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/landing/notification/notification-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/landing/notification/notification.page.ts");




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/notification/notification.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/landing/notification/notification.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/pages/landing/notification/notification-routing.module.ts");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/landing/notification/notification.page.ts");







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })
], NotificationPageModule);



/***/ }),

/***/ "./src/app/pages/landing/notification/notification.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/landing/notification/notification.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  margin-top: 20px;\n  margin-left: 20px;\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 30px;\n  color: black;\n  text-align: left;\n}\n\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n  margin-top: 30px;\n  margin-left: 20px;\n}\n\n.itemBorder {\n  margin: 10px;\n  border: black solid 0.5px;\n  border-radius: 10px;\n}\n\nion-select {\n  max-width: 100%;\n}\n\nbutton {\n  width: 200px;\n  height: 48px;\n  background: #045FC4;\n  border-radius: 56px;\n  color: white;\n}\n\n.ic_back {\n  font-size: 25px;\n  color: #045fc4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9ub3RpZmljYXRpb24vQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG5vdGlmaWNhdGlvblxcbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFFSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRE1FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gIFxyXG4gIC5pY29uIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAyMzgsIDI0NSwgMSk7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuLml0ZW1Cb3JkZXJ7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4OyBcclxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMC41cHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlbGVjdHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzA0NUZDNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmljX2JhY2sge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbiAgfSIsImgxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pY29uIHtcbiAgYmFja2dyb3VuZDogI2ViZWVmNTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5pdGVtQm9yZGVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IGJsYWNrIHNvbGlkIDAuNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZDogIzA0NUZDNDtcbiAgYm9yZGVyLXJhZGl1czogNTZweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaWNfYmFjayB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwNDVmYzQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/landing/notification/notification.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/landing/notification/notification.page.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





let NotificationPage = class NotificationPage {
    constructor(storage, sellingApiService) {
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.notification = [];
    }
    ngOnInit() {
        this.getNotif();
    }
    getNotif() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.sellingApiService.getNotification(token).subscribe((response) => {
                this.notification = response.data;
                console.log(this.notification);
            }, (err) => {
            });
        });
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.sellingApiService.readNotification(token).subscribe((success) => {
            }, (err) => {
            });
        });
    }
};
NotificationPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__["SellingApiService"] }
];
NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/notification/notification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notification.page.scss */ "./src/app/pages/landing/notification/notification.page.scss")).default]
    })
], NotificationPage);



/***/ })

}]);
//# sourceMappingURL=notification-notification-module-es2015.js.map