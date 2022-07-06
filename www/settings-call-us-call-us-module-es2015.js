(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-call-us-call-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content [fullscreen]=\"true\" mode=\"md\">\r\n  \r\n  <div class=\"content\">\r\n    <div class=\"icon\" routerLink=\"/landing/setting\">\r\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    </div>\r\n    \r\n    <h1>Hubungi Kami Melalui</h1>\r\n    <section>\r\n      <a class=\"button-whatsapp\" href=\"https://api.whatsapp.com/send?phone=6287704775575\"><img src=\"../../../../assets/icon/whatsapp.png\" alt=\"\" style=\"height: 20px; width: 20px;\">&nbsp; Whatsapp</a>\r\n      \r\n      <a class=\"button-call\" href=\"tel:+62 877-0477-5575\"><img src=\"../../../../assets/icon/phone-call.png\" alt=\"\" style=\"height: 20px; width: 20px;\">&nbsp; Call</a>\r\n    </section>\r\n    <br>\r\n    <div class=\"itemBorder\">\r\n      <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Apa masalah Anda\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"this.option = $event.target.value\">\r\n        <ion-select-option value=\"Tidak Bisa Digunakan\">Tidak Bisa Digunakan</ion-select-option>\r\n        <ion-select-option value=\"Lapor Masalah\">Lapor Masalah</ion-select-option>\r\n      </ion-select>\r\n    </div>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-input type=\"text\" [(ngModel)]=\"reason\" placeholder=\"Alasan Anda\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-textarea type=\"text\" [(ngModel)]=\"description\"  placeholder=\"Deskripsi\" style=\"height: 200px;\"></ion-textarea>\r\n    </ion-item>\r\n  \r\n    <div class=\"btn\">\r\n      <ion-button class=\"btn2\" shape=\"round\" (click)=\"sendEmail()\">Submit</ion-button>\r\n    </div>\r\n  </div>\r\n  \r\n</ion-content>\r\n  ");

/***/ }),

/***/ "./src/app/pages/landing/settings/call-us/call-us-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/settings/call-us/call-us-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CallUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPageRoutingModule", function() { return CallUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _call_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call-us.page */ "./src/app/pages/landing/settings/call-us/call-us.page.ts");




const routes = [
    {
        path: '',
        component: _call_us_page__WEBPACK_IMPORTED_MODULE_3__["CallUsPage"]
    }
];
let CallUsPageRoutingModule = class CallUsPageRoutingModule {
};
CallUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CallUsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/call-us/call-us.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/settings/call-us/call-us.module.ts ***!
  \******************************************************************/
/*! exports provided: CallUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPageModule", function() { return CallUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _call_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call-us-routing.module */ "./src/app/pages/landing/settings/call-us/call-us-routing.module.ts");
/* harmony import */ var _call_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call-us.page */ "./src/app/pages/landing/settings/call-us/call-us.page.ts");







let CallUsPageModule = class CallUsPageModule {
};
CallUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _call_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallUsPageRoutingModule"]
        ],
        declarations: [_call_us_page__WEBPACK_IMPORTED_MODULE_6__["CallUsPage"]]
    })
], CallUsPageModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/call-us/call-us.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/settings/call-us/call-us.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  color: #035282;\n}\n\n.content {\n  padding: 20px;\n}\n\nh1 {\n  margin-top: 20px;\n  font-family: Plus Jakarta Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n}\n\n.itemBorder {\n  border: black solid 0.5px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\nion-select {\n  max-width: 100%;\n  color: black;\n  font-size: 14px;\n  text-align: left !important;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\n\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n  margin-top: 30px;\n}\n\nion-icon {\n  font-size: 25px;\n  color: #045fc4;\n}\n\n.border {\n  border: black solid 0.5px;\n  border-radius: 10px;\n  margin-top: 5%;\n}\n\nion-input {\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\n\nion-textarea {\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\n\n.btn {\n  width: 100%;\n  height: 100%;\n  padding: 0 !important;\n}\n\n.btn2 {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 60%;\n  margin-top: 6%;\n}\n\n.button-call {\n  background-color: rgba(4, 161, 196, 0.12);\n  border: none;\n  color: black;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  border-radius: 25px;\n  padding: 15px 55px;\n}\n\n.button-whatsapp {\n  background-color: rgba(37, 211, 102, 0.15);\n  border: none;\n  color: black;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  margin-right: 15px;\n  border-radius: 25px;\n  padding: 15px 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9jYWxsLXVzL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xcY2FsbC11c1xcY2FsbC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvY2FsbC11cy9jYWxsLXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBRElBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmdzL2NhbGwtdXMvY2FsbC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XHJcbiAgY29sb3I6IHJnYmEoMywgODIsIDEzMCwgMSk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uaXRlbUJvcmRlcntcclxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDAuNXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDsgXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pe1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNSwgMjM4LCAyNDUsIDEpO1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbn1cclxuXHJcbi5ib3JkZXJ7XHJcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAwLjVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5pb24taW5wdXR7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pb24tdGV4dGFyZWF7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiA2MCU7XHJcbiAgbWFyZ2luLXRvcDogNiU7XHJcbn1cclxuXHJcbi5idXR0b24tY2FsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LCAxNjEsIDE5NiwgMC4xMik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIC8vIHdpZHRoOiAyMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwYWRkaW5nOiAxNXB4IDU1cHg7XHJcbiAgXHJcbn1cclxuXHJcbi5idXR0b24td2hhdHNhcHAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDIxMSwgMTAyLCAwLjE1KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIC8vIHdpZHRoOiAyMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbn0iLCJpb24tbGFiZWwge1xuICBjb2xvcjogIzAzNTI4Mjtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5pdGVtQm9yZGVyIHtcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAwLjVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBjb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pY29uIHtcbiAgYmFja2dyb3VuZDogI2ViZWVmNTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDQ1ZmM0O1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAwLjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG4yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiA2MCU7XG4gIG1hcmdpbi10b3A6IDYlO1xufVxuXG4uYnV0dG9uLWNhbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQsIDE2MSwgMTk2LCAwLjEyKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4IDU1cHg7XG59XG5cbi5idXR0b24td2hhdHNhcHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMTEsIDEwMiwgMC4xNSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/landing/settings/call-us/call-us.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing/settings/call-us/call-us.page.ts ***!
  \****************************************************************/
/*! exports provided: CallUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPage", function() { return CallUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_email_composer_ngx_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/email-composer/ngx/index */ "./node_modules/@ionic-native/email-composer/ngx/index.js");



let CallUsPage = class CallUsPage {
    constructor(emailComposer) {
        this.emailComposer = emailComposer;
        this.sendObj = {
            to: '',
            subject: '',
            body: ''
        };
        this.customPopoverOptions = {
            header: "What's Your Problem"
        };
    }
    ngOnInit() {
    }
    sendEmail() {
        let email = {
            to: 'cs@zfix.id',
            subject: this.option + '-' + this.reason,
            body: this.description,
            isHtml: true
        };
        this.emailComposer.open(email);
    }
};
CallUsPage.ctorParameters = () => [
    { type: _ionic_native_email_composer_ngx_index__WEBPACK_IMPORTED_MODULE_2__["EmailComposer"] }
];
CallUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-call-us',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./call-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./call-us.page.scss */ "./src/app/pages/landing/settings/call-us/call-us.page.scss")).default]
    })
], CallUsPage);



/***/ })

}]);
//# sourceMappingURL=settings-call-us-call-us-module-es2015.js.map