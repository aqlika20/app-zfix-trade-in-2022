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


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"widht\">\r\n    <div class=\"right\">\r\n      <ion-icon class=\"icon\" name=\"close\" (click)=\"dismissModal()\"></ion-icon>\r\n    </div>\r\n  </div>\r\n  <div class=\"desk\">\r\n    <div class=\"center\">\r\n      <img class=\"img\" src=\"../../../../assets/icon/lovexxhdpi.png\" alt=\"\">\r\n      <!-- <ion-icon class=\"alart\" name=\"alert\"></ion-icon> -->\r\n      <br>\r\n      <ion-label class=\"t1\">Enjoying the app?</ion-label>\r\n      <br>\r\n      <p class=\"t2\">How was your experience with Zfix? Let us know what you think</p>\r\n      <div class=\"btn\">\r\n        <ion-button style=\"width: 100%; height: 45px;\" shape=\"round\" (click)=\"submit()\">Kirim Feedback</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-content>\n  <h2>My QR<img (click)=\"openMyModal($event)\" src=\"../../../../assets/images/Vector.png\" alt=\"\"></h2>\n  \n  <ion-card *ngFor=\"let item of qrLaptop\">\n    <div *ngFor=\"let vou of vouchers\">\n      <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 2\">\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"8\" style=\"margin-left: 7px;\">Laptop <p class=\"text\">Active</p>\n                <ion-row style=\"margin-top: 20px;\">\n                  <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n                </ion-row>\n                <ion-row>\n                  <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n                </ion-row>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ngx-qrcode \n                [width]=200\n                [margin]=0\n                value = \"{{item.id}}\">\n                </ngx-qrcode>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n      <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"7\" style=\"margin-left: 7px;\">\n              <ion-label text-wrap>\n                <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n                <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n                </h3>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n</ion-card>\n\n  <ion-card *ngFor=\"let item of qrTV\">\n      <div *ngFor=\"let vou of vouchers\">\n        <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 3\">\n          <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"8\" style=\"margin-left: 7px;\">Televisi <p class=\"text\">Active</p>\n                  <ion-row style=\"margin-top: 20px;\">\n                    <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n                  </ion-row>\n                  <ion-row>\n                    <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n                  </ion-row>\n                </ion-col>\n                <ion-col size=\"3\">\n                  <ngx-qrcode \n                  [width]=200\n                  [margin]=0\n                  value = \"{{item.id}}\">\n                  </ngx-qrcode>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n        <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"7\" style=\"margin-left: 7px;\">\n                <ion-label text-wrap>\n                  <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n                  <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n                  </h3>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"3\">\n                <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n\n  </ion-card>\n\n  <ion-card *ngFor=\"let item of qrPS\">\n    <div *ngFor=\"let vou of vouchers\">\n      <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 4\">\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"8\" style=\"margin-left: 7px;\">PlayStation <p class=\"text\">Active</p>\n                <ion-row style=\"margin-top: 20px;\">\n                  <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n                </ion-row>\n                <ion-row>\n                  <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n                </ion-row>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ngx-qrcode \n                [width]=200\n                [margin]=0\n                value = \"{{item.id}}\">\n                </ngx-qrcode>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n      <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"7\" style=\"margin-left: 7px;\">\n              <ion-label text-wrap>\n                <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n                <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n                </h3>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n</ion-card>\n\n<ion-card *ngFor=\"let item of qrKulkas\">\n  <div *ngFor=\"let vou of vouchers\">\n    <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 5\">\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\" style=\"margin-left: 7px;\">Kulkas <p class=\"text\">Active</p>\n              <ion-row style=\"margin-top: 20px;\">\n                <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n              </ion-row>\n              <ion-row>\n                <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ngx-qrcode \n              [width]=200\n              [margin]=0\n              value = \"{{item.id}}\">\n              </ngx-qrcode>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n    <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"7\" style=\"margin-left: 7px;\">\n            <ion-label text-wrap>\n              <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n              <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n              </h3>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-card>\n\n<ion-card *ngFor=\"let item of qrMesinCuci\">\n  <div *ngFor=\"let vou of vouchers\">\n    <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 6\">\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\" style=\"margin-left: 7px;\">Mesin Cuci <p class=\"text\">Active</p>\n              <ion-row style=\"margin-top: 20px;\">\n                <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n              </ion-row>\n              <ion-row>\n                <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ngx-qrcode \n              [width]=200\n              [margin]=0\n              value = \"{{item.id}}\">\n              </ngx-qrcode>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n    <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"7\" style=\"margin-left: 7px;\">\n            <ion-label text-wrap>\n              <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n              <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n              </h3>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-card>\n  \n</ion-content>";
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


    __webpack_exports__["default"] = "ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.widht {\n  width: 100px;\n  height: 20px;\n}\n\n.right {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 7%;\n  left: 90%;\n}\n\n.img {\n  height: 70px;\n  width: 70px;\n  margin-bottom: 10px;\n}\n\n.icon {\n  width: 6%;\n  height: 8%;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.center {\n  text-align: center;\n}\n\n.alart {\n  width: 35px;\n  height: 35px;\n  padding: 3%;\n  background-color: red;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n}\n\n.btn {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1mYXEvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG1vZGFsXFxtb2RhbC1mYXFcXG1vZGFsLWZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1mYXEvbW9kYWwtZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21vZGFsL21vZGFsLWZhcS9tb2RhbC1mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbn1cclxuXHJcbi53aWRodHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDclO1xyXG4gICAgbGVmdDogOTAlO1xyXG59XHJcblxyXG4uaW1ne1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbntcclxuICAgIHdpZHRoOiA2JTtcclxuICAgIGhlaWdodDogOCU7XHJcbn1cclxuXHJcbi5kZXNre1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGFydHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi50MSB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufSIsImlvbi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbn1cblxuLndpZGh0IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiA3JTtcbiAgbGVmdDogOTAlO1xufVxuXG4uaW1nIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmljb24ge1xuICB3aWR0aDogNiU7XG4gIGhlaWdodDogOCU7XG59XG5cbi5kZXNrIHtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hbGFydCB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnQyIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufSJdfQ== */";
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


    __webpack_exports__["default"] = "ion-card {\n  border-radius: 20px;\n}\n\nh2 {\n  margin-top: 20px;\n  margin-left: 20px;\n}\n\nimg {\n  margin-left: 75%;\n}\n\n.qr {\n  width: 84px;\n  height: 84px;\n}\n\np {\n  margin-left: 10px;\n}\n\n.text {\n  background-color: green;\n  color: white;\n  background-size: auto;\n  border-radius: 50px;\n  padding: 5px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: inline;\n}\n\n.price {\n  color: #395398;\n  margin-bottom: 0;\n  font-size: 22px;\n}\n\n.device-detail-popover {\n  top: 10% !important;\n  bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbXktcXJcXG15LXFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9teS1xci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVDO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NMOztBREVDO0VBQ0csbUJBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9teS1xci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbmltZyB7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcclxufVxyXG5cclxuLnFyIHtcclxuICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4gLnByaWNlIHtcclxuICAgICBjb2xvcjogIzM5NTM5ODtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMjJweDtcclxuIH1cclxuIFxyXG4gLmRldmljZS1kZXRhaWwtcG9wb3ZlcntcclxuICAgIHRvcDogMTAlIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogMHB4IWltcG9ydGFudDtcclxufSIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuaDIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLnFyIHtcbiAgd2lkdGg6IDg0cHg7XG4gIGhlaWdodDogODRweDtcbn1cblxucCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnByaWNlIHtcbiAgY29sb3I6ICMzOTUzOTg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmRldmljZS1kZXRhaWwtcG9wb3ZlciB7XG4gIHRvcDogMTAlICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
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
    "./node_modules/@ionic-native/launch-navigator/__ivy_ngcc__/ngx/index.js");

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
          var _this = this;

          setInterval(function () {
            _this.getQRCODE();
          }, 2000);
          this.getTransaction();
        }
      }, {
        key: "getQRCODE",
        value: function getQRCODE() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this2.sellingApiService.getQR(token).subscribe(function (response) {
              _this2.qrLaptop = response.data.arr;
              _this2.qrTV = response.data.arr2;
              _this2.qrPS = response.data.arr3;
              _this2.qrKulkas = response.data.arr5;
              _this2.qrMesinCuci = response.data.arr6;
              _this2.stores = response.data.store;
              _this2.vouchers = response.data.voucher;
              console.log(response.data.arr2);
            }, function (err) {// this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "getTransaction",
        value: function getTransaction() {
          var _this3 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this3.sellingApiService.getDetailTransaction(token).subscribe(function (response) {
              _this3.trLaptop = response.data.data_arr;
              _this3.trTV = response.data.data_arr2;
              _this3.trPS = response.data.data_arr3;
              _this3.trKulkas = response.data.data_arr5;
              _this3.trMesinCuci = response.data.data_arr6;
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
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.selectedSlide = slides;
                    slides.getActiveIndex().then(function (selectedIndex) {
                      _this4.segment = selectedIndex;
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