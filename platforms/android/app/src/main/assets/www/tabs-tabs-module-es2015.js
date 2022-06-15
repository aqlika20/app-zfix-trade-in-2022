(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\" >\r\n      <ion-tab-button tab=\"type\">\r\n        <ion-icon name=\"home\"></ion-icon>\r\n        <!-- <ion-label>Home</ion-label> -->\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"my-qr\">\r\n        <ion-icon name=\"qr-code-outline\"></ion-icon>\r\n        <!-- <ion-label>My QrCode</ion-label> -->\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"setting\">\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n        <!-- <ion-label>Setting</ion-label>  -->\r\n      </ion-tab-button>\r\n  \r\n    </ion-tab-bar>\r\n  </ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'landing',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'type',
                loadChildren: () => Promise.all(/*! import() | pages-landing-type-type-module */[__webpack_require__.e("common"), __webpack_require__.e("type-type-module")]).then(__webpack_require__.bind(null, /*! ../pages/landing/type/type.module */ "./src/app/pages/landing/type/type.module.ts")).then(m => m.TypePageModule)
            },
            {
                path: 'inbox',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-landing-inbox-inbox-module */ "pages-landing-inbox-inbox-module").then(__webpack_require__.bind(null, /*! ../pages/landing/inbox/inbox.module */ "./src/app/pages/landing/inbox/inbox.module.ts")).then(m => m.InboxPageModule)
            },
            {
                path: 'my-qr',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-landing-my-qr-my-qr-module */ "pages-landing-my-qr-my-qr-module").then(__webpack_require__.bind(null, /*! ../pages/landing/my-qr/my-qr.module */ "./src/app/pages/landing/my-qr/my-qr.module.ts")).then(m => m.MyQrPageModule)
            },
            {
                path: 'setting',
                loadChildren: () => Promise.all(/*! import() | pages-landing-settings-index-index-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-landing-settings-index-index-module")]).then(__webpack_require__.bind(null, /*! ../pages/landing/settings/index/index.module */ "./src/app/pages/landing/settings/index/index.module.ts")).then(m => m.IndexPageModule)
            },
            {
                path: '',
                redirectTo: '/landing/type/',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/landing/type/',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  --background: rgb(255, 255, 255);\n  align-self: center;\n  border-radius: 40px;\n  margin-bottom: 20px;\n}\n\nion-tab-bar ion-tab-button {\n  --color-selected: black;\n}\n\nion-tab-bar ion-tab-button ion-icon {\n  --color:rgba(132, 132, 132, 1);\n}\n\nion-label {\n  font-family: Plus Jakarta Sans;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUVWLGdDQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUNEdkI7O0FEUEE7RUFXUSx1QkFBaUI7QUNBekI7O0FEWEE7RUFhWSw4QkFBUTtBQ0VwQjs7QURHQTtFQUNJLDhCQUE4QjtBQ0FsQyIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRhYi1iYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjE5LCAyMTksIDIxOSk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLy8gY29sb3I6IDtcclxuICAgIGlvbi10YWItYnV0dG9ue1xyXG4gICAgICAgIC0tY29sb3Itc2VsZWN0ZWQ6IGJsYWNrO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAtLWNvbG9yOnJnYmEoMTMyLCAxMzIsIDEzMiwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbn0iLCJpb24tdGFiLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogOTAlO1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiB7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IGJsYWNrO1xufVxuXG5pb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIC0tY29sb3I6cmdiYSgxMzIsIDEzMiwgMTMyLCAxKTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map