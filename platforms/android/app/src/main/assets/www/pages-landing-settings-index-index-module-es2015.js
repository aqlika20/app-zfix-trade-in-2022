(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-settings-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>index</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <ion-item lines=\"none\">\r\n   <ion-text>\r\n     <h2>Settings</h2>\r\n   </ion-text>\r\n  </ion-item>\r\n  \r\n  <ion-item lines=\"none\" class=\"current-user\" color=\"transparent\">\r\n    <ion-avatar>\r\n      <img class=\"avatars\" src=\"./assets/images/z_logo.png\">\r\n    </ion-avatar>\r\n    <ion-label class=\"ion-text-nowrap\">\r\n      <p *ngIf=\"user != {}\"><span style=\"font-size: 18px;\">{{ user.data?.user.name }}</span><span style=\"font-size: 11px;\" routerLink=\"../../profile\">edit profile<img class=\"avatars\" src=\"./assets/images/arrow-circle-right.png\"></span></p>\r\n\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">General</p>\r\n    </ion-text>\r\n   </ion-item>\r\n\r\n   <ion-item routerLink=\"../../history\">\r\n    <ion-img src=\"./assets/images/transaction-minus.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"ion-text-nowrap\">\r\n      <p>Daftar Transaksi</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item routerLink=\"../../outlet\">\r\n    <ion-img src=\"./assets/images/share.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"ion-text-nowrap\">\r\n      <p>Service Center Zfix</p>\r\n    </ion-label>\r\n  </ion-item> \r\n  \r\n  <ion-item routerLink=\"../../call-us\">\r\n    <ion-img src=\"./assets/images/headphone.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"ion-text-nowrap\">\r\n      <p>Hubungi Kami</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">Other</p>\r\n    </ion-text>\r\n   </ion-item>\r\n\r\n   <ion-item routerLink=\"../../privacy-policy\">\r\n    <ion-img src=\"./assets/images/transaction-minus.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"ion-text-nowrap\">\r\n      <p>Kebijakan Privasi</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item routerLink=\"../../terms\">\r\n    <ion-img src=\"./assets/images/share.png\" class=\"img-btn\"></ion-img> \r\n    <ion-label class=\"ion-text-nowrap\">\r\n      <p>Syarat & Ketentuan</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\" (click)=\"logout()\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">Log out <img class=\"avatars\" src=\"./assets/images/arrow-circle-right.png\">\r\n      </p>\r\n    </ion-text>\r\n   </ion-item>\r\n\r\n   <ion-item lines=\"none\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">Version</p>\r\n    </ion-text>\r\n   </ion-item>\r\n  \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/landing/settings/index/index-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing/settings/index/index-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: IndexPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function() { return IndexPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/landing/settings/index/index.page.ts");




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/index/index.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing/settings/index/index.module.ts ***!
  \**************************************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/pages/landing/settings/index/index-routing.module.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/landing/settings/index/index.page.ts");







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"]
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })
], IndexPageModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/index/index.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing/settings/index/index.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label p {\n  margin-left: 10px;\n  font-weight: bold;\n}\n\n.img-btn {\n  max-width: 80px;\n}\n\nion-item {\n  padding-right: 20px !important;\n}\n\nion-text {\n  padding-top: 20px;\n  display: block;\n}\n\np span {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9pbmRleC9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2V0dGluZ3NcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQ0R2Qjs7QURLRTtFQUNFLGVBQWU7QUNGbkI7O0FES0U7RUFDRSw4QkFBOEI7QUNGbEM7O0FES0M7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQ0ZqQjs7QURLQztFQUNDLGNBQWM7QUNGaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmdzL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG4gIGlvbi1sYWJlbCBwe1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmltZy1idG4ge1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gaW9uLXRleHQge1xyXG4gICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiB9XHJcblxyXG4gcCBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufSIsImlvbi1sYWJlbCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW1nLWJ0biB7XG4gIG1heC13aWR0aDogODBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5wIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/settings/index/index.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/landing/settings/index/index.page.ts ***!
  \************************************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/user-api.service */ "./src/app/services/api/user-api.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");







let IndexPage = class IndexPage {
    constructor(authService, storage, userApiService, utilsService) {
        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.utilsService = utilsService;
        this.user = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getUser();
    }
    getUser() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.userApiService.userDetail(token).subscribe((response) => {
                this.user = response;
            }, (err) => {
                this.user = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    logout() {
        this.authService.logout();
    }
};
IndexPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.page.scss */ "./src/app/pages/landing/settings/index/index.page.scss")).default]
    })
], IndexPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-settings-index-index-module-es2015.js.map