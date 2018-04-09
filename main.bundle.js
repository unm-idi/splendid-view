webpackJsonp(["main"],{

/***/ "./config/environment.ts":
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

/***/ "./example/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./example/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Splendid View</h1>\n</header>\n\n<div class=\"wrapper\">\n  <sv-button-demo></sv-button-demo>\n  <sv-spinner-demo></sv-spinner-demo>\n  <sv-switch-demo></sv-switch-demo>\n  <sv-radio-button-demo></sv-radio-button-demo>\n  <sv-checkbox-demo></sv-checkbox-demo>\n  <!-- <sv-select-demo></sv-select-demo> -->\n</div>"

/***/ }),

/***/ "./example/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500|Roboto:400,400i,700\");\n/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\nbody {\n  font-family: \"Roboto\", sans-serif; }\nh1, h2, h3, h4, h5, h6 {\n  text-transform: uppercase; }\n.sv-label {\n  margin-bottom: 5px;\n  display: block;\n  color: #A1A6BA;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 11px;\n  font-weight: 400;\n  letter-spacing: 0.1em;\n  text-transform: uppercase; }\nbody {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0; }\nheader {\n  width: 100%;\n  height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #A1A6BA;\n  background: -webkit-gradient(linear, left top, right bottom, from(#757c9a), to(#cdd0da));\n  background: linear-gradient(to bottom right, #757c9a, #cdd0da); }\nh1 {\n  color: white;\n  text-align: center;\n  letter-spacing: 0.5em; }\n.wrapper {\n  max-width: 800px;\n  margin: auto;\n  padding: 0px 20px;\n  padding-bottom: 200px; }\nlabel.sv-label {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./example/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_notifications_notifications_service__ = __webpack_require__("./src/notifications/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(buffet) {
        this.buffet = buffet;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-root',
            template: __webpack_require__("./example/app/app.component.html"),
            styles: [__webpack_require__("./example/app/app.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__src_notifications_notifications_service__["a" /* SvNotificationsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./example/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__imports_module__ = __webpack_require__("./example/app/imports.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__button_demo_button_demo__ = __webpack_require__("./example/app/button-demo/button-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spinner_demo_spinner_demo__ = __webpack_require__("./example/app/spinner-demo/spinner-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__switch_demo_switch_demo__ = __webpack_require__("./example/app/switch-demo/switch-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__radio_button_demo_radio_button_demo__ = __webpack_require__("./example/app/radio-button-demo/radio-button-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkbox_demo_checkbox_demo__ = __webpack_require__("./example/app/checkbox-demo/checkbox-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src__ = __webpack_require__("./src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { SelectDemo } from './select-demo/select-demo';

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__src__["c" /* SvNotificationsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__imports_module__["a" /* ImportsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__button_demo_button_demo__["a" /* ButtonDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__spinner_demo_spinner_demo__["a" /* SpinnerDemo */],
                __WEBPACK_IMPORTED_MODULE_7__switch_demo_switch_demo__["a" /* SwitchDemo */],
                __WEBPACK_IMPORTED_MODULE_8__radio_button_demo_radio_button_demo__["a" /* RadioButtonDemo */],
                __WEBPACK_IMPORTED_MODULE_9__checkbox_demo_checkbox_demo__["a" /* CheckboxDemo */]
                // SelectDemo
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./example/app/button-demo/button-demo.html":
/***/ (function(module, exports) {

module.exports = "<h2>Buttons</h2>\n\n<label class=\"sv-label\">Buttons</label>\n\n<sv-button (onClick)=\"clickTest()\">Click Me!</sv-button>\n<sv-button class=\"hollow\">Click Me!</sv-button>\n<sv-button color=\"secondary\">Click Me!</sv-button>\n<sv-button color=\"error\" class=\"hollow\">Click Me!</sv-button><br><br>\n\n<sv-button class=\"small\" color=\"gray\">I'm Smaller</sv-button>\n<sv-button class=\"hollow small\" color=\"warning\">Same</sv-button><br><br>\n\n<sv-button class=\"large\">I'm bigger</sv-button>\n<sv-button class=\"hollow large\">YAY</sv-button><br><br>\n\n<sv-button class=\"long\">I'm a long button!</sv-button>\n\n<label class=\"sv-label\">Disabled Buttons</label>\n<sv-button [disabled]=\"true\">I'm Disabled</sv-button>\n<sv-button class=\"hollow\" [disabled]=\"true\" color=\"warning\">So am I</sv-button>\n\n<label class=\"sv-label\">Button States</label>\n<sv-button [buttonState]=\"alternateState\" (onClick)=\"alternateStateTest(0)\" color=\"secondary\">\n  Save\n  <span svButtonState state=\"success\">Success</span>\n  <span svButtonState state=\"error\">Error</span>\n</sv-button>\n\n<sv-button [buttonState]=\"alternateState\" (onClick)=\"alternateStateTest(1)\" color=\"secondary\" class=\"hollow small\">\n  Save\n  <span svButtonState state=\"success\">Success</span>\n  <span svButtonState state=\"error\">Error</span>\n</sv-button>\n\n<sv-button [buttonState]=\"loadingFlag ? 'loading' : 'button'\" color=\"blue\" (onClick)=\"loadingStateTest()\">Load More</sv-button>\n\n<sv-button buttonState=\"loading\" color=\"gray\"></sv-button>"

/***/ }),

/***/ "./example/app/button-demo/button-demo.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./example/app/button-demo/button-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_notifications_notifications_service__ = __webpack_require__("./src/notifications/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonDemoComponent = (function () {
    function ButtonDemoComponent(ns) {
        this.ns = ns;
        this.loadingFlag = false;
        this.alternateState = 'button';
    }
    ButtonDemoComponent.prototype.clickTest = function () {
        var type = ['info', 'success', 'warning', 'error'][Math.floor(Math.random() * 4)];
        if (Math.random() > 0.5) {
            this.ns.addToast(type, 'I\'m an awesome toast!');
        }
        else {
            this.ns.addListToast(type, 'Something might not be right:', ['This is a problem', 'So is this'], { duration: 5000, dismissible: false });
        }
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
            template: __webpack_require__("./example/app/button-demo/button-demo.html"),
            styles: [__webpack_require__("./example/app/button-demo/button-demo.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__src_notifications_notifications_service__["a" /* SvNotificationsService */]])
    ], ButtonDemoComponent);
    return ButtonDemoComponent;
}());



/***/ }),

/***/ "./example/app/checkbox-demo/checkbox-demo.html":
/***/ (function(module, exports) {

module.exports = "<h2>Checkboxes</h2>\n<label class=\"sv-label\">Individual Checkboxes</label>\n<sv-checkbox [(ngModel)]=\"value1\"></sv-checkbox>\n<sv-checkbox name=\"test\" [(ngModel)]=\"value2\" color=\"secondary\">Check this label out</sv-checkbox><br>\nvalues: {{value1}} / {{value2}}\n\n<label class=\"sv-label\">Checkbox group</label>\n<sv-checkbox-group [(ngModel)]=\"groupValues\" color=\"warning\">\n  <sv-checkbox value=\"one\">One</sv-checkbox>\n  <sv-checkbox value=\"two\" [(ngModel)]=\"twoChecked\">Two</sv-checkbox>\n  <sv-checkbox value=\"three\">Three</sv-checkbox>\n</sv-checkbox-group><br>\nchecked Values: {{groupValues.toString()}}<br>\nTwo checked: {{twoChecked}}"

/***/ }),

/***/ "./example/app/checkbox-demo/checkbox-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckboxDemo = (function () {
    function CheckboxDemo() {
        this.value1 = false;
        this.value2 = true;
        this.groupValues = ['one', 'two'];
    }
    CheckboxDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-checkbox-demo',
            template: __webpack_require__("./example/app/checkbox-demo/checkbox-demo.html")
        })
    ], CheckboxDemo);
    return CheckboxDemo;
}());



/***/ }),

/***/ "./example/app/imports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__("./src/index.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__src__["a" /* SvButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__src__["e" /* SvSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__src__["f" /* SvSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_1__src__["d" /* SvRadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__src__["b" /* SvCheckboxModule */],
            ],
            providers: [],
        })
    ], ImportsModule);
    return ImportsModule;
}());



/***/ }),

/***/ "./example/app/radio-button-demo/radio-button-demo.html":
/***/ (function(module, exports) {

module.exports = "<h2>Radio Buttons</h2>\n\n<label class=\"sv-label\">Individual Radio Buttons</label>\n<sv-radio-button name=\"nogroup\" value=\"A\">A</sv-radio-button>\n<sv-radio-button name=\"nogroup\" value=\"B\">B</sv-radio-button>\n\n<label class=\"sv-label\">Radio Group</label>\n<sv-radio-group name=\"la\" [(ngModel)]=\"option\">\n  <sv-radio-button color=\"error\" value=\"one\">One</sv-radio-button>\n  <sv-radio-button value=\"two\">Two</sv-radio-button>\n  <sv-radio-button color=\"warning\" value=\"three\">Three</sv-radio-button>\n</sv-radio-group><br>\n<b>Selected Value:</b> {{option}}\n<br><br>\n<sv-radio-group name=\"bla\" color=\"error\" [(ngModel)]=\"other\">\n  <sv-radio-button value=\"stuff\">Stuff</sv-radio-button><br>\n  <sv-radio-button value=\"things\">Things</sv-radio-button><br>\n  <sv-radio-button value=\"blas\">Blas</sv-radio-button>\n</sv-radio-group>\n<br>\n<b>Selected Value:</b> {{other}}"

/***/ }),

/***/ "./example/app/radio-button-demo/radio-button-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RadioButtonDemo = (function () {
    function RadioButtonDemo() {
        this.option = 'one';
        this.other = 'stuff';
    }
    RadioButtonDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-radio-button-demo',
            template: __webpack_require__("./example/app/radio-button-demo/radio-button-demo.html")
        })
    ], RadioButtonDemo);
    return RadioButtonDemo;
}());



/***/ }),

/***/ "./example/app/spinner-demo/spinner-demo.html":
/***/ (function(module, exports) {

module.exports = "<h2>Spinner</h2>\n\n<label class=\"sv-label\">Spinner</label>\n<sv-spinner></sv-spinner>\n\n<label class=\"sv-label\">Spinner with Text</label>\n<sv-spinner color=\"warning\">Loading</sv-spinner>"

/***/ }),

/***/ "./example/app/spinner-demo/spinner-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
            template: __webpack_require__("./example/app/spinner-demo/spinner-demo.html")
        })
    ], SpinnerDemo);
    return SpinnerDemo;
}());



/***/ }),

/***/ "./example/app/switch-demo/switch-demo.html":
/***/ (function(module, exports) {

module.exports = "<h2>Switches</h2>\n\n<sv-switch></sv-switch>\n<sv-switch color=\"error\">I have a label</sv-switch>"

/***/ }),

/***/ "./example/app/switch-demo/switch-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchDemo = (function () {
    function SwitchDemo() {
    }
    SwitchDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-switch-demo',
            template: __webpack_require__("./example/app/switch-demo/switch-demo.html")
        }),
        __metadata("design:paramtypes", [])
    ], SwitchDemo);
    return SwitchDemo;
}());



/***/ }),

/***/ "./example/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./example/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_environment__ = __webpack_require__("./config/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__config_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/button/button-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], ButtonState.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], ButtonState.prototype, "state", void 0);
    ButtonState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Directive */])({
            selector: 'button span[svButtonState]',
            host: {
                'class': 'button-state'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], ButtonState);
    return ButtonState;
}());



/***/ }),

/***/ "./src/button/button.html":
/***/ (function(module, exports) {

module.exports = "<button\n  (click)=\"handleClick($event)\"\n  [ngClass]=\"{'alternate-state': buttonState !== 'button'}\"\n  [disabled]=\"disabled\"\n>\n\n  <!-- Main Button Text -->\n  <span \n    [ngClass]=\"{'hidden-loading': buttonState == 'loading', 'hidden-state': !['button', 'loading'].includes(buttonState)}\"\n    class=\"sv-button-content\"\n  >\n    <ng-content></ng-content>\n  </span>\n\n  <!-- Loading State -->\n  <span *ngIf=\"buttonState === 'loading'\" class=\"sv-button-spinner\" @loadingState>\n    <sv-spinner [color]=\"color\"></sv-spinner>\n  </span>\n  \n  <!-- Button States -->\n  <span class=\"state-container\" *ngIf=\"buttonState === 'success'\" @alternateState>\n    <ng-content select=\"[svButtonState][state=success]\"></ng-content>\n  </span>\n\n  <span class=\"state-container\" *ngIf=\"buttonState === 'error'\" @alternateState>\n    <ng-content select=\"[svButtonState][state=error]\"></ng-content>\n  </span>\n</button>"

/***/ }),

/***/ "./src/button/button.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvButtonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button__ = __webpack_require__("./src/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_state__ = __webpack_require__("./src/button/button-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_module__ = __webpack_require__("./src/spinner/spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__button__["a" /* SvButton */], __WEBPACK_IMPORTED_MODULE_3__button_state__["a" /* ButtonState */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_module__["a" /* SvSpinnerModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__button__["a" /* SvButton */], __WEBPACK_IMPORTED_MODULE_3__button_state__["a" /* ButtonState */]],
            providers: [],
        })
    ], SvButtonModule);
    return SvButtonModule;
}());



/***/ }),

/***/ "./src/button/button.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500|Roboto:400,400i,700\");\n/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.sv-button.primary button {\n  background-color: #A8AA19;\n  border-color: #A8AA19; }\n.sv-button.primary button:hover {\n    background-color: rgba(168, 170, 25, 0.8); }\n.sv-button.primary button.alternate-state, .sv-button.primary button.alternate-state:hover, .sv-button.primary button.alternate-state:disabled {\n    color: #A8AA19;\n    background-color: rgba(168, 170, 25, 0.25); }\n.sv-button.hollow.primary button {\n  color: #A8AA19; }\n.sv-button.hollow.primary button:hover {\n    color: #FFF; }\n.sv-button.hollow.primary button.alternate-state, .sv-button.hollow.primary button.alternate-state:hover, .sv-button.hollow.primary button.alternate-state:disabled {\n    color: #A8AA19; }\n.sv-button.secondary button {\n  background-color: #007A86;\n  border-color: #007A86; }\n.sv-button.secondary button:hover {\n    background-color: rgba(0, 122, 134, 0.8); }\n.sv-button.secondary button.alternate-state, .sv-button.secondary button.alternate-state:hover, .sv-button.secondary button.alternate-state:disabled {\n    color: #007A86;\n    background-color: rgba(0, 122, 134, 0.25); }\n.sv-button.hollow.secondary button {\n  color: #007A86; }\n.sv-button.hollow.secondary button:hover {\n    color: #FFF; }\n.sv-button.hollow.secondary button.alternate-state, .sv-button.hollow.secondary button.alternate-state:hover, .sv-button.hollow.secondary button.alternate-state:disabled {\n    color: #007A86; }\n.sv-button.success button {\n  background-color: #A8AA19;\n  border-color: #A8AA19; }\n.sv-button.success button:hover {\n    background-color: rgba(168, 170, 25, 0.8); }\n.sv-button.success button.alternate-state, .sv-button.success button.alternate-state:hover, .sv-button.success button.alternate-state:disabled {\n    color: #A8AA19;\n    background-color: rgba(168, 170, 25, 0.25); }\n.sv-button.hollow.success button {\n  color: #A8AA19; }\n.sv-button.hollow.success button:hover {\n    color: #FFF; }\n.sv-button.hollow.success button.alternate-state, .sv-button.hollow.success button.alternate-state:hover, .sv-button.hollow.success button.alternate-state:disabled {\n    color: #A8AA19; }\n.sv-button.warning button {\n  background-color: #ED8B00;\n  border-color: #ED8B00; }\n.sv-button.warning button:hover {\n    background-color: rgba(237, 139, 0, 0.8); }\n.sv-button.warning button.alternate-state, .sv-button.warning button.alternate-state:hover, .sv-button.warning button.alternate-state:disabled {\n    color: #ED8B00;\n    background-color: rgba(237, 139, 0, 0.25); }\n.sv-button.hollow.warning button {\n  color: #ED8B00; }\n.sv-button.hollow.warning button:hover {\n    color: #FFF; }\n.sv-button.hollow.warning button.alternate-state, .sv-button.hollow.warning button.alternate-state:hover, .sv-button.hollow.warning button.alternate-state:disabled {\n    color: #ED8B00; }\n.sv-button.error button {\n  background-color: #BA0C2F;\n  border-color: #BA0C2F; }\n.sv-button.error button:hover {\n    background-color: rgba(186, 12, 47, 0.8); }\n.sv-button.error button.alternate-state, .sv-button.error button.alternate-state:hover, .sv-button.error button.alternate-state:disabled {\n    color: #BA0C2F;\n    background-color: rgba(186, 12, 47, 0.25); }\n.sv-button.hollow.error button {\n  color: #BA0C2F; }\n.sv-button.hollow.error button:hover {\n    color: #FFF; }\n.sv-button.hollow.error button.alternate-state, .sv-button.hollow.error button.alternate-state:hover, .sv-button.hollow.error button.alternate-state:disabled {\n    color: #BA0C2F; }\n.sv-button.gray button {\n  background-color: #A1A6BA;\n  border-color: #A1A6BA; }\n.sv-button.gray button:hover {\n    background-color: rgba(161, 166, 186, 0.8); }\n.sv-button.gray button.alternate-state, .sv-button.gray button.alternate-state:hover, .sv-button.gray button.alternate-state:disabled {\n    color: #A1A6BA;\n    background-color: rgba(161, 166, 186, 0.25); }\n.sv-button.hollow.gray button {\n  color: #A1A6BA; }\n.sv-button.hollow.gray button:hover {\n    color: #FFF; }\n.sv-button.hollow.gray button.alternate-state, .sv-button.hollow.gray button.alternate-state:hover, .sv-button.hollow.gray button.alternate-state:disabled {\n    color: #A1A6BA; }\n.sv-button button {\n  min-width: 160px;\n  padding: 0 20px;\n  display: inline-block;\n  position: relative;\n  color: #FFF;\n  background-color: #A8AA19;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 1px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 38px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  cursor: pointer; }\n.sv-button button:focus, .sv-button button:active {\n    outline: none; }\n.sv-button button:disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n.sv-button button.alternate-state, .sv-button button.alternate-state:hover, .sv-button button.alternate-state:disabled {\n    opacity: 1.0;\n    cursor: default; }\n.sv-button button .sv-button-content {\n    display: inline-block;\n    -webkit-transition: opacity .2s ease-out, -webkit-transform .2s ease-out;\n    transition: opacity .2s ease-out, -webkit-transform .2s ease-out;\n    transition: transform .2s ease-out, opacity .2s ease-out;\n    transition: transform .2s ease-out, opacity .2s ease-out, -webkit-transform .2s ease-out; }\n.sv-button button .sv-button-content.hidden-state {\n      opacity: 0;\n      -webkit-transform: translateX(-10px);\n              transform: translateX(-10px); }\n.sv-button button .sv-button-content.hidden-loading {\n      opacity: 0;\n      -webkit-transform: scale(0.5);\n              transform: scale(0.5); }\n.sv-button button .state-container {\n    width: 100%;\n    display: inline-block;\n    position: absolute;\n    left: 0; }\n.sv-button button .sv-button-spinner {\n    width: 100%;\n    height: 20px;\n    position: absolute;\n    top: 9.5px;\n    left: 0; }\n.sv-button.small button {\n  min-width: 100px;\n  padding: 0 10px;\n  font-size: 9px;\n  line-height: 24px; }\n.sv-button.small button .sv-button-spinner {\n    top: 2px; }\n.sv-button.large button {\n  font-size: 13px;\n  line-height: 48px; }\n.sv-button.large button .sv-button-spinner {\n    top: 14px; }\n.sv-button.long button {\n  width: 100%;\n  display: block; }\n.sv-button.hollow button {\n  background-color: transparent; }\n"

/***/ }),

/***/ "./src/button/button.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ButtonBase */
/* unused harmony export _ButtonBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./src/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_state__ = __webpack_require__("./src/button/button-state.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SvButton.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], SvButton.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], SvButton.prototype, "onClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], SvButton.prototype, "buttonState", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_3__button_state__["a" /* ButtonState */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], SvButton.prototype, "states", void 0);
    SvButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-button',
            template: __webpack_require__("./src/button/button.html"),
            styles: [__webpack_require__("./src/button/button.scss")],
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
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], SvButton);
    return SvButton;
}(_ButtonBase));



/***/ }),

/***/ "./src/checkbox/checkbox-group-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxGroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Service to communicate with all checkboxes in group
var CheckboxGroupService = (function () {
    function CheckboxGroupService() {
        this._selected = [];
        // Array to watch
        this._selectedValues = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        // Observable
        this.valuesSelected$ = this._selectedValues.asObservable();
    }
    // Set values
    CheckboxGroupService.prototype.setValues = function (value) {
        this._selected = value;
        this._selectedValues.next(this._selected);
    };
    // Method to add value
    CheckboxGroupService.prototype.addValue = function (value) {
        this._selected.push(value);
        this._selectedValues.next(this._selected);
    };
    // Method to remove a value
    CheckboxGroupService.prototype.removeValue = function (value) {
        var i = this._selected.indexOf(value);
        this._selected.splice(i, 1);
        this._selectedValues.next(this._selected);
    };
    CheckboxGroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])()
    ], CheckboxGroupService);
    return CheckboxGroupService;
}());



/***/ }),

/***/ "./src/checkbox/checkbox-group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvCheckboxGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_group_service__ = __webpack_require__("./src/checkbox/checkbox-group-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox__ = __webpack_require__("./src/checkbox/checkbox.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SvCheckboxGroup = (function () {
    function SvCheckboxGroup(checkboxGroupService) {
        this.checkboxGroupService = checkboxGroupService;
        this.propagateChange = function (_) { };
    }
    SvCheckboxGroup_1 = SvCheckboxGroup;
    Object.defineProperty(SvCheckboxGroup.prototype, "selectedValues", {
        get: function () { return this._selectedValues; },
        set: function (newValues) {
            if (newValues) {
                this._selectedValues = newValues;
                this.checkboxGroupService.setValues(this._selectedValues);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SvCheckboxGroup.prototype, "color", {
        get: function () { return this._color; },
        set: function (newColor) {
            if (newColor !== this._color) {
                this._color = newColor;
                if (this._checkboxes) {
                    this.propagateColor();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    SvCheckboxGroup.prototype.writeValue = function (value) {
        this.selectedValues = value;
    };
    SvCheckboxGroup.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SvCheckboxGroup.prototype.registerOnTouched = function (fn) {
        // this.propagateChange = fn;
    };
    SvCheckboxGroup.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            // Sets values
            _this.checkboxGroupService.setValues(_this._selectedValues);
            // Sets up subscription
            _this.checkboxGroupService.valuesSelected$.subscribe(function (values) {
                _this._selectedValues = values;
                _this.propagateChange(_this._selectedValues);
            });
            // Set color
            _this.propagateColor();
        }, 0);
    };
    SvCheckboxGroup.prototype.propagateColor = function () {
        var _this = this;
        this._checkboxes.forEach(function (checkbox) {
            checkbox.color = _this._color;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChildren */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_3__checkbox__["a" /* Checkbox */]; })),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], SvCheckboxGroup.prototype, "_checkboxes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SvCheckboxGroup.prototype, "color", null);
    SvCheckboxGroup = SvCheckboxGroup_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-checkbox-group',
            template: "\n    <ng-content></ng-content>\n  ",
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* forwardRef */])(function () { return SvCheckboxGroup_1; }),
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_2__checkbox_group_service__["a" /* CheckboxGroupService */]
            ],
            host: {
                'class': '.sv-checkbox-group'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__checkbox_group_service__["a" /* CheckboxGroupService */]])
    ], SvCheckboxGroup);
    return SvCheckboxGroup;
    var SvCheckboxGroup_1;
}());



/***/ }),

/***/ "./src/checkbox/checkbox.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sv-checkbox-container\" (click)=\"checked = !checked\">\n  <!-- The checkbox element -->\n  <div class=\"sv-checkbox-display\" [ngClass]=\"{active: checked}\">\n    <i class=\"fas fa-check\"></i>\n  </div>\n\n  <!-- Checkbox Button Label -->\n  <label class=\"sv-checkbox-label\">\n    <ng-content></ng-content>\n  </label>\n\n  <!-- Native checkbox -->\n  <input type=\"checkbox\" value=\"thing\" [checked]=\"checked\">\n</div>"

/***/ }),

/***/ "./src/checkbox/checkbox.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvCheckboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox__ = __webpack_require__("./src/checkbox/checkbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox_group__ = __webpack_require__("./src/checkbox/checkbox-group.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SvCheckboxModule = (function () {
    function SvCheckboxModule() {
    }
    SvCheckboxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__checkbox__["a" /* Checkbox */], __WEBPACK_IMPORTED_MODULE_3__checkbox_group__["a" /* SvCheckboxGroup */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__checkbox__["a" /* Checkbox */], __WEBPACK_IMPORTED_MODULE_3__checkbox_group__["a" /* SvCheckboxGroup */]],
            providers: [],
        })
    ], SvCheckboxModule);
    return SvCheckboxModule;
}());



/***/ }),

/***/ "./src/checkbox/checkbox.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500|Roboto:400,400i,700\");\n/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.sv-checkbox.primary .sv-checkbox-display path {\n  stroke: white; }\n.sv-checkbox.primary .sv-checkbox-display.active {\n  background: #A8AA19;\n  border-color: #A8AA19; }\n.sv-checkbox.primary .sv-checkbox-display.active path {\n    stroke: #A8AA19; }\n.sv-checkbox.secondary .sv-checkbox-display path {\n  stroke: white; }\n.sv-checkbox.secondary .sv-checkbox-display.active {\n  background: #007A86;\n  border-color: #007A86; }\n.sv-checkbox.secondary .sv-checkbox-display.active path {\n    stroke: #007A86; }\n.sv-checkbox.success .sv-checkbox-display path {\n  stroke: white; }\n.sv-checkbox.success .sv-checkbox-display.active {\n  background: #A8AA19;\n  border-color: #A8AA19; }\n.sv-checkbox.success .sv-checkbox-display.active path {\n    stroke: #A8AA19; }\n.sv-checkbox.warning .sv-checkbox-display path {\n  stroke: white; }\n.sv-checkbox.warning .sv-checkbox-display.active {\n  background: #ED8B00;\n  border-color: #ED8B00; }\n.sv-checkbox.warning .sv-checkbox-display.active path {\n    stroke: #ED8B00; }\n.sv-checkbox.error .sv-checkbox-display path {\n  stroke: white; }\n.sv-checkbox.error .sv-checkbox-display.active {\n  background: #BA0C2F;\n  border-color: #BA0C2F; }\n.sv-checkbox.error .sv-checkbox-display.active path {\n    stroke: #BA0C2F; }\n.sv-checkbox.gray .sv-checkbox-display path {\n  stroke: white; }\n.sv-checkbox.gray .sv-checkbox-display.active {\n  background: #A1A6BA;\n  border-color: #A1A6BA; }\n.sv-checkbox.gray .sv-checkbox-display.active path {\n    stroke: #A1A6BA; }\n.sv-checkbox {\n  display: inline-block;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.sv-checkbox .sv-checkbox-container {\n    height: 20px; }\n.sv-checkbox .sv-checkbox-container .sv-checkbox-display {\n      width: 20px;\n      height: 20px;\n      display: inline-block;\n      position: relative;\n      border-radius: 4px;\n      border: 2px solid #A1A6BA;\n      text-align: center;\n      -webkit-transition: all 0.2s ease-out;\n      transition: all 0.2s ease-out; }\n.sv-checkbox .sv-checkbox-container .sv-checkbox-display .fa-check {\n        position: relative;\n        top: -1.5px;\n        color: white;\n        opacity: 0;\n        font-size: 14px;\n        -webkit-transform: scale(0.5);\n                transform: scale(0.5);\n        -webkit-transition: all 0.2s ease-out;\n        transition: all 0.2s ease-out; }\n.sv-checkbox .sv-checkbox-container .sv-checkbox-display .fa-check path {\n          -webkit-transition: stroke 0.2s ease-out;\n          transition: stroke 0.2s ease-out;\n          stroke-width: 40; }\n.sv-checkbox .sv-checkbox-container .sv-checkbox-display.active .fa-check {\n        opacity: 1;\n        -webkit-transform: scale(1);\n                transform: scale(1); }\n.sv-checkbox .sv-checkbox-label {\n    margin-left: 5px;\n    display: inline-block;\n    position: relative;\n    top: -2px;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 12px;\n    font-weight: 500;\n    cursor: pointer; }\n.sv-checkbox input[type=checkbox] {\n    display: none; }\n"

/***/ }),

/***/ "./src/checkbox/checkbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CheckboxBase */
/* unused harmony export _CheckboxBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox_group_service__ = __webpack_require__("./src/checkbox/checkbox-group-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_solid__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






__WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_solid__["a" /* faCheck */]);
var CheckboxBase = (function () {
    function CheckboxBase(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    return CheckboxBase;
}());

var _CheckboxBase = Object(__WEBPACK_IMPORTED_MODULE_1__core__["a" /* colorMixin */])(CheckboxBase);
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(checkboxGroupService, renderer, element) {
        var _this = _super.call(this, renderer, element) || this;
        _this.checkboxGroupService = checkboxGroupService;
        // The checked flag to be bound to ngModel
        _this._checked = false;
        _this.propagateChange = function (_) { };
        // Set up subscription if in group
        if (checkboxGroupService) {
            _this.subscription = checkboxGroupService.valuesSelected$.subscribe(function (value) {
                _this._checked = value.indexOf(_this.value) !== -1;
                _this.propagateChange(_this._checked);
            });
        }
        return _this;
    }
    Checkbox_1 = Checkbox;
    Object.defineProperty(Checkbox.prototype, "checked", {
        get: function () { return this._checked; },
        set: function (newValue) {
            if (this.checkboxGroupService) {
                if (newValue) {
                    this.checkboxGroupService.addValue(this.value);
                }
                else {
                    this.checkboxGroupService.removeValue(this.value);
                }
            }
            else {
                this._checked = newValue;
                this.propagateChange(this._checked);
            }
        },
        enumerable: true,
        configurable: true
    });
    Checkbox.prototype.writeValue = function (value) {
        this.checked = value;
    };
    Checkbox.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    Checkbox.prototype.registerOnTouched = function (fn) {
        // this.propagateChange = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Boolean])
    ], Checkbox.prototype, "checked", null);
    Checkbox = Checkbox_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-checkbox',
            template: __webpack_require__("./src/checkbox/checkbox.html"),
            styles: [__webpack_require__("./src/checkbox/checkbox.scss")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* forwardRef */])(function () { return Checkbox_1; }),
                    multi: true
                }
            ],
            host: {
                'class': 'sv-checkbox'
            },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewEncapsulation */].None
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__checkbox_group_service__["a" /* CheckboxGroupService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], Checkbox);
    return Checkbox;
    var Checkbox_1;
}(_CheckboxBase));



/***/ }),

/***/ "./src/core/common/color.ts":
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

/***/ "./src/core/directives/outside-click.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ClickOutsideDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        console.log(targetElement);
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Directive */])({
            selector: '[svOutsideClick]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_color__ = __webpack_require__("./src/core/common/color.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__common_color__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_outside_click__ = __webpack_require__("./src/core/directives/outside-click.ts");
/* unused harmony namespace reexport */

// export * from './pipes/searchFilter';



/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./src/core/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_button_module__ = __webpack_require__("./src/button/button.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__button_button_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button__ = __webpack_require__("./src/button/button.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button_state__ = __webpack_require__("./src/button/button-state.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_module__ = __webpack_require__("./src/spinner/spinner.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__switch_switch_module__ = __webpack_require__("./src/switch/switch.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__switch_switch_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__radio_button_radio_button_module__ = __webpack_require__("./src/radio-button/radio-button.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__radio_button_radio_button_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkbox_checkbox_module__ = __webpack_require__("./src/checkbox/checkbox.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__checkbox_checkbox_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications_module__ = __webpack_require__("./src/notifications/notifications.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__notifications_notifications_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifications_notifications_service__ = __webpack_require__("./src/notifications/notifications.service.ts");
/* unused harmony reexport SvNotificationsService */








// export * from './select/select.module';




/***/ }),

/***/ "./src/notifications/notifications-overlay.html":
/***/ (function(module, exports) {

module.exports = "<div \n  *ngFor=\"let t of toast\"\n  class=\"toast\"\n  [ngClass]=\"[t.type]\"\n  (click)=\"dismissToast(t)\"\n  [@toastAnimation]=\"toastState()\"\n>\n  <div class=\"icon\" *ngIf=\"t.options['icon']\">\n    <i *ngIf=\"t.type == 'info'\" class=\"fas fa-info-circle\"></i>\n    <i *ngIf=\"t.type == 'success'\" class=\"far fa-check-circle\"></i>\n    <i *ngIf=\"t.type == 'warning'\" class=\"fas fa-exclamation-circle\"></i>\n    <i *ngIf=\"t.type == 'error'\" class=\"fas fa-exclamation-triangle\"></i>\n  </div>\n  <div class=\"message\">\n    <div>\n      <p>{{t.message}}</p>\n      <ul *ngIf=\"t.messageList.length > 0\">\n        <li *ngFor=\"let m of t.messageList\">{{m}}</li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/notifications/notifications-overlay.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500|Roboto:400,400i,700\");\n/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n:host {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  width: 400px;\n  max-height: 100vh;\n  padding: 20px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  pointer-events: none;\n  z-index: 1000000; }\n:host:empty {\n  display: none; }\n:host > div {\n  pointer-events: all; }\n.toast {\n  -webkit-box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);\n          box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);\n  width: 400px;\n  margin-bottom: 10px;\n  padding: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: white;\n  border-radius: 4px; }\n.toast.success {\n    background: #A8AA19; }\n.toast.warning {\n    background: #ED8B00; }\n.toast.error {\n    background: #BA0C2F; }\n.toast.info {\n    background: black; }\n.toast .icon {\n    margin-right: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 24px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n.toast .message {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 14px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n.toast .message ul {\n      margin-top: 5px;\n      margin-bottom: 0;\n      padding-left: 14px; }\n.toast p {\n  margin: 0; }\n@media (max-width: 767px) {\n  :host {\n    width: 100vw;\n    padding: 0; }\n  .toast {\n    width: 100vw;\n    border-radius: 0; } }\n"

/***/ }),

/***/ "./src/notifications/notifications-overlay.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvNotificationsOverlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast__ = __webpack_require__("./src/notifications/toast.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-regular/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_solid__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_regular__["a" /* faCheckCircle */], __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_solid__["d" /* faInfoCircle */], __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_solid__["b" /* faExclamationCircle */], __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_solid__["c" /* faExclamationTriangle */]);
var SvNotificationsOverlayComponent = (function () {
    function SvNotificationsOverlayComponent() {
        // Array of toast to display
        this.toast = [];
        this.timeouts = [];
    }
    SvNotificationsOverlayComponent.prototype.addToast = function (type, message, list, userOptions) {
        var _this = this;
        var options = { duration: 3000, dismissible: true, icon: true };
        if (userOptions) {
            for (var _i = 0, _a = Object.keys(userOptions); _i < _a.length; _i++) {
                var k = _a[_i];
                options[k] = userOptions[k];
            }
        }
        var t = new __WEBPACK_IMPORTED_MODULE_1__toast__["a" /* Toast */](type, message, list, options);
        this.toast.unshift(t);
        setTimeout(function () {
            _this.removeToast(t.id);
        }, options.duration);
    };
    SvNotificationsOverlayComponent.prototype.dismissToast = function (t) {
        if (t.options['dismissible']) {
            this.removeToast(t.id);
        }
    };
    SvNotificationsOverlayComponent.prototype.removeToast = function (id) {
        var index = this.toast.findIndex(function (x) { return x.id === id; });
        this.toast.splice(index, 1);
    };
    SvNotificationsOverlayComponent.prototype.toastState = function () {
        if (window.outerWidth > 720) {
            return 'show';
        }
        else {
            return 'showMobile';
        }
    };
    SvNotificationsOverlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-notifications-overlay',
            template: __webpack_require__("./src/notifications/notifications-overlay.html"),
            styles: [__webpack_require__("./src/notifications/notifications-overlay.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('toastAnimation', [
                    // Desktop
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('void => show', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('250ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(0)' }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('show => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('250ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(100%)' }))
                    ]),
                    // Mobile
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('void => showMobile', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('250ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)' }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('showMobile => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('250ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-100%)' }))
                    ])
                ])
            ],
        }),
        __metadata("design:paramtypes", [])
    ], SvNotificationsOverlayComponent);
    return SvNotificationsOverlayComponent;
}());



/***/ }),

/***/ "./src/notifications/notifications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvNotificationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_overlay__ = __webpack_require__("./src/notifications/notifications-overlay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_service__ = __webpack_require__("./src/notifications/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SvNotificationsModule = (function () {
    function SvNotificationsModule() {
    }
    SvNotificationsModule_1 = SvNotificationsModule;
    SvNotificationsModule.forRoot = function () {
        return {
            ngModule: SvNotificationsModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_3__notifications_service__["a" /* SvNotificationsService */]]
        };
    };
    SvNotificationsModule = SvNotificationsModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__notifications_overlay__["a" /* SvNotificationsOverlayComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__notifications_overlay__["a" /* SvNotificationsOverlayComponent */]],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__notifications_overlay__["a" /* SvNotificationsOverlayComponent */]]
        })
    ], SvNotificationsModule);
    return SvNotificationsModule;
    var SvNotificationsModule_1;
}());



/***/ }),

/***/ "./src/notifications/notifications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvNotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifications_overlay__ = __webpack_require__("./src/notifications/notifications-overlay.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SvNotificationsService = (function () {
    function SvNotificationsService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        // Append notifications overlay component to body
        var componentRef = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__notifications_overlay__["a" /* SvNotificationsOverlayComponent */]).create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        // Get notications overlay component instance
        this.notificationOverlay = componentRef.instance;
    }
    SvNotificationsService.prototype.addToast = function (type, message, options) {
        if (options === void 0) { options = null; }
        this.addListToast(type, message, [], options);
    };
    SvNotificationsService.prototype.addListToast = function (type, message, list, options) {
        if (options === void 0) { options = null; }
        this.notificationOverlay.addToast(type, message, list, options);
    };
    SvNotificationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */]])
    ], SvNotificationsService);
    return SvNotificationsService;
}());



/***/ }),

/***/ "./src/notifications/toast.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
var Toast = (function () {
    function Toast(type, message, messageList, options) {
        this.type = type;
        this.message = message;
        this.messageList = messageList;
        this.options = options;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return Toast;
}());



/***/ }),

/***/ "./src/radio-button/radio-button.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sv-radio-button-container\" (click)=\"selected = true\">\n  <!-- Radio Button Element -->\n  <div class=\"sv-radio-button-display\" [ngClass]=\"{active: selected}\"></div>\n\n  <!-- Radio Button Label -->\n  <label class=\"sv-radio-button-label\">\n    <ng-content></ng-content>\n  </label>\n\n  <input type=\"radio\" [checked]=\"selected\" [value]=\"value\" [name]=\"name\">\n</div>"

/***/ }),

/***/ "./src/radio-button/radio-button.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvRadioButtonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radio_button__ = __webpack_require__("./src/radio-button/radio-button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__radio_group__ = __webpack_require__("./src/radio-button/radio-group.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SvRadioButtonModule = (function () {
    function SvRadioButtonModule() {
    }
    SvRadioButtonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__radio_button__["a" /* SvRadioButton */], __WEBPACK_IMPORTED_MODULE_4__radio_group__["a" /* SvRadioGroup */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__radio_button__["a" /* SvRadioButton */], __WEBPACK_IMPORTED_MODULE_4__radio_group__["a" /* SvRadioGroup */]],
            providers: [],
        })
    ], SvRadioButtonModule);
    return SvRadioButtonModule;
}());



/***/ }),

/***/ "./src/radio-button/radio-button.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500|Roboto:400,400i,700\");\n/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.sv-radio-button.primary .sv-radio-button-display::before {\n  background-color: #A8AA19; }\n.sv-radio-button.primary .sv-radio-button-display.active {\n  border-color: #A8AA19; }\n.sv-radio-button.secondary .sv-radio-button-display::before {\n  background-color: #007A86; }\n.sv-radio-button.secondary .sv-radio-button-display.active {\n  border-color: #007A86; }\n.sv-radio-button.success .sv-radio-button-display::before {\n  background-color: #A8AA19; }\n.sv-radio-button.success .sv-radio-button-display.active {\n  border-color: #A8AA19; }\n.sv-radio-button.warning .sv-radio-button-display::before {\n  background-color: #ED8B00; }\n.sv-radio-button.warning .sv-radio-button-display.active {\n  border-color: #ED8B00; }\n.sv-radio-button.error .sv-radio-button-display::before {\n  background-color: #BA0C2F; }\n.sv-radio-button.error .sv-radio-button-display.active {\n  border-color: #BA0C2F; }\n.sv-radio-button.gray .sv-radio-button-display::before {\n  background-color: #A1A6BA; }\n.sv-radio-button.gray .sv-radio-button-display.active {\n  border-color: #A1A6BA; }\n.sv-radio-button {\n  display: inline-block;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.sv-radio-button .sv-radio-button-container {\n    height: 20px; }\n.sv-radio-button .sv-radio-button-container input[type=radio] {\n      display: none; }\n.sv-radio-button .sv-radio-button-display {\n    width: 20px;\n    height: 20px;\n    display: inline-block;\n    position: relative;\n    border-radius: 50%;\n    border: 2px solid #A1A6BA; }\n.sv-radio-button .sv-radio-button-display::before {\n      content: ' ';\n      width: 10px;\n      height: 10px;\n      position: absolute;\n      top: 3px;\n      left: 3px;\n      opacity: 0;\n      border-radius: 50%;\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      -webkit-transition: opacity 0.1s ease-out, border-color 0.1s ease-out, -webkit-transform 0.1s ease-out;\n      transition: opacity 0.1s ease-out, border-color 0.1s ease-out, -webkit-transform 0.1s ease-out;\n      transition: transform 0.1s ease-out, opacity 0.1s ease-out, border-color 0.1s ease-out;\n      transition: transform 0.1s ease-out, opacity 0.1s ease-out, border-color 0.1s ease-out, -webkit-transform 0.1s ease-out; }\n.sv-radio-button .sv-radio-button-display.active::before {\n      opacity: 1;\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n.sv-radio-button .sv-radio-button-label {\n    margin-left: 5px;\n    display: inline-block;\n    position: relative;\n    top: -6px;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 12px;\n    font-weight: 500;\n    cursor: pointer; }\n.sv-radio-group .sv-radio-button {\n  margin-right: 20px; }\n"

/***/ }),

/***/ "./src/radio-button/radio-button.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SvRadioButtonBase */
/* unused harmony export _SvRadioButtonBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvRadioButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio_group_service__ = __webpack_require__("./src/radio-button/radio-group-service.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SvRadioButtonBase = (function () {
    function SvRadioButtonBase(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    return SvRadioButtonBase;
}());

var _SvRadioButtonBase = Object(__WEBPACK_IMPORTED_MODULE_1__core__["a" /* colorMixin */])(SvRadioButtonBase);
var SvRadioButton = (function (_super) {
    __extends(SvRadioButton, _super);
    function SvRadioButton(radioGroupService, renderer, element) {
        var _this = _super.call(this, renderer, element) || this;
        _this.radioGroupService = radioGroupService;
        // Set up the subscription if in group
        if (radioGroupService) {
            _this.subscription = radioGroupService.valueSelected$.subscribe(function (value) {
                // When value changes, updated selected
                _this._selected = value === _this.value;
            });
        }
        return _this;
    }
    Object.defineProperty(SvRadioButton.prototype, "selected", {
        get: function () { return this._selected; },
        set: function (newValue) {
            if (newValue !== this._selected) {
                // Broadcast change to other radio buttons if in group
                if (this.radioGroupService) {
                    this.radioGroupService.selectValue(this.value);
                }
                else {
                    this._selected = newValue;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SvRadioButton.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SvRadioButton.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SvRadioButton.prototype, "name", void 0);
    SvRadioButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-radio-button',
            template: __webpack_require__("./src/radio-button/radio-button.html"),
            styles: [__webpack_require__("./src/radio-button/radio-button.scss")],
            host: {
                'class': 'sv-radio-button'
            },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewEncapsulation */].None
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__radio_group_service__["a" /* RadioGroupService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], SvRadioButton);
    return SvRadioButton;
}(_SvRadioButtonBase));



/***/ }),

/***/ "./src/radio-button/radio-group-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioGroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Service to communicate with all radio buttons associated with the group
var RadioGroupService = (function () {
    function RadioGroupService() {
        // Value to watch
        this._selectedValue = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        // Observable
        this.valueSelected$ = this._selectedValue.asObservable();
    }
    // Metho to change the selected value
    RadioGroupService.prototype.selectValue = function (value) {
        this._selectedValue.next(value);
    };
    RadioGroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])()
    ], RadioGroupService);
    return RadioGroupService;
}());



/***/ }),

/***/ "./src/radio-button/radio-group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvRadioGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio_group_service__ = __webpack_require__("./src/radio-button/radio-group-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radio_button__ = __webpack_require__("./src/radio-button/radio-button.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SvRadioGroup = (function () {
    function SvRadioGroup(radioGroupService) {
        var _this = this;
        this.radioGroupService = radioGroupService;
        this.propagateChange = function (_) { };
        // Subscribe to the radioGroupService to detect changes on selected value
        radioGroupService.valueSelected$.subscribe(function (value) {
            _this.selected = value;
            _this.propagateChange(_this.selected);
        });
    }
    SvRadioGroup_1 = SvRadioGroup;
    Object.defineProperty(SvRadioGroup.prototype, "color", {
        get: function () { return this._color; },
        set: function (newColor) {
            if (newColor !== this._color) {
                this._color = newColor;
                if (this._radioButtons) {
                    this.propagateColor();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SvRadioGroup.prototype, "name", {
        get: function () { return this._name; },
        set: function (newName) {
            if (newName !== this._name) {
                this._name = newName;
                if (this._radioButtons) {
                    this.propagateName();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    SvRadioGroup.prototype.writeValue = function (value) {
        this.selected = value;
    };
    SvRadioGroup.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SvRadioGroup.prototype.registerOnTouched = function (fn) {
        // this.propagateChange = fn;
    };
    SvRadioGroup.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Initialize the selected value to input
        setTimeout(function () {
            _this.radioGroupService.selectValue(_this.selected);
            _this.propagateColor();
            _this.propagateName();
        }, 0);
    };
    SvRadioGroup.prototype.propagateName = function () {
        var _this = this;
        this._radioButtons.forEach(function (radio) {
            radio.name = _this._name;
        });
    };
    SvRadioGroup.prototype.propagateColor = function () {
        var _this = this;
        this._radioButtons.forEach(function (radio) {
            radio.color = _this._color;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SvRadioGroup.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChildren */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_3__radio_button__["a" /* SvRadioButton */]; })),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], SvRadioGroup.prototype, "_radioButtons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], SvRadioGroup.prototype, "color", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], SvRadioGroup.prototype, "name", null);
    SvRadioGroup = SvRadioGroup_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-radio-group',
            template: "\n    <ng-content></ng-content>\n  ",
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* forwardRef */])(function () { return SvRadioGroup_1; }),
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_2__radio_group_service__["a" /* RadioGroupService */]
            ],
            host: {
                'class': '.sv-radio-group'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__radio_group_service__["a" /* RadioGroupService */]])
    ], SvRadioGroup);
    return SvRadioGroup;
    var SvRadioGroup_1;
}());



/***/ }),

/***/ "./src/spinner/spinner.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\">\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <div class=\"spinner\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/spinner/spinner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvSpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner__ = __webpack_require__("./src/spinner/spinner.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* SvSpinner */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* SvSpinner */]],
            providers: [],
        })
    ], SvSpinnerModule);
    return SvSpinnerModule;
}());



/***/ }),

/***/ "./src/spinner/spinner.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500|Roboto:400,400i,700\");\n/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.sv-spinner.primary .spinner > div {\n  border-color: #A8AA19; }\n.sv-spinner.secondary .spinner > div {\n  border-color: #007A86; }\n.sv-spinner.success .spinner > div {\n  border-color: #A8AA19; }\n.sv-spinner.warning .spinner > div {\n  border-color: #ED8B00; }\n.sv-spinner.error .spinner > div {\n  border-color: #BA0C2F; }\n.sv-spinner.gray .spinner > div {\n  border-color: #A1A6BA; }\n.spinner-container {\n  min-height: 20px;\n  display: inline-block;\n  text-align: center; }\n.spinner-container span {\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 10px;\n    letter-spacing: 0.1em;\n    text-transform: uppercase; }\n.spinner {\n  height: 20px;\n  margin: 0px auto 0;\n  text-align: center; }\n.spinner > div {\n  width: 12px;\n  height: 12px;\n  margin-top: 4px;\n  display: inline-block;\n  border-radius: 100%;\n  border: 2px solid #A8AA19;\n  vertical-align: top;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n"

/***/ }),

/***/ "./src/spinner/spinner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SvSpinnerBase */
/* unused harmony export _SvSpinnerBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/core/index.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SvSpinner.prototype, "color", void 0);
    SvSpinner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-spinner',
            template: __webpack_require__("./src/spinner/spinner.html"),
            styles: [__webpack_require__("./src/spinner/spinner.scss")],
            host: {
                'class': 'sv-spinner'
            },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], SvSpinner);
    return SvSpinner;
}(_SvSpinnerBase));



/***/ }),

/***/ "./src/switch/switch.html":
/***/ (function(module, exports) {

module.exports = "<!-- Switch Element -->\n<div class=\"sv-switch-control\" [ngClass]=\"{on: state}\" (click)=\"changeState($event)\">\n  <span class=\"sv-switch-state-indicator\"></span>\n</div>\n\n<!-- Label -->\n<label class=\"sv-switch-label\">\n  <ng-content></ng-content>\n</label>\n"

/***/ }),

/***/ "./src/switch/switch.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvSwitchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__switch__ = __webpack_require__("./src/switch/switch.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SvSwitchModule = (function () {
    function SvSwitchModule() {
    }
    SvSwitchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__switch__["a" /* SvSwitch */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__switch__["a" /* SvSwitch */]],
            providers: [],
        })
    ], SvSwitchModule);
    return SvSwitchModule;
}());



/***/ }),

/***/ "./src/switch/switch.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500|Roboto:400,400i,700\");\n/*\n  Typography\n*/\n/*\n  Colors\n*/\n/* \n  Stuff\n*/\n/*\n  Media Queries\n*/\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.sv-switch.primary .sv-switch-control.on {\n  background-color: #A8AA19; }\n.sv-switch.secondary .sv-switch-control.on {\n  background-color: #007A86; }\n.sv-switch.success .sv-switch-control.on {\n  background-color: #A8AA19; }\n.sv-switch.warning .sv-switch-control.on {\n  background-color: #ED8B00; }\n.sv-switch.error .sv-switch-control.on {\n  background-color: #BA0C2F; }\n.sv-switch.gray .sv-switch-control.on {\n  background-color: #A1A6BA; }\n.sv-switch {\n  height: 20px; }\n.sv-switch .sv-switch-control {\n    width: 40px;\n    height: 20px;\n    padding: 2px;\n    display: inline-block;\n    background-color: #B9BED2;\n    border-radius: 10px;\n    -webkit-transition: background-color 0.2s linear;\n    transition: background-color 0.2s linear;\n    cursor: pointer; }\n.sv-switch .sv-switch-control:hover .sv-switch-state-indicator {\n      -webkit-transform: translateX(2px);\n              transform: translateX(2px); }\n.sv-switch .sv-switch-control .sv-switch-state-indicator {\n      width: 16px;\n      height: 16px;\n      display: block;\n      background-color: #FFF;\n      border-radius: 50%;\n      -webkit-transition: 0.2s ease-in-out;\n      transition: 0.2s ease-in-out; }\n.sv-switch .sv-switch-control.on .sv-switch-state-indicator {\n      -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n              box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n      -webkit-transform: translateX(20px);\n              transform: translateX(20px); }\n.sv-switch .sv-switch-control.on:hover .sv-switch-state-indicator {\n      -webkit-transform: translate(18px);\n              transform: translate(18px); }\n.sv-switch-label {\n  display: inline-block;\n  position: relative;\n  top: -4.5px;\n  left: 5px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.sv-switch.disabled {\n  opacity: 0.5; }\n.sv-switch.disabled .sv-switch-control {\n    cursor: default; }\n.sv-switch.disabled:hover .sv-switch-state-indicator {\n    -webkit-transform: none;\n            transform: none; }\n"

/***/ }),

/***/ "./src/switch/switch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SvSwitchBase */
/* unused harmony export _SvSwitchBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvSwitch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/core/index.ts");
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


var SvSwitchBase = (function () {
    function SvSwitchBase(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    return SvSwitchBase;
}());

var _SvSwitchBase = Object(__WEBPACK_IMPORTED_MODULE_1__core__["a" /* colorMixin */])(SvSwitchBase);
var SvSwitch = (function (_super) {
    __extends(SvSwitch, _super);
    function SvSwitch(renderer, element) {
        var _this = _super.call(this, renderer, element) || this;
        _this.state = false;
        _this.disabled = false;
        _this.stateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        return _this;
    }
    // Method to change the state of the switch
    SvSwitch.prototype.changeState = function (event) {
        if (!this.disabled) {
            this.state = !this.state;
            this.stateChange.emit(this.state);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], SvSwitch.prototype, "state", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SvSwitch.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostBinding */])('class.disabled'), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], SvSwitch.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], SvSwitch.prototype, "stateChange", void 0);
    SvSwitch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sv-switch',
            template: __webpack_require__("./src/switch/switch.html"),
            styles: [__webpack_require__("./src/switch/switch.scss")],
            host: {
                'class': 'sv-switch',
                'disabled': 'disabled'
            },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], SvSwitch);
    return SvSwitch;
}(_SvSwitchBase));



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map