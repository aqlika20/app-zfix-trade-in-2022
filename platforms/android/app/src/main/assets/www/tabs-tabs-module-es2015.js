(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\" >\r\n      <ion-tab-button tab=\"type\">\r\n        <!-- <div class=\"achome\">\r\n          <div class=\"home\"></div>\r\n        </div> -->\r\n        <img src=\"../../../../assets/icon/home-activemdpi.png\" alt=\"\">\r\n        <ion-label>Home</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"my-qr\">\r\n        <!-- <div class=\"acqr\">\r\n          <div class=\"qr\"></div>\r\n        </div> -->\r\n        <img src=\"../../../../assets/icon/scan-barcode-activemdpi.png\" alt=\"\">\r\n        <ion-label>My QrCode</ion-label>\r\n      </ion-tab-button>\r\n      \r\n      <ion-tab-button tab=\"setting\">\r\n        <!-- <div class=\"acsetting\">\r\n          <div class=\"setting\"></div>\r\n        </div> -->\r\n        <img src=\"../../../../assets/icon/setting-activemdpi.png\" alt=\"\">\r\n        <ion-label>Setting</ion-label> \r\n      </ion-tab-button>\r\n  \r\n    </ion-tab-bar>\r\n  </ion-tabs>");

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
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  --background: rgb(255, 255, 255);\n  align-self: center;\n  border-radius: 40px;\n  margin-bottom: 20px;\n}\nion-tab-bar ion-tab-button {\n  --color-selected: black;\n}\nion-label {\n  font-family: Plus Jakarta Sans;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNqQko7QURpREk7RUFDSSx1QkFBQTtBQy9DUjtBRGlGQTtFQUNJLDhCQUFBO0FDOUVKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5hY2hvbWV7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gICAgIGhlaWdodDogNTAlO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuLy8gLmFjcXJ7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gICAgIGhlaWdodDogNTAlO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuLy8gLmFjc2V0dGluZ3tcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiA1MCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5pb24tdGFiLWJhcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gXHJcbiAgICAvLyAuaG9tZXtcclxuICAgIC8vICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvaWNvbi9ob21lbWRwaS5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gICAgIHRvcDogNTAlO1xyXG4gICAgLy8gICAgIGxlZnQ6IDY1JTtcclxuICAgIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC8vICB9XHJcbiAgICAvLyAucXJ7XHJcbiAgICAvLyAgICAgY29udGVudDogXCJcIjtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ljb24vc2Nhbi1iYXJjb2RlbWRwaS5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gICAgIHRvcDogNTAlO1xyXG4gICAgLy8gICAgIGxlZnQ6IDY1JTtcclxuICAgIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC8vICB9XHJcbiAgICAvLyAuc2V0dGluZ3tcclxuICAgIC8vICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvaWNvbi9zZXR0aW5nLTJtZHBpLnBuZycpIG5vLXJlcGVhdDtcclxuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgICAgd2lkdGg6IDUwJTtcclxuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyAgICAgdG9wOiA1MCU7XHJcbiAgICAvLyAgICAgbGVmdDogNjUlO1xyXG4gICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gIH1cclxuICAgIGlvbi10YWItYnV0dG9ue1xyXG4gICAgICAgIC0tY29sb3Itc2VsZWN0ZWQ6IGJsYWNrO1xyXG4gICAgICAgIC8vIC5ob21lOmhvdmVye1xyXG4gICAgICAgIC8vICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ljb24vaG9tZS1hY3RpdmVtZHBpLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLy8gICAgIHRvcDogNTAlO1xyXG4gICAgICAgIC8vICAgICBsZWZ0OiA2NSU7XHJcbiAgICAgICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC8vICB9XHJcbiAgICAgICAgLy8gLnFyOmhvdmVye1xyXG4gICAgICAgIC8vICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ljb24vc2Nhbi1iYXJjb2RlLWFjdGl2ZW1kcGkucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgLy8gICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAvLyAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgLy8gICAgIGxlZnQ6IDY1JTtcclxuICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLy8gIH1cclxuICAgICAgICAvLyAuc2V0dGluZzpob3ZlcntcclxuICAgICAgICAvLyAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogdXJsKCd+L2Fzc2V0cy9pY29uL3NldHRpbmctYWN0aXZlbWRwaS5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAvLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC8vICAgICB0b3A6IDUwJTtcclxuICAgICAgICAvLyAgICAgbGVmdDogNjUlO1xyXG4gICAgICAgIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAvLyAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbn0iLCJpb24tdGFiLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogOTAlO1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yLXNlbGVjdGVkOiBibGFjaztcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xufSJdfQ== */");
=======
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  --background: rgb(255, 255, 255);\n  align-self: center;\n  border-radius: 40px;\n  margin-bottom: 20px;\n}\n\nion-tab-bar ion-tab-button {\n  --color-selected: black;\n}\n\nion-label {\n  font-family: Plus Jakarta Sans;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQ0FBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FDakJ2Qjs7QURVQTtFQXdDUSx1QkFBaUI7QUM5Q3pCOztBRGdGQTtFQUNJLDhCQUE4QjtBQzdFbEMiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmFjaG9tZXtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiA1MCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG4vLyAuYWNxcntcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiA1MCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG4vLyAuYWNzZXR0aW5ne1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICBoZWlnaHQ6IDUwJTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcbmlvbi10YWItYmFye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiBcclxuICAgIC8vIC5ob21le1xyXG4gICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZDogdXJsKCd+L2Fzc2V0cy9pY29uL2hvbWVtZHBpLnBuZycpIG5vLXJlcGVhdDtcclxuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgICAgd2lkdGg6IDUwJTtcclxuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyAgICAgdG9wOiA1MCU7XHJcbiAgICAvLyAgICAgbGVmdDogNjUlO1xyXG4gICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gIH1cclxuICAgIC8vIC5xcntcclxuICAgIC8vICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvaWNvbi9zY2FuLWJhcmNvZGVtZHBpLnBuZycpIG5vLXJlcGVhdDtcclxuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgICAgd2lkdGg6IDUwJTtcclxuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyAgICAgdG9wOiA1MCU7XHJcbiAgICAvLyAgICAgbGVmdDogNjUlO1xyXG4gICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gIH1cclxuICAgIC8vIC5zZXR0aW5ne1xyXG4gICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZDogdXJsKCd+L2Fzc2V0cy9pY29uL3NldHRpbmctMm1kcGkucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vICAgICB3aWR0aDogNTAlO1xyXG4gICAgLy8gICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vICAgICB0b3A6IDUwJTtcclxuICAgIC8vICAgICBsZWZ0OiA2NSU7XHJcbiAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAvLyAgfVxyXG4gICAgaW9uLXRhYi1idXR0b257XHJcbiAgICAgICAgLS1jb2xvci1zZWxlY3RlZDogYmxhY2s7XHJcbiAgICAgICAgLy8gLmhvbWU6aG92ZXJ7XHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvaWNvbi9ob21lLWFjdGl2ZW1kcGkucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgLy8gICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAvLyAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgLy8gICAgIGxlZnQ6IDY1JTtcclxuICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLy8gIH1cclxuICAgICAgICAvLyAucXI6aG92ZXJ7XHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvaWNvbi9zY2FuLWJhcmNvZGUtYWN0aXZlbWRwaS5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAvLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC8vICAgICB0b3A6IDUwJTtcclxuICAgICAgICAvLyAgICAgbGVmdDogNjUlO1xyXG4gICAgICAgIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAvLyAgfVxyXG4gICAgICAgIC8vIC5zZXR0aW5nOmhvdmVye1xyXG4gICAgICAgIC8vICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ljb24vc2V0dGluZy1hY3RpdmVtZHBpLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLy8gICAgIHRvcDogNTAlO1xyXG4gICAgICAgIC8vICAgICBsZWZ0OiA2NSU7XHJcbiAgICAgICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC8vICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcclxufSIsImlvbi10YWItYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA5MCU7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvci1zZWxlY3RlZDogYmxhY2s7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2Fucztcbn1cbiJdfQ== */");
>>>>>>> e1124e0ccaa1e710e8bd72857b86b8926d0f402b

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