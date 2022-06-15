(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-history-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: black;\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: black;\">Daftar Transaksi</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n<div *ngFor=\"let item of trLaptop\">\r\n  <ion-card *ngIf = \"item.jenis_layanan == 2\">\r\n    <ion-card-header>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-subtitle>Barang</ion-card-subtitle>\r\n            <ion-card-title>Laptop {{item.brand}}</ion-card-title>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 50px;\">\r\n            <p class=\"status\">status</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-subtitle>Tipe</ion-card-subtitle>\r\n            <ion-card-title>Ram : {{item.memory}} GB</ion-card-title>\r\n            <ion-card-title>Storage : {{item.storages}} GB</ion-card-title>\r\n\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card-subtitle>price</ion-card-subtitle>\r\n            <ion-card-title>Rp.{{item.price | number}}</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n\r\n<div *ngFor=\"let item of trTV\">\r\n  <ion-card *ngIf = \"item.jenis_layanan == 3\">\r\n    <ion-card-header>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-subtitle>Barang</ion-card-subtitle>\r\n            <ion-card-title>TV {{item.brand}}</ion-card-title>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 50px;\">\r\n            <p class=\"status\">status</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-subtitle>Tipe</ion-card-subtitle>\r\n            <ion-card-title>{{item.jenis_tv}}, {{item.inch}}</ion-card-title>\r\n\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card-subtitle>price</ion-card-subtitle>\r\n            <ion-card-title>Rp.{{item.price | number}}</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n\r\n<div *ngFor=\"let item of trPS\">\r\n  <ion-card *ngIf = \"item.jenis_layanan == 4\">\r\n    <ion-card-header>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-subtitle>Barang</ion-card-subtitle>\r\n            <ion-card-title>{{item.jenis_ps}}</ion-card-title>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 50px;\">\r\n            <p class=\"status\">status</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-subtitle>Tipe</ion-card-subtitle>\r\n            <ion-card-title>{{item.type}}, {{item.storages}} GB</ion-card-title>\r\n\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card-subtitle>price</ion-card-subtitle>\r\n            <ion-card-title>Rp.{{item.price | number}}</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n\r\n<div *ngFor=\"let item of trKulkas\">\r\n  <ion-card *ngIf = \"item.jenis_layanan == 5\">\r\n    <ion-card-header>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-subtitle>Barang</ion-card-subtitle>\r\n            <ion-card-title>Kulkas {{item.brand}}</ion-card-title>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 50px;\">\r\n            <p class=\"status\">status</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-subtitle>Tipe</ion-card-subtitle>\r\n            <ion-card-title>{{item.model}}, {{item.type}}</ion-card-title>\r\n\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card-subtitle>price</ion-card-subtitle>\r\n            <ion-card-title>Rp.{{item.price | number}}</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n\r\n<div *ngFor=\"let item of trMesinCuci\">\r\n  <ion-card *ngIf = \"item.jenis_layanan == 6\">\r\n    <ion-card-header>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-subtitle>Barang</ion-card-subtitle>\r\n            <ion-card-title>TV {{item.brand}}</ion-card-title>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 50px;\"> \r\n            <p class=\"status\">status</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-subtitle>Tipe</ion-card-subtitle>\r\n            <ion-card-title>{{item.type}}</ion-card-title>\r\n\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card-subtitle>price</ion-card-subtitle>\r\n            <ion-card-title>Rp.{{item.price | number}}</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n\r\n</ion-content>\r\n\r\n  \r\n    ");

/***/ }),

/***/ "./src/app/pages/landing/settings/history/history-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/settings/history/history-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/landing/settings/history/history.page.ts");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/history/history.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/settings/history/history.module.ts ***!
  \******************************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/pages/landing/settings/history/history-routing.module.ts");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/landing/settings/history/history.page.ts");







let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/history/history.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/settings/history/history.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status {\n  background-color: green;\n  color: white;\n  background-size: auto;\n  border-radius: 50px;\n  margin-left: 50px;\n  padding-top: 5px;\n  padding-left: 20px;\n  height: 30px;\n  width: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9oaXN0b3J5L0Q6XFx6Zml4LXRyYWRlLWluLTIwMjIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xcaGlzdG9yeVxcaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQ0NmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5zdGF0dXMge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn0iLCIuc3RhdHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/landing/settings/history/history.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing/settings/history/history.page.ts ***!
  \****************************************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");






let HistoryPage = class HistoryPage {
    constructor(storage, sellingApiService, utilsService) {
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.utilsService = utilsService;
        this.segment = 0;
        this.sliderOptions = {
            initialSlide: 0,
            slidePerView: 1,
            speed: 400
        };
        this.trLaptop = [];
        this.trPS = [];
        this.trTV = [];
        this.trKulkas = [];
        this.trMesinCuci = [];
        this.stores = [];
        this.vouchers = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getTransaction();
    }
    getTransaction() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.sellingApiService.getDetailTransaction(token).subscribe((response) => {
                this.trLaptop = response.data.data_arr;
                this.trTV = response.data.data_arr2;
                this.trPS = response.data.data_arr3;
                this.trKulkas = response.data.data_arr5;
                this.trMesinCuci = response.data.data_arr6;
            }, (err) => {
                // this.utilsService.showToast("There is a problem.");
            });
        });
    }
    segmentChanged(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.selectedSlide.slideTo(this.segment);
        });
    }
    slideShanged(slides) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedSlide = slides;
            slides.getActiveIndex().then(selectedIndex => {
                this.segment = selectedIndex;
            });
        });
    }
};
HistoryPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] }
];
HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/landing/settings/history/history.page.scss")).default]
    })
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=settings-history-history-module-es2015.js.map