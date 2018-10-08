(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demo/demo.module": [
		"./src/app/demo/demo.module.ts",
		"demo-demo-module~styleguide-styleguide-module",
		"demo-demo-module"
	],
	"./styleguide/styleguide.module": [
		"./src/app/styleguide/styleguide.module.ts",
		"demo-demo-module~styleguide-styleguide-module",
		"styleguide-styleguide-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var routes = [
    { path: 'styleguide', loadChildren: './styleguide/styleguide.module#StyleguideModule' },
    { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
    { path: '', pathMatch: 'full', redirectTo: 'styleguide' },
    { path: '**', redirectTo: 'styleguide' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(router) {
        var _this = this;
        this.bodyNoAnimClass = 'u-no-animations';
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                document.body.classList.add(_this.bodyNoAnimClass);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scroll(0, 0);
                setTimeout(function () {
                    document.body.classList.remove(_this.bodyNoAnimClass);
                });
            }
        });
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pure_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pure-elements */ "./src/app/pure-elements/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _pure_elements__WEBPACK_IMPORTED_MODULE_3__["PureElements"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/asterisk/asterisk-config-token.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pure-elements/asterisk/asterisk-config-token.ts ***!
  \*****************************************************************/
/*! exports provided: PureAsteriskConfigToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskConfigToken", function() { return PureAsteriskConfigToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var PureAsteriskConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PureAsteriskConfig');


/***/ }),

/***/ "./src/app/pure-elements/asterisk/asterisk-config.ts":
/*!***********************************************************!*\
  !*** ./src/app/pure-elements/asterisk/asterisk-config.ts ***!
  \***********************************************************/
/*! exports provided: PureAsteriskDefaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskDefaultConfig", function() { return PureAsteriskDefaultConfig; });
;
var PureAsteriskDefaultConfig = {
    content: '*'
};


/***/ }),

/***/ "./src/app/pure-elements/asterisk/asterisk-content.ts":
/*!************************************************************!*\
  !*** ./src/app/pure-elements/asterisk/asterisk-content.ts ***!
  \************************************************************/
/*! exports provided: PureAsteriskContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskContent", function() { return PureAsteriskContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Custom content to substitute the default one. */
var PureAsteriskContent = /** @class */ (function () {
    function PureAsteriskContent() {
    }
    PureAsteriskContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pureAsteriskContent]',
        })
    ], PureAsteriskContent);
    return PureAsteriskContent;
}());



/***/ }),

/***/ "./src/app/pure-elements/asterisk/asterisk.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pure-elements/asterisk/asterisk.module.ts ***!
  \***********************************************************/
/*! exports provided: PureAsteriskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskModule", function() { return PureAsteriskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _asterisk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asterisk */ "./src/app/pure-elements/asterisk/asterisk.ts");
/* harmony import */ var _asterisk_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asterisk-content */ "./src/app/pure-elements/asterisk/asterisk-content.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PureAsteriskModule = /** @class */ (function () {
    function PureAsteriskModule() {
    }
    PureAsteriskModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"].forRoot()],
            declarations: [_asterisk__WEBPACK_IMPORTED_MODULE_3__["PureAsterisk"], _asterisk_content__WEBPACK_IMPORTED_MODULE_4__["PureAsteriskContent"]],
            exports: [_asterisk__WEBPACK_IMPORTED_MODULE_3__["PureAsterisk"], _asterisk_content__WEBPACK_IMPORTED_MODULE_4__["PureAsteriskContent"]]
        })
    ], PureAsteriskModule);
    return PureAsteriskModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/asterisk/asterisk.ts":
/*!****************************************************!*\
  !*** ./src/app/pure-elements/asterisk/asterisk.ts ***!
  \****************************************************/
/*! exports provided: PureAsterisk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureAsterisk", function() { return PureAsterisk; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _asterisk_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asterisk-config */ "./src/app/pure-elements/asterisk/asterisk-config.ts");
/* harmony import */ var _asterisk_config_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asterisk-config-token */ "./src/app/pure-elements/asterisk/asterisk-config-token.ts");
/* harmony import */ var _asterisk_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asterisk-content */ "./src/app/pure-elements/asterisk/asterisk-content.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PureAsterisk = /** @class */ (function (_super) {
    __extends(PureAsterisk, _super);
    function PureAsterisk(elementRef, componentNamer, config) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.config = config;
        _this.elementName = 'Asterisk';
        var finalConfig = Object.assign(_asterisk_config__WEBPACK_IMPORTED_MODULE_2__["PureAsteriskDefaultConfig"], config);
        _this.applyConfig(finalConfig);
        return _this;
    }
    PureAsterisk.prototype.applyConfig = function (config) {
        for (var key in config) {
            this[key] = config[key];
        }
    };
    PureAsterisk.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_asterisk_content__WEBPACK_IMPORTED_MODULE_4__["PureAsteriskContent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PureAsterisk.prototype, "asteriskContentChildren", void 0);
    PureAsterisk = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-asterisk',
            template: "\n    <span [ngClass]=\"elementClasses\">\n      <ng-container *ngIf=\"content && !asteriskContentChildren.length\">\n        {{content}}\n      </ng-container>\n\n      <ng-content \n        *ngIf=\"asteriskContentChildren.length\" \n        select=\"[pureAsteriskContent]\">\n      </ng-content>\n    </span>\n  "
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_asterisk_config_token__WEBPACK_IMPORTED_MODULE_3__["PureAsteriskConfigToken"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_1__["ComponentNamer"], Object])
    ], PureAsterisk);
    return PureAsterisk;
}(_core__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./src/app/pure-elements/asterisk/index.ts":
/*!*************************************************!*\
  !*** ./src/app/pure-elements/asterisk/index.ts ***!
  \*************************************************/
/*! exports provided: PureAsteriskConfigToken, PureAsteriskDefaultConfig, PureAsteriskModule, PureAsterisk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/asterisk/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskConfigToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureAsteriskConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskDefaultConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureAsteriskDefaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureAsteriskModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsterisk", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureAsterisk"]; });




/***/ }),

/***/ "./src/app/pure-elements/asterisk/public-api.ts":
/*!******************************************************!*\
  !*** ./src/app/pure-elements/asterisk/public-api.ts ***!
  \******************************************************/
/*! exports provided: PureAsteriskConfigToken, PureAsteriskDefaultConfig, PureAsteriskModule, PureAsterisk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asterisk_config_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asterisk-config-token */ "./src/app/pure-elements/asterisk/asterisk-config-token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskConfigToken", function() { return _asterisk_config_token__WEBPACK_IMPORTED_MODULE_0__["PureAsteriskConfigToken"]; });

/* harmony import */ var _asterisk_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asterisk-config */ "./src/app/pure-elements/asterisk/asterisk-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskDefaultConfig", function() { return _asterisk_config__WEBPACK_IMPORTED_MODULE_1__["PureAsteriskDefaultConfig"]; });

/* harmony import */ var _asterisk_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asterisk.module */ "./src/app/pure-elements/asterisk/asterisk.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskModule", function() { return _asterisk_module__WEBPACK_IMPORTED_MODULE_2__["PureAsteriskModule"]; });

/* harmony import */ var _asterisk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asterisk */ "./src/app/pure-elements/asterisk/asterisk.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsterisk", function() { return _asterisk__WEBPACK_IMPORTED_MODULE_3__["PureAsterisk"]; });







/***/ }),

/***/ "./src/app/pure-elements/button/button.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pure-elements/button/button.module.ts ***!
  \*******************************************************/
/*! exports provided: PureButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureButtonModule", function() { return PureButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./src/app/pure-elements/button/button.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PureButtonModule = /** @class */ (function () {
    function PureButtonModule() {
    }
    PureButtonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"].forRoot()],
            declarations: [_button__WEBPACK_IMPORTED_MODULE_3__["PureButton"]],
            exports: [_button__WEBPACK_IMPORTED_MODULE_3__["PureButton"]]
        })
    ], PureButtonModule);
    return PureButtonModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/button/button.ts":
/*!************************************************!*\
  !*** ./src/app/pure-elements/button/button.ts ***!
  \************************************************/
/*! exports provided: PureButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureButton", function() { return PureButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Boilerplate for applying mixins to PureButton.
var PureButtonBase = /** @class */ (function (_super) {
    __extends(PureButtonBase, _super);
    function PureButtonBase(elementRef, componentNamer) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        return _this;
    }
    return PureButtonBase;
}(_core__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
var PureButtonBaseMixin = Object(_core__WEBPACK_IMPORTED_MODULE_1__["mixinStateClasses"])(Object(_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(PureButtonBase));
var PureButton = /** @class */ (function (_super) {
    __extends(PureButton, _super);
    function PureButton(elementRef, componentNamer) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.elementName = 'Button';
        _this.renderAs = 'button';
        _this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.initElementStates();
        return _this;
    }
    PureButton.prototype.initElementStates = function () {
        this.states.disabled = {
            class: this.componentNamer.generateClassName(this.elementName, '', 'disabled'),
            isActive: this.disabled
        };
    };
    PureButton.prototype.setElAttrs = function () {
        switch (this.renderAs) {
            case 'a':
                this.href = this.href || '';
                this.download = this.download || '';
                this.rel = this.rel || '';
                this.target = this.target || '';
            case 'input':
                this.autofocus = this.autofocus || undefined;
                this.src = this.src || '';
                this.alt = this.alt || '';
            case 'button' || 'input':
                this.name = this.name || '';
            default:
                this.type = this.type || 'button';
                break;
        }
    };
    PureButton.prototype.click = function () {
        this.onClick.emit();
    };
    PureButton.prototype.ngOnChanges = function (changes) {
        this.setStateClasses(changes);
    };
    PureButton.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setElAttrs();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureButton.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PureButton.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureButton.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureButton.prototype, "autofocus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureButton.prototype, "renderAs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureButton.prototype, "href", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureButton.prototype, "download", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureButton.prototype, "rel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureButton.prototype, "target", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureButton.prototype, "alt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PureButton.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureButton.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PureButton.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PureButton.prototype, "onClick", void 0);
    PureButton = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-button',
            template: "\n    <button \n      *ngIf=\"!renderAs || renderAs === 'button'\"\n      [type]=\"type\"\n      [disabled]=\"disabled\"\n      [name]=\"name\"\n      [autofocus]=\"autofocus\"\n      [ngClass]=\"elementClasses\"\n      (click)=\"click($event)\">\n      <ng-container \n        *ngTemplateOutlet=\"content\">\n      </ng-container>\n    </button>\n\n    <a \n      *ngIf=\"renderAs === 'a'\"\n      [ngClass]=\"elementClasses\"\n      [href]=\"href\"\n      [download]=\"download\"\n      [rel]=\"rel\"\n      [target]=\"target\"\n      (click)=\"click($event)\">\n      <ng-container \n        *ngTemplateOutlet=\"content\">\n      </ng-container>\n    </a>\n\n    <input \n      *ngIf=\"renderAs === 'input'\"\n      [autofocus]=\"autofocus\"\n      [type]=\"type\"\n      [disabled]=\"disabled\"\n      [name]=\"name\"\n      [alt]=\"alt\"\n      [height]=\"height\"\n      [src]=\"src\"\n      [width]=\"width\"\n      [ngClass]=\"elementClasses\"\n      (click)=\"click($event)\"/>\n\n    <ng-template \n      #content>\n      <ng-content></ng-content>\n    </ng-template>\n  "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _core__WEBPACK_IMPORTED_MODULE_1__["ComponentNamer"]])
    ], PureButton);
    return PureButton;
}(PureButtonBaseMixin));



/***/ }),

/***/ "./src/app/pure-elements/button/index.ts":
/*!***********************************************!*\
  !*** ./src/app/pure-elements/button/index.ts ***!
  \***********************************************/
/*! exports provided: PureButtonModule, PureButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/button/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureButtonModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureButtonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureButton", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureButton"]; });




/***/ }),

/***/ "./src/app/pure-elements/button/public-api.ts":
/*!****************************************************!*\
  !*** ./src/app/pure-elements/button/public-api.ts ***!
  \****************************************************/
/*! exports provided: PureButtonModule, PureButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.module */ "./src/app/pure-elements/button/button.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureButtonModule", function() { return _button_module__WEBPACK_IMPORTED_MODULE_0__["PureButtonModule"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./src/app/pure-elements/button/button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureButton", function() { return _button__WEBPACK_IMPORTED_MODULE_1__["PureButton"]; });





/***/ }),

/***/ "./src/app/pure-elements/collapse/collapse-config-token.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pure-elements/collapse/collapse-config-token.ts ***!
  \*****************************************************************/
/*! exports provided: PureCollapseConfigToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureCollapseConfigToken", function() { return PureCollapseConfigToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var PureCollapseConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PureCollapseConfig');


/***/ }),

/***/ "./src/app/pure-elements/collapse/collapse-config.ts":
/*!***********************************************************!*\
  !*** ./src/app/pure-elements/collapse/collapse-config.ts ***!
  \***********************************************************/
/*! exports provided: PureCollapseDefaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureCollapseDefaultConfig", function() { return PureCollapseDefaultConfig; });
var PureCollapseDefaultConfig = {
    collapseOnClick: false,
    collapseOnHeaderClick: true,
    collapseOnFooterClick: false,
    collapsedOnInit: true,
    openAnimationDuration: 0,
    closeAnimationDuration: 0
};


/***/ }),

/***/ "./src/app/pure-elements/collapse/collapse-footer.ts":
/*!***********************************************************!*\
  !*** ./src/app/pure-elements/collapse/collapse-footer.ts ***!
  \***********************************************************/
/*! exports provided: PureCollapseFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureCollapseFooter", function() { return PureCollapseFooter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PureCollapseFooter = /** @class */ (function () {
    function PureCollapseFooter() {
    }
    PureCollapseFooter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pureCollapseFooter]'
        })
    ], PureCollapseFooter);
    return PureCollapseFooter;
}());



/***/ }),

/***/ "./src/app/pure-elements/collapse/collapse-header.ts":
/*!***********************************************************!*\
  !*** ./src/app/pure-elements/collapse/collapse-header.ts ***!
  \***********************************************************/
/*! exports provided: PureCollapseHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureCollapseHeader", function() { return PureCollapseHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PureCollapseHeader = /** @class */ (function () {
    function PureCollapseHeader() {
    }
    PureCollapseHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pureCollapseHeader]'
        })
    ], PureCollapseHeader);
    return PureCollapseHeader;
}());



/***/ }),

/***/ "./src/app/pure-elements/collapse/collapse.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pure-elements/collapse/collapse.module.ts ***!
  \***********************************************************/
/*! exports provided: PureCollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureCollapseModule", function() { return PureCollapseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse */ "./src/app/pure-elements/collapse/collapse.ts");
/* harmony import */ var _collapse_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collapse-header */ "./src/app/pure-elements/collapse/collapse-header.ts");
/* harmony import */ var _collapse_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collapse-footer */ "./src/app/pure-elements/collapse/collapse-footer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PureCollapseModule = /** @class */ (function () {
    function PureCollapseModule() {
    }
    PureCollapseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"].forRoot()],
            declarations: [_collapse__WEBPACK_IMPORTED_MODULE_3__["PureCollapse"], _collapse_header__WEBPACK_IMPORTED_MODULE_4__["PureCollapseHeader"], _collapse_footer__WEBPACK_IMPORTED_MODULE_5__["PureCollapseFooter"]],
            exports: [_collapse__WEBPACK_IMPORTED_MODULE_3__["PureCollapse"], _collapse_header__WEBPACK_IMPORTED_MODULE_4__["PureCollapseHeader"], _collapse_footer__WEBPACK_IMPORTED_MODULE_5__["PureCollapseFooter"]]
        })
    ], PureCollapseModule);
    return PureCollapseModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/collapse/collapse.ts":
/*!****************************************************!*\
  !*** ./src/app/pure-elements/collapse/collapse.ts ***!
  \****************************************************/
/*! exports provided: PureCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureCollapse", function() { return PureCollapse; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _collapse_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse-header */ "./src/app/pure-elements/collapse/collapse-header.ts");
/* harmony import */ var _collapse_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse-footer */ "./src/app/pure-elements/collapse/collapse-footer.ts");
/* harmony import */ var _collapse_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collapse-config */ "./src/app/pure-elements/collapse/collapse-config.ts");
/* harmony import */ var _collapse_config_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collapse-config-token */ "./src/app/pure-elements/collapse/collapse-config-token.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






// Boilerplate for applying mixins to PureCollapse.
var PureCollapseBase = /** @class */ (function (_super) {
    __extends(PureCollapseBase, _super);
    function PureCollapseBase(elementRef, componentNamer) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        return _this;
    }
    return PureCollapseBase;
}(_core__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
var PureCollapseBaseMixin = Object(_core__WEBPACK_IMPORTED_MODULE_1__["mixinStateClasses"])(PureCollapseBase);
var PureCollapse = /** @class */ (function (_super) {
    __extends(PureCollapse, _super);
    function PureCollapse(elementRef, componentNamer, userConfig) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.userConfig = userConfig;
        _this.elementName = 'Collapse';
        _this.headerName = 'Header';
        _this.contentName = 'Content';
        _this.footerName = 'Footer';
        _this.headerClasses = {};
        _this.contentClasses = {};
        _this.footerClasses = {};
        _this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.config = __assign({}, _collapse_config__WEBPACK_IMPORTED_MODULE_4__["PureCollapseDefaultConfig"], userConfig);
        _this.collapsedOnInit = _this.config.collapsedOnInit;
        _this.openAnimationDuration = _this.config.openAnimationDuration;
        _this.closeAnimationDuration = _this.config.closeAnimationDuration;
        _this.initElementStates();
        return _this;
    }
    Object.defineProperty(PureCollapse.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_core__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureCollapse.prototype, "collapse", {
        get: function () {
            return this._collapse;
        },
        set: function (value) {
            var _this = this;
            var previousValue = this.collapse;
            this._collapse = Object(_core__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this.updateState('collapse', this._collapse);
            this.setStateClasses();
            if (this._collapse) {
                setTimeout(function () {
                    _this.open.emit();
                }, this.openAnimationDuration);
            }
            else {
                // Prevent close event emitting on initialisation when falsy value is set
                if (previousValue) {
                    setTimeout(function () {
                        _this.close.emit();
                    }, this.closeAnimationDuration);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    PureCollapse.prototype.onClick = function () {
        if (this.config.collapseOnClick && !this.disabled) {
            this.collapse = !this.collapse;
        }
    };
    PureCollapse.prototype.onHeaderClick = function () {
        if (this.config.collapseOnHeaderClick && !this.config.collapseOnClick && !this.disabled) {
            this.collapse = !this.collapse;
        }
    };
    PureCollapse.prototype.onFooterClick = function () {
        if (this.config.collapseOnFooterClick && !this.config.collapseOnClick && !this.disabled) {
            this.collapse = !this.collapse;
        }
    };
    PureCollapse.prototype.initElementStates = function () {
        this.states.collapse = {
            class: this.componentNamer.generateClassName(this.elementName, '', 'collapsed'),
            isActive: false
        };
    };
    PureCollapse.prototype.setHeaderClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.headerClasses[this.componentNamer.generateClassName(this.elementName, this.headerName)] = flag;
    };
    PureCollapse.prototype.setContentClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.contentClasses[this.componentNamer.generateClassName(this.elementName, this.contentName)] = flag;
    };
    PureCollapse.prototype.setFooterClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.footerClasses[this.componentNamer.generateClassName(this.elementName, this.footerName)] = flag;
    };
    PureCollapse.prototype.ngOnChanges = function (changes) {
        this.setStateClasses(changes);
    };
    PureCollapse.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setHeaderClasses();
        this.setContentClasses();
        this.setFooterClasses();
        /** If `this.collapse` wasn't set through attribute — set it automatically. */
        if (this.collapse === undefined) {
            this.collapse = this.collapsedOnInit;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PureCollapse.prototype, "collapsedOnInit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_collapse_header__WEBPACK_IMPORTED_MODULE_2__["PureCollapseHeader"]),
        __metadata("design:type", _collapse_header__WEBPACK_IMPORTED_MODULE_2__["PureCollapseHeader"])
    ], PureCollapse.prototype, "headerChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_collapse_footer__WEBPACK_IMPORTED_MODULE_3__["PureCollapseFooter"]),
        __metadata("design:type", _collapse_footer__WEBPACK_IMPORTED_MODULE_3__["PureCollapseFooter"])
    ], PureCollapse.prototype, "footerChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PureCollapse.prototype, "open", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PureCollapse.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PureCollapse.prototype, "openAnimationDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PureCollapse.prototype, "closeAnimationDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Object])
    ], PureCollapse.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Object])
    ], PureCollapse.prototype, "collapse", null);
    PureCollapse = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-collapse',
            template: "\n    <div \n      [ngClass]=\"elementClasses\"\n      (click)=\"onClick()\">\n\n      <div\n        *ngIf=\"headerChild\"\n        [ngClass]=\"headerClasses\"\n        (click)=\"onHeaderClick()\">\n\n        <ng-content \n          select=\"[pureCollapseHeader]\">\n         </ng-content>\n      </div>\n\n      <div \n        [ngClass]=\"contentClasses\">\n        <ng-content></ng-content>\n      </div>\n      \n      <div\n        *ngIf=\"footerChild\"\n        [ngClass]=\"footerClasses\"\n        (click)=\"onFooterClick()\">\n\n        <ng-content \n          select=\"[pureCollapseFooter]\">\n         </ng-content>\n      </div>\n    </div>\n  "
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_collapse_config_token__WEBPACK_IMPORTED_MODULE_5__["PureCollapseConfigToken"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_1__["ComponentNamer"], Object])
    ], PureCollapse);
    return PureCollapse;
}(PureCollapseBaseMixin));



/***/ }),

/***/ "./src/app/pure-elements/collapse/index.ts":
/*!*************************************************!*\
  !*** ./src/app/pure-elements/collapse/index.ts ***!
  \*************************************************/
/*! exports provided: PureCollapseModule, PureCollapse, PureCollapseHeader, PureCollapseFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/collapse/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapseModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureCollapseModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapse", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureCollapse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapseHeader", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureCollapseHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapseFooter", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureCollapseFooter"]; });




/***/ }),

/***/ "./src/app/pure-elements/collapse/public-api.ts":
/*!******************************************************!*\
  !*** ./src/app/pure-elements/collapse/public-api.ts ***!
  \******************************************************/
/*! exports provided: PureCollapseModule, PureCollapse, PureCollapseHeader, PureCollapseFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse.module */ "./src/app/pure-elements/collapse/collapse.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapseModule", function() { return _collapse_module__WEBPACK_IMPORTED_MODULE_0__["PureCollapseModule"]; });

/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse */ "./src/app/pure-elements/collapse/collapse.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapse", function() { return _collapse__WEBPACK_IMPORTED_MODULE_1__["PureCollapse"]; });

/* harmony import */ var _collapse_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse-header */ "./src/app/pure-elements/collapse/collapse-header.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapseHeader", function() { return _collapse_header__WEBPACK_IMPORTED_MODULE_2__["PureCollapseHeader"]; });

/* harmony import */ var _collapse_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse-footer */ "./src/app/pure-elements/collapse/collapse-footer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapseFooter", function() { return _collapse_footer__WEBPACK_IMPORTED_MODULE_3__["PureCollapseFooter"]; });







/***/ }),

/***/ "./src/app/pure-elements/core/coercion/boolean.ts":
/*!********************************************************!*\
  !*** ./src/app/pure-elements/core/coercion/boolean.ts ***!
  \********************************************************/
/*! exports provided: coerceBooleanProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}


/***/ }),

/***/ "./src/app/pure-elements/core/coercion/index.ts":
/*!******************************************************!*\
  !*** ./src/app/pure-elements/core/coercion/index.ts ***!
  \******************************************************/
/*! exports provided: coerceBooleanProperty, coerceModelValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean */ "./src/app/pure-elements/core/coercion/boolean.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return _boolean__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/pure-elements/core/coercion/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceModelValue", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["coerceModelValue"]; });





/***/ }),

/***/ "./src/app/pure-elements/core/coercion/model.ts":
/*!******************************************************!*\
  !*** ./src/app/pure-elements/core/coercion/model.ts ***!
  \******************************************************/
/*! exports provided: coerceModelValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceModelValue", function() { return coerceModelValue; });
/** Coerces a form model value to a string. */
function coerceModelValue(value) {
    switch (typeof value) {
        case 'string':
            break;
        case 'number':
            if (Number.isNaN(value)) {
                value = '';
            }
            else {
                value = '' + value;
            }
            break;
        case 'boolean':
            value = String(value);
            break;
        default:
            value = '';
    }
    return value;
}


/***/ }),

/***/ "./src/app/pure-elements/core/common-behaviors/disabled.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pure-elements/core/common-behaviors/disabled.ts ***!
  \*****************************************************************/
/*! exports provided: mixinDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return mixinDisabled; });
/* harmony import */ var _coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../coercion */ "./src/app/pure-elements/core/coercion/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** Mixin to augment a component with a `disabled` property. */
function mixinDisabled(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._disabled = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = Object(_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}


/***/ }),

/***/ "./src/app/pure-elements/core/common-behaviors/focused.ts":
/*!****************************************************************!*\
  !*** ./src/app/pure-elements/core/common-behaviors/focused.ts ***!
  \****************************************************************/
/*! exports provided: mixinFocused */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinFocused", function() { return mixinFocused; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Mixin to augment a component with a `disabled` property. */
function mixinFocused(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, args) || this;
        }
        Object.defineProperty(class_1.prototype, "focused", {
            get: function () {
                var isFocused;
                if (document.activeElement === this.getActiveElement()) {
                    isFocused = true;
                }
                else {
                    isFocused = false;
                }
                return isFocused;
            },
            set: function (value) {
                if (value) {
                    this.getActiveElement().focus();
                }
                else {
                    this.getActiveElement().blur();
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}


/***/ }),

/***/ "./src/app/pure-elements/core/common-behaviors/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/pure-elements/core/common-behaviors/index.ts ***!
  \**************************************************************/
/*! exports provided: mixinDisabled, mixinFocused, PureComponent, mixinStateClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disabled */ "./src/app/pure-elements/core/common-behaviors/disabled.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return _disabled__WEBPACK_IMPORTED_MODULE_0__["mixinDisabled"]; });

/* harmony import */ var _focused__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focused */ "./src/app/pure-elements/core/common-behaviors/focused.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinFocused", function() { return _focused__WEBPACK_IMPORTED_MODULE_1__["mixinFocused"]; });

/* harmony import */ var _pure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pure-component */ "./src/app/pure-elements/core/common-behaviors/pure-component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return _pure_component__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]; });

/* harmony import */ var _state_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-classes */ "./src/app/pure-elements/core/common-behaviors/state-classes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinStateClasses", function() { return _state_classes__WEBPACK_IMPORTED_MODULE_3__["mixinStateClasses"]; });







/***/ }),

/***/ "./src/app/pure-elements/core/common-behaviors/pure-component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pure-elements/core/common-behaviors/pure-component.ts ***!
  \***********************************************************************/
/*! exports provided: PureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PureComponent = /** @class */ (function () {
    function PureComponent(elementRef, componentNamer) {
        this.elementRef = elementRef;
        this.componentNamer = componentNamer;
        this.isInitialised = false;
        this.elementClasses = {};
    }
    Object.defineProperty(PureComponent.prototype, "extraClass", {
        get: function () {
            return this._extraClass;
        },
        set: function (value) {
            var _this = this;
            this._extraClass = value;
            if (value) {
                var extraClasses = value.split(' ');
                extraClasses.forEach(function (extraClass) {
                    if (extraClass) {
                        _this.elementClasses[extraClass] = true;
                    }
                    ;
                });
            }
            ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureComponent.prototype, "theme", {
        get: function () {
            return this._theme;
        },
        set: function (value) {
            var _this = this;
            this._theme = value;
            if (value) {
                var themes = value.split(' ');
                themes.forEach(function (theme) {
                    if (theme) {
                        _this.elementClasses[_this.componentNamer.generateClassName(_this.elementName, '', theme)] = true;
                    }
                    ;
                });
            }
            ;
        },
        enumerable: true,
        configurable: true
    });
    PureComponent.prototype.setElClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.elementClasses[this.componentNamer.generateClassName(this.elementName)] = flag;
    };
    PureComponent.prototype.ngOnInit = function () {
        this.isInitialised = true;
        this.setElClasses();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PureComponent.prototype, "extraClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PureComponent.prototype, "theme", null);
    return PureComponent;
}());



/***/ }),

/***/ "./src/app/pure-elements/core/common-behaviors/state-classes.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pure-elements/core/common-behaviors/state-classes.ts ***!
  \**********************************************************************/
/*! exports provided: mixinStateClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinStateClasses", function() { return mixinStateClasses; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Mixin to dynamically control element state classes. */
function mixinStateClasses(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.states = {};
            return _this;
        }
        /**
         * Enable state class in `elementClasses` object depending on if such state
         * is active.
         *
         * Call this function whenever you have state change and want to apply
         * corresponding state class.
         */
        class_1.prototype.setStateClasses = function (changes) {
            var elementChangesFound = false, change;
            // Update state only in case there is element changes (ignore child
            // ones).
            if (changes) {
                for (var change_1 in changes) {
                    if (this.states.hasOwnProperty(change_1)) {
                        if (!this.states[change_1].isChildState) {
                            this.states[change_1].isActive = !!changes[change_1].currentValue; // TODO coerceBoolean?
                            elementChangesFound = true;
                        }
                    }
                }
            }
            if (changes && elementChangesFound || !changes) {
                for (var stateName in this.states) {
                    var stateClass = this.states[stateName].class;
                    this.elementClasses[stateClass] = this.states[stateName].isActive;
                }
            }
        };
        /*
         * Update given state in `states` object. Example usage in setter function:
         * `updateState('disabled', true)`.
         */
        class_1.prototype.updateState = function (stateToUpdate, flag) {
            this.states[stateToUpdate].isActive = flag;
        };
        return class_1;
    }(base));
}


/***/ }),

/***/ "./src/app/pure-elements/core/component-namer/component-namer-config-token.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pure-elements/core/component-namer/component-namer-config-token.ts ***!
  \************************************************************************************/
/*! exports provided: ComponentNamerConfigToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerConfigToken", function() { return ComponentNamerConfigToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ComponentNamerConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("ComponentNamerConfig");


/***/ }),

/***/ "./src/app/pure-elements/core/component-namer/component-namer-config.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pure-elements/core/component-namer/component-namer-config.ts ***!
  \******************************************************************************/
/*! exports provided: ComponentNamerDefaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerDefaultConfig", function() { return ComponentNamerDefaultConfig; });
/**
 * Use BEM class names by default. See more about BEM at http://getbem.com.
 *
 * Class name example using options below:
 *   '.c-pure-modal-window__content--sm'.
 */
var ComponentNamerDefaultConfig = {
    classPrefix: 'c',
    classPrefixDelimiter: '-',
    blockNamePrefix: 'pure',
    blockNamePrefixDelimiter: '-',
    elementDelimiter: '__',
    modificatorDelimiter: '--',
    namingConvention: 'kebab',
    idDelimiter: '-'
};


/***/ }),

/***/ "./src/app/pure-elements/core/component-namer/component-namer.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pure-elements/core/component-namer/component-namer.module.ts ***!
  \******************************************************************************/
/*! exports provided: ComponentNamerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerModule", function() { return ComponentNamerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_namer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-namer */ "./src/app/pure-elements/core/component-namer/component-namer.ts");
/* harmony import */ var _component_namer_config_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-namer-config-token */ "./src/app/pure-elements/core/component-namer/component-namer-config-token.ts");
/* harmony import */ var _component_namer_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-namer-config */ "./src/app/pure-elements/core/component-namer/component-namer-config.ts");
/* harmony import */ var _string_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../string-formatter */ "./src/app/pure-elements/core/string-formatter/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentNamerModule = /** @class */ (function () {
    function ComponentNamerModule() {
    }
    ComponentNamerModule_1 = ComponentNamerModule;
    ComponentNamerModule.forRoot = function (componentNamerConfig) {
        if (componentNamerConfig === void 0) { componentNamerConfig = {}; }
        var finalConfig = Object.assign(_component_namer_config__WEBPACK_IMPORTED_MODULE_3__["ComponentNamerDefaultConfig"], componentNamerConfig);
        return {
            ngModule: ComponentNamerModule_1,
            providers: [
                _string_formatter__WEBPACK_IMPORTED_MODULE_4__["StringFormatter"],
                _component_namer__WEBPACK_IMPORTED_MODULE_1__["ComponentNamer"],
                {
                    provide: _component_namer_config_token__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerConfigToken"],
                    useValue: finalConfig
                }
            ]
        };
    };
    ComponentNamerModule = ComponentNamerModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])()
    ], ComponentNamerModule);
    return ComponentNamerModule;
    var ComponentNamerModule_1;
}());



/***/ }),

/***/ "./src/app/pure-elements/core/component-namer/component-namer.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pure-elements/core/component-namer/component-namer.ts ***!
  \***********************************************************************/
/*! exports provided: ComponentNamer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentNamer", function() { return ComponentNamer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _string_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string-formatter */ "./src/app/pure-elements/core/string-formatter/index.ts");
/* harmony import */ var _component_namer_config_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-namer-config-token */ "./src/app/pure-elements/core/component-namer/component-namer-config-token.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ComponentNamer = /** @class */ (function () {
    function ComponentNamer(config, stringFormatter) {
        this.config = config;
        this.stringFormatter = stringFormatter;
    }
    /**
     * Generate class name for component.
     *
     * @param blockName       Name of component block — e.g: 'Textfield',
     *                        'Modal Window'.
     * @param elementName     Name of element of component block — e.g:
     *                        'Input', 'Content' (optional).
     * @param modificatorName Name of component modification — e.g:
     *                        'Dark', 'Small' (optional).
     *
     * Working example:
     *
     * 1) Case config.namingConvention === 'kebab':
     *    generateClassName('Modal Window') => 'c-pure-modal-window'
     *    generateClassName('Modal Window', 'Content', 'Extra Wide') => 'c-pure-modal-window__content--extra-wide'
     *
     * 2) Case config.namingConvention === 'camel':
     *    generateClassName('Modal Window', '', 'Extra Wide') => 'c-pure-modalWindow--extraWide'
     *    generateClassName('modal-window', 'content', 'extra-wide') => 'c-pure-modalWindow__content--extraWide'
     */
    ComponentNamer.prototype.generateClassName = function (blockName, elementName, modificatorName) {
        blockName = this.formatNamePart(blockName);
        elementName = elementName ? this.formatNamePart(elementName) : '';
        modificatorName = modificatorName ? this.formatNamePart(modificatorName) : '';
        return (this.config.classPrefix ? this.config.classPrefix + this.config.classPrefixDelimiter : '') +
            (this.config.blockNamePrefix ? this.config.blockNamePrefix + this.config.blockNamePrefixDelimiter : '') +
            (blockName) +
            (elementName ? this.config.elementDelimiter + elementName : '') +
            (modificatorName ? this.config.modificatorDelimiter + modificatorName : '');
    };
    /**
     * Generate ID name for component.
     *
     * @param count           Count of component — e.g. 1, 2, 3. Made to
     *                        avoid IDs duplications.
     * @param blockName       Name of component block — e.g: 'Textfield',
     *                        'Modal Window' (optional).
     * @param elementName     Name of element of component block — e.g:
     *                        'Input', 'Content' (optional).
     */
    ComponentNamer.prototype.generateId = function (count, blockName, elementName) {
        blockName = blockName ? this.formatNamePart(blockName) : '';
        elementName = elementName ? this.formatNamePart(elementName) : '';
        return (blockName ? (blockName + this.config.idDelimiter) : '') +
            (elementName ? (elementName + this.config.idDelimiter) : '') +
            (String(count));
    };
    ComponentNamer.prototype.formatNamePart = function (namePart) {
        var namePartConverted;
        switch (this.config.namingConvention) {
            case 'kebab':
                namePartConverted = this.stringFormatter.toKebabCase(namePart);
                break;
            case 'camel':
                namePartConverted = this.stringFormatter.toCamelCase(namePart);
                break;
            default:
                namePartConverted = namePart;
                break;
        }
        return namePartConverted;
    };
    ComponentNamer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_component_namer_config_token__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerConfigToken"])),
        __metadata("design:paramtypes", [Object, _string_formatter__WEBPACK_IMPORTED_MODULE_1__["StringFormatter"]])
    ], ComponentNamer);
    return ComponentNamer;
}());



/***/ }),

/***/ "./src/app/pure-elements/core/component-namer/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/pure-elements/core/component-namer/index.ts ***!
  \*************************************************************/
/*! exports provided: ComponentNamer, ComponentNamerConfigToken, ComponentNamerDefaultConfig, ComponentNamerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_namer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-namer */ "./src/app/pure-elements/core/component-namer/component-namer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamer", function() { return _component_namer__WEBPACK_IMPORTED_MODULE_0__["ComponentNamer"]; });

/* harmony import */ var _component_namer_config_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-namer-config-token */ "./src/app/pure-elements/core/component-namer/component-namer-config-token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerConfigToken", function() { return _component_namer_config_token__WEBPACK_IMPORTED_MODULE_1__["ComponentNamerConfigToken"]; });

/* harmony import */ var _component_namer_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-namer-config */ "./src/app/pure-elements/core/component-namer/component-namer-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerDefaultConfig", function() { return _component_namer_config__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerDefaultConfig"]; });

/* harmony import */ var _component_namer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-namer.module */ "./src/app/pure-elements/core/component-namer/component-namer.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerModule", function() { return _component_namer_module__WEBPACK_IMPORTED_MODULE_3__["ComponentNamerModule"]; });







/***/ }),

/***/ "./src/app/pure-elements/core/event-handler/event-handler.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pure-elements/core/event-handler/event-handler.ts ***!
  \*******************************************************************/
/*! exports provided: EventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Represents a service that controls all global events (`document`, `window`)
 * that Pure components need to use. Made with aim to avoid double listeners
 * for the same event (e.g. page contains several tooltips that need to listen
 * for `keydown` method) and thus increasing overall performance.
 *
 * Example usage:
 *
 *   this.eventHandler.onKeydown().subscribe(
 *     (event: KeyboardEvent) => this.onKeydown(event),
 *     (err) => this.eventHandler.handleErrorFromSubscriber(err)
 *   )
 *
 * Don't forget to unsubscribe on component destroy.
 */
var EventHandler = /** @class */ (function () {
    function EventHandler() {
        this.keydown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'keydown');
    }
    EventHandler.prototype.handleErrorFromSubscriber = function (err) {
        console.error(err);
    };
    EventHandler.prototype.onKeydown = function () {
        return this.keydown$;
    };
    EventHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EventHandler);
    return EventHandler;
}());



/***/ }),

/***/ "./src/app/pure-elements/core/event-handler/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/pure-elements/core/event-handler/index.ts ***!
  \***********************************************************/
/*! exports provided: EventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handler */ "./src/app/pure-elements/core/event-handler/event-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return _event_handler__WEBPACK_IMPORTED_MODULE_0__["EventHandler"]; });




/***/ }),

/***/ "./src/app/pure-elements/core/index.ts":
/*!*********************************************!*\
  !*** ./src/app/pure-elements/core/index.ts ***!
  \*********************************************/
/*! exports provided: coerceBooleanProperty, coerceModelValue, mixinDisabled, mixinFocused, PureComponent, mixinStateClasses, ComponentNamer, ComponentNamerConfigToken, ComponentNamerDefaultConfig, ComponentNamerModule, KEY_CODES, EventHandler, StringFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/core/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceModelValue", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["coerceModelValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["mixinDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinFocused", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["mixinFocused"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinStateClasses", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["mixinStateClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamer", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentNamer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerConfigToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentNamerConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerDefaultConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentNamerDefaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentNamerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CODES", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_CODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["EventHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormatter", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["StringFormatter"]; });




/***/ }),

/***/ "./src/app/pure-elements/core/keycodes/index.ts":
/*!******************************************************!*\
  !*** ./src/app/pure-elements/core/keycodes/index.ts ***!
  \******************************************************/
/*! exports provided: KEY_CODES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycodes */ "./src/app/pure-elements/core/keycodes/keycodes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CODES", function() { return _keycodes__WEBPACK_IMPORTED_MODULE_0__["KEY_CODES"]; });




/***/ }),

/***/ "./src/app/pure-elements/core/keycodes/keycodes.ts":
/*!*********************************************************!*\
  !*** ./src/app/pure-elements/core/keycodes/keycodes.ts ***!
  \*********************************************************/
/*! exports provided: KEY_CODES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODES", function() { return KEY_CODES; });
var KEY_CODES = {
    MAC_ENTER: 3,
    ENTER: 13,
    BACKSPACE: 8,
    TAB: 9,
    ESCAPE: 27,
    SPACE: 32,
    SHIFT: 16,
    CONTROL: 17,
    ALT: 18,
    DELETE: 46,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40
};


/***/ }),

/***/ "./src/app/pure-elements/core/public-api.ts":
/*!**************************************************!*\
  !*** ./src/app/pure-elements/core/public-api.ts ***!
  \**************************************************/
/*! exports provided: coerceBooleanProperty, coerceModelValue, mixinDisabled, mixinFocused, PureComponent, mixinStateClasses, ComponentNamer, ComponentNamerConfigToken, ComponentNamerDefaultConfig, ComponentNamerModule, KEY_CODES, EventHandler, StringFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coercion */ "./src/app/pure-elements/core/coercion/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return _coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceModelValue", function() { return _coercion__WEBPACK_IMPORTED_MODULE_0__["coerceModelValue"]; });

/* harmony import */ var _common_behaviors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-behaviors */ "./src/app/pure-elements/core/common-behaviors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return _common_behaviors__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinFocused", function() { return _common_behaviors__WEBPACK_IMPORTED_MODULE_1__["mixinFocused"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return _common_behaviors__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinStateClasses", function() { return _common_behaviors__WEBPACK_IMPORTED_MODULE_1__["mixinStateClasses"]; });

/* harmony import */ var _component_namer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-namer */ "./src/app/pure-elements/core/component-namer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamer", function() { return _component_namer__WEBPACK_IMPORTED_MODULE_2__["ComponentNamer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerConfigToken", function() { return _component_namer__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerDefaultConfig", function() { return _component_namer__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerDefaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerModule", function() { return _component_namer__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"]; });

/* harmony import */ var _keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keycodes */ "./src/app/pure-elements/core/keycodes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CODES", function() { return _keycodes__WEBPACK_IMPORTED_MODULE_3__["KEY_CODES"]; });

/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-handler */ "./src/app/pure-elements/core/event-handler/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"]; });

/* harmony import */ var _string_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string-formatter */ "./src/app/pure-elements/core/string-formatter/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormatter", function() { return _string_formatter__WEBPACK_IMPORTED_MODULE_5__["StringFormatter"]; });









/***/ }),

/***/ "./src/app/pure-elements/core/string-formatter/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/pure-elements/core/string-formatter/index.ts ***!
  \**************************************************************/
/*! exports provided: StringFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _string_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string-formatter */ "./src/app/pure-elements/core/string-formatter/string-formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormatter", function() { return _string_formatter__WEBPACK_IMPORTED_MODULE_0__["StringFormatter"]; });




/***/ }),

/***/ "./src/app/pure-elements/core/string-formatter/string-formatter.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pure-elements/core/string-formatter/string-formatter.ts ***!
  \*************************************************************************/
/*! exports provided: StringFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFormatter", function() { return StringFormatter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StringFormatter = /** @class */ (function () {
    function StringFormatter() {
    }
    StringFormatter.prototype.toKebabCase = function (str) {
        return str.toLowerCase().replace(/ /g, '-');
    };
    StringFormatter.prototype.toCamelCase = function (str) {
        var wordsArr = [], index = 0, strConverted = '';
        if (!str) {
            return str;
        }
        str = str.replace('-', ' ');
        wordsArr = str.split(' ');
        wordsArr.forEach(function (word) {
            var wordArr = word.split('');
            if (index > 0) {
                wordArr[0] = wordArr[0].toUpperCase();
            }
            else {
                wordArr[0] = wordArr[0].toLowerCase();
            }
            strConverted += wordArr.join('');
            index++;
        });
        return strConverted;
    };
    StringFormatter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StringFormatter);
    return StringFormatter;
}());



/***/ }),

/***/ "./src/app/pure-elements/dropdown/dropdown-item.ts":
/*!*********************************************************!*\
  !*** ./src/app/pure-elements/dropdown/dropdown-item.ts ***!
  \*********************************************************/
/*! exports provided: PureDropdownItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureDropdownItem", function() { return PureDropdownItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PureDropdownItem = /** @class */ (function (_super) {
    __extends(PureDropdownItem, _super);
    function PureDropdownItem(elementRef, componentNamer) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.elementName = 'Dropdown Item';
        _this._disabled = false;
        _this._focused = false;
        _this.onClickChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        _this.onMousedownChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        _this.disabledClassName = _this.componentNamer.generateClassName(_this.elementName, '', 'disabled');
        _this.focusedClassName = _this.componentNamer.generateClassName(_this.elementName, '', 'focused');
        return _this;
    }
    Object.defineProperty(PureDropdownItem.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_core__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            this.elementClasses[this.disabledClassName] = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureDropdownItem.prototype, "focused", {
        get: function () {
            return this._focused;
        },
        set: function (value) {
            this._focused = Object(_core__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            this.elementClasses[this.focusedClassName] = this._focused;
        },
        enumerable: true,
        configurable: true
    });
    PureDropdownItem.prototype.onClick = function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.onClickChanges.next();
    };
    PureDropdownItem.prototype.onMousedown = function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.onMousedownChanges.next();
    };
    /** Performs the same action as on mouse click. */
    PureDropdownItem.prototype.click = function () {
        this.elementRef.nativeElement.click();
    };
    PureDropdownItem.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    PureDropdownItem.prototype.ngOnDestroy = function () {
        this.onClickChanges.complete();
        this.onMousedownChanges.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pureDropdownItemDisabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PureDropdownItem.prototype, "disabled", null);
    PureDropdownItem = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[pureDropdownItem]',
            template: "\n    <div [ngClass]=\"elementClasses\" \n         (click)=\"onClick($event)\" \n         (mousedown)=\"onMousedown($event)\">\n      <ng-content></ng-content>\n    </div>\n  ",
            host: {
                'attr.disabled': 'disabled'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamer"]])
    ], PureDropdownItem);
    return PureDropdownItem;
}(_core__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



/***/ }),

/***/ "./src/app/pure-elements/dropdown/dropdown-trigger.ts":
/*!************************************************************!*\
  !*** ./src/app/pure-elements/dropdown/dropdown-trigger.ts ***!
  \************************************************************/
/*! exports provided: PureDropdownTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureDropdownTrigger", function() { return PureDropdownTrigger; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown */ "./src/app/pure-elements/dropdown/dropdown.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PureDropdownTrigger = /** @class */ (function () {
    function PureDropdownTrigger() {
        this.isOpened = false;
    }
    PureDropdownTrigger.prototype.onClick = function () {
        this.openMenu();
    };
    PureDropdownTrigger.prototype.onKeydown = function (event) {
        if (event.which === _core__WEBPACK_IMPORTED_MODULE_1__["KEY_CODES"].ESCAPE && this.isOpened) {
            this.closeMenu();
        }
    };
    PureDropdownTrigger.prototype.openMenu = function () {
        this.menu.show = true;
        this.isOpened = true;
    };
    PureDropdownTrigger.prototype.closeMenu = function () {
        this.menu.show = false;
        this.isOpened = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pureDropdownTriggerFor'),
        __metadata("design:type", _dropdown__WEBPACK_IMPORTED_MODULE_2__["PureDropdown"])
    ], PureDropdownTrigger.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PureDropdownTrigger.prototype, "onKeydown", null);
    PureDropdownTrigger = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pureDropdownTriggerFor]',
            host: {
                '(click)': 'onClick($event)'
            },
            exportAs: 'pureDropdownTrigger'
        })
    ], PureDropdownTrigger);
    return PureDropdownTrigger;
}());



/***/ }),

/***/ "./src/app/pure-elements/dropdown/dropdown.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pure-elements/dropdown/dropdown.module.ts ***!
  \***********************************************************/
/*! exports provided: PureDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureDropdownModule", function() { return PureDropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown */ "./src/app/pure-elements/dropdown/dropdown.ts");
/* harmony import */ var _dropdown_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-trigger */ "./src/app/pure-elements/dropdown/dropdown-trigger.ts");
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown-item */ "./src/app/pure-elements/dropdown/dropdown-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PureDropdownModule = /** @class */ (function () {
    function PureDropdownModule() {
    }
    PureDropdownModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"].forRoot()],
            declarations: [_dropdown__WEBPACK_IMPORTED_MODULE_3__["PureDropdown"], _dropdown_trigger__WEBPACK_IMPORTED_MODULE_4__["PureDropdownTrigger"], _dropdown_item__WEBPACK_IMPORTED_MODULE_5__["PureDropdownItem"]],
            exports: [_dropdown__WEBPACK_IMPORTED_MODULE_3__["PureDropdown"], _dropdown_trigger__WEBPACK_IMPORTED_MODULE_4__["PureDropdownTrigger"], _dropdown_item__WEBPACK_IMPORTED_MODULE_5__["PureDropdownItem"]]
        })
    ], PureDropdownModule);
    return PureDropdownModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/dropdown/dropdown.ts":
/*!****************************************************!*\
  !*** ./src/app/pure-elements/dropdown/dropdown.ts ***!
  \****************************************************/
/*! exports provided: PureDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureDropdown", function() { return PureDropdown; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-item */ "./src/app/pure-elements/dropdown/dropdown-item.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PureDropdown = /** @class */ (function (_super) {
    __extends(PureDropdown, _super);
    function PureDropdown(elementRef, componentNamer) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.elementName = 'Dropdown';
        _this.backdropName = 'Backdrop';
        _this.menuName = 'Menu';
        _this.appendixName = 'Appendix';
        _this.backdropClasses = {};
        _this.menuClasses = {};
        _this.appendixClasses = {};
        _this.focusedItemNumber = 0;
        _this._show = false;
        _this.shownClassName = _this.componentNamer.generateClassName(_this.elementName, '', 'shown');
        _this.yPosition = 'below';
        _this.xPosition = 'after';
        return _this;
    }
    Object.defineProperty(PureDropdown.prototype, "yPosition", {
        get: function () {
            return this._yPosition;
        },
        set: function (value) {
            this._yPosition = value;
            this.menuClasses[this._yPositionClassname] = false;
            this._yPositionClassname = this.componentNamer.generateClassName(this.elementName, this.menuName, this._yPosition);
            this.menuClasses[this._yPositionClassname] = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureDropdown.prototype, "xPosition", {
        get: function () {
            return this._xPosition;
        },
        set: function (value) {
            this._xPosition = value;
            this.menuClasses[this._xPositionClassname] = false;
            this._xPositionClassname = this.componentNamer.generateClassName(this.elementName, this.menuName, this._xPosition);
            this.menuClasses[this._xPositionClassname] = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureDropdown.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            this._show = value;
            this.elementClasses[this.shownClassName] = this._show;
            if (this._show) {
                this.setItemFocus(this.focusedItemNumber);
            }
        },
        enumerable: true,
        configurable: true
    });
    PureDropdown.prototype.onBackdropClick = function () {
        this.show = false;
    };
    PureDropdown.prototype.onDocumentKeyup = function (event) {
        if (this.show) {
            event.preventDefault();
            event.stopPropagation();
            if (event.which === _core__WEBPACK_IMPORTED_MODULE_1__["KEY_CODES"].DOWN_ARROW) {
                this.setItemFocus(++this.focusedItemNumber, 'down');
            }
            else if (event.which === _core__WEBPACK_IMPORTED_MODULE_1__["KEY_CODES"].UP_ARROW) {
                this.setItemFocus(--this.focusedItemNumber, 'up');
            }
            if (event.which === _core__WEBPACK_IMPORTED_MODULE_1__["KEY_CODES"].SPACE || event.which === _core__WEBPACK_IMPORTED_MODULE_1__["KEY_CODES"].ENTER) {
                this.clickItem(this.focusedItemNumber);
            }
        }
    };
    /**
     * Unfocuses all items and sets focus to the given one. 'Direction' argument
     * specifies which item to focus next in case specified item is disabled.
     */
    PureDropdown.prototype.setItemFocus = function (item, direction) {
        if (direction === void 0) { direction = 'down'; }
        var itemsArray = this.items.toArray();
        var itemNumber;
        if (typeof item !== 'number') {
            itemNumber = itemsArray.indexOf(item);
        }
        else {
            itemNumber = item;
        }
        if (itemNumber > itemsArray.length - 1)
            itemNumber = 0;
        if (itemNumber < 0)
            itemNumber = itemsArray.length - 1;
        this.unfocusItems();
        if (!itemsArray[itemNumber].disabled) {
            itemsArray[itemNumber].focused = true;
        }
        else {
            if (direction === 'up') {
                this.setItemFocus(--itemNumber, direction);
            }
            else {
                this.setItemFocus(++itemNumber, direction);
            }
            return;
        }
        this.focusedItemNumber = itemNumber;
    };
    PureDropdown.prototype.clickItem = function (item) {
        if (this.show) {
            var itemsArray = this.items.toArray();
            var itemNumber = void 0;
            if (typeof item !== 'number') {
                itemNumber = itemsArray.indexOf(item);
            }
            else {
                itemNumber = item;
            }
            itemsArray[itemNumber].click();
            this.show = false;
        }
    };
    PureDropdown.prototype.unfocusItems = function () {
        var itemsArray = this.items.toArray();
        for (var _i = 0, itemsArray_1 = itemsArray; _i < itemsArray_1.length; _i++) {
            var item = itemsArray_1[_i];
            item.focused = false;
        }
    };
    PureDropdown.prototype.setInnerElementsClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.backdropClasses[this.componentNamer.generateClassName(this.elementName, this.backdropName)] = flag;
        this.menuClasses[this.componentNamer.generateClassName(this.elementName, this.menuName)] = flag;
        this.appendixClasses[this.componentNamer.generateClassName(this.elementName, this.appendixName)] = flag;
    };
    PureDropdown.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setInnerElementsClasses();
    };
    PureDropdown.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.items.forEach(function (item) {
            /** Close menu on item click. */
            item.onClickChanges.subscribe(function () {
                _this.show = false;
            });
            /** Focus item on mousedown. */
            item.onMousedownChanges.subscribe(function () {
                _this.setItemFocus(item);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_dropdown_item__WEBPACK_IMPORTED_MODULE_2__["PureDropdownItem"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PureDropdown.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PureDropdown.prototype, "yPosition", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PureDropdown.prototype, "xPosition", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PureDropdown.prototype, "onDocumentKeyup", null);
    PureDropdown = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-dropdown',
            template: "\n    <div [ngClass]=\"elementClasses\">\n      <div [ngClass]=\"backdropClasses\" (click)=\"onBackdropClick()\"></div>\n\n      <div [ngClass]=\"menuClasses\">\n        <ng-content select=\"[pureDropdownItem]\"></ng-content>\n        <span [ngClass]=\"appendixClasses\"></span>\n      </div>\n    </div>\n  ",
            exportAs: 'pureDropdown'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_1__["ComponentNamer"]])
    ], PureDropdown);
    return PureDropdown;
}(_core__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./src/app/pure-elements/dropdown/index.ts":
/*!*************************************************!*\
  !*** ./src/app/pure-elements/dropdown/index.ts ***!
  \*************************************************/
/*! exports provided: PureDropdown, PureDropdownTrigger, PureDropdownItem, PureDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/dropdown/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdown", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdownTrigger", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureDropdownTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdownItem", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureDropdownItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdownModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureDropdownModule"]; });




/***/ }),

/***/ "./src/app/pure-elements/dropdown/public-api.ts":
/*!******************************************************!*\
  !*** ./src/app/pure-elements/dropdown/public-api.ts ***!
  \******************************************************/
/*! exports provided: PureDropdown, PureDropdownTrigger, PureDropdownItem, PureDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./src/app/pure-elements/dropdown/dropdown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_0__["PureDropdown"]; });

/* harmony import */ var _dropdown_trigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-trigger */ "./src/app/pure-elements/dropdown/dropdown-trigger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdownTrigger", function() { return _dropdown_trigger__WEBPACK_IMPORTED_MODULE_1__["PureDropdownTrigger"]; });

/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-item */ "./src/app/pure-elements/dropdown/dropdown-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdownItem", function() { return _dropdown_item__WEBPACK_IMPORTED_MODULE_2__["PureDropdownItem"]; });

/* harmony import */ var _dropdown_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.module */ "./src/app/pure-elements/dropdown/dropdown.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdownModule", function() { return _dropdown_module__WEBPACK_IMPORTED_MODULE_3__["PureDropdownModule"]; });







/***/ }),

/***/ "./src/app/pure-elements/form-control/form-control-config-token.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pure-elements/form-control/form-control-config-token.ts ***!
  \*************************************************************************/
/*! exports provided: PureFormControlConfigToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureFormControlConfigToken", function() { return PureFormControlConfigToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var PureFormControlConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("PureFormControlConfig");


/***/ }),

/***/ "./src/app/pure-elements/form-control/form-control-config.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pure-elements/form-control/form-control-config.ts ***!
  \*******************************************************************/
/*! exports provided: PureFormControlDefaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureFormControlDefaultConfig", function() { return PureFormControlDefaultConfig; });
var PureFormControlDefaultConfig = {
    asteriskPosition: 'label'
};


/***/ }),

/***/ "./src/app/pure-elements/form-control/form-control.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pure-elements/form-control/form-control.module.ts ***!
  \*******************************************************************/
/*! exports provided: PureFormControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureFormControlModule", function() { return PureFormControlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _form_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-control */ "./src/app/pure-elements/form-control/form-control.ts");
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prefix */ "./src/app/pure-elements/form-control/prefix.ts");
/* harmony import */ var _suffix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suffix */ "./src/app/pure-elements/form-control/suffix.ts");
/* harmony import */ var _asterisk_asterisk_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../asterisk/asterisk.module */ "./src/app/pure-elements/asterisk/asterisk.module.ts");
/* harmony import */ var _label_label_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../label/label.module */ "./src/app/pure-elements/label/label.module.ts");
/* harmony import */ var _message_message_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../message/message.module */ "./src/app/pure-elements/message/message.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PureFormControlModule = /** @class */ (function () {
    function PureFormControlModule() {
    }
    PureFormControlModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _core__WEBPACK_IMPORTED_MODULE_3__["ComponentNamerModule"].forRoot(),
                _asterisk_asterisk_module__WEBPACK_IMPORTED_MODULE_7__["PureAsteriskModule"],
                _label_label_module__WEBPACK_IMPORTED_MODULE_8__["PureLabelModule"],
                _message_message_module__WEBPACK_IMPORTED_MODULE_9__["PureMessageModule"]
            ],
            declarations: [_form_control__WEBPACK_IMPORTED_MODULE_4__["PureFormControl"], _prefix__WEBPACK_IMPORTED_MODULE_5__["PurePrefix"], _suffix__WEBPACK_IMPORTED_MODULE_6__["PureSuffix"]],
            providers: [_core__WEBPACK_IMPORTED_MODULE_3__["StringFormatter"]],
            exports: [_form_control__WEBPACK_IMPORTED_MODULE_4__["PureFormControl"], _prefix__WEBPACK_IMPORTED_MODULE_5__["PurePrefix"], _suffix__WEBPACK_IMPORTED_MODULE_6__["PureSuffix"]]
        })
    ], PureFormControlModule);
    return PureFormControlModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/form-control/form-control.ts":
/*!************************************************************!*\
  !*** ./src/app/pure-elements/form-control/form-control.ts ***!
  \************************************************************/
/*! exports provided: PureFormControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureFormControl", function() { return PureFormControl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _form_control_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-control-config */ "./src/app/pure-elements/form-control/form-control-config.ts");
/* harmony import */ var _form_control_config_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-control-config-token */ "./src/app/pure-elements/form-control/form-control-config-token.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../label */ "./src/app/pure-elements/label/index.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input */ "./src/app/pure-elements/input/index.ts");
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prefix */ "./src/app/pure-elements/form-control/prefix.ts");
/* harmony import */ var _suffix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./suffix */ "./src/app/pure-elements/form-control/suffix.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../message */ "./src/app/pure-elements/message/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var nextUniqueId = 0;
var PureFormControl = /** @class */ (function (_super) {
    __extends(PureFormControl, _super);
    function PureFormControl(elementRef, componentNamer, config) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.config = config;
        _this.elementName = 'Form Control';
        _this.labelContainerName = 'Label Holder';
        _this.inputContainerName = 'Input Holder';
        _this.toggleName = 'Toggle';
        _this.prefixContainerName = 'Prefix Holder';
        _this.suffixContainerName = 'Suffix Holder';
        _this.messagesContainerName = 'Messages';
        _this.labelContainerClasses = {};
        _this.inputContainerClasses = {};
        _this.toggleClasses = {};
        _this.prefixContainerClasses = {};
        _this.suffixContainerClasses = {};
        _this.messageContainerClasses = {};
        _this.inputStateClasses = {
            disabled: _this.componentNamer.generateClassName(_this.elementName, '', 'disabled'),
            required: _this.componentNamer.generateClassName(_this.elementName, '', 'required'),
            readonly: _this.componentNamer.generateClassName(_this.elementName, '', 'readonly'),
            placeholder: _this.componentNamer.generateClassName(_this.elementName, '', 'has-placeholder'),
            empty: _this.componentNamer.generateClassName(_this.elementName, '', 'empty'),
            focused: _this.componentNamer.generateClassName(_this.elementName, '', 'focused')
        };
        _this.formControlStateClasses = {
            label: _this.componentNamer.generateClassName(_this.elementName, '', 'has-label'),
            prefix: _this.componentNamer.generateClassName(_this.elementName, '', 'has-prefix'),
            suffix: _this.componentNamer.generateClassName(_this.elementName, '', 'has-suffix'),
            message: _this.componentNamer.generateClassName(_this.elementName, '', 'has-message')
        };
        var finalConfig = __assign({}, _form_control_config__WEBPACK_IMPORTED_MODULE_3__["PureFormControlDefaultConfig"], config);
        _this.applyConfig(finalConfig);
        return _this;
    }
    Object.defineProperty(PureFormControl.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            var oldLabel = this.label;
            this._label = String(value);
            this.elementClasses[this.formControlStateClasses.label] = !!this._label;
            if (!oldLabel && this._label) {
                this.setIds();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    PureFormControl.prototype.updateInputStateClasses = function () {
        this.elementClasses[this.inputStateClasses.empty] = this.inputChild.empty;
        this.elementClasses[this.inputStateClasses.focused] = this.inputChild.focused;
        this.elementClasses[this.inputStateClasses.disabled] = this.inputChild.disabled;
        this.elementClasses[this.inputStateClasses.required] = this.inputChild.required;
        this.elementClasses[this.inputStateClasses.readonly] = this.inputChild.readonly;
        this.elementClasses[this.inputStateClasses.placeholder] = !!this.inputChild.placeholder;
    };
    PureFormControl.prototype.setChildrenClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.labelContainerClasses[this.componentNamer.generateClassName(this.elementName, this.labelContainerName)] = flag;
        this.inputContainerClasses[this.componentNamer.generateClassName(this.elementName, this.inputContainerName)] = flag;
        this.toggleClasses[this.componentNamer.generateClassName(this.elementName, this.toggleName)] = flag;
        this.prefixContainerClasses[this.componentNamer.generateClassName(this.elementName, this.prefixContainerName)] = flag;
        this.suffixContainerClasses[this.componentNamer.generateClassName(this.elementName, this.suffixContainerName)] = flag;
        this.messageContainerClasses[this.componentNamer.generateClassName(this.elementName, this.messagesContainerName)] = flag;
    };
    PureFormControl.prototype.setStaticStateClasses = function () {
        this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', this.inputChild.nodeName)] = true;
        this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', this.inputChild.type)] = true;
        this.elementClasses[this.formControlStateClasses.prefix] = this.prefixChildren.length > 0;
        this.elementClasses[this.formControlStateClasses.suffix] = this.suffixChildren.length > 0;
        this.elementClasses[this.formControlStateClasses.message] = this.messageChildren.length > 0;
    };
    PureFormControl.prototype.applyConfig = function (config) {
        for (var key in config) {
            this[key] = config[key];
        }
    };
    PureFormControl.prototype.getId = function () {
        // If PureInput has id — use it. Otherwise, generate new unique ID.
        if (this.inputChild.id) {
            return this.inputChild.id;
        }
        else {
            return this.componentNamer.generateId(nextUniqueId++, this.elementName);
        }
    };
    PureFormControl.prototype.setIds = function () {
        // Get ID from PureInput or generate one.
        this.id = this.getId();
        // Set ID in case PureInput doesn't have it.
        if (this.inputChild.id !== this.id) {
            this.inputChild.id = this.id;
        }
    };
    PureFormControl.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setChildrenClasses();
    };
    PureFormControl.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.setStaticStateClasses();
        if (this.label) {
            this.setIds();
        }
        this.inputChild.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(null)).subscribe(function () {
            _this.updateInputStateClasses();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [Object])
    ], PureFormControl.prototype, "label", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_label__WEBPACK_IMPORTED_MODULE_5__["PureLabel"]),
        __metadata("design:type", _label__WEBPACK_IMPORTED_MODULE_5__["PureLabel"])
    ], PureFormControl.prototype, "labelChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_input__WEBPACK_IMPORTED_MODULE_6__["PureInput"]),
        __metadata("design:type", _input__WEBPACK_IMPORTED_MODULE_6__["PureInput"])
    ], PureFormControl.prototype, "inputChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_prefix__WEBPACK_IMPORTED_MODULE_7__["PurePrefix"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PureFormControl.prototype, "prefixChildren", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_suffix__WEBPACK_IMPORTED_MODULE_8__["PureSuffix"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PureFormControl.prototype, "suffixChildren", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_message__WEBPACK_IMPORTED_MODULE_9__["PureMessage"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PureFormControl.prototype, "messageChildren", void 0);
    PureFormControl = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-form-control',
            template: "\n    <div [ngClass]=\"elementClasses\">\n\n      <pure-label \n        *ngIf=\"label\"\n        [for]=\"id\"\n        [ngClass]=\"labelContainerClasses\"\n        theme=\"form-control\">\n        {{label}}\n\n        <ng-container *ngIf=\"inputChild.required && asteriskPosition === 'label'\">\n          <ng-container *ngTemplateOutlet=\"asterisk\"></ng-container>\n        </ng-container>\n      </pure-label>\n      \n\n      <div [ngClass]=\"inputContainerClasses\">\n        <div *ngIf=\"prefixChildren.length\" [ngClass]=\"prefixContainerClasses\">\n          <ng-content select=\"[purePrefix]\"></ng-content>\n        </div>\n\n        <ng-content select=\"[pureInput]\"></ng-content>\n\n        <span *ngIf=\"inputChild.type === 'checkbox' || inputChild.type === 'radio'\" [ngClass]=\"toggleClasses\"></span>\n\n        <div *ngIf=\"suffixChildren.length\" [ngClass]=\"suffixContainerClasses\">\n          <ng-content select=\"[pureSuffix]\"></ng-content>\n        </div>\n\n        <ng-container *ngIf=\"inputChild.required && asteriskPosition === 'input'\">\n          <ng-container *ngTemplateOutlet=\"asterisk\"></ng-container>\n        </ng-container>\n      </div>\n\n\n      <ng-container *ngIf=\"inputChild.required && asteriskPosition === 'parent'\">\n        <ng-container *ngTemplateOutlet=\"asterisk\"></ng-container>\n      </ng-container>\n\n      <div *ngIf=\"messageChildren.length\" [ngClass]=\"messageContainerClasses\">\n        <ng-content select=\"pure-message\"></ng-content>\n      </div>\n    </div>\n\n\n    <ng-template #asterisk>\n      <pure-asterisk theme=\"form-control\"></pure-asterisk>\n    </ng-template>\n"
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_form_control_config_token__WEBPACK_IMPORTED_MODULE_4__["PureFormControlConfigToken"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamer"], Object])
    ], PureFormControl);
    return PureFormControl;
}(_core__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



/***/ }),

/***/ "./src/app/pure-elements/form-control/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/pure-elements/form-control/index.ts ***!
  \*****************************************************/
/*! exports provided: PureFormControlConfigToken, PureFormControlDefaultConfig, PureFormControlModule, PureFormControl, PurePrefix, PureSuffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/form-control/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControlConfigToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureFormControlConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControlDefaultConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureFormControlDefaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControlModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureFormControlModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControl", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureFormControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PurePrefix", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PurePrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSuffix", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureSuffix"]; });




/***/ }),

/***/ "./src/app/pure-elements/form-control/prefix.ts":
/*!******************************************************!*\
  !*** ./src/app/pure-elements/form-control/prefix.ts ***!
  \******************************************************/
/*! exports provided: PurePrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurePrefix", function() { return PurePrefix; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Prefix to be placed at the beginning of the form control. */
var PurePrefix = /** @class */ (function () {
    function PurePrefix() {
    }
    PurePrefix = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[purePrefix]',
        })
    ], PurePrefix);
    return PurePrefix;
}());



/***/ }),

/***/ "./src/app/pure-elements/form-control/public-api.ts":
/*!**********************************************************!*\
  !*** ./src/app/pure-elements/form-control/public-api.ts ***!
  \**********************************************************/
/*! exports provided: PureFormControlConfigToken, PureFormControlDefaultConfig, PureFormControlModule, PureFormControl, PurePrefix, PureSuffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_control_config_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-control-config-token */ "./src/app/pure-elements/form-control/form-control-config-token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControlConfigToken", function() { return _form_control_config_token__WEBPACK_IMPORTED_MODULE_0__["PureFormControlConfigToken"]; });

/* harmony import */ var _form_control_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-control-config */ "./src/app/pure-elements/form-control/form-control-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControlDefaultConfig", function() { return _form_control_config__WEBPACK_IMPORTED_MODULE_1__["PureFormControlDefaultConfig"]; });

/* harmony import */ var _form_control_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-control.module */ "./src/app/pure-elements/form-control/form-control.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControlModule", function() { return _form_control_module__WEBPACK_IMPORTED_MODULE_2__["PureFormControlModule"]; });

/* harmony import */ var _form_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-control */ "./src/app/pure-elements/form-control/form-control.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControl", function() { return _form_control__WEBPACK_IMPORTED_MODULE_3__["PureFormControl"]; });

/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prefix */ "./src/app/pure-elements/form-control/prefix.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PurePrefix", function() { return _prefix__WEBPACK_IMPORTED_MODULE_4__["PurePrefix"]; });

/* harmony import */ var _suffix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suffix */ "./src/app/pure-elements/form-control/suffix.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSuffix", function() { return _suffix__WEBPACK_IMPORTED_MODULE_5__["PureSuffix"]; });









/***/ }),

/***/ "./src/app/pure-elements/form-control/suffix.ts":
/*!******************************************************!*\
  !*** ./src/app/pure-elements/form-control/suffix.ts ***!
  \******************************************************/
/*! exports provided: PureSuffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureSuffix", function() { return PureSuffix; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Suffix to be placed at the end of the form control. */
var PureSuffix = /** @class */ (function () {
    function PureSuffix() {
    }
    PureSuffix = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pureSuffix]',
        })
    ], PureSuffix);
    return PureSuffix;
}());



/***/ }),

/***/ "./src/app/pure-elements/index.ts":
/*!****************************************!*\
  !*** ./src/app/pure-elements/index.ts ***!
  \****************************************/
/*! exports provided: PureElements, PureAsteriskConfigToken, PureAsteriskDefaultConfig, PureAsteriskModule, PureAsterisk, PureButtonModule, PureButton, PureCollapseModule, PureCollapse, PureCollapseHeader, PureCollapseFooter, PureDropdown, PureDropdownTrigger, PureDropdownItem, PureDropdownModule, PureFormControlConfigToken, PureFormControlDefaultConfig, PureFormControlModule, PureFormControl, PurePrefix, PureSuffix, PureMessageModule, PureMessage, PureLabelModule, PureLabel, PureModalWindowModule, PureModalWindow, PureSwitcherModule, PureSwitcher, PureToastModule, PureToastDefaultOptions, PureToastDefaultOptionsFactory, PureToast, PureToastContainer, PureToastData, PureToastConfig, PureToastRef, PureSimpleToast, PureTooltipModule, PureTooltipDefaultConfig, PureTooltipConfigToken, PureTooltipConfigFactory, PureTooltip, PureTooltipComponent, coerceBooleanProperty, coerceModelValue, mixinDisabled, mixinFocused, PureComponent, mixinStateClasses, ComponentNamer, ComponentNamerConfigToken, ComponentNamerDefaultConfig, ComponentNamerModule, KEY_CODES, EventHandler, StringFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/app/pure-elements/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceModelValue", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["coerceModelValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["mixinDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinFocused", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["mixinFocused"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinStateClasses", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["mixinStateClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamer", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["ComponentNamer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerConfigToken", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["ComponentNamerConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerDefaultConfig", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["ComponentNamerDefaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentNamerModule", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["ComponentNamerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CODES", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["KEY_CODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["EventHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormatter", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["StringFormatter"]; });

/* harmony import */ var _asterisk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asterisk */ "./src/app/pure-elements/asterisk/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskConfigToken", function() { return _asterisk__WEBPACK_IMPORTED_MODULE_1__["PureAsteriskConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskDefaultConfig", function() { return _asterisk__WEBPACK_IMPORTED_MODULE_1__["PureAsteriskDefaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsteriskModule", function() { return _asterisk__WEBPACK_IMPORTED_MODULE_1__["PureAsteriskModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureAsterisk", function() { return _asterisk__WEBPACK_IMPORTED_MODULE_1__["PureAsterisk"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/app/pure-elements/button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureButtonModule", function() { return _button__WEBPACK_IMPORTED_MODULE_2__["PureButtonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureButton", function() { return _button__WEBPACK_IMPORTED_MODULE_2__["PureButton"]; });

/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse */ "./src/app/pure-elements/collapse/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapseModule", function() { return _collapse__WEBPACK_IMPORTED_MODULE_3__["PureCollapseModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapse", function() { return _collapse__WEBPACK_IMPORTED_MODULE_3__["PureCollapse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapseHeader", function() { return _collapse__WEBPACK_IMPORTED_MODULE_3__["PureCollapseHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureCollapseFooter", function() { return _collapse__WEBPACK_IMPORTED_MODULE_3__["PureCollapseFooter"]; });

/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown */ "./src/app/pure-elements/dropdown/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_4__["PureDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdownTrigger", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_4__["PureDropdownTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdownItem", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_4__["PureDropdownItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureDropdownModule", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_4__["PureDropdownModule"]; });

/* harmony import */ var _form_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-control */ "./src/app/pure-elements/form-control/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControlConfigToken", function() { return _form_control__WEBPACK_IMPORTED_MODULE_5__["PureFormControlConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControlDefaultConfig", function() { return _form_control__WEBPACK_IMPORTED_MODULE_5__["PureFormControlDefaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControlModule", function() { return _form_control__WEBPACK_IMPORTED_MODULE_5__["PureFormControlModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureFormControl", function() { return _form_control__WEBPACK_IMPORTED_MODULE_5__["PureFormControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PurePrefix", function() { return _form_control__WEBPACK_IMPORTED_MODULE_5__["PurePrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSuffix", function() { return _form_control__WEBPACK_IMPORTED_MODULE_5__["PureSuffix"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message */ "./src/app/pure-elements/message/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureMessageModule", function() { return _message__WEBPACK_IMPORTED_MODULE_6__["PureMessageModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureMessage", function() { return _message__WEBPACK_IMPORTED_MODULE_6__["PureMessage"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label */ "./src/app/pure-elements/label/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureLabelModule", function() { return _label__WEBPACK_IMPORTED_MODULE_7__["PureLabelModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_7__["PureLabel"]; });

/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-window */ "./src/app/pure-elements/modal-window/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureModalWindowModule", function() { return _modal_window__WEBPACK_IMPORTED_MODULE_8__["PureModalWindowModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureModalWindow", function() { return _modal_window__WEBPACK_IMPORTED_MODULE_8__["PureModalWindow"]; });

/* harmony import */ var _switcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./switcher */ "./src/app/pure-elements/switcher/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSwitcherModule", function() { return _switcher__WEBPACK_IMPORTED_MODULE_9__["PureSwitcherModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSwitcher", function() { return _switcher__WEBPACK_IMPORTED_MODULE_9__["PureSwitcher"]; });

/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toast */ "./src/app/pure-elements/toast/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastModule", function() { return _toast__WEBPACK_IMPORTED_MODULE_10__["PureToastModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastDefaultOptions", function() { return _toast__WEBPACK_IMPORTED_MODULE_10__["PureToastDefaultOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastDefaultOptionsFactory", function() { return _toast__WEBPACK_IMPORTED_MODULE_10__["PureToastDefaultOptionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToast", function() { return _toast__WEBPACK_IMPORTED_MODULE_10__["PureToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastContainer", function() { return _toast__WEBPACK_IMPORTED_MODULE_10__["PureToastContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastData", function() { return _toast__WEBPACK_IMPORTED_MODULE_10__["PureToastData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastConfig", function() { return _toast__WEBPACK_IMPORTED_MODULE_10__["PureToastConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastRef", function() { return _toast__WEBPACK_IMPORTED_MODULE_10__["PureToastRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSimpleToast", function() { return _toast__WEBPACK_IMPORTED_MODULE_10__["PureSimpleToast"]; });

/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tooltip */ "./src/app/pure-elements/tooltip/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipModule", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_11__["PureTooltipModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipDefaultConfig", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_11__["PureTooltipDefaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipConfigToken", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_11__["PureTooltipConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipConfigFactory", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_11__["PureTooltipConfigFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltip", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_11__["PureTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipComponent", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_11__["PureTooltipComponent"]; });

/* harmony import */ var _pure_elements_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pure-elements.module */ "./src/app/pure-elements/pure-elements.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureElements", function() { return _pure_elements_module__WEBPACK_IMPORTED_MODULE_12__["PureElements"]; });

/** Export core code */

/** Export elements */











/** Export main module */



/***/ }),

/***/ "./src/app/pure-elements/input/index.ts":
/*!**********************************************!*\
  !*** ./src/app/pure-elements/input/index.ts ***!
  \**********************************************/
/*! exports provided: PureInput, PureInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/input/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureInput", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureInputModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureInputModule"]; });




/***/ }),

/***/ "./src/app/pure-elements/input/input-errors.ts":
/*!*****************************************************!*\
  !*** ./src/app/pure-elements/input/input-errors.ts ***!
  \*****************************************************/
/*! exports provided: getPureInputUnsupportedTypeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPureInputUnsupportedTypeError", function() { return getPureInputUnsupportedTypeError; });
function getPureInputUnsupportedTypeError(type) {
    return Error("Input type \"" + type + "\" isn't supported by PureInput.");
}


/***/ }),

/***/ "./src/app/pure-elements/input/input.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pure-elements/input/input.module.ts ***!
  \*****************************************************/
/*! exports provided: PureInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureInputModule", function() { return PureInputModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ "./src/app/pure-elements/input/input.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PureInputModule = /** @class */ (function () {
    function PureInputModule() {
    }
    PureInputModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _input__WEBPACK_IMPORTED_MODULE_3__["PureInput"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"].forRoot()
            ],
            exports: [
                _input__WEBPACK_IMPORTED_MODULE_3__["PureInput"]
            ]
        })
    ], PureInputModule);
    return PureInputModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/input/input.ts":
/*!**********************************************!*\
  !*** ./src/app/pure-elements/input/input.ts ***!
  \**********************************************/
/*! exports provided: PureInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureInput", function() { return PureInput; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _input_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-errors */ "./src/app/pure-elements/input/input-errors.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
var PureInputIvalidTypes = [
    'button',
    'file',
    'hidden',
    'image',
    'range',
    'reset',
    'submit'
];
/** Directive that allows a native input to work inside a Pure Form Control. */
var PureInput = /** @class */ (function (_super) {
    __extends(PureInput, _super);
    function PureInput(elementRef, componentNamer, ngControl) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.ngControl = ngControl;
        _this.elementName = 'Input';
        _this.neverEmptyInputTypes = [
            'date',
            'datetime',
            'datetime-local',
            'month',
            'time',
            'week'
        ];
        _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this._disabled = false;
        /** Whether element is focused. */
        _this.focused = false;
        _this._required = false;
        _this._readonly = false;
        _this._checked = false;
        return _this;
    }
    Object.defineProperty(PureInput.prototype, "disabled", {
        /** Whether element is disabled. */
        get: function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_core__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    PureInput.prototype.focus = function () {
        this.elementRef.nativeElement.focus();
        this.onFocusChange(true);
    };
    ;
    PureInput.prototype.blur = function () {
        this.elementRef.nativeElement.blur();
        this.onFocusChange(false);
    };
    Object.defineProperty(PureInput.prototype, "required", {
        /** Whether element is required. */
        get: function () {
            return this._required;
        },
        set: function (value) {
            this._required = Object(_core__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureInput.prototype, "readonly", {
        /** Whether element is readonly. */
        get: function () {
            return this._readonly;
        },
        set: function (value) {
            this._readonly = Object(_core__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureInput.prototype, "value", {
        /** Value of the element. */
        get: function () {
            return this.elementRef.nativeElement.value;
        },
        set: function (value) {
            if (value !== this.value) {
                this.elementRef.nativeElement.value = value;
            }
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureInput.prototype, "empty", {
        /** Checks whether current element has value. */
        get: function () {
            return !this.isNeverEmpty() && !this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureInput.prototype, "checked", {
        /** Checked state for checkbox & radio types. */
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureInput.prototype, "type", {
        /** Input type of the element. */
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value || 'text';
            if (PureInputIvalidTypes.indexOf(this._type) > -1) {
                throw Object(_input_errors__WEBPACK_IMPORTED_MODULE_4__["getPureInputUnsupportedTypeError"])(this._type);
            }
            // When using Angular inputs, developers are no longer able to set the properties on the native
            // input element. To ensure that bindings for `type` work, we need to sync the setter
            // with the native property. Textarea & Select don't support the type attribute.
            if (this.isInput()) {
                this.elementRef.nativeElement.type = this._type;
            }
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureInput.prototype, "nodeName", {
        get: function () {
            return this.elementRef.nativeElement.nodeName.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    PureInput.prototype.onFocusChange = function (value) {
        if (value !== this.focused) {
            this.focused = value;
            this.stateChanges.next();
        }
    };
    PureInput.prototype.onInput = function () {
        this.stateChanges.next();
    };
    /** Checks whether the input type is one of the types that are never empty. */
    PureInput.prototype.isNeverEmpty = function () {
        return this.neverEmptyInputTypes.indexOf(this.type) > -1;
    };
    PureInput.prototype.isInput = function () {
        return this.nodeName === 'input';
    };
    PureInput.prototype.isSelect = function () {
        return this.nodeName === 'select';
    };
    PureInput.prototype.setClassesForHost = function () {
        for (var elementClass in this.elementClasses) {
            if (this.elementClasses[elementClass]) {
                this.elementRef.nativeElement.classList.add(elementClass);
            }
            else {
                this.elementRef.nativeElement.classList.remove(elementClass);
            }
        }
    };
    PureInput.prototype.ngOnChanges = function () {
        if (this.isInitialised) {
            this.stateChanges.next();
        }
    };
    PureInput.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setClassesForHost();
    };
    PureInput.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureInput.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureInput.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Object])
    ], PureInput.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Object])
    ], PureInput.prototype, "required", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Object])
    ], PureInput.prototype, "readonly", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PureInput.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PureInput.prototype, "checked", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PureInput.prototype, "type", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PureInput.prototype, "onInput", null);
    PureInput = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'input[pureInput], textarea[pureInput], select[pureInput]',
            exportAs: 'pureInput',
            host: {
                // Native input properties that are overwritten by Angular inputs need to be synced with
                // the native input element. Otherwise property bindings for those don't work.
                '[attr.id]': 'id',
                '[attr.placeholder]': 'placeholder',
                '[disabled]': 'disabled',
                '[required]': 'required',
                '[attr.readonly]': 'readonly && !isSelect() || null',
                '(focus)': 'onFocusChange(true)',
                '(blur)': 'onFocusChange(false)'
            }
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_3__["ComponentNamer"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]])
    ], PureInput);
    return PureInput;
}(_core__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]));



/***/ }),

/***/ "./src/app/pure-elements/input/public-api.ts":
/*!***************************************************!*\
  !*** ./src/app/pure-elements/input/public-api.ts ***!
  \***************************************************/
/*! exports provided: PureInput, PureInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/app/pure-elements/input/input.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureInput", function() { return _input__WEBPACK_IMPORTED_MODULE_0__["PureInput"]; });

/* harmony import */ var _input_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.module */ "./src/app/pure-elements/input/input.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureInputModule", function() { return _input_module__WEBPACK_IMPORTED_MODULE_1__["PureInputModule"]; });





/***/ }),

/***/ "./src/app/pure-elements/label/index.ts":
/*!**********************************************!*\
  !*** ./src/app/pure-elements/label/index.ts ***!
  \**********************************************/
/*! exports provided: PureLabelModule, PureLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/label/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureLabelModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureLabelModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureLabel", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureLabel"]; });




/***/ }),

/***/ "./src/app/pure-elements/label/label.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pure-elements/label/label.module.ts ***!
  \*****************************************************/
/*! exports provided: PureLabelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureLabelModule", function() { return PureLabelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label */ "./src/app/pure-elements/label/label.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PureLabelModule = /** @class */ (function () {
    function PureLabelModule() {
    }
    PureLabelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"].forRoot()],
            declarations: [_label__WEBPACK_IMPORTED_MODULE_3__["PureLabel"]],
            exports: [_label__WEBPACK_IMPORTED_MODULE_3__["PureLabel"]]
        })
    ], PureLabelModule);
    return PureLabelModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/label/label.ts":
/*!**********************************************!*\
  !*** ./src/app/pure-elements/label/label.ts ***!
  \**********************************************/
/*! exports provided: PureLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureLabel", function() { return PureLabel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PureLabel = /** @class */ (function (_super) {
    __extends(PureLabel, _super);
    function PureLabel(elementRef, componentNamer) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.elementName = 'Label';
        return _this;
    }
    PureLabel.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureLabel.prototype, "for", void 0);
    PureLabel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-label',
            template: "\n    <label \n      [for]=\"for\"\n      [ngClass]=\"elementClasses\">\n      <ng-content></ng-content>\n    </label>\n  "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _core__WEBPACK_IMPORTED_MODULE_1__["ComponentNamer"]])
    ], PureLabel);
    return PureLabel;
}(_core__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./src/app/pure-elements/label/public-api.ts":
/*!***************************************************!*\
  !*** ./src/app/pure-elements/label/public-api.ts ***!
  \***************************************************/
/*! exports provided: PureLabelModule, PureLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _label_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label.module */ "./src/app/pure-elements/label/label.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureLabelModule", function() { return _label_module__WEBPACK_IMPORTED_MODULE_0__["PureLabelModule"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label */ "./src/app/pure-elements/label/label.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_1__["PureLabel"]; });





/***/ }),

/***/ "./src/app/pure-elements/message/index.ts":
/*!************************************************!*\
  !*** ./src/app/pure-elements/message/index.ts ***!
  \************************************************/
/*! exports provided: PureMessageModule, PureMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/message/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureMessageModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureMessageModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureMessage", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureMessage"]; });




/***/ }),

/***/ "./src/app/pure-elements/message/message.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pure-elements/message/message.module.ts ***!
  \*********************************************************/
/*! exports provided: PureMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureMessageModule", function() { return PureMessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./src/app/pure-elements/message/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PureMessageModule = /** @class */ (function () {
    function PureMessageModule() {
    }
    PureMessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"].forRoot()],
            declarations: [_message__WEBPACK_IMPORTED_MODULE_3__["PureMessage"]],
            exports: [_message__WEBPACK_IMPORTED_MODULE_3__["PureMessage"]]
        })
    ], PureMessageModule);
    return PureMessageModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/message/message.ts":
/*!**************************************************!*\
  !*** ./src/app/pure-elements/message/message.ts ***!
  \**************************************************/
/*! exports provided: PureMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureMessage", function() { return PureMessage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PureMessage = /** @class */ (function (_super) {
    __extends(PureMessage, _super);
    function PureMessage(elementRef, componentNamer) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.elementName = 'Message';
        return _this;
    }
    PureMessage.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    PureMessage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-message',
            template: "\n    <p \n      [ngClass]=\"elementClasses\">\n      <ng-content></ng-content>\n    </p>\n  "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _core__WEBPACK_IMPORTED_MODULE_1__["ComponentNamer"]])
    ], PureMessage);
    return PureMessage;
}(_core__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./src/app/pure-elements/message/public-api.ts":
/*!*****************************************************!*\
  !*** ./src/app/pure-elements/message/public-api.ts ***!
  \*****************************************************/
/*! exports provided: PureMessageModule, PureMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.module */ "./src/app/pure-elements/message/message.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureMessageModule", function() { return _message_module__WEBPACK_IMPORTED_MODULE_0__["PureMessageModule"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/app/pure-elements/message/message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureMessage", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["PureMessage"]; });





/***/ }),

/***/ "./src/app/pure-elements/modal-window/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/pure-elements/modal-window/index.ts ***!
  \*****************************************************/
/*! exports provided: PureModalWindowModule, PureModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/modal-window/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureModalWindowModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureModalWindowModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureModalWindow", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureModalWindow"]; });




/***/ }),

/***/ "./src/app/pure-elements/modal-window/modal-window-config-token.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pure-elements/modal-window/modal-window-config-token.ts ***!
  \*************************************************************************/
/*! exports provided: PureModalWindowConfigToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureModalWindowConfigToken", function() { return PureModalWindowConfigToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var PureModalWindowConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PureModalWindowConfig');


/***/ }),

/***/ "./src/app/pure-elements/modal-window/modal-window-config.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pure-elements/modal-window/modal-window-config.ts ***!
  \*******************************************************************/
/*! exports provided: PureModalWindowDefaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureModalWindowDefaultConfig", function() { return PureModalWindowDefaultConfig; });
;
var PureModalWindowDefaultConfig = {
    closeOnEsc: true,
    openAnimationDuration: 0,
    closeAnimationDuration: 0
};


/***/ }),

/***/ "./src/app/pure-elements/modal-window/modal-window.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pure-elements/modal-window/modal-window.module.ts ***!
  \*******************************************************************/
/*! exports provided: PureModalWindowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureModalWindowModule", function() { return PureModalWindowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-window */ "./src/app/pure-elements/modal-window/modal-window.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PureModalWindowModule = /** @class */ (function () {
    function PureModalWindowModule() {
    }
    PureModalWindowModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"].forRoot()],
            declarations: [_modal_window__WEBPACK_IMPORTED_MODULE_3__["PureModalWindow"]],
            exports: [_modal_window__WEBPACK_IMPORTED_MODULE_3__["PureModalWindow"]]
        })
    ], PureModalWindowModule);
    return PureModalWindowModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/modal-window/modal-window.ts":
/*!************************************************************!*\
  !*** ./src/app/pure-elements/modal-window/modal-window.ts ***!
  \************************************************************/
/*! exports provided: PureModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureModalWindow", function() { return PureModalWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _modal_window_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-window-config */ "./src/app/pure-elements/modal-window/modal-window-config.ts");
/* harmony import */ var _modal_window_config_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-window-config-token */ "./src/app/pure-elements/modal-window/modal-window-config-token.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// Boilerplate for applying mixins to PureModalWindow.
var PureModalWindowBase = /** @class */ (function (_super) {
    __extends(PureModalWindowBase, _super);
    function PureModalWindowBase(elementRef, componentNamer) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        return _this;
    }
    return PureModalWindowBase;
}(_core__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
var PureModalWindowBaseMixin = Object(_core__WEBPACK_IMPORTED_MODULE_1__["mixinStateClasses"])(PureModalWindowBase);
var PureModalWindow = /** @class */ (function (_super) {
    __extends(PureModalWindow, _super);
    function PureModalWindow(elementRef, componentNamer, userConfig) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.userConfig = userConfig;
        _this.elementName = 'Modal Window';
        _this.backdropName = 'Backdrop';
        _this.contentName = 'Content';
        _this.contentContainerName = 'Content Container';
        _this.backdropClasses = {};
        _this.contentClasses = {};
        _this.states = {
            show: {
                class: _this.componentNamer.generateClassName(_this.elementName, '', 'shown'),
                isActive: false
            }
        };
        _this.showChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._show = false;
        _this.keyListenerBound = _this.keyListener.bind(_this);
        _this.config = __assign({}, _modal_window_config__WEBPACK_IMPORTED_MODULE_2__["PureModalWindowDefaultConfig"], userConfig);
        _this.closeOnEsc = _this.config.closeOnEsc;
        _this.openAnimationDuration = _this.config.openAnimationDuration;
        _this.closeAnimationDuration = _this.config.closeAnimationDuration;
        return _this;
    }
    Object.defineProperty(PureModalWindow.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            var _this = this;
            var previousValue = this.show;
            this._show = Object(_core__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this.updateState('show', this._show);
            this.setStateClasses();
            this.showChange.emit(value);
            if (this._show) {
                setTimeout(function () {
                    _this.open.emit();
                }, this.openAnimationDuration);
            }
            else {
                // Prevent close event emitting on initialisation when falsy value is set
                if (previousValue) {
                    setTimeout(function () {
                        _this.close.emit();
                    }, this.closeAnimationDuration);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PureModalWindow.prototype.keyListener = function (event) {
        if (this.closeOnEsc && this.show && event.which === _core__WEBPACK_IMPORTED_MODULE_1__["KEY_CODES"].ESCAPE) {
            this.show = false;
        }
    };
    PureModalWindow.prototype.setBackdropClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.backdropClasses[this.componentNamer.generateClassName(this.elementName, this.backdropName)] = flag;
    };
    PureModalWindow.prototype.setContentClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.contentClasses[this.componentNamer.generateClassName(this.elementName, this.contentName)] = flag;
    };
    PureModalWindow.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setBackdropClasses();
        this.setContentClasses();
    };
    PureModalWindow.prototype.ngAfterViewInit = function () {
        document.addEventListener('keyup', this.keyListenerBound);
    };
    PureModalWindow.prototype.ngOnDestroy = function () {
        document.removeEventListener('keyup', this.keyListenerBound);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PureModalWindow.prototype, "closeOnEsc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PureModalWindow.prototype, "openAnimationDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PureModalWindow.prototype, "closeAnimationDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PureModalWindow.prototype, "showChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PureModalWindow.prototype, "open", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PureModalWindow.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PureModalWindow.prototype, "show", null);
    PureModalWindow = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-modal-window',
            template: "\n    <div \n      [ngClass]=\"elementClasses\">\n      \n      <div \n        [ngClass]=\"backdropClasses\" \n        (click)=\"show = false\">\n      </div>\n\n      <div \n        [ngClass]=\"contentClasses\">\n      \n        <input \n          autofocus=\"true\" \n          hidden/>\n      \n        <ng-content></ng-content>\n      </div>\n    </div>\n  "
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_modal_window_config_token__WEBPACK_IMPORTED_MODULE_3__["PureModalWindowConfigToken"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_1__["ComponentNamer"], Object])
    ], PureModalWindow);
    return PureModalWindow;
}(PureModalWindowBaseMixin));



/***/ }),

/***/ "./src/app/pure-elements/modal-window/public-api.ts":
/*!**********************************************************!*\
  !*** ./src/app/pure-elements/modal-window/public-api.ts ***!
  \**********************************************************/
/*! exports provided: PureModalWindowModule, PureModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_window_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-window.module */ "./src/app/pure-elements/modal-window/modal-window.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureModalWindowModule", function() { return _modal_window_module__WEBPACK_IMPORTED_MODULE_0__["PureModalWindowModule"]; });

/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-window */ "./src/app/pure-elements/modal-window/modal-window.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureModalWindow", function() { return _modal_window__WEBPACK_IMPORTED_MODULE_1__["PureModalWindow"]; });





/***/ }),

/***/ "./src/app/pure-elements/pure-elements.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pure-elements/pure-elements.module.ts ***!
  \*******************************************************/
/*! exports provided: PureElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureElements", function() { return PureElements; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asterisk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asterisk */ "./src/app/pure-elements/asterisk/index.ts");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/app/pure-elements/button/index.ts");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse */ "./src/app/pure-elements/collapse/index.ts");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown */ "./src/app/pure-elements/dropdown/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/app/pure-elements/message/index.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./label */ "./src/app/pure-elements/label/index.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input */ "./src/app/pure-elements/input/index.ts");
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-window */ "./src/app/pure-elements/modal-window/index.ts");
/* harmony import */ var _form_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-control */ "./src/app/pure-elements/form-control/index.ts");
/* harmony import */ var _switcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./switcher */ "./src/app/pure-elements/switcher/index.ts");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toast */ "./src/app/pure-elements/toast/index.ts");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tooltip */ "./src/app/pure-elements/tooltip/index.ts");
/* harmony import */ var _core_component_namer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/component-namer */ "./src/app/pure-elements/core/component-namer/index.ts");
/* harmony import */ var _core_string_formatter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/string-formatter */ "./src/app/pure-elements/core/string-formatter/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var PureElements = /** @class */ (function () {
    function PureElements() {
    }
    PureElements = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _core_component_namer__WEBPACK_IMPORTED_MODULE_13__["ComponentNamerModule"].forRoot()
            ],
            exports: [
                _asterisk__WEBPACK_IMPORTED_MODULE_1__["PureAsteriskModule"],
                _button__WEBPACK_IMPORTED_MODULE_2__["PureButtonModule"],
                _collapse__WEBPACK_IMPORTED_MODULE_3__["PureCollapseModule"],
                _dropdown__WEBPACK_IMPORTED_MODULE_4__["PureDropdownModule"],
                _message__WEBPACK_IMPORTED_MODULE_5__["PureMessageModule"],
                _label__WEBPACK_IMPORTED_MODULE_6__["PureLabelModule"],
                _modal_window__WEBPACK_IMPORTED_MODULE_8__["PureModalWindowModule"],
                _form_control__WEBPACK_IMPORTED_MODULE_9__["PureFormControlModule"],
                _switcher__WEBPACK_IMPORTED_MODULE_10__["PureSwitcherModule"],
                _toast__WEBPACK_IMPORTED_MODULE_11__["PureToastModule"],
                _tooltip__WEBPACK_IMPORTED_MODULE_12__["PureTooltipModule"],
                _input__WEBPACK_IMPORTED_MODULE_7__["PureInputModule"]
            ],
            providers: [
                _core_string_formatter__WEBPACK_IMPORTED_MODULE_14__["StringFormatter"],
                _toast__WEBPACK_IMPORTED_MODULE_11__["PureToast"]
            ]
        })
    ], PureElements);
    return PureElements;
}());



/***/ }),

/***/ "./src/app/pure-elements/switcher/index.ts":
/*!*************************************************!*\
  !*** ./src/app/pure-elements/switcher/index.ts ***!
  \*************************************************/
/*! exports provided: PureSwitcherModule, PureSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/switcher/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSwitcherModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureSwitcherModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSwitcher", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureSwitcher"]; });




/***/ }),

/***/ "./src/app/pure-elements/switcher/public-api.ts":
/*!******************************************************!*\
  !*** ./src/app/pure-elements/switcher/public-api.ts ***!
  \******************************************************/
/*! exports provided: PureSwitcherModule, PureSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switcher_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switcher.module */ "./src/app/pure-elements/switcher/switcher.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSwitcherModule", function() { return _switcher_module__WEBPACK_IMPORTED_MODULE_0__["PureSwitcherModule"]; });

/* harmony import */ var _switcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switcher */ "./src/app/pure-elements/switcher/switcher.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSwitcher", function() { return _switcher__WEBPACK_IMPORTED_MODULE_1__["PureSwitcher"]; });





/***/ }),

/***/ "./src/app/pure-elements/switcher/switcher.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pure-elements/switcher/switcher.module.ts ***!
  \***********************************************************/
/*! exports provided: PureSwitcherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureSwitcherModule", function() { return PureSwitcherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _switcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switcher */ "./src/app/pure-elements/switcher/switcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PureSwitcherModule = /** @class */ (function () {
    function PureSwitcherModule() {
    }
    PureSwitcherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"].forRoot()],
            declarations: [_switcher__WEBPACK_IMPORTED_MODULE_3__["PureSwitcher"]],
            exports: [_switcher__WEBPACK_IMPORTED_MODULE_3__["PureSwitcher"]]
        })
    ], PureSwitcherModule);
    return PureSwitcherModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/switcher/switcher.ts":
/*!****************************************************!*\
  !*** ./src/app/pure-elements/switcher/switcher.ts ***!
  \****************************************************/
/*! exports provided: PureSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureSwitcher", function() { return PureSwitcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var nextUniqueId = 0;
var PureSwitcher = /** @class */ (function (_super) {
    __extends(PureSwitcher, _super);
    function PureSwitcher(elementRef, componentNamer) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.elementName = 'Switcher';
        _this.inputName = 'Input';
        _this.toggleContainerName = 'Toggle Container';
        _this.toggleName = 'Toggle';
        _this.labelContentName = 'Label Content';
        _this.inputClasses = {};
        _this.toggleContainerClasses = {};
        _this.toggleClasses = {};
        _this.labelContentClasses = {};
        _this.checkedClassName = _this.componentNamer.generateClassName(_this.elementName, '', 'checked');
        _this.disabledClassName = _this.componentNamer.generateClassName(_this.elementName, '', 'disabled');
        _this.requiredClassName = _this.componentNamer.generateClassName(_this.elementName, '', 'required');
        _this._checked = false;
        _this._disabled = false;
        _this._required = false;
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.id = _this.componentNamer.generateId(nextUniqueId, _this.elementName);
        return _this;
    }
    Object.defineProperty(PureSwitcher.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = Object(_core__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this.elementClasses[this.checkedClassName] = this._checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureSwitcher.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_core__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this.elementClasses[this.disabledClassName] = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureSwitcher.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (value) {
            this._required = Object(_core__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this.elementClasses[this.requiredClassName] = this._required;
        },
        enumerable: true,
        configurable: true
    });
    PureSwitcher.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    PureSwitcher.prototype.onChange = function (event) {
        event.stopPropagation();
        this.checked = this.inputElement.nativeElement.checked;
        this.change.emit(event);
    };
    PureSwitcher.prototype.setInnerElementsClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.inputClasses[this.componentNamer.generateClassName(this.elementName, this.inputName)] = flag;
        this.toggleContainerClasses[this.componentNamer.generateClassName(this.elementName, this.toggleContainerName)] = flag;
        this.toggleClasses[this.componentNamer.generateClassName(this.elementName, this.toggleName)] = flag;
        this.labelContentClasses[this.componentNamer.generateClassName(this.elementName, this.labelContentName)] = flag;
    };
    PureSwitcher.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setInnerElementsClasses();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PureSwitcher.prototype, "inputElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureSwitcher.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PureSwitcher.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Object])
    ], PureSwitcher.prototype, "checked", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Object])
    ], PureSwitcher.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Object])
    ], PureSwitcher.prototype, "required", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PureSwitcher.prototype, "change", void 0);
    PureSwitcher = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-switcher',
            template: "\n    <label \n      [for]=\"id\"\n      [ngClass]=\"elementClasses\">\n\n      <input \n        type=\"checkbox\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [id]=\"id\"\n        [attr.name]=\"name\"\n        [required]=\"required\"\n        [ngClass]=\"inputClasses\"\n        (change)=\"onChange($event)\"\n        #input>\n\n      <div\n        [ngClass]=\"toggleContainerClasses\">\n\n        <div\n          [ngClass]=\"toggleClasses\">\n        </div>\n      </div>\n\n      <span\n        [ngClass]=\"labelContentClasses\">\n\n        <ng-content></ng-content>\n      </span>\n    </label>\n  "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _core__WEBPACK_IMPORTED_MODULE_1__["ComponentNamer"]])
    ], PureSwitcher);
    return PureSwitcher;
}(_core__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./src/app/pure-elements/toast/index.ts":
/*!**********************************************!*\
  !*** ./src/app/pure-elements/toast/index.ts ***!
  \**********************************************/
/*! exports provided: PureToastModule, PureToastDefaultOptions, PureToastDefaultOptionsFactory, PureToast, PureToastContainer, PureToastData, PureToastConfig, PureToastRef, PureSimpleToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/toast/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureToastModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastDefaultOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureToastDefaultOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastDefaultOptionsFactory", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureToastDefaultOptionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToast", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastContainer", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureToastContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastData", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureToastData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureToastConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureToastRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSimpleToast", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureSimpleToast"]; });




/***/ }),

/***/ "./src/app/pure-elements/toast/public-api.ts":
/*!***************************************************!*\
  !*** ./src/app/pure-elements/toast/public-api.ts ***!
  \***************************************************/
/*! exports provided: PureToastModule, PureToastDefaultOptions, PureToastDefaultOptionsFactory, PureToast, PureToastContainer, PureToastData, PureToastConfig, PureToastRef, PureSimpleToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toast_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast-module */ "./src/app/pure-elements/toast/toast-module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastModule", function() { return _toast_module__WEBPACK_IMPORTED_MODULE_0__["PureToastModule"]; });

/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast */ "./src/app/pure-elements/toast/toast.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastDefaultOptions", function() { return _toast__WEBPACK_IMPORTED_MODULE_1__["PureToastDefaultOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastDefaultOptionsFactory", function() { return _toast__WEBPACK_IMPORTED_MODULE_1__["PureToastDefaultOptionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToast", function() { return _toast__WEBPACK_IMPORTED_MODULE_1__["PureToast"]; });

/* harmony import */ var _toast_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast-container */ "./src/app/pure-elements/toast/toast-container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastContainer", function() { return _toast_container__WEBPACK_IMPORTED_MODULE_2__["PureToastContainer"]; });

/* harmony import */ var _toast_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast-config */ "./src/app/pure-elements/toast/toast-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastData", function() { return _toast_config__WEBPACK_IMPORTED_MODULE_3__["PureToastData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastConfig", function() { return _toast_config__WEBPACK_IMPORTED_MODULE_3__["PureToastConfig"]; });

/* harmony import */ var _toast_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast-ref */ "./src/app/pure-elements/toast/toast-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureToastRef", function() { return _toast_ref__WEBPACK_IMPORTED_MODULE_4__["PureToastRef"]; });

/* harmony import */ var _simple_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-toast */ "./src/app/pure-elements/toast/simple-toast.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureSimpleToast", function() { return _simple_toast__WEBPACK_IMPORTED_MODULE_5__["PureSimpleToast"]; });









/***/ }),

/***/ "./src/app/pure-elements/toast/simple-toast.ts":
/*!*****************************************************!*\
  !*** ./src/app/pure-elements/toast/simple-toast.ts ***!
  \*****************************************************/
/*! exports provided: PureSimpleToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureSimpleToast", function() { return PureSimpleToast; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toast_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast-ref */ "./src/app/pure-elements/toast/toast-ref.ts");
/* harmony import */ var _toast_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast-config */ "./src/app/pure-elements/toast/toast-config.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PureSimpleToast = /** @class */ (function (_super) {
    __extends(PureSimpleToast, _super);
    function PureSimpleToast(elementRef, componentNamer, toastRef, data) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.toastRef = toastRef;
        _this.elementName = 'Toast';
        _this.contentName = 'Content';
        _this.titleName = 'Title';
        _this.messageName = 'Message';
        _this.actionPanelName = 'Action Panel';
        _this.contentClasses = {};
        _this.titleClasses = {};
        _this.messageClasses = {};
        _this.actionPanelClasses = {};
        _this.data = data;
        return _this;
    }
    PureSimpleToast.prototype.action = function () {
        this.toastRef.dismissWithAction();
    };
    Object.defineProperty(PureSimpleToast.prototype, "hasAction", {
        /** If the action panel should be shown. */
        get: function () {
            return !!this.data.action;
        },
        enumerable: true,
        configurable: true
    });
    PureSimpleToast.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.contentClasses[this.componentNamer.generateClassName(this.elementName, this.contentName)] = true;
        this.titleClasses[this.componentNamer.generateClassName(this.elementName, this.titleName)] = true;
        this.messageClasses[this.componentNamer.generateClassName(this.elementName, this.messageName)] = true;
        this.actionPanelClasses[this.componentNamer.generateClassName(this.elementName, this.actionPanelName)] = true;
    };
    PureSimpleToast = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-toast',
            template: "\n    <div [ngClass]=\"elementClasses\">\n      <span [ngClass]=\"contentClasses\">\n        <h5 *ngIf=\"data.title\" [ngClass]=\"titleClasses\">{{data.title}}</h5>\n        <p *ngIf=\"data.message\" [ngClass]=\"messageClasses\">{{data.message}}</p>\n      </span>\n\n      <span *ngIf=\"hasAction\" [ngClass]=\"actionPanelClasses\">\n        <pure-button theme=\"toast\" (onClick)=\"action()\">{{data.action}}</pure-button>\n      </span>\n    </div>"
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_toast_config__WEBPACK_IMPORTED_MODULE_2__["PureToastData"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_3__["ComponentNamer"],
            _toast_ref__WEBPACK_IMPORTED_MODULE_1__["PureToastRef"], Object])
    ], PureSimpleToast);
    return PureSimpleToast;
}(_core__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]));



/***/ }),

/***/ "./src/app/pure-elements/toast/toast-config.ts":
/*!*****************************************************!*\
  !*** ./src/app/pure-elements/toast/toast-config.ts ***!
  \*****************************************************/
/*! exports provided: PureToastData, PureToastConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureToastData", function() { return PureToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureToastConfig", function() { return PureToastConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var PureToastData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PureToastData');
var PureToastConfig = /** @class */ (function () {
    function PureToastConfig() {
        /** The length of time in milliseconds to wait before automatically dismissing the toast. */
        this.duration = 3000;
        /** The length of time in milliseconds to wait before CSS exit transition is done. */
        this.cssTransitionDuration = 0;
        /** Data being injected into the child component. */
        this.data = null;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
    }
    return PureToastConfig;
}());



/***/ }),

/***/ "./src/app/pure-elements/toast/toast-container.ts":
/*!********************************************************!*\
  !*** ./src/app/pure-elements/toast/toast-container.ts ***!
  \********************************************************/
/*! exports provided: PureToastContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureToastContainer", function() { return PureToastContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _toast_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast-config */ "./src/app/pure-elements/toast/toast-config.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Internal component that wraps user-provided toast content.
 */
var PureToastContainer = /** @class */ (function (_super) {
    __extends(PureToastContainer, _super);
    function PureToastContainer(ngZone, elementRef, changeDetectorRef, toastConfig, componentNamer) {
        var _this = _super.call(this) || this;
        _this.ngZone = ngZone;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.toastConfig = toastConfig;
        _this.componentNamer = componentNamer;
        _this.elementName = 'Toast Container';
        _this.isDestroyed = false;
        _this.elementClasses = {};
        /** Subject for notifying that the toast has exited from view. */
        _this.onExit = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Subject for notifying that the toast has finished entering the view. */
        _this.onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.elementClasses[_this.componentNamer.generateClassName(_this.elementName)] = true;
        return _this;
    }
    /** Attach a component portal as content to this toast container. */
    PureToastContainer.prototype.attachComponentPortal = function (portal) {
        this.assertNotAttached();
        this.applyToastClasses();
        return this.portalOutlet.attachComponentPortal(portal);
    };
    /** Attach a template portal as content to this toast container. */
    PureToastContainer.prototype.attachTemplatePortal = function (portal) {
        this.assertNotAttached();
        this.applyToastClasses();
        return this.portalOutlet.attachTemplatePortal(portal);
    };
    /** Handle end of animations, updating the state of the toast. */
    PureToastContainer.prototype.onAnimationEnd = function () {
        this.completeExit();
        var onEnter = this.onEnter;
        this.ngZone.run(function () {
            onEnter.next();
            onEnter.complete();
        });
    };
    /** Begin animation of toast entrance into view. */
    PureToastContainer.prototype.enter = function () {
        if (!this.isDestroyed) {
            this.setElementVisibility(true);
            this.changeDetectorRef.detectChanges();
        }
    };
    /** Begin animation of the toast exiting from view. */
    PureToastContainer.prototype.exit = function () {
        var _this = this;
        this.setElementVisibility(false);
        setTimeout(function () {
            _this.onAnimationEnd();
        }, this.toastConfig.cssTransitionDuration);
        return this.onExit;
    };
    PureToastContainer.prototype.setElementVisibility = function (flag) {
        this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', 'visible')] = flag;
    };
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     */
    PureToastContainer.prototype.completeExit = function () {
        var _this = this;
        this.ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
            _this.onExit.next();
            _this.onExit.complete();
        });
    };
    PureToastContainer.prototype.applyToastClasses = function () {
        var element = this.elementRef.nativeElement;
        var containerExtraClasses = this.toastConfig.containerExtraClass;
        if (containerExtraClasses) {
            if (Array.isArray(containerExtraClasses)) {
                containerExtraClasses.forEach(function (cssClass) { return element.classList.add(cssClass); });
            }
            else {
                element.classList.add(containerExtraClasses);
            }
        }
        this.setPositionClasses();
    };
    PureToastContainer.prototype.setPositionClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', 'h-' + this.toastConfig.horizontalPosition)] = flag;
        this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', 'v-' + this.toastConfig.verticalPosition)] = flag;
    };
    PureToastContainer.prototype.assertNotAttached = function () {
        if (this.portalOutlet.hasAttached()) {
            throw Error('Attempting to attach toast content after content is already attached');
        }
    };
    PureToastContainer.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.completeExit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]),
        __metadata("design:type", _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"])
    ], PureToastContainer.prototype, "portalOutlet", void 0);
    PureToastContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pure-toast-container',
            template: "\n    <div\n      [ngClass]=\"elementClasses\">\n      <ng-container cdkPortalOutlet></ng-container>\n    </div>"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _toast_config__WEBPACK_IMPORTED_MODULE_4__["PureToastConfig"],
            _core__WEBPACK_IMPORTED_MODULE_5__["ComponentNamer"]])
    ], PureToastContainer);
    return PureToastContainer;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]));



/***/ }),

/***/ "./src/app/pure-elements/toast/toast-module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pure-elements/toast/toast-module.ts ***!
  \*****************************************************/
/*! exports provided: PureToastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureToastModule", function() { return PureToastModule; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _simple_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-toast */ "./src/app/pure-elements/toast/simple-toast.ts");
/* harmony import */ var _toast_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toast-container */ "./src/app/pure-elements/toast/toast-container.ts");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button */ "./src/app/pure-elements/button/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PureToastModule = /** @class */ (function () {
    function PureToastModule() {
    }
    PureToastModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _button__WEBPACK_IMPORTED_MODULE_7__["PureButtonModule"],
                _core__WEBPACK_IMPORTED_MODULE_4__["ComponentNamerModule"],
            ],
            exports: [_toast_container__WEBPACK_IMPORTED_MODULE_6__["PureToastContainer"], _core__WEBPACK_IMPORTED_MODULE_4__["ComponentNamerModule"]],
            declarations: [_toast_container__WEBPACK_IMPORTED_MODULE_6__["PureToastContainer"], _simple_toast__WEBPACK_IMPORTED_MODULE_5__["PureSimpleToast"]],
            entryComponents: [_toast_container__WEBPACK_IMPORTED_MODULE_6__["PureToastContainer"], _simple_toast__WEBPACK_IMPORTED_MODULE_5__["PureSimpleToast"]],
        })
    ], PureToastModule);
    return PureToastModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/toast/toast-ref.ts":
/*!**************************************************!*\
  !*** ./src/app/pure-elements/toast/toast-ref.ts ***!
  \**************************************************/
/*! exports provided: PureToastRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureToastRef", function() { return PureToastRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/**
 * Reference to a toast dispatched from the toast service.
 */
var PureToastRef = /** @class */ (function () {
    function PureToastRef(containerInstance, _overlayRef) {
        var _this = this;
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the toast has been dismissed. */
        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** Subject for notifying the user that the toast has opened and appeared. */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** Subject for notifying the user that the toast action was called. */
        this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** Whether the toast was dismissed using the action button. */
        this._dismissedByAction = false;
        this.containerInstance = containerInstance;
        // Dismiss toast on action.
        this.onAction().subscribe(function () { return _this.dismiss(); });
        containerInstance.onExit.subscribe(function () { return _this.finishDismiss(); });
    }
    PureToastRef.prototype.dismiss = function () {
        if (!this._afterDismissed.closed) {
            this.containerInstance.exit();
        }
        clearTimeout(this.durationTimeoutId);
    };
    /** Marks the toast action clicked. */
    PureToastRef.prototype.dismissWithAction = function () {
        if (!this._onAction.closed) {
            this._dismissedByAction = true;
            this._onAction.next();
            this._onAction.complete();
        }
    };
    /** Dismisses the toast after some duration */
    PureToastRef.prototype.dismissAfter = function (duration) {
        var _this = this;
        this.durationTimeoutId = setTimeout(function () {
            _this.dismiss();
        }, duration);
    };
    /** Marks the toast as opened */
    PureToastRef.prototype.open = function () {
        if (!this._afterOpened.closed) {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    };
    /** Cleans up the DOM after closing. */
    PureToastRef.prototype.finishDismiss = function () {
        this._overlayRef.dispose();
        if (!this._onAction.closed) {
            this._onAction.complete();
        }
        this._afterDismissed.next({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.complete();
        this._dismissedByAction = false;
    };
    /** Gets an observable that is notified when the toast is finished closing. */
    PureToastRef.prototype.afterDismissed = function () {
        return this._afterDismissed.asObservable();
    };
    /** Gets an observable that is notified when the toast has opened and appeared. */
    PureToastRef.prototype.afterOpened = function () {
        return this.containerInstance.onEnter;
    };
    /** Gets an observable that is notified when the toast action is called. */
    PureToastRef.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return PureToastRef;
}());



/***/ }),

/***/ "./src/app/pure-elements/toast/toast.ts":
/*!**********************************************!*\
  !*** ./src/app/pure-elements/toast/toast.ts ***!
  \**********************************************/
/*! exports provided: PureToastDefaultOptions, PureToastDefaultOptionsFactory, PureToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureToastDefaultOptions", function() { return PureToastDefaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureToastDefaultOptionsFactory", function() { return PureToastDefaultOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureToast", function() { return PureToast; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _simple_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-toast */ "./src/app/pure-elements/toast/simple-toast.ts");
/* harmony import */ var _toast_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-config */ "./src/app/pure-elements/toast/toast-config.ts");
/* harmony import */ var _toast_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toast-container */ "./src/app/pure-elements/toast/toast-container.ts");
/* harmony import */ var _toast_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toast-module */ "./src/app/pure-elements/toast/toast-module.ts");
/* harmony import */ var _toast_ref__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toast-ref */ "./src/app/pure-elements/toast/toast-ref.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var PureToastDefaultOptions = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('pure-toast-default-options', {
    providedIn: 'root',
    factory: PureToastDefaultOptionsFactory,
});
function PureToastDefaultOptionsFactory() {
    return new _toast_config__WEBPACK_IMPORTED_MODULE_5__["PureToastConfig"]();
}
/**
 * Service to dispatch toast messages.
 */
var PureToast = /** @class */ (function () {
    function PureToast(overlay, injector, breakpointObserver, parentToast, defaultConfig) {
        this.overlay = overlay;
        this.injector = injector;
        this.breakpointObserver = breakpointObserver;
        this.parentToast = parentToast;
        this.defaultConfig = defaultConfig;
        /**
         * Reference to the current toast in the view *at this level* (in the Angular injector tree).
         * If there is a parent toast service, all operations should delegate to that parent
         * via `_openedToastRef`.
         */
        this._toastRefAtThisLevel = null;
    }
    Object.defineProperty(PureToast.prototype, "_openedToastRef", {
        /** Reference to the currently opened snackbar at *any* level. */
        get: function () {
            var parent = this.parentToast;
            return parent ? parent._openedToastRef : this._toastRefAtThisLevel;
        },
        set: function (value) {
            if (this.parentToast) {
                this.parentToast._openedToastRef = value;
            }
            else {
                this._toastRefAtThisLevel = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates and dispatches a toast with a custom component for the content, removing any
     * currently opened toasts.
     */
    PureToast.prototype.openFromComponent = function (component, config) {
        return this.attach(component, config);
    };
    /**
     * Creates and dispatches a toast with a custom template for the content, removing any
     * currently opened toasts.
     */
    PureToast.prototype.openFromTemplate = function (template, config) {
        return this.attach(template, config);
    };
    /**
     * Opens a snackbar with a message and an optional action.
     */
    PureToast.prototype.open = function (message, action, config) {
        if (action === void 0) { action = ''; }
        var _config = __assign({}, this.defaultConfig, config);
        _config.data = { message: message, action: action };
        return this.openFromComponent(_simple_toast__WEBPACK_IMPORTED_MODULE_4__["PureSimpleToast"], _config);
    };
    /**
     * Dismisses the currently-visible toast.
     */
    PureToast.prototype.dismiss = function () {
        if (this._openedToastRef) {
            this._openedToastRef.dismiss();
        }
    };
    /**
     * Attaches the toast container component to the overlay.
     */
    PureToast.prototype.attachToastContainer = function (overlayRef, config) {
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalInjector"](userInjector || this.injector, new WeakMap([
            [_toast_config__WEBPACK_IMPORTED_MODULE_5__["PureToastConfig"], config]
        ]));
        var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_toast_container__WEBPACK_IMPORTED_MODULE_6__["PureToastContainer"], config.viewContainerRef, injector);
        var containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.toastConfig = config;
        return containerRef.instance;
    };
    /**
     * Places a new component or a template as the content of the toast container.
     */
    PureToast.prototype.attach = function (content, userConfig) {
        var config = __assign({}, new _toast_config__WEBPACK_IMPORTED_MODULE_5__["PureToastConfig"](), this.defaultConfig, userConfig);
        var overlayRef = this.createOverlay(config);
        var container = this.attachToastContainer(overlayRef, config);
        var toastRef = new _toast_ref__WEBPACK_IMPORTED_MODULE_8__["PureToastRef"](container, overlayRef);
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]) {
            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](content, null, {
                $implicit: config.data,
                toastRef: toastRef
            });
            toastRef.instance = container.attachTemplatePortal(portal);
        }
        else {
            var injector = this.createInjector(config, toastRef);
            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](content, undefined, injector);
            var contentRef = container.attachComponentPortal(portal);
            // We can't pass this via the injector, because the injector is created earlier.
            toastRef.instance = contentRef.instance;
        }
        this.animateToast(toastRef, config);
        this._openedToastRef = toastRef;
        return this._openedToastRef;
    };
    /** Animates the old toast out and the new one in. */
    PureToast.prototype.animateToast = function (toastRef, config) {
        var _this = this;
        // When the snackbar is dismissed, clear the reference to it.
        toastRef.afterDismissed().subscribe(function () {
            // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
            if (_this._openedToastRef == toastRef) {
                _this._openedToastRef = null;
            }
        });
        if (this._openedToastRef) {
            // If a toast is already in view, dismiss it and enter the
            // new toast after exit animation is complete.
            this._openedToastRef.afterDismissed().subscribe(function () {
                toastRef.containerInstance.enter();
            });
            this._openedToastRef.dismiss();
        }
        else {
            // If no toast is in view, enter the new toast.
            toastRef.containerInstance.enter();
        }
        // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
        if (config.duration && config.duration > 0) {
            toastRef.dismissAfter(config.duration);
        }
    };
    /**
     * Creates a new overlay and places it in the correct location.
     */
    PureToast.prototype.createOverlay = function (config) {
        var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]();
        var positionStrategy = this.overlay.position().global();
        // Set horizontal position.
        var isLeft = config.horizontalPosition === 'left';
        var isRight = !isLeft && config.horizontalPosition !== 'center';
        if (isLeft) {
            positionStrategy.left('0');
        }
        else if (isRight) {
            positionStrategy.right('0');
        }
        else {
            positionStrategy.centerHorizontally();
        }
        // Set horizontal position.
        if (config.verticalPosition === 'top') {
            positionStrategy.top('0');
        }
        else {
            positionStrategy.bottom('0');
        }
        overlayConfig.positionStrategy = positionStrategy;
        return this.overlay.create(overlayConfig);
    };
    /**
     * Creates an injector to be used inside of a toast component.
     */
    PureToast.prototype.createInjector = function (config, toastRef) {
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalInjector"](userInjector || this.injector, new WeakMap([
            [_toast_ref__WEBPACK_IMPORTED_MODULE_8__["PureToastRef"], toastRef],
            [_toast_config__WEBPACK_IMPORTED_MODULE_5__["PureToastData"], config.data]
        ]));
    };
    PureToast = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: _toast_module__WEBPACK_IMPORTED_MODULE_7__["PureToastModule"]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"])()),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(PureToastDefaultOptions)),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"],
            PureToast,
            _toast_config__WEBPACK_IMPORTED_MODULE_5__["PureToastConfig"]])
    ], PureToast);
    return PureToast;
}());



/***/ }),

/***/ "./src/app/pure-elements/tooltip/index.ts":
/*!************************************************!*\
  !*** ./src/app/pure-elements/tooltip/index.ts ***!
  \************************************************/
/*! exports provided: PureTooltipModule, PureTooltipDefaultConfig, PureTooltipConfigToken, PureTooltipConfigFactory, PureTooltip, PureTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/pure-elements/tooltip/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureTooltipModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipDefaultConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureTooltipDefaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipConfigToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureTooltipConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipConfigFactory", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureTooltipConfigFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltip", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PureTooltipComponent"]; });




/***/ }),

/***/ "./src/app/pure-elements/tooltip/public-api.ts":
/*!*****************************************************!*\
  !*** ./src/app/pure-elements/tooltip/public-api.ts ***!
  \*****************************************************/
/*! exports provided: PureTooltipModule, PureTooltipDefaultConfig, PureTooltipConfigToken, PureTooltipConfigFactory, PureTooltip, PureTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.module */ "./src/app/pure-elements/tooltip/tooltip.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipModule", function() { return _tooltip_module__WEBPACK_IMPORTED_MODULE_0__["PureTooltipModule"]; });

/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-config */ "./src/app/pure-elements/tooltip/tooltip-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipDefaultConfig", function() { return _tooltip_config__WEBPACK_IMPORTED_MODULE_1__["PureTooltipDefaultConfig"]; });

/* harmony import */ var _tooltip_config_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-config-token */ "./src/app/pure-elements/tooltip/tooltip-config-token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipConfigToken", function() { return _tooltip_config_token__WEBPACK_IMPORTED_MODULE_2__["PureTooltipConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipConfigFactory", function() { return _tooltip_config_token__WEBPACK_IMPORTED_MODULE_2__["PureTooltipConfigFactory"]; });

/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip */ "./src/app/pure-elements/tooltip/tooltip.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltip", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_3__["PureTooltip"]; });

/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-component */ "./src/app/pure-elements/tooltip/tooltip-component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureTooltipComponent", function() { return _tooltip_component__WEBPACK_IMPORTED_MODULE_4__["PureTooltipComponent"]; });








/***/ }),

/***/ "./src/app/pure-elements/tooltip/tooltip-component.ts":
/*!************************************************************!*\
  !*** ./src/app/pure-elements/tooltip/tooltip-component.ts ***!
  \************************************************************/
/*! exports provided: PureTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureTooltipComponent", function() { return PureTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PureTooltipComponent = /** @class */ (function (_super) {
    __extends(PureTooltipComponent, _super);
    function PureTooltipComponent(elementRef, componentNamer, config) {
        var _this = _super.call(this, elementRef, componentNamer) || this;
        _this.elementRef = elementRef;
        _this.componentNamer = componentNamer;
        _this.config = config;
        _this.elementName = 'Tooltip';
        _this.containerName = 'Container';
        _this.appendixName = 'Appendix';
        _this.containerClasses = {};
        _this.appendixClasses = {};
        _this.showClass = _this.componentNamer.generateClassName(_this.elementName, '', 'shown');
        _this._show = false;
        if (config) {
            _this.elementClasses[_this.componentNamer.generateClassName(_this.elementName, '', _this.config.position)] = true;
        }
        return _this;
    }
    Object.defineProperty(PureTooltipComponent.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            this._show = Object(_core__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this.elementClasses[this.showClass] = this._show;
        },
        enumerable: true,
        configurable: true
    });
    PureTooltipComponent.prototype.setContainerClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.containerClasses[this.componentNamer.generateClassName(this.elementName, this.containerName)] = flag;
    };
    PureTooltipComponent.prototype.setAppendixClasses = function (flag) {
        if (flag === void 0) { flag = true; }
        this.appendixClasses[this.componentNamer.generateClassName(this.elementName, this.appendixName)] = flag;
    };
    PureTooltipComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setContainerClasses();
        this.setAppendixClasses();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PureTooltipComponent.prototype, "container", void 0);
    PureTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <div [ngClass]=\"elementClasses\">\n      <div\n        [ngClass]=\"containerClasses\"\n        #container>\n        <ng-content></ng-content>\n      </div>\n      <div [ngClass]=\"appendixClasses\"></div>\n    </div>\n  "
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('pureTooltipConfig')),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core__WEBPACK_IMPORTED_MODULE_1__["ComponentNamer"], Object])
    ], PureTooltipComponent);
    return PureTooltipComponent;
}(_core__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./src/app/pure-elements/tooltip/tooltip-config-token.ts":
/*!***************************************************************!*\
  !*** ./src/app/pure-elements/tooltip/tooltip-config-token.ts ***!
  \***************************************************************/
/*! exports provided: PureTooltipConfigToken, PureTooltipConfigFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureTooltipConfigToken", function() { return PureTooltipConfigToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureTooltipConfigFactory", function() { return PureTooltipConfigFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-config */ "./src/app/pure-elements/tooltip/tooltip-config.ts");


var PureTooltipConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PureTooltipConfig', {
    providedIn: 'root',
    factory: PureTooltipConfigFactory
});
function PureTooltipConfigFactory() {
    return _tooltip_config__WEBPACK_IMPORTED_MODULE_1__["PureTooltipDefaultConfig"];
}


/***/ }),

/***/ "./src/app/pure-elements/tooltip/tooltip-config.ts":
/*!*********************************************************!*\
  !*** ./src/app/pure-elements/tooltip/tooltip-config.ts ***!
  \*********************************************************/
/*! exports provided: PureTooltipDefaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureTooltipDefaultConfig", function() { return PureTooltipDefaultConfig; });
var PureTooltipDefaultConfig = {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500,
    position: 'top',
    triggerEvent: 'hover',
    closeOnEsc: true
};


/***/ }),

/***/ "./src/app/pure-elements/tooltip/tooltip.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pure-elements/tooltip/tooltip.module.ts ***!
  \*********************************************************/
/*! exports provided: PureTooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureTooltipModule", function() { return PureTooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip */ "./src/app/pure-elements/tooltip/tooltip.ts");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-component */ "./src/app/pure-elements/tooltip/tooltip-component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PureTooltipModule = /** @class */ (function () {
    function PureTooltipModule() {
    }
    PureTooltipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_2__["ComponentNamerModule"].forRoot()],
            declarations: [_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["PureTooltipComponent"], _tooltip__WEBPACK_IMPORTED_MODULE_3__["PureTooltip"]],
            exports: [_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["PureTooltipComponent"], _tooltip__WEBPACK_IMPORTED_MODULE_3__["PureTooltip"]],
            providers: [_core__WEBPACK_IMPORTED_MODULE_2__["EventHandler"]],
            entryComponents: [_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["PureTooltipComponent"]]
        })
    ], PureTooltipModule);
    return PureTooltipModule;
}());



/***/ }),

/***/ "./src/app/pure-elements/tooltip/tooltip.ts":
/*!**************************************************!*\
  !*** ./src/app/pure-elements/tooltip/tooltip.ts ***!
  \**************************************************/
/*! exports provided: PureTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureTooltip", function() { return PureTooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/pure-elements/core/index.ts");
/* harmony import */ var _tooltip_config_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-config-token */ "./src/app/pure-elements/tooltip/tooltip-config-token.ts");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip-config */ "./src/app/pure-elements/tooltip/tooltip-config.ts");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-component */ "./src/app/pure-elements/tooltip/tooltip-component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PureTooltip = /** @class */ (function () {
    function PureTooltip(elementRef, renderer, injector, cfResolver, viewContainerRef, eventHandler, customConfig) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.injector = injector;
        this.cfResolver = cfResolver;
        this.viewContainerRef = viewContainerRef;
        this.eventHandler = eventHandler;
        this.showTimeoutId = null;
        this.hideTimeoutId = null;
        this._disabled = false;
        this.triggeredToShow = false;
        this.config = customConfig ? Object.assign(_tooltip_config__WEBPACK_IMPORTED_MODULE_3__["PureTooltipDefaultConfig"], customConfig) : _tooltip_config__WEBPACK_IMPORTED_MODULE_3__["PureTooltipDefaultConfig"];
        this.showDelay = this.config.showDelay;
        this.hideDelay = this.config.hideDelay;
        this.touchendHideDelay = this.config.touchendHideDelay;
        this.position = this.config.position;
        this.triggerEvent = this.config.triggerEvent;
        this.closeOnEsc = this.config.closeOnEsc;
    }
    Object.defineProperty(PureTooltip.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
            if (!this._content && this.componentRef) {
                this.destroyTooltip();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureTooltip.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_core__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (this._disabled && this.isTooltipVisible()) {
                this.hide(0);
            }
            if (!this._disabled && this.triggeredToShow) {
                this.show(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureTooltip.prototype, "theme", {
        get: function () {
            return this._theme;
        },
        set: function (value) {
            this._theme = value;
            if (this.componentRef) {
                this.componentRef.instance.theme = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureTooltip.prototype, "extraClass", {
        get: function () {
            return this._theme;
        },
        set: function (value) {
            this._theme = value;
            if (this.componentRef) {
                this.componentRef.instance.extraClass = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PureTooltip.prototype, "triggerEvent", {
        get: function () {
            return this._triggerEvent;
        },
        set: function (value) {
            this._triggerEvent = value;
            if (this.isTooltipVisible()) {
                this.triggeredToShow = false;
                this.hide(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    PureTooltip.prototype.onMouseenter = function () {
        if (this.triggerEvent === 'hover') {
            this.triggeredToShow = true;
            this.show();
        }
    };
    PureTooltip.prototype.onMouseout = function () {
        if (this.triggerEvent === 'hover') {
            this.triggeredToShow = false;
            if (this.isTooltipVisible()) {
                this.hide();
            }
        }
    };
    PureTooltip.prototype.onLongpress = function () {
        if (this.triggerEvent === 'hover') {
            this.triggeredToShow = true;
            this.show();
        }
    };
    PureTooltip.prototype.onTouchend = function () {
        if (this.triggerEvent === 'hover') {
            this.triggeredToShow = false;
            if (this.isTooltipVisible())
                this.hide(this.touchendHideDelay);
        }
    };
    PureTooltip.prototype.onFocus = function () {
        if (this.triggerEvent === 'focus') {
            this.triggeredToShow = true;
            this.show();
        }
    };
    PureTooltip.prototype.onBlur = function () {
        if (this.triggerEvent === 'focus') {
            this.triggeredToShow = false;
            if (this.isTooltipVisible())
                this.hide();
        }
    };
    /**
     * When trigger event is `hover` — body interactions should immediately cancel the tooltip if
     * there is a delay in hiding.
     */
    PureTooltip.prototype.onBodyClick = function () {
        if (this.triggerEvent === 'hover') {
            if (this.isTooltipVisible())
                this.hide(0);
        }
    };
    PureTooltip.prototype.onKeydown = function (event) {
        if (event.keyCode === _core__WEBPACK_IMPORTED_MODULE_1__["KEY_CODES"].ESCAPE) {
            if (this.closeOnEsc) {
                if (this.isTooltipVisible())
                    this.hide(0);
            }
        }
    };
    PureTooltip.prototype.isTooltipVisible = function () {
        return this.componentRef && this.componentRef.instance.show;
    };
    PureTooltip.prototype.toggle = function () {
        this.isTooltipVisible() ? this.hide(0) : this.show(0);
    };
    PureTooltip.prototype.show = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = this.showDelay; }
        if (this.disabled)
            return;
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }
        else {
            this.showTimeoutId = setTimeout(function () {
                if (!_this.componentRef)
                    _this.createTooltip();
                _this.componentRef.instance.show = true;
                _this.showTimeoutId = null;
            }, delay);
        }
    };
    PureTooltip.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = this.hideDelay; }
        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
        }
        else {
            this.hideTimeoutId = setTimeout(function () {
                _this.componentRef.instance.show = false;
                _this.hideTimeoutId = null;
            }, delay);
        }
    };
    PureTooltip.prototype.createTooltip = function () {
        var factory = this.cfResolver.resolveComponentFactory(_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["PureTooltipComponent"]), componentConfig = {
            host: this.elementRef.nativeElement,
            position: this.position
        }, injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolveAndCreate([{
                provide: 'pureTooltipConfig',
                useValue: componentConfig
            }]);
        this.componentRef = this.viewContainerRef.createComponent(factory, 0, injector, this.generateNgContent());
        this.componentRef.instance.theme = this.theme;
    };
    PureTooltip.prototype.destroyTooltip = function () {
        this.componentRef && this.componentRef.destroy();
        this.componentRef = null;
    };
    PureTooltip.prototype.generateNgContent = function () {
        if (typeof this.content === 'string') {
            var element = this.renderer.createText(this.content);
            return [[element]];
        }
        else if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            var context = {}, viewRef = this.content.createEmbeddedView(context);
            return [viewRef.rootNodes];
        }
        else {
            // Else it's a component
            var factory = this.cfResolver.resolveComponentFactory(this.content), componentRef = factory.create(this.injector);
            return [[componentRef.location.nativeElement]];
        }
    };
    PureTooltip.prototype.ngOnInit = function () {
        var _this = this;
        this.onKeydownSub = this.eventHandler.onKeydown().subscribe(function (event) { return _this.onKeydown(event); }, function (err) { return _this.eventHandler.handleErrorFromSubscriber(err); });
    };
    PureTooltip.prototype.ngOnDestroy = function () {
        this.onKeydownSub.unsubscribe();
        this.destroyTooltip();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pureTooltipShowDelay'),
        __metadata("design:type", Number)
    ], PureTooltip.prototype, "showDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pureTooltipHideDelay'),
        __metadata("design:type", Number)
    ], PureTooltip.prototype, "hideDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pureTooltipPosition'),
        __metadata("design:type", String)
    ], PureTooltip.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pureTooltip'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PureTooltip.prototype, "content", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pureTooltipDisabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PureTooltip.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pureTooltipTheme'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PureTooltip.prototype, "theme", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pureTooltipExtraClass'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PureTooltip.prototype, "extraClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pureTooltipTriggerEvent'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PureTooltip.prototype, "triggerEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PureTooltip.prototype, "onMouseenter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PureTooltip.prototype, "onMouseout", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('longpress'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PureTooltip.prototype, "onLongpress", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchend'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PureTooltip.prototype, "onTouchend", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PureTooltip.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PureTooltip.prototype, "onBlur", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('body:click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PureTooltip.prototype, "onBodyClick", null);
    PureTooltip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pureTooltip]',
            exportAs: 'pureTooltip'
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tooltip_config_token__WEBPACK_IMPORTED_MODULE_2__["PureTooltipConfigToken"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _core__WEBPACK_IMPORTED_MODULE_1__["EventHandler"], Object])
    ], PureTooltip);
    return PureTooltip;
}());



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

module.exports = __webpack_require__(/*! /Users/antonskyba/Dev/mits-default-theme/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map