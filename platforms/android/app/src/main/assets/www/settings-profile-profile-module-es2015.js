(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content [fullscreen]=\"true\" mode=\"md\">\n\n<div class=\"icon\" routerLink=\"/landing/setting\">\n  <ion-icon name=\"arrow-back-outline\"></ion-icon>\n</div>\n\n  <h1>Edit Profile</h1>\n\n  <ion-item style=\"margin: 10px; border: black solid 0.5px; border-radius: 10px;\">\n    <ion-label position=\"stacked\">Name</ion-label>\n    <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"user.data?.user.name\"></ion-input>\n  </ion-item>\n\n  <ion-item style=\"margin: 10px; border: black solid 0.5px; border-radius: 10px;\">\n    <ion-label position=\"stacked\">Mobile Phone</ion-label>\n    <ion-input name=\"contact\" [(ngModel)]=\"user.data?.user.contact\"></ion-input>\n  </ion-item>\n\n  <ion-item style=\"margin: 10px; border: black solid 0.5px; border-radius: 10px;\">\n    <ion-label position=\"stacked\">Address</ion-label>\n    <ion-input name=\"address\" [(ngModel)]=\"user.data?.user.address\"></ion-input>\n  </ion-item>\n\n  <ion-item style=\"margin: 10px; border: black solid 0.5px; border-radius: 10px;\">\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input type=\"text\" name=\"email\"  [(ngModel)]=\"user.data?.user.email\"></ion-input>\n  </ion-item>\n\n  <section>\n    <ion-button expand=\"block\" (click)=\"submit()\">Submit</ion-button>\n  </section>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  margin-top: 20px;\n  margin-left: 15px;\n}\n\n.icon {\n  background: lightblue;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n  margin-top: 30px;\n  margin-left: 20px;\n}\n\nion-icon {\n  font-size: 25px;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9wcm9maWxlL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4gIFxyXG4gIC5pY29uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59IiwiaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmljb24ge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IGJsdWU7XG59Il19 */");

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