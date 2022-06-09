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


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"header\">\r\n    <ion-row>\r\n      <div class=\"title\">\r\n        <p class=\"main_title\">Selamat Pagi,</p>\r\n        <p class=\"subtitle\">Mau tukar tambah apa hari ini?</p>\r\n      </div>\r\n      <ion-col col-2>\r\n        <img class=\"img_kanan\" src=\"../../../../assets/images/atas_kanan.png\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <ion-card-subtitle class=\"judul\">Pilih Barang</ion-card-subtitle>\r\n\r\n      <div class=\"middle\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col col-6 (click)=\"goTo(4)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/ps/ps.png\" alt=\"\">\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\r\n                <h2>Scan PlayStation</h2> -->\r\n              </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col col-6 (click)=\"goTo(1)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/mobile/hp.png\" alt=\"\">\r\n                <!-- <ion-icon class=\"icon-a\" name=\"phone-portrait-outline\"></ion-icon>\r\n                <h2>Scan Handphone<br>/Tablet </h2>   -->\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col col-6  (click)=\"goTo(3)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/laptop/laptop.png\" alt=\"\">\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\r\n                <h2>Scan Laptop</h2> -->\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col col-6 (click)=\"goTo(2)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/television/tv.png\" alt=\"\">\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"tv-sharp\"></ion-icon>\r\n                <h2>Scan Television </h2> -->\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n  \r\n          <ion-row>\r\n            <ion-col col-6  (click)=\"goTo(5)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/kulkas/kulkas.png\" alt=\"\">\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\r\n                <h2>Scan Laptop</h2> -->\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col col-6 (click)=\"goTo(6)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/mesin_cuci/mesin_cuci.png\" alt=\"\">\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\r\n                <h2>Scan PlayStation</h2> -->\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      <div class=\"garis\">\r\n        <ion-label class=\"ion-text-wrap font\"><img src=\"../../../../assets/icon/star.png\" style=\"margin-right: 10px;\" alt=\"\">Barang lainnya akan segera hadir</ion-label>\r\n      </div>\r\n\r\n      <div class=\"center\">\r\n        <ion-label class=\"ion-text-wrap font\">Bekerjasama dengan</ion-label>\r\n      </div>\r\n      <ion-grid style=\"margin-bottom: 20%;\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/samsung.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/sony.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/acer.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/lenovo.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/lg.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = ".header {\n  background-color: #395398;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.header.bottom {\n  bottom: 0px;\n}\n\n.grid {\n  width: 100%;\n  height: 100%;\n}\n\n.cardgrid {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.img_kanan {\n  margin-right: 0 !important;\n  float: right;\n}\n\n.title {\n  margin-top: 50px;\n  margin-left: 20px;\n  font-family: Plus Jakarta Sans;\n  color: #fff;\n}\n\n.main_title {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 30px;\n  font-family: Plus Jakarta Sans Extra;\n  line-height: 40px;\n}\n\n.subtitle {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n}\n\n.main-menu {\n  display: flex;\n  flex-direction: column;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\nion-card-subtitle {\n  margin-top: 30px;\n  margin-left: 20px;\n  font-size: 20px;\n  color: black;\n  font-family: Plus Jakarta Sans Extra;\n}\n\n.garis {\n  width: 86%;\n  height: 12%;\n  display: flex;\n  justify-content: center;\n  padding-top: 6%;\n  padding-bottom: 6%;\n  border: 3px dashed #EBEBEB;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n\n.font {\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL0Q6XFx6Zml4LXRyYWRlLWluLTIwMjIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFx0eXBlXFx0eXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL3R5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztBQ0NYOztBRFJBO0VBVUksUUFBUztFQUNULDRCQUE0QjtBQ0VoQzs7QURiQTtFQWdCSSxXQUFXO0FDQ2Y7O0FES0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQ0ZkOztBREtBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FDRmxDOztBREtBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVc7QUNGYjs7QURLQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLFdBQVc7QUNGYjs7QURLQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxpQkFBaUI7QUNGbkI7O0FES0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNGakI7O0FES0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQ0Y5Qjs7QURNQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixvQ0FBb0M7QUNIdEM7O0FETUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUVYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUVsQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBRWhDLGVBQWU7RUFDZixnQkFBZ0I7QUNObEI7O0FEU0E7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FDTmpCOztBRFNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUV2QixnQkFBZ0I7QUNQbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3R5cGUvdHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1Mzk4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gICYudG9wIHtcclxuICAgIHRvcDogIDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLmJvdHRvbSB7XHJcbiAgICBib3R0b206IDBweDtcclxuICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uZ3JpZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkZ3JpZHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5pbWdfa2FuYW57XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogI2ZmZjsgXHJcbn1cclxuXHJcbi5tYWluX3RpdGxle1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZXtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5tYWluLW1lbnV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbn1cclxuXHJcbi5nYXJpc3tcclxuICB3aWR0aDogODYlO1xyXG4gIGhlaWdodDogMTIlO1xyXG4gIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDYlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2JTtcclxuXHJcbiAgYm9yZGVyOiAzcHggZGFzaGVkICNFQkVCRUI7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cclxuICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcclxufVxyXG5cclxuLmZvbnR7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTUzOTg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmhlYWRlci50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cblxuLmhlYWRlci5ib3R0b20ge1xuICBib3R0b206IDBweDtcbn1cblxuLmdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZGdyaWQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5pbWdfa2FuYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1haW5fdGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYWluLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG59XG5cbi5nYXJpcyB7XG4gIHdpZHRoOiA4NiU7XG4gIGhlaWdodDogMTIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDYlO1xuICBwYWRkaW5nLWJvdHRvbTogNiU7XG4gIGJvcmRlcjogM3B4IGRhc2hlZCAjRUJFQkVCO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcbn1cblxuLmZvbnQge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4iXX0= */";
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