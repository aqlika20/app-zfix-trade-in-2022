function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-my-qr-my-qr-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-faq/modal-faq.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-faq/modal-faq.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingModalModalFaqModalFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-item>\r\n    <ion-label class=\"title\">FAQ</ion-label>\r\n    <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon>\r\n  </ion-item>\r\n  <div class=\"desk\">\r\n    <ion-label class=\"t1\">Mengapa harga yang didapat berbeda?</ion-label>\r\n    <p class=\"t2\">Harga akan berubah sesuai kondisi unit yang sebenarnya setelah dilakukan pengecekkan oleh tim kami</p>\r\n    <br>\r\n    <ion-label class=\"t1\">Mengapa kode saya tidak dapat dipakai?</ion-label>\r\n    <p class=\"t2\">QR Code ini hanya bisa digunakan di lokasi toko yang telah dipilih oleh kamu</p>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingMyQrMyQrPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <h2>QRku<img (click)=\"openMyModal($event)\" class=\"img\" src=\"../../../../assets/images/Vector.png\" alt=\"\"></h2>\r\n  \r\n  <div class=\"desk\" *ngIf = \"qrKulkas == '' && qrLaptop == '' && qrMesinCuci == '' && qrPS == '' && qrTV == ''\"> \r\n    <div class=\"center\">\r\n      <div class=\"crd\">\r\n        <img src=\"../../../../assets/icon/zfx.png\" alt=\"\">\r\n      </div>\r\n      <br>\r\n      <p class=\"t2\">QR Code kamu akan muncul setelah proses tukar tambah kamu berhasil disetujui</p>\r\n    </div>\r\n  </div>\r\n  \r\n  <ion-card *ngFor=\"let item of qrLaptop\">\r\n    <div *ngFor=\"let vou of vouchers\">\r\n      <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 2 && item.voucher_id == vou.id\">\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"8\" style=\"margin-left: 7px;\">Laptop <p class=\"text\">Active</p>\r\n                <ion-row style=\"margin-top: 20px;\">\r\n                  <h3 class=\"price\">Rp.{{item.price | number}}</h3>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <ngx-qrcode \r\n                [width]=200\r\n                [margin]=0\r\n                value = \"{{item.id}}\">\r\n                </ngx-qrcode>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n\r\n    <div lines=\"none\" *ngFor=\"let loc of stores\">\r\n      <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"7\" style=\"margin-left: 7px;\">\r\n              <ion-label text-wrap>\r\n                <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\r\n                <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\r\n                </h3>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <img style=\"height: 48px; width: 48px; float:right;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </div>\r\n\r\n</ion-card>\r\n\r\n  <ion-card *ngFor=\"let item of qrTV\">\r\n      <div *ngFor=\"let vou of vouchers\">\r\n        <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 3 && item.voucher_id == vou.id\">\r\n          <ion-item>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"8\" style=\"margin-left: 7px;\">Televisi <p class=\"text\">Active</p>\r\n                  <ion-row style=\"margin-top: 20px;\">\r\n                    <h3 class=\"price\">Rp.{{item.price | number}}</h3>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\r\n                  </ion-row>\r\n                </ion-col>\r\n                <ion-col size=\"3\">\r\n                  <ngx-qrcode \r\n                  [width]=200\r\n                  [margin]=0\r\n                  value = \"{{item.id}}\">\r\n                  </ngx-qrcode>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n\r\n      <div lines=\"none\" *ngFor=\"let loc of stores\">\r\n        <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"7\" style=\"margin-left: 7px;\">\r\n                <ion-label text-wrap>\r\n                  <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\r\n                  <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\r\n                  </h3>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <img style=\"height: 48px; width: 48px; float:right;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </div>\r\n\r\n  </ion-card>\r\n\r\n  <ion-card *ngFor=\"let item of qrPS\">\r\n    <div *ngFor=\"let vou of vouchers\">\r\n      <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 4 && item.voucher_id == vou.id\">\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"8\" style=\"margin-left: 7px;\">PlayStation <p class=\"text\">Active</p>\r\n                <ion-row style=\"margin-top: 20px;\">\r\n                  <h3 class=\"price\">Rp.{{item.price | number}}</h3>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <ngx-qrcode \r\n                [width]=200\r\n                [margin]=0\r\n                value = \"{{item.id}}\">\r\n                </ngx-qrcode>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n\r\n    <div lines=\"none\" *ngFor=\"let loc of stores\">\r\n      <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"7\" style=\"margin-left: 7px;\">\r\n              <ion-label text-wrap>\r\n                <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\r\n                <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\r\n                </h3>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <img style=\"height: 48px; width: 48px; float:right;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </div>\r\n\r\n</ion-card>\r\n\r\n<ion-card *ngFor=\"let item of qrKulkas\">\r\n  <div *ngFor=\"let vou of vouchers\">\r\n    <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 5 && item.voucher_id == vou.id\">\r\n      <ion-item>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"8\" style=\"margin-left: 7px;\">Kulkas <p class=\"text\">Active</p>\r\n              <ion-row style=\"margin-top: 20px;\">\r\n                <h3 class=\"price\">Rp.{{item.price | number}}</h3>\r\n              </ion-row>\r\n              <ion-row>\r\n                <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ngx-qrcode \r\n              [width]=200\r\n              [margin]=0\r\n              value = \"{{item.id}}\">\r\n              </ngx-qrcode>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <div lines=\"none\" *ngFor=\"let loc of stores\">\r\n    <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"7\" style=\"margin-left: 7px;\">\r\n            <ion-label text-wrap>\r\n              <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\r\n              <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\r\n              </h3>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <img style=\"height: 48px; width: 48px; float:right;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </div>\r\n\r\n</ion-card>\r\n\r\n<ion-card *ngFor=\"let item of qrMesinCuci\">\r\n  <div *ngFor=\"let vou of vouchers\">\r\n    <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 6 && item.voucher_id == vou.id\">\r\n      <ion-item>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"8\" style=\"margin-left: 7px;\">Mesin Cuci <p class=\"text\">Active</p>\r\n              <ion-row style=\"margin-top: 20px;\">\r\n                <h3 class=\"price\">Rp.{{item.price | number}}</h3>\r\n              </ion-row>\r\n              <ion-row>\r\n                <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ngx-qrcode \r\n              [width]=200\r\n              [margin]=0\r\n              value = \"{{item.id}}\">\r\n              </ngx-qrcode>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <div lines=\"none\" *ngFor=\"let loc of stores\">\r\n    <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"7\" style=\"margin-left: 7px;\">\r\n            <ion-label text-wrap>\r\n              <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\r\n              <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\r\n              </h3>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <img style=\"height: 48px; width: 48px; float:right;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </div>\r\n\r\n</ion-card>\r\n  \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-faq/modal-faq.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-faq/modal-faq.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingModalModalFaqModalFaqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.title {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1mYXEvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG1vZGFsXFxtb2RhbC1mYXFcXG1vZGFsLWZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1mYXEvbW9kYWwtZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtZmFxL21vZGFsLWZhcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxufVxyXG5cclxuLmRlc2t7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50MSB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnQyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59IiwiaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xufVxuXG4uZGVzayB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnQyIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-faq/modal-faq.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-faq/modal-faq.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ModalFaqComponent */

  /***/
  function srcAppPagesLandingModalModalFaqModalFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalFaqComponent", function () {
      return ModalFaqComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ModalFaqComponent = /*#__PURE__*/function () {
      function ModalFaqComponent(ModalController) {
        _classCallCheck(this, ModalFaqComponent);

        this.ModalController = ModalController;
      }

      _createClass(ModalFaqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.ModalController.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ModalFaqComponent;
    }();

    ModalFaqComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ModalFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-faq',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-faq/modal-faq.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-faq.component.scss */
      "./src/app/pages/landing/modal/modal-faq/modal-faq.component.scss"))["default"]]
    })], ModalFaqComponent);
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: MyQrPageRoutingModule */

  /***/
  function srcAppPagesLandingMyQrMyQrRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyQrPageRoutingModule", function () {
      return MyQrPageRoutingModule;
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


    var _my_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-qr.page */
    "./src/app/pages/landing/my-qr/my-qr.page.ts");

    var routes = [{
      path: '',
      component: _my_qr_page__WEBPACK_IMPORTED_MODULE_3__["MyQrPage"]
    }];

    var MyQrPageRoutingModule = function MyQrPageRoutingModule() {
      _classCallCheck(this, MyQrPageRoutingModule);
    };

    MyQrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyQrPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr.module.ts ***!
    \*****************************************************/

  /*! exports provided: MyQrPageModule */

  /***/
  function srcAppPagesLandingMyQrMyQrModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyQrPageModule", function () {
      return MyQrPageModule;
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


    var _my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-qr-routing.module */
    "./src/app/pages/landing/my-qr/my-qr-routing.module.ts");
    /* harmony import */


    var _my_qr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-qr.page */
    "./src/app/pages/landing/my-qr/my-qr.page.ts");
    /* harmony import */


    var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @techiediaries/ngx-qrcode */
    "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/techiediaries-ngx-qrcode.js");

    var MyQrPageModule = function MyQrPageModule() {
      _classCallCheck(this, MyQrPageModule);
    };

    MyQrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyQrPageRoutingModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"]],
      // schemas: [
      //   CUSTOM_ELEMENTS_SCHEMA
      // ],
      declarations: [_my_qr_page__WEBPACK_IMPORTED_MODULE_6__["MyQrPage"]]
    })], MyQrPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingMyQrMyQrPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  border-radius: 20px;\n}\n\nh2 {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.img {\n  margin-left: 75%;\n}\n\n.qr {\n  width: 84px;\n  height: 84px;\n}\n\np {\n  margin-left: 10px;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.center {\n  text-align: center;\n}\n\n.crd {\n  height: 270px;\n  margin: 30px;\n  padding-top: 28%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  box-shadow: none !important;\n  border: 2px dashed #EBEBEB;\n}\n\n.alart {\n  width: 35px;\n  height: 35px;\n  padding: 3%;\n  background-color: red;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-size: 15px;\n  color: #747474;\n}\n\n.img2 {\n  height: 70px;\n  width: 70px;\n}\n\n.text {\n  background-color: green;\n  color: white;\n  background-size: auto;\n  border-radius: 50px;\n  padding: 5px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: inline;\n}\n\n.price {\n  color: #395398;\n  margin-bottom: 0;\n  font-size: 22px;\n}\n\n.device-detail-popover {\n  top: 10% !important;\n  bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbXktcXJcXG15LXFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9teS1xci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUM7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0w7O0FERUM7RUFDRyxtQkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL215LXFyL215LXFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmltZyB7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcclxufVxyXG5cclxuLnFyIHtcclxuICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kZXNre1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jcmR7XHJcbiAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI4JTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjRUJFQkVCO1xyXG59XHJcblxyXG4uYWxhcnR7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4udDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMTE2LCAxMTYsIDExNiwgMSk7XHJcbn1cclxuXHJcbi5pbWcye1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4gLnByaWNlIHtcclxuICAgICBjb2xvcjogIzM5NTM5ODtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMjJweDtcclxuIH1cclxuIFxyXG4gLmRldmljZS1kZXRhaWwtcG9wb3ZlcntcclxuICAgIHRvcDogMTAlIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogMHB4IWltcG9ydGFudDtcclxufSIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuaDIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLnFyIHtcbiAgd2lkdGg6IDg0cHg7XG4gIGhlaWdodDogODRweDtcbn1cblxucCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGVzayB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3JkIHtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgbWFyZ2luOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjglO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNFQkVCRUI7XG59XG5cbi5hbGFydCB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50MiB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzc0NzQ3NDtcbn1cblxuLmltZzIge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4udGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnByaWNlIHtcbiAgY29sb3I6ICMzOTUzOTg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmRldmljZS1kZXRhaWwtcG9wb3ZlciB7XG4gIHRvcDogMTAlICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr.page.ts ***!
    \***************************************************/

  /*! exports provided: MyQrPage */

  /***/
  function srcAppPagesLandingMyQrMyQrPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyQrPage", function () {
      return MyQrPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_pages_landing_modal_modal_faq_modal_faq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/pages/landing/modal/modal-faq/modal-faq.component */
    "./src/app/pages/landing/modal/modal-faq/modal-faq.component.ts");
    /* harmony import */


    var src_app_pages_landing_modal_modal_qr_modal_qr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/pages/landing/modal/modal-qr/modal-qr.component */
    "./src/app/pages/landing/modal/modal-qr/modal-qr.component.ts");
    /* harmony import */


    var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/launch-navigator/ngx */
    "./node_modules/@ionic-native/launch-navigator/__ivy_ngcc__/ngx/index.js"); // import { ModalHarapDiperhatikanComponent } from 'src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component';


    var MyQrPage = /*#__PURE__*/function () {
      function MyQrPage(storage, sellingApiService, utilsService, popoverController, modalController, launchNavigator) {
        _classCallCheck(this, MyQrPage);

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

      _createClass(MyQrPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          // setInterval(() => { 
          this.getQRCODE(); // }, 2000);

          this.getTransaction();
        }
      }, {
        key: "getQRCODE",
        value: function getQRCODE() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this.sellingApiService.getQR(token).subscribe(function (response) {
              _this.qrLaptop = response.data.arr;
              _this.qrTV = response.data.arr2;
              _this.qrPS = response.data.arr3;
              _this.qrKulkas = response.data.arr5;
              _this.qrMesinCuci = response.data.arr6;
              _this.stores = response.data.store;
              _this.vouchers = response.data.voucher;
              console.log(response.data.arr2);
            }, function (err) {// this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "getTransaction",
        value: function getTransaction() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this2.sellingApiService.getDetailTransaction(token).subscribe(function (response) {
              _this2.trLaptop = response.data.data_arr;
              _this2.trTV = response.data.data_arr2;
              _this2.trPS = response.data.data_arr3;
              _this2.trKulkas = response.data.data_arr5;
              _this2.trMesinCuci = response.data.data_arr6;
            }, function (err) {// this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.selectedSlide.slideTo(this.segment);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "slideShanged",
        value: function slideShanged(slides) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.selectedSlide = slides;
                    slides.getActiveIndex().then(function (selectedIndex) {
                      _this3.segment = selectedIndex;
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openMyModal",
        value: function openMyModal(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var myModal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      // component: ModalHarapDiperhatikanComponent,
                      // cssClass: 'harap-diperhatikan-modal-css',
                      component: src_app_pages_landing_modal_modal_faq_modal_faq_component__WEBPACK_IMPORTED_MODULE_7__["ModalFaqComponent"],
                      cssClass: 'my-custom-modal-css',
                      backdropDismiss: false,
                      id: 'my-modal-id'
                    });

                  case 2:
                    myModal = _context3.sent;
                    _context3.next = 5;
                    return myModal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openMyModalQR",
        value: function openMyModalQR(voucher_key, id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var myModal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: src_app_pages_landing_modal_modal_qr_modal_qr_component__WEBPACK_IMPORTED_MODULE_8__["ModalQrComponent"],
                      componentProps: {
                        voucher_key: voucher_key,
                        id: id
                      },
                      cssClass: 'my-custom-modal-qr-css',
                      backdropDismiss: false,
                      id: 'my-modal-qr-id'
                    });

                  case 2:
                    myModal = _context4.sent;
                    _context4.next = 5;
                    return myModal.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "navigate",
        value: function navigate(address) {
          var options = {
            start: this.start
          };
          this.launchNavigator.navigate(address, options).then(function (success) {
            return alert('Launched navigator');
          }, function (error) {
            return alert('Error launching navigator: ' + error);
          });
        }
      }]);

      return MyQrPage;
    }();

    MyQrPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_9__["LaunchNavigator"]
      }];
    };

    MyQrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-qr',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-qr.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-qr.page.scss */
      "./src/app/pages/landing/my-qr/my-qr.page.scss"))["default"]]
    })], MyQrPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-landing-my-qr-my-qr-module-es5.js.map