(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"widht\">\n    <div class=\"right\">\n      <ion-icon class=\"icon\" name=\"close\" (click)=\"dismissModal()\"></ion-icon>\n    </div>\n  </div>\n  <div class=\"desk\">\n    <div class=\"center\">\n      <img class=\"img\" src=\"../../../../assets/icon/note-2xxhdpi.png\" alt=\"\">\n      <!-- <ion-icon class=\"alart\" name=\"alert\"></ion-icon> -->\n      <br>\n      <ion-label class=\"t1\">Pastikan data kamu sudah benar</ion-label>\n      <br>\n      <p class=\"t2\">Apakah kamu yakin ingin melanjutkan ke proses berikutnya?</p>\n      <div class=\"btn\">\n        <ion-button style=\"width: 100%; height: 45px;\" shape=\"round\" (click)=\"openModalNext($event)\">Ya, Lanjutkan</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-item>\n    <ion-label class=\"title\">Estimated Price</ion-label>\n    <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon>\n  </ion-item>\n  <div class=\"desk\">\n    <ion-card class=\"cardgrid\">\n      <div class=\"img_kanan\">\n        <img src=\"../../../../assets/images/baru/coin-bgxhdpi.png\" alt=\"\">\n      </div>\n      <div style=\"margin-top: 10px; margin-left: 10px;\">\n        <ion-label class=\"t1\">IDR {{formatPrice}}</ion-label>\n        <p class=\"t2\" style=\"margin-right: 10px;\">Harga akan berubah sesuai kondisi unit yang sebenarnya setelah dilakukan pengecekkan oleh tim kami</p>\n      </div>\n    </ion-card>\n    <div class=\"btn\">\n      <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"submit()\">Setuju dan Submit</ion-button> \n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"header\">\r\n    <div class=\"card-backgroud\">\r\n      <img src=\"../../../../assets/images/header/cuci.png\" alt=\"\">\r\n      <div class=\"img_kanan\">\r\n        <img src=\"../../../../assets/images/baru/form-mesin-cucixhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"img_kiri\" routerLink=\"/landing/type\">\r\n        <div class=\"icon\">\r\n          <ion-icon class=\"ic_back\" name=\"arrow-back-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"title\">\r\n        Trade Mesin Cuci\r\n      </div>\r\n      <div class=\"subtitle\">\r\n        Silahkan isi data dibawah ini\r\n      </div>\r\n    </div>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <div class=\"content\">\r\n        <div class=\"itemBorder\">\r\n          <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Pilih tempat melakukan Trade In\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"this.lokasi_trade = $event.target.value\">\r\n            <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div class=\"t1\" style=\"margin-top: 30px;\">\r\n          Pilih Merk\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"LG\" class=\"cuci-merk-select\" (click)=\"selectMerk('LG')\">\r\n                <img src=\"../../../../assets/sponsor/lg_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">LG</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Sharp\" class=\"cuci-merk-select\" (click)=\"selectMerk('Sharp')\">\r\n                <img src=\"../../../../assets/sponsor/sharp.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Sharp</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Sony\" class=\"cuci-merk-select\" (click)=\"selectMerk('Sony')\">\r\n                <img src=\"../../../../assets/sponsor/sony_lg.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Sony</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Samsung\" class=\"cuci-merk-select\" (click)=\"selectMerk('Samsung')\">\r\n                <img src=\"../../../../assets/sponsor/samsung_lg.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Samsung</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Xiaomi\" class=\"cuci-merk-select\" (click)=\"selectMerk('Xiaomi')\">\r\n                <img src=\"../../../../assets/sponsor/mi.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Xiaomi</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Panasonic\" class=\"cuci-merk-select\" (click)=\"selectMerk('Panasonic')\">\r\n                <img src=\"../../../../assets/sponsor/panasonic.png\" alt=\"\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Panasonic</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <!-- <div id=\"hide\" hidden=\"true\">\r\n          <ion-grid style=\"margin-top: 14px\">\r\n            <ion-row>\r\n              <ion-col size-md=\"4\">\r\n                <ion-card id=\"razer\" class=\"cuci-merk-select\" (click)=\"selectMerk('razer')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/razer.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Razer</ion-label>\r\n                </ion-card>\r\n              </ion-col>\r\n              <ion-col size-md=\"4\">\r\n                <ion-card id=\"apple\" class=\"cuci-merk-select\" (click)=\"selectMerk('apple')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/apple.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Apple</ion-label>\r\n                </ion-card>\r\n              </ion-col> \r\n              <ion-col size-md=\"4\">\r\n                <ion-card id=\"alienware\" class=\"cuci-merk-select\" (click)=\"selectMerk('alienware')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/alienware.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Alienware</ion-label>\r\n                </ion-card>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div> -->\r\n        <div class=\"show\" style=\"margin-top: 14px\" (click)=\"showMore()\">\r\n          <a>Show more brand</a> <ion-icon class=\"ic_drop\" name=\"caret-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Tipe\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"Front Loading\" class=\"cuci-tipe-select\" (click)=\"selectTipe('Front Loading')\">\r\n                <ion-label>Front Loading</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"Upper Loading\" class=\"cuci-tipe-select\" (click)=\"selectTipe('Upper Loading')\">\r\n                <ion-label>Upper Loading</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <!-- <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Model\r\n        </div> -->\r\n\r\n        <!-- <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"one\" class=\"cuci-model-select\" (click)=\"selectModel('one')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">1 Pintu</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"two\" class=\"cuci-model-select\" (click)=\"selectModel('two')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">2 Pintu</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid> -->\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kondisi Fisik\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Mulus\" class=\"cuci-fisik-select\" (click)=\"selectFisik('Mulus')\">\r\n                <ion-label>Mulus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Lecet\" class=\"cuci-fisik-select\" (click)=\"selectFisik('Lecet')\">\r\n                <ion-label>Lecet</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Penyok\" class=\"cuci-fisik-select\" (click)=\"selectFisik('Penyok')\">\r\n                <ion-label>Penyok</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <hr>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Mesin Cuci Menyala</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiMesinCuci\" (ionChange)=\"toggleKondisiMesinCuci()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Rubber Kaki Mesin Cuci Lengkap</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiRubber\" (ionChange)=\"toggleRubber()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Tombol Mesin Cuci Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTombol\" (ionChange)=\"toggleKondisiTombol()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Tutup pada Mesin Cuci Berfungsi</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTutup\" (ionChange)=\"toggleKondisiTutup()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Pembuangan Air Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiPembuangan\" (ionChange)=\"togglePembuangan()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Pengering Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiPengering\" (ionChange)=\"togglePengering()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Air Otomatis Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiAirOtomatis\" (ionChange)=\"toggleAirOtomatis()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Pemanas Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiPemanas\" (ionChange)=\"togglePemanas()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <div class=\"btn\">\r\n          <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"submit($event)\">Submit</ion-button>\r\n        </div>\r\n        \r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.widht {\n  width: 100px;\n  height: 20px;\n}\n\n.right {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 7%;\n  left: 90%;\n}\n\n.img {\n  height: 70px;\n  width: 70px;\n  margin-bottom: 10px;\n}\n\n.icon {\n  width: 6%;\n  height: 8%;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.center {\n  text-align: center;\n}\n\n.alart {\n  width: 35px;\n  height: 35px;\n  padding: 3%;\n  background-color: red;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n}\n\n.btn {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1tZXNpbmN1Y2kvbW9kYWwtZm9ybS1tZXNpbmN1Y2kvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG1vZGFsXFxtb2RhbC1tZXNpbmN1Y2lcXG1vZGFsLWZvcm0tbWVzaW5jdWNpXFxtb2RhbC1mb3JtLW1lc2luY3VjaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1tZXNpbmN1Y2kvbW9kYWwtZm9ybS1tZXNpbmN1Y2kvbW9kYWwtZm9ybS1tZXNpbmN1Y2kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtbWVzaW5jdWNpL21vZGFsLWZvcm0tbWVzaW5jdWNpL21vZGFsLWZvcm0tbWVzaW5jdWNpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG59XHJcblxyXG4ud2lkaHR7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiA3JTtcclxuICAgIGxlZnQ6IDkwJTtcclxufVxyXG5cclxuLmltZ3tcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDogNiU7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG59XHJcblxyXG4uZGVza3tcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWxhcnR7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4udDEge1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnQyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn0iLCJpb24taWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG59XG5cbi53aWRodCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ucmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogNyU7XG4gIGxlZnQ6IDkwJTtcbn1cblxuLmltZyB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDYlO1xuICBoZWlnaHQ6IDglO1xufVxuXG4uZGVzayB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWxhcnQge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4udDEge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50MiB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ModalFormMesincuciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFormMesincuciComponent", function() { return ModalFormMesincuciComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_landing_modal_modal_mesincuci_modal_price_mesincuci_modal_price_mesincuci_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component */ "./src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component.ts");




let ModalFormMesincuciComponent = class ModalFormMesincuciComponent {
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
                component: src_app_pages_landing_modal_modal_mesincuci_modal_price_mesincuci_modal_price_mesincuci_component__WEBPACK_IMPORTED_MODULE_3__["ModalPriceMesincuciComponent"],
                cssClass: 'my-custom-modal-price-css',
                backdropDismiss: false,
                id: 'my-modal-id',
                componentProps: {
                    brand: this.brand,
                    type: this.type,
                    condition: this.condition,
                    kondisi_fisik: this.kondisi_fisik,
                    rubber: this.rubber,
                    tutup: this.tutup,
                    tombol: this.tombol,
                    pembuangan: this.pembuangan,
                    pengering: this.pengering,
                    air_otomatis: this.air_otomatis,
                    pemanas: this.pemanas,
                    lokasi_trade: this.lokasi_trade
                },
            });
            return yield modalSubmit.present();
        });
    }
};
ModalFormMesincuciComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalFormMesincuciComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-form-mesincuci',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-form-mesincuci.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-form-mesincuci.component.scss */ "./src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component.scss")).default]
    })
], ModalFormMesincuciComponent);



/***/ }),

/***/ "./src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desk {\n  padding: 3%;\n}\n\n.img_kanan {\n  position: absolute;\n  top: 0;\n  left: 60%;\n  height: 100%;\n}\n\n.title {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 28px;\n  color: black;\n}\n\n.t2 {\n  margin-top: 3%;\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  color: black;\n  text-align: justify;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cardgrid {\n  background: #ffed8b;\n  padding: 4%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1tZXNpbmN1Y2kvbW9kYWwtcHJpY2UtbWVzaW5jdWNpL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxtb2RhbFxcbW9kYWwtbWVzaW5jdWNpXFxtb2RhbC1wcmljZS1tZXNpbmN1Y2lcXG1vZGFsLXByaWNlLW1lc2luY3VjaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1tZXNpbmN1Y2kvbW9kYWwtcHJpY2UtbWVzaW5jdWNpL21vZGFsLXByaWNlLW1lc2luY3VjaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1tZXNpbmN1Y2kvbW9kYWwtcHJpY2UtbWVzaW5jdWNpL21vZGFsLXByaWNlLW1lc2luY3VjaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxufVxyXG5cclxuLmRlc2t7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxufVxyXG5cclxuLmltZ19rYW5hbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50MSB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udDIge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZGdyaWR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjM3LCAxMzksIDEpO1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9IiwiaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xufVxuXG4uZGVzayB7XG4gIHBhZGRpbmc6IDMlO1xufVxuXG4uaW1nX2thbmFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnQyIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZGdyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmZlZDhiO1xuICBwYWRkaW5nOiA0JTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ModalPriceMesincuciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPriceMesincuciComponent", function() { return ModalPriceMesincuciComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");











let ModalPriceMesincuciComponent = class ModalPriceMesincuciComponent {
    constructor(selling, router, storage, sellingApiService, activatedRoute, utilsService, localNotifications, ModalController) {
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
    ngOnInit() {
        this.getData();
    }
    dismissModal() {
        this.ModalController.dismiss({
            'dismissed': true
        });
    }
    getData() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            let data = {
                brand: this.brand,
                type: this.type,
            };
            // console.log(deviceActivity)
            this.sellingApiService.getMesinCuciDetail(token, data).subscribe((response) => {
                this.response = response,
                    this.price = this.response.data,
                    this.formatPrice = new Intl.NumberFormat('id-ID').format(this.response.data);
            });
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
                let data = {
                    brand: this.brand,
                    type: this.type,
                    condition: this.condition,
                    kondisi_fisik: this.kondisi_fisik,
                    rubber: this.rubber,
                    tutup: this.tutup,
                    tombol: this.tombol,
                    pembuangan: this.pembuangan,
                    pengering: this.pengering,
                    air_otomatis: this.air_otomatis,
                    pemanas: this.pemanas,
                    lokasi_trade: this.lokasi_trade,
                    price: this.price
                };
                this.sellingApiService.sellMesinCuci(token, data).subscribe((success) => {
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
ModalPriceMesincuciComponent.ctorParameters = () => [
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_3__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__["SellingApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] }
];
ModalPriceMesincuciComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-price-mesincuci',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-price-mesincuci.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-price-mesincuci.component.scss */ "./src/app/pages/landing/modal/modal-mesincuci/modal-price-mesincuci/modal-price-mesincuci.component.scss")).default]
    })
], ModalPriceMesincuciComponent);



/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: MesinCuciBrandPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPageRoutingModule", function() { return MesinCuciBrandPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mesin-cuci-brand.page */ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts");




const routes = [
    {
        path: '',
        component: _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_3__["MesinCuciBrandPage"]
    }
];
let MesinCuciBrandPageRoutingModule = class MesinCuciBrandPageRoutingModule {
};
MesinCuciBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MesinCuciBrandPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: MesinCuciBrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPageModule", function() { return MesinCuciBrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mesin_cuci_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mesin-cuci-brand-routing.module */ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts");
/* harmony import */ var _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mesin-cuci-brand.page */ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts");







let MesinCuciBrandPageModule = class MesinCuciBrandPageModule {
};
MesinCuciBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mesin_cuci_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["MesinCuciBrandPageRoutingModule"]
        ],
        declarations: [_mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_6__["MesinCuciBrandPage"]]
    })
], MesinCuciBrandPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.header.bottom {\n  bottom: 0px;\n}\nion-content {\n  --background: linear-gradient(to left, #e4f6fd 30%, #fff 70%);\n}\n.main-menu {\n  background-color: #fff;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.content {\n  padding: 5%;\n}\n.labelSelect {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 14px;\n}\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  top: 2%;\n  bottom: -10%;\n}\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 25%;\n  left: 78%;\n  height: 200%;\n}\n.card-backgroud .img_kiri {\n  position: absolute;\n  top: 7%;\n  left: 5%;\n  height: 200%;\n}\n.card-backgroud .title {\n  position: absolute;\n  top: 40%;\n  left: 5%;\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 800;\n  font-size: 30px;\n  color: black;\n}\n.card-backgroud .subtitle {\n  position: absolute;\n  top: 60%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-size: 18px;\n  color: black;\n}\n.t1 {\n  font-family: Plus Jakarta Sans Extra;\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  text-align: left;\n}\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: left;\n}\n.itemBorder {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.itemBorder2 {\n  margin-top: 10%;\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-select {\n  max-width: 100%;\n  text-align: left !important;\n  color: black;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n.selected {\n  background: #eaf5ff;\n  border: 1px solid #045fc4;\n}\n.cuci-merk-select {\n  margin-left: 0;\n  margin-top: 3%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.cuci-tipe-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 9%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.cuci-model-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.cuci-fisik-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.toggle {\n  margin-left: 0;\n  margin-top: 5%;\n}\n.toggle2 {\n  margin-left: 0;\n  margin-top: 0;\n}\nion-item::part(native) {\n  --padding-start: 0 !important;\n  --inner-padding-end: 0 !important;\n}\nhr {\n  border-bottom: 2px solid #EBEBEB;\n}\nhr:after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #EBEBEB;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n.radio.head {\n  margin-left: 0;\n}\n.radio {\n  margin-left: 0;\n}\n.show {\n  color: black;\n  padding-left: 10px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n.ic_drop {\n  margin-left: 6px;\n}\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n  margin-top: 5%;\n}\nion-grid {\n  padding: 0 !important;\n}\nion-toggle {\n  height: 50%;\n  width: 13%;\n  --handle-width: 50%;\n}\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n}\n.ic_back {\n  font-size: 25px;\n  color: #045fc4;\n}\nhr {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvbWVzaW4tY3VjaS1icmFuZC9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2VsbGluZy1tZXNpbi1jdWNpXFxtZXNpbi1jdWNpLWJyYW5kXFxtZXNpbi1jdWNpLWJyYW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvbWVzaW4tY3VjaS1icmFuZC9tZXNpbi1jdWNpLWJyYW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUNDRjtBRENFO0VBQ0UsUUFBQTtFQUNBLDRCQUFBO0FDQ0o7QURFRTtFQUNBLFdBQUE7QUNBRjtBRElBO0VBQ0UsNkRBQUE7QUNERjtBREtBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNGRjtBRE1BO0VBQ0UsV0FBQTtBQ0hGO0FETUE7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNIRjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNISjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNKSjtBRE9FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0xKO0FEUUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ05KO0FEVUE7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDUEY7QURVQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDUEY7QURVQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDUEY7QURVQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNQRjtBRFVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ1BGO0FEVUE7RUFDRSw2QkFBQTtFQUNBLGlDQUFBO0FDUEY7QURVQTtFQUNFLGdDQUFBO0FDUEY7QURVQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0FDUEY7QURVQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGdCQUFBO0FDUEY7QURVQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQRjtBRFVBO0VBQ0UscUJBQUE7QUNQRjtBRFVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ1BGO0FEVUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctbWVzaW4tY3VjaS9tZXNpbi1jdWNpLWJyYW5kL21lc2luLWN1Y2ktYnJhbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuIFxyXG4gICYudG9wIHtcclxuICAgIHRvcDogIDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgfVxyXG5cclxuICAmLmJvdHRvbSB7XHJcbiAgYm90dG9tOiAwcHg7IFxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2U0ZjZmZCAzMCUsICNmZmYgNzAlKTtcclxuICBcclxufVxyXG5cclxuLm1haW4tbWVudXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDsgXHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmxhYmVsU2VsZWN0e1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3Vke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0b3A6IDIlO1xyXG4gIGJvdHRvbTogLTEwJTtcclxuXHJcbiAgLmltZ19rYW5hbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgbGVmdDogNzglO1xyXG4gICAgaGVpZ2h0OiAyMDAlO1xyXG4gIH1cclxuXHJcbiAgLmltZ19raXJpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3JTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiAyMDAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4udDF7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udDJ7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaXRlbUJvcmRlcntcclxuICBib3JkZXI6IHJnYmEoMjM1LCAyMzUsIDIzNSwgMSkgc29saWQgMXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLml0ZW1Cb3JkZXIye1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBib3JkZXI6IHJnYmEoMjM1LCAyMzUsIDIzNSwgMSkgc29saWQgMXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbil7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNlbGVjdGVke1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyNDUsIDI1NSwgMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0LCA5NSwgMTk2LCAxKTtcclxufVxyXG5cclxuLmN1Y2ktbWVyay1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uY3VjaS10aXBlLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiA5JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmN1Y2ktbW9kZWwtc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDExJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmN1Y2ktZmlzaWstc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnRvZ2dsZXtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnRvZ2dsZTJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKXtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDsgXHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XHJcbn1cclxuXHJcbmhyOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcclxuICBtYXJnaW4tYm90dG9tOiAtMnB4OyBcclxuICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnJhZGlvLmhlYWR7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5yYWRpb3tcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLnNob3d7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5pY19kcm9we1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9nZ2xle1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMyU7XHJcbiAgLS1oYW5kbGUtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAyMzgsIDI0NSwgMSk7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5pY19iYWNrIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbn1cclxuXHJcbmhye1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufSIsIi5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uaGVhZGVyLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuLmhlYWRlci5ib3R0b20ge1xuICBib3R0b206IDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZTRmNmZkIDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmxhYmVsU2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJkLWJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRvcDogMiU7XG4gIGJvdHRvbTogLTEwJTtcbn1cbi5jYXJkLWJhY2tncm91ZCAuaW1nX2thbmFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1JTtcbiAgbGVmdDogNzglO1xuICBoZWlnaHQ6IDIwMCU7XG59XG4uY2FyZC1iYWNrZ3JvdWQgLmltZ19raXJpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDclO1xuICBsZWZ0OiA1JTtcbiAgaGVpZ2h0OiAyMDAlO1xufVxuLmNhcmQtYmFja2dyb3VkIC50aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNhcmQtYmFja2dyb3VkIC5zdWJ0aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIGxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udDEge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udDIge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaXRlbUJvcmRlciB7XG4gIGJvcmRlcjogI2ViZWJlYiBzb2xpZCAxcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG4uaXRlbUJvcmRlcjIge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGJvcmRlcjogI2ViZWJlYiBzb2xpZCAxcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cblxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2VhZjVmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0NWZjNDtcbn1cblxuLmN1Y2ktbWVyay1zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY3VjaS10aXBlLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogOSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5jdWNpLW1vZGVsLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTElO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY3VjaS1maXNpay1zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnRvZ2dsZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnRvZ2dsZTIge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XG59XG5cbmhyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLnJhZGlvLmhlYWQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnJhZGlvIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zaG93IHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaWNfZHJvcCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0JTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvZ2dsZSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTMlO1xuICAtLWhhbmRsZS13aWR0aDogNTAlO1xufVxuXG4uaWNvbiB7XG4gIGJhY2tncm91bmQ6ICNlYmVlZjU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5pY19iYWNrIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzA0NWZjNDtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts ***!
  \********************************************************************************************/
/*! exports provided: MesinCuciBrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPage", function() { return MesinCuciBrandPage; });
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
/* harmony import */ var src_app_pages_landing_modal_modal_mesincuci_modal_form_mesincuci_modal_form_mesincuci_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component */ "./src/app/pages/landing/modal/modal-mesincuci/modal-form-mesincuci/modal-form-mesincuci.component.ts");
/* harmony import */ var _modal_alarm_unit_tolak_alarm_unit_tolak_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modal/alarm-unit-tolak/alarm-unit-tolak.component */ "./src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component.ts");

















let MesinCuciBrandPage = class MesinCuciBrandPage {
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
        this.data_type = [];
        this.stores = [];
        this.kondisiMesinCuci = false;
        this.kondisiRubber = false;
        this.kondisiTombol = false;
        this.kondisiPembuangan = false;
        this.kondisiPengering = false;
        this.kondisiAirOtomatis = false;
        this.kondisiPemanas = false;
        this.kondisiTutup = false;
        this.showHidden = true;
        this.customPopoverOptions = {
            header: 'Pilih Tempat Trade In',
            message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
        };
    }
    ngOnInit() {
        this.toggleAirOtomatis();
        this.toggleKondisiMesinCuci();
        this.toggleKondisiTombol();
        this.togglePemanas();
        this.togglePembuangan();
        this.togglePengering();
        this.toggleRubber();
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
        document.querySelectorAll('.cuci-merk-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectTipe(val) {
        this.type = val;
        document.querySelectorAll('.cuci-tipe-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    // selectModel(val){
    //   this.selected_model = val;
    //   document.querySelectorAll('.cuci-model-select').forEach(element => {
    //     element.classList.remove("selected");
    //   });
    //   var element = document.getElementById(val);
    //   element.classList.add("selected");
    // }
    selectFisik(val) {
        this.kondisi_fisik = val;
        document.querySelectorAll('.cuci-fisik-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    toggleKondisiMesinCuci() {
        if (this.kondisiMesinCuci == true) {
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
    toggleKondisiTombol() {
        if (this.kondisiTombol == true) {
            this.tombol = 'Berfungsi Normal';
        }
        else {
            this.tombol = 'Tidak Berfungsi Normal';
        }
    }
    togglePembuangan() {
        if (this.kondisiPembuangan == true) {
            this.pembuangan = 'Berfungsi';
        }
        else {
            this.pembuangan = 'Tidak Berfungsi';
        }
    }
    togglePengering() {
        if (this.kondisiPengering == true) {
            this.pengering = 'Berfungsi';
        }
        else {
            this.pengering = 'Tidak Berfungsi';
        }
    }
    toggleAirOtomatis() {
        if (this.kondisiAirOtomatis == true) {
            this.air_otomatis = 'Berfungsi';
        }
        else {
            this.air_otomatis = 'Tidak Berfungsi';
        }
    }
    togglePemanas() {
        if (this.kondisiPemanas == true) {
            this.pemanas = 'Berfungsi';
        }
        else {
            this.pemanas = 'Tidak Berfungsi';
        }
    }
    toggleKondisiTutup() {
        if (this.kondisiTutup == true) {
            this.tutup = 'Berfungsi';
        }
        else {
            this.tutup = 'Tidak Berfungsi';
        }
    }
    getStore() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then((token) => {
            this.sellingApiService.getStore(token).subscribe((response) => {
                this.stores = response.data.store;
                console.log(this.stores);
            }, (err) => {
                this.stores = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    getBrand() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then((token) => {
            this.sellingApiService.getBrandMesinCuci(token).subscribe((response) => {
                this.data_brand = response.data.brand;
                this.data_type = response.data.type;
                console.log(this.data_brand);
            }, (err) => {
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if ((this.brand == null || this.type == null || this.lokasi_trade == null)) {
                this.utilsService.showToast("Lengkapi pengisian form.");
            }
            else if ((this.condition == "Mati")) {
                const modalAlert = yield this.modalController.create({
                    component: _modal_alarm_unit_tolak_alarm_unit_tolak_component__WEBPACK_IMPORTED_MODULE_13__["AlarmUnitTolakComponent"],
                    cssClass: 'my-custom-modal-tolak-css',
                    backdropDismiss: false,
                    id: 'my-modal-id'
                });
                return yield modalAlert.present();
            }
            else {
                const modalAlert = yield this.modalController.create({
                    component: src_app_pages_landing_modal_modal_mesincuci_modal_form_mesincuci_modal_form_mesincuci_component__WEBPACK_IMPORTED_MODULE_12__["ModalFormMesincuciComponent"],
                    cssClass: 'my-custom-modal-tolak-css',
                    backdropDismiss: false,
                    id: 'my-modal-id',
                    componentProps: {
                        brand: this.brand,
                        type: this.type,
                        condition: this.condition,
                        kondisi_fisik: this.kondisi_fisik,
                        rubber: this.rubber,
                        tutup: this.tutup,
                        tombol: this.tombol,
                        pembuangan: this.pembuangan,
                        pengering: this.pengering,
                        air_otomatis: this.air_otomatis,
                        pemanas: this.pemanas,
                        lokasi_trade: this.lokasi_trade
                    }
                });
                return yield modalAlert.present();
            }
        });
    }
    // submit() {
    //   if ((this.brand == null || this.type == null || this.lokasi_trade == null ) || (this.brand.replace(/\s/g, "") == "")){
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
                                    condition: this.condition,
                                    kondisi_fisik: this.kondisi_fisik,
                                    rubber: this.rubber,
                                    tutup: this.tutup,
                                    tombol: this.tombol,
                                    pembuangan: this.pembuangan,
                                    pengering: this.pengering,
                                    air_otomatis: this.air_otomatis,
                                    pemanas: this.pemanas,
                                    lokasi_trade: this.lokasi_trade
                                }
                            };
                            this.navCtrl.navigateForward(["/landing/mesin-cuci-brand/detail-mesin-cuci"], navigationExtras);
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
};
MesinCuciBrandPage.ctorParameters = () => [
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
MesinCuciBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mesin-cuci-brand',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mesin-cuci-brand.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mesin-cuci-brand.page.scss */ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss")).default]
    })
], MesinCuciBrandPage);



/***/ })

}]);
//# sourceMappingURL=selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module-es2015.js.map