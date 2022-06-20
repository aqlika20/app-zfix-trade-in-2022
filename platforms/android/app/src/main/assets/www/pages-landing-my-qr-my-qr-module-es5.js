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


<<<<<<< HEAD
    __webpack_exports__["default"] = "<ion-content>\n  <div>\n    <h3>FAQ <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon></h3>\n  </div>\n  <div class=\"desc\">\n    <h3>Mengapa harga yang didapat berbeda?</h3>\n    <p>Harga akan berubah sesuai kondisi unit yang sebenarnya setelah dilakukan pengecekkan oleh tim kami</p>\n  </div>\n  <div class=\"desc\">\n    <h3>Mengapa kode saya tidak dapat dipakai?</h3>\n    <p>QR Code ini hanya bisa digunakan di lokasi toko yang telah dipilih oleh kamu</p>\n  </div>\n\n</ion-content>\n";
=======
    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-item>\r\n    <ion-label class=\"title\">FAQ</ion-label>\r\n    <ion-icon name=\"close\" (click)=\"dismissModal()\"></ion-icon>\r\n  </ion-item>\r\n  <div class=\"desk\">\r\n    <ion-label class=\"t1\">Mengapa harga yang didapat berbeda?</ion-label>\r\n    <p class=\"t2\">Harga akan berubah sesuai kondisi unit yang sebenarnya setelah dilakukan pengecekkan oleh tim kami</p>\r\n    <br>\r\n    <ion-label class=\"t1\">Mengapa kode saya tidak dapat dipakai?</ion-label>\r\n    <p class=\"t2\">QR Code ini hanya bisa digunakan di lokasi toko yang telah dipilih oleh kamu</p>\r\n  </div>\r\n</ion-content>";
>>>>>>> e1124e0ccaa1e710e8bd72857b86b8926d0f402b
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


<<<<<<< HEAD
    __webpack_exports__["default"] = "<ion-content>\n  <h2>My QR<img (click)=\"openMyModal($event)\" src=\"../../../../assets/images/Vector.png\" alt=\"\"></h2>\n  \n  <ion-card *ngFor=\"let item of qrLaptop\">\n    <div *ngFor=\"let vou of vouchers\">\n      <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 2\">\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"8\" style=\"margin-left: 7px;\">Laptop <p class=\"text\">Active</p>\n                <ion-row style=\"margin-top: 20px;\">\n                  <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n                </ion-row>\n                <ion-row>\n                  <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n                </ion-row>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ngx-qrcode \n                [width]=200\n                [margin]=0\n                value = \"{{item.id}}\">\n                </ngx-qrcode>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n      <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"7\" style=\"margin-left: 7px;\">\n              <ion-label text-wrap>\n                <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n                <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n                </h3>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n</ion-card>\n\n  <ion-card *ngFor=\"let item of qrTV\">\n      <div *ngFor=\"let vou of vouchers\">\n        <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 3\">\n          <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"8\" style=\"margin-left: 7px;\">Televisi <p class=\"text\">Active</p>\n                  <ion-row style=\"margin-top: 20px;\">\n                    <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n                  </ion-row>\n                  <ion-row>\n                    <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n                  </ion-row>\n                </ion-col>\n                <ion-col size=\"3\">\n                  <ngx-qrcode \n                  [width]=200\n                  [margin]=0\n                  value = \"{{item.id}}\">\n                  </ngx-qrcode>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n        <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"7\" style=\"margin-left: 7px;\">\n                <ion-label text-wrap>\n                  <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n                  <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n                  </h3>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"3\">\n                <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n\n  </ion-card>\n\n  <ion-card *ngFor=\"let item of qrPS\">\n    <div *ngFor=\"let vou of vouchers\">\n      <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 4\">\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"8\" style=\"margin-left: 7px;\">PlayStation <p class=\"text\">Active</p>\n                <ion-row style=\"margin-top: 20px;\">\n                  <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n                </ion-row>\n                <ion-row>\n                  <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n                </ion-row>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ngx-qrcode \n                [width]=200\n                [margin]=0\n                value = \"{{item.id}}\">\n                </ngx-qrcode>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n      <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"7\" style=\"margin-left: 7px;\">\n              <ion-label text-wrap>\n                <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n                <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n                </h3>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n</ion-card>\n\n<ion-card *ngFor=\"let item of qrKulkas\">\n  <div *ngFor=\"let vou of vouchers\">\n    <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 5\">\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\" style=\"margin-left: 7px;\">Kulkas <p class=\"text\">Active</p>\n              <ion-row style=\"margin-top: 20px;\">\n                <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n              </ion-row>\n              <ion-row>\n                <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ngx-qrcode \n              [width]=200\n              [margin]=0\n              value = \"{{item.id}}\">\n              </ngx-qrcode>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n    <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"7\" style=\"margin-left: 7px;\">\n            <ion-label text-wrap>\n              <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n              <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n              </h3>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-card>\n\n<ion-card *ngFor=\"let item of qrMesinCuci\">\n  <div *ngFor=\"let vou of vouchers\">\n    <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 6\">\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\" style=\"margin-left: 7px;\">Mesin Cuci <p class=\"text\">Active</p>\n              <ion-row style=\"margin-top: 20px;\">\n                <h3 class=\"price\">Rp.{{item.price | number}}</h3>\n              </ion-row>\n              <ion-row>\n                <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ngx-qrcode \n              [width]=200\n              [margin]=0\n              value = \"{{item.id}}\">\n              </ngx-qrcode>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\n    <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"7\" style=\"margin-left: 7px;\">\n            <ion-label text-wrap>\n              <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\n              <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\n              </h3>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-card>\n  \n</ion-content>";
=======
    __webpack_exports__["default"] = "<ion-content>\r\n  <h2>My QR<img (click)=\"openMyModal($event)\" src=\"../../../../assets/images/Vector.png\" alt=\"\"></h2>\r\n  \r\n  <ion-card *ngFor=\"let item of qrLaptop\">\r\n    <div *ngFor=\"let vou of vouchers\">\r\n      <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 2\">\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"8\" style=\"margin-left: 7px;\">Laptop <p class=\"text\">Active</p>\r\n                <ion-row style=\"margin-top: 20px;\">\r\n                  <h3 class=\"price\">Rp.{{item.price | number}}</h3>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <ngx-qrcode \r\n                [width]=200\r\n                [margin]=0\r\n                value = \"{{item.id}}\">\r\n                </ngx-qrcode>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n\r\n    <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\r\n      <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"7\" style=\"margin-left: 7px;\">\r\n              <ion-label text-wrap>\r\n                <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\r\n                <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\r\n                </h3>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n</ion-card>\r\n\r\n  <ion-card *ngFor=\"let item of qrTV\">\r\n      <div *ngFor=\"let vou of vouchers\">\r\n        <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 3\">\r\n          <ion-item>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"8\" style=\"margin-left: 7px;\">Televisi <p class=\"text\">Active</p>\r\n                  <ion-row style=\"margin-top: 20px;\">\r\n                    <h3 class=\"price\">Rp.{{item.price | number}}</h3>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\r\n                  </ion-row>\r\n                </ion-col>\r\n                <ion-col size=\"3\">\r\n                  <ngx-qrcode \r\n                  [width]=200\r\n                  [margin]=0\r\n                  value = \"{{item.id}}\">\r\n                  </ngx-qrcode>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n\r\n      <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\r\n        <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"7\" style=\"margin-left: 7px;\">\r\n                <ion-label text-wrap>\r\n                  <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\r\n                  <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\r\n                  </h3>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n  </ion-card>\r\n\r\n  <ion-card *ngFor=\"let item of qrPS\">\r\n    <div *ngFor=\"let vou of vouchers\">\r\n      <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 4\">\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"8\" style=\"margin-left: 7px;\">PlayStation <p class=\"text\">Active</p>\r\n                <ion-row style=\"margin-top: 20px;\">\r\n                  <h3 class=\"price\">Rp.{{item.price | number}}</h3>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <ngx-qrcode \r\n                [width]=200\r\n                [margin]=0\r\n                value = \"{{item.id}}\">\r\n                </ngx-qrcode>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n\r\n    <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\r\n      <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"7\" style=\"margin-left: 7px;\">\r\n              <ion-label text-wrap>\r\n                <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\r\n                <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\r\n                </h3>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n</ion-card>\r\n\r\n<ion-card *ngFor=\"let item of qrKulkas\">\r\n  <div *ngFor=\"let vou of vouchers\">\r\n    <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 5\">\r\n      <ion-item>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"8\" style=\"margin-left: 7px;\">Kulkas <p class=\"text\">Active</p>\r\n              <ion-row style=\"margin-top: 20px;\">\r\n                <h3 class=\"price\">Rp.{{item.price | number}}</h3>\r\n              </ion-row>\r\n              <ion-row>\r\n                <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ngx-qrcode \r\n              [width]=200\r\n              [margin]=0\r\n              value = \"{{item.id}}\">\r\n              </ngx-qrcode>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\r\n    <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"7\" style=\"margin-left: 7px;\">\r\n            <ion-label text-wrap>\r\n              <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\r\n              <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\r\n              </h3>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-card>\r\n\r\n<ion-card *ngFor=\"let item of qrMesinCuci\">\r\n  <div *ngFor=\"let vou of vouchers\">\r\n    <ion-list (click)=\"openMyModalQR(vou.voucher_key, item.id)\" *ngIf = \"item.status == 4 && item.jenis_layanan == 6\">\r\n      <ion-item>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"8\" style=\"margin-left: 7px;\">Mesin Cuci <p class=\"text\">Active</p>\r\n              <ion-row style=\"margin-top: 20px;\">\r\n                <h3 class=\"price\">Rp.{{item.price | number}}</h3>\r\n              </ion-row>\r\n              <ion-row>\r\n                <h3 *ngIf = \"item.voucher_id == vou.id \">{{vou.voucher_key}}</h3>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ngx-qrcode \r\n              [width]=200\r\n              [margin]=0\r\n              value = \"{{item.id}}\">\r\n              </ngx-qrcode>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <ion-list lines=\"none\" *ngFor=\"let loc of stores\">\r\n    <ion-item *ngIf = \"item.lokasi_trade == loc.id \">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"7\" style=\"margin-left: 7px;\">\r\n            <ion-label text-wrap>\r\n              <p style=\"margin-left: 0; margin-bottom: 0;\">{{loc.name}}</p>\r\n              <h3 (click)=\"navigate(loc.address)\" style=\"color: blue;\">Open Map<img style=\"margin-left: 0;\" src=\"./assets/images/ico_external_link_minor.png\" />\r\n              </h3>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <img style=\"height: 48px; width: 48px;\" class=\"qr\" (click)=\"openMyModal($event)\" src=\"../../../../assets/images/maps.png\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-card>\r\n  \r\n</ion-content>";
>>>>>>> e1124e0ccaa1e710e8bd72857b86b8926d0f402b
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


<<<<<<< HEAD
    __webpack_exports__["default"] = "h3 {\n  margin: 10px !important;\n  font-size: 14px;\n}\n\np {\n  margin-left: 10px;\n  font-size: 12px;\n}\n\nion-icon {\n  margin-left: 80%;\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desc {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1mYXEvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG1vZGFsXFxtb2RhbC1mYXFcXG1vZGFsLWZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1mYXEvbW9kYWwtZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDQyxpQkFBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21vZGFsL21vZGFsLWZhcS9tb2RhbC1mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7IFxyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iLCJoMyB7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbnAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24taWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG59XG5cbi5kZXNjIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */";
=======
    __webpack_exports__["default"] = "ion-icon {\n  background-color: black;\n  color: white;\n  border-radius: 90px;\n}\n\n.desk {\n  padding: 5%;\n}\n\n.title {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t1 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 17px;\n  color: black;\n  text-align: left;\n}\n\n.t2 {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  color: black;\n  text-align: justify;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1mYXEvRDpcXHpmaXgtdHJhZGUtaW4tMjAyMi9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG1vZGFsXFxtb2RhbC1mYXFcXG1vZGFsLWZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tb2RhbC9tb2RhbC1mYXEvbW9kYWwtZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7QUNDdkI7O0FERUE7RUFDSSxXQUFXO0FDQ2Y7O0FERUE7RUFDSSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtBQ0NwQjs7QURFQTtFQUNJLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FDQ3BCOztBREVBO0VBQ0ksOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7QUNDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21vZGFsL21vZGFsLWZhcS9tb2RhbC1mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbn1cclxuXHJcbi5kZXNre1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udDEge1xyXG4gICAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50MiB7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufSIsImlvbi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbn1cblxuLmRlc2sge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udDEge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50MiB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbiJdfQ== */";
>>>>>>> e1124e0ccaa1e710e8bd72857b86b8926d0f402b
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


<<<<<<< HEAD
    __webpack_exports__["default"] = "ion-card {\n  border-radius: 20px;\n}\n\nh2 {\n  margin-top: 20px;\n  margin-left: 20px;\n}\n\nimg {\n  margin-left: 75%;\n}\n\n.qr {\n  width: 84px;\n  height: 84px;\n}\n\np {\n  margin-left: 10px;\n}\n\n.text {\n  background-color: green;\n  color: white;\n  background-size: auto;\n  border-radius: 50px;\n  padding: 5px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: inline;\n}\n\n.price {\n  color: #395398;\n  margin-bottom: 0;\n  font-size: 22px;\n}\n\n.device-detail-popover {\n  top: 10% !important;\n  bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbXktcXJcXG15LXFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9teS1xci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVDO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NMOztBREVDO0VBQ0csbUJBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9teS1xci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbmltZyB7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcclxufVxyXG5cclxuLnFyIHtcclxuICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4gLnByaWNlIHtcclxuICAgICBjb2xvcjogIzM5NTM5ODtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMjJweDtcclxuIH1cclxuIFxyXG4gLmRldmljZS1kZXRhaWwtcG9wb3ZlcntcclxuICAgIHRvcDogMTAlIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogMHB4IWltcG9ydGFudDtcclxufSIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuaDIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLnFyIHtcbiAgd2lkdGg6IDg0cHg7XG4gIGhlaWdodDogODRweDtcbn1cblxucCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnByaWNlIHtcbiAgY29sb3I6ICMzOTUzOTg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmRldmljZS1kZXRhaWwtcG9wb3ZlciB7XG4gIHRvcDogMTAlICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
=======
    __webpack_exports__["default"] = "ion-card {\n  border-radius: 20px;\n}\n\nh2 {\n  margin-top: 20px;\n  margin-left: 20px;\n}\n\nimg {\n  margin-left: 75%;\n}\n\n.qr {\n  width: 84px;\n  height: 84px;\n}\n\np {\n  margin-left: 10px;\n}\n\n.text {\n  background-color: green;\n  color: white;\n  background-size: auto;\n  border-radius: 50px;\n  padding: 5px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: inline;\n}\n\n.price {\n  color: #395398;\n  margin-bottom: 0;\n  font-size: 22px;\n}\n\n.device-detail-popover {\n  top: 10% !important;\n  bottom: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbXktcXJcXG15LXFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9teS1xci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7QUNDdkI7O0FERUE7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FDQ3JCOztBREVBO0VBQ0ksZ0JBQWdCO0FDQ3BCOztBREVBO0VBQ0ksV0FBVztFQUNYLFlBQVk7QUNDaEI7O0FERUE7RUFDSSxpQkFBaUI7QUNDckI7O0FERUE7RUFDSSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQ0NuQjs7QURFQztFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQ0NwQjs7QURFQztFQUNHLG1CQUFrQjtFQUNsQixzQkFBcUI7QUNDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL215LXFyL215LXFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuaW1nIHsgXHJcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xyXG59XHJcblxyXG4ucXIge1xyXG4gICAgd2lkdGg6IDg0cHg7XHJcbiAgICBoZWlnaHQ6IDg0cHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbiAucHJpY2Uge1xyXG4gICAgIGNvbG9yOiAjMzk1Mzk4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gfVxyXG4gXHJcbiAuZGV2aWNlLWRldGFpbC1wb3BvdmVye1xyXG4gICAgdG9wOiAxMCUhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAwcHghaW1wb3J0YW50O1xyXG59IiwiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5oMiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pbWcge1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4ucXIge1xuICB3aWR0aDogODRweDtcbiAgaGVpZ2h0OiA4NHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ucHJpY2Uge1xuICBjb2xvcjogIzM5NTM5ODtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uZGV2aWNlLWRldGFpbC1wb3BvdmVyIHtcbiAgdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */";
>>>>>>> e1124e0ccaa1e710e8bd72857b86b8926d0f402b
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