(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-outlet-outlet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/outlet/outlet.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/outlet/outlet.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"color: black;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: black;\">Lokasi Toko</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"info\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"1\" size-sm=\"1\">\n              <img src=\"./assets/images/info-circle.png\" />\n            </ion-col>\n            <ion-col >\n              Kami telah memiliki lokasi tukar tambah barang elektronik anda\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-list *ngFor=\"let item of stores\">\n    <ion-item>\n      <ion-label>\n        <h2>{{item.name}}</h2>\n        <p>{{item.address}}</p>\n        <h3 (click)=\"navigate(item.address)\" style=\"color: blue;\">Open Map<img src=\"./assets/images/ico_external_link_minor.png\" />\n        </h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/landing/settings/outlet/outlet-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/landing/settings/outlet/outlet-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: OutletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPageRoutingModule", function() { return OutletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _outlet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlet.page */ "./src/app/pages/landing/settings/outlet/outlet.page.ts");




const routes = [
    {
        path: '',
        component: _outlet_page__WEBPACK_IMPORTED_MODULE_3__["OutletPage"]
    }
];
let OutletPageRoutingModule = class OutletPageRoutingModule {
};
OutletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutletPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/outlet/outlet.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing/settings/outlet/outlet.module.ts ***!
  \****************************************************************/
/*! exports provided: OutletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPageModule", function() { return OutletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outlet-routing.module */ "./src/app/pages/landing/settings/outlet/outlet-routing.module.ts");
/* harmony import */ var _outlet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outlet.page */ "./src/app/pages/landing/settings/outlet/outlet.page.ts");







let OutletPageModule = class OutletPageModule {
};
OutletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletPageRoutingModule"]
        ],
        declarations: [_outlet_page__WEBPACK_IMPORTED_MODULE_6__["OutletPage"]]
    })
], OutletPageModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/outlet/outlet.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing/settings/outlet/outlet.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info {\n  margin-top: 30px;\n  height: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9vdXRsZXQvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNldHRpbmdzXFxvdXRsZXRcXG91dGxldC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3Mvb3V0bGV0L291dGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNDTCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3Mvb3V0bGV0L291dGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmluZm8ge1xyXG4gICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgaGVpZ2h0OiAxMiU7XHJcbiB9IiwiLmluZm8ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDEyJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/settings/outlet/outlet.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing/settings/outlet/outlet.page.ts ***!
  \**************************************************************/
/*! exports provided: OutletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPage", function() { return OutletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/__ivy_ngcc__/ngx/index.js");







let OutletPage = class OutletPage {
    constructor(storage, sellingApiService, utilsService, launchNavigator) {
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.utilsService = utilsService;
        this.launchNavigator = launchNavigator;
        this.stores = [];
        this.start = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getStore();
    }
    getStore() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.sellingApiService.getStore(token).subscribe((response) => {
                this.stores = response.data.store;
                this.destinations = this.stores;
                console.log(this.stores);
            }, (err) => {
                this.stores = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    navigate(address) {
        let options = {
            start: this.start
        };
        this.launchNavigator.navigate(address, options)
            .then(success => alert('Launched navigator'), error => alert('Error launching navigator: ' + error));
    }
};
OutletPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_6__["LaunchNavigator"] }
];
OutletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outlet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./outlet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/outlet/outlet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./outlet.page.scss */ "./src/app/pages/landing/settings/outlet/outlet.page.scss")).default]
    })
], OutletPage);



/***/ })

}]);
//# sourceMappingURL=settings-outlet-outlet-module-es2015.js.map