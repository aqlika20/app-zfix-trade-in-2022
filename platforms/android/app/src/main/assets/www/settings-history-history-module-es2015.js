(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-history-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: black;\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: black;\">Daftar Transaksi</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div *ngFor=\"let item of trLaptop\">\r\n    <ion-card *ngIf = \"item.jenis_layanan == 2\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col style=\"padding-left: 5%;\">\r\n            <div class=\"t1\">\r\n              Barang\r\n            </div>     \r\n            <div class=\"t2\">\r\n              TV {{item.brand}}\r\n            </div>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 5%;\">\r\n            <p class=\"status\">status</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col style=\"padding-left: 5%;\">\r\n            <div class=\"t1\">\r\n              Tipe\r\n            </div>\r\n            <div class=\"t2\">\r\n              {{item.jenis_tv}}, {{item.inch}}\r\n            </div>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 5%;\">\r\n            <div class=\"t1\">\r\n              Harga\r\n            </div>\r\n            <div class=\"t3\">\r\n              Rp.{{item.price | number}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngFor=\"let item of trTV\">\r\n    <ion-card *ngIf = \"item.jenis_layanan == 3\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col style=\"padding-left: 5%;\">\r\n            <div class=\"t1\">\r\n              Barang\r\n            </div>     \r\n            <div class=\"t2\">\r\n              Laptop {{item.brand}}\r\n            </div>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 5%;\">\r\n            <p class=\"status\">status</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col style=\"padding-left: 5%;\">\r\n            <div class=\"t1\">\r\n              Tipe\r\n            </div>\r\n            <div class=\"t2\">\r\n              Ram : {{item.memory}} GB\r\n            </div>\r\n            <div class=\"t2\">\r\n              Storage : {{item.storages}} GB\r\n            </div>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 5%;\">\r\n            <div class=\"t1\">\r\n              Harga\r\n            </div>\r\n            <div class=\"t3\">\r\n              Rp.{{item.price | number}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngFor=\"let item of trPS\">\r\n    <ion-card *ngIf = \"item.jenis_layanan == 4\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col style=\"padding-left: 5%;\">\r\n            <div class=\"t1\">\r\n              Barang\r\n            </div>     \r\n            <div class=\"t2\">\r\n              {{item.jenis_ps}}\r\n            </div>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 5%;\">\r\n            <p class=\"status\">status</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col style=\"padding-left: 5%;\">\r\n            <div class=\"t1\">\r\n              Tipe\r\n            </div>\r\n            <div class=\"t2\">\r\n              {{item.type}}, {{item.storages}} GB\r\n            </div>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 5%;\">\r\n            <div class=\"t1\">\r\n              Harga\r\n            </div>\r\n            <div class=\"t3\">\r\n              Rp.{{item.price | number}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngFor=\"let item of trKulkas\">\r\n    <ion-card *ngIf = \"item.jenis_layanan == 5\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col style=\"padding-left: 5%;\">\r\n            <div class=\"t1\">\r\n              Barang\r\n            </div>     \r\n            <div class=\"t2\">\r\n              Kulkas {{item.brand}}\r\n            </div>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 5%;\">\r\n            <p class=\"status\">status</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col style=\"padding-left: 5%;\">\r\n            <div class=\"t1\">\r\n              Tipe\r\n            </div>\r\n            <div class=\"t2\">\r\n              {{item.model}}, {{item.type}}\r\n            </div>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 5%;\">\r\n            <div class=\"t1\">\r\n              Harga\r\n            </div>\r\n            <div class=\"t3\">\r\n              Rp.{{item.price | number}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n  \r\n  <div *ngFor=\"let item of trMesinCuci\">\r\n    <ion-card *ngIf = \"item.jenis_layanan == 6\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col style=\"padding-left: 5%;\">\r\n            <div class=\"t1\">\r\n              Barang\r\n            </div>     \r\n            <div class=\"t2\">\r\n              Mesin Cuci {{item.brand}}\r\n            </div>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 5%;\">\r\n            <p class=\"status\">status</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col style=\"padding-left: 5%;\">\r\n            <div class=\"t1\">\r\n              Tipe\r\n            </div>\r\n            <div class=\"t2\">\r\n              {{item.type}}\r\n            </div>\r\n          </ion-col>\r\n          <ion-col style=\"padding-right: 5%;\">\r\n            <div class=\"t1\">\r\n              Harga\r\n            </div>\r\n            <div class=\"t3\">\r\n              Rp.{{item.price | number}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n  \r\n    ");

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
/* harmony default export */ __webpack_exports__["default"] = (".status {\n  background-color: green;\n  color: white;\n  background-size: auto;\n  border-radius: 50px;\n  padding-top: 3%;\n  padding-left: 10%;\n  padding-right: 10%;\n  margin-left: 45%;\n  height: 30px;\n  width: 80px;\n  text-align: center;\n}\n\n.col {\n  margin-top: 5%;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  text-align: left;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t3 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9oaXN0b3J5L0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xcaGlzdG9yeVxcaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNHLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmdzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLnN0YXR1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnQxe1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50MntcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udDN7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSIsIi5zdGF0dXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MiB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnQzIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */");

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