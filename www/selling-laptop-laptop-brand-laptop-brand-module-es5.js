function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-laptop-laptop-brand-laptop-brand-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingModalModalLaptopAlarmFormNullAlarmFormNullComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"widht\">\r\n    <div class=\"right\">\r\n      <ion-icon class=\"icon\" name=\"close\" (click)=\"dismissModal()\"></ion-icon>\r\n    </div>\r\n  </div>\r\n  <div class=\"desk\">\r\n    <div class=\"center\">\r\n      <img class=\"img\" src=\"../../../../assets/icon/note-2xxhdpi.png\" alt=\"\">\r\n      <!-- <ion-icon class=\"alart\" name=\"alert\"></ion-icon> -->\r\n      <br>\r\n      <ion-label class=\"t1\">Pastikan data kamu sudah benar</ion-label>\r\n      <br>\r\n      <p class=\"t2\">Apakah kamu yakin ingin melanjutkan ke proses berikutnya?</p>\r\n      <div class=\"btn\">\r\n        <ion-button style=\"width: 100%; height: 45px;\" shape=\"round\" (click)=\"openModalNext($event)\">Ya, Lanjutkan</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingModalModalLaptopModalPriceModalPriceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-item>\r\n    <ion-label class=\"title\">Estimated Price</ion-label>\r\n    <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon>\r\n  </ion-item>\r\n  <div class=\"desk\">\r\n    <ion-card class=\"cardgrid\">\r\n      <div class=\"img_kanan\">\r\n        <img src=\"../../../../assets/images/baru/coin-bgxhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div style=\"margin-top: 10px; margin-left: 10px;\">\r\n        <ion-label class=\"t1\">IDR {{formatPrice}}</ion-label>\r\n        <p class=\"t2\" style=\"margin-right: 10px;\">Harga akan berubah sesuai kondisi unit yang sebenarnya setelah dilakukan pengecekkan oleh tim kami</p>\r\n      </div>\r\n    </ion-card>\r\n    <div class=\"btn\">\r\n      <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"submit()\">Setuju dan Submit</ion-button> \r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"header\">\r\n    <div class=\"card-backgroud\">\r\n      <img src=\"../../../../assets/images/header/laptop.png\" alt=\"\">\r\n      <div class=\"img_kanan\">\r\n        <img src=\"../../../../assets/images/baru/form-laptopxhdpi.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"img_kiri\" routerLink=\"/landing/type\">\r\n        <div class=\"icon\">\r\n          <ion-icon class=\"ic_back\" name=\"arrow-back-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"title\">\r\n        Trade Laptop\r\n      </div> \r\n      <div class=\"subtitle\">\r\n        Silahkan isi data dibawah ini\r\n      </div>\r\n    </div>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <div class=\"content\">\r\n        <div class=\"itemBorder\">\r\n          <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Pilih tempat melakukan Trade In\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"this.lokasi_trade = $event.target.value\">\r\n            <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div class=\"t1\" style=\"margin-top: 30px;\">\r\n          Pilih Merk\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"asus\" class=\"laptop-merk-select\" (click)=\"selectMerk('asus')\">\r\n                <img src=\"../../../../assets/sponsor/asus_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Asus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"lenovo\" class=\"laptop-merk-select\" (click)=\"selectMerk('lenovo')\">\r\n                <img src=\"../../../../assets/sponsor/lenovo_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Lenovo</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"acer\" class=\"laptop-merk-select\" (click)=\"selectMerk('acer')\">\r\n                <img src=\"../../../../assets/sponsor/acer_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Acer</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"dell\" class=\"laptop-merk-select\" (click)=\"selectMerk('dell')\">\r\n                <img src=\"../../../../assets/sponsor/dell_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Dell</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"xiaomi\" class=\"laptop-merk-select\" (click)=\"selectMerk('xiaomi')\">\r\n                <img src=\"../../../../assets/sponsor/mi.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">Xiaomi</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"hp\" class=\"laptop-merk-select\" (click)=\"selectMerk('hp')\">\r\n                <img src=\"../../../../assets/sponsor/hp_lg.png\" alt=\"\">\r\n                <br>\r\n                <ion-label style=\"margin-bottom: 15%;\">hp</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <div id=\"hide\" hidden=\"true\">\r\n          <ion-grid style=\"margin-top: 14px\">\r\n            <ion-row>\r\n              <ion-col size-md=\"4\">\r\n                <ion-card id=\"Apple\" class=\"laptop-merk-select\" (click)=\"selectMerk('Apple')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/apple.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Apple</ion-label>\r\n                </ion-card>\r\n              </ion-col> \r\n\r\n              <ion-col size-md=\"4\">\r\n                <!-- <ion-card id=\"razer\" class=\"laptop-merk-select\" (click)=\"selectMerk('razer')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/razer.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Razer</ion-label>\r\n                </ion-card> -->\r\n              </ion-col>\r\n              \r\n              <ion-col size-md=\"4\">\r\n                <!-- <ion-card id=\"alienware\" class=\"laptop-merk-select\" (click)=\"selectMerk('alienware')\">\r\n                  <img style=\"margin-top: 8%; margin-bottom: 8%;\" src=\"../../../../assets/sponsor/alienware.png\" alt=\"\">\r\n                  <br>\r\n                  <ion-label style=\"margin-bottom: 15%;\">Alienware</ion-label>\r\n                </ion-card> -->\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n        <div class=\"show\" style=\"margin-top: 14px\" (click)=\"showMore()\" id=\"hides\">\r\n          <a>Show more brand</a> <ion-icon class=\"ic_drop\" name=\"caret-down-outline\"></ion-icon>\r\n        </div>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Jenis Storage\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"hdd\" class=\"laptop-jenis-select\" (click)=\"selectJenis('hdd')\">\r\n                <ion-label>HDD</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"ssd\" class=\"laptop-jenis-select\" (click)=\"selectJenis('ssd')\">\r\n                <ion-label>SSD</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          RAM\r\n        </div>\r\n\r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"2\" class=\"laptop-ram-select\" (click)=\"selectRam('2')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">2 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"4\" class=\"laptop-ram-select\" (click)=\"selectRam('4')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">4 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"8\" class=\"laptop-ram-select\" (click)=\"selectRam('8')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">8 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"16\" class=\"laptop-ram-select\" (click)=\"selectRam('16')\">\r\n                <ion-label style=\"margin-bottom: 15%;\">16 GB</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"itemBorder2\" style=\"margin-top: 14px\">\r\n          <ion-select [interfaceOptions]=\"customPopoverProcessor\" placeholder=\"Pilih Processor\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange) = \"this.processor = $event.target.value\">\r\n            <ion-select-option *ngFor=\"let row_processor of data_processor\" value=\"{{row_processor.processor}}\">{{row_processor.processor}}</ion-select-option> \r\n          </ion-select>\r\n        </div>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Operating System\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"MAC OS\" class=\"laptop-os-select\" (click)=\"selectOs('MAC OS')\" *ngIf = \"selected_merk == undefined || selected_merk == 'Apple'\" disabled=\"false\">\r\n                <ion-label>MAC OS</ion-label>\r\n              </ion-card>\r\n              <ion-card id=\"MAC OS\" class=\"laptop-os-select\" *ngIf = \"selected_merk != undefined && selected_merk != 'Apple'\" disabled=\"true\">\r\n                <ion-label>MAC OS</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"Windows\" class=\"laptop-os-select\" (click)=\"selectOs('Windows')\" *ngIf = \"selected_merk == undefined || selected_merk != 'Apple'\" disabled=\"false\">\r\n                <ion-label>Windows</ion-label>\r\n              </ion-card>\r\n              <ion-card id=\"Windows\" class=\"laptop-os-select\" *ngIf = \"selected_merk != undefined && selected_merk == 'Apple'\" disabled=\"true\">\r\n                <ion-label>Windows</ion-label>\r\n              </ion-card>\r\n            </ion-col> \r\n          </ion-row>\r\n        </ion-grid>\r\n        \r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Ukuran Laptop\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"1012\" class=\"laptop-ukuran-select\" (click)=\"selectUkuran('1012')\">\r\n                <ion-label>10\" - 12\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"6\">\r\n              <ion-card id=\"1315\" class=\"laptop-ukuran-select\" (click)=\"selectUkuran('1315')\">\r\n                <ion-label>13\" - 15\"</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t1\" style=\"margin-top: 25px;\">\r\n          Kondisi Layar Laptop\r\n        </div>\r\n\r\n        <ion-radio-group (ionChange)=\"radioSelect($event)\" style=\"margin-top: 14px\">\r\n          <ion-item class=\"radio head\" lines=\"none\">\r\n            <ion-label class=\"t2\">Normal</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Normal\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Layar Bergaris</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Layar Bergaris\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">Whitespot/Titik Hitam</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"Whitespot/Titik Hitam\"></ion-radio>\r\n          </ion-item>\r\n          \r\n          <ion-item class=\"radio\" lines=\"none\">\r\n            <ion-label class=\"t2\">LCD Pecah</ion-label>\r\n            <ion-radio slot=\"end\" color=\"primary\" value=\"LCD Pecah\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        <hr>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Laptop Menyala</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiLaptop\" (ionChange)=\"toggleKondisiLaptop()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Touchscreen</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTouch\" (ionChange)=\"toggleTouchscreen()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">LCD Layar Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiLcd\" (ionChange)=\"toggleKondisiLayar()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Layar Luar Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiLayarLuar\" (ionChange)=\"toggleKondisiLayarLuar()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Keyboard Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiKeyboard\" (ionChange)=\"toggleKeyboard()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Trackpad Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiTrackpad\" (ionChange)=\"toggleTrackpad()\"></ion-toggle>\r\n        </ion-item>\r\n        \r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Port Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiPort\" (ionChange)=\"togglePort()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Bluetooth & Wifi Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiBluetooth\" (ionChange)=\"toggleBluetooth()\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"toggle2\" lines=\"none\">\r\n          <ion-label class=\"t2\">Kondisi Speaker Berfungsi Normal</ion-label>\r\n          <ion-toggle mode=\"ios\" [(ngModel)]=\"kondisiSpeaker\" (ionChange)=\"toggleSpeaker()\"></ion-toggle>\r\n        </ion-item>\r\n        <hr>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kondisi Fisik\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"mulus\" class=\"laptop-fisik-select\" (click)=\"selectFisik('mulus')\">\r\n                <ion-label>Mulus</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"lecet\" class=\"laptop-fisik-select\" (click)=\"selectFisik('lecet')\">\r\n                <ion-label>Lecet</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"penyok\" class=\"laptop-fisik-select\" (click)=\"selectFisik('penyok')\">\r\n                <ion-label>Penyok</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kondisi Baterai\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"normal\" class=\"laptop-baterai-select\" (click)=\"selectBaterai('normal')\">\r\n                <ion-label>Normal</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"mati\" class=\"laptop-baterai-select\" (click)=\"selectBaterai('mati')\">\r\n                <ion-label>Mati</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"bocor\" class=\"laptop-baterai-select\" (click)=\"selectBaterai('bocor')\">\r\n                <ion-label>Bocor</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"t2\" style=\"margin-top: 14px\">\r\n          Kelengkapan\r\n        </div>\r\n        \r\n        <ion-grid style=\"margin-top: 14px\">\r\n          <ion-row>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"fullset\" class=\"laptop-kelengkapan-select\" (click)=\"selectKelengkapan('fullset')\">\r\n                <ion-label>Fullset</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"unitcharge\" class=\"laptop-kelengkapan-select\" (click)=\"selectKelengkapan('unitcharge')\">\r\n                <ion-label>Unit Charger</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size-md=\"4\">\r\n              <ion-card id=\"unit\" class=\"laptop-kelengkapan-select\" (click)=\"selectKelengkapan('unit')\">\r\n                <ion-label>Unit Only</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div class=\"btn\">\r\n          <ion-button style=\"width: 100%;\" shape=\"round\" (click)=\"openModalSubmit($event)\">Submit</ion-button>\r\n        </div>\r\n\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingModalModalLaptopAlarmFormNullAlarmFormNullComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.widht {\n  width: 100px;\n  height: 20px;\n}\n\n.right {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 7%;\n  left: 90%;\n}\n\n.img {\n  height: 70px;\n  width: 70px;\n  margin-bottom: 10px;\n}\n\n.icon {\n  width: 6%;\n  height: 8%;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.center {\n  text-align: center;\n}\n\n.alart {\n  width: 35px;\n  height: 35px;\n  padding: 3%;\n  background-color: red;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n}\n\n.btn {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1sYXB0b3AvYWxhcm0tZm9ybS1udWxsL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxtb2RhbFxcbW9kYWwtbGFwdG9wXFxhbGFybS1mb3JtLW51bGxcXGFsYXJtLWZvcm0tbnVsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1sYXB0b3AvYWxhcm0tZm9ybS1udWxsL2FsYXJtLWZvcm0tbnVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1sYXB0b3AvYWxhcm0tZm9ybS1udWxsL2FsYXJtLWZvcm0tbnVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxufVxyXG5cclxuLndpZGh0e1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogNyU7XHJcbiAgICBsZWZ0OiA5MCU7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxufVxyXG5cclxuLmRlc2t7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsYXJ0e1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50MiB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59IiwiaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xufVxuXG4ud2lkaHQge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDclO1xuICBsZWZ0OiA5MCU7XG59XG5cbi5pbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA2JTtcbiAgaGVpZ2h0OiA4JTtcbn1cblxuLmRlc2sge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFsYXJ0IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnQxIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udDIge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: AlarmFormNullComponent */

  /***/
  function srcAppPagesLandingModalModalLaptopAlarmFormNullAlarmFormNullComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlarmFormNullComponent", function () {
      return AlarmFormNullComponent;
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


    var src_app_pages_landing_modal_modal_laptop_modal_price_modal_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component */
    "./src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component.ts");

    var AlarmFormNullComponent = /*#__PURE__*/function () {
      function AlarmFormNullComponent(ModalController) {
        _classCallCheck(this, AlarmFormNullComponent);

        this.ModalController = ModalController;
      }

      _createClass(AlarmFormNullComponent, [{
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
                      component: src_app_pages_landing_modal_modal_laptop_modal_price_modal_price_component__WEBPACK_IMPORTED_MODULE_3__["ModalPriceComponent"],
                      cssClass: 'my-custom-modal-price-css',
                      backdropDismiss: false,
                      id: 'my-modal-id',
                      componentProps: {
                        brand: this.brand,
                        memory: this.memory,
                        lokasi_trade: this.lokasi_trade,
                        outer_valueSelected: this.outer_valueSelected,
                        condition_valueSelected: this.condition_valueSelected,
                        addition_valueSelected: this.addition_valueSelected,
                        jenis_storage: this.jenis_storage,
                        kondisi_laptop: this.kondisi_laptop,
                        jenis_layar: this.jenis_layar,
                        baterai: this.baterai,
                        kondisi_layar: this.kondisi_layar,
                        keyboard: this.keyboard,
                        trackpad: this.trackpad,
                        port: this.port,
                        wifi: this.wifi,
                        camera: this.camera,
                        speaker: this.speaker,
                        processor: this.processor,
                        ukuran_laptop: this.ukuran_laptop,
                        os: this.os,
                        more_addition: this.more_addition,
                        price: this.price
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

      return AlarmFormNullComponent;
    }();

    AlarmFormNullComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    AlarmFormNullComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alarm-form-null',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alarm-form-null.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alarm-form-null.component.scss */
      "./src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component.scss"))["default"]]
    })], AlarmFormNullComponent);
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingModalModalLaptopModalPriceModalPriceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desk {\n  padding: 3%;\n}\n\n.img_kanan {\n  position: absolute;\n  top: 0;\n  left: 60%;\n  height: 100%;\n}\n\n.title {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 28px;\n  color: black;\n}\n\n.t2 {\n  margin-top: 3%;\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  color: black;\n  text-align: justify;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cardgrid {\n  background: #ffed8b;\n  padding: 4%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1sYXB0b3AvbW9kYWwtcHJpY2UvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG1vZGFsXFxtb2RhbC1sYXB0b3BcXG1vZGFsLXByaWNlXFxtb2RhbC1wcmljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1sYXB0b3AvbW9kYWwtcHJpY2UvbW9kYWwtcHJpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbW9kYWwvbW9kYWwtbGFwdG9wL21vZGFsLXByaWNlL21vZGFsLXByaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG59XHJcblxyXG4uZGVza3tcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcblxyXG4uaW1nX2thbmFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50MiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkZ3JpZHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzcsIDEzOSwgMSk7XHJcbiAgICBwYWRkaW5nOiA0JTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIH0iLCJpb24taWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG59XG5cbi5kZXNrIHtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5pbWdfa2FuYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNjAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnQxIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udDIge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmZmVkOGI7XG4gIHBhZGRpbmc6IDQlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0JTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ModalPriceComponent */

  /***/
  function srcAppPagesLandingModalModalLaptopModalPriceModalPriceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPriceComponent", function () {
      return ModalPriceComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");

    var ModalPriceComponent = /*#__PURE__*/function () {
      function ModalPriceComponent(ModalController, selling, router, storage, sellingApiService, activatedRoute, utilsService, localNotifications) {
        _classCallCheck(this, ModalPriceComponent);

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

      _createClass(ModalPriceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.getData();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_6__["tokenKey"]).then(function (token) {
            var data = {
              brand: _this.brand,
              memory: _this.memory,
              storages: _this.storages,
              processor: _this.processor,
              jenis_storage: _this.jenis_storage,
              ukuran_laptop: _this.ukuran_laptop,
              os: _this.os
            }; // console.log(data)

            _this.sellingApiService.getLaptopDetail(token, data).subscribe(function (response) {
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
                    this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_6__["tokenKey"]).then(function (token) {
                      var data = {
                        brand: _this2.brand,
                        memory: _this2.memory,
                        lokasi_trade: _this2.lokasi_trade,
                        outer_screen: _this2.outer_valueSelected,
                        condition: _this2.condition_valueSelected,
                        addition: _this2.addition_valueSelected,
                        jenis_storage: _this2.jenis_storage,
                        kondisi_laptop: _this2.kondisi_laptop,
                        jenis_layar: _this2.jenis_layar,
                        baterai: _this2.baterai,
                        kondisi_layar: _this2.kondisi_layar,
                        keyboard: _this2.keyboard,
                        trackpad: _this2.trackpad,
                        port: _this2.port,
                        wifi: _this2.wifi,
                        // camera:this.camera,
                        speaker: _this2.speaker,
                        processor: _this2.processor,
                        ukuran_laptop: _this2.ukuran_laptop,
                        os: _this2.os,
                        price: _this2.price
                      }; // console.log(data)

                      _this2.sellingApiService.sellLaptop(token, data).subscribe(function (success) {
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
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.ModalController.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ModalPriceComponent;
    }();

    ModalPriceComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_4__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_7__["SellingApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"]
      }];
    };

    ModalPriceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-price',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-price.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-price.component.scss */
      "./src/app/pages/landing/modal/modal-laptop/modal-price/modal-price.component.scss"))["default"]]
    })], ModalPriceComponent);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: LaptopBrandPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaptopBrandPageRoutingModule", function () {
      return LaptopBrandPageRoutingModule;
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


    var _laptop_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./laptop-brand.page */
    "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts");

    var routes = [{
      path: '',
      component: _laptop_brand_page__WEBPACK_IMPORTED_MODULE_3__["LaptopBrandPage"]
    }];

    var LaptopBrandPageRoutingModule = function LaptopBrandPageRoutingModule() {
      _classCallCheck(this, LaptopBrandPageRoutingModule);
    };

    LaptopBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LaptopBrandPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: LaptopBrandPageModule */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaptopBrandPageModule", function () {
      return LaptopBrandPageModule;
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


    var _laptop_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./laptop-brand-routing.module */
    "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts");
    /* harmony import */


    var _laptop_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./laptop-brand.page */
    "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts");

    var LaptopBrandPageModule = function LaptopBrandPageModule() {
      _classCallCheck(this, LaptopBrandPageModule);
    };

    LaptopBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _laptop_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["LaptopBrandPageRoutingModule"]],
      declarations: [_laptop_brand_page__WEBPACK_IMPORTED_MODULE_6__["LaptopBrandPage"]]
    })], LaptopBrandPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.header.bottom {\n  bottom: 0px;\n}\nion-content {\n  --background: linear-gradient(to left, #FBDAE8 30%, #fff 70%);\n}\nion-card {\n  box-shadow: none !important;\n  border: 1px solid #EBEBEB;\n}\n.main-menu {\n  background-color: #fff;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.content {\n  padding: 5%;\n}\n.labelSelect {\n  font-family: Plus Jakarta Sans;\n  font-weight: 600;\n  font-size: 14px;\n}\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  top: 2%;\n  bottom: -10%;\n}\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 25%;\n  left: 78%;\n  height: 200%;\n}\n.card-backgroud .img_kiri {\n  position: absolute;\n  top: 7%;\n  left: 5%;\n  height: 200%;\n}\n.card-backgroud .title {\n  position: absolute;\n  top: 40%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-weight: 800;\n  font-size: 30px;\n  color: black;\n}\n.card-backgroud .subtitle {\n  position: absolute;\n  top: 60%;\n  left: 5%;\n  font-family: Plus Jakarta Sans;\n  font-size: 18px;\n  color: black;\n}\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  text-align: left;\n}\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: left;\n}\n.itemBorder {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.itemBorder2 {\n  border: #ebebeb solid 1px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-select {\n  max-width: 100%;\n  text-align: left !important;\n  color: black;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n.selected {\n  background: #eaf5ff;\n  border: 1px solid #045fc4;\n}\n.laptop-merk-select {\n  margin-left: 0;\n  margin-top: 3%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-jenis-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 9%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-ram-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-os-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-os-apple-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 11%;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-ukuran-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-fisik-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-baterai-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.laptop-kelengkapan-select {\n  margin-left: 0;\n  margin-top: 0;\n  padding-top: 10%;\n  width: 100%;\n  height: 110%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  text-align: center;\n  font-family: Plus Jakarta Sans;\n  color: black;\n  font-size: 17px;\n}\n.toggle {\n  margin-left: 0;\n  margin-top: 5%;\n}\n.toggle2 {\n  margin-left: 0;\n  margin-top: 0;\n}\nion-item::part(native) {\n  --padding-start: 0 !important;\n  --inner-padding-end: 0 !important;\n}\nhr {\n  border-bottom: 2px solid #EBEBEB;\n}\nhr:after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #EBEBEB;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n.radio.head {\n  margin-left: 0;\n}\n.radio {\n  margin-left: 0;\n}\n.show {\n  color: black;\n  padding-left: 10px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n.ic_drop {\n  margin-left: 6px;\n}\n.btn {\n  width: 100%;\n  height: 4%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 100%;\n  margin-top: 5%;\n}\nion-grid {\n  padding: 0 !important;\n}\nion-toggle {\n  height: 50%;\n  width: 13%;\n  --handle-width: 50%;\n}\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n}\n.ic_back {\n  font-size: 25px;\n  color: #045fc4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWxhcHRvcC9sYXB0b3AtYnJhbmQvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNlbGxpbmctbGFwdG9wXFxsYXB0b3AtYnJhbmRcXGxhcHRvcC1icmFuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1sYXB0b3AvbGFwdG9wLWJyYW5kL2xhcHRvcC1icmFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNFLFFBQUE7RUFDQSw0QkFBQTtBQ0NKO0FERUU7RUFDQSxXQUFBO0FDQUY7QURJQTtFQUNFLDZEQUFBO0FDREY7QURLQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNGRjtBRE1BO0VBQ0UsV0FBQTtBQ0hGO0FETUE7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNIRjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNISjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNKSjtBRE9FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0xKO0FEUUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ05KO0FEVUE7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDUEY7QURVQTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUNQRjtBRFVBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUNQRjtBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1BGO0FEVUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDUEY7QURVQTtFQUNFLDZCQUFBO0VBQ0EsaUNBQUE7QUNQRjtBRFVBO0VBQ0UsZ0NBQUE7QUNQRjtBRFVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7QUNQRjtBRFVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsZ0JBQUE7QUNQRjtBRFVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1BGO0FEVUE7RUFDRSxxQkFBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDUEY7QURVQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDUEY7QURVQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctbGFwdG9wL2xhcHRvcC1icmFuZC9sYXB0b3AtYnJhbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgJi50b3Age1xyXG4gICAgdG9wOiAgMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICB9XHJcblxyXG4gICYuYm90dG9tIHtcclxuICBib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNGQkRBRTggMzAlLCAjZmZmIDcwJSk7XHJcbiAgXHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xyXG59XHJcblxyXG4ubWFpbi1tZW51e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5sYWJlbFNlbGVjdHtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2tncm91ZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdG9wOiAyJTtcclxuICBib3R0b206IC0xMCU7XHJcblxyXG4gIC5pbWdfa2FuYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDc4JTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICB9XHJcblxyXG4gIC5pbWdfa2lyaXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNyU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLnQxe1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnQye1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLml0ZW1Cb3JkZXJ7XHJcbiAgYm9yZGVyOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDEpIHNvbGlkIDFweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5pdGVtQm9yZGVyMntcclxuICBib3JkZXI6IHJnYmEoMjM1LCAyMzUsIDIzNSwgMSkgc29saWQgMXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbil7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNlbGVjdGVke1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyNDUsIDI1NSwgMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0LCA5NSwgMTk2LCAxKTtcclxufVxyXG5cclxuLmxhcHRvcC1tZXJrLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5sYXB0b3AtamVuaXMtc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDklO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubGFwdG9wLXJhbS1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMTElO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubGFwdG9wLW9zLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5sYXB0b3Atb3MtYXBwbGUtc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDExJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmxhcHRvcC11a3VyYW4tc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmxhcHRvcC1maXNpay1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTEwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubGFwdG9wLWJhdGVyYWktc2VsZWN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4OyBcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmxhcHRvcC1rZWxlbmdrYXBhbi1zZWxlY3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTEwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udG9nZ2xle1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4udG9nZ2xlMntcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5pb24taXRlbTo6cGFydChuYXRpdmUpe1xyXG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50OyBcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcclxufVxyXG5cclxuaHI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xyXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7IFxyXG4gIG1heC13aWR0aDogNTAlO1xyXG59XHJcblxyXG4ucmFkaW8uaGVhZHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLnJhZGlve1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4uc2hvd3tcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmljX2Ryb3B7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLmJ0bntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b2dnbGV7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDEzJTtcclxuICAtLWhhbmRsZS13aWR0aDogNTAlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzUsIDIzOCwgMjQ1LCAxKTtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLmljX2JhY2sge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogcmdiYSg0LCA5NSwgMTk2LCAxKTtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmhlYWRlci50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cbi5oZWFkZXIuYm90dG9tIHtcbiAgYm90dG9tOiAwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0ZCREFFOCAzMCUsICNmZmYgNzAlKTtcbn1cblxuaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUI7XG59XG5cbi5tYWluLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4ubGFiZWxTZWxlY3Qge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcmQtYmFja2dyb3VkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAyJTtcbiAgYm90dG9tOiAtMTAlO1xufVxuLmNhcmQtYmFja2dyb3VkIC5pbWdfa2FuYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiA3OCU7XG4gIGhlaWdodDogMjAwJTtcbn1cbi5jYXJkLWJhY2tncm91ZCAuaW1nX2tpcmkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNyU7XG4gIGxlZnQ6IDUlO1xuICBoZWlnaHQ6IDIwMCU7XG59XG4uY2FyZC1iYWNrZ3JvdWQgLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4uY2FyZC1iYWNrZ3JvdWQgLnN1YnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwJTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MiB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pdGVtQm9yZGVyIHtcbiAgYm9yZGVyOiAjZWJlYmViIHNvbGlkIDFweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG59XG5cbi5pdGVtQm9yZGVyMiB7XG4gIGJvcmRlcjogI2ViZWJlYiBzb2xpZCAxcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cblxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2VhZjVmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0NWZjNDtcbn1cblxuLmxhcHRvcC1tZXJrLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3AtamVuaXMtc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmxhcHRvcC1yYW0tc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3Atb3Mtc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3Atb3MtYXBwbGUtc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3AtdWt1cmFuLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubGFwdG9wLWZpc2lrLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubGFwdG9wLWJhdGVyYWktc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYXB0b3Ata2VsZW5na2FwYW4tc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi50b2dnbGUge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi50b2dnbGUyIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xufVxuXG5ociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQkVCO1xufVxuXG5ocjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCRUJFQjtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5yYWRpby5oZWFkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5yYWRpbyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2hvdyB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmljX2Ryb3Age1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b2dnbGUge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEzJTtcbiAgLS1oYW5kbGUtd2lkdGg6IDUwJTtcbn1cblxuLmljb24ge1xuICBiYWNrZ3JvdW5kOiAjZWJlZWY1O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaWNfYmFjayB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwNDVmYzQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts ***!
    \********************************************************************************/

  /*! exports provided: LaptopBrandPage */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaptopBrandPage", function () {
      return LaptopBrandPage;
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


    var src_app_pages_landing_modal_alarm_unit_tolak_alarm_unit_tolak_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component */
    "./src/app/pages/landing/modal/alarm-unit-tolak/alarm-unit-tolak.component.ts");
    /* harmony import */


    var src_app_pages_landing_modal_modal_laptop_alarm_form_null_alarm_form_null_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component */
    "./src/app/pages/landing/modal/modal-laptop/alarm-form-null/alarm-form-null.component.ts");

    var LaptopBrandPage = /*#__PURE__*/function () {
      function LaptopBrandPage(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController, modalController) {
        _classCallCheck(this, LaptopBrandPage);

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
        this.stores = [];
        this.searchedStores = [];
        this.data_brand = [];
        this.data_storage = [];
        this.data_memory = [];
        this.data_processor = [];
        this.data_jenis_storage = ['HDD/SATA', 'SSD'];
        this.data_storage_ssd = ['128GB', '256GB', '500GB', '512GB', '1TB'];
        this.data_storage_hdd_sata = ['250GB', '500GB', '1TB'];
        this.data_ukuran_laptop = ['10" - 12"inch', '13" - 15"inch'];
        this.data_os = ['Windows', 'MacOs', 'Non Operating System'];
        this.kondisiLaptop = false;
        this.kondisiTouch = false;
        this.kondisiLcd = false;
        this.kondisiLayarLuar = false;
        this.kondisiKeyboard = false;
        this.kondisiTrackpad = false;
        this.kondisiPort = false;
        this.kondisiBluetooth = false;
        this.kondisiSpeaker = false;
        this.showHidden = true;
        this.customPopoverOptions = {
          header: 'Pilih Tempat Trade In',
          message: 'Toko yang telah dipilih tidak dapat diubah, voucher yang kamu terima hanya berlaku di toko yang kamu pilih.'
        };
        this.customPopoverProcessor = {
          header: 'Pilih Processor'
        };
      }

      _createClass(LaptopBrandPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStore();
          this.toggleKondisiLaptop();
          this.toggleTouchscreen();
          this.toggleKondisiLayar();
          this.toggleKondisiLayarLuar();
          this.toggleKeyboard();
          this.toggleTrackpad();
          this.togglePort();
          this.toggleBluetooth();
          this.toggleSpeaker();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getStore();
          this.selling.removeSelling();
          this.getBrand();
        }
      }, {
        key: "showMore",
        value: function showMore() {
          if (this.showHidden === true) {
            this.showHidden = false;
            document.getElementById("hide").hidden = false;
            document.getElementById("hides").hidden = true;
          } else if (this.showHidden === false) {
            this.showHidden = true;
            document.getElementById("hide").hidden = true;
          }
        }
      }, {
        key: "selectMerk",
        value: function selectMerk(val) {
          this.selected_merk = val;
          document.querySelectorAll('.laptop-merk-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectJenis",
        value: function selectJenis(val) {
          this.selected_jenis = val;
          document.querySelectorAll('.laptop-jenis-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectUkuran",
        value: function selectUkuran(val) {
          this.selected_ukuran = val;
          document.querySelectorAll('.laptop-ukuran-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectOs",
        value: function selectOs(val) {
          this.selected_os = val;
          document.querySelectorAll('.laptop-os-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectRam",
        value: function selectRam(val) {
          this.selected_ram = val;
          document.querySelectorAll('.laptop-ram-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectFisik",
        value: function selectFisik(val) {
          this.selected_fisik = val;
          document.querySelectorAll('.laptop-fisik-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectBaterai",
        value: function selectBaterai(val) {
          this.selected_baterai = val;
          document.querySelectorAll('.laptop-baterai-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "selectKelengkapan",
        value: function selectKelengkapan(val) {
          this.selected_kelengkapan = val;
          document.querySelectorAll('.laptop-kelengkapan-select').forEach(function (element) {
            element.classList.remove("selected");
          });
          var element = document.getElementById(val);
          element.classList.add("selected");
        }
      }, {
        key: "radioSelect",
        value: function radioSelect(event) {
          this.kondisi_layar = event.detail.value;
        }
      }, {
        key: "toggleKondisiLaptop",
        value: function toggleKondisiLaptop() {
          if (this.kondisiLaptop == true) {
            this.kondisi_laptop = 'Nyala';
          } else {
            this.kondisi_laptop = 'Mati Total';
          }
        }
      }, {
        key: "toggleTouchscreen",
        value: function toggleTouchscreen() {
          if (this.kondisiTouch == true) {
            this.jenis_layar = 'Touchscreen';
          } else {
            this.jenis_layar = 'Non Touchscreen';
          }
        }
      }, {
        key: "toggleKondisiLayar",
        value: function toggleKondisiLayar() {
          if (this.kondisiLcd == true) {
            this.kondisi_layar = 'Normal';
          } else {
            this.kondisi_layar = 'Layar Bermasalah';
          }
        }
      }, {
        key: "toggleKondisiLayarLuar",
        value: function toggleKondisiLayarLuar() {
          if (this.kondisiLayarLuar == true) {
            this.outer_valueSelected = 'Normal';
          } else {
            this.outer_valueSelected = 'Layar Bermasalah';
          }
        }
      }, {
        key: "toggleKeyboard",
        value: function toggleKeyboard() {
          if (this.kondisiKeyboard == true) {
            this.keyboard = 'Normal';
          } else {
            this.keyboard = 'Tidak Berfungsi';
          }
        }
      }, {
        key: "toggleTrackpad",
        value: function toggleTrackpad() {
          if (this.kondisiTrackpad == true) {
            this.trackpad = 'Normal';
          } else {
            this.trackpad = 'Tidak Berfungsi';
          }
        }
      }, {
        key: "togglePort",
        value: function togglePort() {
          if (this.kondisiPort == true) {
            this.port = 'Berfungsi';
          } else {
            this.port = 'Tidak Berfungsi';
          }
        }
      }, {
        key: "toggleBluetooth",
        value: function toggleBluetooth() {
          if (this.kondisiBluetooth == true) {
            this.wifi = 'Berfungsi';
          } else {
            this.wifi = 'Tidak Berfungsi';
          }
        }
      }, {
        key: "toggleSpeaker",
        value: function toggleSpeaker() {
          if (this.kondisiSpeaker == true) {
            this.speaker = 'Berfungsi';
          } else {
            this.speaker = 'Tidak Berfungsi';
          }
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
            _this4.sellingApiService.getBrandLaptop(token).subscribe(function (response) {
              _this4.data_brand = response.data.brand;
              _this4.data_storage = response.data.storages;
              _this4.data_memory = response.data.memory;
              _this4.data_processor = response.data.processor; //  console.log(this.data_brand)
            }, function (err) {
              _this4.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "openModalSubmit",
        value: function openModalSubmit(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modalAlert, modalSubmit;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.selected_merk == null || this.selected_jenis == null || this.selected_ram == null || this.selected_ukuran == null || this.selected_os == null || this.selected_fisik == null || this.selected_baterai == null || this.selected_kelengkapan == null)) {
                      _context3.next = 4;
                      break;
                    }

                    this.utilsService.showToast("Lengkapi pengisian form.");
                    _context3.next = 19;
                    break;

                  case 4:
                    if (!(this.kondisi_laptop == "Mati Total")) {
                      _context3.next = 13;
                      break;
                    }

                    _context3.next = 7;
                    return this.modalController.create({
                      component: src_app_pages_landing_modal_alarm_unit_tolak_alarm_unit_tolak_component__WEBPACK_IMPORTED_MODULE_12__["AlarmUnitTolakComponent"],
                      cssClass: 'my-custom-modal-tolak-css',
                      backdropDismiss: false,
                      id: 'my-modal-id'
                    });

                  case 7:
                    modalAlert = _context3.sent;
                    _context3.next = 10;
                    return modalAlert.present();

                  case 10:
                    return _context3.abrupt("return", _context3.sent);

                  case 13:
                    _context3.next = 15;
                    return this.modalController.create({
                      component: src_app_pages_landing_modal_modal_laptop_alarm_form_null_alarm_form_null_component__WEBPACK_IMPORTED_MODULE_13__["AlarmFormNullComponent"],
                      cssClass: 'my-custom-modal-css',
                      backdropDismiss: false,
                      id: 'my-modal-id',
                      componentProps: {
                        brand: this.selected_merk,
                        memory: this.selected_ram,
                        lokasi_trade: this.lokasi_trade,
                        outer_valueSelected: this.outer_valueSelected,
                        condition_valueSelected: this.selected_fisik,
                        addition_valueSelected: this.selected_kelengkapan,
                        jenis_storage: this.selected_jenis,
                        kondisi_laptop: this.kondisi_laptop,
                        jenis_layar: this.jenis_layar,
                        baterai: this.selected_baterai,
                        kondisi_layar: this.kondisi_layar,
                        keyboard: this.keyboard,
                        trackpad: this.trackpad,
                        port: this.port,
                        wifi: this.wifi,
                        camera: this.camera,
                        speaker: this.speaker,
                        processor: this.processor,
                        ukuran_laptop: this.selected_ukuran,
                        os: this.selected_os,
                        more_addition: this.more_addition
                      }
                    });

                  case 15:
                    modalSubmit = _context3.sent;
                    _context3.next = 18;
                    return modalSubmit.present();

                  case 18:
                    return _context3.abrupt("return", _context3.sent);

                  case 19:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // submit() {
        //   if ((this.selected_merk == null || this.selected_jenis == null || this.selected_ram == null || this.selected_ukuran == null || this.selected_os == null || this.selected_fisik == null || this.selected_baterai == null || this.selected_kelengkapan == null )){
        //     this.utilsService.showToast("Lengkapi pengisian form.");
        //     console.log(this.kondisi_laptop)
        //   } else if(this.kondisi_laptop == "Mati Total"){
        //     alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
        //   }else {
        //     this.presentAlertConfirm();
        //   }
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
                              brand: _this5.selected_merk,
                              memory: _this5.selected_ram,
                              lokasi_trade: _this5.lokasi_trade,
                              inner_valueSelected: _this5.inner_valueSelected,
                              outer_valueSelected: _this5.outer_valueSelected,
                              condition_valueSelected: _this5.selected_fisik,
                              addition_valueSelected: _this5.selected_kelengkapan,
                              jenis_storage: _this5.selected_jenis,
                              kondisi_laptop: _this5.kondisi_laptop,
                              jenis_layar: _this5.jenis_layar,
                              baterai: _this5.selected_baterai,
                              kondisi_layar: _this5.kondisi_layar,
                              keyboard: _this5.keyboard,
                              trackpad: _this5.trackpad,
                              port: _this5.port,
                              wifi: _this5.wifi,
                              camera: _this5.camera,
                              speaker: _this5.speaker,
                              processor: _this5.processor,
                              ukuran_laptop: _this5.selected_ukuran,
                              os: _this5.selected_os,
                              more_addition: _this5.more_addition
                            }
                          };

                          _this5.navCtrl.navigateForward(["/landing/laptop-brand/detail-unit"], navigationExtras);
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

      return LaptopBrandPage;
    }();

    LaptopBrandPage.ctorParameters = function () {
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
      }];
    };

    LaptopBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-laptop-brand',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./laptop-brand.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./laptop-brand.page.scss */
      "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss"))["default"]]
    })], LaptopBrandPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-laptop-laptop-brand-laptop-brand-module-es5.js.map