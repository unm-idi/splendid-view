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


/***/ }),

/***/ "../../../../../example/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../example/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Splendid View</h1>\n</header>\n\n<div class=\"wrapper\">\n  <sv-button-demo></sv-button-demo>\n  <sv-spinner-demo></sv-spinner-demo>\n</div>"

/***/ }),

/***/ "../../../../../example/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500|Roboto:400,400i,700);", ""]);

// module
exports.push([module.i, "/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: \"Roboto\", sans-serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  text-transform: uppercase; }\n\n.sv-label {\n  margin-bottom: 5px;\n  display: block;\n  font-family: \"Montserrat\", sans-serif;\n  color: #A1A6BA;\n  font-size: 11px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  font-weight: 400; }\n\nbody {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0; }\n\nheader {\n  width: 100%;\n  height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #A1A6BA;\n  background: linear-gradient(to bottom right, #757c9a, #cdd0da); }\n\nh1 {\n  color: white;\n  text-align: center;\n  letter-spacing: 0.5em; }\n\n.wrapper {\n  max-width: 800px;\n  margin: auto;\n  padding: 0px 20px;\n  padding-bottom: 200px; }\n\nlabel.sv-label {\n  margin-top: 20px; }\n", ""]);

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
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewEncapsulation */].None,
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../example/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imports_module__ = __webpack_require__("../../../../../example/app/imports.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_demo_button_demo__ = __webpack_require__("../../../../../example/app/button-demo/button-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spinner_demo_spinner_demo__ = __webpack_require__("../../../../../example/app/spinner-demo/spinner-demo.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__imports_module__["a" /* ImportsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__button_demo_button_demo__["a" /* ButtonDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__spinner_demo_spinner_demo__["a" /* SpinnerDemo */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../example/app/button-demo/button-demo.html":
/***/ (function(module, exports) {

module.exports = "<h2>Buttons</h2>\n\n<label class=\"sv-label\">Buttons</label>\n\n<sv-button>Click Me!</sv-button>\n<sv-button class=\"hollow\">Click Me!</sv-button>\n<sv-button color=\"secondary\">Click Me!</sv-button>\n<sv-button color=\"error\" class=\"hollow\">Click Me!</sv-button><br><br>\n\n<sv-button class=\"small\" color=\"gray\">I'm Smaller</sv-button>\n<sv-button class=\"hollow small\" color=\"warning\">Same</sv-button><br><br>\n\n<sv-button class=\"large\">I'm bigger</sv-button>\n<sv-button class=\"hollow large\">YAY</sv-button><br><br>\n\n<sv-button class=\"long\">I'm a long button!</sv-button>\n\n<label class=\"sv-label\">Disabled Buttons</label>\n<sv-button [disabled]=\"true\">I'm Disabled</sv-button>\n<sv-button class=\"hollow\" [disabled]=\"true\" color=\"warning\">So am I</sv-button>\n\n<label class=\"sv-label\">Button States</label>\n<sv-button [buttonState]=\"alternateState\" (onClick)=\"alternateStateTest(0)\" color=\"secondary\">\n  Save\n  <span svButtonState state=\"success\">Success</span>\n  <span svButtonState state=\"error\">Error</span>\n</sv-button>\n\n<sv-button [buttonState]=\"alternateState\" (onClick)=\"alternateStateTest(1)\" color=\"secondary\" class=\"hollow small\">\n  Save\n  <span svButtonState state=\"success\">Success</span>\n  <span svButtonState state=\"error\">Error</span>\n</sv-button>\n\n<sv-button [buttonState]=\"loadingFlag ? 'loading' : 'button'\" color=\"blue\" (onClick)=\"loadingStateTest()\">Load More</sv-button>\n\n<sv-button buttonState=\"loading\" color=\"gray\"></sv-button>"

/***/ }),

/***/ "../../../../../example/app/button-demo/button-demo.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
        this.alternateState = 'button';
    }
    ButtonDemoComponent.prototype.clickTest = function () {
        // window.alert('You clicked a button!');
    };
    ButtonDemoComponent.prototype.loadingStateTest = function () {
        var _this = this;
        this.loadingFlag = true;
        setTimeout(function () {
            _this.loadingFlag = false;
        }, 3000);
    };
    ButtonDemoComponent.prototype.alternateStateTest = function (x) {
        var _this = this;
        if (x === 0) {
            this.alternateState = 'success';
            setTimeout(function () {
                _this.alternateState = 'button';
            }, 3000);
        }
        else {
            this.alternateState = 'error';
            setTimeout(function () {
                _this.alternateState = 'success';
                setTimeout(function () {
                    _this.alternateState = 'button';
                }, 3000);
            }, 3000);
        }
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



/***/ }),

/***/ "../../../../../example/app/imports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ImportsModule = (function () {
    function ImportsModule() {
    }
    ImportsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__src__["a" /* SvButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__src__["b" /* SvSpinnerModule */]
            ],
            providers: [],
        })
    ], ImportsModule);
    return ImportsModule;
}());



/***/ }),

/***/ "../../../../../example/app/spinner-demo/spinner-demo.html":
/***/ (function(module, exports) {

module.exports = "<h2>Spinner</h2>\n\n<label class=\"sv-label\">Spinner</label>\n<sv-spinner></sv-spinner>\n\n<label class=\"sv-label\">Spinner with Text</label>\n<sv-spinner color=\"warning\">Loading</sv-spinner>"

/***/ }),

/***/ "../../../../../example/app/spinner-demo/spinner-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpinnerDemo = (function () {
    function SpinnerDemo() {
    }
    SpinnerDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-spinner-demo',
            template: __webpack_require__("../../../../../example/app/spinner-demo/spinner-demo.html")
        })
    ], SpinnerDemo);
    return SpinnerDemo;
}());



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/button/button-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonState = (function () {
    function ButtonState(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], ButtonState.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], ButtonState.prototype, "state", void 0);
    ButtonState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Directive */])({
            selector: 'button span[svButtonState]',
            host: {
                'class': 'button-state'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], ButtonState);
    return ButtonState;
}());



/***/ }),

/***/ "../../../../../src/button/button.html":
/***/ (function(module, exports) {

module.exports = "<button\n  (click)=\"handleClick($event)\"\n  [ngClass]=\"{'alternate-state': buttonState !== 'button'}\"\n  [disabled]=\"disabled\"\n>\n\n  <!-- Main Button Text -->\n  <span \n    [ngClass]=\"{'hidden-loading': buttonState == 'loading', 'hidden-state': !['button', 'loading'].includes(buttonState)}\"\n    class=\"sv-button-content\"\n  >\n    <ng-content></ng-content>\n  </span>\n\n  <!-- Loading State -->\n  <span *ngIf=\"buttonState === 'loading'\" class=\"sv-button-spinner\" @loadingState>\n    <sv-spinner [color]=\"color\"></sv-spinner>\n  </span>\n  \n  <!-- Button States -->\n  <span class=\"state-container\" *ngIf=\"buttonState === 'success'\" @alternateState>\n    <ng-content select=\"[svButtonState][state=success]\"></ng-content>\n  </span>\n\n  <span class=\"state-container\" *ngIf=\"buttonState === 'error'\" @alternateState>\n    <ng-content select=\"[svButtonState][state=error]\"></ng-content>\n  </span>\n</button>"

/***/ }),

/***/ "../../../../../src/button/button.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvButtonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button__ = __webpack_require__("../../../../../src/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_state__ = __webpack_require__("../../../../../src/button/button-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_module__ = __webpack_require__("../../../../../src/spinner/spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SvButtonModule = (function () {
    function SvButtonModule() {
    }
    SvButtonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__button__["a" /* SvButton */], __WEBPACK_IMPORTED_MODULE_3__button_state__["a" /* ButtonState */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_module__["a" /* SvSpinnerModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__button__["a" /* SvButton */], __WEBPACK_IMPORTED_MODULE_3__button_state__["a" /* ButtonState */]],
            providers: [],
        })
    ], SvButtonModule);
    return SvButtonModule;
}());



/***/ }),

/***/ "../../../../../src/button/button.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500|Roboto:400,400i,700);", ""]);

// module
exports.push([module.i, "/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n.sv-button.primary button {\n  background-color: #A8AA19;\n  border-color: #A8AA19; }\n  .sv-button.primary button:hover {\n    background-color: rgba(168, 170, 25, 0.8); }\n  .sv-button.primary button.alternate-state, .sv-button.primary button.alternate-state:hover, .sv-button.primary button.alternate-state:disabled {\n    background-color: rgba(168, 170, 25, 0.25);\n    color: #A8AA19; }\n\n.sv-button.hollow.primary button {\n  color: #A8AA19; }\n  .sv-button.hollow.primary button:hover {\n    color: #FFF; }\n  .sv-button.hollow.primary button.alternate-state, .sv-button.hollow.primary button.alternate-state:hover, .sv-button.hollow.primary button.alternate-state:disabled {\n    color: #A8AA19; }\n\n.sv-button.secondary button {\n  background-color: #007A86;\n  border-color: #007A86; }\n  .sv-button.secondary button:hover {\n    background-color: rgba(0, 122, 134, 0.8); }\n  .sv-button.secondary button.alternate-state, .sv-button.secondary button.alternate-state:hover, .sv-button.secondary button.alternate-state:disabled {\n    background-color: rgba(0, 122, 134, 0.25);\n    color: #007A86; }\n\n.sv-button.hollow.secondary button {\n  color: #007A86; }\n  .sv-button.hollow.secondary button:hover {\n    color: #FFF; }\n  .sv-button.hollow.secondary button.alternate-state, .sv-button.hollow.secondary button.alternate-state:hover, .sv-button.hollow.secondary button.alternate-state:disabled {\n    color: #007A86; }\n\n.sv-button.success button {\n  background-color: #A8AA19;\n  border-color: #A8AA19; }\n  .sv-button.success button:hover {\n    background-color: rgba(168, 170, 25, 0.8); }\n  .sv-button.success button.alternate-state, .sv-button.success button.alternate-state:hover, .sv-button.success button.alternate-state:disabled {\n    background-color: rgba(168, 170, 25, 0.25);\n    color: #A8AA19; }\n\n.sv-button.hollow.success button {\n  color: #A8AA19; }\n  .sv-button.hollow.success button:hover {\n    color: #FFF; }\n  .sv-button.hollow.success button.alternate-state, .sv-button.hollow.success button.alternate-state:hover, .sv-button.hollow.success button.alternate-state:disabled {\n    color: #A8AA19; }\n\n.sv-button.warning button {\n  background-color: #ED8B00;\n  border-color: #ED8B00; }\n  .sv-button.warning button:hover {\n    background-color: rgba(237, 139, 0, 0.8); }\n  .sv-button.warning button.alternate-state, .sv-button.warning button.alternate-state:hover, .sv-button.warning button.alternate-state:disabled {\n    background-color: rgba(237, 139, 0, 0.25);\n    color: #ED8B00; }\n\n.sv-button.hollow.warning button {\n  color: #ED8B00; }\n  .sv-button.hollow.warning button:hover {\n    color: #FFF; }\n  .sv-button.hollow.warning button.alternate-state, .sv-button.hollow.warning button.alternate-state:hover, .sv-button.hollow.warning button.alternate-state:disabled {\n    color: #ED8B00; }\n\n.sv-button.error button {\n  background-color: #BA0C2F;\n  border-color: #BA0C2F; }\n  .sv-button.error button:hover {\n    background-color: rgba(186, 12, 47, 0.8); }\n  .sv-button.error button.alternate-state, .sv-button.error button.alternate-state:hover, .sv-button.error button.alternate-state:disabled {\n    background-color: rgba(186, 12, 47, 0.25);\n    color: #BA0C2F; }\n\n.sv-button.hollow.error button {\n  color: #BA0C2F; }\n  .sv-button.hollow.error button:hover {\n    color: #FFF; }\n  .sv-button.hollow.error button.alternate-state, .sv-button.hollow.error button.alternate-state:hover, .sv-button.hollow.error button.alternate-state:disabled {\n    color: #BA0C2F; }\n\n.sv-button.gray button {\n  background-color: #A1A6BA;\n  border-color: #A1A6BA; }\n  .sv-button.gray button:hover {\n    background-color: rgba(161, 166, 186, 0.8); }\n  .sv-button.gray button.alternate-state, .sv-button.gray button.alternate-state:hover, .sv-button.gray button.alternate-state:disabled {\n    background-color: rgba(161, 166, 186, 0.25);\n    color: #A1A6BA; }\n\n.sv-button.hollow.gray button {\n  color: #A1A6BA; }\n  .sv-button.hollow.gray button:hover {\n    color: #FFF; }\n  .sv-button.hollow.gray button.alternate-state, .sv-button.hollow.gray button.alternate-state:hover, .sv-button.hollow.gray button.alternate-state:disabled {\n    color: #A1A6BA; }\n\n.sv-button button {\n  min-width: 160px;\n  line-height: 38px;\n  padding: 0 20px;\n  position: relative;\n  display: inline-block;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  cursor: pointer;\n  color: #FFF;\n  background-color: #A8AA19;\n  transition: background-color 0.2s ease-out; }\n  .sv-button button:focus, .sv-button button:active {\n    outline: none; }\n  .sv-button button:disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .sv-button button.alternate-state, .sv-button button.alternate-state:hover, .sv-button button.alternate-state:disabled {\n    opacity: 1.0;\n    cursor: default; }\n  .sv-button button .sv-button-content {\n    display: inline-block;\n    transition: opacity .2s ease-out, -webkit-transform .2s ease-out;\n    transition: transform .2s ease-out, opacity .2s ease-out;\n    transition: transform .2s ease-out, opacity .2s ease-out, -webkit-transform .2s ease-out; }\n    .sv-button button .sv-button-content.hidden-state {\n      -webkit-transform: translateX(-10px);\n              transform: translateX(-10px);\n      opacity: 0; }\n    .sv-button button .sv-button-content.hidden-loading {\n      -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n      opacity: 0; }\n  .sv-button button .state-container {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    display: inline-block; }\n  .sv-button button .sv-button-spinner {\n    width: 100%;\n    height: 20px;\n    position: absolute;\n    left: 0;\n    top: 9.5px; }\n\n.sv-button.small button {\n  min-width: 100px;\n  line-height: 24px;\n  padding: 0 10px;\n  font-size: 9px; }\n  .sv-button.small button .sv-button-spinner {\n    top: 2px; }\n\n.sv-button.large button {\n  line-height: 48px;\n  font-size: 13px; }\n  .sv-button.large button .sv-button-spinner {\n    top: 14px; }\n\n.sv-button.long button {\n  width: 100%;\n  display: block; }\n\n.sv-button.hollow button {\n  background-color: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/button/button.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ButtonBase */
/* unused harmony export _ButtonBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_state__ = __webpack_require__("../../../../../src/button/button-state.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ButtonBase = (function () {
    function ButtonBase(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    return ButtonBase;
}());

var _ButtonBase = Object(__WEBPACK_IMPORTED_MODULE_2__core__["a" /* colorMixin */])(ButtonBase);
var SvButton = (function (_super) {
    __extends(SvButton, _super);
    // Constructor
    function SvButton(renderer, element) {
        var _this = _super.call(this, renderer, element) || this;
        // Input to disable the button and supress all click events
        _this.disabled = false;
        // Output to broadcast a click event
        _this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        // The state that the button is in.
        _this._buttonState = 'button';
        return _this;
    }
    Object.defineProperty(SvButton.prototype, "buttonState", {
        // Getter and setter for the button state
        get: function () {
            return this._buttonState;
        },
        set: function (newState) {
            if (newState === 'button') {
                if (this._originalColor) {
                    this.color = this._originalColor;
                    this._originalColor = null;
                }
                this._buttonState = newState;
            }
            else if (newState === 'loading') {
                this._buttonState = newState;
            }
            else if (['success', 'error'].includes(newState)) {
                var s = this.states.find(function (x) { return x.state === newState; });
                if (s) {
                    if (!this._originalColor) {
                        this._originalColor = this.color;
                    }
                    this.color = s.color || s.state;
                    this._buttonState = newState;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    // Detects a click on the native button and emits an 'onClick' event
    // A click event will not be emitted if the button is disabled or
    // the button's state is not 'button'
    SvButton.prototype.handleClick = function (event) {
        if (!this.disabled && this._buttonState === 'button') {
            this.onClick.emit();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], SvButton.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], SvButton.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], SvButton.prototype, "onClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_3__button_state__["a" /* ButtonState */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* QueryList */])
    ], SvButton.prototype, "states", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], SvButton.prototype, "buttonState", null);
    SvButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-button',
            template: __webpack_require__("../../../../../src/button/button.html"),
            styles: [__webpack_require__("../../../../../src/button/button.scss")],
            host: {
                'class': 'sv-button'
            },
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
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-out')
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(10px)' }))
                    ])
                ])
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], SvButton);
    return SvButton;
}(_ButtonBase));



/***/ }),

/***/ "../../../../../src/core/common/color.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = colorMixin;
/*
  Provides a mixin function for adding color functionality to other components
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ColorPaletteValues;
(function (ColorPaletteValues) {
    ColorPaletteValues["primary"] = "primary";
    ColorPaletteValues["secondary"] = "secondary";
    ColorPaletteValues["success"] = "success";
    ColorPaletteValues["warning"] = "warning";
    ColorPaletteValues["error"] = "error";
    ColorPaletteValues["gray"] = "gray";
})(ColorPaletteValues || (ColorPaletteValues = {}));
// Mixin function that extends a passed in class with functionality relating
// to themeing a component with a given color. When a color is set or changed
// The component's native element is given a class that allows the component
// to be styled with the specified color.
function colorMixin(base, defaultColor) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            // If no color is provided, color defaults to 'primary'
            _this.color = 'primary';
            return _this;
        }
        Object.defineProperty(class_1.prototype, "color", {
            // Getter and setter for private _color attribute
            get: function () {
                return this._color;
            },
            set: function (value) {
                var newColor = ColorPaletteValues[value] !== undefined ? value : 'primary';
                // Removes color class from native element
                if (newColor !== this._color) {
                    this._renderer.removeClass(this._element.nativeElement, this._color);
                }
                // Adds color class to native element
                if (newColor) {
                    this._renderer.addClass(this._element.nativeElement, newColor);
                }
                this._color = newColor;
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}


/***/ }),

/***/ "../../../../../src/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_color__ = __webpack_require__("../../../../../src/core/common/color.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__common_color__["a"]; });



/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("../../../../../src/core/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_button_module__ = __webpack_require__("../../../../../src/button/button.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__button_button_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_spinner_module__ = __webpack_require__("../../../../../src/spinner/spinner.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__spinner_spinner_module__["a"]; });





/***/ }),

/***/ "../../../../../src/spinner/spinner.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\">\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <div class=\"spinner\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/spinner/spinner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvSpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner__ = __webpack_require__("../../../../../src/spinner/spinner.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SvSpinnerModule = (function () {
    function SvSpinnerModule() {
    }
    SvSpinnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* SvSpinner */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* SvSpinner */]],
            providers: [],
        })
    ], SvSpinnerModule);
    return SvSpinnerModule;
}());



/***/ }),

/***/ "../../../../../src/spinner/spinner.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500|Roboto:400,400i,700);", ""]);

// module
exports.push([module.i, "/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n.sv-spinner.primary .spinner > div {\n  border-color: #A8AA19; }\n\n.sv-spinner.secondary .spinner > div {\n  border-color: #007A86; }\n\n.sv-spinner.success .spinner > div {\n  border-color: #A8AA19; }\n\n.sv-spinner.warning .spinner > div {\n  border-color: #ED8B00; }\n\n.sv-spinner.error .spinner > div {\n  border-color: #BA0C2F; }\n\n.sv-spinner.gray .spinner > div {\n  border-color: #A1A6BA; }\n\n.spinner-container {\n  display: inline-block;\n  text-align: center;\n  min-height: 20px; }\n  .spinner-container span {\n    font-family: \"Montserrat\", sans-serif;\n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 0.1em; }\n\n.spinner {\n  margin: 0px auto 0;\n  text-align: center;\n  height: 20px; }\n\n.spinner > div {\n  width: 12px;\n  height: 12px;\n  border: 2px solid #A8AA19;\n  border-radius: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 4px;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/spinner/spinner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SvSpinnerBase */
/* unused harmony export _SvSpinnerBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SvSpinnerBase = (function () {
    function SvSpinnerBase(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    return SvSpinnerBase;
}());

var _SvSpinnerBase = Object(__WEBPACK_IMPORTED_MODULE_1__core__["a" /* colorMixin */])(SvSpinnerBase);
var SvSpinner = (function (_super) {
    __extends(SvSpinner, _super);
    function SvSpinner(renderer, element) {
        return _super.call(this, renderer, element) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], SvSpinner.prototype, "color", void 0);
    SvSpinner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-spinner',
            template: __webpack_require__("../../../../../src/spinner/spinner.html"),
            styles: [__webpack_require__("../../../../../src/spinner/spinner.scss")],
            host: {
                'class': 'sv-spinner'
            },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], SvSpinner);
    return SvSpinner;
}(_SvSpinnerBase));



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map