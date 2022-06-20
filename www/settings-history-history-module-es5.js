function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingsHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"color: black;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: black;\">Daftar Transaksi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n<div *ngFor=\"let item of trLaptop\">\n  <ion-card *ngIf = \"item.jenis_layanan == 2\">\n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle>Barang</ion-card-subtitle>\n            <ion-card-title>Laptop {{item.brand}}</ion-card-title>\n          </ion-col>\n          <ion-col style=\"padding-right: 50px;\">\n            <p class=\"status\">status</p>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle>Tipe</ion-card-subtitle>\n            <ion-card-title>Ram : {{item.memory}} GB</ion-card-title>\n            <ion-card-title>Storage : {{item.storages}} GB</ion-card-title>\n\n          </ion-col>\n          <ion-col>\n            <ion-card-subtitle>price</ion-card-subtitle>\n            <ion-card-title>Rp.{{item.price | number}}</ion-card-title>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n<div *ngFor=\"let item of trTV\">\n  <ion-card *ngIf = \"item.jenis_layanan == 3\">\n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle>Barang</ion-card-subtitle>\n            <ion-card-title>TV {{item.brand}}</ion-card-title>\n          </ion-col>\n          <ion-col style=\"padding-right: 50px;\">\n            <p class=\"status\">status</p>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle>Tipe</ion-card-subtitle>\n            <ion-card-title>{{item.jenis_tv}}, {{item.inch}}</ion-card-title>\n\n          </ion-col>\n          <ion-col>\n            <ion-card-subtitle>price</ion-card-subtitle>\n            <ion-card-title>Rp.{{item.price | number}}</ion-card-title>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n<div *ngFor=\"let item of trPS\">\n  <ion-card *ngIf = \"item.jenis_layanan == 4\">\n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle>Barang</ion-card-subtitle>\n            <ion-card-title>{{item.jenis_ps}}</ion-card-title>\n          </ion-col>\n          <ion-col style=\"padding-right: 50px;\">\n            <p class=\"status\">status</p>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle>Tipe</ion-card-subtitle>\n            <ion-card-title>{{item.type}}, {{item.storages}} GB</ion-card-title>\n\n          </ion-col>\n          <ion-col>\n            <ion-card-subtitle>price</ion-card-subtitle>\n            <ion-card-title>Rp.{{item.price | number}}</ion-card-title>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n<div *ngFor=\"let item of trKulkas\">\n  <ion-card *ngIf = \"item.jenis_layanan == 5\">\n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle>Barang</ion-card-subtitle>\n            <ion-card-title>Kulkas {{item.brand}}</ion-card-title>\n          </ion-col>\n          <ion-col style=\"padding-right: 50px;\">\n            <p class=\"status\">status</p>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle>Tipe</ion-card-subtitle>\n            <ion-card-title>{{item.model}}, {{item.type}}</ion-card-title>\n\n          </ion-col>\n          <ion-col>\n            <ion-card-subtitle>price</ion-card-subtitle>\n            <ion-card-title>Rp.{{item.price | number}}</ion-card-title>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n<div *ngFor=\"let item of trMesinCuci\">\n  <ion-card *ngIf = \"item.jenis_layanan == 6\">\n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle>Barang</ion-card-subtitle>\n            <ion-card-title>TV {{item.brand}}</ion-card-title>\n          </ion-col>\n          <ion-col style=\"padding-right: 50px;\"> \n            <p class=\"status\">status</p>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle>Tipe</ion-card-subtitle>\n            <ion-card-title>{{item.type}}</ion-card-title>\n\n          </ion-col>\n          <ion-col>\n            <ion-card-subtitle>price</ion-card-subtitle>\n            <ion-card-title>Rp.{{item.price | number}}</ion-card-title>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n</ion-content>\n\n  \n    ";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/history/history-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/settings/history/history-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: HistoryPageRoutingModule */

  /***/
  function srcAppPagesLandingSettingsHistoryHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function () {
      return HistoryPageRoutingModule;
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


    var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/landing/settings/history/history.page.ts");

    var routes = [{
      path: '',
      component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }];

    var HistoryPageRoutingModule = function HistoryPageRoutingModule() {
      _classCallCheck(this, HistoryPageRoutingModule);
    };

    HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/history/history.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/settings/history/history.module.ts ***!
    \******************************************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppPagesLandingSettingsHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
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


    var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./history-routing.module */
    "./src/app/pages/landing/settings/history/history-routing.module.ts");
    /* harmony import */


    var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/landing/settings/history/history.page.ts");

    var HistoryPageModule = function HistoryPageModule() {
      _classCallCheck(this, HistoryPageModule);
    };

    HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/history/history.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/settings/history/history.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingsHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".status {\n  background-color: green;\n  color: white;\n  background-size: auto;\n  border-radius: 50px;\n  margin-left: 50px;\n  padding-top: 5px;\n  padding-left: 20px;\n  height: 30px;\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9oaXN0b3J5L0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xcaGlzdG9yeVxcaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNELHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5zdGF0dXMge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn0iLCIuc3RhdHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA4MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/history/history.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/landing/settings/history/history.page.ts ***!
    \****************************************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppPagesLandingSettingsHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
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
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var HistoryPage = /*#__PURE__*/function () {
      function HistoryPage(storage, sellingApiService, utilsService) {
        _classCallCheck(this, HistoryPage);

        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.utilsService = utilsService;
        this.segment = 0;
        this.sliderOptions = {
          initialSlide: 0,
          slidePerView: 1,
          speed: 400
        };
        this.trLaptop = [];
        this.trPS = [];
        this.trTV = [];
        this.trKulkas = [];
        this.trMesinCuci = [];
        this.stores = [];
        this.vouchers = [];
      }

      _createClass(HistoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getTransaction();
        }
      }, {
        key: "getTransaction",
        value: function getTransaction() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this.sellingApiService.getDetailTransaction(token).subscribe(function (response) {
              _this.trLaptop = response.data.data_arr;
              _this.trTV = response.data.data_arr2;
              _this.trPS = response.data.data_arr3;
              _this.trKulkas = response.data.data_arr5;
              _this.trMesinCuci = response.data.data_arr6;
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
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.selectedSlide = slides;
                    slides.getActiveIndex().then(function (selectedIndex) {
                      _this2.segment = selectedIndex;
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return HistoryPage;
    }();

    HistoryPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }];
    };

    HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/pages/landing/settings/history/history.page.scss"))["default"]]
    })], HistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=settings-history-history-module-es5.js.map