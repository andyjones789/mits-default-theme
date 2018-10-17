(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-demo-module"],{

/***/ "./src/app/demo/demo-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/demo/demo-routing.module.ts ***!
  \*********************************************/
/*! exports provided: DemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRoutingModule", function() { return DemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo */ "./src/app/demo/demo.ts");
/* harmony import */ var _users_users_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users-list */ "./src/app/demo/users/users-list.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _demo__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"],
        children: [
            { path: 'users', component: _users_users_list__WEBPACK_IMPORTED_MODULE_3__["UsersList"] },
            { path: '', redirectTo: 'users' },
            { path: '**', redirectTo: 'users' }
        ]
    }
];
var DemoRoutingModule = /** @class */ (function () {
    function DemoRoutingModule() {
    }
    DemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DemoRoutingModule);
    return DemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/demo.html":
/*!********************************!*\
  !*** ./src/app/demo/demo.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-sidebar\">\n  <div class=\"c-sidebar__container\">\n    <nav class=\"c-sidebar__nav\">\n      <div class=\"c-sidebar__section-container\">\n        <brand-logo theme=\"washed\" link=\"/styleguide\"></brand-logo>\n      </div>\n\n      <div class=\"c-sidebar__section-container c-sidebar__section-container--sm\">\n        <ul class=\"c-menu\">\n          <li *ngFor=\"let section of sections\">\n            <a class=\"c-menu__item\" routerLinkActive=\"c-menu__item--active\" [routerLink]=\"section.url\">\n              {{section.title}}\n              <sup *ngIf=\"section.newItems\" class=\"c-round-badge\"></sup>\n            </a>\n          </li>\n        </ul>\n      </div>\n\n      <footer class=\"c-sidebar__footer\">\n        <div class=\"c-user-panel\">\n          <img [src]=\"user.picture.large\" alt=\"User logo\" class=\"c-user-panel__avatar\">\n          <span class=\"c-user-panel__name\">\n            Hi, <span class=\"c-user-panel__name-container u-text-capitalize\">{{user.name.first + ' ' + user.name.last}}</span>\n          </span>\n          <span class=\"c-user-panel__controls\">\n            <span class=\"u-relative\">\n              <pure-button theme=\"iconic transparent\" [pureDropdownTriggerFor]=\"userDropdown\">\n                <i class=\"c-icon\">more_vert</i>\n              </pure-button> \n\n              <pure-dropdown #userDropdown=\"pureDropdown\" yPosition=\"before\" xPosition=\"above\">\n                <div pureDropdownItem>\n                  <div class=\"u-flex-row u-align-items-center\">\n                    <i class=\"c-icon u-margin-right-4s\">person</i>\n                    Profile\n                  </div>\n                </div>\n                <div pureDropdownItem>\n                  <div class=\"u-flex-row u-align-items-center\">\n                    <i class=\"c-icon u-margin-right-4s\">settings</i>\n                    Settings\n                  </div>\n                </div>\n                <div pureDropdownItem>\n                  <div class=\"u-flex-row u-align-items-center\">\n                    <i class=\"c-icon u-margin-right-4s\">power_settings_new</i>\n                    Log Out\n                  </div>\n                </div>\n              </pure-dropdown>\n            </span>\n          </span>\n        </div>\n      </footer>\n    </nav>\n\n    <main class=\"c-sidebar__content\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/demo.module.ts":
/*!*************************************!*\
  !*** ./src/app/demo/demo.module.ts ***!
  \*************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var pure_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-elements */ "./node_modules/pure-elements/dist/index.js");
/* harmony import */ var _brand_logo_brand_logo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../brand-logo/brand-logo.module */ "./src/app/brand-logo/brand-logo.module.ts");
/* harmony import */ var _demo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-routing.module */ "./src/app/demo/demo-routing.module.ts");
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo */ "./src/app/demo/demo.ts");
/* harmony import */ var _users_users_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users-list */ "./src/app/demo/users/users-list.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _demo__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                _users_users_list__WEBPACK_IMPORTED_MODULE_6__["UsersList"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _demo_routing_module__WEBPACK_IMPORTED_MODULE_4__["DemoRoutingModule"],
                pure_elements__WEBPACK_IMPORTED_MODULE_2__["PureElements"],
                _brand_logo_brand_logo_module__WEBPACK_IMPORTED_MODULE_3__["BrandLogoModule"]
            ]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/demo/demo.ts":
/*!******************************!*\
  !*** ./src/app/demo/demo.ts ***!
  \******************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.sections = [
            {
                title: 'Dashboard',
                url: 'dashboard'
            },
            {
                title: 'Users',
                url: 'users'
            },
            {
                title: 'Customers',
                url: 'customers'
            },
            {
                title: 'Timesheets',
                url: 'timesheets',
                newItems: 3
            },
            {
                title: 'Administration',
                url: 'administration'
            },
            {
                title: 'Reports',
                url: 'reports'
            }
        ];
        this.user = _user__WEBPACK_IMPORTED_MODULE_1__["USER"];
    }
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./demo.html */ "./src/app/demo/demo.html")
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/users/users-list.html":
/*!********************************************!*\
  !*** ./src/app/demo/users/users-list.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-section\">\n  <header class=\"c-section__header\">\n    <div class=\"u-flex-row u-align-items-center u-justify-between\">\n      <h1 class=\"c-section__heading\">Users</h1>\n\n      <span class=\"o-controls u-align-items-center\">\n        <pure-form-control theme=\"\">\n          <i class=\"c-icon\" style=\"margin-top: .1rem\" purePrefix>search</i>\n          <input type=\"search\" placeholder=\"Search\" pureInput>\n        </pure-form-control>\n        <pure-button theme=\"iconic\" (onClick)=\"showAddWindow = !showAddWindow\">\n          <i class=\"c-icon\">add</i>\n        </pure-button>\n      </span>\n    </div>\n  </header>\n\n  <main>\n    <table class=\"c-data-grid\">\n      <colgroup>\n        <col width=\"64%\">\n        <col width=\"16%\">\n        <col width=\"16%\">\n        <col width=\"2%\">\n      </colgroup>\n      <thead class=\"c-data-grid__thead\">\n        <tr class=\"c-data-grid__tr\">\n          <th class=\"c-data-grid__th\">Name</th>\n          <th class=\"c-data-grid__th\">Status</th>\n          <th class=\"c-data-grid__th\">Role</th>\n          <th class=\"c-data-grid__th\"></th>\n        </tr>\n      </thead>\n      <tbody class=\"c-data-grid__tbody\">\n        <tr class=\"c-data-grid__tr\" *ngFor=\"let user of users\">\n          <td class=\"c-data-grid__td\">\n            <div class=\"u-flex-row u-align-items-center\">\n              <img class=\"c-user-pic u-margin-right\" [src]=\"user.picture.large\" alt=\"User photo\">\n              <div>\n                <div class=\"u-text-capitalize\">{{user.name.first + ' ' + user.name.last}}</div>\n                <div class=\"u-color-primary u-font-sm\">{{user.email}}</div>\n              </div>\n            </div>\n          </td>\n          <td class=\"c-data-grid__td\">\n            <span class=\"c-badge\" \n                  [class.c-badge--success]=\"user.status === 'approved'\"\n                  [class.c-badge--warning]=\"user.status === 'rejected'\"\n                  [class.c-badge--neutral]=\"user.status === 'inactive'\">\n              {{user.status}}\n            </span>\n          </td>\n          <td class=\"c-data-grid__td u-text-capitalize\">{{user.role}}</td>\n          <td class=\"c-data-grid__td u-text-right\">\n            <div class=\"c-data-grid__hover-content u-relative\">\n              <pure-button theme=\"iconic transparent\" [pureDropdownTriggerFor]=\"userDropdown\">\n                <i class=\"c-icon\">more_vert</i>\n              </pure-button>\n\n              <pure-dropdown #userDropdown=\"pureDropdown\" yPosition=\"before\" xPosition=\"above\">\n                <div pureDropdownItem>\n                  <div class=\"u-flex-row u-align-items-center\">\n                    <i class=\"c-icon u-margin-right-4s\">person</i>\n                    Edit Profile\n                  </div>\n                </div>\n                <div pureDropdownItem>\n                  <div class=\"u-flex-row u-align-items-center\">\n                    <i class=\"c-icon u-margin-right-4s\">favorite</i>\n                    Favorite\n                  </div>\n                </div>\n                <div pureDropdownItem>\n                  <div class=\"u-flex-row u-align-items-center u-color-accent-negative-dark\">\n                    <i class=\"c-icon u-margin-right-4s\">not_interested</i>\n                    Block\n                  </div>\n                </div>\n              </pure-dropdown>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </main>\n</div>\n\n\n<!-- Add user modal -->\n<pure-modal-window [(show)]=\"showAddWindow\">\n  <div class=\"c-modal-window\">\n    <div class=\"c-modal-window__content-container\">\n      <header class=\"c-modal-window__header\">\n        <h1 class=\"c-modal-window__heading\">New User</h1>\n      </header>\n      <div class=\"c-modal-window__content\">\n        <div class=\"o-grid o-grid--no-outer-gap\">\n          <div class=\"o-cell o-cell--1/3\">\n            <pure-form-control label=\"First name\">\n              <input type=\"text\" placeholder=\"Enter first name\" autofocus pureInput>\n            </pure-form-control>\n          </div>\n          <div class=\"o-cell o-cell--1/3\">\n            <pure-form-control label=\"Last name\">\n              <input type=\"text\" placeholder=\"Enter last name\" pureInput>\n            </pure-form-control>\n          </div>\n          <div class=\"o-cell o-cell--1/3\"></div>\n\n          <div class=\"o-cell o-cell--1/3\">\n            <pure-form-control label=\"Email\">\n              <input type=\"email\" placeholder=\"Enter email\" pureInput>\n            </pure-form-control>\n          </div>\n          <div class=\"o-cell o-cell--1/3\">\n            <pure-form-control label=\"Date of birth\">\n              <input type=\"date\" placeholder=\"Enter date\" pureInput>\n            </pure-form-control>\n          </div>\n\n          <div class=\"o-cell o-cell--2/3\">\n            <pure-form-control label=\"Notes\">\n              <textarea placeholder=\"Enter notes\" pureInput></textarea>\n            </pure-form-control>\n          </div>\n          <div class=\"o-cell o-cell--1/3\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"c-modal-window__footer-container\">\n      <footer class=\"c-modal-window__footer\">\n        <div class=\"o-controls\">\n          <pure-button theme=\"ghost\" (onClick)=\"showAddWindow = false\">Cancel</pure-button>\n          <pure-button theme=\"success\" (onClick)=\"showAddWindow = false\">Add</pure-button>\n        </div>\n      </footer>\n    </div>\n  </div>\n</pure-modal-window>"

/***/ }),

/***/ "./src/app/demo/users/users-list.ts":
/*!******************************************!*\
  !*** ./src/app/demo/users/users-list.ts ***!
  \******************************************/
/*! exports provided: UsersList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersList", function() { return UsersList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../users */ "./src/app/users.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UsersList = /** @class */ (function () {
    function UsersList() {
        this.users = _users__WEBPACK_IMPORTED_MODULE_1__["USERS"];
    }
    UsersList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./users-list.html */ "./src/app/demo/users/users-list.html")
        })
    ], UsersList);
    return UsersList;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
var USER = {
    "gender": "female",
    "name": {
        "title": "mrs",
        "first": "ella",
        "last": "fisher"
    },
    "location": {
        "street": "4166 church street",
        "city": "durham",
        "state": "east sussex",
        "postcode": "S5 1SL",
        "coordinates": {
            "latitude": "13.0245",
            "longitude": "161.2156"
        },
        "timezone": {
            "offset": "+5:00",
            "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
    },
    "email": "ella.fisher@example.com",
    "login": {
        "uuid": "549a6245-6b02-473b-a4ec-75f5207f3cbb",
        "username": "smallladybug414",
        "password": "truck1",
        "salt": "QblBoTkr",
        "md5": "c7463f10ab2d68e3e620e207d73c114e",
        "sha1": "aa913c2783db44cb0d336d4c2263a6472e2be24f",
        "sha256": "acce5692d7eb788ca5c30268dd5ffc10e2c0af945fd04e56406b616d7ef32db3"
    },
    "dob": {
        "date": "1995-04-22T07:33:16Z",
        "age": 23
    },
    "registered": {
        "date": "2007-07-23T12:22:02Z",
        "age": 11
    },
    "phone": "0141 736 6666",
    "cell": "0741-677-276",
    "id": {
        "name": "NINO",
        "value": "SA 11 53 19 J"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/women/50.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/50.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/50.jpg"
    },
    "nat": "GB"
};


/***/ })

}]);
//# sourceMappingURL=demo-demo-module.js.map