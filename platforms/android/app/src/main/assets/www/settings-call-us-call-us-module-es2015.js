(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-call-us-call-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content [fullscreen]=\"true\" mode=\"md\">\r\n  \r\n  <div class=\"content\">\r\n    <div class=\"icon\" routerLink=\"/landing/setting\">\r\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    </div>\r\n    \r\n    <h1>Hubungi Kami Melalui:</h1>\r\n    <h2 style=\"color: blue;\"><a href=\"tel:+62 877-0477-5575\">Telphone: +62 877-0477-5575</a></h2>\r\n    <h2><a href=\"https://api.whatsapp.com/send?phone=6287704775575\" >Whatsapp: 087704775575</a></h2>\r\n    <h2>Email, Dengan Mengisi Form Dibawah ini.</h2>\r\n    <div class=\"itemBorder\">\r\n      <ion-select [interfaceOptions]=\"customPopoverOptions\" placeholder=\"Apa masalah Anda\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"this.option = $event.target.value\">\r\n        <ion-select-option value=\"Tidak Bisa Digunakan\">Tidak Bisa Digunakan</ion-select-option>\r\n        <ion-select-option value=\"Lapor Masalah\">Lapor Masalah</ion-select-option>\r\n      </ion-select>\r\n    </div>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-input type=\"text\" [(ngModel)]=\"reason\" placeholder=\"Alasan Anda\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-textarea type=\"text\" [(ngModel)]=\"description\"  placeholder=\"Deskripsi\" style=\"height: 200px;\"></ion-textarea>\r\n    </ion-item>\r\n  \r\n    <div class=\"btn\">\r\n      <ion-button class=\"btn2\" shape=\"round\" (click)=\"sendEmail()\">Submit</ion-button>\r\n    </div>\r\n  </div>\r\n  \r\n</ion-content>\r\n  ");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  color: #035282;\n}\n\n.content {\n  padding: 20px;\n}\n\nh1 {\n  margin-top: 20px;\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n}\n\n.itemBorder {\n  border: black solid 0.5px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\nion-select {\n  max-width: 100%;\n  color: black;\n  font-size: 14px;\n  text-align: left !important;\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\n\nion-select::part(icon) {\n  margin-right: 3%;\n  color: black;\n  opacity: 1;\n}\n\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n  margin-top: 30px;\n}\n\nion-icon {\n  font-size: 25px;\n  color: #045fc4;\n}\n\n.border {\n  border: black solid 0.5px;\n  border-radius: 10px;\n  margin-top: 5%;\n}\n\nion-input {\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\n\nion-textarea {\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n}\n\n.btn {\n  width: 100%;\n  height: 100%;\n  padding: 0 !important;\n}\n\n.btn2 {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 60%;\n  margin-top: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9jYWxsLXVzL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xcY2FsbC11c1xcY2FsbC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvY2FsbC11cy9jYWxsLXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9jYWxsLXVzL2NhbGwtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gIGNvbG9yOiByZ2JhKDMsIDgyLCAxMzAsIDEpO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zIEV4dHJhO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLml0ZW1Cb3JkZXJ7XHJcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAwLjVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7IFxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxufVxyXG5cclxuaW9uLXNlbGVjdDo6cGFydChpY29uKXtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzUsIDIzOCwgMjQ1LCAxKTtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI0ZGRjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDQsIDk1LCAxOTYsIDEpO1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gIGJvcmRlcjogYmxhY2sgc29saWQgMC41cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxufVxyXG5cclxuaW9uLXRleHRhcmVhe1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJ0bntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuMntcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xyXG4gIG1hcmdpbi10b3A6IDYlO1xyXG59IiwiaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMzUyODI7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uaXRlbUJvcmRlciB7XG4gIGJvcmRlcjogYmxhY2sgc29saWQgMC41cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaWNvbiB7XG4gIGJhY2tncm91bmQ6ICNlYmVlZjU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzA0NWZjNDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogYmxhY2sgc29saWQgMC41cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xuICBtYXJnaW4tdG9wOiA2JTtcbn0iXX0= */");

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