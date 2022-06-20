(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-settings-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>index</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-item lines=\"none\">\n   <ion-text>\n     <h2>Settings</h2>\n   </ion-text>\n  </ion-item>\n  \n  <ion-item lines=\"none\" class=\"current-user\" color=\"transparent\">\n    <ion-avatar>\n      <img class=\"avatars\" src=\"./assets/images/z_logo.png\">\n    </ion-avatar>\n    <ion-label class=\"ion-text-nowrap\">\n      <p *ngIf=\"user != {}\"><span style=\"font-size: 18px;\">{{ user.data?.user.name }}</span><span style=\"font-size: 11px;\" routerLink=\"../../profile\">edit profile<img class=\"avatars\" src=\"./assets/images/arrow-circle-right.png\"></span></p>\n\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-text>\n      <p style=\"font-size: 12px;\">General</p>\n    </ion-text>\n   </ion-item>\n\n   <ion-item routerLink=\"../../history\">\n    <ion-img src=\"./assets/images/transaction-minus.png\" class=\"img-btn\"></ion-img>\n    <ion-label class=\"ion-text-nowrap\">\n      <p>Daftar Transaksi</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item routerLink=\"../../outlet\">\n    <ion-img src=\"./assets/images/share.png\" class=\"img-btn\"></ion-img>\n    <ion-label class=\"ion-text-nowrap\">\n      <p>Service Center Zfix</p>\n    </ion-label>\n  </ion-item> \n  \n  <ion-item routerLink=\"../../call-us\">\n    <ion-img src=\"./assets/images/headphone.png\" class=\"img-btn\"></ion-img>\n    <ion-label class=\"ion-text-nowrap\">\n      <p>Hubungi Kami</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-text>\n      <p style=\"font-size: 12px;\">Other</p>\n    </ion-text>\n   </ion-item>\n\n   <ion-item routerLink=\"../../privacy-policy\">\n    <ion-img src=\"./assets/images/transaction-minus.png\" class=\"img-btn\"></ion-img>\n    <ion-label class=\"ion-text-nowrap\">\n      <p>Kebijakan Privasi</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item routerLink=\"../../terms\">\n    <ion-img src=\"./assets/images/share.png\" class=\"img-btn\"></ion-img> \n    <ion-label class=\"ion-text-nowrap\">\n      <p>Syarat & Ketentuan</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" (click)=\"logout()\">\n    <ion-text>\n      <p style=\"font-size: 12px;\">Log out <img class=\"avatars\" src=\"./assets/images/arrow-circle-right.png\">\n      </p>\n    </ion-text>\n   </ion-item>\n\n   <ion-item lines=\"none\">\n    <ion-text>\n      <p style=\"font-size: 12px;\">Version: {{VersionNumber}}</p>\n    </ion-text>\n   </ion-item>\n  \n\n</ion-content>\n");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>index</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <ion-item lines=\"none\">\r\n   <ion-text>\r\n     <div class=\"t1\">\r\n      Settings\r\n     </div>\r\n   </ion-text>\r\n  </ion-item>\r\n  \r\n  <ion-item lines=\"none\" class=\"current-user\" color=\"transparent\">\r\n    <ion-avatar>\r\n      <img class=\"avatars\" src=\"./assets/images/z_logo.png\">\r\n    </ion-avatar>\r\n    <ion-label class=\"text\">\r\n      <p *ngIf=\"user != {}\">\r\n        <span style=\"font-size: 18px;\">{{ user.data?.user.name }}</span>\r\n        <span style=\"font-size: 11px;\" routerLink=\"../../profile\">edit profile<img class=\"avatars\" style=\"margin-left: 2%;\" src=\"./assets/icon/arrow-circle-rightmdpi.png\"></span></p>\r\n\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">General</p>\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ion-item routerLink=\"../../history\">\r\n    <ion-img src=\"./assets/icon/transaction-minusmdpi-1.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"text\">\r\n      Daftar Transaksi\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item routerLink=\"../../outlet\">\r\n    <ion-img src=\"./assets/icon/sharemdpi-1.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"text\">\r\n      Service Center Zfix\r\n    </ion-label>\r\n  </ion-item> \r\n  \r\n  <ion-item routerLink=\"../../call-us\">\r\n    <ion-img src=\"./assets/icon/headphonemdpi.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"text\">\r\n      Hubungi Kami\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">Other\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ion-item routerLink=\"../../privacy-policy\">\r\n    <ion-img src=\"./assets/icon/transaction-minusmdpi-1.png\" class=\"img-btn\"></ion-img>\r\n    <ion-label class=\"text\">\r\n      Kebijakan Privasi\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item routerLink=\"../../terms\">\r\n    <ion-img src=\"./assets/icon/sharemdpi-1.png\" class=\"img-btn\"></ion-img> \r\n    <ion-label class=\"text\">\r\n      Syarat & Ketentuan\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\" (click)=\"logout()\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">Log out <img class=\"avatars\" src=\"./assets/icon/arrow-circle-rightmdpi.png\">\r\n      </p>\r\n    </ion-text>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-text>\r\n      <p style=\"font-size: 12px;\">Version: {{VersionNumber}}</p>\r\n    </ion-text>\r\n  </ion-item>\r\n  \r\n\r\n</ion-content>\r\n");
>>>>>>> e1124e0ccaa1e710e8bd72857b86b8926d0f402b

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
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("ion-label p {\n  margin-left: 10px;\n  font-weight: bold;\n}\n\n.img-btn {\n  max-width: 80px;\n}\n\nion-item {\n  padding-right: 20px !important;\n}\n\nion-text {\n  padding-top: 20px;\n  display: block;\n}\n\np span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9pbmRleC9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2V0dGluZ3NcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0ROOztBREtFO0VBQ0UsZUFBQTtBQ0ZKOztBREtFO0VBQ0UsOEJBQUE7QUNGSjs7QURLQztFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZIOztBREtDO0VBQ0MsY0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9pbmRleC9pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICBpb24tbGFiZWwgcHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcblxyXG4gIC5pbWctYnRuIHtcclxuICAgIG1heC13aWR0aDogODBweDtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuIGlvbi10ZXh0IHtcclxuICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gfVxyXG5cclxuIHAgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn0iLCJpb24tbGFiZWwgcCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltZy1idG4ge1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGV4dCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxucCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");
=======
/* harmony default export */ __webpack_exports__["default"] = (".text {\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 14px;\n  font-style: normal;\n  color: black;\n  text-align: left;\n  margin-left: 3%;\n}\n\nion-item {\n  padding-right: 20px !important;\n}\n\nion-text {\n  padding-top: 20px;\n  display: block;\n}\n\np span {\n  display: block;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  color: black;\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9pbmRleC9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2V0dGluZ3NcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQ0NqQjs7QURFQTtFQUNFLDhCQUE4QjtBQ0NoQzs7QURFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FDQ2hCOztBREVBO0VBQ0UsY0FBYztBQ0NoQjs7QURFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FDQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9pbmRleC9pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5wIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udDF7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufSIsIi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGV4dCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxucCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiJdfQ== */");
>>>>>>> e1124e0ccaa1e710e8bd72857b86b8926d0f402b

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
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");








let IndexPage = class IndexPage {
    constructor(authService, storage, userApiService, utilsService, appVersion) {
        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.utilsService = utilsService;
        this.appVersion = appVersion;
        this.user = {};
        this.appVersion.getVersionNumber().then(value => {
            this.VersionNumber = value;
        }).catch(err => {
            alert(err);
        });
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
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"] }
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