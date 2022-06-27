(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"header\">\r\n    <ion-row>\r\n      <div class=\"title\">\r\n        <p class=\"main_title\">Selamat Pagi,</p>\r\n        <p class=\"subtitle\">Mau tukar tambah apa hari ini?</p>\r\n      </div>\r\n      <ion-col col-2>\r\n        <div class=\"card-backgroud\">\r\n          <div class=\"img\">\r\n            <img src=\"../../../../assets/images/atas_kanan.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img_kanan\" routerLink=\"/landing/notification\">\r\n            <img src=\"../../../../assets/icon/notification.png\" alt=\"\" ><ion-badge *ngIf = \"count_notification != 0\" id=\"notifications-badge\" style=\" font-size: 5px;\">{{count_notification}}</ion-badge> \r\n\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <ion-card-subtitle class=\"judul\">Pilih Barang</ion-card-subtitle>\r\n\r\n      <div class=\"middle\">\r\n        <ion-grid>\r\n          <div class=\"row\">\r\n            <div class=\"col\" col-6 (click)=\"goTo(4)\">\r\n              <ion-card class=\"cardgrid color-ps\">\r\n                <!-- <div class=\"size\"> -->\r\n                  <!-- <img class=\"grid\" src=\"../../../../assets/images/header/ps.png\" alt=\"\"> -->\r\n                  <div class=\"img_right\">\r\n                    <img src=\"../../../../assets/images/baru/psxxhdpi.png\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"text_left\">\r\n                    Play\r\n                  </div>\r\n                  <br>\r\n                  <div class=\"text_left2\">\r\n                    Station\r\n                  </div>\r\n                <!-- </div> -->\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/ps/ps.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\r\n                <h2>Scan PlayStation</h2> -->\r\n              </ion-card>\r\n            </div>\r\n\r\n            <div class=\"col\" col-6 (click)=\"goTo(1)\">\r\n              <ion-card class=\"cardgrid color-hp\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/hpxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Smart\r\n                </div>\r\n                <br>\r\n                <div class=\"text_left2\">\r\n                  Phone\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/mobile/hp.png\" alt=\"\"> -->\r\n                <!-- <ion-icon class=\"icon-a\" name=\"phone-portrait-outline\"></ion-icon>\r\n                <h2>Scan Handphone<br>/Tablet </h2>   -->\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col\" col-6  (click)=\"goTo(3)\">\r\n              <ion-card class=\"cardgrid color-laptop\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/laptopxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Laptop\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/laptop/laptop.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\r\n                <h2>Scan Laptop</h2> -->\r\n              </ion-card>\r\n            </div>\r\n            <div class=\"col\" col-6 (click)=\"goTo(2)\">\r\n              <ion-card class=\"cardgrid color-tv\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/tvxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  TV\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/television/tv.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"tv-sharp\"></ion-icon>\r\n                <h2>Scan Television </h2> -->\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"row\">\r\n            <div class=\"col\" col-6  (click)=\"goTo(5)\">\r\n              <ion-card class=\"cardgrid color-kulkas\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/kulkasxxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Kulkas\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/kulkas/kulkas.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\r\n                <h2>Scan Laptop</h2> -->\r\n              </ion-card>\r\n            </div>\r\n            <div class=\"col\" col-6 (click)=\"goTo(6)\">\r\n              <ion-card class=\"cardgrid color-cuci\">\r\n                <div class=\"img_right\">\r\n                  <img src=\"../../../../assets/images/baru/mesincucixxhdpi.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"text_left\">\r\n                  Mesin\r\n                </div>\r\n                <br>\r\n                <div class=\"text_left2\">\r\n                  Cuci\r\n                </div>\r\n                <!-- <img class=\"grid\" src=\"../../../../assets/images/home/mesin_cuci/mesin_cuci.png\" alt=\"\"> -->\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\r\n                <h2>Scan PlayStation</h2> -->\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n        </ion-grid>\r\n      </div>\r\n      <div class=\"garis\">\r\n        <ion-label class=\"ion-text-wrap font\"><img src=\"../../../../assets/icon/star.png\" style=\"margin-right: 10px;\" alt=\"\">Barang lainnya akan segera hadir</ion-label>\r\n      </div>\r\n\r\n      <div class=\"center\">\r\n        <ion-label class=\"ion-text-wrap font\">Bekerjasama dengan</ion-label>\r\n      </div>\r\n      <ion-grid style=\"margin-bottom: 20%;\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/samsung.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/sony.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/acer.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/lenovo.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/lg.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  background-color: #395398;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.header.bottom {\n  bottom: 0px;\n}\n.grid {\n  width: 100%;\n  height: 150%;\n}\n.img_right {\n  position: absolute;\n  top: 0;\n  left: 40%;\n  height: 100%;\n}\n.text_left {\n  position: absolute;\n  top: 20%;\n  left: 10%;\n  height: 100%;\n  font-style: normal;\n  font-weight: 550;\n  font-size: 16px;\n  font-family: Plus Jakarta Sans Extra;\n  color: black;\n}\n.text_left2 {\n  position: absolute;\n  top: 45%;\n  left: 10%;\n  height: 100%;\n  font-style: normal;\n  font-weight: 550;\n  font-size: 16px;\n  font-family: Plus Jakarta Sans Extra;\n  color: black;\n}\n.cardgrid {\n  height: 100px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n.color-ps {\n  --background: linear-gradient(to left, #DBECFF 30%, #fff 70%);\n}\n.color-hp {\n  --background: linear-gradient(to left, #E0DAEC 30%, #fff 70%);\n}\n.color-laptop {\n  --background: linear-gradient(to left, #FBDAE8 30%, #fff 70%);\n}\n.color-tv {\n  --background: linear-gradient(to left, #FEEDDD 30%, #fff 70%);\n}\n.color-kulkas {\n  --background: linear-gradient(to left, #e1ffdb 30%, #fff 70%);\n}\n.color-cuci {\n  --background: linear-gradient(to left, #e4f6fd 30%, #fff 70%);\n}\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 23%;\n  left: 60%;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.title {\n  margin-top: 50px;\n  margin-left: 20px;\n  font-family: Plus Jakarta Sans;\n  color: #fff;\n}\n.main_title {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 30px;\n  font-family: Plus Jakarta Sans Extra;\n  line-height: 40px;\n}\n.subtitle {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n}\n.main-menu {\n  display: flex;\n  flex-direction: column;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\nion-card-subtitle {\n  margin-top: 30px;\n  margin-left: 20px;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 800;\n  color: black;\n  font-family: Plus Jakarta Sans Extra;\n}\n.garis {\n  width: 86%;\n  height: 12%;\n  display: flex;\n  justify-content: center;\n  padding-top: 6%;\n  padding-bottom: 6%;\n  border: 3px dashed #EBEBEB;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n.font {\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n.center {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n}\n#notifications-badge {\n  background: red;\n  position: absolute;\n  top: 15px;\n  right: -1px;\n  border-radius: 200%;\n}\n.row {\n  margin-left: 0;\n  margin-right: 0;\n}\n.col {\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFx0eXBlXFx0eXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL3R5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNFLFFBQUE7RUFDQSw0QkFBQTtBQ0NKO0FER0k7RUFDQSxXQUFBO0FDREo7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUNKRjtBRE9BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNKRjtBRE9BO0VBQ0UsNkRBQUE7QUNKRjtBRE1BO0VBQ0UsNkRBQUE7QUNIRjtBREtBO0VBQ0UsNkRBQUE7QUNGRjtBRElBO0VBQ0UsNkRBQUE7QUNERjtBREdBO0VBQ0UsNkRBQUE7QUNBRjtBREVBO0VBQ0UsNkRBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0NKO0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0FGO0FESUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNERjtBRElBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7QUNMRjtBRFFBO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ05GO0FEUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvdHlwZS90eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTUzOTg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgJi50b3Age1xyXG4gICAgdG9wOiAgMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgICYuYm90dG9tIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5ncmlke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUwJTtcclxufVxyXG5cclxuLmltZ19yaWdodHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDQwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0X2xlZnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAlO1xyXG4gIGxlZnQ6IDEwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50ZXh0X2xlZnQye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ1JTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTUwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZGdyaWR7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5jb2xvci1wc3tcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjREJFQ0ZGIDMwJSwgI2ZmZiA3MCUpO1xyXG59XHJcbi5jb2xvci1ocHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRTBEQUVDIDMwJSwgI2ZmZiA3MCUpO1xyXG59XHJcbi5jb2xvci1sYXB0b3B7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0ZCREFFOCAzMCUsICNmZmYgNzAlKTtcclxufVxyXG4uY29sb3ItdHZ7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0ZFRURERCAzMCUsICNmZmYgNzAlKTtcclxufVxyXG4uY29sb3Ita3Vsa2Fze1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNlMWZmZGIgMzAlLCAjZmZmIDcwJSk7XHJcbn1cclxuLmNvbG9yLWN1Y2l7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2U0ZjZmZCAzMCUsICNmZmYgNzAlKTtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3Vke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5pbWdfa2FuYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIzJTtcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxuICBjb2xvcjogI2ZmZjsgXHJcbn1cclxuXHJcbi5tYWluX3RpdGxle1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZXtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5tYWluLW1lbnV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbn1cclxuXHJcbi5nYXJpc3tcclxuICB3aWR0aDogODYlO1xyXG4gIGhlaWdodDogMTIlO1xyXG4gIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDYlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2JTtcclxuXHJcbiAgYm9yZGVyOiAzcHggZGFzaGVkICNFQkVCRUI7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cclxuICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcclxufVxyXG5cclxuLmZvbnR7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4jbm90aWZpY2F0aW9ucy1iYWRnZSB7XHJcbiAgLy8gY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogLTFweDtcclxuICBib3JkZXItcmFkaXVzOiAyMDAlO1xyXG59XHJcblxyXG4ucm93e1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4uY29se1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTUzOTg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5oZWFkZXIudG9wIHtcbiAgdG9wOiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG59XG4uaGVhZGVyLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MCU7XG59XG5cbi5pbWdfcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZXh0X2xlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAxMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGV4dF9sZWZ0MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkZ3JpZCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cblxuLmNvbG9yLXBzIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0RCRUNGRiAzMCUsICNmZmYgNzAlKTtcbn1cblxuLmNvbG9yLWhwIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0UwREFFQyAzMCUsICNmZmYgNzAlKTtcbn1cblxuLmNvbG9yLWxhcHRvcCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNGQkRBRTggMzAlLCAjZmZmIDcwJSk7XG59XG5cbi5jb2xvci10diB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNGRUVEREQgMzAlLCAjZmZmIDcwJSk7XG59XG5cbi5jb2xvci1rdWxrYXMge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZTFmZmRiIDMwJSwgI2ZmZiA3MCUpO1xufVxuXG4uY29sb3ItY3VjaSB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNlNGY2ZmQgMzAlLCAjZmZmIDcwJSk7XG59XG5cbi5jYXJkLWJhY2tncm91ZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdWQgLmltZ19rYW5hbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMyU7XG4gIGxlZnQ6IDYwJTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1haW5fdGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYWluLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbn1cblxuLmdhcmlzIHtcbiAgd2lkdGg6IDg2JTtcbiAgaGVpZ2h0OiAxMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNiU7XG4gIHBhZGRpbmctYm90dG9tOiA2JTtcbiAgYm9yZGVyOiAzcHggZGFzaGVkICNFQkVCRUI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICBtYXJnaW4tcmlnaHQ6IDclO1xufVxuXG4uZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuI25vdGlmaWNhdGlvbnMtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogLTFweDtcbiAgYm9yZGVyLXJhZGl1czogMjAwJTtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59Il19 */");

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