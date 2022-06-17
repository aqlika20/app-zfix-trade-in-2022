(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content [fullscreen]=\"true\" mode=\"md\">\r\n\r\n  <div class=\"content\">\r\n    <div class=\"icon\" routerLink=\"/landing/setting\">\r\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    </div>\r\n    \r\n    <h1>Edit Profile</h1>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-label color=\"primary\" position=\"stacked\">Name</ion-label>\r\n      <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"user.data?.user.name\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-label color=\"primary\" position=\"stacked\">Mobile Phone</ion-label>\r\n      <ion-input name=\"contact\" [(ngModel)]=\"user.data?.user.contact\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-label color=\"primary\" position=\"stacked\">Address</ion-label>\r\n      <ion-input name=\"address\" [(ngModel)]=\"user.data?.user.address\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item class=\"border\">\r\n      <ion-label color=\"primary\" position=\"stacked\">Email</ion-label>\r\n      <ion-input type=\"text\" name=\"email\"  [(ngModel)]=\"user.data?.user.email\"></ion-input>\r\n    </ion-item>\r\n    \r\n    <div class=\"btn\">\r\n      <ion-button class=\"btn2\" shape=\"round\" (click)=\"submit()\">Submit</ion-button>\r\n    </div>\r\n\r\n    <!-- <section>\r\n      <ion-button expand=\"block\" (click)=\"submit()\">Submit</ion-button>\r\n    </section> -->\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/landing/settings/profile/profile-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/settings/profile/profile-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/landing/settings/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/profile/profile.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/settings/profile/profile.module.ts ***!
  \******************************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/landing/settings/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/landing/settings/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/profile/profile.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/settings/profile/profile.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  color: #035282;\n}\n\n.content {\n  padding: 20px;\n}\n\nh1 {\n  margin-top: 20px;\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n}\n\n.icon {\n  background: #ebeef5;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n  margin-top: 30px;\n}\n\nion-icon {\n  font-size: 25px;\n  color: #045fc4;\n}\n\n.border {\n  border: black solid 0.5px;\n  border-radius: 10px;\n  margin-top: 5%;\n}\n\n.btn {\n  width: 100%;\n  height: 100%;\n  padding: 0 !important;\n}\n\n.btn2 {\n  width: 100%;\n  color: white;\n  font-family: Plus Jakarta Sans;\n  font-weight: 400;\n  border-radius: 60%;\n  margin-top: 6%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9wcm9maWxlL0Q6XFx6Zml4LXRyYWRlLWluLTIwMjIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQTBCO0FDQzVCOztBREVBO0VBQ0UsYUFBYTtBQ0NmOztBREVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNDakI7O0FERUE7RUFDRSxtQkFBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FDQ2xCOztBREVBO0VBQ0UsZUFBZTtFQUNmLGNBQTBCO0FDQzVCOztBREVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0FDQ2hCOztBREVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7QUNDdkI7O0FERUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUNDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmdzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XHJcbiAgY29sb3I6IHJnYmEoMywgODIsIDEzMCwgMSk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnMgRXh0cmE7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbiAgXHJcbi5pY29uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNSwgMjM4LCAyNDUsIDEpO1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHJnYmEoNCwgOTUsIDE5NiwgMSk7XHJcbn1cclxuXHJcbi5ib3JkZXJ7XHJcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAwLjVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiA2MCU7XHJcbiAgbWFyZ2luLXRvcDogNiU7XHJcbn0iLCJpb24tbGFiZWwge1xuICBjb2xvcjogIzAzNTI4Mjtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5pY29uIHtcbiAgYmFja2dyb3VuZDogI2ViZWVmNTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDQ1ZmM0O1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAwLjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG4yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFBsdXMgSmFrYXJ0YSBTYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiA2MCU7XG4gIG1hcmdpbi10b3A6IDYlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/landing/settings/profile/profile.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing/settings/profile/profile.page.ts ***!
  \****************************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/api/user-api.service */ "./src/app/services/api/user-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");









let ProfilePage = class ProfilePage {
    constructor(authService, storage, userApiService, router, alertCtrl, utilsService) {
        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.utilsService = utilsService;
        this.user = {};
        this.credential = {};
    }
    ngOnInit() {
        this.getUser();
    }
    ionViewWillLeave() {
        this.credential = {};
    }
    getUser() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then((token) => {
            this.userApiService.userDetail(token).subscribe((response) => {
                this.user = response;
                console.log(this.user);
                // console.log("image slides", this.listImageSlides);
            }, (err) => {
                this.user = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    submit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if ((((_a = this.user.data) === null || _a === void 0 ? void 0 : _a.user.name) == null || ((_b = this.user.data) === null || _b === void 0 ? void 0 : _b.user.address) == null || ((_c = this.user.data) === null || _c === void 0 ? void 0 : _c.user.contact) == null) || (((_d = this.user.data) === null || _d === void 0 ? void 0 : _d.user.email.replace(/\s/g, "")) == "" || ((_e = this.user.data) === null || _e === void 0 ? void 0 : _e.user.name.replace(/\s/g, "")) == "" || ((_f = this.user.data) === null || _f === void 0 ? void 0 : _f.user.contact.replace(/\s/g, "")) == "" || ((_g = this.user.data) === null || _g === void 0 ? void 0 : _g.user.address.replace(/\s/g, "")) == "")) {
            this.utilsService.showToast("Lengkapi pengisian form.");
        }
        else {
            this.credential.name = (_h = this.user.data) === null || _h === void 0 ? void 0 : _h.user.name;
            this.credential.email = (_j = this.user.data) === null || _j === void 0 ? void 0 : _j.user.email;
            this.credential.address = (_k = this.user.data) === null || _k === void 0 ? void 0 : _k.user.address;
            this.credential.contact = (_l = this.user.data) === null || _l === void 0 ? void 0 : _l.user.contact;
            console.log(this.credential);
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then((token) => {
                this.userApiService.userEdit(token, this.credential).subscribe((success) => {
                    this.utilsService.showToast("Update profile berhasil.");
                    this.router.navigate(["landing/type"]);
                }, (err) => {
                    var error = {};
                    error = err.error;
                    this.utilsService.showToast(error.message);
                });
            });
        }
    }
    hideKeyboard() {
        this.utilsService.hideKeyboard();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_5__["UserApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/landing/settings/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=settings-profile-profile-module-es2015.js.map