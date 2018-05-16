(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n\n<!--The content below is only a placeholder and can be replaced.-->\n<div class='container'>\n<div class='jumbotron'>\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <div>\n    This is my friend JP <img src=\"assets/jp.jpg\" width=\"20%\" />\n  </div>\n  <div>\n    <p>JP wants to send me his phone number, but he doesn't trust social media.</p>\n    <p>Using this app, he can encrypt his phone number using my public key\n    and send it to me over any social media text messenger.</p>\n    <p>The encrypted phone number can only be decrypted using my private key.</p>\n  </div>\n</div>\n\n<app-keys></app-keys>\n\n<div>\n  Decrypt using openssl in terminal\n  <pre>\n  # Save to file\n  cat > encrypted.txt\n  # paste encrypted message\n  # Ctrl+C\n\n  # decode base64\n  base64 -d encrypted.txt > encrypted.bin\n\n  # decrypt using PEM private key\n  openssl rsautl -decrypt -in encrypted.bin -inkey ~/.ssh/id_rsa.pem\n  </pre>\n</div>\n\n<ul>\n  <li>\n    <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/shadiakiki1986/jp-encrypt\">Source code</a>\n  </li>\n</ul>\n\n<p>\n  And for some xkcd comics\n  <br/>\n  <a href=\"https://www.xkcd.com/1269/\" target=\"_blank\">\n    <img src=\"https://imgs.xkcd.com/comics/privacy_opinions.png\" width=\"25%\" />\n  </a>\n</p>\n\n</div> <!-- container -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jp-encrypt';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _keys_keys_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keys/keys.component */ "./src/app/keys/keys.component.ts");
/* harmony import */ var _key_detail_key_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./key-detail/key-detail.component */ "./src/app/key-detail/key-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _keys_keys_component__WEBPACK_IMPORTED_MODULE_4__["KeysComponent"],
                _key_detail_key_detail_component__WEBPACK_IMPORTED_MODULE_5__["KeyDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forge.service.ts":
/*!**********************************!*\
  !*** ./src/app/forge.service.ts ***!
  \**********************************/
/*! exports provided: ForgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgeService", function() { return ForgeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgeService = /** @class */ (function () {
    function ForgeService() {
    }
    ForgeService.prototype.encrypt = function (pem, message) {
        // https://github.com/digitalbazaar/forge#rsa
        if (!message)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("");
        try {
            var publicKey = node_forge__WEBPACK_IMPORTED_MODULE_1__["pki"].publicKeyFromPem(pem);
            var encrypted = publicKey.encrypt(message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(node_forge__WEBPACK_IMPORTED_MODULE_1__["util"].encode64(encrypted));
        }
        catch (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(e.message);
        }
    };
    ForgeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ForgeService);
    return ForgeService;
}());



/***/ }),

/***/ "./src/app/key-detail/key-detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/key-detail/key-detail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/key-detail/key-detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/key-detail/key-detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"key\">\n  <button (click)=\"launchEdit = ! launchEdit\">\n    Details\n  </button>\n  <div *ngIf=\"launchEdit\">\n    <div>\n      <label>Name:\n        <input [(ngModel)]=\"key.name\" placeholder=\"name\" size=100>\n      </label>\n    </div>\n    <div>\n      <label>Public key (in PEM format <a href=\"https://superuser.com/a/576558/642842\">ref</a>):\n        <textarea [(ngModel)]=\"key.public_key\" placeholder=\"public_key\" cols=\"100\" rows=\"20\">\n        </textarea>\n      </label>\n    </div>\n  </div>\n\n  <div class='row'>\n    <div class='col-6'>\n      <h3>Enter message to encrypt</h3>\n      <textarea [(ngModel)]=\"message\" placeholder=\"message\" rows=\"20\" (ngModelChange)=\"onEncrypt()\" class=\"form-control\">\n      </textarea>\n    </div>\n    <div class='col-6'>\n      <h3>Encrypted:</h3>\n      <div style=\"word-break:break-all;\">{{encrypted}}</div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/key-detail/key-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/key-detail/key-detail.component.ts ***!
  \****************************************************/
/*! exports provided: KeyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyDetailComponent", function() { return KeyDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../key */ "./src/app/key.ts");
/* harmony import */ var _forge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forge.service */ "./src/app/forge.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeyDetailComponent = /** @class */ (function () {
    function KeyDetailComponent(forgeService) {
        this.forgeService = forgeService;
        this.launchEdit = false;
    }
    KeyDetailComponent.prototype.ngOnInit = function () {
    };
    KeyDetailComponent.prototype.onEncrypt = function () {
        var _this = this;
        return this.forgeService.encrypt(this.key.public_key, this.message)
            .subscribe(function (encrypted) { return _this.encrypted = encrypted; });
        ;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _key__WEBPACK_IMPORTED_MODULE_1__["Key"])
    ], KeyDetailComponent.prototype, "key", void 0);
    KeyDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-key-detail',
            template: __webpack_require__(/*! ./key-detail.component.html */ "./src/app/key-detail/key-detail.component.html"),
            styles: [__webpack_require__(/*! ./key-detail.component.css */ "./src/app/key-detail/key-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_forge_service__WEBPACK_IMPORTED_MODULE_2__["ForgeService"]])
    ], KeyDetailComponent);
    return KeyDetailComponent;
}());



/***/ }),

/***/ "./src/app/key.service.ts":
/*!********************************!*\
  !*** ./src/app/key.service.ts ***!
  \********************************/
/*! exports provided: KeyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyService", function() { return KeyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-keys */ "./src/app/mock-keys.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyService = /** @class */ (function () {
    function KeyService() {
    }
    KeyService.prototype.getKeys = function () {
        return _mock_keys__WEBPACK_IMPORTED_MODULE_1__["KEYS"];
    };
    KeyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], KeyService);
    return KeyService;
}());



/***/ }),

/***/ "./src/app/key.ts":
/*!************************!*\
  !*** ./src/app/key.ts ***!
  \************************/
/*! exports provided: Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
var Key = /** @class */ (function () {
    function Key() {
    }
    return Key;
}());



/***/ }),

/***/ "./src/app/keys/keys.component.css":
/*!*****************************************!*\
  !*** ./src/app/keys/keys.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* KeysComponent's private CSS styles */\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.keys {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.keys li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.keys li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.keys li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.keys .text {\n  position: relative;\n  top: -3px;\n}\n.keys .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n"

/***/ }),

/***/ "./src/app/keys/keys.component.html":
/*!******************************************!*\
  !*** ./src/app/keys/keys.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Click a key</h2>\n<ul>\n\t<li *ngFor=\"let key of keys\" (click)=\"onSelect(key)\" [class.selected]=\"key === selectedKey\">\n\t\t<h2>{{ key.name }}</h2>\n\t</li>\n</ul>\n\n\n<app-key-detail [key]=\"selectedKey\"></app-key-detail>\n"

/***/ }),

/***/ "./src/app/keys/keys.component.ts":
/*!****************************************!*\
  !*** ./src/app/keys/keys.component.ts ***!
  \****************************************/
/*! exports provided: KeysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysComponent", function() { return KeysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _key_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../key.service */ "./src/app/key.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeysComponent = /** @class */ (function () {
    function KeysComponent(keyService) {
        this.keyService = keyService;
    }
    KeysComponent.prototype.getKeys = function () {
        this.keys = this.keyService.getKeys();
    };
    KeysComponent.prototype.ngOnInit = function () {
        this.getKeys();
    };
    KeysComponent.prototype.onSelect = function (key) {
        this.selectedKey = key;
    };
    KeysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keys',
            template: __webpack_require__(/*! ./keys.component.html */ "./src/app/keys/keys.component.html"),
            styles: [__webpack_require__(/*! ./keys.component.css */ "./src/app/keys/keys.component.css")]
        }),
        __metadata("design:paramtypes", [_key_service__WEBPACK_IMPORTED_MODULE_1__["KeyService"]])
    ], KeysComponent);
    return KeysComponent;
}());



/***/ }),

/***/ "./src/app/mock-keys.ts":
/*!******************************!*\
  !*** ./src/app/mock-keys.ts ***!
  \******************************/
/*! exports provided: KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
var KEYS = [
    {
        id: 1,
        name: 'shadiakiki1986@gmail.com toshiba laptop',
        public_key: "-----BEGIN PUBLIC KEY-----\n    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuyPap8XronS4k48OC92i\n    GuLk8vr3vJy9iOyTVqsAmrV+7QLIY099kDo5ZzyB8OezmUAl3EzkSmh8QzM0DwIF\n    0NeW77H7xY33JS5bDHfnd2myAn+CGI+feEWUUUiygwDC47+CPqIlL1jOVFucIFhv\n    K8fN8QexH/wW8DE1P50GL8BBxqVo/qbNflGzlA58i0dL3VvnALQHDjzKCHc5jIa4\n    UoYIJtmtAQTJ7tW39jqbnZum+edjC2VBt4tQhFncNy/U0o6XT/IhwIdS6+2VoTnz\n    Oh+lKwLZnTnRWgIOLciiN4K9KhZoqFxj4Mjodl7Tc/6JjQpFtQMPRLqpGjX16j1a\n    fQIDAQAB\n    -----END PUBLIC KEY-----",
    },
    {
        id: 2,
        name: 'JP',
        public_key: ""
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/easy-encrypt/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map