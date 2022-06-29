(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-kulkas-kulkas-brand-kulkas-brand-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-kulkas/modal-form-kulkas/modal-form-kulkas.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-kulkas/modal-form-kulkas/modal-form-kulkas.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"widht\">\n    <div class=\"right\">\n      <ion-icon class=\"icon\" name=\"close\" (click)=\"dismissModal()\"></ion-icon>\n    </div>\n  </div>\n  <div class=\"desk\">\n    <div class=\"center\">\n      <img class=\"img\" src=\"../../../../assets/icon/note-2xxhdpi.png\" alt=\"\">\n      <!-- <ion-icon class=\"alart\" name=\"alert\"></ion-icon> -->\n      <br>\n      <ion-label class=\"t1\">Pastikan data kamu sudah benar</ion-label>\n      <br>\n      <p class=\"t2\">Apakah kamu yakin ingin melanjutkan ke proses berikutnya?</p>\n      <div class=\"btn\">\n        <ion-button style=\"width: 100%; height: 45px;\" shape=\"round\" (click)=\"openModalNext($event)\">Ya, Lanjutkan</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-item>\n    <ion-label class=\"title\">Estimated Price</ion-label>\n    <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon>\n  </ion-item>\n  <div class=\"desk\">\n    <ion-card class=\"cardgrid\">\n      <div class=\"img_kanan\">\n        <img src=\"../../../../assets/images/baru/coin-bgxhdpi.png\" alt=\"\">\n      </div>\n      <div style=\"margin-top: 10px; margin-left: 10px;\">\n        <ion-label class=\"t1\">IDR {{formatPrice}}</ion-label>\n        <p class=\"t2\" style=\"margin-right: 10px;\">Harga akan berubah sesuai kondisi unit yang sebenarnya setelah dilakukan pengecekkan oleh tim kami</p>\n      </div>\n    </ion-card>\n    <div class=\"btn\">\n      <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"submit()\">Setuju dan Submit</ion-button> \n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"header\">\r\n    <div class=\"card-backgroud\">\r\n      <img src=\"../../../../assets/images/header/kulkas.png\" alt=\"\">\r\n      <div class=\"img_kanan\">\r\n        <img src=\"../../../../assets/images/baru/form-kulkasxhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"img_kiri\" routerLink=\"/landing/type\">\r\n        <div class=\"icon\">\r\n          <ion-icon class=\"ic_back\" name=\"arrow-back-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"title\">\r\n        Trade Kulkas\r\n      </div>\r\n      <div class=\"subtitle\">\r\n        Silahkan isi data dibawah ini\r\n      </div>\r\n    </div>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <div class=\"content\">\r\n        <div class=\"itemBorder\">\r\n          <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Pilih tempat melakukan Trade In\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"this.lokasi_trade = $event.target.value\">\r\n            <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div class=\"t1\" style=\"margin-top: 30px;\">\r\n          Pilih Merk\r\n        </div> \r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"LG\" class=\"kulkas-merk-select\" (click)=\"selectMerk('LG')\">\r\n                <img src=\"../../../../assets/sponsor/lg_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">LG</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Sharp\" class=\"kulkas-merk-select\" (click)=\"selectMerk('Sharp')\">\r\n                <img src=\"../../../../assets/sponsor/sharp.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Sharp</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Sony\" class=\"kulkas-merk-select\" (click)=\"selectMerk('Sony')\">\r\n                <img src=\"../../../../assets/sponsor/sony_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Sony</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Samsung\" class=\"kulkas-merk-select\" (click)=\"selectMerk('Samsung')\">\r\n                <img src=\"../../../../assets/sponsor/samsung_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Samsung</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Xiaomi\" class=\"kulkas-merk-select\" (click)=\"selectMerk('Xiaomi')\">\r\n                <img src=\"../../../../assets/sponsor/mi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Xiaomi</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Panasonic\" class=\"kulkas-merk-select\" (click)=\"selectMerk('Panasonic')\">\r\n                <img src=\"../../../../assets/sponsor/panasonic.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Panasonic</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <!-- <div id=\"hide\" hidden=\"true\">\r\n          <ion-grid style=\"margin-top: 14px\">\r\n            <ion-row>\r\n              <ion-col size-md=\"4\">\r\n                <ion-card id=\"razer\" class=\"kulkas-merk-select\" (click)=\"selectMerk('razer')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/razer.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Razer</ion-label>\r\n                </ion-card>\r\n              </ion-col>\r\n              <ion-col size-md=\"4\">\r\n                <ion-card id=\"apple\" class=\"kulkas-merk-select\" (click)=\"selectMerk('apple')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/apple.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Apple</ion-label>\r\n                </ion-card>\r\n              </ion-col> \r\n              <ion-col size-md=\"4\">\r\n                <ion-card id=\"alienware\" class=\"kulkas-merk-select\" (click)=\"selectMerk('alienware')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/alienware.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Alienware</ion-label>\r\n                </ion-card>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div> -->\r\n        <div class=\"show\" style=\"margin-top: 14px\" (click)=\"showMore()\">\r\n          <a>Show more brand</a> <ion-icon class=\"ic_drop\" name=\"caret-down-outline\"></ion-icon>\r\n        </div>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Model\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"Inverter\" class=\"kulkas-model-select\" (click)=\"selectModel('Inverter')\">\r\n                <ion-label>Inverter</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"Non Inverter\" class=\"kulkas-model-select\" (click)=\"selectModel('Non Inverter')\">\r\n                <ion-label>Non Inverter</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          tipe\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"1 Pintu\" class=\"kulkas-tipe-select\" (click)=\"selectTipe('1 Pintu')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">1 Pintu</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"2 Pintu\" class=\"kulkas-tipe-select\" (click)=\"selectTipe('2 Pintu')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">2 Pintu</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kondisi Fisik\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"mulus\" class=\"kulkas-fisik-select\" (click)=\"selectFisik('mulus')\">\r\n                <ion-label>Mulus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"lecet\" class=\"kulkas-fisik-select\" (click)=\"selectFisik('lecet')\">\r\n                <ion-label>Lecet</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"penyok\" class=\"kulkas-fisik-select\" (click)=\"selectFisik('penyok')\">\r\n                <ion-label>Penyok</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <hr>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Kulkas Menyala</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiKulkas\" (ionChange)=\"toggleKondisiKulkas()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Rubber Kulkas Berfungsi</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiRubber\" (ionChange)=\"toggleRubber()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Tutup Freezer Komplit</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTutupFreezer\" (ionChange)=\"toggleTutupFreezer()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kelengkapan Tray Kulkas Komplit</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTray\" (ionChange)=\"toggleTray()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Freezer Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiFreezer\" (ionChange)=\"toggleKondisiFreezer()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <div class=\"btn\">\r\n          <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"submit($event)\">Submit</ion-button>\r\n        </div>\r\n        \r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-kulkas/modal-form-kulkas/modal-form-kulkas.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-kulkas/modal-form-kulkas/modal-form-kulkas.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.widht {\n  width: 100px;\n  height: 20px;\n}\n\n.right {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 7%;\n  left: 90%;\n}\n\n.img {\n  height: 70px;\n  width: 70px;\n  margin-bottom: 10px;\n}\n\n.icon {\n  width: 6%;\n  height: 8%;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.center {\n  text-align: center;\n}\n\n.alart {\n  width: 35px;\n  height: 35px;\n  padding: 3%;\n  background-color: red;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n}\n\n.btn {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1rdWxrYXMvbW9kYWwtZm9ybS1rdWxrYXMvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG1vZGFsXFxtb2RhbC1rdWxrYXNcXG1vZGFsLWZvcm0ta3Vsa2FzXFxtb2RhbC1mb3JtLWt1bGthcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1rdWxrYXMvbW9kYWwtZm9ybS1rdWxrYXMvbW9kYWwtZm9ybS1rdWxrYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwta3Vsa2FzL21vZGFsLWZvcm0ta3Vsa2FzL21vZGFsLWZvcm0ta3Vsa2FzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG59XHJcblxyXG4ud2lkaHR7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiA3JTtcclxuICAgIGxlZnQ6IDkwJTtcclxufVxyXG5cclxuLmltZ3tcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDogNiU7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG59XHJcblxyXG4uZGVza3tcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWxhcnR7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4udDEge1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnQyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn0iLCJpb24taWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG59XG5cbi53aWRodCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ucmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogNyU7XG4gIGxlZnQ6IDkwJTtcbn1cblxuLmltZyB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDYlO1xuICBoZWlnaHQ6IDglO1xufVxuXG4uZGVzayB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWxhcnQge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4udDEge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50MiB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-kulkas/modal-form-kulkas/modal-form-kulkas.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-kulkas/modal-form-kulkas/modal-form-kulkas.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ModalFormKulkasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFormKulkasComponent", function() { return ModalFormKulkasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_landing_modal_modal_kulkas_modal_price_kulkas_modal_price_kulkas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component */ "./src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component.ts");




let ModalFormKulkasComponent = class ModalFormKulkasComponent {
    constructor(ModalController) {
        this.ModalController = ModalController;
    }
    ngOnInit() { }
    dismissModal() {
        this.ModalController.dismiss({
            'dismissed': true
        });
    }
    openModalNext(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ModalController.dismiss();
            const modalSubmit = yield this.ModalController.create({
                component: src_app_pages_landing_modal_modal_kulkas_modal_price_kulkas_modal_price_kulkas_component__WEBPACK_IMPORTED_MODULE_3__["ModalPriceKulkasComponent"],
                cssClass: 'my-custom-modal-price-css',
                backdropDismiss: false,
                id: 'my-modal-id',
                componentProps: {
                    brand: this.brand,
                    type: this.type,
                    model: this.model,
                    condition: this.condition,
                    kondisi_fisik: this.kondisi_fisik,
                    rubber: this.rubber,
                    tutup_freezer: this.tutup_freezer,
                    tray: this.tray,
                    ice_maker: this.ice_maker,
                    lokasi_trade: this.lokasi_trade
                },
            });
            return yield modalSubmit.present();
        });
    }
};
ModalFormKulkasComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalFormKulkasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-form-kulkas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-form-kulkas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-kulkas/modal-form-kulkas/modal-form-kulkas.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-form-kulkas.component.scss */ "./src/app/pages/landing/modal/modal-kulkas/modal-form-kulkas/modal-form-kulkas.component.scss")).default]
    })
], ModalFormKulkasComponent);



/***/ }),

/***/ "./src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desk {\n  padding: 3%;\n}\n\n.img_kanan {\n  position: absolute;\n  top: 0;\n  left: 60%;\n  height: 100%;\n}\n\n.title {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 28px;\n  color: black;\n}\n\n.t2 {\n  margin-top: 3%;\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  color: black;\n  text-align: justify;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cardgrid {\n  background: #ffed8b;\n  padding: 4%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1rdWxrYXMvbW9kYWwtcHJpY2Uta3Vsa2FzL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxtb2RhbFxcbW9kYWwta3Vsa2FzXFxtb2RhbC1wcmljZS1rdWxrYXNcXG1vZGFsLXByaWNlLWt1bGthcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1rdWxrYXMvbW9kYWwtcHJpY2Uta3Vsa2FzL21vZGFsLXByaWNlLWt1bGthcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1rdWxrYXMvbW9kYWwtcHJpY2Uta3Vsa2FzL21vZGFsLXByaWNlLWt1bGthcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxufVxyXG5cclxuLmRlc2t7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxufVxyXG5cclxuLmltZ19rYW5hbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50MSB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udDIge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZGdyaWR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjM3LCAxMzksIDEpO1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9IiwiaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xufVxuXG4uZGVzayB7XG4gIHBhZGRpbmc6IDMlO1xufVxuXG4uaW1nX2thbmFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnQyIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZGdyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmZlZDhiO1xuICBwYWRkaW5nOiA0JTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ModalPriceKulkasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPriceKulkasComponent", function() { return ModalPriceKulkasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");











let ModalPriceKulkasComponent = class ModalPriceKulkasComponent {
    constructor(ModalController, selling, router, storage, sellingApiService, activatedRoute, utilsService, localNotifications) {
        this.ModalController = ModalController;
        this.selling = selling;
        this.router = router;
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.activatedRoute = activatedRoute;
        this.utilsService = utilsService;
        this.localNotifications = localNotifications;
        this.response = {};
    }
    ngOnInit() {
        this.getData();
    }
    dismissModal() {
        this.ModalController.dismiss({
            'dismissed': true
        });
    }
    getData() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_6__["tokenKey"]).then((token) => {
            let data = {
                brand: this.brand,
                type: this.type,
                model: this.model,
            };
            // console.log(deviceActivity)
            this.sellingApiService.getKulkasDetail(token, data).subscribe((response) => {
                this.response = response,
                    this.price = this.response.data;
                this.formatPrice = new Intl.NumberFormat('id-ID').format(this.response.data);
            });
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_6__["tokenKey"]).then((token) => {
                let data = {
                    brand: this.brand,
                    type: this.type,
                    model: this.model,
                    condition: this.condition,
                    kondisi_fisik: this.kondisi_fisik,
                    rubber: this.rubber,
                    tutup_freezer: this.tutup_freezer,
                    tray: this.tray,
                    ice_maker: this.ice_maker,
                    lokasi_trade: this.lokasi_trade,
                    price: this.price
                };
                // console.log(data)
                this.sellingApiService.sellKulkas(token, data).subscribe((success) => {
                    this.storage.get('Reviews').then((result) => {
                        if (result) {
                            this.utilsService.showToast("Permintaan berhasil di ajukan.");
                            this.router.navigate(["landing/type"]);
                        }
                        else {
                            this.utilsService.showToast("Permintaan berhasil di ajukan.");
                            this.router.navigate(["landing/type"]);
                            this.storage.set('Reviews', true);
                            cordova.plugins.AppReview.requestReview().catch(function () {
                                return cordova.plugins.AppReview.openStoreScreen();
                            });
                        }
                    });
                }, (err) => {
                    var error = {};
                    error = err.error;
                    this.utilsService.showToast(error.message);
                });
            });
            this.localNotifications.schedule({
                id: 1,
                text: 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih',
                data: { secret: 'secret' }
            });
            yield this.ModalController.dismiss();
        });
    }
};
ModalPriceKulkasComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_4__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_7__["SellingApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"] }
];
ModalPriceKulkasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-price-kulkas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-price-kulkas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-price-kulkas.component.scss */ "./src/app/pages/landing/modal/modal-kulkas/modal-price-kulkas/modal-price-kulkas.component.scss")).default]
    })
], ModalPriceKulkasComponent);



/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: KulkasBrandPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KulkasBrandPageRoutingModule", function() { return KulkasBrandPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _kulkas_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kulkas-brand.page */ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.ts");




const routes = [
    {
        path: '',
        component: _kulkas_brand_page__WEBPACK_IMPORTED_MODULE_3__["KulkasBrandPage"]
    }
];
let KulkasBrandPageRoutingModule = class KulkasBrandPageRoutingModule {
};
KulkasBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KulkasBrandPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.module.ts ***!
  \**********************************************************************************/
/*! exports provided: KulkasBrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KulkasBrandPageModule", function() { return KulkasBrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _kulkas_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kulkas-brand-routing.module */ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand-routing.module.ts");
/* harmony import */ var _kulkas_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kulkas-brand.page */ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.ts");







let KulkasBrandPageModule = class KulkasBrandPageModule {
};
KulkasBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _kulkas_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["KulkasBrandPageRoutingModule"]
        ],
        declarations: [_kulkas_brand_page__WEBPACK_IMPORTED_MODULE_6__["KulkasBrandPage"]]
    })
], KulkasBrandPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.header.bottom {\n  bottom: 0px;\n}\nion-content {\n  --background: linear-gradient(to left, #e1ffdb 30%, #fff 70%);\n}\n.main-menu {\n  background-color: #fff;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.content {\n  padding: 5%;\n}\n.labelSelect {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 14px;\n}\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  top: 2%;\n  bottom: -10%;\n}\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 25%;\n  left: 78%;\n  height: 200%;\n}\n.card-backgroud .img_kiri {\n  position: absolute;\n  top: 7%;\n  left: 5%;\n  height: 200%;\n}\n.card-backgroud .title {\n  position: absolute;\n  top: 40%;\n  left: 5%;\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 800;\n  font-size: 30px;\n  color: black;\n}\n.card-backgroud .subtitle {\n  position: absolute;\n  top: 60%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-size: 18px;\n  color: black;\n}\n.t1 {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  text-align: left;\n}\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: left;\n}\n.itemBorder {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.itemBorder2 {\n  margin-top: 10%;\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-select {\n  max-width: 100%;\n  text-align: left !important;\n  color: black;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n.selected {\n  background: #eaf5ff;\n  border: 1px solid #045fc4;\n}\n.kulkas-merk-select {\n  margin-left: 0;\n  margin-top: 3%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.kulkas-tipe-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 9%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.kulkas-model-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.kulkas-fisik-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.toggle {\n  margin-left: 0;\n  margin-top: 5%;\n}\n.toggle2 {\n  margin-left: 0;\n  margin-top: 0;\n}\nion-item::part(native) {\n  --padding-start: 0 !important;\n  --inner-padding-end: 0 !important;\n}\nhr {\n  border-bottom: 2px solid #EBEBEB;\n}\nhr:after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #EBEBEB;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n.radio.head {\n  margin-left: 0;\n}\n.radio {\n  margin-left: 0;\n}\n.show {\n  color: black;\n  padding-left: 10px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n.ic_drop {\n  margin-left: 6px;\n}\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n  margin-top: 5%;\n}\nion-grid {\n  padding: 0 !important;\n}\nion-toggle {\n  height: 50%;\n  width: 13%;\n  --handle-width: 50%;\n}\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n}\n.ic_back {\n  font-size: 25px;\n  color: #045fc4;\n}\nhr {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWt1bGthcy9rdWxrYXMtYnJhbmQvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNlbGxpbmcta3Vsa2FzXFxrdWxrYXMtYnJhbmRcXGt1bGthcy1icmFuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1rdWxrYXMva3Vsa2FzLWJyYW5kL2t1bGthcy1icmFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNFLFFBQUE7RUFDQSw0QkFBQTtBQ0NKO0FERUU7RUFDQSxXQUFBO0FDQUY7QURJQTtFQUNFLDZEQUFBO0FDREY7QURLQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDRkY7QURNQTtFQUNFLFdBQUE7QUNIRjtBRE1BO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDSEY7QURLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDSko7QURPRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNMSjtBRFFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNOSjtBRFVBO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQRjtBRFVBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQRjtBRFVBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ1BGO0FEVUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDUEY7QURVQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNQRjtBRFVBO0VBQ0UsNkJBQUE7RUFDQSxpQ0FBQTtBQ1BGO0FEVUE7RUFDRSxnQ0FBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtBQ1BGO0FEVUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEVUE7RUFDRSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEY7QURVQTtFQUNFLHFCQUFBO0FDUEY7QURVQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNQRjtBRFVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNQRjtBRFVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNQRjtBRFVBO0VBQ0UsZUFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWt1bGthcy9rdWxrYXMtYnJhbmQva3Vsa2FzLWJyYW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gICYudG9wIHtcclxuICAgIHRvcDogIDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgfVxyXG5cclxuICAmLmJvdHRvbSB7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZTFmZmRiIDMwJSwgI2ZmZiA3MCUpO1xyXG4gIFxyXG59XHJcblxyXG4ubWFpbi1tZW51e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5sYWJlbFNlbGVjdHtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2tncm91ZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdG9wOiAyJTtcclxuICBib3R0b206IC0xMCU7XHJcblxyXG4gIC5pbWdfa2FuYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDc4JTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICB9XHJcblxyXG4gIC5pbWdfa2lyaXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNyU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLnQxe1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnQye1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLml0ZW1Cb3JkZXJ7XHJcbiAgYm9yZGVyOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDEpIHNvbGlkIDFweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5pdGVtQm9yZGVyMntcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgYm9yZGVyOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDEpIHNvbGlkIDFweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pe1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zZWxlY3RlZHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMjQ1LCAyNTUsIDEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbn1cclxuXHJcbi5rdWxrYXMtbWVyay1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ua3Vsa2FzLXRpcGUtc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDklO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ua3Vsa2FzLW1vZGVsLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5rdWxrYXMtZmlzaWstc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnRvZ2dsZXtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnRvZ2dsZTJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKXtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDsgXHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XHJcbn1cclxuXHJcbmhyOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcclxuICBtYXJnaW4tYm90dG9tOiAtMnB4OyBcclxuICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnJhZGlvLmhlYWR7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5yYWRpb3tcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLnNob3d7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5pY19kcm9we1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9nZ2xle1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMyU7XHJcbiAgLS1oYW5kbGUtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAyMzgsIDI0NSwgMSk7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5pY19iYWNrIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbn1cclxuXHJcbmhye1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufSIsIi5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uaGVhZGVyLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuLmhlYWRlci5ib3R0b20ge1xuICBib3R0b206IDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZTFmZmRiIDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmxhYmVsU2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJkLWJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRvcDogMiU7XG4gIGJvdHRvbTogLTEwJTtcbn1cbi5jYXJkLWJhY2tncm91ZCAuaW1nX2thbmFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1JTtcbiAgbGVmdDogNzglO1xuICBoZWlnaHQ6IDIwMCU7XG59XG4uY2FyZC1iYWNrZ3JvdWQgLmltZ19raXJpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDclO1xuICBsZWZ0OiA1JTtcbiAgaGVpZ2h0OiAyMDAlO1xufVxuLmNhcmQtYmFja2dyb3VkIC50aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNhcmQtYmFja2dyb3VkIC5zdWJ0aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIGxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udDEge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udDIge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaXRlbUJvcmRlciB7XG4gIGJvcmRlcjogI2ViZWJlYiBzb2xpZCAxcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG4uaXRlbUJvcmRlcjIge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGJvcmRlcjogI2ViZWJlYiBzb2xpZCAxcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cblxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2VhZjVmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0NWZjNDtcbn1cblxuLmt1bGthcy1tZXJrLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5rdWxrYXMtdGlwZS1zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDklO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ua3Vsa2FzLW1vZGVsLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTElO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ua3Vsa2FzLWZpc2lrLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4udG9nZ2xlIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4udG9nZ2xlMiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5pb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbn1cblxuaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcbn1cblxuaHI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4ucmFkaW8uaGVhZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ucmFkaW8ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNob3cge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pY19kcm9wIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMyU7XG4gIC0taGFuZGxlLXdpZHRoOiA1MCU7XG59XG5cbi5pY29uIHtcbiAgYmFja2dyb3VuZDogI2ViZWVmNTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmljX2JhY2sge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDQ1ZmM0O1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.ts ***!
  \********************************************************************************/
/*! exports provided: KulkasBrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KulkasBrandPage", function() { return KulkasBrandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");
/* harmony import */ var src_app_pages_landing_modal_modal_kulkas_modal_form_kulkas_modal_form_kulkas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/landing/modal/modal-kulkas/modal-form-kulkas/modal-form-kulkas.component */ "./src/app/pages/landing/modal/modal-kulkas/modal-form-kulkas/modal-form-kulkas.component.ts");
/* harmony import */ var src_app_pages_landing_modal_alarm_unit_tolak_alarm_unit_tolak_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component */ "./src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component.ts");

















let KulkasBrandPage = class KulkasBrandPage {
    constructor(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController, modalController) {
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
        this.modalController = modalController;
        this.data_brand = [];
        this.data_model = [];
        this.data_type = [];
        this.stores = [];
        this.kondisiKulkas = false;
        this.kondisiRubber = false;
        this.kondisiTutupFreezer = false;
        this.kondisiTray = false;
        this.kondisiFreezer = false;
        this.showHidden = true;
        this.customPopoverOptions = {
            header: 'Pilih Tempat Trade In',
            message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
        };
    }
    ngOnInit() {
        this.toggleKondisiKulkas();
        this.toggleRubber();
        this.toggleTray();
        this.toggleKondisiFreezer();
        this.toggleTutupFreezer();
    }
    ionViewWillEnter() {
        this.getStore();
        this.getBrand();
        this.selling.removeSelling();
    }
    showMore() {
        if (this.showHidden === true) {
            this.showHidden = false;
            document.getElementById("hide").hidden = false;
        }
        else if (this.showHidden === false) {
            this.showHidden = true;
            document.getElementById("hide").hidden = true;
        }
    }
    selectMerk(val) {
        this.brand = val;
        document.querySelectorAll('.kulkas-merk-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectTipe(val) {
        this.type = val;
        document.querySelectorAll('.kulkas-tipe-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectModel(val) {
        this.model = val;
        document.querySelectorAll('.kulkas-model-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectFisik(val) {
        this.kondisi_fisik = val;
        document.querySelectorAll('.kulkas-fisik-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    toggleKondisiKulkas() {
        if (this.kondisiKulkas == true) {
            this.condition = 'Nyala';
        }
        else {
            this.condition = 'Mati';
        }
    }
    toggleRubber() {
        if (this.kondisiRubber == true) {
            this.rubber = 'Normal';
        }
        else {
            this.rubber = 'Tidak Normal';
        }
    }
    toggleTutupFreezer() {
        if (this.kondisiTutupFreezer == true) {
            this.tutup_freezer = 'Komplit';
        }
        else {
            this.tutup_freezer = 'Tidak Ada';
        }
    }
    toggleTray() {
        if (this.kondisiTray == true) {
            this.tray = 'Komplit';
        }
        else {
            this.tray = 'Tidak Ada';
        }
    }
    toggleKondisiFreezer() {
        if (this.kondisiFreezer == true) {
            this.ice_maker = 'Berfungsi';
        }
        else {
            this.ice_maker = 'Tidak Berfungsi';
        }
    }
    getStore() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then((token) => {
            this.sellingApiService.getStore(token).subscribe((response) => {
                this.stores = response.data.store;
            }, (err) => {
                this.stores = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    getBrand() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then((token) => {
            this.sellingApiService.getBrandKulkas(token).subscribe((response) => {
                this.data_brand = response.data.brand;
                this.data_model = response.data.model;
                this.data_type = response.data.type;
                console.log(this.data_brand);
            }, (err) => {
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if ((this.brand == null || this.type == null || this.lokasi_trade == null || this.model == null)) {
                this.utilsService.showToast("Lengkapi pengisian form.");
            }
            else if ((this.condition == "Mati")) {
                const modalAlert = yield this.modalController.create({
                    component: src_app_pages_landing_modal_alarm_unit_tolak_alarm_unit_tolak_component__WEBPACK_IMPORTED_MODULE_13__["AlarmUnitTolakComponent"],
                    cssClass: 'my-custom-modal-tolak-css',
                    backdropDismiss: false,
                    id: 'my-modal-id'
                });
                return yield modalAlert.present();
            }
            else {
                const modalAlert = yield this.modalController.create({
                    component: src_app_pages_landing_modal_modal_kulkas_modal_form_kulkas_modal_form_kulkas_component__WEBPACK_IMPORTED_MODULE_12__["ModalFormKulkasComponent"],
                    cssClass: 'my-custom-modal-tolak-css',
                    backdropDismiss: false,
                    id: 'my-modal-id',
                    componentProps: {
                        brand: this.brand,
                        type: this.type,
                        model: this.model,
                        condition: this.condition,
                        kondisi_fisik: this.kondisi_fisik,
                        rubber: this.rubber,
                        tutup_freezer: this.tutup_freezer,
                        tray: this.tray,
                        ice_maker: this.ice_maker,
                        lokasi_trade: this.lokasi_trade
                    }
                });
                return yield modalAlert.present();
            }
        });
    }
    // submit() {
    //   if ((this.brand == null || this.type == null || this.lokasi_trade == null || this.model == null ) || (this.brand.replace(/\s/g, "") == "")){
    //     this.utilsService.showToast("Lengkapi pengisian form.");
    //   } 
    //   else if((this.condition == "Mati Total")){
    //     alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
    //   } 
    //   else {
    //     this.presentAlertConfirm();
    //   }
    // } 
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Apakah data yang di pilih sudah sesuai dengan kondisi yang sebenarnya?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: () => { }
                    }, {
                        text: 'Lanjut',
                        handler: () => {
                            let navigationExtras = {
                                queryParams: {
                                    brand: this.brand,
                                    type: this.type,
                                    model: this.model,
                                    condition: this.condition,
                                    kondisi_fisik: this.kondisi_fisik,
                                    rubber: this.rubber,
                                    tutup_freezer: this.tutup_freezer,
                                    tray: this.tray,
                                    ice_maker: this.ice_maker,
                                    lokasi_trade: this.lokasi_trade
                                }
                            };
                            this.navCtrl.navigateForward(["/landing/kulkas-brand/detail-kulkas"], navigationExtras);
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
};
KulkasBrandPage.ctorParameters = () => [
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__["MembershipApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__["SellingApiService"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_8__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
KulkasBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kulkas-brand',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./kulkas-brand.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./kulkas-brand.page.scss */ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.page.scss")).default]
    })
], KulkasBrandPage);



/***/ })

}]);
//# sourceMappingURL=selling-kulkas-kulkas-brand-kulkas-brand-module-es2015.js.map