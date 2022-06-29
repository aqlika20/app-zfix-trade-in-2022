(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-my-qr-my-qr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-faq/modal-faq.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-faq/modal-faq.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-item>\r\n    <ion-label class=\"title\">FAQ</ion-label>\r\n    <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon>\r\n  </ion-item>\r\n  <div class=\"desk\">\r\n    <ion-label class=\"t1\">Mengapa harga yang didapat berbeda?</ion-label>\r\n    <p class=\"t2\">Harga akan berubah sesuai kondisi unit yang sebenarnya setelah dilakukan pengecekkan oleh tim kami</p>\r\n    <br>\r\n    <ion-label class=\"t1\">Mengapa kode saya tidak dapat dipakai?</ion-label>\r\n    <p class=\"t2\">QR Code ini hanya bisa digunakan di lokasi toko yang telah dipilih oleh kamu</p>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <h2>QRku<img (click)=\"openMyModal($event)\" src=\"../../../../assets/images/Vector.png\" alt=\"\"></h2>\n  \n  <ion-card *ngFor=\"let item of qrLaptop\">\n    <div *ngFor=\"let vou of vouchers\">\n      <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 2\">\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"8\" style=\"margin-left: 7px;\">Laptop <p class=\"text\">Active</p>\n                <ion-row style=\"margin-top: 20px;\">\n                  <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n                </ion-row>\n                <ion-row>\n                  <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n                </ion-row>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ngx-qrcode \n                [width]=200\n                [margin]=0\n                value = \"{{item.id}}\">\n                </ngx-qrcode>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n      <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"7\" style=\"margin-left: 7px;\">\n              <ion-label text-wrap>\n                <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n                <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n                </h3>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n</ion-card>\n\n  <ion-card *ngFor=\"let item of qrTV\">\n      <div *ngFor=\"let vou of vouchers\">\n        <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 3\">\n          <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"8\" style=\"margin-left: 7px;\">Televisi <p class=\"text\">Active</p>\n                  <ion-row style=\"margin-top: 20px;\">\n                    <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n                  </ion-row>\n                  <ion-row>\n                    <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n                  </ion-row>\n                </ion-col>\n                <ion-col size=\"3\">\n                  <ngx-qrcode \n                  [width]=200\n                  [margin]=0\n                  value = \"{{item.id}}\">\n                  </ngx-qrcode>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n        <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"7\" style=\"margin-left: 7px;\">\n                <ion-label text-wrap>\n                  <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n                  <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n                  </h3>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"3\">\n                <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n\n  </ion-card>\n\n  <ion-card *ngFor=\"let item of qrPS\">\n    <div *ngFor=\"let vou of vouchers\">\n      <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 4\">\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"8\" style=\"margin-left: 7px;\">PlayStation <p class=\"text\">Active</p>\n                <ion-row style=\"margin-top: 20px;\">\n                  <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n                </ion-row>\n                <ion-row>\n                  <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n                </ion-row>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ngx-qrcode \n                [width]=200\n                [margin]=0\n                value = \"{{item.id}}\">\n                </ngx-qrcode>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n      <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"7\" style=\"margin-left: 7px;\">\n              <ion-label text-wrap>\n                <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n                <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n                </h3>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n</ion-card>\n\n<ion-card *ngFor=\"let item of qrKulkas\">\n  <div *ngFor=\"let vou of vouchers\">\n    <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 5\">\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\" style=\"margin-left: 7px;\">Kulkas <p class=\"text\">Active</p>\n              <ion-row style=\"margin-top: 20px;\">\n                <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n              </ion-row>\n              <ion-row>\n                <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ngx-qrcode \n              [width]=200\n              [margin]=0\n              value = \"{{item.id}}\">\n              </ngx-qrcode>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n    <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"7\" style=\"margin-left: 7px;\">\n            <ion-label text-wrap>\n              <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n              <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n              </h3>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-card>\n\n<ion-card *ngFor=\"let item of qrMesinCuci\">\n  <div *ngFor=\"let vou of vouchers\">\n    <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 6\">\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\" style=\"margin-left: 7px;\">Mesin Cuci <p class=\"text\">Active</p>\n              <ion-row style=\"margin-top: 20px;\">\n                <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n              </ion-row>\n              <ion-row>\n                <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ngx-qrcode \n              [width]=200\n              [margin]=0\n              value = \"{{item.id}}\">\n              </ngx-qrcode>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n    <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"7\" style=\"margin-left: 7px;\">\n            <ion-label text-wrap>\n              <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n              <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n              </h3>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-card>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-faq/modal-faq.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-faq/modal-faq.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.title {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1mYXEvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG1vZGFsXFxtb2RhbC1mYXFcXG1vZGFsLWZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1mYXEvbW9kYWwtZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtZmFxL21vZGFsLWZhcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxufVxyXG5cclxuLmRlc2t7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50MSB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnQyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59IiwiaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xufVxuXG4uZGVzayB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnQyIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-faq/modal-faq.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-faq/modal-faq.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModalFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFaqComponent", function() { return ModalFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ModalFaqComponent = class ModalFaqComponent {
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
ModalFaqComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-faq',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-faq/modal-faq.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-faq.component.scss */ "./src/app/pages/landing/modal/modal-faq/modal-faq.component.scss")).default]
    })
], ModalFaqComponent);



/***/ }),

/***/ "./src/app/pages/landing/my-qr/my-qr-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/landing/my-qr/my-qr-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MyQrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQrPageRoutingModule", function() { return MyQrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-qr.page */ "./src/app/pages/landing/my-qr/my-qr.page.ts");




const routes = [
    {
        path: '',
        component: _my_qr_page__WEBPACK_IMPORTED_MODULE_3__["MyQrPage"]
    }
];
let MyQrPageRoutingModule = class MyQrPageRoutingModule {
};
MyQrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyQrPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/my-qr/my-qr.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/landing/my-qr/my-qr.module.ts ***!
  \*****************************************************/
/*! exports provided: MyQrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQrPageModule", function() { return MyQrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-qr-routing.module */ "./src/app/pages/landing/my-qr/my-qr-routing.module.ts");
/* harmony import */ var _my_qr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-qr.page */ "./src/app/pages/landing/my-qr/my-qr.page.ts");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/techiediaries-ngx-qrcode.js");








let MyQrPageModule = class MyQrPageModule {
};
MyQrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyQrPageRoutingModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"]
        ],
        // schemas: [
        //   CUSTOM_ELEMENTS_SCHEMA
        // ],
        declarations: [_my_qr_page__WEBPACK_IMPORTED_MODULE_6__["MyQrPage"]]
    })
], MyQrPageModule);



/***/ }),

/***/ "./src/app/pages/landing/my-qr/my-qr.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/landing/my-qr/my-qr.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  border-radius: 20px;\n}\n\nh2 {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nimg {\n  margin-left: 75%;\n}\n\n.qr {\n  width: 84px;\n  height: 84px;\n}\n\np {\n  margin-left: 10px;\n}\n\n.text {\n  background-color: green;\n  color: white;\n  background-size: auto;\n  border-radius: 50px;\n  padding: 5px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: inline;\n}\n\n.price {\n  color: #395398;\n  margin-bottom: 0;\n  font-size: 22px;\n}\n\n.device-detail-popover {\n  top: 10% !important;\n  bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbXktcXJcXG15LXFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9teS1xci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUM7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0w7O0FERUM7RUFDRyxtQkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL215LXFyL215LXFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuaW1nIHsgXHJcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xyXG59XHJcblxyXG4ucXIge1xyXG4gICAgd2lkdGg6IDg0cHg7XHJcbiAgICBoZWlnaHQ6IDg0cHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbiAucHJpY2Uge1xyXG4gICAgIGNvbG9yOiAjMzk1Mzk4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gfVxyXG4gXHJcbiAuZGV2aWNlLWRldGFpbC1wb3BvdmVye1xyXG4gICAgdG9wOiAxMCUhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAwcHghaW1wb3J0YW50O1xyXG59IiwiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5oMiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbmltZyB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5xciB7XG4gIHdpZHRoOiA4NHB4O1xuICBoZWlnaHQ6IDg0cHg7XG59XG5cbnAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5wcmljZSB7XG4gIGNvbG9yOiAjMzk1Mzk4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5kZXZpY2UtZGV0YWlsLXBvcG92ZXIge1xuICB0b3A6IDEwJSAhaW1wb3J0YW50O1xuICBib3R0b206IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/my-qr/my-qr.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/my-qr/my-qr.page.ts ***!
  \***************************************************/
/*! exports provided: MyQrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQrPage", function() { return MyQrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_landing_modal_modal_faq_modal_faq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/landing/modal/modal-faq/modal-faq.component */ "./src/app/pages/landing/modal/modal-faq/modal-faq.component.ts");
/* harmony import */ var src_app_pages_landing_modal_modal_qr_modal_qr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/landing/modal/modal-qr/modal-qr.component */ "./src/app/pages/landing/modal/modal-qr/modal-qr.component.ts");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/__ivy_ngcc__/ngx/index.js");








// import { ModalHarapDiperhatikanComponent } from 'src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component';



let MyQrPage = class MyQrPage {
    constructor(storage, sellingApiService, utilsService, popoverController, modalController, launchNavigator) {
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.utilsService = utilsService;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.launchNavigator = launchNavigator;
        this.segment = 0;
        this.sliderOptions = {
            initialSlide: 0,
            slidePerView: 1,
            speed: 400
        };
        this.qrLaptop = [];
        this.qrPS = [];
        this.qrTV = [];
        this.qrKulkas = [];
        this.qrMesinCuci = [];
        this.trLaptop = [];
        this.trPS = [];
        this.trTV = [];
        this.trKulkas = [];
        this.trMesinCuci = [];
        this.stores = [];
        this.vouchers = [];
        this.encoded = '1';
        this.start = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        setInterval(() => {
            this.getQRCODE();
        }, 2000);
        this.getTransaction();
    }
    getQRCODE() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.sellingApiService.getQR(token).subscribe((response) => {
                this.qrLaptop = response.data.arr;
                this.qrTV = response.data.arr2;
                this.qrPS = response.data.arr3;
                this.qrKulkas = response.data.arr5;
                this.qrMesinCuci = response.data.arr6;
                this.stores = response.data.store;
                this.vouchers = response.data.voucher;
                console.log(response.data.arr2);
            }, (err) => {
                // this.utilsService.showToast("There is a problem.");
            });
        });
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
    openMyModal(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const myModal = yield this.modalController.create({
                // component: ModalHarapDiperhatikanComponent,
                // cssClass: 'harap-diperhatikan-modal-css',
                component: src_app_pages_landing_modal_modal_faq_modal_faq_component__WEBPACK_IMPORTED_MODULE_7__["ModalFaqComponent"],
                cssClass: 'my-custom-modal-css',
                backdropDismiss: false,
                id: 'my-modal-id'
            });
            return yield myModal.present();
        });
    }
    openMyModalQR(voucher_key, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const myModal = yield this.modalController.create({
                component: src_app_pages_landing_modal_modal_qr_modal_qr_component__WEBPACK_IMPORTED_MODULE_8__["ModalQrComponent"],
                componentProps: {
                    voucher_key: voucher_key,
                    id: id
                },
                cssClass: 'my-custom-modal-qr-css',
                backdropDismiss: false,
                id: 'my-modal-qr-id'
            });
            return yield myModal.present();
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
MyQrPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_9__["LaunchNavigator"] }
];
MyQrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-qr',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-qr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-qr.page.scss */ "./src/app/pages/landing/my-qr/my-qr.page.scss")).default]
    })
], MyQrPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-my-qr-my-qr-module-es2015.js.map