(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styleguide-styleguide-module"],{

/***/ "./src/app/lib-data.ts":
/*!*****************************!*\
  !*** ./src/app/lib-data.ts ***!
  \*****************************/
/*! exports provided: LibData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibData", function() { return LibData; });
var LibData = {
    pureDemoLink: 'https://makeitsimpleuk.github.io/pure-elements/#/',
    breezeSourceLink: 'https://github.com/antonskyba/Breeze.css/'
};


/***/ }),

/***/ "./src/app/styleguide/badge/badge-demo.html":
/*!**************************************************!*\
  !*** ./src/app/styleguide/badge/badge-demo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Badge</h1>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n\n      <span class=\"c-badge\">Primary</span>\n\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Themes</h2>\n    <span class=\"c-component__container\">\n\n      <span class=\"c-badge c-badge--success\">Success</span>\n\n    </span>\n    <span class=\"c-component__container\">\n      \n      <span class=\"c-badge c-badge--warning\">Warning</span>\n\n    </span>\n    <span class=\"c-component__container\">\n\n      <span class=\"c-badge c-badge--neutral\">Neutral</span>\n      \n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/styleguide/badge/badge-demo.ts":
/*!************************************************!*\
  !*** ./src/app/styleguide/badge/badge-demo.ts ***!
  \************************************************/
/*! exports provided: BadgeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeDemo", function() { return BadgeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BadgeDemo = /** @class */ (function () {
    function BadgeDemo() {
    }
    BadgeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./badge-demo.html */ "./src/app/styleguide/badge/badge-demo.html")
        })
    ], BadgeDemo);
    return BadgeDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/base-unit/base-unit-demo.html":
/*!**********************************************************!*\
  !*** ./src/app/styleguide/base-unit/base-unit-demo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Sizes</h1>\n    <p class=\"c-item-container__desc\">Design has a sizing system that is derived from two values: Base Unit which is equal to 14px, and Base Ratio which is equal to 1.2.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container c-component__container--full-width u-flex-row u-align-items-end\">\n\n      <span class=\"c-unit-demo c-unit-demo--9x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--8x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--7x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--6x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--5x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--4x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--3x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--2x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--xl\"></span>\n      <span class=\"c-unit-demo c-unit-demo--lg\"></span>\n      <span class=\"c-unit-demo c-unit-demo--md\"></span>\n      <span class=\"c-unit-demo c-unit-demo--sm\"></span>\n      <span class=\"c-unit-demo c-unit-demo--xs\"></span>\n      <span class=\"c-unit-demo c-unit-demo--2s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--3s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--4s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--5s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--6s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--7s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--8s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--9s\"></span>\n\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container c-component__container--full-width u-font-lg u-flex-row u-align-items-end\">\n\n      <span class=\"c-unit-demo c-unit-demo--em-9x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-8x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-7x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-6x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-5x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-4x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-3x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-2x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-xl\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-lg\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-md\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-sm\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-xs\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-2s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-3s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-4s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-5s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-6s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-7s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-8s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-9s\"></span>\n\n    </span>\n\n    <span class=\"c-component__container c-component__container--full-width u-font-xs u-flex-row u-align-items-end\">\n\n      <span class=\"c-unit-demo c-unit-demo--em-9x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-8x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-7x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-6x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-5x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-4x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-3x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-2x\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-xl\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-lg\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-md\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-sm\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-xs\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-2s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-3s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-4s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-5s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-6s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-7s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-8s\"></span>\n      <span class=\"c-unit-demo c-unit-demo--em-9s\"></span>\n\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/base-unit/base-unit-demo.ts":
/*!********************************************************!*\
  !*** ./src/app/styleguide/base-unit/base-unit-demo.ts ***!
  \********************************************************/
/*! exports provided: BaseUnitDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUnitDemo", function() { return BaseUnitDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BaseUnitDemo = /** @class */ (function () {
    function BaseUnitDemo() {
    }
    BaseUnitDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./base-unit-demo.html */ "./src/app/styleguide/base-unit/base-unit-demo.html")
        })
    ], BaseUnitDemo);
    return BaseUnitDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/button/button-demo.html":
/*!****************************************************!*\
  !*** ./src/app/styleguide/button/button-demo.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Button</h1>\n    <p class=\"c-item-container__desc\">Styles on top of the <a href=\"{{LibData.pureDemoLink}}button\" target=\"_blank\" rel=\"noopener\">Pure Button</a> element.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n      <pure-button>Push Me</pure-button>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Themes</h2>\n\n    <span class=\"c-component__container\">\n      <pure-button theme=\"success\">Success</pure-button>\n    </span>\n    <span class=\"c-component__container\">\n      <pure-button theme=\"warning\">Warning</pure-button>\n    </span>\n    <span class=\"c-component__container\">\n      <pure-button theme=\"ghost\">Ghost</pure-button>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">States</h2>\n\n    <span class=\"c-component__container\">\n      <pure-button [disabled]=\"true\">Disabled</pure-button>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Processing</h2>\n\n    <span class=\"c-component__container\">\n      <pure-button theme=\"processing\">I am busy…</pure-button>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">With Icon</h2>\n\n    <span class=\"c-component__container\">\n      <pure-button theme=\"has-icon\">\n        <i class=\"c-icon\">cloud</i>Upload\n      </pure-button>\n    </span>\n\n    <span class=\"c-component__container\">\n      <pure-button theme=\"has-icon icon-caret\">\n        Apply\n        <i class=\"c-icon\">arrow_drop_down</i>\n      </pure-button>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Iconic</h2>\n\n    <span class=\"c-component__container\">\n      <pure-button theme=\"iconic transparent\">\n        <i class=\"c-icon\">more_vert</i>\n      </pure-button>\n    </span>\n    <span class=\"c-component__container\">\n      <pure-button theme=\"iconic\">\n        <i class=\"c-icon\">more_vert</i>\n      </pure-button>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/button/button-demo.ts":
/*!**************************************************!*\
  !*** ./src/app/styleguide/button/button-demo.ts ***!
  \**************************************************/
/*! exports provided: ButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemo", function() { return ButtonDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib-data */ "./src/app/lib-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ButtonDemo = /** @class */ (function () {
    function ButtonDemo() {
        this.LibData = _lib_data__WEBPACK_IMPORTED_MODULE_1__["LibData"];
    }
    ButtonDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./button-demo.html */ "./src/app/styleguide/button/button-demo.html")
        })
    ], ButtonDemo);
    return ButtonDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/card/card-demo.html":
/*!************************************************!*\
  !*** ./src/app/styleguide/card/card-demo.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Card</h1>\n    <p class=\"c-item-container__desc\">Content container for text, photos, and actions in the context of a single subject.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n      <div class=\"o-grid o-grid--flush\">\n        <div class=\"o-cell o-cell--4/12\">\n\n          <div class=\"c-card\">\n            <div class=\"c-card__content\">\n              <h2 class=\"c-h2\">Title</h2>\n              <p class=\"u-margin-bottom-0\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur magni, fuga temporibus cupiditate corporis porro!</p>\n            </div>\n            <div class=\"c-card__rich-media\">\n              <img src=\"assets/img/map.png\" alt=\"Map\">\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/card/card-demo.ts":
/*!**********************************************!*\
  !*** ./src/app/styleguide/card/card-demo.ts ***!
  \**********************************************/
/*! exports provided: CardDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDemo", function() { return CardDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardDemo = /** @class */ (function () {
    function CardDemo() {
    }
    CardDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./card-demo.html */ "./src/app/styleguide/card/card-demo.html")
        })
    ], CardDemo);
    return CardDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/colour-scheme/colour-scheme-demo.html":
/*!******************************************************************!*\
  !*** ./src/app/styleguide/colour-scheme/colour-scheme-demo.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Colour Scheme</h1>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container c-component__container--full-width\">\n\n      <div class=\"o-grid o-grid--no-outer-gap\">\n        <div class=\"o-cell o-cell--1/4\">\n          <div class=\"c-color-well c-color-well--primary c-color-well--distinct\">\n            <p class=\"c-color-well__name\">French Grey</p>\n            <p class=\"c-color-well__hex\">#9b9ea9</p>\n          </div>\n        </div>\n        <div class=\"o-cell o-cell--1/4\">\n          <div class=\"c-color-well c-color-well--accent c-color-well--distinct\">\n            <p class=\"c-color-well__name\">Cerulean Blue</p>\n            <p class=\"c-color-well__hex\">#3751C5</p>\n          </div>\n        </div>\n        <div class=\"o-cell o-cell--1/4\">\n          <div class=\"c-color-well c-color-well--accent-positive c-color-well--distinct\">\n            <p class=\"c-color-well__name\">Puerto Rico</p>\n            <p class=\"c-color-well__hex\">#3ECAA9</p>\n          </div>\n        </div>\n        <div class=\"o-cell o-cell--1/4\">\n          <div class=\"c-color-well c-color-well--accent-negative c-color-well--distinct\">\n            <p class=\"c-color-well__name\">Burnt Sienna</p>\n            <p class=\"c-color-well__hex\">#EE7A68</p>\n          </div>\n        </div>\n      </div>\n\n    </span>\n  </div>\n\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Primary Palette</h2>\n\n    <span class=\"c-component__container c-component__container--full-width\">\n\n      <div class=\"o-grid o-grid--no-outer-gap\">\n        <div class=\"o-cell u-flex-row u-align-items-end\">\n          <div class=\"c-color-well c-color-well--sm c-color-well--primary-black u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Shark</p>\n            <p class=\"c-color-well__hex\">#1f2125</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--primary-darken u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Mako</p>\n            <p class=\"c-color-well__hex\">#3a3c44</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--primary-dark u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Shuttle Grey</p>\n            <p class=\"c-color-well__hex\">#555863</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--primary u-margin-right-xl\">\n            <p class=\"c-color-well__name\">French Grey</p>\n            <p class=\"c-color-well__hex\">#acafb7</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--primary-soft u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Iron</p>\n            <p class=\"c-color-well__hex\">#eaebed</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--primary-light u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Athens Grey</p>\n            <p class=\"c-color-well__hex\">#fafafb</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--primary-white u-margin-right-xl\">\n            <p class=\"c-color-well__name\">White</p>\n            <p class=\"c-color-well__hex\">#ffffff</p>\n          </div>\n        </div>\n      </div>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Accent Palette</h2>\n\n    <span class=\"c-component__container c-component__container--full-width\">\n\n      <div class=\"o-grid o-grid--no-outer-gap\">\n        <div class=\"o-cell u-flex-row u-align-items-end\">\n          <div class=\"c-color-well c-color-well--sm c-color-well--accent u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Cerulean Blue</p>\n            <p class=\"c-color-well__hex\">#3751c5</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--accent-bright u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Malibu</p>\n            <p class=\"c-color-well__hex\">#91A7FF</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--accent-washed u-margin-right-xl\">\n            <p class=\"c-color-well__name\">White Lilac</p>\n            <p class=\"c-color-well__hex\">#eff1fa</p>\n          </div>\n        </div>\n      </div>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Accent Positive Palette</h2>\n\n    <span class=\"c-component__container c-component__container--full-width\">\n\n      <div class=\"o-grid o-grid--no-outer-gap\">\n        <div class=\"o-cell u-flex-row u-align-items-end\">\n          <div class=\"c-color-well c-color-well--sm c-color-well--accent-positive u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Puerto Rico</p>\n            <p class=\"c-color-well__hex\">#3ECAA9</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--accent-positive-bright u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Charlotte</p>\n            <p class=\"c-color-well__hex\">#aef9e8</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--accent-positive-washed u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Off Green</p>\n            <p class=\"c-color-well__hex\">#e5f8f3</p>\n          </div>\n        </div>\n      </div>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Accent Negative Palette</h2>\n\n    <span class=\"c-component__container c-component__container--full-width\">\n\n      <div class=\"o-grid o-grid--no-outer-gap\">\n        <div class=\"o-cell u-flex-row u-align-items-end\">\n          <div class=\"c-color-well c-color-well--sm c-color-well--accent-negative u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Burnt Sienna</p>\n            <p class=\"c-color-well__hex\">#ee7a68</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--accent-negative-bright u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Melon</p>\n            <p class=\"c-color-well__hex\">#ffbcb0</p>\n          </div>\n          <div class=\"c-color-well c-color-well--sm c-color-well--accent-negative-washed u-margin-right-xl\">\n            <p class=\"c-color-well__name\">Linen</p>\n            <p class=\"c-color-well__hex\">#fcefec</p>\n          </div>\n        </div>\n      </div>\n    </span>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/colour-scheme/colour-scheme-demo.ts":
/*!****************************************************************!*\
  !*** ./src/app/styleguide/colour-scheme/colour-scheme-demo.ts ***!
  \****************************************************************/
/*! exports provided: ColourSchemeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourSchemeDemo", function() { return ColourSchemeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColourSchemeDemo = /** @class */ (function () {
    function ColourSchemeDemo() {
    }
    ColourSchemeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./colour-scheme-demo.html */ "./src/app/styleguide/colour-scheme/colour-scheme-demo.html")
        })
    ], ColourSchemeDemo);
    return ColourSchemeDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/controls/controls-demo.html":
/*!********************************************************!*\
  !*** ./src/app/styleguide/controls/controls-demo.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Controls</h1>\n    <p class=\"c-item-container__desc\">Controls object is a container for different kinds of interactive elements that are usually placed together. At the moment it only adds a consistent gap between components but it is recommended to use it to easily perform necessary updates later.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n      <p class=\"c-component__desc\">Example usage #1:</p>\n\n      <div class=\"o-controls\">\n        <pure-button theme=\"ghost\">Cancel</pure-button>\n        <pure-button>Save</pure-button>\n      </div>\n\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n      <p class=\"c-component__desc\">Example usage #2:</p>\n\n      <div class=\"o-controls u-align-items-center\">\n        <pure-form-control>\n          <input pureInput placeholder=\"Enter email\">\n        </pure-form-control>\n        <pure-button theme=\"success\">Submit</pure-button>\n      </div>\n\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/controls/controls-demo.ts":
/*!******************************************************!*\
  !*** ./src/app/styleguide/controls/controls-demo.ts ***!
  \******************************************************/
/*! exports provided: ControlsDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsDemo", function() { return ControlsDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ControlsDemo = /** @class */ (function () {
    function ControlsDemo() {
    }
    ControlsDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./controls-demo.html */ "./src/app/styleguide/controls/controls-demo.html")
        })
    ], ControlsDemo);
    return ControlsDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/data-grid/data-grid-demo.html":
/*!**********************************************************!*\
  !*** ./src/app/styleguide/data-grid/data-grid-demo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Data Grid</h1>\n    <p class=\"c-item-container__desc\">Styled plain HTML <code>&lt;table&gt;</code> element.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container c-component__container--full-width\">\n\n      <table class=\"c-data-grid\">\n        <thead class=\"c-data-grid__thead\">\n          <tr class=\"c-data-grid__tr\">\n            <th class=\"c-data-grid__th\">Name</th>\n            <th class=\"c-data-grid__th\">Status</th>\n            <th class=\"c-data-grid__th\">Role</th>\n            <th class=\"c-data-grid__th\"></th>\n          </tr>\n        </thead>\n        <tbody class=\"c-data-grid__tbody\">\n          <tr class=\"c-data-grid__tr\" *ngFor=\"let user of users.slice(7)\">\n            <td class=\"c-data-grid__td\">\n              <span class=\"u-text-capitalize\">{{user.name.first + ' ' + user.name.last}}</span>\n            </td>\n            <td class=\"c-data-grid__td\">{{user.id.value}}</td>\n            <td class=\"c-data-grid__td u-text-capitalize\">{{user.role}}</td>\n            <td class=\"c-data-grid__td u-text-right\">\n              <div class=\"c-data-grid__hover-content\">\n                <pure-button theme=\"iconic transparent\">\n                  <i class=\"c-icon\">more_vert</i>\n                </pure-button>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Clickable Rows</h2>\n\n    <span class=\"c-component__container c-component__container--full-width\">\n\n      <table class=\"c-data-grid c-data-grid--clickable\">\n        <thead class=\"c-data-grid__thead\">\n          <tr class=\"c-data-grid__tr\">\n            <th class=\"c-data-grid__th\">Name</th>\n            <th class=\"c-data-grid__th\">Status</th>\n            <th class=\"c-data-grid__th\">Role</th>\n            <th class=\"c-data-grid__th\"></th>\n          </tr>\n        </thead>\n        <tbody class=\"c-data-grid__tbody\">\n          <tr class=\"c-data-grid__tr\" *ngFor=\"let user of users.slice(0, 3)\" (click)=\"onRowClick(user)\">\n            <td class=\"c-data-grid__td\">\n              <span class=\"u-text-capitalize\">{{user.name.first + ' ' + user.name.last}}</span>\n            </td>\n            <td class=\"c-data-grid__td\">{{user.id.value}}</td>\n            <td class=\"c-data-grid__td u-text-capitalize\">{{user.role}}</td>\n            <td class=\"c-data-grid__td u-text-right\">\n              <div class=\"c-data-grid__hover-content\">\n                <pure-button theme=\"iconic transparent\">\n                  <i class=\"c-icon\">more_vert</i>\n                </pure-button>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Align Data to Top</h2>\n\n    <span class=\"c-component__container c-component__container--full-width\">\n\n      <table class=\"c-data-grid\">\n        <thead class=\"c-data-grid__thead\">\n          <tr class=\"c-data-grid__tr\">\n            <th class=\"c-data-grid__th\">Name</th>\n            <th class=\"c-data-grid__th\">Status</th>\n            <th class=\"c-data-grid__th\">Role</th>\n            <th class=\"c-data-grid__th\"></th>\n          </tr>\n        </thead>\n        <tbody class=\"c-data-grid__tbody\">\n          <tr class=\"c-data-grid__tr c-data-grid__tr--align-top\" *ngFor=\"let user of users.slice(3, 6)\">\n            <td class=\"c-data-grid__td\">\n              <div class=\"u-text-capitalize\">{{user.name.first}} {{user.name.last}}</div>\n              <div class=\"c-pure-message--hint\">{{user.email}}</div>\n            </td>\n            <td class=\"c-data-grid__td\">{{user.id.value}}</td>\n            <td class=\"c-data-grid__td u-text-capitalize\">{{user.role}}</td>\n            <td class=\"c-data-grid__td u-text-right\">\n              <div class=\"c-data-grid__hover-content\">\n                <pure-button theme=\"iconic transparent\">\n                  <i class=\"c-icon\">more_vert</i>\n                </pure-button>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/data-grid/data-grid-demo.ts":
/*!********************************************************!*\
  !*** ./src/app/styleguide/data-grid/data-grid-demo.ts ***!
  \********************************************************/
/*! exports provided: DataGridDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridDemo", function() { return DataGridDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../users */ "./src/app/users.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataGridDemo = /** @class */ (function () {
    function DataGridDemo() {
        this.users = _users__WEBPACK_IMPORTED_MODULE_1__["USERS"];
    }
    DataGridDemo.prototype.onRowClick = function (user) {
        alert("\uD83E\uDD84 I'm a click event with user data passed in!\n\n" + JSON.stringify(user, null, 2));
    };
    DataGridDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./data-grid-demo.html */ "./src/app/styleguide/data-grid/data-grid-demo.html")
        })
    ], DataGridDemo);
    return DataGridDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/dropdown/dropdown-demo.html":
/*!********************************************************!*\
  !*** ./src/app/styleguide/dropdown/dropdown-demo.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Dropdown</h1>\n    <p class=\"c-item-container__desc\">Styles on top of the <a href=\"{{LibData.pureDemoLink}}dropdown\" target=\"_blank\" rel=\"noopener\">Pure Dropdown</a> element.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n\n      <div class=\"u-relative\">\n        <pure-button [pureDropdownTriggerFor]=\"dropdown\" \n                     [class.js-active]=\"dropdown.show\"\n                     theme=\"has-icon icon-caret\">\n          Open Dropdown\n          <i class=\"c-icon\">arrow_drop_down</i>\n        </pure-button>\n\n        <pure-dropdown #dropdown=\"pureDropdown\">\n          <div pureDropdownItem>Option 1</div>\n          <div pureDropdownItem>Option 2</div>\n          <div pureDropdownItem [pureDropdownItemDisabled]=\"true\">Disabled one</div>\n          <div pureDropdownItem>Option 4</div>\n        </pure-dropdown>\n      </div>\n\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Position Variants</h2>\n\n    <span class=\"c-component__container\">\n\n      <div class=\"u-relative\">\n        <pure-button [pureDropdownTriggerFor]=\"dropdownBelow\" \n                     [class.js-active]=\"dropdownBelow.show\"\n                     theme=\"ghost has-icon icon-caret\">\n          Below\n          <i class=\"c-icon\">arrow_drop_down</i>\n        </pure-button>\n\n        <pure-dropdown #dropdownBelow=\"pureDropdown\" yPosition=\"below\">\n          <div pureDropdownItem>Option 1</div>\n          <div pureDropdownItem>Option 2</div>\n          <div pureDropdownItem>Option 3</div>\n        </pure-dropdown>\n      </div>\n\n    </span>\n\n    <span class=\"c-component__container\">\n\n      <div class=\"u-relative\">\n        <pure-button [pureDropdownTriggerFor]=\"dropdownAbove\" \n                     [class.js-active]=\"dropdownAbove.show\"\n                     theme=\"ghost has-icon icon-caret\">\n          Above\n          <i class=\"c-icon\">arrow_drop_down</i>\n        </pure-button>\n\n        <pure-dropdown #dropdownAbove=\"pureDropdown\" yPosition=\"above\">\n          <div pureDropdownItem>Option 1</div>\n          <div pureDropdownItem>Option 2</div>\n          <div pureDropdownItem>Option 3</div>\n        </pure-dropdown>\n      </div>\n\n    </span>\n\n    <span class=\"c-component__container\">\n\n      <div class=\"u-relative\">\n        <pure-button [pureDropdownTriggerFor]=\"dropdownBefore\" \n                     [class.js-active]=\"dropdownBefore.show\"\n                     theme=\"ghost has-icon icon-caret\">\n          Before\n          <i class=\"c-icon\">arrow_drop_down</i>\n        </pure-button>\n\n        <pure-dropdown #dropdownBefore=\"pureDropdown\" xPosition=\"before\">\n          <div pureDropdownItem>Option 1</div>\n          <div pureDropdownItem>Option 2</div>\n          <div pureDropdownItem>Option 3</div>\n        </pure-dropdown>\n      </div>\n\n    </span>\n\n    <span class=\"c-component__container\">\n\n      <div class=\"u-relative\">\n        <pure-button [pureDropdownTriggerFor]=\"dropdownAfter\" \n                     [class.js-active]=\"dropdownAfter.show\"\n                     theme=\"ghost has-icon icon-caret\">\n          After\n          <i class=\"c-icon\">arrow_drop_down</i>\n        </pure-button>\n\n        <pure-dropdown #dropdownAfter=\"pureDropdown\" xPosition=\"after\">\n          <div pureDropdownItem>Option 1</div>\n          <div pureDropdownItem>Option 2</div>\n          <div pureDropdownItem>Option 3</div>\n        </pure-dropdown>\n      </div>\n\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/styleguide/dropdown/dropdown-demo.ts":
/*!******************************************************!*\
  !*** ./src/app/styleguide/dropdown/dropdown-demo.ts ***!
  \******************************************************/
/*! exports provided: DropdownDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDemo", function() { return DropdownDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib-data */ "./src/app/lib-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DropdownDemo = /** @class */ (function () {
    function DropdownDemo() {
        this.LibData = _lib_data__WEBPACK_IMPORTED_MODULE_1__["LibData"];
    }
    DropdownDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dropdown-demo.html */ "./src/app/styleguide/dropdown/dropdown-demo.html")
        })
    ], DropdownDemo);
    return DropdownDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/form-control/form-control-demo.html":
/*!****************************************************************!*\
  !*** ./src/app/styleguide/form-control/form-control-demo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Form Control</h1>\n    <p class=\"c-item-container__desc\">Styles on top of the <a href=\"{{LibData.pureDemoLink}}form-control\" target=\"_blank\" rel=\"noopener\">Pure Form Control</a> and <a href=\"{{LibData.pureDemoLink}}input\" target=\"_blank\" rel=\"noopener\">Pure Input</a> elements.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Input Based</h2>\n\n    <div class=\"o-grid o-grid--no-outer-gap\">\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n\n        <pure-form-control>\n          <input type=\"text\" placeholder=\"Enter something\" pureInput>\n        </pure-form-control>\n\n      </span>\n    </div>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Textarea Based</h2>\n\n    <div class=\"o-grid o-grid--no-outer-gap\">\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n\n        <pure-form-control label=\"Story\">\n          <textarea placeholder=\"Write some story here\" pureInput></textarea>\n        </pure-form-control>\n\n      </span>\n    </div>\n  </div>\n\n<!--   <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Select</h2>\n\n    <span class=\"c-component__container\">\n      <pure-form-control label=\"Email\">\n        <select placeholder=\"Email\" pureInput>\n          <option value=\"UK\">UK</option>\n          <option value=\"USA\">USA</option>\n        </select>\n      </pure-form-control>\n    </span>\n  </div> -->\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Radio & Checkbox</h2>\n\n    <div class=\"o-grid o-grid--no-outer-gap\">\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n\n        <pure-form-control label=\"Coffee\">\n          <input type=\"radio\" name=\"drink\" checked pureInput>\n        </pure-form-control>\n        <pure-form-control label=\"Tea\">\n          <input type=\"radio\" name=\"drink\" pureInput>\n        </pure-form-control>\n        <pure-form-control label=\"Cacao\">\n          <input type=\"radio\" name=\"drink\" pureInput>\n        </pure-form-control>\n        <pure-form-control label=\"Milk\">\n          <input type=\"radio\" name=\"drink\" disabled pureInput>\n        </pure-form-control>\n\n      </span>\n\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n\n        <pure-form-control label=\"Cookies\">\n          <input type=\"checkbox\" name=\"desert\" checked pureInput>\n        </pure-form-control>\n        <pure-form-control label=\"Waffles\">\n          <input type=\"checkbox\" name=\"desert\" pureInput>\n        </pure-form-control>\n        <pure-form-control label=\"Jam\">\n          <input type=\"checkbox\" name=\"desert\" pureInput>\n        </pure-form-control>\n        <pure-form-control label=\"Fruits\">\n          <input type=\"checkbox\" name=\"desert\" disabled pureInput>\n        </pure-form-control>\n\n      </span>\n    </div>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Required</h2>\n\n    <div class=\"o-grid o-grid--no-outer-gap\">\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n\n        <pure-form-control label=\"National ID\">\n          <input type=\"text\" placeholder=\"Enter ID\" required pureInput>\n        </pure-form-control>\n\n      </span>\n    </div>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Readonly</h2>\n\n    <div class=\"o-grid o-grid--no-outer-gap\">\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n\n        <pure-form-control>\n          <input type=\"text\" placeholder=\"You can not edit me\" readonly value=\"You can not edit me\" pureInput>\n        </pure-form-control>\n\n      </span>\n    </div>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">States</h2>\n\n    <div class=\"o-grid o-grid--no-outer-gap\">\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n        \n        <pure-form-control theme=\"correct\">\n          <input type=\"text\" placeholder=\"Correct\" pureInput>\n          <i class=\"c-icon\" pureSuffix>done</i>\n        </pure-form-control>\n\n      </span>\n\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n        \n        <pure-form-control theme=\"wrong\">\n          <input type=\"text\" placeholder=\"Wrong\" pureInput>\n          <i class=\"c-icon\" pureSuffix>clear</i>\n        </pure-form-control>\n\n      </span>\n\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n  \n        <pure-form-control>\n          <input type=\"text\" placeholder=\"Disabled\" disabled pureInput>\n        </pure-form-control>\n  \n      </span>\n    </div>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">With Icon</h2>\n\n    <div class=\"o-grid o-grid--no-outer-gap\">\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n\n        <pure-form-control>\n          <i class=\"c-icon\" purePrefix>email</i>\n          <input type=\"email\" placeholder=\"Email\" pureInput>\n        </pure-form-control>\n\n      </span>\n    </div>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">With Button</h2>\n\n    <div class=\"o-grid o-grid--no-outer-gap\">\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n\n        <pure-form-control>\n          <input type=\"text\" placeholder=\"Filter\" pureInput>\n          <pure-button theme=\"iconic transparent\" pureSuffix>\n            <i class=\"c-icon\">more_vert</i>\n          </pure-button>\n        </pure-form-control>\n\n      </span>\n    </div>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">With Hint</h2>\n\n    <div class=\"o-grid o-grid--no-outer-gap\">\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n\n        <pure-form-control>\n          <input type=\"password\" placeholder=\"Password\" pureInput>\n          <pure-message>Password should contain at least one number and capital letter.</pure-message>\n        </pure-form-control>\n      \n      </span>\n    </div>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">With Label</h2>\n\n    <div class=\"o-grid o-grid--no-outer-gap\">\n      <span class=\"o-cell o-cell--1/4 c-component__container\">\n\n        <pure-form-control label=\"Label\">\n          <input type=\"text\" placeholder=\"I have a label on top\" pureInput>\n        </pure-form-control>\n\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/form-control/form-control-demo.ts":
/*!**************************************************************!*\
  !*** ./src/app/styleguide/form-control/form-control-demo.ts ***!
  \**************************************************************/
/*! exports provided: FormControlDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDemo", function() { return FormControlDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib-data */ "./src/app/lib-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormControlDemo = /** @class */ (function () {
    function FormControlDemo() {
        this.LibData = _lib_data__WEBPACK_IMPORTED_MODULE_1__["LibData"];
    }
    FormControlDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./form-control-demo.html */ "./src/app/styleguide/form-control/form-control-demo.html")
        })
    ], FormControlDemo);
    return FormControlDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/grid/grid-demo.html":
/*!************************************************!*\
  !*** ./src/app/styleguide/grid/grid-demo.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Grid</h1>\n    <p class=\"c-item-container__desc\">Flexbox-based grid that has 12 (or less than 12) columns with predefined margins and paddings. Available as a part of <a href=\"{{LibData.breezeSourceLink}}\" target=\"_blank\" rel=\"noopener\">Breeze.css</a>.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container c-component__container--full-width u-padding-top-0\">\n      <div class=\"c-grid-demo\">\n\n        <div class=\"o-grid\">\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n          <div class=\"o-cell o-cell--1/12\"></div>\n\n          <div class=\"o-cell o-cell--1/6\"></div>\n          <div class=\"o-cell o-cell--1/6\"></div>\n          <div class=\"o-cell o-cell--1/6\"></div>\n          <div class=\"o-cell o-cell--1/6\"></div>\n          <div class=\"o-cell o-cell--1/6\"></div>\n          <div class=\"o-cell o-cell--1/6\"></div>\n\n          <div class=\"o-cell o-cell--1/4\"></div>\n          <div class=\"o-cell o-cell--1/4\"></div>\n          <div class=\"o-cell o-cell--1/4\"></div>\n          <div class=\"o-cell o-cell--1/4\"></div>\n\n          <div class=\"o-cell o-cell--1/3\"></div>\n          <div class=\"o-cell o-cell--1/3\"></div>\n          <div class=\"o-cell o-cell--1/3\"></div>\n\n          <div class=\"o-cell o-cell--1/2\"></div>\n          <div class=\"o-cell o-cell--1/2\"></div>\n\n          <div class=\"o-cell\"></div>\n        </div>\n\n      </div>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/grid/grid-demo.ts":
/*!**********************************************!*\
  !*** ./src/app/styleguide/grid/grid-demo.ts ***!
  \**********************************************/
/*! exports provided: GridDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridDemo", function() { return GridDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib-data */ "./src/app/lib-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GridDemo = /** @class */ (function () {
    function GridDemo() {
        this.LibData = _lib_data__WEBPACK_IMPORTED_MODULE_1__["LibData"];
    }
    GridDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./grid-demo.html */ "./src/app/styleguide/grid/grid-demo.html")
        })
    ], GridDemo);
    return GridDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/icon/icon-demo.html":
/*!************************************************!*\
  !*** ./src/app/styleguide/icon/icon-demo.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Icon</h1>\n    <p class=\"c-item-container__desc\">Uses Material Design icons pack. All glyphs are available at <a href=\"https://material.io/tools/icons\" rel=\"noopener\" target=\"blank\">material.io</a>. Since currently rounded theme is not available, the default theme is used.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n      <p class=\"c-component__desc\">Icon example:</p>\n\n      <i class=\"c-icon\">cloud</i>\n\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/icon/icon-demo.ts":
/*!**********************************************!*\
  !*** ./src/app/styleguide/icon/icon-demo.ts ***!
  \**********************************************/
/*! exports provided: IconDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconDemo", function() { return IconDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconDemo = /** @class */ (function () {
    function IconDemo() {
    }
    IconDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./icon-demo.html */ "./src/app/styleguide/icon/icon-demo.html")
        })
    ], IconDemo);
    return IconDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/intro/intro.html":
/*!*********************************************!*\
  !*** ./src/app/styleguide/intro/intro.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">MITS Default Theme</h1>\n    <p class=\"c-item-container__desc\">Design system &amp; styled components set for Make I.T. Simple projects.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Installation</h2>\n    <span class=\"c-component__container c-component__container--full-width\">\n      <ol>\n        <li>Install theme: <code>npm i mits-default-theme --save</code>.</li>\n        <li>Import Rupture, Normalize.css, Breeze.css and theme files into your main <code>styl</code> file. See the <a rel=\"noopener\" target=\"blank\" href=\"https://github.com/MakeITSimpleUK/mits-default-theme/blob/master/example.app.styl\">example file</a> in repository root.</li>\n        <li>Install <a rel=\"noopener\" target=\"blank\" href=\"https://makeitsimpleuk.github.io/pure-elements/#/\">Pure Elements</a>.</li>\n      </ol>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Dependencies</h2>\n    <span class=\"c-component__container c-component__container--full-width\">\n      <ul>\n        <li><a rel=\"noopener\" target=\"blank\" href=\"http://stylus-lang.com\">Stylus</a></li>\n        <li><a rel=\"noopener\" target=\"blank\" href=\"https://github.com/antonskyba/Breeze.css\">Breeze.css 2</a></li>\n        <li><a rel=\"noopener\" target=\"blank\" href=\"https://github.com/jescalan/rupture\">Rupture</a></li>\n        <li><a rel=\"noopener\" target=\"blank\" href=\"https://necolas.github.io/normalize.css\">Normalize.css</a></li>\n        <li><a rel=\"noopener\" target=\"blank\" href=\"https://makeitsimpleuk.github.io/pure-elements/#/\">Pure Elements 1</a></li>\n      </ul>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/intro/intro.ts":
/*!*******************************************!*\
  !*** ./src/app/styleguide/intro/intro.ts ***!
  \*******************************************/
/*! exports provided: Intro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return Intro; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Intro = /** @class */ (function () {
    function Intro() {
    }
    Intro = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./intro.html */ "./src/app/styleguide/intro/intro.html")
        })
    ], Intro);
    return Intro;
}());



/***/ }),

/***/ "./src/app/styleguide/loading/loading-demo.html":
/*!******************************************************!*\
  !*** ./src/app/styleguide/loading/loading-demo.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Loading</h1>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container c-component__container--full-width\">\n\n      <div class=\"c-loading\">\n        <div class=\"c-loading__dots\">\n          <span class=\"c-loading__dot\"></span>\n          <span class=\"c-loading__dot\"></span>\n          <span class=\"c-loading__dot\"></span>\n        </div>\n      </div>\n\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/loading/loading-demo.ts":
/*!****************************************************!*\
  !*** ./src/app/styleguide/loading/loading-demo.ts ***!
  \****************************************************/
/*! exports provided: LoadingDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingDemo", function() { return LoadingDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingDemo = /** @class */ (function () {
    function LoadingDemo() {
    }
    LoadingDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./loading-demo.html */ "./src/app/styleguide/loading/loading-demo.html")
        })
    ], LoadingDemo);
    return LoadingDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/menu/menu-demo.html":
/*!************************************************!*\
  !*** ./src/app/styleguide/menu/menu-demo.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Menu</h1>\n  </header>\n\n  <div class=\"c-component\">\n    <div class=\"o-grid o-grid--flush\">\n      <span class=\"o-cell o-cell--2/12 c-component__container\">\n\n        <ul class=\"c-menu\">\n          <li *ngFor=\"let link of links\">\n            <a class=\"c-menu__item\" \n              [class.c-menu__item--active]=\"activeItem === link\" \n              [class.c-menu__item--disabled]=\"link.disabled\"\n              (click)=\"!link.disabled ? activeItem = link : null\">\n              <i *ngIf=\"link.icon\" class=\"c-icon\">{{link.icon}}</i>{{link.title}}\n            </a>\n          </li>\n        </ul>\n\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/menu/menu-demo.ts":
/*!**********************************************!*\
  !*** ./src/app/styleguide/menu/menu-demo.ts ***!
  \**********************************************/
/*! exports provided: MenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDemo", function() { return MenuDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuDemo = /** @class */ (function () {
    function MenuDemo() {
        this.links = [
            {
                title: 'Menu item #1'
            },
            {
                title: 'Menu item #2'
            },
            {
                title: 'Item With Icon',
                icon: 'bookmark'
            },
            {
                title: 'Disabled one',
                disabled: true
            },
            {
                title: 'Menu item #5'
            },
        ];
        this.activeItem = this.links[0];
    }
    MenuDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./menu-demo.html */ "./src/app/styleguide/menu/menu-demo.html")
        })
    ], MenuDemo);
    return MenuDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/modal/modal-demo.html":
/*!**************************************************!*\
  !*** ./src/app/styleguide/modal/modal-demo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Modal</h1>\n    <p class=\"c-item-container__desc\">Uses <a href=\"{{LibData.pureDemoLink}}modal-window\" target=\"_blank\" rel=\"noopener\">Pure Modal</a> as a base for both Dialogue and Window.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Modal Dialogue</h2>\n    <span class=\"c-component__container\">\n\n      <pure-button (onClick)=\"showDialog = !showDialog\">Open Dialogue</pure-button>\n      <pure-modal-window [(show)]=\"showDialog\">\n        <div class=\"c-modal-dialog\">\n          <div class=\"c-modal-dialog__container\">\n            <header class=\"c-modal-dialog__header\">\n              <h1 class=\"c-modal-dialog__heading\">Deactivate account?</h1>\n            </header>\n            <div class=\"c-modal-dialog__content\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, repellat saepe cumque. Itaque laborum dolore, consequatur atque beatae officiis ut.\n            </div>\n          </div>\n          <footer class=\"c-modal-dialog__footer\">\n            <div class=\"o-controls\">\n              <pure-button theme=\"ghost\" (onClick)=\"showDialog = false\">Cancel</pure-button>\n              <pure-button theme=\"warning\" (onClick)=\"deactivate()\">Deactivate</pure-button>\n            </div>\n          </footer>\n        </div>\n      </pure-modal-window>\n\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Modal Window</h2>\n    <span class=\"c-component__container\">\n\n      <pure-button (onClick)=\"showWindow = !showWindow\">Open Window</pure-button>\n      <pure-modal-window [(show)]=\"showWindow\">\n        <div class=\"c-modal-window\">\n          <div class=\"c-modal-window__content-container\">\n            <header class=\"c-modal-window__header\">\n              <h1 class=\"c-modal-window__heading\">New User</h1>\n            </header>\n            <div class=\"c-modal-window__content\">\n              <div class=\"o-grid o-grid--no-outer-gap\">\n                <div class=\"o-cell o-cell--1/3\">\n                  <pure-form-control label=\"First name\">\n                    <input type=\"text\" placeholder=\"Enter first name\" autofocus pureInput>\n                  </pure-form-control>\n                </div>\n                <div class=\"o-cell o-cell--1/3\">\n                  <pure-form-control label=\"Last name\">\n                    <input type=\"text\" placeholder=\"Enter last name\" pureInput>\n                  </pure-form-control>\n                </div>\n                <div class=\"o-cell o-cell--1/3\"></div>\n\n                <div class=\"o-cell o-cell--2/3\">\n                  <pure-form-control label=\"Biography\">\n                    <textarea placeholder=\"Enter biography\" pureInput></textarea>\n                  </pure-form-control>\n                </div>\n                <div class=\"o-cell o-cell--1/3\">\n                </div>\n\n                <div class=\"o-cell o-cell--1/3\">\n                  <pure-form-control label=\"Title\">\n                    <input type=\"text\" placeholder=\"Enter title\" pureInput>\n                  </pure-form-control>\n                </div>\n                <div class=\"o-cell o-cell--1/3\">\n                  <pure-form-control label=\"Date of birth\">\n                    <input type=\"date\" placeholder=\"Enter date\" pureInput>\n                  </pure-form-control>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"c-modal-window__footer-container\">\n            <footer class=\"c-modal-window__footer\">\n              <div class=\"o-controls\">\n                <pure-button theme=\"ghost\" (onClick)=\"showWindow = false\">Cancel</pure-button>\n                <pure-button theme=\"success\" (onClick)=\"create()\">Create</pure-button>\n              </div>\n            </footer>\n          </div>\n        </div>\n      </pure-modal-window>\n\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/modal/modal-demo.ts":
/*!************************************************!*\
  !*** ./src/app/styleguide/modal/modal-demo.ts ***!
  \************************************************/
/*! exports provided: ModalDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemo", function() { return ModalDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib-data */ "./src/app/lib-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModalDemo = /** @class */ (function () {
    function ModalDemo() {
        this.LibData = _lib_data__WEBPACK_IMPORTED_MODULE_1__["LibData"];
        this.showDialog = false;
        this.showWindow = false;
    }
    ModalDemo.prototype.deactivate = function () {
        this.showDialog = false;
    };
    ModalDemo.prototype.create = function () {
        this.showWindow = false;
    };
    ModalDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./modal-demo.html */ "./src/app/styleguide/modal/modal-demo.html")
        })
    ], ModalDemo);
    return ModalDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/round-badge/round-badge-demo.html":
/*!**************************************************************!*\
  !*** ./src/app/styleguide/round-badge/round-badge-demo.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Round Badge</h1>\n    <p class=\"c-item-container__desc\">Used to notify about new events (notifications, messages, etc) — any stuff that requires user's attention.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n      <p class=\"c-component__desc\">Example usage:</p>\n      <b>Requests </b>\n      <sup class=\"c-round-badge\"></sup>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/styleguide/round-badge/round-badge-demo.ts":
/*!************************************************************!*\
  !*** ./src/app/styleguide/round-badge/round-badge-demo.ts ***!
  \************************************************************/
/*! exports provided: RoundBadgeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundBadgeDemo", function() { return RoundBadgeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundBadgeDemo = /** @class */ (function () {
    function RoundBadgeDemo() {
    }
    RoundBadgeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./round-badge-demo.html */ "./src/app/styleguide/round-badge/round-badge-demo.html")
        })
    ], RoundBadgeDemo);
    return RoundBadgeDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/styleguide-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/styleguide/styleguide-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StyleguideRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleguideRoutingModule", function() { return StyleguideRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _styleguide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleguide */ "./src/app/styleguide/styleguide.ts");
/* harmony import */ var _intro_intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro */ "./src/app/styleguide/intro/intro.ts");
/* harmony import */ var _base_unit_base_unit_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-unit/base-unit-demo */ "./src/app/styleguide/base-unit/base-unit-demo.ts");
/* harmony import */ var _colour_scheme_colour_scheme_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colour-scheme/colour-scheme-demo */ "./src/app/styleguide/colour-scheme/colour-scheme-demo.ts");
/* harmony import */ var _typography_typography_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/typography-demo */ "./src/app/styleguide/typography/typography-demo.ts");
/* harmony import */ var _controls_controls_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/controls-demo */ "./src/app/styleguide/controls/controls-demo.ts");
/* harmony import */ var _grid_grid_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid/grid-demo */ "./src/app/styleguide/grid/grid-demo.ts");
/* harmony import */ var _badge_badge_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./badge/badge-demo */ "./src/app/styleguide/badge/badge-demo.ts");
/* harmony import */ var _button_button_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./button/button-demo */ "./src/app/styleguide/button/button-demo.ts");
/* harmony import */ var _card_card_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card/card-demo */ "./src/app/styleguide/card/card-demo.ts");
/* harmony import */ var _data_grid_data_grid_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-grid/data-grid-demo */ "./src/app/styleguide/data-grid/data-grid-demo.ts");
/* harmony import */ var _dropdown_dropdown_demo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dropdown/dropdown-demo */ "./src/app/styleguide/dropdown/dropdown-demo.ts");
/* harmony import */ var _icon_icon_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icon/icon-demo */ "./src/app/styleguide/icon/icon-demo.ts");
/* harmony import */ var _form_control_form_control_demo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form-control/form-control-demo */ "./src/app/styleguide/form-control/form-control-demo.ts");
/* harmony import */ var _loading_loading_demo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loading/loading-demo */ "./src/app/styleguide/loading/loading-demo.ts");
/* harmony import */ var _menu_menu_demo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./menu/menu-demo */ "./src/app/styleguide/menu/menu-demo.ts");
/* harmony import */ var _modal_modal_demo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal-demo */ "./src/app/styleguide/modal/modal-demo.ts");
/* harmony import */ var _round_badge_round_badge_demo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./round-badge/round-badge-demo */ "./src/app/styleguide/round-badge/round-badge-demo.ts");
/* harmony import */ var _switcher_switcher_demo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./switcher/switcher-demo */ "./src/app/styleguide/switcher/switcher-demo.ts");
/* harmony import */ var _toast_toast_demo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./toast/toast-demo */ "./src/app/styleguide/toast/toast-demo.ts");
/* harmony import */ var _tooltip_tooltip_demo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tooltip/tooltip-demo */ "./src/app/styleguide/tooltip/tooltip-demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    {
        path: '',
        component: _styleguide__WEBPACK_IMPORTED_MODULE_2__["Styleguide"],
        children: [
            { path: 'getting-started', component: _intro_intro__WEBPACK_IMPORTED_MODULE_3__["Intro"] },
            { path: 'sizes', component: _base_unit_base_unit_demo__WEBPACK_IMPORTED_MODULE_4__["BaseUnitDemo"] },
            { path: 'colour-scheme', component: _colour_scheme_colour_scheme_demo__WEBPACK_IMPORTED_MODULE_5__["ColourSchemeDemo"] },
            { path: 'typography', component: _typography_typography_demo__WEBPACK_IMPORTED_MODULE_6__["TypographyDemo"] },
            { path: 'controls', component: _controls_controls_demo__WEBPACK_IMPORTED_MODULE_7__["ControlsDemo"] },
            { path: 'grid', component: _grid_grid_demo__WEBPACK_IMPORTED_MODULE_8__["GridDemo"] },
            { path: 'badge', component: _badge_badge_demo__WEBPACK_IMPORTED_MODULE_9__["BadgeDemo"] },
            { path: 'button', component: _button_button_demo__WEBPACK_IMPORTED_MODULE_10__["ButtonDemo"] },
            { path: 'card', component: _card_card_demo__WEBPACK_IMPORTED_MODULE_11__["CardDemo"] },
            { path: 'data-grid', component: _data_grid_data_grid_demo__WEBPACK_IMPORTED_MODULE_12__["DataGridDemo"] },
            { path: 'dropdown', component: _dropdown_dropdown_demo__WEBPACK_IMPORTED_MODULE_13__["DropdownDemo"] },
            { path: 'icon', component: _icon_icon_demo__WEBPACK_IMPORTED_MODULE_14__["IconDemo"] },
            { path: 'form-control', component: _form_control_form_control_demo__WEBPACK_IMPORTED_MODULE_15__["FormControlDemo"] },
            { path: 'loading', component: _loading_loading_demo__WEBPACK_IMPORTED_MODULE_16__["LoadingDemo"] },
            { path: 'menu', component: _menu_menu_demo__WEBPACK_IMPORTED_MODULE_17__["MenuDemo"] },
            { path: 'modal', component: _modal_modal_demo__WEBPACK_IMPORTED_MODULE_18__["ModalDemo"] },
            { path: 'round-badge', component: _round_badge_round_badge_demo__WEBPACK_IMPORTED_MODULE_19__["RoundBadgeDemo"] },
            { path: 'switcher', component: _switcher_switcher_demo__WEBPACK_IMPORTED_MODULE_20__["SwitcherDemo"] },
            { path: 'toast', component: _toast_toast_demo__WEBPACK_IMPORTED_MODULE_21__["ToastDemo"] },
            { path: 'tooltip', component: _tooltip_tooltip_demo__WEBPACK_IMPORTED_MODULE_22__["TooltipDemo"] },
            { path: '', redirectTo: 'getting-started' },
            { path: '**', redirectTo: 'getting-started' }
        ]
    }
];
var StyleguideRoutingModule = /** @class */ (function () {
    function StyleguideRoutingModule() {
    }
    StyleguideRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], StyleguideRoutingModule);
    return StyleguideRoutingModule;
}());



/***/ }),

/***/ "./src/app/styleguide/styleguide.html":
/*!********************************************!*\
  !*** ./src/app/styleguide/styleguide.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-sidebar\">\n  <div class=\"c-sidebar__container\">\n    <nav class=\"c-sidebar__nav\">\n      <div class=\"c-sidebar__section-container\">\n        <brand-logo link=\"/styleguide\"></brand-logo>\n      </div>\n\n      <div class=\"c-sidebar__section-container c-sidebar__section-container--sm\">\n        <h3 class=\"c-sidebar__heading\">Introduction</h3>\n        <ul class=\"c-menu\">\n          <li>\n            <a class=\"c-menu__item\" routerLinkActive=\"c-menu__item--active\" routerLink=\"getting-started\">\n              Getting Started\n            </a>\n          </li>\n          <li>\n            <a class=\"c-menu__item\" routerLinkActive=\"c-menu__item--active\" routerLink=\"/demo\">\n              <i class=\"c-icon\">exit_to_app</i>\n              Demo Sample\n            </a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"c-sidebar__section-container c-sidebar__section-container--sm\">\n        <h3 class=\"c-sidebar__heading\">Essentials</h3>\n        <ul class=\"c-menu\">\n          <li *ngFor=\"let link of commonLinks\">\n            <a class=\"c-menu__item\" routerLinkActive=\"c-menu__item--active\" [routerLink]=\"link.url\">\n              {{link.title}}\n            </a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"c-sidebar__section-container c-sidebar__section-container--sm\">\n        <h3 class=\"c-sidebar__heading\">Objects</h3>\n        <ul class=\"c-menu\">\n          <li *ngFor=\"let link of objectsLinks\">\n            <a class=\"c-menu__item\" routerLinkActive=\"c-menu__item--active\" [routerLink]=\"link.url\">\n              {{link.title}}\n            </a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"c-sidebar__section-container c-sidebar__section-container--sm\">\n        <h3 class=\"c-sidebar__heading\">Components</h3>\n        <ul class=\"c-menu\">\n          <li *ngFor=\"let link of componentsLinks\">\n            <a class=\"c-menu__item\" routerLinkActive=\"c-menu__item--active\" [routerLink]=\"link.url\">\n              {{link.title}}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <main class=\"c-sidebar__content\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/styleguide.module.ts":
/*!*************************************************!*\
  !*** ./src/app/styleguide/styleguide.module.ts ***!
  \*************************************************/
/*! exports provided: StyleguideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleguideModule", function() { return StyleguideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var pure_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pure-elements */ "./node_modules/pure-elements/dist/index.js");
/* harmony import */ var _brand_logo_brand_logo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../brand-logo/brand-logo.module */ "./src/app/brand-logo/brand-logo.module.ts");
/* harmony import */ var _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styleguide-routing.module */ "./src/app/styleguide/styleguide-routing.module.ts");
/* harmony import */ var _styleguide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styleguide */ "./src/app/styleguide/styleguide.ts");
/* harmony import */ var _intro_intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intro/intro */ "./src/app/styleguide/intro/intro.ts");
/* harmony import */ var _base_unit_base_unit_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-unit/base-unit-demo */ "./src/app/styleguide/base-unit/base-unit-demo.ts");
/* harmony import */ var _colour_scheme_colour_scheme_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./colour-scheme/colour-scheme-demo */ "./src/app/styleguide/colour-scheme/colour-scheme-demo.ts");
/* harmony import */ var _typography_typography_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typography/typography-demo */ "./src/app/styleguide/typography/typography-demo.ts");
/* harmony import */ var _controls_controls_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/controls-demo */ "./src/app/styleguide/controls/controls-demo.ts");
/* harmony import */ var _grid_grid_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grid/grid-demo */ "./src/app/styleguide/grid/grid-demo.ts");
/* harmony import */ var _badge_badge_demo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./badge/badge-demo */ "./src/app/styleguide/badge/badge-demo.ts");
/* harmony import */ var _button_button_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./button/button-demo */ "./src/app/styleguide/button/button-demo.ts");
/* harmony import */ var _card_card_demo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card/card-demo */ "./src/app/styleguide/card/card-demo.ts");
/* harmony import */ var _data_grid_data_grid_demo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data-grid/data-grid-demo */ "./src/app/styleguide/data-grid/data-grid-demo.ts");
/* harmony import */ var _dropdown_dropdown_demo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dropdown/dropdown-demo */ "./src/app/styleguide/dropdown/dropdown-demo.ts");
/* harmony import */ var _icon_icon_demo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icon/icon-demo */ "./src/app/styleguide/icon/icon-demo.ts");
/* harmony import */ var _form_control_form_control_demo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form-control/form-control-demo */ "./src/app/styleguide/form-control/form-control-demo.ts");
/* harmony import */ var _loading_loading_demo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loading/loading-demo */ "./src/app/styleguide/loading/loading-demo.ts");
/* harmony import */ var _menu_menu_demo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./menu/menu-demo */ "./src/app/styleguide/menu/menu-demo.ts");
/* harmony import */ var _modal_modal_demo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modal/modal-demo */ "./src/app/styleguide/modal/modal-demo.ts");
/* harmony import */ var _round_badge_round_badge_demo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./round-badge/round-badge-demo */ "./src/app/styleguide/round-badge/round-badge-demo.ts");
/* harmony import */ var _switcher_switcher_demo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./switcher/switcher-demo */ "./src/app/styleguide/switcher/switcher-demo.ts");
/* harmony import */ var _toast_toast_demo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./toast/toast-demo */ "./src/app/styleguide/toast/toast-demo.ts");
/* harmony import */ var _tooltip_tooltip_demo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tooltip/tooltip-demo */ "./src/app/styleguide/tooltip/tooltip-demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var toastConfig = {
    cssTransitionDuration: 300,
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
};
var StyleguideModule = /** @class */ (function () {
    function StyleguideModule() {
    }
    StyleguideModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_5__["StyleguideRoutingModule"],
                pure_elements__WEBPACK_IMPORTED_MODULE_3__["PureElements"],
                _brand_logo_brand_logo_module__WEBPACK_IMPORTED_MODULE_4__["BrandLogoModule"]
            ],
            declarations: [
                _styleguide__WEBPACK_IMPORTED_MODULE_6__["Styleguide"],
                _intro_intro__WEBPACK_IMPORTED_MODULE_7__["Intro"],
                _base_unit_base_unit_demo__WEBPACK_IMPORTED_MODULE_8__["BaseUnitDemo"],
                _colour_scheme_colour_scheme_demo__WEBPACK_IMPORTED_MODULE_9__["ColourSchemeDemo"],
                _typography_typography_demo__WEBPACK_IMPORTED_MODULE_10__["TypographyDemo"],
                _controls_controls_demo__WEBPACK_IMPORTED_MODULE_11__["ControlsDemo"],
                _grid_grid_demo__WEBPACK_IMPORTED_MODULE_12__["GridDemo"],
                _badge_badge_demo__WEBPACK_IMPORTED_MODULE_13__["BadgeDemo"],
                _button_button_demo__WEBPACK_IMPORTED_MODULE_14__["ButtonDemo"],
                _card_card_demo__WEBPACK_IMPORTED_MODULE_15__["CardDemo"],
                _data_grid_data_grid_demo__WEBPACK_IMPORTED_MODULE_16__["DataGridDemo"],
                _dropdown_dropdown_demo__WEBPACK_IMPORTED_MODULE_17__["DropdownDemo"],
                _icon_icon_demo__WEBPACK_IMPORTED_MODULE_18__["IconDemo"],
                _form_control_form_control_demo__WEBPACK_IMPORTED_MODULE_19__["FormControlDemo"],
                _loading_loading_demo__WEBPACK_IMPORTED_MODULE_20__["LoadingDemo"],
                _menu_menu_demo__WEBPACK_IMPORTED_MODULE_21__["MenuDemo"],
                _modal_modal_demo__WEBPACK_IMPORTED_MODULE_22__["ModalDemo"],
                _round_badge_round_badge_demo__WEBPACK_IMPORTED_MODULE_23__["RoundBadgeDemo"],
                _switcher_switcher_demo__WEBPACK_IMPORTED_MODULE_24__["SwitcherDemo"],
                _toast_toast_demo__WEBPACK_IMPORTED_MODULE_25__["ToastDemo"],
                _tooltip_tooltip_demo__WEBPACK_IMPORTED_MODULE_26__["TooltipDemo"]
            ],
            providers: [
                {
                    provide: pure_elements__WEBPACK_IMPORTED_MODULE_3__["PureToastDefaultOptions"],
                    useValue: toastConfig
                }
            ],
        })
    ], StyleguideModule);
    return StyleguideModule;
}());



/***/ }),

/***/ "./src/app/styleguide/styleguide.ts":
/*!******************************************!*\
  !*** ./src/app/styleguide/styleguide.ts ***!
  \******************************************/
/*! exports provided: Styleguide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styleguide", function() { return Styleguide; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Styleguide = /** @class */ (function () {
    function Styleguide() {
        this.commonLinks = [
            // {
            //   title: 'Sizes',
            //   url: 'sizes'
            // },
            {
                title: 'Colour Scheme',
                url: 'colour-scheme'
            },
            {
                title: 'Typography',
                url: 'typography'
            }
        ];
        this.objectsLinks = [
            {
                title: 'Grid',
                url: 'grid'
            },
            {
                title: 'Controls',
                url: 'controls'
            }
        ];
        this.componentsLinks = [
            {
                title: 'Badge',
                url: 'badge'
            },
            {
                title: 'Button',
                url: 'button'
            },
            {
                title: 'Card',
                url: 'card'
            },
            {
                title: 'Data Grid',
                url: 'data-grid'
            },
            {
                title: 'Dropdown',
                url: 'dropdown'
            },
            {
                title: 'Form Control',
                url: 'form-control'
            },
            {
                title: 'Icon',
                url: 'icon'
            },
            {
                title: 'Loading',
                url: 'loading'
            },
            {
                title: 'Menu',
                url: 'menu'
            },
            {
                title: 'Modal',
                url: 'modal'
            },
            {
                title: 'Round Badge',
                url: 'round-badge'
            },
            {
                title: 'Switcher',
                url: 'switcher'
            },
            {
                title: 'Toast',
                url: 'toast'
            },
            {
                title: 'Tooltip',
                url: 'tooltip'
            }
        ];
    }
    Styleguide = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./styleguide.html */ "./src/app/styleguide/styleguide.html")
        })
    ], Styleguide);
    return Styleguide;
}());



/***/ }),

/***/ "./src/app/styleguide/switcher/switcher-demo.html":
/*!********************************************************!*\
  !*** ./src/app/styleguide/switcher/switcher-demo.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Switcher</h1>\n    <p class=\"c-item-container__desc\">Styles on top of the <a href=\"{{LibData.pureDemoLink}}switcher\" target=\"_blank\" rel=\"noopener\">Pure Switcher</a> element.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n      <pure-switcher [checked]=\"true\">Click me</pure-switcher>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">States</h2>\n    <span class=\"c-component__container\">\n      <pure-switcher [disabled]=\"true\" [checked]=\"true\">Disabled checked</pure-switcher>\n    </span>\n    <span class=\"c-component__container\">\n      <pure-switcher [disabled]=\"true\">Disabled</pure-switcher>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/switcher/switcher-demo.ts":
/*!******************************************************!*\
  !*** ./src/app/styleguide/switcher/switcher-demo.ts ***!
  \******************************************************/
/*! exports provided: SwitcherDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitcherDemo", function() { return SwitcherDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib-data */ "./src/app/lib-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SwitcherDemo = /** @class */ (function () {
    function SwitcherDemo() {
        this.LibData = _lib_data__WEBPACK_IMPORTED_MODULE_1__["LibData"];
    }
    SwitcherDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./switcher-demo.html */ "./src/app/styleguide/switcher/switcher-demo.html")
        })
    ], SwitcherDemo);
    return SwitcherDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/toast/toast-demo.html":
/*!**************************************************!*\
  !*** ./src/app/styleguide/toast/toast-demo.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Toast</h1>\n    <p class=\"c-item-container__desc\">Styles on top of the <a href=\"{{LibData.pureDemoLink}}toast\" target=\"_blank\" rel=\"noopener\">Pure Toast</a> element.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n      <div class=\"u-relative\">\n        <pure-button (onClick)=\"showToast()\">Show Toast</pure-button>\n      </div>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/styleguide/toast/toast-demo.ts":
/*!************************************************!*\
  !*** ./src/app/styleguide/toast/toast-demo.ts ***!
  \************************************************/
/*! exports provided: ToastDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastDemo", function() { return ToastDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pure_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pure-elements */ "./node_modules/pure-elements/dist/index.js");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib-data */ "./src/app/lib-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastDemo = /** @class */ (function () {
    function ToastDemo(toast) {
        this.toast = toast;
        this.LibData = _lib_data__WEBPACK_IMPORTED_MODULE_2__["LibData"];
    }
    ToastDemo.prototype.showToast = function () {
        var toastRef = this.toast.open('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'Dismiss');
        toastRef.onAction().subscribe(function () {
            console.log('Action was triggered!');
        });
        toastRef.afterDismissed().subscribe(function () {
            console.log('Dismissed!');
        });
    };
    ToastDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./toast-demo.html */ "./src/app/styleguide/toast/toast-demo.html")
        }),
        __metadata("design:paramtypes", [pure_elements__WEBPACK_IMPORTED_MODULE_1__["PureToast"]])
    ], ToastDemo);
    return ToastDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/tooltip/tooltip-demo.html":
/*!******************************************************!*\
  !*** ./src/app/styleguide/tooltip/tooltip-demo.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Tooltip</h1>\n    <p class=\"c-item-container__desc\">Styles on top of the <a href=\"{{LibData.pureDemoLink}}tooltip\" target=\"_blank\" rel=\"noopener\">Pure Tooltip</a> element.</p>\n  </header>\n\n  <div class=\"c-component\">\n    <span class=\"c-component__container\">\n      <div class=\"u-relative\">\n        <pure-message pureTooltip=\"Tooltip!\">Hover me</pure-message>\n      </div>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Custom Positioning</h2>\n\n    <span class=\"c-component__container\">\n      <div class=\"u-relative\">\n        <pure-message pureTooltip=\"Tooltip!\" pureTooltipPosition=\"left\">Left</pure-message>\n      </div>\n    </span>\n\n    <span class=\"c-component__container\">\n      <div class=\"u-relative\">\n        <pure-message pureTooltip=\"Tooltip!\" pureTooltipPosition=\"bottom\">Bottom</pure-message>\n      </div>\n    </span>\n\n    <span class=\"c-component__container\">\n      <div class=\"u-relative\">\n        <pure-message pureTooltip=\"Tooltip!\" pureTooltipPosition=\"right\">Right</pure-message>\n      </div>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h2 class=\"c-component__heading\">Template Based</h2>\n\n    <span class=\"c-component__container\">\n      <div class=\"u-relative\">\n        <pure-message [pureTooltip]=\"tooltipTpl\">Hover me</pure-message>\n      </div>\n    </span>\n  </div>\n</div>\n\n<ng-template #tooltipTpl>\n  I can include any element, like:\n  <ul class=\"u-margin-bottom-0\">\n    <li>Lists\n    <li>Images\n    <li>Paragraphs\n    <li>Etc.\n  </ul>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/styleguide/tooltip/tooltip-demo.ts":
/*!****************************************************!*\
  !*** ./src/app/styleguide/tooltip/tooltip-demo.ts ***!
  \****************************************************/
/*! exports provided: TooltipDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemo", function() { return TooltipDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib-data */ "./src/app/lib-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TooltipDemo = /** @class */ (function () {
    function TooltipDemo() {
        this.LibData = _lib_data__WEBPACK_IMPORTED_MODULE_1__["LibData"];
    }
    TooltipDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tooltip-demo.html */ "./src/app/styleguide/tooltip/tooltip-demo.html")
        })
    ], TooltipDemo);
    return TooltipDemo;
}());



/***/ }),

/***/ "./src/app/styleguide/typography/typography-demo.html":
/*!************************************************************!*\
  !*** ./src/app/styleguide/typography/typography-demo.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-item-container\">\n  <header class=\"c-item-container__header\">\n    <h1 class=\"c-item-container__heading\">Typography</h1>\n  </header>\n\n  <div class=\"c-component\">\n    <h1 class=\"c-component__heading\">Headings</h1>\n    <span class=\"c-component__container\">\n      <h1 class=\"c-h1\">Heading 1</h1>\n      <h2 class=\"c-h2\">Heading 2</h2>\n      <h3 class=\"c-h3\">Heading 3</h3>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h1 class=\"c-component__heading\">Paragraph</h1>\n    <span class=\"c-component__container c-component__container--full-width\">\n      <p>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit</em>. Similique <b>veniam sunt, amet</b>! Harum impedit<sup>nemo</sup> unde deleniti<sub>eaque</sub> officia aspernatur provident nulla quis, pariatur a et atque earum nobis molestiae quibusdam ipsum odit ducimus illo ad deserunt asperiores qui, voluptate vitae! Esse hic, itaque, similique quasi culpa <strong>ipsa tenetur consequuntur</strong><i> deserunt perferendis molestias illum eos</i>. <s>Corporis excepturi ipsa molestias ipsam delectus mollitia</s>, reprehenderit blanditiis, earum impedit. <u>Mollitia maiores est obcaecati soluta</u> sunt voluptas illum debitis tempora ratione esse consectetur ipsam molestiae nulla inventore tempore quo, accusantium deleniti dicta explicabo dolore <mark>repellat aperiam iure ducimus quam!</mark> Fugit dicta, vero officiis in laudantium tempora! <small>Minus, tenetur voluptates hic</small>, esse labore ab facere ipsa enim, rem incidunt unde accusantium similique fuga molestiae. <q>Repudiandae</q>?</p>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h1 class=\"c-component__heading\">Blockquote</h1>\n    <span class=\"c-component__container c-component__container--full-width\">\n      <blockquote class=\"c-blockquote\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit molestiae beatae ducimus in libero ex. Blanditiis magni saepe amet. Error ipsum iusto tenetur, rerum maiores minima aspernatur voluptatem! Expedita inventore obcaecati quia deleniti temporibus ea, reprehenderit error sequi eligendi laudantium ipsum quibusdam est mollitia, autem, corrupti optio quae accusantium ut. Harum, eum iste animi corporis! Enim tempore natus vero dignissimos.</blockquote>\n\n      <blockquote class=\"c-blockquote c-blockquote--success\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, rem?</blockquote>\n\n      <blockquote class=\"c-blockquote c-blockquote--warning\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint, esse excepturi repellendus dolor pariatur magnam laboriosam suscipit consequatur, necessitatibus natus fugiat veritatis eius alias! Tempora fugit minus, fuga id!</blockquote>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h1 class=\"c-component__heading\">Hyperlink</h1>\n    <span class=\"c-component__container\">\n      <a routerLink=\"/typography\">I'm going to nowhere</a>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h1 class=\"c-component__heading\">Form Label</h1>\n    <span class=\"c-component__container\">\n      <pure-label>First name</pure-label>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h1 class=\"c-component__heading\">Message</h1>\n    <span class=\"c-component__container\">\n      <pure-message>Earth is bigger than Moon.</pure-message>\n      <pure-message theme=\"success\">It is sunny today.</pure-message>\n      <pure-message theme=\"warning\">It is storm today.</pure-message>\n      <pure-message theme=\"hint\">It is better to take an umbrella.</pure-message>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h1 class=\"c-component__heading\">Lists</h1>\n    <span class=\"c-component__container\">\n      <ul>\n        <li>Monkeys</li>\n        <li>Snakes</li>\n        <li>Giraffes</li>\n      </ul>\n    </span>\n    <span class=\"c-component__container\">\n      <ol>\n        <li>Apples</li>\n        <li>Watermelons</li>\n        <li>Oranges</li>\n      </ol>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h1 class=\"c-component__heading\">Preformatted Text</h1>\n    <span class=\"c-component__container\">\n      <pre>{{\"{\n  disabled: true,\n  focused:  false,\n  hasValue: true\n}\"}}</pre>\n    </span>\n  </div>\n\n  <div class=\"c-component\">\n    <h1 class=\"c-component__heading\">Code</h1>\n    <span class=\"c-component__container\">\n      <pre>\n<code>{{\"@Input('pureTooltipTheme')\nget theme(): PureTheme {\n  return this._theme;\n}\"}}</code>\n      </pre>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/styleguide/typography/typography-demo.ts":
/*!**********************************************************!*\
  !*** ./src/app/styleguide/typography/typography-demo.ts ***!
  \**********************************************************/
/*! exports provided: TypographyDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyDemo", function() { return TypographyDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyDemo = /** @class */ (function () {
    function TypographyDemo() {
    }
    TypographyDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./typography-demo.html */ "./src/app/styleguide/typography/typography-demo.html")
        })
    ], TypographyDemo);
    return TypographyDemo;
}());



/***/ })

}]);
//# sourceMappingURL=styleguide-styleguide-module.js.map