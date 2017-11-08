webpackJsonp(["main"],{

/***/ "../../../../../config/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../example/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../example/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h1>Splendid View</h1>\n\n  <sv-button-demo></sv-button-demo>\n</div>"

/***/ }),

/***/ "../../../../../example/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  max-width: 800px;\n  margin: auto;\n  padding: 0px 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-root',
            template: __webpack_require__("../../../../../example/app/app.component.html"),
            styles: [__webpack_require__("../../../../../example/app/app.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewEncapsulation */].None,
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../example/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_demo_button_demo_module__ = __webpack_require__("../../../../../example/app/button-demo/button-demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__button_demo_button_demo_module__["a" /* ButtonDemoModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../example/app/button-demo/button-demo.html":
/***/ (function(module, exports) {

module.exports = "<h2>Buttons</h2>\n\n<label class=\"sv-label\">Button</label>\n<sv-button (onClick)=\"clickTest()\">Click Me</sv-button>\n\n<label class=\"sv-label\">Disabled Button</label>\n<sv-button (onClick)=\"clickTest()\" [disabled]=\"true\">Click Me</sv-button>\n\n<label class=\"sv-label\">Loading State</label>\n<sv-button (onClick)=\"loadingStateTest()\" [loading]=\"loadingFlag\">Click To Load</sv-button>\n\n<label class=\"sv-label\">Alternate State</label>\n<sv-button (onClick)=\"alternateStateTest()\" [alternateState]=\"alternateStateFlag\">\n  Save Form\n  <span alternate-state>Success!</span>\n</sv-button>"

/***/ }),

/***/ "../../../../../example/app/button-demo/button-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_demo__ = __webpack_require__("../../../../../example/app/button-demo/button-demo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ButtonDemoModule = (function () {
    function ButtonDemoModule() {
    }
    ButtonDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__button_demo__["a" /* ButtonDemoComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__src__["a" /* ButtonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__button_demo__["a" /* ButtonDemoComponent */]],
            providers: [],
        })
    ], ButtonDemoModule);
    return ButtonDemoModule;
}());

//# sourceMappingURL=button-demo.module.js.map

/***/ }),

/***/ "../../../../../example/app/button-demo/button-demo.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/button-demo/button-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonDemoComponent = (function () {
    function ButtonDemoComponent() {
        this.loadingFlag = false;
        this.alternateStateFlag = false;
    }
    ButtonDemoComponent.prototype.clickTest = function () {
        window.alert('You clicked a button!');
    };
    ButtonDemoComponent.prototype.loadingStateTest = function () {
        var _this = this;
        this.loadingFlag = true;
        setTimeout(function () {
            _this.loadingFlag = false;
        }, 3000);
    };
    ButtonDemoComponent.prototype.alternateStateTest = function () {
        var _this = this;
        this.alternateStateFlag = true;
        setTimeout(function () {
            _this.alternateStateFlag = false;
        }, 3000);
    };
    ButtonDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-button-demo',
            template: __webpack_require__("../../../../../example/app/button-demo/button-demo.html"),
            styles: [__webpack_require__("../../../../../example/app/button-demo/button-demo.scss")]
        })
    ], ButtonDemoComponent);
    return ButtonDemoComponent;
}());

//# sourceMappingURL=button-demo.js.map

/***/ }),

/***/ "../../../../../example/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../example/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_environment__ = __webpack_require__("../../../../../config/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__config_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "<button\n  class=\"sv-button ripple\"\n  [ngClass]=\"{'alternate-state': alternateState || loading}\"\n  [disabled]=\"disabled\"\n  (click)=\"handleClick($event)\"\n>\n\n  <!-- Main Button Text -->\n  <span [ngClass]=\"{'hidden-loading': loading, 'hidden-state': alternateState}\" class=\"sv-button-content\">\n    <ng-content></ng-content>\n  </span>\n\n  <!-- Spinner when in loading state -->\n  <span *ngIf=\"loading\" class=\"sv-button-spinner\" @loadingState>\n    <sv-spinner></sv-spinner>\n  </span>\n\n  <!-- State text when in alternate state -->\n  <span *ngIf=\"alternateState\" class=\"sv-button-state\" @alternateState>\n    <ng-content select=\"[alternate-state]\"></ng-content>\n  </span>\n</button>"

/***/ }),

/***/ "../../../../../src/button/button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:500|Roboto:400,400i,700);", ""]);

// module
exports.push([module.i, "/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n.sv-button,\n.sv-button-hollow {\n  min-width: 160px;\n  height: 36px;\n  padding: 0px 20px;\n  position: relative;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 11px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  font-weight: 500;\n  border: 1px solid #A8AA19;\n  border-radius: 4px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all 0.2s ease-in-out; }\n  .sv-button .sv-button-content,\n  .sv-button .sv-button-state,\n  .sv-button-hollow .sv-button-content,\n  .sv-button-hollow .sv-button-state {\n    line-height: 36px;\n    display: inline-block;\n    transition: all 0.2s ease-in-out; }\n  .sv-button .sv-button-content.hidden-loading,\n  .sv-button-hollow .sv-button-content.hidden-loading {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n    opacity: 0; }\n  .sv-button .sv-button-content.hidden-state,\n  .sv-button-hollow .sv-button-content.hidden-state {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n    opacity: 0; }\n  .sv-button:focus, .sv-button:active,\n  .sv-button-hollow:focus,\n  .sv-button-hollow:active {\n    outline: none; }\n  .sv-button:disabled,\n  .sv-button-hollow:disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .sv-button.alternate-state, .sv-button.alternate-state:hover, .sv-button.alternate-state:disabled,\n  .sv-button-hollow.alternate-state,\n  .sv-button-hollow.alternate-state:hover,\n  .sv-button-hollow.alternate-state:disabled {\n    opacity: 1.0;\n    background-color: rgba(168, 170, 25, 0.25);\n    cursor: default; }\n  .sv-button .sv-button-spinner,\n  .sv-button-hollow .sv-button-spinner {\n    display: block;\n    width: 100%;\n    margin-top: 4px;\n    position: absolute;\n    top: 8px;\n    left: 0px; }\n  .sv-button .sv-button-state,\n  .sv-button-hollow .sv-button-state {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    color: #A8AA19; }\n\n.sv-button {\n  background-color: #A8AA19;\n  color: #FFF; }\n  .sv-button:hover {\n    background-color: rgba(168, 170, 25, 0.8); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SVButtonComponent = (function () {
    function SVButtonComponent() {
        this.disabled = false;
        this.loading = false;
        this.alternateState = false;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    SVButtonComponent.prototype.handleClick = function (event) {
        this.onClick.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SVButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SVButtonComponent.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SVButtonComponent.prototype, "alternateState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SVButtonComponent.prototype, "onClick", void 0);
    SVButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-button',
            template: __webpack_require__("../../../../../src/button/button.component.html"),
            styles: [__webpack_require__("../../../../../src/button/button.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('loadingState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1, transform: 'scale(1)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0, transform: 'scale(1.5)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms')
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0, transform: 'scale(1.5)' }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('alternateState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(10px)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-in-out')
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(10px)' }))
                    ])
                ])
            ]
        })
    ], SVButtonComponent);
    return SVButtonComponent;
}());

//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ "../../../../../src/button/button.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_component__ = __webpack_require__("../../../../../src/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spinner_spinner_module__ = __webpack_require__("../../../../../src/spinner/spinner.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ButtonModule = (function () {
    function ButtonModule() {
    }
    ButtonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__button_component__["a" /* SVButtonComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__spinner_spinner_module__["a" /* SVSpinnerModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__button_component__["a" /* SVButtonComponent */]],
            providers: [],
        })
    ], ButtonModule);
    return ButtonModule;
}());

//# sourceMappingURL=button.module.js.map

/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_button_module__ = __webpack_require__("../../../../../src/button/button.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button_button_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\">\n  <span *ngIf=\"text != ''\">\n    <ng-content></ng-content>\n  </span>\n  <div class=\"spinner\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/spinner/spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:500|Roboto:400,400i,700);", ""]);

// module
exports.push([module.i, "/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n.spinner-container {\n  display: inline-block; }\n  .spinner-container span {\n    font-family: \"Montserrat\", sans-serif;\n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 0.1em; }\n\n.spinner {\n  margin: 0px auto 0;\n  width: 70px;\n  text-align: center; }\n\n.spinner > div {\n  width: 12px;\n  height: 12px;\n  border: 2px solid #A8AA19;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SVSpinnerComponent = (function () {
    function SVSpinnerComponent() {
    }
    SVSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-spinner',
            template: __webpack_require__("../../../../../src/spinner/spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/spinner/spinner.component.scss")]
        })
    ], SVSpinnerComponent);
    return SVSpinnerComponent;
}());

//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ "../../../../../src/spinner/spinner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVSpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_component__ = __webpack_require__("../../../../../src/spinner/spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SVSpinnerModule = (function () {
    function SVSpinnerModule() {
    }
    SVSpinnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__spinner_component__["a" /* SVSpinnerComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__spinner_component__["a" /* SVSpinnerComponent */]],
            providers: [],
        })
    ], SVSpinnerModule);
    return SVSpinnerModule;
}());

//# sourceMappingURL=spinner.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map