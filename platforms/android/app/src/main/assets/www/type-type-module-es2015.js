(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"header\">\r\n    <ion-row>\r\n      <div class=\"title\">\r\n        <p class=\"main_title\" id=\"selamat\">{{time}}</p>\r\n        <!-- <p class=\"main_title\">Selamat Pagi,</p> -->\r\n        <!-- <ion-datetime [value]=\"dateTime\" displayFormat=\"MMM DD, YYYY HH:mm\" ></ion-datetime> -->\r\n        <p class=\"subtitle\">Mau tukar tambah apa hari ini?</p>\r\n      </div>\r\n      <ion-col col-2>\r\n        <div class=\"card-backgroud\">\r\n          <div class=\"img\">\r\n            <img src=\"../../../../assets/images/atas_kanan.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img_kanan\" routerLink=\"/landing/notification\">\r\n            <img src=\"../../../../assets/icon/notification.png\" alt=\"\" ><ion-badge *ngIf = \"count_notification != 0\" id=\"notifications-badge\" style=\" font-size: 5px;\">{{count_notification}}</ion-badge> \r\n\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <ion-card-subtitle class=\"judul\">Pilih Barang</ion-card-subtitle>\r\n\r\n      <div class=\"middle\">\r\n        <ion-grid>\r\n          <div class=\"row\">\r\n            <div class=\"col\" col-6 (click)=\"goTo(4)\">\r\n              <ion-card class=\"cardgrid color-ps\">\r\n                <!-- <div class=\"size\"> -->\r\n                  <!-- <img class=\"grid\" src=\"../../../../assets/images/header/ps.png\" alt=\"\"> -->\r\n                  <div class=\"img_right\">\r\n                    <img src=\"../../../../assets/images/baru/psxxhdpi.png\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"text_left\">\r\n                    Play\r\n                  </div>\r\n                  <br>\r\n                  <div class=\"text_left2\">\r\n                    Station\r\n                  </div>\r\n                <!-- </div> -->\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/ps/ps.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\r\n                <h2>Scan PlayStation</h2> -->\r\n              </ion-card>\r\n            </div>\r\n\r\n            <div class=\"col\" col-6 (click)=\"goTo(1)\">\r\n              <ion-card class=\"cardgrid color-hp\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/hpxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Smart\r\n                </div>\r\n                <br>\r\n                <div class=\"text_left2\">\r\n                  Phone\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/mobile/hp.png\" alt=\"\"> -->\r\n                <!-- <ion-icon class=\"icon-a\" name=\"phone-portrait-outline\"></ion-icon>\r\n                <h2>Scan Handphone<br>/Tablet </h2>   -->\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col\" col-6  (click)=\"goTo(3)\">\r\n              <ion-card class=\"cardgrid color-laptop\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/laptopxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Laptop\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/laptop/laptop.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\r\n                <h2>Scan Laptop</h2> -->\r\n              </ion-card>\r\n            </div>\r\n            <div class=\"col\" col-6 (click)=\"goTo(2)\">\r\n              <ion-card class=\"cardgrid color-tv\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/tvxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  TV\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/television/tv.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"tv-sharp\"></ion-icon>\r\n                <h2>Scan Television </h2> -->\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"row\">\r\n            <div class=\"col\" col-6  (click)=\"goTo(5)\">\r\n              <ion-card class=\"cardgrid color-kulkas\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/kulkasxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Kulkas\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/kulkas/kulkas.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\r\n                <h2>Scan Laptop</h2> -->\r\n              </ion-card>\r\n            </div>\r\n            <div class=\"col\" col-6 (click)=\"goTo(6)\">\r\n              <ion-card class=\"cardgrid color-cuci\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/mesincucixxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Mesin\r\n                </div>\r\n                <br>\r\n                <div class=\"text_left2\">\r\n                  Cuci\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/mesin_cuci/mesin_cuci.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\r\n                <h2>Scan PlayStation</h2> -->\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n        </ion-grid>\r\n      </div>\r\n      <div class=\"garis\">\r\n        <ion-label class=\"ion-text-wrap font\"><img src=\"../../../../assets/icon/star.png\" style=\"margin-right: 10px;\" alt=\"\">Barang lainnya akan segera hadir</ion-label>\r\n      </div>\r\n\r\n      <!-- <div class=\"center\">\r\n        <ion-label class=\"ion-text-wrap font\">Bekerjasama dengan</ion-label>\r\n      </div>\r\n      <ion-grid style=\"margin-bottom: 20%;\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/samsung.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/sony.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/acer.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/lenovo.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/lg.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid> -->\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/landing/type/type-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/landing/type/type-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePageRoutingModule", function() { return TypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type.page */ "./src/app/pages/landing/type/type.page.ts");




const routes = [
    {
        path: '',
        component: _type_page__WEBPACK_IMPORTED_MODULE_3__["TypePage"]
    }
];
let TypePageRoutingModule = class TypePageRoutingModule {
};
TypePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TypePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/type/type.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/type/type.module.ts ***!
  \***************************************************/
/*! exports provided: TypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePageModule", function() { return TypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type-routing.module */ "./src/app/pages/landing/type/type-routing.module.ts");
/* harmony import */ var _type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type.page */ "./src/app/pages/landing/type/type.page.ts");







let TypePageModule = class TypePageModule {
};
TypePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _type_routing_module__WEBPACK_IMPORTED_MODULE_5__["TypePageRoutingModule"]
        ],
        declarations: [_type_page__WEBPACK_IMPORTED_MODULE_6__["TypePage"]]
    })
], TypePageModule);



/***/ }),

/***/ "./src/app/pages/landing/type/type.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/type/type.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  background-color: #395398;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.header.bottom {\n  bottom: 0px;\n}\n.grid {\n  width: 100%;\n  height: 150%;\n}\n.img_right {\n  position: absolute;\n  top: 0;\n  left: 40%;\n  height: 100%;\n}\n.text_left {\n  position: absolute;\n  top: 20%;\n  left: 10%;\n  height: 100%;\n  font-style: normal;\n  font-weight: 550;\n  font-size: 16px;\n  font-family: Plus Jakarta Sans;\n  color: black;\n}\n.text_left2 {\n  position: absolute;\n  top: 45%;\n  left: 10%;\n  height: 100%;\n  font-style: normal;\n  font-weight: 550;\n  font-size: 16px;\n  font-family: Plus Jakarta Sans;\n  color: black;\n}\n.cardgrid {\n  height: 100px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n.color-ps {\n  --background: linear-gradient(to left, #DBECFF 30%, #fff 70%);\n}\n.color-hp {\n  --background: linear-gradient(to left, #E0DAEC 30%, #fff 70%);\n}\n.color-laptop {\n  --background: linear-gradient(to left, #FBDAE8 30%, #fff 70%);\n}\n.color-tv {\n  --background: linear-gradient(to left, #FEEDDD 30%, #fff 70%);\n}\n.color-kulkas {\n  --background: linear-gradient(to left, #e1ffdb 30%, #fff 70%);\n}\n.color-cuci {\n  --background: linear-gradient(to left, #e4f6fd 30%, #fff 70%);\n}\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 23%;\n  left: 60%;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.title {\n  margin-top: 50px;\n  margin-left: 20px;\n  font-family: Plus Jakarta Sans;\n  color: #fff;\n}\n.main_title {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 30px;\n  font-family: Plus Jakarta Sans;\n  line-height: 40px;\n}\n.subtitle {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n}\n.main-menu {\n  display: flex;\n  flex-direction: column;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: 100vh;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\nion-card-subtitle {\n  margin-top: 30px;\n  margin-left: 20px;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 800;\n  color: black;\n  font-family: Plus Jakarta Sans;\n}\n.garis {\n  width: 86%;\n  height: 12%;\n  display: flex;\n  justify-content: center;\n  padding-top: 6%;\n  padding-bottom: 6%;\n  border: 3px dashed #EBEBEB;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n.font {\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n.center {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n}\n#notifications-badge {\n  background: red;\n  position: absolute;\n  top: 15px;\n  right: -1px;\n  border-radius: 200%;\n}\n.row {\n  margin-left: 0;\n  margin-right: 0;\n}\n.col {\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFx0eXBlXFx0eXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL3R5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNFLFFBQUE7RUFDQSw0QkFBQTtBQ0NKO0FER0k7RUFDQSxXQUFBO0FDREo7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUNKRjtBRE9BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNKRjtBRE9BO0VBQ0UsNkRBQUE7QUNKRjtBRE1BO0VBQ0UsNkRBQUE7QUNIRjtBREtBO0VBQ0UsNkRBQUE7QUNGRjtBRElBO0VBQ0UsNkRBQUE7QUNERjtBREdBO0VBQ0UsNkRBQUE7QUNBRjtBREVBO0VBQ0UsNkRBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0NKO0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNBRjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDREY7QURJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSkY7QURPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0FDTEY7QURRQTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNORjtBRFNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNORjtBRFFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3R5cGUvdHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1Mzk4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gICYudG9wIHtcclxuICAgIHRvcDogIDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLmJvdHRvbSB7XHJcbiAgICBib3R0b206IDBweDtcclxuICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uZ3JpZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MCU7XHJcbn1cclxuXHJcbi5pbWdfcmlnaHR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA0MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGV4dF9sZWZ0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwJTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTUwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udGV4dF9sZWZ0MntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0NSU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhcmRncmlke1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uY29sb3ItcHN7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0RCRUNGRiAzMCUsICNmZmYgNzAlKTtcclxufVxyXG4uY29sb3ItaHB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0UwREFFQyAzMCUsICNmZmYgNzAlKTtcclxufVxyXG4uY29sb3ItbGFwdG9we1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNGQkRBRTggMzAlLCAjZmZmIDcwJSk7XHJcbn1cclxuLmNvbG9yLXR2e1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNGRUVEREQgMzAlLCAjZmZmIDcwJSk7XHJcbn1cclxuLmNvbG9yLWt1bGthc3tcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZTFmZmRiIDMwJSwgI2ZmZiA3MCUpO1xyXG59XHJcbi5jb2xvci1jdWNpe1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNlNGY2ZmQgMzAlLCAjZmZmIDcwJSk7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2tncm91ZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAuaW1nX2thbmFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMyU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgY29sb3I6ICNmZmY7IFxyXG59XHJcblxyXG4ubWFpbl90aXRsZXtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uc3VidGl0bGV7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubWFpbi1tZW51e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG59XHJcblxyXG4uZ2FyaXN7XHJcbiAgd2lkdGg6IDg2JTtcclxuICBoZWlnaHQ6IDEyJTtcclxuICBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA2JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNiU7XHJcblxyXG4gIGJvcmRlcjogM3B4IGRhc2hlZCAjRUJFQkVCO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gIG1hcmdpbi1yaWdodDogNyU7XHJcbn1cclxuXHJcbi5mb250e1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuI25vdGlmaWNhdGlvbnMtYmFkZ2Uge1xyXG4gIC8vIGNvbG9yOiByZWQ7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IC0xcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjAwJTtcclxufVxyXG5cclxuLnJvd3tcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLmNvbHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufSIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1Mzk4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uaGVhZGVyLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuLmhlYWRlci5ib3R0b20ge1xuICBib3R0b206IDBweDtcbn1cblxuLmdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTAlO1xufVxuXG4uaW1nX3JpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGV4dF9sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRleHRfbGVmdDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiAxMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZGdyaWQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5jb2xvci1wcyB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNEQkVDRkYgMzAlLCAjZmZmIDcwJSk7XG59XG5cbi5jb2xvci1ocCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNFMERBRUMgMzAlLCAjZmZmIDcwJSk7XG59XG5cbi5jb2xvci1sYXB0b3Age1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRkJEQUU4IDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4uY29sb3ItdHYge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRkVFREREIDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4uY29sb3Ita3Vsa2FzIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2UxZmZkYiAzMCUsICNmZmYgNzAlKTtcbn1cblxuLmNvbG9yLWN1Y2kge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZTRmNmZkIDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VkIC5pbWdfa2FuYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjMlO1xuICBsZWZ0OiA2MCU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYWluX3RpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWFpbi1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG59XG5cbi5nYXJpcyB7XG4gIHdpZHRoOiA4NiU7XG4gIGhlaWdodDogMTIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDYlO1xuICBwYWRkaW5nLWJvdHRvbTogNiU7XG4gIGJvcmRlcjogM3B4IGRhc2hlZCAjRUJFQkVCO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcbn1cblxuLmZvbnQge1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbiNub3RpZmljYXRpb25zLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwMCU7XG59XG5cbi5yb3cge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/type/type.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/type/type.page.ts ***!
  \*************************************************/
/*! exports provided: TypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePage", function() { return TypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/user-api.service */ "./src/app/services/api/user-api.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_landing_popover_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/landing/popover/popover.component */ "./src/app/pages/landing/popover/popover.component.ts");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");











let TypePage = class TypePage {
    constructor(authService, storage, userApiService, router, faio, popoverController, sellingApiService) {
        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.router = router;
        this.faio = faio;
        this.popoverController = popoverController;
        this.sellingApiService = sellingApiService;
        this.brand = [
            {
                'id': 1,
                'name': 'Handphone'
            },
            {
                'id': 2,
                'name': 'Television'
            },
            {
                'id': 3,
                'name': 'Laptop'
            },
            {
                'id': 4,
                'name': 'Play Station'
            },
            {
                'id': 5,
                'name': 'Kulkas'
            },
            {
                'id': 4,
                'name': 'Mesin Cuci'
            },
        ];
    }
    ngOnInit() {
        setInterval(() => {
            this.Count();
        }, 5000);
        setTimeout(() => {
            var d = new Date();
            // this.time = d.getHours().toString();
            if (d.getHours() == 24 || d.getHours() == 1 || d.getHours() == 2 || d.getHours() == 3 || d.getHours() == 4 || d.getHours() == 5 || d.getHours() == 6 || d.getHours() == 7 || d.getHours() == 8 || d.getHours() == 9 || d.getHours() == 10 || d.getHours() == 11) {
                this.time = 'Selamat Pagi,';
            }
            else if (d.getHours() == 12 || d.getHours() == 13 || d.getHours() == 14) {
                this.time = "Selamat Siang,";
            }
            else if (d.getHours() == 15 || d.getHours() == 16 || d.getHours() == 17) {
                this.time = "Selamat Sore,";
            }
            else if (d.getHours() == 18 || d.getHours() == 19 || d.getHours() == 20 || d.getHours() == 21 || d.getHours() == 22 || d.getHours() == 23) {
                this.time = "Selamat Malam,";
            }
        });
        //   cordova.plugins.AppReview.requestReview().catch(function() {
        //     return cordova.plugins.AppReview.openStoreScreen();
        //  });
    }
    goTo(id) {
        if (id == 1) {
            // this.router.navigate(['landing', 'selling-phone']);
            alert("on progress");
        }
        else if (id == 2) {
            this.router.navigate(['landing', 'tv-brand']);
        }
        else if (id == 3) {
            this.router.navigate(['landing', 'laptop-brand']);
        }
        else if (id == 4) {
            this.router.navigate(['landing', 'ps-brand']);
        }
        else if (id == 5) {
            this.router.navigate(['landing', 'kulkas-brand']);
        }
        else if (id == 6) {
            this.router.navigate(['landing', 'mesin-cuci-brand']);
        }
        else if (id == 'notification') {
            this.router.navigate(['landing', 'notification']);
        }
    }
    Count() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            this.sellingApiService.getNotification(token).subscribe((response) => {
                this.count_notification = response.count;
            }, (err) => {
                // this.utilsService.showToast("There is a problem.");
            });
        });
    }
    popclick(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_pages_landing_popover_popover_component__WEBPACK_IMPORTED_MODULE_9__["PopoverComponent"],
                event
            });
            return yield popover.present();
        });
    }
    logout() {
        this.authService.logout();
    }
};
TypePage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__["UserApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_7__["FingerprintAIO"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_10__["SellingApiService"] }
];
TypePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./type.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./type.page.scss */ "./src/app/pages/landing/type/type.page.scss")).default]
    })
], TypePage);



/***/ })

}]);
//# sourceMappingURL=type-type-module-es2015.js.map