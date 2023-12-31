(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-routing-module"],{

/***/ "./src/app/pages/landing/landing-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/landing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    {
        path: 'type',
        loadChildren: () => Promise.all(/*! import() | type-type-module */[__webpack_require__.e("common"), __webpack_require__.e("type-type-module")]).then(__webpack_require__.bind(null, /*! ./type/type.module */ "./src/app/pages/landing/type/type.module.ts")).then(m => m.TypePageModule)
    },
    {
        path: 'selling-phone',
        loadChildren: () => Promise.all(/*! import() | selling-hp-brand2-brand2-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-hp-brand2-brand2-module")]).then(__webpack_require__.bind(null, /*! ./selling-hp/brand2/brand2.module */ "./src/app/pages/landing/selling-hp/brand2/brand2.module.ts")).then(m => m.Brand2PageModule)
    },
    {
        path: 'selling-phone/screen-testing',
        loadChildren: () => Promise.all(/*! import() | selling-hp-screen-testing-screen-testing-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-hp-screen-testing-screen-testing-module")]).then(__webpack_require__.bind(null, /*! ./selling-hp/screen-testing/screen-testing.module */ "./src/app/pages/landing/selling-hp/screen-testing/screen-testing.module.ts")).then(m => m.ScreenTestingPageModule)
    },
    {
        path: 'selling-phone/screen-testing/camera',
        loadChildren: () => Promise.all(/*! import() | selling-hp-camera-camera-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-hp-camera-camera-module")]).then(__webpack_require__.bind(null, /*! ./selling-hp/camera/camera.module */ "./src/app/pages/landing/selling-hp/camera/camera.module.ts")).then(m => m.CameraPageModule)
    },
    {
        path: 'selling-phone/screen-testing/camera/wifi-detect',
        loadChildren: () => __webpack_require__.e(/*! import() | selling-hp-wifi-detect-wifi-detect-module */ "selling-hp-wifi-detect-wifi-detect-module").then(__webpack_require__.bind(null, /*! ./selling-hp/wifi-detect/wifi-detect.module */ "./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.module.ts")).then(m => m.WifiDetectPageModule)
    },
    {
        path: 'selling-phone/screen-testing/camera/wifi-detect/vibration',
        loadChildren: () => __webpack_require__.e(/*! import() | selling-hp-vibration-vibration-module */ "selling-hp-vibration-vibration-module").then(__webpack_require__.bind(null, /*! ./selling-hp/vibration/vibration.module */ "./src/app/pages/landing/selling-hp/vibration/vibration.module.ts")).then(m => m.VibrationPageModule)
    },
    {
        path: 'selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint',
        loadChildren: () => __webpack_require__.e(/*! import() | selling-hp-fingerprint-fingerprint-module */ "selling-hp-fingerprint-fingerprint-module").then(__webpack_require__.bind(null, /*! ./selling-hp/fingerprint/fingerprint.module */ "./src/app/pages/landing/selling-hp/fingerprint/fingerprint.module.ts")).then(m => m.FingerprintPageModule)
    },
    {
        path: 'selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton',
        loadChildren: () => Promise.all(/*! import() | selling-hp-allbuntton-allbuntton-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-hp-allbuntton-allbuntton-module")]).then(__webpack_require__.bind(null, /*! ./selling-hp/allbuntton/allbuntton.module */ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.module.ts")).then(m => m.AllbunttonPageModule)
    },
    {
        path: 'selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail',
        loadChildren: () => Promise.all(/*! import() | selling-hp-detail-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-hp-detail-detail-module")]).then(__webpack_require__.bind(null, /*! ./selling-hp/detail/detail.module */ "./src/app/pages/landing/selling-hp/detail/detail.module.ts")).then(m => m.DetailPageModule)
    },
    {
        path: 'laptop-brand',
        loadChildren: () => Promise.all(/*! import() | selling-laptop-laptop-brand-laptop-brand-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-laptop-laptop-brand-laptop-brand-module")]).then(__webpack_require__.bind(null, /*! ./selling-laptop/laptop-brand/laptop-brand.module */ "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.module.ts")).then(m => m.LaptopBrandPageModule)
    },
    {
        path: 'laptop-brand/detail-unit',
        loadChildren: () => Promise.all(/*! import() | selling-laptop-detail-unit-detail-unit-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-laptop-detail-unit-detail-unit-module")]).then(__webpack_require__.bind(null, /*! ./selling-laptop/detail-unit/detail-unit.module */ "./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.module.ts")).then(m => m.DetailUnitPageModule)
    },
    {
        path: 'ps-brand',
        loadChildren: () => Promise.all(/*! import() | selling-ps-ps-brand-ps-brand-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-ps-ps-brand-ps-brand-module")]).then(__webpack_require__.bind(null, /*! ./selling-ps/ps-brand/ps-brand.module */ "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.module.ts")).then(m => m.PsBrandPageModule)
    },
    {
        path: 'ps-brand/detail-unit-ps',
        loadChildren: () => Promise.all(/*! import() | selling-ps-detail-unit-ps-detail-unit-ps-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-ps-detail-unit-ps-detail-unit-ps-module")]).then(__webpack_require__.bind(null, /*! ./selling-ps/detail-unit-ps/detail-unit-ps.module */ "./src/app/pages/landing/selling-ps/detail-unit-ps/detail-unit-ps.module.ts")).then(m => m.DetailUnitPsPageModule)
    },
    {
        path: 'tv-brand',
        loadChildren: () => Promise.all(/*! import() | selling-tv-tv-brand-tv-brand-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-tv-tv-brand-tv-brand-module")]).then(__webpack_require__.bind(null, /*! ./selling-tv/tv-brand/tv-brand.module */ "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.module.ts")).then(m => m.TvBrandPageModule)
    },
    {
        path: 'tv-brand/detail-tv',
        loadChildren: () => Promise.all(/*! import() | selling-tv-detail-tv-detail-tv-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-tv-detail-tv-detail-tv-module")]).then(__webpack_require__.bind(null, /*! ./selling-tv/detail-tv/detail-tv.module */ "./src/app/pages/landing/selling-tv/detail-tv/detail-tv.module.ts")).then(m => m.DetailTvPageModule)
    },
    {
        path: 'kulkas-brand',
        loadChildren: () => Promise.all(/*! import() | selling-kulkas-kulkas-brand-kulkas-brand-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-kulkas-kulkas-brand-kulkas-brand-module")]).then(__webpack_require__.bind(null, /*! ./selling-kulkas/kulkas-brand/kulkas-brand.module */ "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.module.ts")).then(m => m.KulkasBrandPageModule)
    },
    {
        path: 'kulkas-brand/detail-kulkas',
        loadChildren: () => Promise.all(/*! import() | selling-kulkas-detail-kulkas-detail-kulkas-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-kulkas-detail-kulkas-detail-kulkas-module")]).then(__webpack_require__.bind(null, /*! ./selling-kulkas/detail-kulkas/detail-kulkas.module */ "./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.module.ts")).then(m => m.DetailKulkasPageModule)
    },
    {
        path: 'mesin-cuci-brand',
        loadChildren: () => Promise.all(/*! import() | selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module")]).then(__webpack_require__.bind(null, /*! ./selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module */ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module.ts")).then(m => m.MesinCuciBrandPageModule)
    },
    {
        path: 'mesin-cuci-brand/detail-mesin-cuci',
        loadChildren: () => Promise.all(/*! import() | selling-mesin-cuci-detail-mesin-cuci-detail-mesin-cuci-module */[__webpack_require__.e("common"), __webpack_require__.e("selling-mesin-cuci-detail-mesin-cuci-detail-mesin-cuci-module")]).then(__webpack_require__.bind(null, /*! ./selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.module */ "./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.module.ts")).then(m => m.DetailMesinCuciPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | settings-profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("settings-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./settings/profile/profile.module */ "./src/app/pages/landing/settings/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    },
    {
        path: 'outlet',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-outlet-outlet-module */ "settings-outlet-outlet-module").then(__webpack_require__.bind(null, /*! ./settings/outlet/outlet.module */ "./src/app/pages/landing/settings/outlet/outlet.module.ts")).then(m => m.OutletPageModule)
    },
    {
        path: 'call-us',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-call-us-call-us-module */ "settings-call-us-call-us-module").then(__webpack_require__.bind(null, /*! ./settings/call-us/call-us.module */ "./src/app/pages/landing/settings/call-us/call-us.module.ts")).then(m => m.CallUsPageModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-privacy-policy-privacy-policy-module */ "settings-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null, /*! ./settings/privacy-policy/privacy-policy.module */ "./src/app/pages/landing/settings/privacy-policy/privacy-policy.module.ts")).then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-terms-terms-module */ "settings-terms-terms-module").then(__webpack_require__.bind(null, /*! ./settings/terms/terms.module */ "./src/app/pages/landing/settings/terms/terms.module.ts")).then(m => m.TermsPageModule)
    },
    {
        path: 'history',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-history-history-module */ "settings-history-history-module").then(__webpack_require__.bind(null, /*! ./settings/history/history.module */ "./src/app/pages/landing/settings/history/history.module.ts")).then(m => m.HistoryPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() | notification-notification-module */ "notification-notification-module").then(__webpack_require__.bind(null, /*! ./notification/notification.module */ "./src/app/pages/landing/notification/notification.module.ts")).then(m => m.NotificationPageModule)
    },
];
let LandingRoutingModule = class LandingRoutingModule {
};
LandingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandingRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-routing-module-es2015.js.map