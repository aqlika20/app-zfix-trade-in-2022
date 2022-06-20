(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~selling-kulkas-kulkas-brand-kulkas-brand-module~selling-laptop-laptop-brand-laptop-brand-mod~2618a642"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-price/modal-price.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-price/modal-price.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-item>\n    <ion-label class=\"title\">Estimated Price</ion-label>\n    <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon>\n  </ion-item>\n  <div class=\"desk\">\n    <ion-card class=\"cardgrid\">\n      <div class=\"img_kanan\">\n        <img src=\"../../../../assets/images/baru/coin-bgxhdpi.png\" alt=\"\">\n      </div>\n      <div style=\"margin-top: 10px; margin-left: 10px;\">\n        <ion-label class=\"t1\">IDR 4.805.000</ion-label>\n        <p class=\"t2\" style=\"margin-right: 10px;\">Harga akan berubah sesuai kondisi unit yang sebenarnya setelah dilakukan pengecekkan oleh tim kami</p>\n      </div>\n    </ion-card>\n    <div class=\"btn\">\n      <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"submit()\">Setuju dan Submit</ion-button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-price/modal-price.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-price/modal-price.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desk {\n  padding: 3%;\n}\n\n.img_kanan {\n  position: absolute;\n  top: 0;\n  left: 60%;\n  height: 100%;\n}\n\n.title {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 28px;\n  color: black;\n}\n\n.t2 {\n  margin-top: 3%;\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  color: black;\n  text-align: justify;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cardgrid {\n  background: #ffed8b;\n  padding: 4%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1wcmljZS9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbW9kYWxcXG1vZGFsLXByaWNlXFxtb2RhbC1wcmljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1wcmljZS9tb2RhbC1wcmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0FDQ3ZCOztBREVBO0VBQ0ksV0FBVztBQ0NmOztBREVBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtBQ0NoQjs7QURFQTtFQUNJLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FDQ3BCOztBREVBO0VBQ0ksOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUNDaEI7O0FERUE7RUFDSSxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7QUNDdkI7O0FERUE7RUFDSSxrQkFBa0I7QUNDdEI7O0FERUE7RUFDSSxtQkFBa0M7RUFDbEMsV0FBVztFQUNYLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLGdDQUFnQztBQ0NwQzs7QURFQTtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FDQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1wcmljZS9tb2RhbC1wcmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxufVxyXG5cclxuLmRlc2t7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxufVxyXG5cclxuLmltZ19rYW5hbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50MSB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udDIge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZGdyaWR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjM3LCAxMzksIDEpO1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9IiwiaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xufVxuXG4uZGVzayB7XG4gIHBhZGRpbmc6IDMlO1xufVxuXG4uaW1nX2thbmFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnQyIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZGdyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmZlZDhiO1xuICBwYWRkaW5nOiA0JTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-price/modal-price.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-price/modal-price.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModalPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPriceComponent", function() { return ModalPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ModalPriceComponent = class ModalPriceComponent {
    constructor(ModalController) {
        this.ModalController = ModalController;
    }
    ngOnInit() { }
    dismissModal() {
        this.ModalController.dismiss({
            'dismissed': true
        });
    }
};
ModalPriceComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalPriceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-price',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-price.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-price/modal-price.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-price.component.scss */ "./src/app/pages/landing/modal/modal-price/modal-price.component.scss")).default]
    })
], ModalPriceComponent);



/***/ }),

/***/ "./src/app/services/api/membership-api.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/api/membership-api.service.ts ***!
  \********************************************************/
/*! exports provided: MembershipApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipApiService", function() { return MembershipApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/api */ "./src/app/config/api.js");




let MembershipApiService = class MembershipApiService {
    constructor(http) {
        this.http = http;
    }
    myClaim(token) {
        throw new Error("Method not implemented.");
    }
    check(token, data) {
        return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "membership/check", data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token),
        });
    }
    activation(token, data) {
        return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "membership/activation", data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token),
        });
    }
    requestForClaim(token, data) {
        return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "membership/request-for-claim", data, {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token),
        });
    }
    myPlan(token) {
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "membership/my-plan", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token),
        });
    }
    Claim(token) {
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "membership/my-claim", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token),
        });
    }
    current(token) {
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "membership/current", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token),
        });
    }
    getNotif(token) {
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "user/notification", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token),
        });
    }
    getStore(token) {
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "membership/store", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token),
        });
    }
};
MembershipApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MembershipApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MembershipApiService);



/***/ }),

/***/ "./src/app/services/helper.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/helper.service.ts ***!
  \********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let HelperService = class HelperService {
    constructor(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    alertMessage(type, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: type,
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
HelperService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
HelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HelperService);



/***/ }),

/***/ "./src/app/services/membership.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/membership.service.ts ***!
  \************************************************/
/*! exports provided: MembershipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipService", function() { return MembershipService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/api */ "./src/app/config/api.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





let MembershipService = class MembershipService {
    constructor(storage, http) {
        this.storage = storage;
        this.http = http;
    }
    SetSelling(data) {
        this.storage.set(_config_api__WEBPACK_IMPORTED_MODULE_3__["ActivationKey"], data);
    }
    removeSelling() {
        this.storage.remove(_config_api__WEBPACK_IMPORTED_MODULE_3__["ActivationKey"]);
    }
};
MembershipService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
MembershipService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MembershipService);



/***/ })

}]);
//# sourceMappingURL=default~selling-kulkas-kulkas-brand-kulkas-brand-module~selling-laptop-laptop-brand-laptop-brand-mod~2618a642-es2015.js.map