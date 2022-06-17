function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-hp-camera-camera-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/camera/camera.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/camera/camera.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingHpCameraCameraPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content  style=\"--background: #ccc url('../../../../assets/images/phone/camera/BG.png') no-repeat center center / cover;\">\r\n  <div class=\"center\">\r\n    <img src=\"../../../../assets/images/phone/camera/logo.png\" alt=\"\" style=\"margin-top: 23%;\">\r\n    <div class=\"middle\">\r\n      <img src=\"../../../../assets/images/phone/camera/camera.png\" alt=\"\">\r\n        <div class=\"title\">Silahkah Tes Camera Anda</div>\r\n        <p class=\"f-5\">Dengan cara menekan tombol di bawah ini</p>\r\n        <p class=\"f-5\">Lalu Tunggu selama 5 detik untuk mengambil gambar.</p>\r\n        <!-- <button class=\"button round\" icon-only (click)=\"takePicture()\" style=\"margin-top: 10%;\">\r\n          Tap untuk Memulai\r\n        </button> -->\r\n        <button class=\"button round\" icon-only (click)=\"cameras()\" style=\"margin-top: 10%;\">\r\n          Tap untuk Memulai\r\n        </button>\r\n        <div (click)=\"skip()\" style=\"margin-right: 30%; margin-left: 30%; margin-top: 25%;\">\r\n           <p class=\"skip\">Lewati <a style=\"margin-left: 10px;\">>></a></p> \r\n           <hr>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/camera/camera-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/camera/camera-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: CameraPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingHpCameraCameraRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPageRoutingModule", function () {
      return CameraPageRoutingModule;
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


    var _camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./camera.page */
    "./src/app/pages/landing/selling-hp/camera/camera.page.ts");

    var routes = [{
      path: '',
      component: _camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"]
    }];

    var CameraPageRoutingModule = function CameraPageRoutingModule() {
      _classCallCheck(this, CameraPageRoutingModule);
    };

    CameraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CameraPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/camera/camera.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/camera/camera.module.ts ***!
    \******************************************************************/

  /*! exports provided: CameraPageModule */

  /***/
  function srcAppPagesLandingSellingHpCameraCameraModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPageModule", function () {
      return CameraPageModule;
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


    var _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./camera-routing.module */
    "./src/app/pages/landing/selling-hp/camera/camera-routing.module.ts");
    /* harmony import */


    var _camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./camera.page */
    "./src/app/pages/landing/selling-hp/camera/camera.page.ts");

    var CameraPageModule = function CameraPageModule() {
      _classCallCheck(this, CameraPageModule);
    };

    CameraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__["CameraPageRoutingModule"]],
      declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]]
    })], CameraPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/camera/camera.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/camera/camera.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingHpCameraCameraPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 12px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: white;\n  margin-top: 15%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  color: #3053A4;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL2NhbWVyYS9EOlxcemZpeC10cmFkZS1pbi0yMDIyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2VsbGluZy1ocFxcY2FtZXJhXFxjYW1lcmEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUNDcEI7O0FERUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7QUNDZDs7QURFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FDQ2Q7O0FERUE7RUFDRSxlQUFlO0VBQ2YsNERBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQ0NwQjs7QURFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FDQ25COztBREVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUNDWDs7QURFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsNERBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7QUNDakI7O0FERUE7RUFBUSxtQkFBbUI7QUNFM0I7O0FEQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUNHYjs7QURERTtFQUNBLFlBQVk7RUFDWixjQUFjO0FDSWhCOztBREZFO0VBQ0EsV0FBVztBQ0tiOztBREZFO0VBQ0Esa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FDS3JCOztBREZFO0VBQ0EsV0FBVztBQ0tiOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFdBQVc7QUNLYjs7QURGRTtFQUNBLFdBQVc7QUNLYjs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxXQUFXO0FDS2I7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxjQUFjO0FDS2hCOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLFNBQVM7QUNLWDs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsU0FBUztBQ0tYOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxTQUFTO0FDS1g7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxxQkFBcUI7QUNLdkI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxpQkFBaUI7QUNLbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mLTUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2tpcCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUgeyBcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxufVxyXG5cclxuaHJ7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzMwNTNBNDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJvdW5kIHtib3JkZXItcmFkaXVzOiAxMnB4O31cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgLnJvdzphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEge1xyXG4gIHdpZHRoOiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMiB7XHJcbiAgd2lkdGg6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMyB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNCB7XHJcbiAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNSB7XHJcbiAgd2lkdGg6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNyB7XHJcbiAgd2lkdGg6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtOCB7XHJcbiAgd2lkdGg6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtOSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMTAge1xyXG4gIHdpZHRoOiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTExIHtcclxuICB3aWR0aDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMCB7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMSB7XHJcbiAgcmlnaHQ6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTIge1xyXG4gIHJpZ2h0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMyB7XHJcbiAgcmlnaHQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC00IHtcclxuICByaWdodDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTUge1xyXG4gIHJpZ2h0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNiB7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC03IHtcclxuICByaWdodDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTgge1xyXG4gIHJpZ2h0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtOSB7XHJcbiAgcmlnaHQ6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMCB7XHJcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMSB7XHJcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMiB7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMCB7XHJcbiAgbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xIHtcclxuICBsZWZ0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0yIHtcclxuICBsZWZ0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMyB7XHJcbiAgbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTQge1xyXG4gIGxlZnQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC01IHtcclxuICBsZWZ0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNiB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTcge1xyXG4gIGxlZnQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC04IHtcclxuICBsZWZ0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtOSB7XHJcbiAgbGVmdDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTEwIHtcclxuICBsZWZ0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMTEge1xyXG4gIGxlZnQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xMiB7XHJcbiAgbGVmdDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEge1xyXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0zIHtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTUge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC02IHtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC05IHtcclxuICBtYXJnaW4tbGVmdDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEyIHtcclxuICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICB9XHJcblxyXG4vLyBpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4vLyAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6bGluZWFyLWdyYWRpZW50KCMwZjRlZDgsIzAwOTlmZixyZ2IoMTg0LCAyMDIsIDI1MCkpO1xyXG4vLyAgICAgICAgICAgICAgIGlvbi1jYXJke1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLmNhbWVyYXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NjAlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtMXB4IC0xcHggMnB4IHJnYmEoMjU1LDI1NSwyNTUwLjUpIClcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCByZ2JhKDAsMCwwLDAuMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGgxe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuMzUyKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgcHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czoyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojQjZCNkI2O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJvdHRvbi1zZWN0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbi5idG5fc2lnbnVwe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24tc2lndXB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxOXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLmJnLWltYWdlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTEwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC5iZy1pbWFnZSBpbWd7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbi8vICAgfVxyXG4gIFxyXG4gIFxyXG5cclxuICAvLyBpb24tdG9vbGJhci5iYWNrZ3JvdW5kIHtcclxuICAvLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICAgcmdiKDUzLDEyMywyMDMpO1xyXG4gICAgXHJcbiAgLy8gICAuY29uZGl0aW9ue1xyXG4gIC8vICAgICBjb2xvcjogI2ZmZjtcclxuICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gICIsIi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mLTUge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2tpcCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5taWRkbGUge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2wteHMtMSB7XG4gIHdpZHRoOiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy0yIHtcbiAgd2lkdGg6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvbC14cy00IHtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy01IHtcbiAgd2lkdGg6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy02IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbC14cy03IHtcbiAgd2lkdGg6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy04IHtcbiAgd2lkdGg6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy05IHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmNvbC14cy0xMCB7XG4gIHdpZHRoOiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtMTEge1xuICB3aWR0aDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVsbC0wIHtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVsbC0xIHtcbiAgcmlnaHQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMiB7XG4gIHJpZ2h0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0zIHtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdWxsLTQge1xuICByaWdodDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtNSB7XG4gIHJpZ2h0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC02IHtcbiAgcmlnaHQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdWxsLTcge1xuICByaWdodDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtOCB7XG4gIHJpZ2h0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC05IHtcbiAgcmlnaHQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdWxsLTEwIHtcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTExIHtcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTEyIHtcbiAgcmlnaHQ6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVzaC0wIHtcbiAgbGVmdDogYXV0bztcbn1cblxuLmNvbC14cy1wdXNoLTEge1xuICBsZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTIge1xuICBsZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0zIHtcbiAgbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLXB1c2gtNCB7XG4gIGxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTUge1xuICBsZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC02IHtcbiAgbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLXB1c2gtNyB7XG4gIGxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTgge1xuICBsZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC05IHtcbiAgbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLXB1c2gtMTAge1xuICBsZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMSB7XG4gIGxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTEyIHtcbiAgbGVmdDogMTAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLW9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLW9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTkge1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTIge1xuICBtYXJnaW4tbGVmdDogMTAwJTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/camera/camera.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/camera/camera.page.ts ***!
    \****************************************************************/

  /*! exports provided: CameraPage */

  /***/
  function srcAppPagesLandingSellingHpCameraCameraPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPage", function () {
      return CameraPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera-preview/ngx */
    "./node_modules/@ionic-native/camera-preview/__ivy_ngcc__/ngx/index.js");

    var CameraPage = /*#__PURE__*/function () {
      function CameraPage(camera, toastCtrl, utility, alertController, navCtrl, utilsService, storage, selling, router, activatedRoute, cameraPreview) {
        _classCallCheck(this, CameraPage);

        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.utility = utility;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.utilsService = utilsService;
        this.storage = storage;
        this.selling = selling;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cameraPreview = cameraPreview;
        this.images = [];
      }

      _createClass(CameraPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            _this.brand = params["brand"];
            _this.ram = params["ram"];
            _this.storages = params["storages"];
            _this.lokasi_trade = params["lokasi_trade"];
            _this.screenHasProblem = params["screenHasProblem"];
            console.log(_this.storages);
            console.log(_this.ram);
            console.log(_this.brand);
            console.log("lokasi trade" + _this.lokasi_trade);
            console.log(_this.screenHasProblem);
          });
        }
      }, {
        key: "cameras",
        value: function cameras() {
          var _this2 = this;

          this.cameraPreview.startCamera({
            x: 80,
            y: 150,
            width: 250,
            height: 300,
            toBack: false
          }).then(function () {
            // alert(val);
            setInterval(function () {
              _this2.cameraPreview.takePicture().then(function () {
                _this2.cameraPreview.stopCamera();

                _this2.cameras2();
              });
            }, 7000);
          }, function (err) {
            alert("Camera Tidak Aktif");
          });
        }
      }, {
        key: "cameras2",
        value: function cameras2() {
          var _this3 = this;

          this.cameraPreview.startCamera({
            x: 80,
            y: 150,
            width: 250,
            height: 300
          }).then(function () {
            _this3.cameraPreview.switchCamera();

            setInterval(function () {
              _this3.cameraPreview.takePicture().then(function () {
                _this3.cameraPreview.stopCamera();

                _this3.utility.showToast("Test camera telah bershasil!.");

                var navigationExtras = {
                  queryParams: {
                    brand: _this3.brand,
                    ram: _this3.ram,
                    storages: _this3.storages,
                    lokasi_trade: _this3.lokasi_trade,
                    screenHasProblem: _this3.screenHasProblem,
                    cameraHasProblem: 0
                  }
                };

                _this3.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect"], navigationExtras);
              });
            }, 7000);
          }, function (err) {
            alert("Camera Tidak Aktif");
          });
        }
      }, {
        key: "takePicture",
        value: function takePicture() {
          var _this4 = this;

          try {
            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this4.utility.showToast("Test camera telah bershasil!.");

              var navigationExtras = {
                queryParams: {
                  brand: _this4.brand,
                  ram: _this4.ram,
                  storages: _this4.storages,
                  lokasi_trade: _this4.lokasi_trade,
                  screenHasProblem: _this4.screenHasProblem,
                  cameraHasProblem: 0
                }
              };

              _this4.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect"], navigationExtras);
            });
          } catch (err) {
            this.presentAlertConfirm();
          }
        }
      }, {
        key: "skip",
        value: function skip() {
          this.presentAlertConfirm();
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Camera anda memiliki masalah!.',
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
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var _this6 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return this.alertController.create({
                                      header: 'ZFix',
                                      message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa camera anda memiliki masalah.',
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
                                              brand: _this6.brand,
                                              ram: _this6.ram,
                                              storages: _this6.storages,
                                              lokasi_trade: _this6.lokasi_trade,
                                              screenHasProblem: _this6.screenHasProblem,
                                              cameraHasProblem: 1
                                            }
                                          };

                                          _this6.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera"], navigationExtras);
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

      return CameraPage;
    }();

    CameraPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_6__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__["CameraPreview"]
      }];
    };

    CameraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-camera',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./camera.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/camera/camera.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./camera.page.scss */
      "./src/app/pages/landing/selling-hp/camera/camera.page.scss"))["default"]]
    })], CameraPage);
    /***/
  },

  /***/
  "./src/app/services/membership.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/membership.service.ts ***!
    \************************************************/

  /*! exports provided: MembershipService */

  /***/
  function srcAppServicesMembershipServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipService", function () {
      return MembershipService;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MembershipService = /*#__PURE__*/function () {
      function MembershipService(storage, http) {
        _classCallCheck(this, MembershipService);

        this.storage = storage;
        this.http = http;
      }

      _createClass(MembershipService, [{
        key: "SetSelling",
        value: function SetSelling(data) {
          this.storage.set(_config_api__WEBPACK_IMPORTED_MODULE_3__["ActivationKey"], data);
        }
      }, {
        key: "removeSelling",
        value: function removeSelling() {
          this.storage.remove(_config_api__WEBPACK_IMPORTED_MODULE_3__["ActivationKey"]);
        }
      }]);

      return MembershipService;
    }();

    MembershipService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    MembershipService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MembershipService);
    /***/
  }
}]);
//# sourceMappingURL=selling-hp-camera-camera-module-es5.js.map