(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-tv-tv-brand-tv-brand-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"widht\">\r\n    <div class=\"right\">\r\n      <ion-icon class=\"icon\" name=\"close\" (click)=\"dismissModal()\"></ion-icon>\r\n    </div>\r\n  </div>\r\n  <div class=\"desk\">\r\n    <div class=\"left\">\r\n      <img class=\"img\" src=\"../../../../assets/images/baru/lampthink.png\" alt=\"\">\r\n      <!-- <ion-icon class=\"alart\" name=\"alert\"></ion-icon> -->\r\n      <br>\r\n      <ion-label class=\"t1\">Harap diperhatikan</ion-label>\r\n      <br>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-1\">\r\n          <ion-icon class=\"alart\" name=\"checkmark\"></ion-icon>\r\n        </div>\r\n        <div class=\"col\">\r\n          <p class=\"t2\">Pastikan kamu mengisi data sesuai dengan benar dan sesuai dengan kondisi yang sebenarnya</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-1\">\r\n          <ion-icon class=\"alart\" name=\"checkmark\"></ion-icon>\r\n        </div>\r\n        <div class=\"col\">\r\n          <p class=\"t2\">Perbedaan data akan mempengaruhi harga akhir setelah pengecekan</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-1\">\r\n          <ion-icon class=\"alart\" name=\"checkmark\"></ion-icon>\r\n        </div>\r\n        <div class=\"col\">\r\n          <p class=\"t2\">Pengecekan akan dilakukan setelah kamu berhasil submit data</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-1\">\r\n          <ion-icon class=\"alart\" name=\"checkmark\"></ion-icon>\r\n        </div>\r\n        <div class=\"col\">\r\n          <p class=\"t2\">Setelah dilakukan pengecekan barang, maka akan mendapatkan hasil</p>\r\n        </div>\r\n      </div>\r\n      <ion-item class=\"check\" lines=\"none\">\r\n        <ion-label class=\"t2\">Jangan tampilkan lagi</ion-label>\r\n        <ion-checkbox color=\"primary\" mode=\"ios\" slot=\"start\" [(ngModel)]=\"agree\" (ionChange)=\"checkboxClick()\"></ion-checkbox>\r\n      </ion-item>\r\n      <div class=\"btn\">\r\n        <ion-button style=\"width: 100%; height: 45px;\" shape=\"round\" (click)=\"submit()\">Ok, Mengerti</ion-button>\r\n      </div> \r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"widht\">\n    <div class=\"right\">\n      <ion-icon class=\"icon\" name=\"close\" (click)=\"dismissModal()\"></ion-icon>\n    </div>\n  </div>\n  <div class=\"desk\">\n    <div class=\"center\">\n      <img class=\"img\" src=\"../../../../assets/icon/note-2xxhdpi.png\" alt=\"\">\n      <!-- <ion-icon class=\"alart\" name=\"alert\"></ion-icon> -->\n      <br>\n      <ion-label class=\"t1\">Pastikan data kamu sudah benar</ion-label>\n      <br>\n      <p class=\"t2\">Apakah kamu yakin ingin melanjutkan ke proses berikutnya?</p>\n      <div class=\"btn\">\n        <ion-button style=\"width: 100%; height: 45px;\" shape=\"round\" (click)=\"openModalNext($event)\">Lanjutkan</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-item>\n    <ion-label class=\"title\">Estimated Price</ion-label>\n    <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon>\n  </ion-item>\n  <div class=\"desk\">\n    <ion-card class=\"cardgrid\">\n      <div class=\"img_kanan\">\n        <img src=\"../../../../assets/images/baru/coin-bgxhdpi.png\" alt=\"\">\n      </div>\n      <div style=\"margin-top: 10px; margin-left: 10px;\">\n        <ion-label class=\"t1\">IDR {{formatPrice}}</ion-label>\n        <p class=\"t2\" style=\"margin-right: 10px;\">Harga akan berubah sesuai kondisi unit yang sebenarnya setelah dilakukan pengecekkan oleh tim kami</p>\n      </div>\n    </ion-card>\n    <div class=\"btn\">\n      <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"submit()\">Setuju dan Submit</ion-button> \n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"header\">\r\n    <div class=\"card-backgroud\">\r\n      <img src=\"../../../../assets/images/header/tv.png\" alt=\"\">\r\n      <div class=\"img_kanan\">\r\n        <img src=\"../../../../assets/images/baru/form-tvxhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"img_kiri\" routerLink=\"/landing/type\">\r\n        <div class=\"icon\">\r\n          <ion-icon class=\"ic_back\" name=\"arrow-back-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"title\">\r\n        Trade TV\r\n      </div>\r\n      <div class=\"subtitle\">\r\n        Silahkan isi data dibawah ini\r\n      </div>\r\n    </div>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <div class=\"content\">\r\n        <div class=\"itemBorder\">\r\n          <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Pilih tempat melakukan Trade In\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"this.lokasi_trade = $event.target.value\">\r\n            <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div class=\"t1\" style=\"margin-top: 30px;\">\r\n          Pilih Merk\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"LG\" class=\"tv-merk-select\" (click)=\"selectMerk('LG')\">\r\n                <img src=\"../../../../assets/sponsor/lg_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">LG</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Sharp\" class=\"tv-merk-select\" (click)=\"selectMerk('Sharp')\">\r\n                <img src=\"../../../../assets/sponsor/sharp.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Sharp</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\" offset-md=\"3\">\r\n              <ion-card id=\"Sony\" class=\"tv-merk-select\" (click)=\"selectMerk('Sony')\">\r\n                <img src=\"../../../../assets/sponsor/sony_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Sony</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Samsung\" class=\"tv-merk-select\" (click)=\"selectMerk('Samsung')\">\r\n                <img src=\"../../../../assets/sponsor/samsung_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Samsung</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"Xiaomi\" class=\"tv-merk-select\" (click)=\"selectMerk('Xiaomi')\">\r\n                <img src=\"../../../../assets/sponsor/mi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Xiaomi</ion-label> \r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\" offset-md=\"3\">\r\n              <ion-card id=\"Panasonic\" class=\"tv-merk-select\" (click)=\"selectMerk('Panasonic')\">\r\n                <img src=\"../../../../assets/sponsor/panasonic.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Panasonic</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n         <div id=\"hide\" hidden=\"true\">\r\n          <!-- <ion-grid style=\"margin-top: 14px\">\r\n            <ion-row>\r\n              <ion-col size-md=\"4\">\r\n                <ion-card id=\"razer\" class=\"tv-merk-select\" (click)=\"selectMerk('razer')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/razer.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Razer</ion-label>\r\n                </ion-card>\r\n              </ion-col>\r\n              <ion-col size-md=\"4\">\r\n                <ion-card id=\"apple\" class=\"tv-merk-select\" (click)=\"selectMerk('apple')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/apple.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Apple</ion-label>\r\n                </ion-card>\r\n              </ion-col> \r\n              <ion-col size-md=\"4\">\r\n                <ion-card id=\"alienware\" class=\"tv-merk-select\" (click)=\"selectMerk('alienware')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/alienware.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Alienware</ion-label>\r\n                </ion-card>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid> -->\r\n        </div>\r\n        \r\n        <div class=\"show\" style=\"margin-top: 14px\" (click)=\"showMore()\" id=\"hides\">\r\n          <a>Show more brand</a> <ion-icon class=\"ic_drop\" name=\"caret-down-outline\"></ion-icon>\r\n        </div> \r\n        \r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Jenis TV\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"LED\" class=\"tv-jenis-select\" (click)=\"selectJenis('LED')\">\r\n                <ion-label>LED</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"Smart TV\" class=\"tv-jenis-select\" (click)=\"selectJenis('Smart TV')\">\r\n                <ion-label>Smart TV</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Ukuran\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"32\" class=\"tv-ukuran-select\" (click)=\"selectUkuran('32')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">32\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"40\" class=\"tv-ukuran-select\" (click)=\"selectUkuran('40')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">40\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\" offset-md=\"3\">\r\n              <ion-card id=\"42\" class=\"tv-ukuran-select\" (click)=\"selectUkuran('42')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">42\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"55\" class=\"tv-ukuran-select\" (click)=\"selectUkuran('55')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">55\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t1\" style=\"margin-top: 25px;\">\r\n          Kondisi Layar TV\r\n        </div>\r\n\r\n        <ion-radio-group (ionChange)=\"radioSelectLayar($event)\" style=\"margin-top: 14px\">\r\n          <ion-item class=\"radio head\" lines=\"none\">\r\n            <ion-label class=\"t2\">Normal</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Normal\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Layar Bergaris</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Layar Bergaris\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Whitespot/Titik Hitam</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Whitespot/Titik Hitam\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">LCD Pecah</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"LCD Pecah\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        <hr>\r\n\r\n        <ion-item class=\"toggle\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi TV Menyala</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTV\" (ionChange)=\"toggleKondisiTV()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <!-- outer screen -->\r\n        <ion-item class=\"toggle\" lines=\"none\">\r\n          <ion-label class=\"t2\">Layar Luar Tidak Tergores</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiLayarGores\" (ionChange)=\"toggleOuterScreen()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <!-- inner screen -->\r\n        <ion-item class=\"toggle\" lines=\"none\">\r\n          <ion-label class=\"t2\">Layar Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiNormal\" (ionChange)=\"toggleInnerScreen()\"></ion-toggle>\r\n        </ion-item>\r\n        <hr>\r\n\r\n        <div class=\"t1\" style=\"margin-top: 25px;\">\r\n          Kondisi Body TV\r\n        </div>\r\n\r\n        <ion-radio-group style=\"margin-top: 14px\" (ionChange)=\"radioSelectBody($event)\">\r\n          <ion-item class=\"radio head\" lines=\"none\">\r\n            <ion-label class=\"t2\">Tidak Bergores / Penyok</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Tidak Bergores / Penyok\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Beberaoa Goresan / Penyok</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Beberaoa Goresan / Penyok\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Banyak Goresan / Penyok</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Banyak Goresan / Penyok\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">LCD Pecah / Dead Pixel</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"LCD Pecah / Dead Pixel\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        <hr>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Suara Televisi\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"normal\" class=\"tv-suara-select\" (click)=\"selectSuara('normal')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Normal</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\">\r\n              <ion-card id=\"sember\" class=\"tv-suara-select\" (click)=\"selectSuara('sember')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Sember</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"3\" offset-md=\"3\">\r\n              <ion-card id=\"mati\" class=\"tv-suara-select\" (click)=\"selectSuara('mati')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">Mati</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <hr>\r\n\r\n        <div class=\"t1\" style=\"margin-top: 25px;\">\r\n          Kelengkapan\r\n        </div>\r\n        \r\n        <ion-radio-group style=\"margin-top: 14px\" (ionChange)=\"radioSelectKelengkapan($event)\">\r\n          <ion-item class=\"radio head\" lines=\"none\">\r\n            <ion-label class=\"t2\">Fullset (Remote, Kabel Power)</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Fullset (Remote, Kabel Power)\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Unit + Remote + Kabel Power</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Unit + Remote + Kabel Power\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Unit Only + Kabel Power</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Unit Only + Kabel Power\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n\r\n        <div class=\"btn\">\r\n          <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"submit($event)\">Submit</ion-button>\r\n        </div>\r\n\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.widht {\n  width: 100px;\n  height: 20px;\n}\n\n.right {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 2%;\n  left: 89%;\n}\n\n.img {\n  height: 100px;\n  width: 100px;\n  margin-bottom: 20px;\n}\n\n.icon {\n  width: 8%;\n  height: 5%;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.left {\n  text-align: left;\n}\n\n.alart {\n  width: 20px;\n  height: 20px;\n  padding: 3%;\n  background-color: #edbb57;\n}\n\n.check {\n  margin-left: 0;\n}\n\nion-item::part(native) {\n  --padding-start: 0 !important;\n  --inner-padding-end: 0 !important;\n}\n\nion-checkbox {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n  --size: 19px !important;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 19px;\n  color: black;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n}\n\n.btn {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1oYXJhcC1kaXBlcmhhdGlrYW4vQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG1vZGFsXFxtb2RhbC1oYXJhcC1kaXBlcmhhdGlrYW5cXG1vZGFsLWhhcmFwLWRpcGVyaGF0aWthbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1oYXJhcC1kaXBlcmhhdGlrYW4vbW9kYWwtaGFyYXAtZGlwZXJoYXRpa2FuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURFQTtFQUNJLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtaGFyYXAtZGlwZXJoYXRpa2FuL21vZGFsLWhhcmFwLWRpcGVyaGF0aWthbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxufVxyXG5cclxuLndpZGh0e1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMiU7XHJcbiAgICBsZWZ0OiA4OSU7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG59XHJcblxyXG4uZGVza3tcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4ubGVmdHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hbGFydHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNywgMTg3LCA4NywgMSk7XHJcbn1cclxuXHJcbi5jaGVja3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG5pb24taXRlbTo6cGFydChuYXRpdmUpe1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7IFxyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2hlY2tib3h7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50MSB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4iLCJpb24taWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG59XG5cbi53aWRodCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ucmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMiU7XG4gIGxlZnQ6IDg5JTtcbn1cblxuLmltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmljb24ge1xuICB3aWR0aDogOCU7XG4gIGhlaWdodDogNSU7XG59XG5cbi5kZXNrIHtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFsYXJ0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGJiNTc7XG59XG5cbi5jaGVjayB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG5pb24taXRlbTo6cGFydChuYXRpdmUpIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcbiAgLS1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnQyIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ModalHarapDiperhatikanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHarapDiperhatikanComponent", function() { return ModalHarapDiperhatikanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");





let ModalHarapDiperhatikanComponent = class ModalHarapDiperhatikanComponent {
    constructor(ModalController, storage, utilsService) {
        this.ModalController = ModalController;
        this.storage = storage;
        this.utilsService = utilsService;
    }
    ngOnInit() {
    }
    dismissModal() {
        this.ModalController.dismiss({
            'dismissed': true
        });
    }
    checkboxClick() {
        console.log(this.agree);
    }
    submit(event) {
        if (event.detail.checked == true) {
            this.storage.set('Warning', true);
            this.utilsService.showToast("berhasil");
        }
        else {
            this.ModalController.dismiss({
                'dismissed': true
            });
            this.utilsService.showToast("gagal!");
            console.log("hasilnya" + this.agree);
        }
    }
};
ModalHarapDiperhatikanComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }
];
ModalHarapDiperhatikanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-harap-diperhatikan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-harap-diperhatikan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-harap-diperhatikan.component.scss */ "./src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component.scss")).default]
    })
], ModalHarapDiperhatikanComponent);



/***/ }),

/***/ "./src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.widht {\n  width: 100px;\n  height: 20px;\n}\n\n.right {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 7%;\n  left: 90%;\n}\n\n.img {\n  height: 70px;\n  width: 70px;\n  margin-bottom: 10px;\n}\n\n.icon {\n  width: 6%;\n  height: 8%;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.center {\n  text-align: center;\n}\n\n.alart {\n  width: 35px;\n  height: 35px;\n  padding: 3%;\n  background-color: red;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n}\n\n.btn {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC10di9tb2RhbC1mb3JtLXR2L0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxtb2RhbFxcbW9kYWwtdHZcXG1vZGFsLWZvcm0tdHZcXG1vZGFsLWZvcm0tdHYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtdHYvbW9kYWwtZm9ybS10di9tb2RhbC1mb3JtLXR2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21vZGFsL21vZGFsLXR2L21vZGFsLWZvcm0tdHYvbW9kYWwtZm9ybS10di5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxufVxyXG5cclxuLndpZGh0e1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogNyU7XHJcbiAgICBsZWZ0OiA5MCU7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxufVxyXG5cclxuLmRlc2t7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsYXJ0e1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50MiB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59IiwiaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xufVxuXG4ud2lkaHQge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDclO1xuICBsZWZ0OiA5MCU7XG59XG5cbi5pbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA2JTtcbiAgaGVpZ2h0OiA4JTtcbn1cblxuLmRlc2sge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFsYXJ0IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnQxIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udDIge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ModalFormTvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFormTvComponent", function() { return ModalFormTvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_landing_modal_modal_tv_modal_price_tv_modal_price_tv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component */ "./src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component.ts");




let ModalFormTvComponent = class ModalFormTvComponent {
    constructor(ModalController) {
        this.ModalController = ModalController;
    }
    ngOnInit() {
    }
    dismissModal() {
        this.ModalController.dismiss({
            'dismissed': true
        });
    }
    openModalNext(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ModalController.dismiss();
            const modalSubmit = yield this.ModalController.create({
                component: src_app_pages_landing_modal_modal_tv_modal_price_tv_modal_price_tv_component__WEBPACK_IMPORTED_MODULE_3__["ModalPriceTvComponent"],
                cssClass: 'my-custom-modal-price-css',
                backdropDismiss: false,
                id: 'my-modal-id',
                componentProps: {
                    brand: this.brand,
                    jenis: this.jenis,
                    lokasi_trade: this.lokasi_trade,
                    inner_valueSelected: this.inner_valueSelected,
                    outer_valueSelected: this.outer_valueSelected,
                    condition_valueSelected: this.condition_valueSelected,
                    addition_valueSelected: this.addition_valueSelected,
                    suara: this.suara,
                    kondisi_tv: this.kondisi_tv,
                    kondisi_layar: this.kondisi_layar,
                    inch: this.inch
                },
            });
            return yield modalSubmit.present();
        });
    }
};
ModalFormTvComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalFormTvComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-form-tv',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-form-tv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-form-tv.component.scss */ "./src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component.scss")).default]
    })
], ModalFormTvComponent);



/***/ }),

/***/ "./src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desk {\n  padding: 3%;\n}\n\n.img_kanan {\n  position: absolute;\n  top: 0;\n  left: 60%;\n  height: 100%;\n}\n\n.title {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 28px;\n  color: black;\n}\n\n.t2 {\n  margin-top: 3%;\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  color: black;\n  text-align: justify;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cardgrid {\n  background: #ffed8b;\n  padding: 4%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC10di9tb2RhbC1wcmljZS10di9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbW9kYWxcXG1vZGFsLXR2XFxtb2RhbC1wcmljZS10dlxcbW9kYWwtcHJpY2UtdHYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtdHYvbW9kYWwtcHJpY2UtdHYvbW9kYWwtcHJpY2UtdHYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtdHYvbW9kYWwtcHJpY2UtdHYvbW9kYWwtcHJpY2UtdHYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbn1cclxuXHJcbi5kZXNre1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5pbWdfa2FuYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udDEge1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnQyIHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRncmlke1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzNywgMTM5LCAxKTtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgfSIsImlvbi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbn1cblxuLmRlc2sge1xuICBwYWRkaW5nOiAzJTtcbn1cblxuLmltZ19rYW5hbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA2MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udDEge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50MiB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmRncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZmZWQ4YjtcbiAgcGFkZGluZzogNCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalPriceTvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPriceTvComponent", function() { return ModalPriceTvComponent; });
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











let ModalPriceTvComponent = class ModalPriceTvComponent {
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
    }
    ionViewWillEnter() {
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
                jenis_tv: this.jenis,
                inch: this.inch,
                inner_screen: this.inner_valueSelected,
                outer_screen: this.outer_valueSelected,
                condition: this.condition_valueSelected,
                addition: this.addition_valueSelected,
            };
            console.log(data);
            this.sellingApiService.getTvDetail(token, data).subscribe((response) => {
                this.response = response,
                    this.formatPrice = new Intl.NumberFormat('id-ID').format(this.response.data);
                this.price = this.response.data;
                console.log(this.price);
            });
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
                let data = {
                    brand: this.brand,
                    jenis: this.jenis,
                    lokasi_trade: this.lokasi_trade,
                    inner_screen: this.inner_valueSelected,
                    outer_screen: this.outer_valueSelected,
                    condition: this.condition_valueSelected,
                    addition: this.addition_valueSelected,
                    suara: this.suara,
                    kondisi_tv: this.kondisi_tv,
                    kondisi_layar: this.kondisi_layar,
                    inch: this.inch,
                    price: this.price
                };
                this.sellingApiService.sellTv(token, data).subscribe((success) => {
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
ModalPriceTvComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_3__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__["SellingApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"] }
];
ModalPriceTvComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-price-tv',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-price-tv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-price-tv.component.scss */ "./src/app/pages/landing/modal/modal-tv/modal-price-tv/modal-price-tv.component.scss")).default]
    })
], ModalPriceTvComponent);



/***/ }),

/***/ "./src/app/pages/landing/selling-tv/tv-brand/tv-brand-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/landing/selling-tv/tv-brand/tv-brand-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TvBrandPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvBrandPageRoutingModule", function() { return TvBrandPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tv_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv-brand.page */ "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.ts");




const routes = [
    {
        path: '',
        component: _tv_brand_page__WEBPACK_IMPORTED_MODULE_3__["TvBrandPage"]
    }
];
let TvBrandPageRoutingModule = class TvBrandPageRoutingModule {
};
TvBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TvBrandPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing/selling-tv/tv-brand/tv-brand.module.ts ***!
  \**********************************************************************/
/*! exports provided: TvBrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvBrandPageModule", function() { return TvBrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tv_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tv-brand-routing.module */ "./src/app/pages/landing/selling-tv/tv-brand/tv-brand-routing.module.ts");
/* harmony import */ var _tv_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tv-brand.page */ "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.ts");







let TvBrandPageModule = class TvBrandPageModule {
};
TvBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tv_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["TvBrandPageRoutingModule"]
        ],
        declarations: [_tv_brand_page__WEBPACK_IMPORTED_MODULE_6__["TvBrandPage"]]
    })
], TvBrandPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.header.bottom {\n  bottom: 0px;\n}\nion-content {\n  --background: linear-gradient(to left, #FEEDDD 30%, #fff 70%);\n}\nion-card {\n  box-shadow: none !important;\n  border: 1px solid #EBEBEB;\n}\n.main-menu {\n  background-color: #fff;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.content {\n  padding: 5%;\n}\n.labelSelect {\n  font-family: Plus Jakarta Sans;\n  font-weight: 600;\n  font-size: 14px;\n}\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  top: 2%;\n  bottom: -10%;\n}\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 25%;\n  left: 78%;\n  height: 200%;\n}\n.card-backgroud .img_kiri {\n  position: absolute;\n  top: 7%;\n  left: 5%;\n  height: 200%;\n}\n.card-backgroud .title {\n  position: absolute;\n  top: 40%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-weight: 800;\n  font-size: 30px;\n  color: black;\n}\n.card-backgroud .subtitle {\n  position: absolute;\n  top: 60%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-size: 18px;\n  color: black;\n}\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  text-align: left;\n}\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: left;\n}\n.itemBorder {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-select {\n  max-width: 100%;\n  color: black;\n  text-align: left !important;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n.selected {\n  background: #eaf5ff;\n  border: 1px solid #045fc4;\n}\n.tv-merk-select {\n  margin-left: 0;\n  margin-top: 3%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.tv-jenis-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 9%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.tv-ukuran-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.tv-suara-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.toggle {\n  margin-left: 0;\n  margin-top: 5%;\n}\n.toggle2 {\n  margin-left: 0;\n  margin-top: 0;\n}\nion-item::part(native) {\n  --padding-start: 0 !important;\n  --inner-padding-end: 0 !important;\n}\nhr {\n  border-bottom: 2px solid #EBEBEB;\n}\nhr:after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #EBEBEB;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n.radio.head {\n  margin-left: 0;\n}\n.radio {\n  margin-left: 0;\n}\n.btn2 {\n  width: 100%;\n  height: 2%;\n  color: white;\n  background: gainsboro;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n  margin-top: 5%;\n  margin-bottom: 10%;\n}\n.show {\n  color: black;\n  padding-left: 10px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n.ic_drop {\n  margin-left: 6px;\n}\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n  margin-top: 5%;\n}\nion-grid {\n  padding: 0 !important;\n}\nion-toggle {\n  height: 50%;\n  width: 13%;\n  --handle-width: 50%;\n}\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n}\n.ic_back {\n  font-size: 25px;\n  color: #045fc4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLXR2L3R2LWJyYW5kL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZWxsaW5nLXR2XFx0di1icmFuZFxcdHYtYnJhbmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctdHYvdHYtYnJhbmQvdHYtYnJhbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQ0U7RUFDRSxRQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVFO0VBQ0EsV0FBQTtBQ0FGO0FESUE7RUFDRSw2REFBQTtBQ0RGO0FES0E7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDRkY7QURNQTtFQUNFLFdBQUE7QUNIRjtBRE1BO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDSEY7QURLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDSko7QURPRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNMSjtBRFFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNOSjtBRFVBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQRjtBRFVBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQRjtBRFVBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ1BGO0FEVUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDUEY7QURVQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNQRjtBRFVBO0VBQ0UsNkJBQUE7RUFDQSxpQ0FBQTtBQ1BGO0FEVUE7RUFDRSxnQ0FBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEVUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEVUE7RUFDRSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEY7QURVQTtFQUNFLHFCQUFBO0FDUEY7QURVQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNQRjtBRFVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNQRjtBRFVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy10di90di1icmFuZC90di1icmFuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICAmLnRvcCB7XHJcbiAgICB0b3A6ICAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuXHJcbiAgJi5ib3R0b20ge1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0ZFRURERCAzMCUsICNmZmYgNzAlKTtcclxuICBcclxufSBcclxuXHJcbmlvbi1jYXJke1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xyXG59XHJcblxyXG4ubWFpbi1tZW51e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5sYWJlbFNlbGVjdHtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2tncm91ZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdG9wOiAyJTtcclxuICBib3R0b206IC0xMCU7XHJcblxyXG4gIC5pbWdfa2FuYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDc4JTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICB9XHJcblxyXG4gIC5pbWdfa2lyaXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNyU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLnQxe1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnQye1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLml0ZW1Cb3JkZXJ7XHJcbiAgYm9yZGVyOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDEpIHNvbGlkIDFweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pe1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zZWxlY3RlZHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMjQ1LCAyNTUsIDEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbn1cclxuXHJcbi50di1tZXJrLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi50di1qZW5pcy1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogOSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi50di11a3VyYW4tc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnR2LXN1YXJhLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi50b2dnbGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi50b2dnbGUye1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSl7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7IFxyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xyXG59XHJcblxyXG5ocjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTJweDsgXHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5yYWRpby5oZWFke1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4ucmFkaW97XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5idG4ye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMiU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuLnNob3d7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5pY19kcm9we1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9nZ2xle1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMyU7XHJcbiAgLS1oYW5kbGUtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAyMzgsIDI0NSwgMSk7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5pY19iYWNrIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5oZWFkZXIudG9wIHtcbiAgdG9wOiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG59XG4uaGVhZGVyLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNGRUVEREQgMzAlLCAjZmZmIDcwJSk7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmxhYmVsU2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJkLWJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRvcDogMiU7XG4gIGJvdHRvbTogLTEwJTtcbn1cbi5jYXJkLWJhY2tncm91ZCAuaW1nX2thbmFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1JTtcbiAgbGVmdDogNzglO1xuICBoZWlnaHQ6IDIwMCU7XG59XG4uY2FyZC1iYWNrZ3JvdWQgLmltZ19raXJpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDclO1xuICBsZWZ0OiA1JTtcbiAgaGVpZ2h0OiAyMDAlO1xufVxuLmNhcmQtYmFja2dyb3VkIC50aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNhcmQtYmFja2dyb3VkIC5zdWJ0aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIGxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udDEge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udDIge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaXRlbUJvcmRlciB7XG4gIGJvcmRlcjogI2ViZWJlYiBzb2xpZCAxcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cblxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2VhZjVmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0NWZjNDtcbn1cblxuLnR2LW1lcmstc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDMlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnR2LWplbmlzLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogOSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi50di11a3VyYW4tc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi50di1zdWFyYS1zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDExJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnRvZ2dsZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnRvZ2dsZTIge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVCRUI7XG59XG5cbmhyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLnJhZGlvLmhlYWQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnJhZGlvIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5idG4yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMiU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5zaG93IHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaWNfZHJvcCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0JTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvZ2dsZSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTMlO1xuICAtLWhhbmRsZS13aWR0aDogNTAlO1xufVxuXG4uaWNvbiB7XG4gIGJhY2tncm91bmQ6ICNlYmVlZjU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5pY19iYWNrIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzA0NWZjNDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.ts ***!
  \********************************************************************/
/*! exports provided: TvBrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvBrandPage", function() { return TvBrandPage; });
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
/* harmony import */ var src_app_pages_landing_modal_modal_tv_modal_form_tv_modal_form_tv_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component */ "./src/app/pages/landing/modal/modal-tv/modal-form-tv/modal-form-tv.component.ts");
/* harmony import */ var src_app_pages_landing_modal_alarm_unit_tolak_alarm_unit_tolak_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component */ "./src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component.ts");
/* harmony import */ var src_app_pages_landing_modal_modal_harap_diperhatikan_modal_harap_diperhatikan_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component */ "./src/app/pages/landing/modal/modal-harap-diperhatikan/modal-harap-diperhatikan.component.ts");


















let TvBrandPage = class TvBrandPage {
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
        this.data_inch = [];
        this.data_jenis = [];
        this.stores = [];
        this.searchedStores = [];
        // selected_merk:string;
        // selected_jenis:string;
        // selected_ukuran:string;
        // selected_suara:string;
        this.kondisiLayarGores = false;
        this.kondisiNormal = false;
        this.kondisiTV = false;
        this.showHidden = true;
        this.customPopoverOptions = {
            header: 'Pilih Tempat Trade In',
            message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
        };
    }
    ngOnInit() {
        this.toggleInnerScreen();
        this.toggleOuterScreen();
        this.toggleKondisiTV();
        // this.storage.get('Warning').then((result) => { 
        //   if(result){
        //   } else {
        //     this.Announcement();
        //   }
        // });
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
            document.getElementById("hides").hidden = true;
        }
        else if (this.showHidden === false) {
            this.showHidden = true;
            document.getElementById("hide").hidden = true;
        }
    }
    Announcement() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modalAlert = yield this.modalController.create({
                component: src_app_pages_landing_modal_modal_harap_diperhatikan_modal_harap_diperhatikan_component__WEBPACK_IMPORTED_MODULE_14__["ModalHarapDiperhatikanComponent"],
                cssClass: 'harap-diperhatikan-modal-css',
                backdropDismiss: false,
                id: 'my-modal-id',
                componentProps: {
                    agree: this.agree
                },
            });
            return yield modalAlert.present();
        });
    }
    selectMerk(val) {
        this.brand = val;
        document.querySelectorAll('.tv-merk-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectJenis(val) {
        this.jenis = val;
        document.querySelectorAll('.tv-jenis-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectUkuran(val) {
        if (val == 32) {
            this.inch = '32" inch';
        }
        if (val == 40) {
            this.inch = '40" inch';
        }
        if (val == 42) {
            this.inch = '42" inch';
        }
        if (val == 55) {
            this.inch = '55" inch';
        }
        document.querySelectorAll('.tv-ukuran-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    selectSuara(val) {
        this.suaraSelected = val;
        console.log(this.suaraSelected);
        document.querySelectorAll('.tv-suara-select').forEach(element => {
            element.classList.remove("selected");
        });
        var element = document.getElementById(val);
        element.classList.add("selected");
    }
    radioSelectLayar(event) {
        this.kondisi_layarSelected = event.detail.value;
    }
    radioSelectBody(event) {
        this.condition_valueSelected = event.detail.value;
    }
    radioSelectKelengkapan(event) {
        this.addition_valueSelected = event.detail.value;
    }
    toggleOuterScreen() {
        if (this.kondisiLayarGores == true) {
            this.outer_valueSelected = 'Layar Luar Tidak Tergores';
        }
        else {
            this.outer_valueSelected = 'Layar Luar Tergores';
        }
    }
    toggleInnerScreen() {
        if (this.kondisiNormal == true) {
            this.inner_valueSelected = 'Layar Luar Tidak Tergores';
        }
        else {
            this.inner_valueSelected = 'Layar Luar Tergores';
        }
    }
    toggleKondisiTV() {
        if (this.kondisiTV == true) {
            this.kondisi_tvSelected = 'Nyala';
        }
        else {
            this.kondisi_tvSelected = 'Mati';
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
            this.sellingApiService.getBrand(token).subscribe((response) => {
                this.data_brand = response.data.brand;
                this.data_inch = response.data.inch;
                this.data_jenis = response.data.jenis_tv;
                console.log(this.data_brand);
            }, (err) => {
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    submit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if ((this.brand == null || this.jenis == null || this.lokasi_trade == null || this.inch == null || this.inner_valueSelected == null || this.outer_valueSelected == null || this.condition_valueSelected == null || this.addition_valueSelected == null)) {
                this.utilsService.showToast("Lengkapi pengisian form.");
            }
            else if ((this.kondisi_tvSelected == "Mati")) {
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
                    component: src_app_pages_landing_modal_modal_tv_modal_form_tv_modal_form_tv_component__WEBPACK_IMPORTED_MODULE_12__["ModalFormTvComponent"],
                    cssClass: 'my-custom-modal-tolak-css',
                    backdropDismiss: false,
                    id: 'my-modal-id',
                    componentProps: {
                        brand: this.brand,
                        jenis: this.jenis,
                        lokasi_trade: this.lokasi_trade,
                        inner_valueSelected: this.inner_valueSelected,
                        outer_valueSelected: this.outer_valueSelected,
                        condition_valueSelected: this.condition_valueSelected,
                        addition_valueSelected: this.addition_valueSelected,
                        suara: this.suaraSelected,
                        kondisi_tv: this.kondisi_tvSelected,
                        kondisi_layar: this.kondisi_layarSelected,
                        inch: this.inch
                    },
                });
                return yield modalAlert.present();
            }
        });
    }
};
TvBrandPage.ctorParameters = () => [
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
TvBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tv-brand',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tv-brand.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tv-brand.page.scss */ "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.scss")).default]
    })
], TvBrandPage);



/***/ })

}]);
//# sourceMappingURL=selling-tv-tv-brand-tv-brand-module-es2015.js.map