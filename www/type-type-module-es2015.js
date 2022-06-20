(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"header\">\r\n    <ion-row>\r\n      <div class=\"title\">\r\n        <p class=\"main_title\">Selamat Pagi,</p>\r\n        <p class=\"subtitle\">Mau tukar tambah apa hari ini?</p>\r\n      </div>\r\n      <ion-col col-2>\r\n        <div class=\"card-backgroud\">\r\n          <div class=\"img\">\r\n            <img src=\"../../../../assets/images/atas_kanan.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img_kanan\">\r\n            <img src=\"../../../../assets/icon/notification.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-card class=\"main-menu\">\r\n      <ion-card-subtitle class=\"judul\">Pilih Barang</ion-card-subtitle>\r\n\r\n      <div class=\"middle\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col col-6 (click)=\"goTo(4)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/ps/ps.png\" alt=\"\">\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\r\n                <h2>Scan PlayStation</h2> -->\r\n              </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col col-6 (click)=\"goTo(1)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/mobile/hp.png\" alt=\"\">\r\n                <!-- <ion-icon class=\"icon-a\" name=\"phone-portrait-outline\"></ion-icon>\r\n                <h2>Scan Handphone<br>/Tablet </h2>   -->\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col col-6  (click)=\"goTo(3)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/laptop/laptop.png\" alt=\"\">\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\r\n                <h2>Scan Laptop</h2> -->\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col col-6 (click)=\"goTo(2)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/television/tv.png\" alt=\"\">\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"tv-sharp\"></ion-icon>\r\n                <h2>Scan Television </h2> -->\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n  \r\n          <ion-row>\r\n            <ion-col col-6  (click)=\"goTo(5)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/kulkas/kulkas.png\" alt=\"\">\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\r\n                <h2>Scan Laptop</h2> -->\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col col-6 (click)=\"goTo(6)\">\r\n              <ion-card class=\"cardgrid\">\r\n                <img class=\"grid\" src=\"../../../../assets/images/home/mesin_cuci/mesin_cuci.png\" alt=\"\">\r\n                <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\r\n                <h2>Scan PlayStation</h2> -->\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      <div class=\"garis\">\r\n        <ion-label class=\"ion-text-wrap font\"><img src=\"../../../../assets/icon/star.png\" style=\"margin-right: 10px;\" alt=\"\">Barang lainnya akan segera hadir</ion-label>\r\n      </div>\r\n\r\n      <div class=\"center\">\r\n        <ion-label class=\"ion-text-wrap font\">Bekerjasama dengan</ion-label>\r\n      </div>\r\n      <ion-grid style=\"margin-bottom: 20%;\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/samsung.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/sony.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/acer.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/lenovo.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <img src=\"../../../../assets/sponsor/lg.png\" style=\"margin-right: 10px;\" height=\"35px\" width=\"55px\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n    \r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  background-color: #395398;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.header.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.header.bottom {\n  bottom: 0px;\n}\n.grid {\n  width: 100%;\n  height: 100%;\n}\n.cardgrid {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n.card-backgroud {\n  position: relative;\n  text-align: right;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.card-backgroud .img_kanan {\n  position: absolute;\n  top: 23%;\n  left: 60%;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.title {\n  margin-top: 50px;\n  margin-left: 20px;\n  font-family: Plus Jakarta Sans;\n  color: #fff;\n}\n.main_title {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 30px;\n  font-family: Plus Jakarta Sans Extra;\n  line-height: 40px;\n}\n.subtitle {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n}\n.main-menu {\n  display: flex;\n  flex-direction: column;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\nion-card-subtitle {\n  margin-top: 30px;\n  margin-left: 20px;\n  font-size: 20px;\n  color: black;\n  font-family: Plus Jakarta Sans Extra;\n}\n.garis {\n  width: 86%;\n  height: 12%;\n  display: flex;\n  justify-content: center;\n  padding-top: 6%;\n  padding-bottom: 6%;\n  border: 3px dashed #EBEBEB;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-left: 7%;\n  margin-right: 7%;\n}\n.font {\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n}\n.center {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFx0eXBlXFx0eXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL3R5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNFLFFBQUE7RUFDQSw0QkFBQTtBQ0NKO0FER0k7RUFDQSxXQUFBO0FDREo7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDSkY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDSEY7QURLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNISjtBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0pGO0FET0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE9BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNKRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNMRjtBRFFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FDUkY7QURXQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSRjtBRFdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvdHlwZS90eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTUzOTg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgJi50b3Age1xyXG4gICAgdG9wOiAgMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgICYuYm90dG9tIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5ncmlke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmRncmlke1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG4uY2FyZC1iYWNrZ3JvdWR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgLmltZ19rYW5hbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjMlO1xyXG4gICAgbGVmdDogNjAlO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRpdGxle1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGNvbG9yOiAjZmZmOyBcclxufVxyXG5cclxuLm1haW5fdGl0bGV7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnN1YnRpdGxle1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1haW4tbWVudXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxufVxyXG5cclxuLmdhcmlze1xyXG4gIHdpZHRoOiA4NiU7XHJcbiAgaGVpZ2h0OiAxMiU7XHJcbiAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDYlO1xyXG5cclxuICBib3JkZXI6IDNweCBkYXNoZWQgI0VCRUJFQjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiA3JTtcclxuICBtYXJnaW4tcmlnaHQ6IDclO1xyXG59XHJcblxyXG4uZm9udHtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NTM5ODtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmhlYWRlci50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cbi5oZWFkZXIuYm90dG9tIHtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmRncmlkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VkIC5pbWdfa2FuYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjMlO1xuICBsZWZ0OiA2MCU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYWluX3RpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWFpbi1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xufVxuXG4uZ2FyaXMge1xuICB3aWR0aDogODYlO1xuICBoZWlnaHQ6IDEyJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA2JTtcbiAgcGFkZGluZy1ib3R0b206IDYlO1xuICBib3JkZXI6IDNweCBkYXNoZWQgI0VCRUJFQjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIG1hcmdpbi1yaWdodDogNyU7XG59XG5cbi5mb250IHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */");

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
        }, 3000);
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
    }
    Count() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            this.sellingApiService.getNotification(token).subscribe((response) => {
                this.count_notification = response.count;
                console.log(this.count_notification);
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