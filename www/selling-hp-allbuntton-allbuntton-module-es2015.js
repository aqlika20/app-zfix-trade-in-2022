(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-hp-allbuntton-allbuntton-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  style=\"--background: #ccc url('../../../../assets/images/phone/camera/BG.png') no-repeat center center / cover;\">\r\n  <div class=\"center\">\r\n    <img src=\"../../../../assets/images/phone/camera/logo.png\" alt=\"\" style=\"margin-top: 23%;\">\r\n    <div class=\"middle\">\r\n      <img src=\"../../../../assets/images/phone/button/button.png\" alt=\"\">\r\n        <div class=\"title\">Silahkah Tes Getar Anda</div>\r\n        <div class=\"instruksi\">Instruksi</div>\r\n        <div style=\"text-align: left;\">\r\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen; margin-top: 20px;\"></ion-icon> Silahkan Tekan Tombol Volume Bawah</p>\r\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen;\"></ion-icon> Silahkan Tekan Tombol Volume Atas</p>\r\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen;\"></ion-icon> Silahkan Tekan Tombol Trun-Off</p>\r\n        </div>\r\n        <button class=\"button round\" icon-only (click)=\"submit()\" style=\"margin-top: 10%;\">\r\n          Selesai\r\n        </button>\r\n        <div (click)=\"skip()\" style=\"margin-right: 30%; margin-left: 30%; margin-top: 25%;\">\r\n           <p class=\"skip\">Lewati <a style=\"margin-left: 10px;\">>></a></p> \r\n           <hr>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<!-- <ion-content class=\"background\"  [fullscren]=\"true\">\r\n<ion-card>\r\n  <ion-card-content>\r\n\r\n    <h1>Tes All Button</h1>\r\n  <h3>*instruksi*</h3>\r\n  <ul>\r\n    <li>silahkan tekan tombol volume bawah</li>\r\n    <li>silahkan tekan tombol volume atas</li>\r\n    <li>silahkan tekan tombol Trun-off</li>\r\n  </ul>\r\n  \r\n  <button class=\"btn-done\" (click)=\"submit()\" center-block> Done </button>\r\n</ion-card-content>\r\n</ion-card>\r\n<div class=\"bg-image\" ><img  src=\"../../../assets/images/bawah_putih.svg\" alt=\"\"></div>\r\n</ion-content> -->\r\n");

/***/ }),

/***/ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AllbunttonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllbunttonPageRoutingModule", function() { return AllbunttonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _allbuntton_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allbuntton.page */ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts");




const routes = [
    {
        path: '',
        component: _allbuntton_page__WEBPACK_IMPORTED_MODULE_3__["AllbunttonPage"]
    }
];
let AllbunttonPageRoutingModule = class AllbunttonPageRoutingModule {
};
AllbunttonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllbunttonPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton.module.ts ***!
  \**************************************************************************/
/*! exports provided: AllbunttonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllbunttonPageModule", function() { return AllbunttonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _allbuntton_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allbuntton-routing.module */ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton-routing.module.ts");
/* harmony import */ var _allbuntton_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allbuntton.page */ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts");







let AllbunttonPageModule = class AllbunttonPageModule {
};
AllbunttonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _allbuntton_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllbunttonPageRoutingModule"]
        ],
        declarations: [_allbuntton_page__WEBPACK_IMPORTED_MODULE_6__["AllbunttonPage"]]
    })
], AllbunttonPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: white;\n  margin-top: 15%;\n  margin-bottom: 0px;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  color: #3053A4;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL2FsbGJ1bnR0b24vRDpcXHpmaXgtdHJhZGUtaW4tMjAyMi9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNlbGxpbmctaHBcXGFsbGJ1bnR0b25cXGFsbGJ1bnR0b24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvYWxsYnVudHRvbi9hbGxidW50dG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQ0NwQjs7QURFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtBQ0NkOztBREVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUNDZDs7QURFQTtFQUNFLGVBQWU7RUFDZiw0REFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FDQ3BCOztBREVBO0VBQ0UsZUFBZTtFQUNmLDREQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7QUNDcEI7O0FERUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQ0NuQjs7QURFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FDQ1g7O0FERUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDREQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0FDQ2pCOztBREVBO0VBQVEsbUJBQW1CO0FDRTNCOztBREFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FDR2I7O0FEREU7RUFDQSxZQUFZO0VBQ1osY0FBYztBQ0loQjs7QURGRTtFQUNBLFdBQVc7QUNLYjs7QURGRTtFQUNBLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ0tyQjs7QURGRTtFQUNBLFdBQVc7QUNLYjs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxXQUFXO0FDS2I7O0FERkU7RUFDQSxXQUFXO0FDS2I7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsVUFBVTtBQ0taOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsVUFBVTtBQ0taOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsVUFBVTtBQ0taOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsV0FBVztBQ0tiOztBREZFO0VBQ0EsVUFBVTtBQ0taOztBREZFO0VBQ0EsY0FBYztBQ0toQjs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxTQUFTO0FDS1g7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLFNBQVM7QUNLWDs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsU0FBUztBQ0tYOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EscUJBQXFCO0FDS3ZCOztBREZFO0VBQ0Esc0JBQXNCO0FDS3hCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0Esc0JBQXNCO0FDS3hCOztBREZFO0VBQ0Esc0JBQXNCO0FDS3hCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0Esc0JBQXNCO0FDS3hCOztBREZFO0VBQ0Esc0JBQXNCO0FDS3hCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0Esc0JBQXNCO0FDS3hCOztBREZFO0VBQ0Esc0JBQXNCO0FDS3hCOztBREZFO0VBQ0EsaUJBQWlCO0FDS25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL2FsbGJ1bnR0b24vYWxsYnVudHRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mLTUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2tpcCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5pbnN0cnVrc2kge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogbGlnaHRncmVlbjtcclxuICBtYXJnaW4tdG9wOiA3JTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUgeyBcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxufVxyXG5cclxuaHJ7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzMwNTNBNDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJvdW5kIHtib3JkZXItcmFkaXVzOiAxMnB4O31cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgLnJvdzphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEge1xyXG4gIHdpZHRoOiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMiB7XHJcbiAgd2lkdGg6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMyB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNCB7XHJcbiAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNSB7XHJcbiAgd2lkdGg6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNyB7XHJcbiAgd2lkdGg6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtOCB7XHJcbiAgd2lkdGg6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtOSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMTAge1xyXG4gIHdpZHRoOiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTExIHtcclxuICB3aWR0aDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMCB7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMSB7XHJcbiAgcmlnaHQ6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTIge1xyXG4gIHJpZ2h0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMyB7XHJcbiAgcmlnaHQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC00IHtcclxuICByaWdodDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTUge1xyXG4gIHJpZ2h0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNiB7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC03IHtcclxuICByaWdodDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTgge1xyXG4gIHJpZ2h0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtOSB7XHJcbiAgcmlnaHQ6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMCB7XHJcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMSB7XHJcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMiB7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMCB7XHJcbiAgbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xIHtcclxuICBsZWZ0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0yIHtcclxuICBsZWZ0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMyB7XHJcbiAgbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTQge1xyXG4gIGxlZnQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC01IHtcclxuICBsZWZ0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNiB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTcge1xyXG4gIGxlZnQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC04IHtcclxuICBsZWZ0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtOSB7XHJcbiAgbGVmdDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTEwIHtcclxuICBsZWZ0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMTEge1xyXG4gIGxlZnQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xMiB7XHJcbiAgbGVmdDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEge1xyXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0zIHtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTUge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC02IHtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC05IHtcclxuICBtYXJnaW4tbGVmdDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEyIHtcclxuICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICB9IiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmYtNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5za2lwIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmluc3RydWtzaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XG4gIG1hcmdpbi10b3A6IDclO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5taWRkbGUge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2wteHMtMSB7XG4gIHdpZHRoOiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy0yIHtcbiAgd2lkdGg6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvbC14cy00IHtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy01IHtcbiAgd2lkdGg6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy02IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbC14cy03IHtcbiAgd2lkdGg6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy04IHtcbiAgd2lkdGg6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy05IHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmNvbC14cy0xMCB7XG4gIHdpZHRoOiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtMTEge1xuICB3aWR0aDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVsbC0wIHtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVsbC0xIHtcbiAgcmlnaHQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMiB7XG4gIHJpZ2h0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0zIHtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdWxsLTQge1xuICByaWdodDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtNSB7XG4gIHJpZ2h0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC02IHtcbiAgcmlnaHQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdWxsLTcge1xuICByaWdodDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtOCB7XG4gIHJpZ2h0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC05IHtcbiAgcmlnaHQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdWxsLTEwIHtcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTExIHtcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTEyIHtcbiAgcmlnaHQ6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVzaC0wIHtcbiAgbGVmdDogYXV0bztcbn1cblxuLmNvbC14cy1wdXNoLTEge1xuICBsZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTIge1xuICBsZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0zIHtcbiAgbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLXB1c2gtNCB7XG4gIGxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTUge1xuICBsZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC02IHtcbiAgbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLXB1c2gtNyB7XG4gIGxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTgge1xuICBsZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC05IHtcbiAgbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLXB1c2gtMTAge1xuICBsZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMSB7XG4gIGxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTEyIHtcbiAgbGVmdDogMTAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLW9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLW9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTkge1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTIge1xuICBtYXJnaW4tbGVmdDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts ***!
  \************************************************************************/
/*! exports provided: AllbunttonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllbunttonPage", function() { return AllbunttonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");








let AllbunttonPage = class AllbunttonPage {
    constructor(platform, alertController, navCtrl, activatedRoute, selling, router) {
        //   platform.ready().then(() => {    
        //     this.powerbutton();
        this.platform = platform;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.selling = selling;
        this.router = router;
        this.resultPowerButton = false;
        this.resultVolumeUpButton = false;
        this.resultVolumeDownButton = false;
        // });
    }
    ngOnInit() {
        this.volumeup();
        this.volumedown();
        this.powerbutton();
        this.activatedRoute.queryParams.subscribe(params => {
            this.brand = params["brand"];
            this.ram = params["ram"];
            this.storages = params["storages"];
            this.lokasi_trade = params["lokasi_trade"];
            this.screenHasProblem = params["screenHasProblem"];
            this.cameraHasProblem = params["cameraHasProblem"];
            this.wifiHasProblem = params["wifiHasProblem"];
            this.vibrateHasProblem = params["vibrateHasProblem"];
            this.fingerprintHasProblem = params["fingerprintHasProblem"];
            console.log('brand', this.brand);
            console.log('storage', this.storages);
            console.log('ram', this.ram);
            console.log('lokasi trade', this.lokasi_trade);
            console.log('screen', this.screenHasProblem);
            console.log('camera', this.cameraHasProblem);
            console.log('wifi', this.wifiHasProblem);
            console.log('finger', this.fingerprintHasProblem);
        });
    }
    volumeup() {
        //   document.addEventListener("volumeupbutton", callback, false);  
        //   function callback() { 
        //     alert('Tekan Tombol Volume Bawah');
        //     document.removeEventListener("volumedownbutton",callback, false)
        // }
        document.addEventListener("volumeupbutton", callbackFunction, false);
        function callbackFunction() {
            if (this.resultVolumeUpButton != true) {
                alert('Volume Up Button is pressed!');
            }
            // console.log(this.resultVolumeUpButton);
            this.resultVolumeUpButton = true;
        }
    }
    volumedown() {
        //   document.addEventListener("volumedownbutton", callback, false);
        //   function callback() {
        //   alert('Tombol Volume anda Normal. Selanjutnya tekan tombol power on/of hp anda');
        //   document.removeEventListener("volumedownbutton",callback, false)
        // }
        document.addEventListener("volumedownbutton", callbackFunction, false);
        function callbackFunction() {
            if (this.resultVolumeDownButton != true) {
                alert('Volume Down Button is pressed!');
            }
            // console.log(this.resultVolumeDownButton);
            this.resultVolumeDownButton = true;
        }
    }
    powerbutton() {
        this.platform.resume.subscribe(() => {
            if (this.resultPowerButton != true) {
                alert('Power Button Button is pressed!');
            }
            // console.log(this.resultPowerButton);
            this.resultPowerButton = true;
            // alert('[INFO] Test button sudah selesai, lanjut ke tahap selanjutnya');
            // this.back();
        });
    }
    submit() {
        if (this.resultPowerButton == true || this.resultVolumeDownButton == true || this.resultVolumeUpButton == true) {
            this.normal();
        }
        else {
            this.notNormal();
        }
    }
    normal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Test button anda telah berhasi. Ingin lanjut?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: () => { }
                    }, {
                        text: 'Iya',
                        handler: () => {
                            let data = {
                                brand: this.brand,
                                ram: this.ram,
                                storages: this.storages,
                                lokasi_trade: this.lokasi_trade,
                                screenHasProblem: this.screenHasProblem,
                                cameraHasProblem: this.cameraHasProblem,
                                wifiHasProblem: this.wifiHasProblem,
                                vibrateHasProblem: this.vibrateHasProblem,
                                fingerprintHasProblem: this.fingerprintHasProblem,
                                buttonHasProblem: 0,
                            };
                            this.selling.SetSelling(data);
                            this.router.navigate([
                                "/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail",
                            ]);
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    notNormal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Ada button yang belum dipencet!. Apa anda ingin melanjutkan?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: () => {
                        }
                    }, {
                        text: 'Iya',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const alert = yield this.alertController.create({
                                header: 'ZFix',
                                message: 'Jika anda tekan iya, anda memverifikasi bahwa button anda memiliki masalah.',
                                backdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Tidak',
                                        role: 'cancel',
                                        handler: () => {
                                        }
                                    }, {
                                        text: 'Iya',
                                        handler: () => {
                                            let data = {
                                                brand: this.brand,
                                                ram: this.ram,
                                                storages: this.storages,
                                                lokasi_trade: this.lokasi_trade,
                                                screenHasProblem: this.screenHasProblem,
                                                cameraHasProblem: this.cameraHasProblem,
                                                wifiHasProblem: this.wifiHasProblem,
                                                fingerprintHasProblem: this.fingerprintHasProblem,
                                                buttonHasProblem: 1,
                                            };
                                            this.selling.SetSelling(data);
                                            this.router.navigate([
                                                "/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail",
                                            ]);
                                        }
                                    }
                                ]
                            });
                            yield alert.present();
                        })
                    },
                ]
            });
            yield alert.present();
        });
    }
    skip() {
        this.presentSkip();
    }
    presentSkip() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Tombol anda memiliki masalah!.',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Coba Lagi',
                        role: 'cancel',
                        handler: () => {
                            console.log('Continue');
                        }
                    }, {
                        text: 'Lewati',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const alert = yield this.alertController.create({
                                header: 'ZFix',
                                message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa tombol anda memiliki masalah.',
                                backdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Lanjut',
                                        role: 'cancel',
                                        handler: () => {
                                            // console.log('Continue');
                                        }
                                    }, {
                                        text: 'Tetap lewati',
                                        handler: () => {
                                            let data = {
                                                brand: this.brand,
                                                ram: this.ram,
                                                storages: this.storages,
                                                lokasi_trade: this.lokasi_trade,
                                                screenHasProblem: this.screenHasProblem,
                                                cameraHasProblem: this.cameraHasProblem,
                                                wifiHasProblem: this.wifiHasProblem,
                                                fingerprintHasProblem: this.fingerprintHasProblem,
                                                buttonHasProblem: 1,
                                            };
                                            this.selling.SetSelling(data);
                                            this.router.navigate([
                                                "/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail",
                                            ]);
                                        }
                                    }
                                ]
                            });
                            yield alert.present();
                        })
                    },
                ]
            });
            yield alert.present();
        });
    }
};
AllbunttonPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_4__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AllbunttonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-allbuntton',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./allbuntton.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./allbuntton.page.scss */ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.scss")).default]
    })
], AllbunttonPage);



/***/ })

}]);
//# sourceMappingURL=selling-hp-allbuntton-allbuntton-module-es2015.js.map