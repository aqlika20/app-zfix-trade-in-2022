(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/home/home.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/home/home.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"md\" [fullscreen]=\"true\">\n  <ion-item lines=\"none\" class=\"current-user\">\n    <ion-avatar slot=\"start\">\n      <img src=\"./assets/images/contact_mascot.png\" />\n    </ion-avatar>\n    <ion-label class=\"ion-text-nowrap\">\n      <p *ngIf=\"user != {}\">Halo, {{ user.data?.user.name }}</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-slides pager=\"true\">\n    <ion-slide>\n      <img src=\"./assets/images/login_header.png\" />\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card>\n    <ion-item (click)=\"goTo(1)\">\n      <ion-img src=\"./assets/images/cta_activation.png\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <ion-card-title> AKTIVASIKAN MEMBERSHIP ANDA </ion-card-title>\n        <ion-card-content>\n          Satu langkah lagi untuk menikmati berbagai keuntungan Membership ZFix\n        </ion-card-content>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-item (click)=\"goTo(2)\">\n      <ion-img src=\"./assets/images/cta_activation.png\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <ion-card-title> PENGAJUAN PERBAIKAN </ion-card-title>\n        <ion-card-content>\n          Silahkan ajukan permintaan perbaikan jika gadget Anda mengalami\n          kendala\n        </ion-card-content>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <!-- <ion-card>\n    <ion-item (click)=\"goTo(3)\">\n      <ion-img src=\"./assets/images/cta_buy_plan.png\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <ion-card-title> LINDUNGI GADGET TERBARU ANDA </ion-card-title>\n        <ion-card-content>\n          Beli Membership ZFix secara langsung di berbagai partner resmi kami\n        </ion-card-content>\n      </ion-label>\n    </ion-item>\n  </ion-card> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/home/home-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/landing/home/home-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/landing/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/home/home.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/home/home.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/landing/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/landing/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/landing/home/home.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/home/home.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  width: 80%;\n  height: 20%;\n  align-content: center;\n}\n\nion-text {\n  padding-top: 5%;\n  margin-bottom: 10%;\n}\n\nimg {\n  height: 90%;\n  width: 90%;\n}\n\nion-img {\n  width: 20%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n\nion-card {\n  border-radius: 10px !important;\n}\n\nion-card-title {\n  white-space: normal;\n  padding-top: 5%;\n  margin-left: 10%;\n  color: #000080;\n  font-weight: bold;\n}\n\nion-card-content {\n  white-space: normal;\n  margin-left: 4%;\n  color: #808080;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9ob21lL0M6XFxVc2Vyc1xcQVNVU1xcRGVza3RvcFxcemZpeF9hcHBfYW5ndWxhcl9odHRwX25ldzkvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7QUNDdkI7O0FERUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FDQ3BCOztBREVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUNDWjs7QURFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0FDQ3BCOztBREVBO0VBQ0UsOEJBQThCO0FDQ2hDOztBREVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQ0NuQjs7QURFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgaGVpZ2h0OiA5MCU7IFxyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbmlvbi1pbWcge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgcGFkZGluZy10b3A6IDMlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgY29sb3I6ICMwMDAwODA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gIGNvbG9yOiAjODA4MDgwO1xyXG59IiwiaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXRleHQge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA5MCU7XG59XG5cbmlvbi1pbWcge1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBjb2xvcjogIzAwMDA4MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/landing/home/home.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/home/home.page.ts ***!
  \*************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/user-api.service */ "./src/app/services/api/user-api.service.ts");
/* harmony import */ var _services_api_app_version_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api/app-version-api.service */ "./src/app/services/api/app-version-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");















let HomePage = class HomePage {
    constructor(storage, userApiService, utilsService, membership, toastCtrl, router, MembershipService, LocalNotifications, backgroundMode, appVersion, appVersionApiService, alertController) {
        this.storage = storage;
        this.userApiService = userApiService;
        this.utilsService = utilsService;
        this.membership = membership;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.MembershipService = MembershipService;
        this.LocalNotifications = LocalNotifications;
        this.backgroundMode = backgroundMode;
        this.appVersion = appVersion;
        this.appVersionApiService = appVersionApiService;
        this.alertController = alertController;
        this.user = {};
        this.claim = [];
    }
    ngOnInit() {
        // this.notification();
    }
    ionViewWillEnter() {
        this.membership.removeMembershipActivation();
        this.getUser();
        this.appVersion.getVersionNumber().then(version => {
            var check = {};
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
                this.appVersionApiService.detail(token).subscribe((response) => {
                    var _a;
                    check = response;
                    if (((_a = check.data) === null || _a === void 0 ? void 0 : _a.version) != version) {
                        this.needUpdate();
                    }
                }, (err) => {
                    check = [];
                    this.utilsService.showToast("There is a problem.");
                });
            });
        });
    }
    needUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Mohon perbarui ke versi terbaru.',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            navigator["app"].exitApp();
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    getUser() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.userApiService.userDetail(token).subscribe((response) => {
                this.user = response;
            }, (err) => {
                this.user = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    goTo(id) {
        if (id == 1) {
            var check = {};
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
                this.userApiService.userDetail(token).subscribe((response) => {
                    var _a, _b;
                    check = response;
                    if (((_a = check.data) === null || _a === void 0 ? void 0 : _a.customer.contact) != '' && ((_b = check.data) === null || _b === void 0 ? void 0 : _b.customer.address)) {
                        this.router.navigate(['landing', 'membership-activation']);
                    }
                    else {
                        this.utilsService.showToast("Lengkapi profile dahulu.");
                        this.router.navigate(['landing', 'edit-profile']);
                    }
                }, (err) => {
                    check = [];
                    this.utilsService.showToast("There is a problem.");
                });
            });
        }
        else if (id == 2) {
            this.router.navigate(['landing', 'membership-claim']);
        }
        else if (id == 3) {
            this.router.navigate(["/landing/membership-activation/device-detail/screen-testing/device-image"]);
            this.utilsService.showToast("Coming soon.");
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_7__["MembershipService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_10__["MembershipApiService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"] },
    { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__["BackgroundMode"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__["AppVersion"] },
    { type: _services_api_app_version_api_service__WEBPACK_IMPORTED_MODULE_5__["AppVersionApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/landing/home/home.page.scss")).default]
    })
], HomePage);



/***/ }),

/***/ "./src/app/services/api/app-version-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/api/app-version-api.service.ts ***!
  \*********************************************************/
/*! exports provided: AppVersionApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppVersionApiService", function() { return AppVersionApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/api */ "./src/app/config/api.js");




let AppVersionApiService = class AppVersionApiService {
    constructor(http) {
        this.http = http;
    }
    detail(token) {
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "app-version", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token),
        });
    }
};
AppVersionApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppVersionApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppVersionApiService);



/***/ })

}]);
//# sourceMappingURL=pages-landing-home-home-module-es2015.js.map