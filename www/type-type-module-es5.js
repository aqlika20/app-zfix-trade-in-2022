function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-type-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingTypeTypePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"header\">\r\n    <ion-row>\r\n      <div class=\"title\">\r\n        <p class=\"main_title\">Selamat Pagi,</p>\r\n        <p class=\"subtitle\">Mau tukar tambah apa hari ini?</p>\r\n      </div>\r\n      <ion-col col-2>\r\n        <div class=\"card-backgroud\">\r\n          <div class=\"img\">\r\n            <img src=\"../../../../assets/images/atas_kanan.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img_kanan\">\r\n            <img src=\"../../../../assets/icon/notification.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <ion-card-subtitle class=\"judul\">Pilih Barang</ion-card-subtitle>\r\n\r\n      <div class=\"middle\">\r\n        <ion-grid>\r\n          <div class=\"row\">\r\n            <div class=\"col\" col-6 (click)=\"goTo(4)\">\r\n              <ion-card class=\"cardgrid color-ps\">\r\n                <!-- <div class=\"size\"> -->\r\n                  <!-- <img class=\"grid\" src=\"../../../../assets/images/header/ps.png\" alt=\"\"> -->\r\n                  <div class=\"img_right\">\r\n                    <img src=\"../../../../assets/images/baru/psxxhdpi.png\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"text_left\">\r\n                    Play\r\n                  </div>\r\n                  <br>\r\n                  <div class=\"text_left2\">\r\n                    Station\r\n                  </div>\r\n                <!-- </div> -->\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/ps/ps.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\r\n                <h2>Scan PlayStation</h2> -->\r\n              </ion-card>\r\n            </div>\r\n\r\n            <div class=\"col\" col-6 (click)=\"goTo(1)\">\r\n              <ion-card class=\"cardgrid color-hp\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/hpxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Smart\r\n                </div>\r\n                <br>\r\n                <div class=\"text_left2\">\r\n                  Phone\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/mobile/hp.png\" alt=\"\"> -->\r\n                <!-- <ion-icon class=\"icon-a\" name=\"phone-portrait-outline\"></ion-icon>\r\n                <h2>Scan Handphone<br>/Tablet </h2>   -->\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col\" col-6  (click)=\"goTo(3)\">\r\n              <ion-card class=\"cardgrid color-laptop\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/laptopxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Laptop\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/laptop/laptop.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\r\n                <h2>Scan Laptop</h2> -->\r\n              </ion-card>\r\n            </div>\r\n            <div class=\"col\" col-6 (click)=\"goTo(2)\">\r\n              <ion-card class=\"cardgrid color-tv\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/tvxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  TV\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/television/tv.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"tv-sharp\"></ion-icon>\r\n                <h2>Scan Television </h2> -->\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"row\">\r\n            <div class=\"col\" col-6  (click)=\"goTo(5)\">\r\n              <ion-card class=\"cardgrid color-kulkas\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/kulkasxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Kulkas\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/kulkas/kulkas.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\r\n                <h2>Scan Laptop</h2> -->\r\n              </ion-card>\r\n            </div>\r\n            <div class=\"col\" col-6 (click)=\"goTo(6)\">\r\n              <ion-card class=\"cardgrid color-cuci\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/mesincucixxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Mesin\r\n                </div>\r\n                <br>\r\n                <div class=\"text_left2\">\r\n                  Cuci\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/mesin_cuci/mesin_cuci.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\r\n                <h2>Scan PlayStation</h2> -->\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n        </ion-grid>\r\n      </div>\r\n      <div class=\"garis\">\r\n        <ion-label class=\"ion-text-wrap font\"><img src=\"../../../../assets/icon/star.png\" style=\"margin-right: 10px;\" alt=\"\">Barang lainnya akan segera hadir</ion-label>\r\n      </div>\r\n\r\n      <div class=\"center\">\r\n        <ion-label class=\"ion-text-wrap font\">Bekerjasama dengan</ion-label>\r\n      </div>\r\n      <ion-grid style=\"margin-bottom: 20%;\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/samsung.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/sony.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/acer.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/lenovo.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/lg.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/type/type-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/landing/type/type-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: TypePageRoutingModule */

  /***/
  function srcAppPagesLandingTypeTypeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypePageRoutingModule", function () {
      return TypePageRoutingModule;
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


    var _type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./type.page */
    "./src/app/pages/landing/type/type.page.ts");

    var routes = [{
      path: '',
      component: _type_page__WEBPACK_IMPORTED_MODULE_3__["TypePage"]
    }];

    var TypePageRoutingModule = function TypePageRoutingModule() {
      _classCallCheck(this, TypePageRoutingModule);
    };

    TypePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TypePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/type/type.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/landing/type/type.module.ts ***!
    \***************************************************/

  /*! exports provided: TypePageModule */

  /***/
  function srcAppPagesLandingTypeTypeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypePageModule", function () {
      return TypePageModule;
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


    var _type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./type-routing.module */
    "./src/app/pages/landing/type/type-routing.module.ts");
    /* harmony import */


    var _type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./type.page */
    "./src/app/pages/landing/type/type.page.ts");

    var TypePageModule = function TypePageModule() {
      _classCallCheck(this, TypePageModule);
    };

    TypePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _type_routing_module__WEBPACK_IMPORTED_MODULE_5__["TypePageRoutingModule"]],
      declarations: [_type_page__WEBPACK_IMPORTED_MODULE_6__["TypePage"]]
    })], TypePageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/type/type.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/landing/type/type.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingTypeTypePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = ".header {\n  background-color: #395398;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.header.bottom {\n  bottom: 0px;\n}\n.grid {\n  width: 100%;\n  height: 100%;\n}\n.cardgrid {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 23%;\n  left: 60%;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.title {\n  margin-top: 50px;\n  margin-left: 20px;\n  font-family: Plus Jakarta Sans;\n  color: #fff;\n}\n.main_title {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 30px;\n  font-family: Plus Jakarta Sans Extra;\n  line-height: 40px;\n}\n.subtitle {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n}\n.main-menu {\n  display: flex;\n  flex-direction: column;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\nion-card-subtitle {\n  margin-top: 30px;\n  margin-left: 20px;\n  font-size: 20px;\n  color: black;\n  font-family: Plus Jakarta Sans Extra;\n}\n.garis {\n  width: 86%;\n  height: 12%;\n  display: flex;\n  justify-content: center;\n  padding-top: 6%;\n  padding-bottom: 6%;\n  border: 3px dashed #EBEBEB;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n.font {\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n.center {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFx0eXBlXFx0eXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL3R5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNFLFFBQUE7RUFDQSw0QkFBQTtBQ0NKO0FER0k7RUFDQSxXQUFBO0FDREo7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDSkY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDSEY7QURLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNISjtBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0pGO0FET0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE9BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNKRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNMRjtBRFFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FDUkY7QURXQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSRjtBRFdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvdHlwZS90eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTUzOTg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgJi50b3Age1xyXG4gICAgdG9wOiAgMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgICYuYm90dG9tIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5ncmlke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmRncmlke1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG4uY2FyZC1iYWNrZ3JvdWR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgLmltZ19rYW5hbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjMlO1xyXG4gICAgbGVmdDogNjAlO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRpdGxle1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiAjZmZmOyBcclxufVxyXG5cclxuLm1haW5fdGl0bGV7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnN1YnRpdGxle1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1haW4tbWVudXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxufVxyXG5cclxuLmdhcmlze1xyXG4gIHdpZHRoOiA4NiU7XHJcbiAgaGVpZ2h0OiAxMiU7XHJcbiAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDYlO1xyXG5cclxuICBib3JkZXI6IDNweCBkYXNoZWQgI0VCRUJFQjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiA3JTtcclxuICBtYXJnaW4tcmlnaHQ6IDclO1xyXG59XHJcblxyXG4uZm9udHtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NTM5ODtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmhlYWRlci50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cbi5oZWFkZXIuYm90dG9tIHtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmRncmlkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VkIC5pbWdfa2FuYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjMlO1xuICBsZWZ0OiA2MCU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYWluX3RpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWFpbi1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xufVxuXG4uZ2FyaXMge1xuICB3aWR0aDogODYlO1xuICBoZWlnaHQ6IDEyJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA2JTtcbiAgcGFkZGluZy1ib3R0b206IDYlO1xuICBib3JkZXI6IDNweCBkYXNoZWQgI0VCRUJFQjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIG1hcmdpbi1yaWdodDogNyU7XG59XG5cbi5mb250IHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */";
=======
    __webpack_exports__["default"] = ".header {\n  background-color: #395398;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.header.bottom {\n  bottom: 0px;\n}\n\n.grid {\n  width: 100%;\n  height: 150%;\n}\n\n.img_right {\n  position: absolute;\n  top: 0;\n  left: 40%;\n  height: 100%;\n}\n\n.text_left {\n  position: absolute;\n  top: 20%;\n  left: 10%;\n  height: 100%;\n  font-style: normal;\n  font-weight: 550;\n  font-size: 16px;\n  font-family: Plus Jakarta Sans Extra;\n  color: black;\n}\n\n.text_left2 {\n  position: absolute;\n  top: 45%;\n  left: 10%;\n  height: 100%;\n  font-style: normal;\n  font-weight: 550;\n  font-size: 16px;\n  font-family: Plus Jakarta Sans Extra;\n  color: black;\n}\n\n.cardgrid {\n  height: 100px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.color-ps {\n  --background: linear-gradient(to left, #DBECFF 30%, #fff 70%);\n}\n\n.color-hp {\n  --background: linear-gradient(to left, #E0DAEC 30%, #fff 70%);\n}\n\n.color-laptop {\n  --background: linear-gradient(to left, #FBDAE8 30%, #fff 70%);\n}\n\n.color-tv {\n  --background: linear-gradient(to left, #FEEDDD 30%, #fff 70%);\n}\n\n.color-kulkas {\n  --background: linear-gradient(to left, #e1ffdb 30%, #fff 70%);\n}\n\n.color-cuci {\n  --background: linear-gradient(to left, #e4f6fd 30%, #fff 70%);\n}\n\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 23%;\n  left: 60%;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.title {\n  margin-top: 50px;\n  margin-left: 20px;\n  font-family: Plus Jakarta Sans;\n  color: #fff;\n}\n\n.main_title {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 30px;\n  font-family: Plus Jakarta Sans Extra;\n  line-height: 40px;\n}\n\n.subtitle {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n}\n\n.main-menu {\n  display: flex;\n  flex-direction: column;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\nion-card-subtitle {\n  margin-top: 30px;\n  margin-left: 20px;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 800;\n  color: black;\n  font-family: Plus Jakarta Sans Extra;\n}\n\n.garis {\n  width: 86%;\n  height: 12%;\n  display: flex;\n  justify-content: center;\n  padding-top: 6%;\n  padding-bottom: 6%;\n  border: 3px dashed #EBEBEB;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n\n.font {\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n}\n\n.row {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.col {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL0Q6XFx6Zml4LXRyYWRlLWluLTIwMjIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFx0eXBlXFx0eXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL3R5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztBQ0NYOztBRFJBO0VBVUksUUFBUztFQUNULDRCQUE0QjtBQ0VoQzs7QURiQTtFQWdCSSxXQUFXO0FDQ2Y7O0FES0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQ0ZkOztBREtBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtBQ0ZkOztBREtBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxZQUFZO0FDRmQ7O0FES0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLFlBQVk7QUNGZDs7QURLQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUNGbEM7O0FES0E7RUFDRSw2REFBYTtBQ0ZmOztBRElBO0VBQ0UsNkRBQWE7QUNEZjs7QURHQTtFQUNFLDZEQUFhO0FDQWY7O0FERUE7RUFDRSw2REFBYTtBQ0NmOztBRENBO0VBQ0UsNkRBQWE7QUNFZjs7QURBQTtFQUNFLDZEQUFhO0FDR2Y7O0FEQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQkFBcUI7QUNHdkI7O0FEUEE7RUFPSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQ0l0Qjs7QURBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLFdBQVc7QUNHYjs7QURBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxpQkFBaUI7QUNHbkI7O0FEQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNHakI7O0FEQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQ0c5Qjs7QURDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9DQUFvQztBQ0V0Qzs7QURDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBRVgsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBRWxCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFFaEMsZUFBZTtFQUNmLGdCQUFnQjtBQ0RsQjs7QURJQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNEakI7O0FESUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBRXZCLGdCQUFnQjtBQ0ZsQjs7QURLQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FDRmpCOztBRElBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQ0RsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvdHlwZS90eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTUzOTg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgJi50b3Age1xyXG4gICAgdG9wOiAgMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgICYuYm90dG9tIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5ncmlke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUwJTtcclxufVxyXG5cclxuLmltZ19yaWdodHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDQwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0X2xlZnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAlO1xyXG4gIGxlZnQ6IDEwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50ZXh0X2xlZnQye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ1JTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTUwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZGdyaWR7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5jb2xvci1wc3tcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREJFQ0ZGIDMwJSwgI2ZmZiA3MCUpO1xyXG59XHJcbi5jb2xvci1ocHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRTBEQUVDIDMwJSwgI2ZmZiA3MCUpO1xyXG59XHJcbi5jb2xvci1sYXB0b3B7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0ZCREFFOCAzMCUsICNmZmYgNzAlKTtcclxufVxyXG4uY29sb3ItdHZ7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0ZFRURERCAzMCUsICNmZmYgNzAlKTtcclxufVxyXG4uY29sb3Ita3Vsa2Fze1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNlMWZmZGIgMzAlLCAjZmZmIDcwJSk7XHJcbn1cclxuLmNvbG9yLWN1Y2l7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2U0ZjZmZCAzMCUsICNmZmYgNzAlKTtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3Vke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5pbWdfa2FuYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIzJTtcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogI2ZmZjsgXHJcbn1cclxuXHJcbi5tYWluX3RpdGxle1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZXtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5tYWluLW1lbnV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbn1cclxuXHJcbi5nYXJpc3tcclxuICB3aWR0aDogODYlO1xyXG4gIGhlaWdodDogMTIlO1xyXG4gIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDYlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2JTtcclxuXHJcbiAgYm9yZGVyOiAzcHggZGFzaGVkICNFQkVCRUI7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cclxuICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcclxufVxyXG5cclxuLmZvbnR7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ucm93e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4uY29se1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTUzOTg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmhlYWRlci50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cblxuLmhlYWRlci5ib3R0b20ge1xuICBib3R0b206IDBweDtcbn1cblxuLmdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTAlO1xufVxuXG4uaW1nX3JpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGV4dF9sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRleHRfbGVmdDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiAxMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZGdyaWQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5jb2xvci1wcyB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNEQkVDRkYgMzAlLCAjZmZmIDcwJSk7XG59XG5cbi5jb2xvci1ocCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNFMERBRUMgMzAlLCAjZmZmIDcwJSk7XG59XG5cbi5jb2xvci1sYXB0b3Age1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRkJEQUU4IDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4uY29sb3ItdHYge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRkVFREREIDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4uY29sb3Ita3Vsa2FzIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2UxZmZkYiAzMCUsICNmZmYgNzAlKTtcbn1cblxuLmNvbG9yLWN1Y2kge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZTRmNmZkIDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQgLmltZ19rYW5hbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMyU7XG4gIGxlZnQ6IDYwJTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1haW5fdGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYWluLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbn1cblxuLmdhcmlzIHtcbiAgd2lkdGg6IDg2JTtcbiAgaGVpZ2h0OiAxMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNiU7XG4gIHBhZGRpbmctYm90dG9tOiA2JTtcbiAgYm9yZGVyOiAzcHggZGFzaGVkICNFQkVCRUI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICBtYXJnaW4tcmlnaHQ6IDclO1xufVxuXG4uZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4iXX0= */";
>>>>>>> e1124e0ccaa1e710e8bd72857b86b8926d0f402b
    /***/
  },

  /***/
  "./src/app/pages/landing/type/type.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/landing/type/type.page.ts ***!
    \*************************************************/

  /*! exports provided: TypePage */

  /***/
  function srcAppPagesLandingTypeTypePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypePage", function () {
      return TypePage;
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


    var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/api/user-api.service */
    "./src/app/services/api/user-api.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/fingerprint-aio/ngx */
    "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_pages_landing_popover_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/pages/landing/popover/popover.component */
    "./src/app/pages/landing/popover/popover.component.ts");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");

    var TypePage = /*#__PURE__*/function () {
      function TypePage(authService, storage, userApiService, router, faio, popoverController, sellingApiService) {
        _classCallCheck(this, TypePage);

        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.router = router;
        this.faio = faio;
        this.popoverController = popoverController;
        this.sellingApiService = sellingApiService;
        this.brand = [{
          'id': 1,
          'name': 'Handphone'
        }, {
          'id': 2,
          'name': 'Television'
        }, {
          'id': 3,
          'name': 'Laptop'
        }, {
          'id': 4,
          'name': 'Play Station'
        }, {
          'id': 5,
          'name': 'Kulkas'
        }, {
          'id': 4,
          'name': 'Mesin Cuci'
        }];
      }

      _createClass(TypePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setInterval(function () {
            _this.Count();
          }, 3000); //   cordova.plugins.AppReview.requestReview().catch(function() {
          //     return cordova.plugins.AppReview.openStoreScreen();
          //  });
        }
      }, {
        key: "goTo",
        value: function goTo(id) {
          if (id == 1) {
            // this.router.navigate(['landing', 'selling-phone']);
            alert("on progress");
          } else if (id == 2) {
            this.router.navigate(['landing', 'tv-brand']);
          } else if (id == 3) {
            this.router.navigate(['landing', 'laptop-brand']);
          } else if (id == 4) {
            this.router.navigate(['landing', 'ps-brand']);
          } else if (id == 5) {
            this.router.navigate(['landing', 'kulkas-brand']);
          } else if (id == 6) {
            this.router.navigate(['landing', 'mesin-cuci-brand']);
          }
        }
      }, {
        key: "Count",
        value: function Count() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then(function (token) {
            _this2.sellingApiService.getNotification(token).subscribe(function (response) {
              _this2.count_notification = response.count;
              console.log(_this2.count_notification);
            }, function (err) {// this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "popclick",
        value: function popclick(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: src_app_pages_landing_popover_popover_component__WEBPACK_IMPORTED_MODULE_9__["PopoverComponent"],
                      event: event
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }]);

      return TypePage;
    }();

    TypePage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__["UserApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_7__["FingerprintAIO"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_10__["SellingApiService"]
      }];
    };

    TypePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-type',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./type.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./type.page.scss */
      "./src/app/pages/landing/type/type.page.scss"))["default"]]
    })], TypePage);
    /***/
  }
}]);
//# sourceMappingURL=type-type-module-es5.js.map