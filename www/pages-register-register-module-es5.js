function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"header\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"background\">\r\n \r\n  <ion-card>\r\n    <ion-card-header>\r\n       <ion-card-title>\r\n         Sign Up\r\n       </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Name\" name=\"name\" type=\"text\" [(ngModel)]=\"credential.name\" pattern=\"^\\w+( +\\w+)*$\"  required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Mobile Phone\" name=\"contact\" type=\"text\" [(ngModel)]=\"credential.contact\" pattern=\"^\\w+( +\\w+)*$\"  required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Email\" name=\"email\" type=\"email\" [(ngModel)]=\"credential.email\" pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\"  required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Password\" name=\"password\" type=\"password\" [(ngModel)]=\"credential.password\" minlength=\"8\"  required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Confirm Password\" name=\"confirm_password\" type=\"password\" [(ngModel)]=\"credential.confirm_password\" minlength=\"8\"  required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input placeholder=\"Address\"  name=\"address\" type=\"text\" [(ngModel)]=\"credential.address\" pattern=\"^\\w+( +\\w+)*$\" required></ion-input>\r\n      </ion-item>\r\n      <input type=\"checkbox\" id=\"option\" style=\"margin-top: 20px;\"/>\r\n      <ion-label for=\"option\"> <span class=\"font-family: Plus Jakarta Sans; pading-left: 5px;\"> Saya setuju dengan Syarat dan Ketentuan</span> </ion-label><br>\r\n      <div class=\"botton-section\">\r\n        <ion-button (click)=\"register()\">Sign Up</ion-button>\r\n      </div>\r\n      <div style=\"margin-top: 20px; text-align: center;\">\r\n        <p style=\"font-family: Plus Jakarta Sans;\">Suda punya akum? <a class=\"forgot\" routerLink=\"/login\">Login</a></p>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/ts-md5/dist/md5.js":
  /*!*****************************************!*\
    !*** ./node_modules/ts-md5/dist/md5.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesTsMd5DistMd5Js(module, exports, __webpack_require__) {
    "use strict";
    /*
    
    TypeScript Md5
    ==============
    
    Based on work by
    * Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
    * André Cruz: https://github.com/satazor/SparkMD5
    * Raymond Hill: https://github.com/gorhill/yamd5.js
    
    Effectively a TypeScrypt re-write of Raymond Hill JS Library
    
    The MIT License (MIT)
    
    Copyright (C) 2014 Raymond Hill
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
    
    
                DO WHAT YOU WANT TO PUBLIC LICENSE
                        Version 2, December 2004
    
     Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>
    
     Everyone is permitted to copy and distribute verbatim or modified
     copies of this license document, and changing it is allowed as long
     as the name is changed.
    
                DO WHAT YOU WANT TO PUBLIC LICENSE
       TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
    
      0. You just DO WHAT YOU WANT TO.
    
    
    */

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    ;

    var Md5 =
    /** @class */
    function () {
      function Md5() {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
      }

      Md5.hashStr = function (str, raw) {
        if (raw === void 0) {
          raw = false;
        }

        return this.onePassHasher.start().appendStr(str).end(raw);
      };

      Md5.hashAsciiStr = function (str, raw) {
        if (raw === void 0) {
          raw = false;
        }

        return this.onePassHasher.start().appendAsciiStr(str).end(raw);
      };

      Md5._hex = function (x) {
        var hc = Md5.hexChars;
        var ho = Md5.hexOut;
        var n;
        var offset;
        var j;
        var i;

        for (i = 0; i < 4; i += 1) {
          offset = i * 8;
          n = x[i];

          for (j = 0; j < 8; j += 2) {
            ho[offset + 1 + j] = hc.charAt(n & 0x0F);
            n >>>= 4;
            ho[offset + 0 + j] = hc.charAt(n & 0x0F);
            n >>>= 4;
          }
        }

        return ho.join('');
      };

      Md5._md5cycle = function (x, k) {
        var a = x[0];
        var b = x[1];
        var c = x[2];
        var d = x[3]; // ff()

        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0; // gg()

        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0; // hh()

        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0; // ii()

        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      };

      Md5.prototype.start = function () {
        this._dataLength = 0;
        this._bufferLength = 0;

        this._state.set(Md5.stateIdentity);

        return this;
      }; // Char to code point to to array conversion:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
      // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown


      Md5.prototype.appendStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var code;
        var i;

        for (i = 0; i < str.length; i += 1) {
          code = str.charCodeAt(i);

          if (code < 128) {
            buf8[bufLen++] = code;
          } else if (code < 0x800) {
            buf8[bufLen++] = (code >>> 6) + 0xC0;
            buf8[bufLen++] = code & 0x3F | 0x80;
          } else if (code < 0xD800 || code > 0xDBFF) {
            buf8[bufLen++] = (code >>> 12) + 0xE0;
            buf8[bufLen++] = code >>> 6 & 0x3F | 0x80;
            buf8[bufLen++] = code & 0x3F | 0x80;
          } else {
            code = (code - 0xD800) * 0x400 + (str.charCodeAt(++i) - 0xDC00) + 0x10000;

            if (code > 0x10FFFF) {
              throw new Error('Unicode standard supports code points up to U+10FFFF');
            }

            buf8[bufLen++] = (code >>> 18) + 0xF0;
            buf8[bufLen++] = code >>> 12 & 0x3F | 0x80;
            buf8[bufLen++] = code >>> 6 & 0x3F | 0x80;
            buf8[bufLen++] = code & 0x3F | 0x80;
          }

          if (bufLen >= 64) {
            this._dataLength += 64;

            Md5._md5cycle(this._state, buf32);

            bufLen -= 64;
            buf32[0] = buf32[16];
          }
        }

        this._bufferLength = bufLen;
        return this;
      };

      Md5.prototype.appendAsciiStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;

        for (;;) {
          i = Math.min(str.length - j, 64 - bufLen);

          while (i--) {
            buf8[bufLen++] = str.charCodeAt(j++);
          }

          if (bufLen < 64) {
            break;
          }

          this._dataLength += 64;

          Md5._md5cycle(this._state, buf32);

          bufLen = 0;
        }

        this._bufferLength = bufLen;
        return this;
      };

      Md5.prototype.appendByteArray = function (input) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;

        for (;;) {
          i = Math.min(input.length - j, 64 - bufLen);

          while (i--) {
            buf8[bufLen++] = input[j++];
          }

          if (bufLen < 64) {
            break;
          }

          this._dataLength += 64;

          Md5._md5cycle(this._state, buf32);

          bufLen = 0;
        }

        this._bufferLength = bufLen;
        return this;
      };

      Md5.prototype.getState = function () {
        var s = this._state;
        return {
          buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
          buflen: this._bufferLength,
          length: this._dataLength,
          state: [s[0], s[1], s[2], s[3]]
        };
      };

      Md5.prototype.setState = function (state) {
        var buf = state.buffer;
        var x = state.state;
        var s = this._state;
        var i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];

        for (i = 0; i < buf.length; i += 1) {
          this._buffer8[i] = buf.charCodeAt(i);
        }
      };

      Md5.prototype.end = function (raw) {
        if (raw === void 0) {
          raw = false;
        }

        var bufLen = this._bufferLength;
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var i = (bufLen >> 2) + 1;
        this._dataLength += bufLen;
        var dataBitsLen = this._dataLength * 8;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);

        if (bufLen > 55) {
          Md5._md5cycle(this._state, buf32);

          buf32.set(Md5.buffer32Identity);
        } // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that


        if (dataBitsLen <= 0xFFFFFFFF) {
          buf32[14] = dataBitsLen;
        } else {
          var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);

          if (matches === null) {
            return;
          }

          var lo = parseInt(matches[2], 16);
          var hi = parseInt(matches[1], 16) || 0;
          buf32[14] = lo;
          buf32[15] = hi;
        }

        Md5._md5cycle(this._state, buf32);

        return raw ? this._state : Md5._hex(this._state);
      }; // Private Static Variables


      Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
      Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      Md5.hexChars = '0123456789abcdef';
      Md5.hexOut = []; // Permanent instance is to use for one-call hashing

      Md5.onePassHasher = new Md5();
      return Md5;
    }();

    exports.Md5 = Md5;

    if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
      throw new Error('Md5 self test failed.');
    } //# sourceMappingURL=md5.js.map

    /***/

  },

  /***/
  "./src/app/pages/register/register-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/register/register-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppPagesRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/pages/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header.header {\n  --ion-background-color: transparent;\n  border: none;\n}\n\nion-content.background ion-card {\n  background: transparent;\n  box-shadow: none;\n}\n\nion-content.background ion-card .zfix {\n  height: 40px;\n}\n\nion-content.background ion-card .botton-section {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content.background ion-card ion-card-title {\n  font-family: Plus Jakarta Sans Extra;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 36px;\n  color: #000000;\n}\n\nion-content.background ion-card .forgot {\n  text-decoration: none;\n  color: #045FC4;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n}\n\nion-content.background ion-card ion-card-subtitle {\n  font-size: 14px;\n  color: #ffffff;\n}\n\nion-content.background ion-card ion-card-content {\n  margin-top: 10px;\n}\n\nion-content.background ion-card ion-card-content ion-item {\n  --ion-item-background:transparent;\n  --border--width:0;\n  --inner-border-width:0;\n  border: solid 1px #EBEBEB;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  margin-top: 10px;\n}\n\nion-content.background ion-card ion-card-content ion-item ion-input {\n  border: 1px;\n  font-size: 14px;\n  font-weight: 300;\n  color: #445F6F;\n}\n\nion-content.background ion-card ion-card-content ion-button {\n  display: flex;\n  flex-direction: row;\n  font-family: Plus Jakarta Sans;\n  width: 210px;\n  height: 38px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: none;\n  --background: #045FC4;\n  --border-radius:20px !important;\n  color: #FFFFFF;\n}\n\nion-content.background .shape {\n  position: relative;\n  bottom: -10%;\n}\n\nion-content.background img {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRElFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdJO0VBQ0UsWUFBQTtBQ0ROOztBRFFJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTk47O0FEU0k7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUE47O0FEVUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1JOOztBRFdJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNUTjs7QURXSTtFQUNFLGdCQUFBO0FDVE47O0FEV007RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNUUjs7QURXUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVFY7O0FEYU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUNkUjs7QURrQkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNoQko7O0FEa0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyLmhlYWRlcntcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgXHJcbiAgaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgLnpmaXh7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgLy8gd2lkdGg6MTAwcHg7XHJcbiAgICAgIC8vIGZpbHRlcjogZHJvcC1zaGFkb3coLTFweCAtMXB4IDNweCByZ2JhKDI1NSwyNTUsMjU1MC41KSApXHJcbiAgICAgIC8vICAgICAgICAgZHJvcC1zaGFkb3coNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjIpKVxyXG4gICAgICAvLyAgICAgICAgO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b24tc2VjdGlvbntcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDsgXHJcbiAgICB9XHJcblxyXG4gICAgLmZvcmdvdHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjojMDQ1RkM0O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmOyBcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuXHJcbiAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWJvcmRlci0td2lkdGg6MDtcclxuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDowO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNFQkVCRUI7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgY29sb3I6ICM0NDVGNkY7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICBmb250LWZhbWlseTogUGx1cyBKYWthcnRhIFNhbnM7XHJcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuXHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzA0NUZDNDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6MjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnNoYXBle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAtMTAlO1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9ICAgXHJcbn0iLCJpb24taGVhZGVyLmhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgLnpmaXgge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIC5ib3R0b24tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucyBFeHRyYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgLmZvcmdvdCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwNDVGQzQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAtLWJvcmRlci0td2lkdGg6MDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6MDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0VCRUJFQjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0NDVGNkY7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtZmFtaWx5OiBQbHVzIEpha2FydGEgU2FucztcbiAgd2lkdGg6IDIxMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogIzA0NUZDNDtcbiAgLS1ib3JkZXItcmFkaXVzOjIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIC5zaGFwZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtMTAlO1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _services_api_authentication_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api/authentication-api.service */
    "./src/app/services/api/authentication-api.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ts-md5/dist/md5 */
    "./node_modules/ts-md5/dist/md5.js");
    /* harmony import */


    var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(authApiService, authService, utilsService, _md5, oneSignal) {
        _classCallCheck(this, RegisterPage);

        this.authApiService = authApiService;
        this.authService = authService;
        this.utilsService = utilsService;
        this._md5 = _md5;
        this.oneSignal = oneSignal;
        this.credential = {};

        function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }

        this.credential.external_user_id = makeid(5); // console.log(this.credential.external_user_id)
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.credential = {};
        }
      }, {
        key: "register",
        value: function register() {
          var _this = this;

          if (this.credential.email == null || this.credential.name == null || this.credential.contact == null || this.credential.address == null || this.credential.password == null || this.credential.confirm_password == null || this.credential.email.replace(/\s/g, "") == "" || this.credential.name.replace(/\s/g, "") == "" || this.credential.contact.replace(/\s/g, "") == "" || this.credential.address.replace(/\s/g, "") == "" || this.credential.password.replace(/\s/g, "") == "" || this.credential.confirm_password.replace(/\s/g, "") == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else {
            this.utilsService.showToast('Tunggu Sebentar.');
            this.authApiService.register(this.credential).subscribe(function (response) {
              var raw = response;

              _this.authService.login(raw.data.access_token);
            }, function (err) {
              var _a;

              var error = {};
              var errors = [];
              error = err.error.message;
              errors = (_a = err.error.messages) === null || _a === void 0 ? void 0 : _a.confirm_password[0];

              if (errors) {
                _this.utilsService.showToast(errors);

                return;
              }

              if (error) {
                _this.utilsService.showToast(error);

                return;
              }
            });
            this.oneSignal.setExternalUserId(this.credential.external_user_id);
          }
        }
      }, {
        key: "hideKeyboard",
        value: function hideKeyboard() {
          this.utilsService.hideKeyboard();
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _services_api_authentication_api_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationApiService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
      }, {
        type: ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__["Md5"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html"))["default"],
      providers: [ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__["Md5"]],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map