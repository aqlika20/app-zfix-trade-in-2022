function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-hp-vibration-vibration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/vibration/vibration.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/vibration/vibration.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingHpVibrationVibrationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content  style=\"--background: #ccc url('../../../../assets/images/phone/camera/BG.png') no-repeat center center / cover;\">\r\n  <div class=\"center\">\r\n    <img src=\"../../../../assets/images/phone/camera/logo.png\" alt=\"\" style=\"margin-top: 23%;\">\r\n    <div class=\"middle\">\r\n      <img src=\"../../../../assets/images/phone/vibrate/vibrate.png\" alt=\"\">\r\n        <div class=\"title\">Silahkah Tes Getar Anda</div>\r\n        <div class=\"instruksi\">Instruksi</div>\r\n        <div style=\"text-align: left;\">\r\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen; margin-top: 20px;\"></ion-icon> Silahkan Tekan Tombol Vibrate</p>\r\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen;\"></ion-icon> Silahkan Tekan Tombol Stop Untuk Berhenti</p>\r\n        </div>\r\n        <button class=\"button round\" icon-only (click)=\"vibrate()\" style=\"margin-top: 10%;\">\r\n          Vibrate\r\n        </button>\r\n        <div (click)=\"skip()\" style=\"margin-right: 30%; margin-left: 30%; margin-top: 25%;\">\r\n           <p class=\"skip\">Lewati <a style=\"margin-left: 10px;\">>></a></p> \r\n           <hr>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/vibration/vibration-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/vibration/vibration-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: VibrationPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingHpVibrationVibrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VibrationPageRoutingModule", function () {
      return VibrationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _vibration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vibration.page */
    "./src/app/pages/landing/selling-hp/vibration/vibration.page.ts");

    var routes = [{
      path: '',
      component: _vibration_page__WEBPACK_IMPORTED_MODULE_3__["VibrationPage"]
    }];

    var VibrationPageRoutingModule = function VibrationPageRoutingModule() {
      _classCallCheck(this, VibrationPageRoutingModule);
    };

    VibrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VibrationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/vibration/vibration.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/vibration/vibration.module.ts ***!
    \************************************************************************/

  /*! exports provided: VibrationPageModule */

  /***/
  function srcAppPagesLandingSellingHpVibrationVibrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VibrationPageModule", function () {
      return VibrationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _vibration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vibration-routing.module */
    "./src/app/pages/landing/selling-hp/vibration/vibration-routing.module.ts");
    /* harmony import */


    var _vibration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vibration.page */
    "./src/app/pages/landing/selling-hp/vibration/vibration.page.ts");

    var VibrationPageModule = function VibrationPageModule() {
      _classCallCheck(this, VibrationPageModule);
    };

    VibrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vibration_routing_module__WEBPACK_IMPORTED_MODULE_5__["VibrationPageRoutingModule"]],
      declarations: [_vibration_page__WEBPACK_IMPORTED_MODULE_6__["VibrationPage"]]
    })], VibrationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/vibration/vibration.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/vibration/vibration.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingHpVibrationVibrationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: white;\n  margin-top: 15%;\n  margin-bottom: 0px;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  color: #3053A4;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL3ZpYnJhdGlvbi9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2VsbGluZy1ocFxcdmlicmF0aW9uXFx2aWJyYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvdmlicmF0aW9uL3ZpYnJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUNDcEI7O0FERUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7QUNDZDs7QURFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FDQ2Q7O0FERUE7RUFDRSxlQUFlO0VBQ2YsNERBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQ0NwQjs7QURFQTtFQUNFLGVBQWU7RUFDZiw0REFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FDQ3BCOztBREVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUNDbkI7O0FERUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQ0NYOztBREVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiw0REFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtBQ0NqQjs7QURFQTtFQUFRLG1CQUFtQjtBQ0UzQjs7QURBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQ0diOztBRERFO0VBQ0EsWUFBWTtFQUNaLGNBQWM7QUNJaEI7O0FERkU7RUFDQSxXQUFXO0FDS2I7O0FERkU7RUFDQSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUNLckI7O0FERkU7RUFDQSxXQUFXO0FDS2I7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsVUFBVTtBQ0taOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsVUFBVTtBQ0taOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsVUFBVTtBQ0taOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsZ0JBQWdCO0FDS2xCOztBREZFO0VBQ0EsV0FBVztBQ0tiOztBREZFO0VBQ0EsV0FBVztBQ0tiOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFdBQVc7QUNLYjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGNBQWM7QUNLaEI7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsU0FBUztBQ0tYOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxTQUFTO0FDS1g7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLFNBQVM7QUNLWDs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsVUFBVTtBQ0taOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLHFCQUFxQjtBQ0t2Qjs7QURGRTtFQUNBLHNCQUFzQjtBQ0t4Qjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLHNCQUFzQjtBQ0t4Qjs7QURGRTtFQUNBLHNCQUFzQjtBQ0t4Qjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLHNCQUFzQjtBQ0t4Qjs7QURGRTtFQUNBLHNCQUFzQjtBQ0t4Qjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLHNCQUFzQjtBQ0t4Qjs7QURGRTtFQUNBLHNCQUFzQjtBQ0t4Qjs7QURGRTtFQUNBLGlCQUFpQjtBQ0tuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1ocC92aWJyYXRpb24vdmlicmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmYtNSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5za2lwIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmluc3RydWtzaSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBsaWdodGdyZWVuO1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm1pZGRsZSB7IFxyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcblxyXG5ocntcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMzA1M0E0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucm91bmQge2JvcmRlci1yYWRpdXM6IDEycHg7fVxyXG5cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICAucm93OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMSB7XHJcbiAgd2lkdGg6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0yIHtcclxuICB3aWR0aDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0zIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy00IHtcclxuICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy01IHtcclxuICB3aWR0aDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy02IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy03IHtcclxuICB3aWR0aDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy04IHtcclxuICB3aWR0aDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy05IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xMCB7XHJcbiAgd2lkdGg6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMTEge1xyXG4gIHdpZHRoOiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0wIHtcclxuICByaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xIHtcclxuICByaWdodDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMiB7XHJcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0zIHtcclxuICByaWdodDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTQge1xyXG4gIHJpZ2h0OiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNSB7XHJcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC02IHtcclxuICByaWdodDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTcge1xyXG4gIHJpZ2h0OiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtOCB7XHJcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC05IHtcclxuICByaWdodDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTEwIHtcclxuICByaWdodDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTExIHtcclxuICByaWdodDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTEyIHtcclxuICByaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0wIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTEge1xyXG4gIGxlZnQ6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTIge1xyXG4gIGxlZnQ6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0zIHtcclxuICBsZWZ0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNCB7XHJcbiAgbGVmdDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTUge1xyXG4gIGxlZnQ6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC02IHtcclxuICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNyB7XHJcbiAgbGVmdDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTgge1xyXG4gIGxlZnQ6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC05IHtcclxuICBsZWZ0OiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMTAge1xyXG4gIGxlZnQ6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xMSB7XHJcbiAgbGVmdDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTEyIHtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTMge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC00IHtcclxuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTYge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC03IHtcclxuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTkge1xyXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTExIHtcclxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gIH0iLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZi01IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNraXAge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaW5zdHJ1a3NpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogbGlnaHRncmVlbjtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1pZGRsZSB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzMwNTNBNDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLTIge1xuICB3aWR0aDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTUge1xuICB3aWR0aDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLTgge1xuICB3aWR0aDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy0xMSB7XG4gIHdpZHRoOiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbn1cblxuLmNvbC14cy1wdWxsLTEge1xuICByaWdodDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xufVxuXG4uY29sLXhzLXB1bGwtNCB7XG4gIHJpZ2h0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xufVxuXG4uY29sLXhzLXB1bGwtNyB7XG4gIHJpZ2h0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xufVxuXG4uY29sLXhzLXB1bGwtMTAge1xuICByaWdodDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbn1cblxuLmNvbC14cy1wdXNoLTAge1xuICBsZWZ0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTMge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTYge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTkge1xuICBsZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMTIge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/vibration/vibration.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/vibration/vibration.page.ts ***!
    \**********************************************************************/

  /*! exports provided: VibrationPage */

  /***/
  function srcAppPagesLandingSellingHpVibrationVibrationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VibrationPage", function () {
      return VibrationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/vibration/ngx */
    "./node_modules/@ionic-native/vibration/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var VibrationPage = /*#__PURE__*/function () {
      function VibrationPage(v, navCtrl, change, activatedRoute, alertController) {
        _classCallCheck(this, VibrationPage);

        this.v = v;
        this.navCtrl = navCtrl;
        this.change = change;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
      }

      _createClass(VibrationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            _this.brand = params["brand"];
            _this.ram = params["ram"];
            _this.storages = params["storages"];
            _this.lokasi_trade = params["lokasi_trade"];
            _this.screenHasProblem = params["screenHasProblem"];
            _this.cameraHasProblem = params["cameraHasProblem"];
            _this.wifiHasProblem = params["wifiHasProblem"];
            console.log(_this.storages);
            console.log(_this.ram);
            console.log(_this.brand);
            console.log("Lokasi Trade" + _this.lokasi_trade);
            console.log(_this.screenHasProblem);
            console.log(_this.cameraHasProblem);
            console.log(_this.wifiHasProblem);
          });
        }
      }, {
        key: "vibrate",
        value: function vibrate() {
          try {
            this.v.vibrate([2000, 1000, 2000]);
            var navigationExtras = {
              queryParams: {
                brand: this.brand,
                ram: this.ram,
                storages: this.storages,
                lokasi_trade: this.lokasi_trade,
                screenHasProblem: this.screenHasProblem,
                cameraHasProblem: this.cameraHasProblem,
                wifiHasProblem: this.wifiHasProblem,
                vibrateHasProblem: 0
              }
            };
            this.navCtrl.navigateForward(["landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint"], navigationExtras);
          } catch (err) {
            alert("error");
          }
        } // stop(){
        //   this.v.vibrate(0);
        // }

      }, {
        key: "skip",
        value: function skip() {
          this.presentSkip();
        }
      }, {
        key: "presentSkip",
        value: function presentSkip() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Vibration anda memiliki masalah!.',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Coba Lagi',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Continue');
                        }
                      }, {
                        text: 'Lewati',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var _this3 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return this.alertController.create({
                                      header: 'ZFix',
                                      message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa vibration anda memiliki masalah.',
                                      backdropDismiss: false,
                                      buttons: [{
                                        text: 'Lanjut',
                                        role: 'cancel',
                                        handler: function handler() {// console.log('Continue');
                                        }
                                      }, {
                                        text: 'Tetap lewati',
                                        handler: function handler() {
                                          var navigationExtras = {
                                            queryParams: {
                                              brand: _this3.brand,
                                              ram: _this3.ram,
                                              storages: _this3.storages,
                                              lokasi_trade: _this3.lokasi_trade,
                                              screenHasProblem: _this3.screenHasProblem,
                                              cameraHasProblem: _this3.cameraHasProblem,
                                              wifiHasProblem: _this3.wifiHasProblem,
                                              vibrateHasProblem: 1
                                            }
                                          };

                                          _this3.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint"], navigationExtras);
                                        }
                                      }]
                                    });

                                  case 2:
                                    alert = _context.sent;
                                    _context.next = 5;
                                    return alert.present();

                                  case 5:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return VibrationPage;
    }();

    VibrationPage.ctorParameters = function () {
      return [{
        type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_1__["Vibration"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    VibrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-vibration',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./vibration.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/vibration/vibration.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./vibration.page.scss */
      "./src/app/pages/landing/selling-hp/vibration/vibration.page.scss"))["default"]]
    })], VibrationPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-hp-vibration-vibration-module-es5.js.map