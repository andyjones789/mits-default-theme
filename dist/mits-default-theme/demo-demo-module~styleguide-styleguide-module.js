(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-demo-module~styleguide-styleguide-module"],{

/***/ "./src/app/brand-logo/brand-logo.html":
/*!********************************************!*\
  !*** ./src/app/brand-logo/brand-logo.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-brand-logo\"\n     [class.c-brand-logo--washed]=\"theme === 'washed'\">\n  <a class=\"c-brand-logo__link\" [routerLink]=\"link\">\n    <img class=\"c-brand-logo__img\" src=\"assets/img/logo.png\" alt=\"Make I.T. Simple logo\">\n  </a>\n  <span class=\"c-brand-logo__span\">\n    <p><b>Make I.T. Simple</b></p>\n    <p>Default Theme</p>\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/brand-logo/brand-logo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/brand-logo/brand-logo.module.ts ***!
  \*************************************************/
/*! exports provided: BrandLogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandLogoModule", function() { return BrandLogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _brand_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brand-logo */ "./src/app/brand-logo/brand-logo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BrandLogoModule = /** @class */ (function () {
    function BrandLogoModule() {
    }
    BrandLogoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_brand_logo__WEBPACK_IMPORTED_MODULE_2__["BrandLogo"]],
            exports: [_brand_logo__WEBPACK_IMPORTED_MODULE_2__["BrandLogo"]]
        })
    ], BrandLogoModule);
    return BrandLogoModule;
}());



/***/ }),

/***/ "./src/app/brand-logo/brand-logo.ts":
/*!******************************************!*\
  !*** ./src/app/brand-logo/brand-logo.ts ***!
  \******************************************/
/*! exports provided: BrandLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandLogo", function() { return BrandLogo; });
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

var BrandLogo = /** @class */ (function () {
    function BrandLogo() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BrandLogo.prototype, "link", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BrandLogo.prototype, "theme", void 0);
    BrandLogo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'brand-logo',
            template: __webpack_require__(/*! ./brand-logo.html */ "./src/app/brand-logo/brand-logo.html")
        })
    ], BrandLogo);
    return BrandLogo;
}());



/***/ }),

/***/ "./src/app/users.ts":
/*!**************************!*\
  !*** ./src/app/users.ts ***!
  \**************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
var USERS = [
    {
        "gender": "female",
        "name": {
            "title": "ms",
            "first": "karen",
            "last": "vargas"
        },
        "role": "staff",
        "location": {
            "street": "8544 fairview road",
            "city": "cambridge",
            "state": "warwickshire",
            "postcode": "OJ2T 7DS",
            "coordinates": {
                "latitude": "-32.9142",
                "longitude": "20.1297"
            },
            "timezone": {
                "offset": "+8:00",
                "description": "Beijing, Perth, Singapore, Hong Kong"
            }
        },
        "email": "karen.vargas@example.com",
        "login": {
            "uuid": "8eddd22e-3b52-420f-b8e1-33844266e2cd",
            "username": "beautifulduck305",
            "password": "undertak",
            "salt": "Uuijb77F",
            "md5": "a882397a90141d16e8104015de9236fb",
            "sha1": "d796423fceea259e8582c8bdf9a23f6e9cd198d4",
            "sha256": "591f23673fbaafe0af104760c16b7dfabfa8f47bbc0bdd0bceccad6b1e6ccb81"
        },
        "dob": {
            "date": "1973-04-22T09:12:16Z",
            "age": 45
        },
        "registered": {
            "date": "2006-07-22T08:25:47Z",
            "age": 12
        },
        "phone": "017687 55213",
        "cell": "0798-289-009",
        "id": {
            "name": "NINO",
            "value": "XE 64 15 33 U"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/27.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
        },
        "nat": "GB",
        "status": "approved"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "marvin",
            "last": "evans"
        },
        "role": "admin",
        "location": {
            "street": "3560 park lane",
            "city": "derby",
            "state": "durham",
            "postcode": "V7W 4QR",
            "coordinates": {
                "latitude": "-59.8395",
                "longitude": "169.4167"
            },
            "timezone": {
                "offset": "-7:00",
                "description": "Mountain Time (US & Canada)"
            }
        },
        "email": "marvin.evans@example.com",
        "login": {
            "uuid": "f891a180-24c9-4233-9a3e-d0ead9108f99",
            "username": "tinyfish812",
            "password": "vienna",
            "salt": "hunz7hbH",
            "md5": "b4b30c7acdead1980fb3057c5c4a62cb",
            "sha1": "f899243816ad33a593c50c5fd830d09eea08d75e",
            "sha256": "8200a73369285cb476200cd8a7a956ff7460129d19ede8c7c8d6b010f8eaecdb"
        },
        "dob": {
            "date": "1987-10-27T09:27:53Z",
            "age": 30
        },
        "registered": {
            "date": "2005-04-17T05:34:54Z",
            "age": 13
        },
        "phone": "026 9122 8590",
        "cell": "0726-946-960",
        "id": {
            "name": "NINO",
            "value": "NH 45 24 62 T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/64.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/64.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/64.jpg"
        },
        "nat": "GB",
        "status": "rejected"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "neil",
            "last": "daniels"
        },
        "role": "admin",
        "location": {
            "street": "380 mill road",
            "city": "sunderland",
            "state": "kent",
            "postcode": "QT20 5JF",
            "coordinates": {
                "latitude": "-22.7531",
                "longitude": "-49.0308"
            },
            "timezone": {
                "offset": "+3:30",
                "description": "Tehran"
            }
        },
        "email": "neil.daniels@example.com",
        "login": {
            "uuid": "33b9d6ae-93d8-451e-9c3d-20305658899f",
            "username": "bigrabbit180",
            "password": "watford",
            "salt": "AfuDgQR0",
            "md5": "51c7876ed221aebb258c9b57b710eb2d",
            "sha1": "6f3bc4eb6455240cdc93eb700d1a71c64b911ebe",
            "sha256": "b9342ae16334937b6f60c2ae2c836aeb6d28545d70555110b7156f3261093c12"
        },
        "dob": {
            "date": "1982-04-08T03:29:44Z",
            "age": 36
        },
        "registered": {
            "date": "2010-07-17T17:07:28Z",
            "age": 8
        },
        "phone": "019467 55744",
        "cell": "0795-864-673",
        "id": {
            "name": "NINO",
            "value": "SM 15 24 93 G"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/54.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
        },
        "nat": "GB",
        "status": "approved"
    }, {
        "gender": "female",
        "name": {
            "title": "ms",
            "first": "eleanor",
            "last": "thompson"
        },
        "role": "admin",
        "location": {
            "street": "4842 park lane",
            "city": "nottingham",
            "state": "cleveland",
            "postcode": "TJ0 3DL",
            "coordinates": {
                "latitude": "-6.5009",
                "longitude": "59.9993"
            },
            "timezone": {
                "offset": "+4:30",
                "description": "Kabul"
            }
        },
        "email": "eleanor.thompson@example.com",
        "login": {
            "uuid": "95b26a91-a261-4cb2-8832-574b4197cf38",
            "username": "goldentiger944",
            "password": "pierre",
            "salt": "5XMvCQby",
            "md5": "22a5bbdbfb77fcd5e7ec9ca7dbcc8a14",
            "sha1": "ea9009a3a26b39dce5d6d96f1675a4d792731928",
            "sha256": "a5658a08f2da6fa2d8a3f64b32d9021df07c3d3497ad12903e3915ea115930c3"
        },
        "dob": {
            "date": "1996-11-05T13:53:36Z",
            "age": 21
        },
        "registered": {
            "date": "2009-05-03T05:14:40Z",
            "age": 9
        },
        "phone": "016973 08240",
        "cell": "0786-045-815",
        "id": {
            "name": "NINO",
            "value": "RN 18 10 35 H"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/43.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
        },
        "nat": "GB",
        "status": "rejected"
    }, {
        "gender": "female",
        "name": {
            "title": "ms",
            "first": "melissa",
            "last": "ryan"
        },
        "role": "staff",
        "location": {
            "street": "8904 albert road",
            "city": "dundee",
            "state": "cambridgeshire",
            "postcode": "C1O 6ZP",
            "coordinates": {
                "latitude": "36.0069",
                "longitude": "130.1719"
            },
            "timezone": {
                "offset": "+10:00",
                "description": "Eastern Australia, Guam, Vladivostok"
            }
        },
        "email": "melissa.ryan@example.com",
        "login": {
            "uuid": "3dfc4df0-0feb-4b6f-8b5e-eee6ead81036",
            "username": "whiterabbit701",
            "password": "hamilton",
            "salt": "qiXRGDEW",
            "md5": "5925cd1e9bd253476b865d3004cfdd36",
            "sha1": "bae6606c6be3ea4349a021b68d03c0cf4fcba8eb",
            "sha256": "5317a08cf48762c33abfc93c8c17f2d05889f1dcf41527d1577bfbdd44863105"
        },
        "dob": {
            "date": "1974-11-29T18:46:08Z",
            "age": 43
        },
        "registered": {
            "date": "2015-03-16T17:49:50Z",
            "age": 3
        },
        "phone": "0171 406 3608",
        "cell": "0734-300-601",
        "id": {
            "name": "NINO",
            "value": "ZX 21 46 93 H"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/62.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
        },
        "nat": "GB",
        "status": "approved"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "gregory",
            "last": "palmer"
        },
        "role": "manager",
        "location": {
            "street": "4181 main street",
            "city": "durham",
            "state": "leicestershire",
            "postcode": "IX9 3XG",
            "coordinates": {
                "latitude": "73.2489",
                "longitude": "163.5792"
            },
            "timezone": {
                "offset": "+9:30",
                "description": "Adelaide, Darwin"
            }
        },
        "email": "gregory.palmer@example.com",
        "login": {
            "uuid": "c954bb1b-ecba-440d-92a6-1856c74a3259",
            "username": "organicleopard187",
            "password": "coolhand",
            "salt": "2D0l7m42",
            "md5": "903591e5214ae7d3ce5071b8d3aec29d",
            "sha1": "3803a7a9f922e35b1269cfd51e5698fb49b8b1e8",
            "sha256": "5d04b4603819d5429de124cfe10cc42c082cba17d76a29dbcb8b172924e82c05"
        },
        "dob": {
            "date": "1973-12-22T16:00:30Z",
            "age": 44
        },
        "registered": {
            "date": "2017-11-21T06:50:13Z",
            "age": 0
        },
        "phone": "017684 60150",
        "cell": "0797-909-042",
        "id": {
            "name": "NINO",
            "value": "OX 82 39 47 A"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/60.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
        },
        "nat": "GB",
        "status": "approved"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "lawrence",
            "last": "wilson"
        },
        "role": "staff",
        "location": {
            "street": "8407 queens road",
            "city": "cambridge",
            "state": "cornwall",
            "postcode": "A1 5DU",
            "coordinates": {
                "latitude": "-42.5341",
                "longitude": "-64.3174"
            },
            "timezone": {
                "offset": "+5:45",
                "description": "Kathmandu"
            }
        },
        "email": "lawrence.wilson@example.com",
        "login": {
            "uuid": "81536f20-8fe4-4cd3-ac9c-5a5cc84f8c7e",
            "username": "orangesnake663",
            "password": "hotties",
            "salt": "djHW0gro",
            "md5": "ab53610ac3e5cb66f87d6742004ee215",
            "sha1": "b276625688651cbed35ff453806656b1704a286f",
            "sha256": "3feec3f69dee5560cceb012f99837875a92f7f66d4892f278453b3cf0115c5cd"
        },
        "dob": {
            "date": "1963-07-13T20:38:48Z",
            "age": 55
        },
        "registered": {
            "date": "2006-02-06T02:30:52Z",
            "age": 12
        },
        "phone": "016973 12466",
        "cell": "0786-383-819",
        "id": {
            "name": "NINO",
            "value": "OJ 61 06 75 J"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/66.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/66.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/66.jpg"
        },
        "nat": "GB",
        "status": "inactive"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "elliot",
            "last": "perez"
        },
        "role": "manager",
        "location": {
            "street": "2851 york road",
            "city": "canterbury",
            "state": "hampshire",
            "postcode": "WW2 1EB",
            "coordinates": {
                "latitude": "47.0602",
                "longitude": "-161.3499"
            },
            "timezone": {
                "offset": "-8:00",
                "description": "Pacific Time (US & Canada)"
            }
        },
        "email": "elliot.perez@example.com",
        "login": {
            "uuid": "f3279a08-0206-44fb-8f37-314ebcea0ae0",
            "username": "bigladybug533",
            "password": "biguns",
            "salt": "T6yPTux3",
            "md5": "cdc8335f039f23a834629270ba6f01c5",
            "sha1": "b0c3ba8898d1be4d365a253b953f0be08f90056c",
            "sha256": "99f4b607f92e007df68b23b9bd83283dc9ef520cb87c5843f12958abc09d18dd"
        },
        "dob": {
            "date": "1979-12-04T21:51:22Z",
            "age": 38
        },
        "registered": {
            "date": "2011-07-11T22:03:30Z",
            "age": 7
        },
        "phone": "0101 501 2337",
        "cell": "0775-003-859",
        "id": {
            "name": "NINO",
            "value": "PH 45 65 48 A"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/79.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/79.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/79.jpg"
        },
        "nat": "GB",
        "status": "processing"
    }, {
        "gender": "female",
        "name": {
            "title": "miss",
            "first": "samantha",
            "last": "willis"
        },
        "role": "admin",
        "location": {
            "street": "5685 brick kiln road",
            "city": "stirling",
            "state": "norfolk",
            "postcode": "W52 8JG",
            "coordinates": {
                "latitude": "67.9847",
                "longitude": "124.4512"
            },
            "timezone": {
                "offset": "-10:00",
                "description": "Hawaii"
            }
        },
        "email": "samantha.willis@example.com",
        "login": {
            "uuid": "0dfeb948-baff-44e5-becf-6ba97a86256a",
            "username": "ticklishpeacock678",
            "password": "yyyyyyyy",
            "salt": "edpPl9cr",
            "md5": "2ef566c03c713ba787e4c296cdb75084",
            "sha1": "3da645b31fe73f9cd9e11d05c5c2c28b640a9514",
            "sha256": "f8f2564766141012f2f3f01521dcd41f4c4c2aeb806f9e06ed00ca2ef947dc8a"
        },
        "dob": {
            "date": "1988-09-22T16:17:04Z",
            "age": 29
        },
        "registered": {
            "date": "2012-09-19T00:35:53Z",
            "age": 6
        },
        "phone": "0161 347 3621",
        "cell": "0743-965-270",
        "id": {
            "name": "NINO",
            "value": "SG 46 25 60 H"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/6.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg"
        },
        "nat": "GB",
        "status": "processing"
    }, {
        "gender": "female",
        "name": {
            "title": "ms",
            "first": "caitlin",
            "last": "alexander"
        },
        "role": "staff",
        "location": {
            "street": "3489 kingsway",
            "city": "newport",
            "state": "clwyd",
            "postcode": "KB14 8DY",
            "coordinates": {
                "latitude": "45.4512",
                "longitude": "-51.7913"
            },
            "timezone": {
                "offset": "+6:00",
                "description": "Almaty, Dhaka, Colombo"
            }
        },
        "email": "caitlin.alexander@example.com",
        "login": {
            "uuid": "140a751f-001e-4628-bbaf-133d8f1f4af7",
            "username": "yellowrabbit777",
            "password": "7894",
            "salt": "MarD0b9o",
            "md5": "4ea87da403cea5b119969fbc98691c2f",
            "sha1": "7523b636ad68c8365a1e28e37ee495aced8d9963",
            "sha256": "a6260237dc489d31f86c8a4a3fbef602fb05d3865e7f1337b5f053f6931a09e9"
        },
        "dob": {
            "date": "1967-02-15T14:33:26Z",
            "age": 51
        },
        "registered": {
            "date": "2004-02-10T05:54:26Z",
            "age": 14
        },
        "phone": "017687 34741",
        "cell": "0763-166-659",
        "id": {
            "name": "NINO",
            "value": "YX 14 36 03 M"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/88.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
        },
        "nat": "GB",
        "status": "approved"
    }
];


/***/ })

}]);
//# sourceMappingURL=demo-demo-module~styleguide-styleguide-module.js.map