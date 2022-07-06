function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-ps-ps-brand-ps-brand-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingModalModalPsModalFormPsModalFormPsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"widht\">\n    <div class=\"right\">\n      <ion-icon class=\"icon\" name=\"close\" (click)=\"dismissModal()\"></ion-icon>\n    </div>\n  </div>\n  <div class=\"desk\">\n    <div class=\"center\">\n      <img class=\"img\" src=\"../../../../assets/icon/note-2xxhdpi.png\" alt=\"\">\n      <!-- <ion-icon class=\"alart\" name=\"alert\"></ion-icon> -->\n      <br>\n      <ion-label class=\"t1\">Pastikan data kamu sudah benar</ion-label>\n      <br>\n      <p class=\"t2\">Apakah kamu yakin ingin melanjutkan ke proses berikutnya?</p>\n      <div class=\"btn\">\n        <ion-button style=\"width: 100%; height: 45px;\" shape=\"round\" (click)=\"openModalNext($event)\">Ya, Lanjutkan</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingModalModalPsModalPricePsModalPricePsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-item>\n    <ion-label class=\"title\">Estimated Price</ion-label>\n    <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon>\n  </ion-item>\n  <div class=\"desk\">\n    <ion-card class=\"cardgrid\">\n      <div class=\"img_kanan\">\n        <img src=\"../../../../assets/images/baru/coin-bgxhdpi.png\" alt=\"\">\n      </div>\n      <div style=\"margin-top: 10px; margin-left: 10px;\">\n        <ion-label class=\"t1\">IDR {{formatPrice}}</ion-label>\n        <p class=\"t2\" style=\"margin-right: 10px;\">Harga akan berubah sesuai kondisi unit yang sebenarnya setelah dilakukan pengecekkan oleh tim kami</p>\n      </div>\n    </ion-card>\n    <div class=\"btn\">\n      <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"submit()\">Setuju dan Submit</ion-button> \n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingPsPsBrandPsBrandPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"header\">\r\n    <div class=\"card-backgroud\">\r\n      <img src=\"../../../../assets/images/header/ps.png\" alt=\"\">\r\n      <div class=\"img_kanan\">\r\n        <img src=\"../../../../assets/images/baru/form-psxhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"img_kiri\" routerLink=\"/landing/type\">\r\n        <div class=\"icon\">\r\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n        </div>\r\n      </div> \r\n      <div class=\"title\">\r\n        Trade Playstation\r\n      </div>\r\n      <div class=\"subtitle\">\r\n        Silahkan isi data dibawah ini\r\n      </div>\r\n    </div>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <div class=\"content\">\r\n        <div class=\"itemBorder\">\r\n          <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Pilih tempat melakukan Trade In\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"this.lokasi_trade = $event.target.value\">\r\n            <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div class=\"t1\" style=\"margin-top: 30px;\">\r\n          Pilih varian\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"PS5\" class=\"ps-varian-select\" (click)=\"selectVarian('PS5')\">\r\n                <img src=\"../../../../assets/images/baru/ps5xxhdpi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">PS5</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"PS4\" class=\"ps-varian-select\" (click)=\"selectVarian('PS4')\">\r\n                <img src=\"../../../../assets/images/baru/ps3xxhdpi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">PS4</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\" offset-md=\"3\">\r\n              <ion-card id=\"PS3\" class=\"ps-varian-select\" (click)=\"selectVarian('PS3')\">\r\n                <img src=\"../../../../assets/images/baru/ps4xxhdpi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">PS3</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Model\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"Digital\" class=\"ps-model-select\" (click)=\"selectModel('Digital')\">\r\n                <ion-label>Digital</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"Disc\" class=\"ps-model-select\" (click)=\"selectModel('Disc')\">\r\n                <ion-label>Disc</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Storage\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"120GB\" class=\"ps-storage-select\" (click)=\"selectStorage('120GB')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">120GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"160GB\" class=\"ps-storage-select\" (click)=\"selectStorage('160GB')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">160GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\" offset-md=\"3\">\r\n              <ion-card id=\"250GB\" class=\"ps-storage-select\" (click)=\"selectStorage('250GB')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">250GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"320GB\" class=\"ps-storage-select\" (click)=\"selectStorage('320GB')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">320GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"500GB\" class=\"ps-storage-select\" (click)=\"selectStorage('500GB')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">500GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\" offset-md=\"3\">\r\n              <ion-card id=\"1TB\" class=\"ps-storage-select\" (click)=\"selectStorage('1TB')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">1TB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <ion-item class=\"toggle\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Playstation</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiPlaystation\" (ionChange)=\"toggleKondisiPS()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kondisi Stick/Console PS\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"Mulus\" class=\"ps-stick-select\" (click)=\"selectStick('Mulus')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Mulus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"Lecet\" class=\"ps-stick-select\" (click)=\"selectStick('Lecet')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Lecet</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\" offset-md=\"3\">\r\n              <ion-card id=\"Dent\" class=\"ps-stick-select\" (click)=\"selectStick('Dent')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Dent</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n                  \r\n        <ion-item class=\"toggle\" lines=\"none\">\r\n          <ion-label class=\"t2\">Ada Add On Games</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"addOnGame\" (ionChange)=\"toggleAddGame()\"></ion-toggle>\r\n        </ion-item>\r\n        <hr>\r\n\r\n        <div class=\"t1\" style=\"margin-top: 25px;\">\r\n          Fungsi Console PS\r\n        </div>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Stick/Console PS Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"stickNormal\" (ionChange)=\"toggleStick()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Port USB Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"usbNormal\" (ionChange)=\"togglePort()\"></ion-toggle>\r\n        </ion-item>\r\n        <hr>\r\n\r\n        <div class=\"t1\" style=\"margin-top: 25px;\">\r\n          Kelengkapan\r\n        </div>\r\n        \r\n        <ion-radio-group style=\"margin-top: 14px\" (ionChange)=\"radioSelectKelengkapan($event)\">\r\n          <ion-item class=\"radio head\" lines=\"none\">\r\n            <ion-label class=\"t2\">Fullset (Stick,kabel power,HDMI)</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Fullset (Stick,kabel power,HDMI)\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Stick 1pcs + Kabel power+ HDMI</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Stick 1pcs + Kabel power+ HDMI\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Unit Only + Kabel Power (Tanpa Stick)</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Unit Only + Kabel Power (Tanpa Stick)\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        \r\n        <div class=\"btn\">\r\n          <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"submit($event)\">Submit</ion-button>\r\n        </div>\r\n\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingModalModalPsModalFormPsModalFormPsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.widht {\n  width: 100px;\n  height: 20px;\n}\n\n.right {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 7%;\n  left: 90%;\n}\n\n.img {\n  height: 70px;\n  width: 70px;\n  margin-bottom: 10px;\n}\n\n.icon {\n  width: 6%;\n  height: 8%;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.center {\n  text-align: center;\n}\n\n.alart {\n  width: 35px;\n  height: 35px;\n  padding: 3%;\n  background-color: red;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n}\n\n.btn {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1wcy9tb2RhbC1mb3JtLXBzL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxtb2RhbFxcbW9kYWwtcHNcXG1vZGFsLWZvcm0tcHNcXG1vZGFsLWZvcm0tcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtcHMvbW9kYWwtZm9ybS1wcy9tb2RhbC1mb3JtLXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21vZGFsL21vZGFsLXBzL21vZGFsLWZvcm0tcHMvbW9kYWwtZm9ybS1wcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxufVxyXG5cclxuLndpZGh0e1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogNyU7XHJcbiAgICBsZWZ0OiA5MCU7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxufVxyXG5cclxuLmRlc2t7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsYXJ0e1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50MiB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59IiwiaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xufVxuXG4ud2lkaHQge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDclO1xuICBsZWZ0OiA5MCU7XG59XG5cbi5pbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA2JTtcbiAgaGVpZ2h0OiA4JTtcbn1cblxuLmRlc2sge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFsYXJ0IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnQxIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udDIge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ModalFormPsComponent */

  /***/
  function srcAppPagesLandingModalModalPsModalFormPsModalFormPsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalFormPsComponent", function () {
      return ModalFormPsComponent;
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
    /* harmony import */


    var src_app_pages_landing_modal_modal_ps_modal_price_ps_modal_price_ps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component */
    "./src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component.ts");

    var ModalFormPsComponent = /*#__PURE__*/function () {
      function ModalFormPsComponent(ModalController) {
        _classCallCheck(this, ModalFormPsComponent);

        this.ModalController = ModalController;
      }

      _createClass(ModalFormPsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.ModalController.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "openModalNext",
        value: function openModalNext(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modalSubmit;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.ModalController.dismiss();

                  case 2:
                    _context.next = 4;
                    return this.ModalController.create({
                      component: src_app_pages_landing_modal_modal_ps_modal_price_ps_modal_price_ps_component__WEBPACK_IMPORTED_MODULE_3__["ModalPricePsComponent"],
                      cssClass: 'my-custom-modal-price-css',
                      backdropDismiss: false,
                      id: 'my-modal-id',
                      componentProps: {
                        jenis_ps: this.jenis_ps,
                        storages: this.storages,
                        type: this.type,
                        lokasi_trade: this.lokasi_trade,
                        condition: this.condition,
                        addition: this.addition,
                        kondisi_ps: this.kondisi_ps,
                        console: this.console,
                        port: this.port,
                        add_games: this.add_games
                      }
                    });

                  case 4:
                    modalSubmit = _context.sent;
                    _context.next = 7;
                    return modalSubmit.present();

                  case 7:
                    return _context.abrupt("return", _context.sent);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ModalFormPsComponent;
    }();

    ModalFormPsComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ModalFormPsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-form-ps',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-form-ps.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-form-ps.component.scss */
      "./src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component.scss"))["default"]]
    })], ModalFormPsComponent);
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingModalModalPsModalPricePsModalPricePsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desk {\n  padding: 3%;\n}\n\n.img_kanan {\n  position: absolute;\n  top: 0;\n  left: 60%;\n  height: 100%;\n}\n\n.title {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 28px;\n  color: black;\n}\n\n.t2 {\n  margin-top: 3%;\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  color: black;\n  text-align: justify;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cardgrid {\n  background: #ffed8b;\n  padding: 4%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1wcy9tb2RhbC1wcmljZS1wcy9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbW9kYWxcXG1vZGFsLXBzXFxtb2RhbC1wcmljZS1wc1xcbW9kYWwtcHJpY2UtcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtcHMvbW9kYWwtcHJpY2UtcHMvbW9kYWwtcHJpY2UtcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtcHMvbW9kYWwtcHJpY2UtcHMvbW9kYWwtcHJpY2UtcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbn1cclxuXHJcbi5kZXNre1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5pbWdfa2FuYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udDEge1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnQyIHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRncmlke1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzNywgMTM5LCAxKTtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgfSIsImlvbi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbn1cblxuLmRlc2sge1xuICBwYWRkaW5nOiAzJTtcbn1cblxuLmltZ19rYW5hbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA2MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udDEge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50MiB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmRncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZmZWQ4YjtcbiAgcGFkZGluZzogNCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ModalPricePsComponent */

  /***/
  function srcAppPagesLandingModalModalPsModalPricePsModalPricePsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPricePsComponent", function () {
      return ModalPricePsComponent;
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


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ModalPricePsComponent = /*#__PURE__*/function () {
      function ModalPricePsComponent(selling, router, storage, sellingApiService, activatedRoute, utilsService, localNotifications, ModalController) {
        _classCallCheck(this, ModalPricePsComponent);

        this.selling = selling;
        this.router = router;
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.activatedRoute = activatedRoute;
        this.utilsService = utilsService;
        this.localNotifications = localNotifications;
        this.ModalController = ModalController;
        this.response = {};
      }

      _createClass(ModalPricePsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.ModalController.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then(function (token) {
            var data = {
              jenis_ps: _this.jenis_ps,
              storages: _this.storages,
              type: _this.type
            }; // console.log(deviceActivity)

            _this.sellingApiService.getPsDetail(token, data).subscribe(function (response) {
              _this.response = response, _this.formatPrice = new Intl.NumberFormat('id-ID').format(_this.response.data);
              _this.price = _this.response.data;
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then(function (token) {
                      var data = {
                        jenis_ps: _this2.jenis_ps,
                        storages: _this2.storages,
                        type: _this2.type,
                        lokasi_trade: _this2.lokasi_trade,
                        condition: _this2.condition,
                        addition: _this2.addition,
                        kondisi_ps: _this2.kondisi_ps,
                        console: _this2.console,
                        port: _this2.port,
                        add_games: _this2.add_games,
                        price: _this2.price
                      };
                      console.log(data);

                      _this2.sellingApiService.sellPs(token, data).subscribe(function (success) {
                        _this2.storage.get('Reviews').then(function (result) {
                          if (result) {
                            _this2.utilsService.showToast("Permintaan berhasil di ajukan.");

                            _this2.router.navigate(["landing/type"]);
                          } else {
                            _this2.utilsService.showToast("Permintaan berhasil di ajukan.");

                            _this2.router.navigate(["landing/type"]);

                            _this2.storage.set('Reviews', true);

                            cordova.plugins.AppReview.requestReview()["catch"](function () {
                              return cordova.plugins.AppReview.openStoreScreen();
                            });
                          }
                        });
                      }, function (err) {
                        var error = {};
                        error = err.error;

                        _this2.utilsService.showToast(error.message);
                      });
                    });
                    this.localNotifications.schedule({
                      id: 1,
                      text: 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih',
                      data: {
                        secret: 'secret'
                      }
                    });
                    _context2.next = 4;
                    return this.ModalController.dismiss();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ModalPricePsComponent;
    }();

    ModalPricePsComponent.ctorParameters = function () {
      return [{
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_3__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__["SellingApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
      }];
    };

    ModalPricePsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-price-ps',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-price-ps.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-price-ps.component.scss */
      "./src/app/pages/landing/modal/modal-ps/modal-price-ps/modal-price-ps.component.scss"))["default"]]
    })], ModalPricePsComponent);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-ps/ps-brand/ps-brand-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/landing/selling-ps/ps-brand/ps-brand-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: PsBrandPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingPsPsBrandPsBrandRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PsBrandPageRoutingModule", function () {
      return PsBrandPageRoutingModule;
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


    var _ps_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ps-brand.page */
    "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.ts");

    var routes = [{
      path: '',
      component: _ps_brand_page__WEBPACK_IMPORTED_MODULE_3__["PsBrandPage"]
    }];

    var PsBrandPageRoutingModule = function PsBrandPageRoutingModule() {
      _classCallCheck(this, PsBrandPageRoutingModule);
    };

    PsBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PsBrandPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/selling-ps/ps-brand/ps-brand.module.ts ***!
    \**********************************************************************/

  /*! exports provided: PsBrandPageModule */

  /***/
  function srcAppPagesLandingSellingPsPsBrandPsBrandModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PsBrandPageModule", function () {
      return PsBrandPageModule;
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


    var _ps_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ps-brand-routing.module */
    "./src/app/pages/landing/selling-ps/ps-brand/ps-brand-routing.module.ts");
    /* harmony import */


    var _ps_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ps-brand.page */
    "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.ts");

    var PsBrandPageModule = function PsBrandPageModule() {
      _classCallCheck(this, PsBrandPageModule);
    };

    PsBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ps_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["PsBrandPageRoutingModule"]],
      declarations: [_ps_brand_page__WEBPACK_IMPORTED_MODULE_6__["PsBrandPage"]]
    })], PsBrandPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingPsPsBrandPsBrandPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.header.bottom {\n  bottom: 0px;\n}\nion-content {\n  --background: linear-gradient(to left, #DBECFF 30%, #fff 70%);\n}\nion-card {\n  box-shadow: none !important;\n  border: 1px solid #EBEBEB;\n}\n.main-menu {\n  background-color: #fff;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.content {\n  padding: 5%;\n}\n.labelSelect {\n  font-family: Plus Jakarta Sans;\n  font-weight: 600;\n  font-size: 14px;\n}\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  top: 2%;\n  bottom: -10%;\n}\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 25%;\n  left: 78%;\n  height: 200%;\n}\n.card-backgroud .img_kiri {\n  position: absolute;\n  top: 7%;\n  left: 5%;\n  height: 200%;\n}\n.card-backgroud .title {\n  position: absolute;\n  top: 40%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-weight: 800;\n  font-size: 30px;\n  color: black;\n}\n.card-backgroud .subtitle {\n  position: absolute;\n  top: 60%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-size: 18px;\n  color: black;\n}\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  text-align: left;\n}\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: left;\n}\n.itemBorder {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-select {\n  max-width: 100%;\n  text-align: left !important;\n  color: black;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n.selected {\n  background: #eaf5ff;\n  border: 1px solid #045fc4;\n}\n.ps-varian-select {\n  margin-left: 0;\n  margin-top: 3%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.ps-model-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 9%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.ps-storage-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.toggle {\n  margin-left: 0;\n  margin-top: 5%;\n}\n.toggle2 {\n  margin-left: 0;\n  margin-top: 0;\n}\nion-item::part(native) {\n  --padding-start: 0 !important;\n  --inner-padding-end: 0 !important;\n}\n.ps-stick-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\nhr {\n  border-bottom: 2px solid #EBEBEB;\n}\nhr:after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #EBEBEB;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n.radio.head {\n  margin-left: 0;\n}\n.radio {\n  margin-left: 0;\n}\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n  margin-top: 5%;\n}\nion-grid {\n  padding: 0 !important;\n}\nion-toggle {\n  height: 50%;\n  width: 13%;\n  --handle-width: 50%;\n}\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n}\nion-icon {\n  font-size: 25px;\n  color: #045fc4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLXBzL3BzLWJyYW5kL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZWxsaW5nLXBzXFxwcy1icmFuZFxccHMtYnJhbmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctcHMvcHMtYnJhbmQvcHMtYnJhbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQ0U7RUFDRSxRQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVFO0VBQ0EsV0FBQTtBQ0FGO0FESUE7RUFDRSw2REFBQTtBQ0RGO0FES0E7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDRkY7QURNQTtFQUNFLFdBQUE7QUNIRjtBRE1BO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDSEY7QURLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDSko7QURPRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNMSjtBRFFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNOSjtBRFVBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQRjtBRFVBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQRjtBRFVBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ1BGO0FEVUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDUEY7QURVQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNQRjtBRFVBO0VBQ0UsNkJBQUE7RUFDQSxpQ0FBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEVUE7RUFDRSxnQ0FBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEY7QURVQTtFQUNFLHFCQUFBO0FDUEY7QURVQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNQRjtBRFVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNQRjtBRFVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1wcy9wcy1icmFuZC9wcy1icmFuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICAmLnRvcCB7XHJcbiAgICB0b3A6ICAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuXHJcbiAgJi5ib3R0b20ge1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0RCRUNGRiAzMCUsICNmZmYgNzAlKTtcclxuICBcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUI7XHJcbn1cclxuXHJcbi5tYWluLW1lbnV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmxhYmVsU2VsZWN0e1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3Vke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0b3A6IDIlO1xyXG4gIGJvdHRvbTogLTEwJTtcclxuXHJcbiAgLmltZ19rYW5hbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgbGVmdDogNzglO1xyXG4gICAgaGVpZ2h0OiAyMDAlO1xyXG4gIH1cclxuXHJcbiAgLmltZ19raXJpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3JTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiAyMDAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4udDF7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udDJ7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaXRlbUJvcmRlcntcclxuICBib3JkZXI6IHJnYmEoMjM1LCAyMzUsIDIzNSwgMSkgc29saWQgMXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbil7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNlbGVjdGVke1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyNDUsIDI1NSwgMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0LCA5NSwgMTk2LCAxKTtcclxufVxyXG5cclxuLnBzLXZhcmlhbi1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ucHMtbW9kZWwtc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDklO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ucHMtc3RvcmFnZS1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTEwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udG9nZ2xle1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4udG9nZ2xlMntcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5pb24taXRlbTo6cGFydChuYXRpdmUpe1xyXG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50OyBcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcy1zdGljay1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMTElO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XHJcbn1cclxuXHJcbmhyOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcclxuICBtYXJnaW4tYm90dG9tOiAtMnB4OyBcclxuICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnJhZGlvLmhlYWR7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5yYWRpb3tcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmJ0bntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b2dnbGV7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDEzJTtcclxuICAtLWhhbmRsZS13aWR0aDogNTAlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzUsIDIzOCwgMjQ1LCAxKTtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogcmdiYSg0LCA5NSwgMTk2LCAxKTtcclxufSIsIi5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uaGVhZGVyLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuLmhlYWRlci5ib3R0b20ge1xuICBib3R0b206IDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREJFQ0ZGIDMwJSwgI2ZmZiA3MCUpO1xufVxuXG5pb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VCRUJFQjtcbn1cblxuLm1haW4tbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5sYWJlbFNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0b3A6IDIlO1xuICBib3R0b206IC0xMCU7XG59XG4uY2FyZC1iYWNrZ3JvdWQgLmltZ19rYW5hbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDc4JTtcbiAgaGVpZ2h0OiAyMDAlO1xufVxuLmNhcmQtYmFja2dyb3VkIC5pbWdfa2lyaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3JTtcbiAgbGVmdDogNSU7XG4gIGhlaWdodDogMjAwJTtcbn1cbi5jYXJkLWJhY2tncm91ZCAudGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1JTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jYXJkLWJhY2tncm91ZCAuc3VidGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICBsZWZ0OiA1JTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnQxIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnQyIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLml0ZW1Cb3JkZXIge1xuICBib3JkZXI6ICNlYmViZWIgc29saWQgMXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBjb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNlYWY1ZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNDVmYzQ7XG59XG5cbi5wcy12YXJpYW4tc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDMlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnBzLW1vZGVsLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogOSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5wcy1zdG9yYWdlLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4udG9nZ2xlIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4udG9nZ2xlMiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5pb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnBzLXN0aWNrLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTElO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5ociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xufVxuXG5ocjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5yYWRpby5oZWFkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5yYWRpbyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b2dnbGUge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEzJTtcbiAgLS1oYW5kbGUtd2lkdGg6IDUwJTtcbn1cblxuLmljb24ge1xuICBiYWNrZ3JvdW5kOiAjZWJlZWY1O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwNDVmYzQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.ts ***!
    \********************************************************************/

  /*! exports provided: PsBrandPage */

  /***/
  function srcAppPagesLandingSellingPsPsBrandPsBrandPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PsBrandPage", function () {
      return PsBrandPage;
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


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../services/api/membership-api.service */
    "./src/app/services/api/membership-api.service.ts");
    /* harmony import */


    var src_app_pages_landing_modal_modal_ps_modal_form_ps_modal_form_ps_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component */
    "./src/app/pages/landing/modal/modal-ps/modal-form-ps/modal-form-ps.component.ts");
    /* harmony import */


    var src_app_pages_landing_modal_alarm_unit_tolak_alarm_unit_tolak_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component */
    "./src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component.ts");

    var PsBrandPage = /*#__PURE__*/function () {
      function PsBrandPage(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController, modalCtrl, popoverCtrl, modalController) {
        _classCallCheck(this, PsBrandPage);

        this.membershipApiService = membershipApiService;
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.helper = helper;
        this.device = device;
        this.utilsService = utilsService;
        this.navCtrl = navCtrl;
        this.selling = selling;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalController = modalController;
        this.stores = [];
        this.searchedStores = [];
        this.data_brand = [];
        this.data_type = [];
        this.data_storages = [];
        this.data_jenis = [];
        this.kondisiPlaystation = false;
        this.addOnGame = false;
        this.stickNormal = false;
        this.usbNormal = false;
        this.customPopoverOptions = {
          header: 'Pilih Tempat Trade In',
          message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
        };
      }

      _createClass(PsBrandPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStore();
          this.toggleKondisiPS();
          this.toggleAddGame();
          this.toggleStick();
          this.togglePort();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getStore();
          this.getBrand();
          this.selling.removeSelling();
        }
      }, {
        key: "selectVarian",
        value: function selectVarian(val) {
          this.selected_varian = val;
          document.querySelectorAll('.ps-varian-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectModel",
        value: function selectModel(val) {
          this.selected_model = val;
          document.querySelectorAll('.ps-model-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectStorage",
        value: function selectStorage(val) {
          this.storages = val;
          document.querySelectorAll('.ps-storage-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectStick",
        value: function selectStick(val) {
          this.condition_valueSelected = val;
          document.querySelectorAll('.ps-stick-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "toggleKondisiPS",
        value: function toggleKondisiPS() {
          if (this.kondisiPlaystation == true) {
            this.kondisi_ps = 'Nyala';
          } else {
            this.kondisi_ps = 'Mati';
          }
        }
      }, {
        key: "toggleAddGame",
        value: function toggleAddGame() {
          if (this.addOnGame == true) {
            this.add_games = 'Terisi Game';
          } else {
            this.add_games = 'Tidak Terisi';
          }
        }
      }, {
        key: "toggleStick",
        value: function toggleStick() {
          if (this.stickNormal == true) {
            this.console = 'Berfungsi Normal';
          } else {
            this.console = 'Tidak Berfungsi Normal';
          }
        }
      }, {
        key: "togglePort",
        value: function togglePort() {
          if (this.usbNormal == true) {
            this.port = 'Berfungsi Normal';
          } else {
            this.port = 'Tidak Berfungsi Normal';
          }
        }
      }, {
        key: "radioSelectKelengkapan",
        value: function radioSelectKelengkapan(event) {
          this.addition_valueSelected = event.detail.value;
        }
      }, {
        key: "getStore",
        value: function getStore() {
          var _this3 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then(function (token) {
            _this3.sellingApiService.getStore(token).subscribe(function (response) {
              _this3.stores = response.data.store;
              console.log(_this3.stores);
            }, function (err) {
              _this3.stores = [];

              _this3.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "getBrand",
        value: function getBrand() {
          var _this4 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then(function (token) {
            _this4.sellingApiService.getBrandPS(token).subscribe(function (response) {
              _this4.data_brand = response.data.brand;
              _this4.data_type = response.data.type;
              _this4.data_storages = response.data.storages;
              _this4.data_jenis = response.data.jenis_ps;
              console.log(_this4.data_jenis);
            }, function (err) {
              console.log(err);

              _this4.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modalSubmit, _modalSubmit;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.selected_varian == null || this.condition_valueSelected == null || this.storages == null || this.selected_model == null || this.addition_valueSelected == null)) {
                      _context3.next = 4;
                      break;
                    }

                    this.utilsService.showToast("Lengkapi pengisian form.");
                    _context3.next = 19;
                    break;

                  case 4:
                    if (!(this.kondisi_ps == "Mati")) {
                      _context3.next = 13;
                      break;
                    }

                    _context3.next = 7;
                    return this.modalController.create({
                      component: src_app_pages_landing_modal_alarm_unit_tolak_alarm_unit_tolak_component__WEBPACK_IMPORTED_MODULE_13__["AlarmUnitTolakComponent"],
                      cssClass: 'my-custom-modal-css',
                      backdropDismiss: false,
                      id: 'my-modal-id'
                    });

                  case 7:
                    modalSubmit = _context3.sent;
                    _context3.next = 10;
                    return modalSubmit.present();

                  case 10:
                    return _context3.abrupt("return", _context3.sent);

                  case 13:
                    _context3.next = 15;
                    return this.modalController.create({
                      component: src_app_pages_landing_modal_modal_ps_modal_form_ps_modal_form_ps_component__WEBPACK_IMPORTED_MODULE_12__["ModalFormPsComponent"],
                      cssClass: 'my-custom-modal-css',
                      backdropDismiss: false,
                      id: 'my-modal-id',
                      componentProps: {
                        jenis_ps: this.selected_varian,
                        storages: this.storages,
                        type: this.selected_model,
                        lokasi_trade: this.lokasi_trade,
                        condition: this.condition_valueSelected,
                        addition: this.addition_valueSelected,
                        kondisi_ps: this.kondisi_ps,
                        console: this.console,
                        port: this.port,
                        add_games: this.add_games
                      }
                    });

                  case 15:
                    _modalSubmit = _context3.sent;
                    _context3.next = 18;
                    return _modalSubmit.present();

                  case 18:
                    return _context3.abrupt("return", _context3.sent);

                  case 19:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // async openModal(event){
        //   const modal = await this.modalCtrl.create({
        //     component: PsBrandModalComponent,
        //     cssClass: 'small-modal'
        //   });
        //   await modal.present();
        // }

      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Apakah data yang di pilih sudah sesuai dengan kondisi yang sebenarnya?',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: function handler() {}
                      }, {
                        text: 'Lanjut',
                        handler: function handler() {
                          var navigationExtras = {
                            queryParams: {
                              storages: _this5.storages,
                              type: _this5.type,
                              lokasi_tade: _this5.lokasi_trade,
                              condition_valueSelected: _this5.condition_valueSelected,
                              addition_valueSelected: _this5.addition_valueSelected,
                              kondisi_ps: _this5.kondisi_ps,
                              console: _this5.console,
                              port: _this5.port,
                              add_games: _this5.add_games,
                              jenis_ps: _this5.jenis_ps
                            }
                          };

                          _this5.navCtrl.navigateForward(["/landing/ps-brand/detail-unit-ps"], navigationExtras);
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return PsBrandPage;
    }();

    PsBrandPage.ctorParameters = function () {
      return [{
        type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__["MembershipApiService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__["SellingApiService"]
      }, {
        type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_8__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    PsBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ps-brand',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ps-brand.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ps-brand.page.scss */
      "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.page.scss"))["default"]]
    })], PsBrandPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-ps-ps-brand-ps-brand-module-es5.js.map