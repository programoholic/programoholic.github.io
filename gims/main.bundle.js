webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "app-gims-home {\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;;\n\tdisplay: block;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_material_module__ = __webpack_require__("./src/app/core/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gims_home_gims_home_component__ = __webpack_require__("./src/app/gims-home/gims-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_gims_routing_module__ = __webpack_require__("./src/app/core/gims-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__appbar_appbar_component__ = __webpack_require__("./src/app/appbar/appbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__side_nav_menu_side_nav_menu_component__ = __webpack_require__("./src/app/side-nav-menu/side-nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gims_app_screen_gims_app_screen_component__ = __webpack_require__("./src/app/gims-app-screen/gims-app-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gims_app_immigrant_gims_app_immigrant_component__ = __webpack_require__("./src/app/gims-app-immigrant/gims-app-immigrant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__project_picker_project_picker_component__ = __webpack_require__("./src/app/project-picker/project-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__general_details_general_details_component__ = __webpack_require__("./src/app/general-details/general-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_gims_shared_service_service__ = __webpack_require__("./src/app/shared-services/gims-shared-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lca_initiation_lca_initiation_component__ = __webpack_require__("./src/app/lca-initiation/lca-initiation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__default_initiate_default_initiate_component__ = __webpack_require__("./src/app/default-initiate/default-initiate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__work_progress_work_progress_component__ = __webpack_require__("./src/app/work-progress/work-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__initiate_request_initiate_request_component__ = __webpack_require__("./src/app/initiate-request/initiate-request.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__gims_home_gims_home_component__["a" /* GimsHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__appbar_appbar_component__["a" /* AppbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__side_nav_menu_side_nav_menu_component__["a" /* SideNavMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__gims_app_screen_gims_app_screen_component__["a" /* GimsAppScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_13__gims_app_immigrant_gims_app_immigrant_component__["a" /* GimsAppImmigrantComponent */],
            __WEBPACK_IMPORTED_MODULE_15__project_picker_project_picker_component__["a" /* ProjectPickerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__general_details_general_details_component__["a" /* GeneralDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__lca_initiation_lca_initiation_component__["a" /* LcaInitiationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__default_initiate_default_initiate_component__["a" /* DefaultInitiateComponent */],
            __WEBPACK_IMPORTED_MODULE_20__work_progress_work_progress_component__["a" /* WorkProgressComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__initiate_request_initiate_request_component__["a" /* InitiateRequestComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__core_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_9__core_gims_routing_module__["a" /* GimsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["i" /* ReactiveFormsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__shared_services_gims_shared_service_service__["a" /* GimsSharedService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/appbar/appbar.component.css":
/***/ (function(module, exports) {

module.exports = ".side-widgets li {\n    padding-left: 20px;\n}\n.avtar{\n    width: 22px;\n    border-radius: 50%\n}\n.side-widgets {\n    position: relative;\n    top: 5px;\n}\n.side-widgets li a {\n    font-size: 22px;\n}\n.mat-sidenav-container {\n    background: rgba(172, 32, 32, 0.08);\n  }\n.bg-light {\n    background-color: #fff !important\n}\n.blank-grow {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n  }"

/***/ }),

/***/ "./src/app/appbar/appbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    <h5 class=\"color-blue\"><a [routerLink]=\"['/WT_GIMS_E']\">Wipro GIMS</a></h5>\n  \n    <ul class=\"nav navbar-right side-widgets color-blue\">\n      <li><a href=\"#\"><i class=\"icon-info\"></i></a></li>\n      <li><img class=\"round shadow-box avtar\" aria-label=\"MyWipro\" src=\"assets\\user\\avtar.jpg\" /></li>\n      <li><a class=\"icon-logout\" routerlink=\"/\" title=\"Logout\"></a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/appbar/appbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppbarComponent = (function () {
    function AppbarComponent(changeDetectorRef, media) {
        this.fillerNav = Array(50).fill(0).map(function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array(50).fill(0).map(function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppbarComponent.prototype.ngOnInit = function () {
    };
    AppbarComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    return AppbarComponent;
}());
AppbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-appbar',
        template: __webpack_require__("./src/app/appbar/appbar.component.html"),
        styles: [__webpack_require__("./src/app/appbar/appbar.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["a" /* MediaMatcher */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["a" /* MediaMatcher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["a" /* MediaMatcher */]) === "function" && _b || Object])
], AppbarComponent);

var _a, _b;
//# sourceMappingURL=appbar.component.js.map

/***/ }),

/***/ "./src/app/core/gims-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gims_home_gims_home_component__ = __webpack_require__("./src/app/gims-home/gims-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gims_app_screen_gims_app_screen_component__ = __webpack_require__("./src/app/gims-app-screen/gims-app-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gims_app_immigrant_gims_app_immigrant_component__ = __webpack_require__("./src/app/gims-app-immigrant/gims-app-immigrant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lca_initiation_lca_initiation_component__ = __webpack_require__("./src/app/lca-initiation/lca-initiation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__default_initiate_default_initiate_component__ = __webpack_require__("./src/app/default-initiate/default-initiate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__work_progress_work_progress_component__ = __webpack_require__("./src/app/work-progress/work-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__initiate_request_initiate_request_component__ = __webpack_require__("./src/app/initiate-request/initiate-request.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot([
    { path: '', redirectTo: '/WT_GIMS_E', pathMatch: 'full' },
    { path: 'WT_GIMS_E', component: __WEBPACK_IMPORTED_MODULE_2__gims_home_gims_home_component__["a" /* GimsHomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__gims_app_screen_gims_app_screen_component__["a" /* GimsAppScreenComponent */],
                children: [
                    { path: '*', redirectTo: '/', pathMatch: 'full' },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__default_initiate_default_initiate_component__["a" /* DefaultInitiateComponent */] }
                ]
            },
            { path: 'immigriant', component: __WEBPACK_IMPORTED_MODULE_4__gims_app_immigrant_gims_app_immigrant_component__["a" /* GimsAppImmigrantComponent */],
                children: [
                    { path: '', redirectTo: '/lca', pathMatch: 'full' },
                    { path: 'lca', component: __WEBPACK_IMPORTED_MODULE_5__lca_initiation_lca_initiation_component__["a" /* LcaInitiationComponent */] }
                ]
            },
            { path: 'knowledge', component: __WEBPACK_IMPORTED_MODULE_7__work_progress_work_progress_component__["a" /* WorkProgressComponent */] },
            { path: 'application', component: __WEBPACK_IMPORTED_MODULE_7__work_progress_work_progress_component__["a" /* WorkProgressComponent */] },
            { path: 'task', component: __WEBPACK_IMPORTED_MODULE_7__work_progress_work_progress_component__["a" /* WorkProgressComponent */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__["a" /* HomePageComponent */] },
            { path: 'initiate_req', component: __WEBPACK_IMPORTED_MODULE_9__initiate_request_initiate_request_component__["a" /* InitiateRequestComponent */] }
        ]
    }
], { useHash: true });
var GimsRoutingModule = (function () {
    function GimsRoutingModule() {
    }
    return GimsRoutingModule;
}());
GimsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [routes],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: []
    })
], GimsRoutingModule);

//# sourceMappingURL=gims-routing.module.js.map

/***/ }),

/***/ "./src/app/core/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "./src/app/default-initiate/default-initiate.component.css":
/***/ (function(module, exports) {

module.exports = ".tip-container{\n    background-color:#f6f6f6;\n    border-radius: 2px 2px 2px 2px;    \n    color:#666;  \n    padding:20px 20px;\n}\n.div-tips>h6{\ncolor: #6dc24b;\nmargin-bottom: 5px;\n}\n.tip-container>div,.tip-container>span{\n  margin-bottom:2px;\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.proj-details{\n  margin-top:5px;\n  margin-bottom: 5px;\n}\n.navbtn{\n  background-color: #0e3570;\n  color: white;\n}\nhr{\n  margin-top:3px;\n  padding: 3px;\n}\n.cs-detail{\n  margin-bottom:10px;\n}\n.proj-detail{\n  margin-bottom:20px;\n}"

/***/ }),

/***/ "./src/app/default-initiate/default-initiate.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"firstFormGroup\">\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <!--  Card Header starts  -->\n      </mat-card-header>\n      <mat-card-content>\n        <router-outlet></router-outlet>\n        <section class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-6 header\">\n              <h6 class=\"color-bg\">Initiation</h6>\n              <p>1/2 Select Request Type</p>\n            </div>\n            <div class=\"col-md-6 text-right\">\n              <button mat-raised-button class=\"navbtn\" (click)=\"navToLca()\">LCA Initiation</button>\n            </div>\n          </div>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <!-- General Information  Section-->\n              <div class=\"\">\n                <div class=\"\">\n                  <h6>General Details</h6>\n                </div>\n                <div class=\"\">\n                  <app-general-details></app-general-details>\n                </div>\n                <!-- Customer Information Section -->\n                <div class=\"cs-detail\">\n                  <h6>Customer Details</h6>\n                </div>\n                <div class=\"proj-details col-md-8 row\">\n                  <app-project-picker (projectDetails)=\"recieveProjectDetails($event)\"></app-project-picker>\n                </div>\n                <!-- Post Project selection area -->\n                <div class=\" row\">\n                  <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Customer Name\" class=\"read-only-content\" disabled value=\"{{projectDetails?.AssignmentFor.client}}\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Project Name\" class=\"read-only-content\" disabled value=\"{{projectDetails?.AssignmentFor.projName}}\">\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Approving Authority\" class=\"read-only-content\" disabled value=\"{{projectDetails?.manager}}\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"req-field col-md-6 col-sm-6 col-xs-12\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"Address(Assignment)\" formControlName=\"assignmentAddress\">\n                        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                          {{ food.viewValue }}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div  *ngIf=\"projectDetails\">\n                  <h6>Other Details</h6>\n                </div>\n                <div class=\"row\" *ngIf=\"projectDetails\">\n                  <div class=\"req-field col-md-6 col-sm-12 col-xs-12\">\n                    <mat-form-field>\n                      <input matInput [matDatepicker]=\"picker1\" formControlName=\"startDate\" placeholder=\"Start date (mm/dd/yyyy)\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker1></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"req-field col-md-6 col-sm-6 col-xs-12\">\n                    <mat-form-field>\n                      <input matInput [matDatepicker]=\"picker2\" placeholder=\"End date (mm/dd/yyyy)\" formControlName=\"endDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\" ></mat-datepicker-toggle>\n                      <mat-datepicker #picker2></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"projectDetails\">\n                  <div class=\"req-field col-md-6 col-sm-6 col-xs-6\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"Purpose of travel\" formControlName=\"assignmentAddress\">\n                        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                          {{ food.viewValue }}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- Tips and Disclaimer section -->\n            <div class=\"col-4\">\n              <!-- on Desktop and large screens -->\n              <div class=\"container tip-container d-none d-lg-block\">\n                <div class=\"div-tips hidden-xs row\">\n                  <h6>Tips</h6>\n                </div>\n                <div class=\"row hidden-xs\">\n                  <p>\n                    {{screenHint}}\n                  </p>\n                </div>\n              </div>\n              <div class=\"container  d-block d-lg-none\">\n                <mat-icon aria-label=\"Example icon-button info\" class=\"float-right\" (click)=\"tooltip.show()\">info</mat-icon>\n                <span matTooltip=\"{{screenHint}}\" #tooltip=\"matTooltip\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n          <div class=\"col-md-8 col-sm-2 col-xs-2\">\n          <button mat-raised-button class=\"float-left color-default\" >Back</button>                 \n            </div>\n            \n            <div class=\"col-md-4 col-sm-10 col-xs-10 float-right\">\n                <button mat-raised-button color=\"warn\">Reset</button>\n                <button mat-raised-button color=\"primary\"  class=\"float-right\">Find</button>\n            </div>\n          </div>\n        </section>\n        <!--  General Details Section -->\n        <!-- <h5> General Details</h5> -->\n        <div>\n\n        </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <div class=\"col-12\">\n          <div>\n           \n          </div>\n\n        </div>\n      </mat-card-actions>\n    </mat-card>\n  </form>"

/***/ }),

/***/ "./src/app/default-initiate/default-initiate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultInitiateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefaultInitiateComponent = (function () {
    function DefaultInitiateComponent(_formBuilder, _router) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.isLinear = false;
        this.foods = [
            { value: 'steak-0', viewValue: 'India' },
            { value: 'pizza-1', viewValue: 'USA' },
            { value: 'tacos-2', viewValue: 'New York' }
        ];
        this.screenHint = "This is a one stop shop providing immigration assistance\n   for all your business related travel and onsite assignments.\n   This is a consolidated app, wherein you can create, edit and\n   view visa/work permit application for self/reportee; upload supporting\n    documents;check status and lifecycle of application; dashboard with overall reports\n    on LCA initiation, availability and approval;pending task actions and a\n    repository for immigration related information on any source destination or visa\n     type as news and information.\n     You can also take a print out of your application which is just a click away.";
    }
    DefaultInitiateComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            assignmentLoaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            assignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            wiproDivision: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            sourceCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            destCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            visaType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            assignmentAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    DefaultInitiateComponent.prototype.navToLca = function () {
        this._router.navigate(['/WT_GIMS_E/immigriant/lca']);
    };
    DefaultInitiateComponent.prototype.recieveProjectDetails = function ($event) {
        this.projectDetails = $event;
        console.log('this meessage', this.projectDetails);
    };
    return DefaultInitiateComponent;
}());
DefaultInitiateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gims-app-screen',
        template: __webpack_require__("./src/app/default-initiate/default-initiate.component.html"),
        styles: [__webpack_require__("./src/app/default-initiate/default-initiate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DefaultInitiateComponent);

var _a, _b;
//# sourceMappingURL=default-initiate.component.js.map

/***/ }),

/***/ "./src/app/general-details/general-details.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\n    position: fixed;\n    top: 50%;\n    left: 50%; \n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); \n    width:100%;\n   }\n   .mat-input-wrapper{ width:400px !important; }\n   .twin-select div:first-child {\n    padding-left: 0px; float: left;\n   }\n   .twin-select div:last-child {\n        padding-right: 0px; float: left\n    }\n   "

/***/ }),

/***/ "./src/app/general-details/general-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <form [formGroup]=\"generalForm\">\n    <div class=\"req-field\">\n      <mat-form-field>\n        <mat-select placeholder=\"Assignment Location\" formControlName=\"assignmentLoaction\">\n          <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\n            {{ country.viewValue }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"req-field\">\n      <mat-form-field>\n        <mat-select placeholder=\"Assignment For\" formControlName=\"assignmentFor\">\n          <mat-option *ngFor=\"let assignment of assignmentFor\" [value]=\"assignment.value\">\n            {{ assignment.viewValue }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"req-field\">\n      <mat-form-field>\n        <mat-select placeholder=\"Wipro Divisions\" formControlName=\"wiproDivision\">\n          <mat-option *ngFor=\"let division of divisions\" [value]=\"division.value\">\n            {{ division.viewValue }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-6 \">\n        <mat-form-field>\n          <mat-select placeholder=\"Source Country\" formControlName=\"sourceCountry\">\n            <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\n              {{ country.viewValue }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"col-sm-12 col-xs-12 col-md-6\">\n        <mat-form-field>\n          <mat-select placeholder=\"Destination country\" formControlName=\"destCountry\">\n            <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\n              {{ country.viewValue }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <div class=\"req-field\">\n      <mat-form-field>\n        <mat-select placeholder=\"Visa Sub Type\" formControlName=\"visaType\">\n  <mat-option *ngFor=\"let visa of visaType\" [value]=\"visa.value\">\n            {{ visa.viewValue }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/general-details/general-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralDetailsComponent = (function () {
    function GeneralDetailsComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.countries = [
            { value: 'steak-0', viewValue: 'USA' },
            { value: 'pizza-1', viewValue: 'ZURICH' },
            { value: 'tacos-2', viewValue: 'CANADA' },
            { value: 'tacos-2', viewValue: 'Other Than Customer Location' }
        ];
        this.assignmentFor = [
            { value: 'steak-0', viewValue: 'Wipro Internal Assignment' },
            { value: 'pizza-1', viewValue: 'Wipro Onsite Assignment' },
            { value: 'tacos-2', viewValue: 'Wipro Dummy Assignment' }
        ];
        this.divisions = [
            { value: 'steak-0', viewValue: 'Wipro Technologies' },
            { value: 'pizza-1', viewValue: 'Wipro InfoTech' },
            { value: 'tacos-2', viewValue: 'Wipro Digital' }
        ];
        this.visaType = [
            { value: 'steak-0', viewValue: 'Work Permit Processing' },
            { value: 'pizza-1', viewValue: 'H1B1' },
            { value: 'tacos-2', viewValue: 'H1B2' }
        ];
    }
    GeneralDetailsComponent.prototype.ngOnInit = function () {
        this.generalForm = this._formBuilder.group({
            assignmentLoaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            assignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            wiproDivision: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            sourceCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            destCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            visaType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            managerEmpId: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            AssignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            ApprovingAutority: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    };
    return GeneralDetailsComponent;
}());
GeneralDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-general-details',
        template: __webpack_require__("./src/app/general-details/general-details.component.html"),
        styles: [__webpack_require__("./src/app/general-details/general-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
], GeneralDetailsComponent);

var _a;
//# sourceMappingURL=general-details.component.js.map

/***/ }),

/***/ "./src/app/gims-app-immigrant/gims-app-immigrant.component.css":
/***/ (function(module, exports) {

module.exports = ".page-title {\n    padding : 10px 0;\n    font-weight: bold\n}\n"

/***/ }),

/***/ "./src/app/gims-app-immigrant/gims-app-immigrant.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container stepper\">\n  <div class=\"col-md-2\">\n    <h4 class=\"color-blue page-title\">Initiate a New Request</h4>\n  </div>\n<!-- Grid row -->\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\" >\n      <mat-step [stepControl]=\"firstFormGroup\" disableRipple>\n          <ng-template matStepLabel>Initiate</ng-template>\n        <router-outlet></router-outlet>\n      </mat-step>\n      <mat-step [stepControl]=\"secondFormGroup\">\n        <form [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>Online Non-Immigrant Visa</ng-template>\n          <div>\n            <app-work-progress></app-work-progress>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Questionnire</ng-template>\n        <div>\n         <app-work-progress></app-work-progress>\n        </div>\n        <div #test></div>\n      </mat-step>\n      <mat-step>\n          <ng-template matStepLabel>Forms</ng-template>\n          <div>\n              <app-work-progress></app-work-progress>\n          </div>\n          <div #test></div>\n        </mat-step>\n        <mat-step>\n            <ng-template matStepLabel>Documents Upload</ng-template>\n            <div>\n             <app-work-progress></app-work-progress>\n            </div>\n            <div #test></div>\n          </mat-step>\n          <mat-step>\n              <ng-template matStepLabel>Application Life Cycle</ng-template>\n              <div>\n                <app-work-progress></app-work-progress>\n              </div>\n              <div #test></div>\n            </mat-step>\n    </mat-horizontal-stepper>\n  </section>"

/***/ }),

/***/ "./src/app/gims-app-immigrant/gims-app-immigrant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimsAppImmigrantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animation__ = __webpack_require__("./src/app/router-animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GimsAppImmigrantComponent = (function () {
    function GimsAppImmigrantComponent(_formBuilder, _router) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.urlStatus = false;
        this.isLinear = false;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.screenHint = "Lorem ipsum dolor sit amet\n  consectetur adipisicing elit. Deserunt voluptate dolores saepe non, cumque ad officia alias distinctio\n  quibusdam laboriosam nihil quos eius minus aut tempore repellendus rem tempora ducimus! Lorem ipsum\n  dolor sit amet consectetur adipisicing elit. Ut sunt iusto ipsum nobis commodi similique fuga earum?\n  Alias iste dolorum, aspernatur impedit esse aliquid. Recusandae nihil exercitationem deleniti mollitia\n  veniam";
    }
    GimsAppImmigrantComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            assignmentLoaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            assignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            wiproDivision: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            sourceCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            destCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            visaType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            assignmentAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    return GimsAppImmigrantComponent;
}());
GimsAppImmigrantComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gims-app-screens',
        template: __webpack_require__("./src/app/gims-app-immigrant/gims-app-immigrant.component.html"),
        styles: [__webpack_require__("./src/app/gims-app-immigrant/gims-app-immigrant.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animation__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], GimsAppImmigrantComponent);

var _a, _b;
//# sourceMappingURL=gims-app-immigrant.component.js.map

/***/ }),

/***/ "./src/app/gims-app-screen/gims-app-screen.component.css":
/***/ (function(module, exports) {

module.exports = ".page-title {\n    padding : 10px 0;\n    font-weight: bold\n}\n"

/***/ }),

/***/ "./src/app/gims-app-screen/gims-app-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container stepper\">\n    <div class=\"col-md-2\">\n      <h4 class=\"color-blue page-title\">Initiate a New Request</h4>\n    </div>\n<!-- Grid row -->\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\" >\n      <mat-step [stepControl]=\"firstFormGroup\" disableRipple>\n          <ng-template matStepLabel>Initiate</ng-template>\n        <router-outlet></router-outlet>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Questionnire</ng-template>\n        <div>\n         <app-work-progress></app-work-progress>\n        </div>\n        <div #test></div>\n      </mat-step>\n      <mat-step>\n          <ng-template matStepLabel>Forms</ng-template>\n          <div>\n              <app-work-progress></app-work-progress>\n          </div>\n          <div #test></div>\n        </mat-step>\n        <mat-step>\n            <ng-template matStepLabel>Documents Upload</ng-template>\n            <div>\n             <app-work-progress></app-work-progress>\n            </div>\n            <div #test></div>\n          </mat-step>\n          <mat-step>\n              <ng-template matStepLabel>Application Life Cycle</ng-template>\n              <div>\n                <app-work-progress></app-work-progress>\n              </div>\n              <div #test></div>\n            </mat-step>\n    </mat-horizontal-stepper>\n  </section>"

/***/ }),

/***/ "./src/app/gims-app-screen/gims-app-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimsAppScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animation__ = __webpack_require__("./src/app/router-animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GimsAppScreenComponent = (function () {
    function GimsAppScreenComponent(_formBuilder, _router) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.isLinear = false;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.screenHint = "Lorem ipsum dolor sit amet\n  consectetur adipisicing elit. Deserunt voluptate dolores saepe non, cumque ad officia alias distinctio\n  quibusdam laboriosam nihil quos eius minus aut tempore repellendus rem tempora ducimus! Lorem ipsum\n  dolor sit amet consectetur adipisicing elit. Ut sunt iusto ipsum nobis commodi similique fuga earum?\n  Alias iste dolorum, aspernatur impedit esse aliquid. Recusandae nihil exercitationem deleniti mollitia\n  veniam";
    }
    GimsAppScreenComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            assignmentLoaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            assignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            wiproDivision: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            sourceCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            destCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            visaType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            assignmentAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    return GimsAppScreenComponent;
}());
GimsAppScreenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gims-app-screens',
        template: __webpack_require__("./src/app/gims-app-screen/gims-app-screen.component.html"),
        styles: [__webpack_require__("./src/app/gims-app-screen/gims-app-screen.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animation__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], GimsAppScreenComponent);

var _a, _b;
//# sourceMappingURL=gims-app-screen.component.js.map

/***/ }),

/***/ "./src/app/gims-home/gims-home.component.css":
/***/ (function(module, exports) {

module.exports = "section{\n    height: inherit;    \n}\nsection, aside {\n    -webkit-transition: width 1.25s;\n    transition: width 1.25s;\n}\narticle, menuActive > article  {\n    -webkit-transition: padding 1.25s;\n    transition: padding 1.25s;\n}\naside {\n    background-color: #ffda29;\n    padding: 0;\n    height: 100%;\n    overflow: hidden;\n    float: left;\n    position: fixed;\n    width: 60px;\n    z-index: 99;\n}\narticle { width: 100%; min-height: 1000px; overflow: hidden; float: left; \n    background-color: #f0f0f0; -webkit-box-shadow: 0px 0px 7px -2px #333 inset; box-shadow: 0px 0px 7px -2px #333 inset;\n    padding-left: 60px;\n}\n.menuActive > article {\n    padding-left: 200px;  \n}\n.menuActive > aside {\n    width: 200px;    \n}\napp-appbar {\n    -webkit-box-shadow: 0px 0px 7px -2px #000;\n            box-shadow: 0px 0px 7px -2px #000;\n    display: block;\n    margin-bottom: 30px\n}\napp-gims-app-screen {\n    padding: 20px 0;\n    display: block;\n    min-height: 800px;\n}\n"

/***/ }),

/***/ "./src/app/gims-home/gims-home.component.html":
/***/ (function(module, exports) {

module.exports = "<section [ngClass]=\"{'menuActive': menuStatus}\">\n  <aside>\n    <app-side-nav-menu (slideMenu)=\"menuSlide($event)\"></app-side-nav-menu>\n  </aside>\n  <article>\n    <app-appbar></app-appbar>\n    <router-outlet></router-outlet>\n  </article>\n</section>"

/***/ }),

/***/ "./src/app/gims-home/gims-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimsHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GimsHomeComponent = (function () {
    function GimsHomeComponent() {
        this.title = 'GIMS';
        this.menuStatus = false;
    }
    GimsHomeComponent.prototype.ngOnInit = function () {
    };
    GimsHomeComponent.prototype.menuSlide = function (event) {
        this.menuStatus = event;
    };
    return GimsHomeComponent;
}());
GimsHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gims-home',
        template: __webpack_require__("./src/app/gims-home/gims-home.component.html"),
        styles: [__webpack_require__("./src/app/gims-home/gims-home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GimsHomeComponent);

//# sourceMappingURL=gims-home.component.js.map

/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = "mat-card.mat-card {\n    border-radius: 4px !important;\n    \n}\n.chat-box{\n    background-color: rgb(15, 15, 140);\n}\n.origins{\n    background: url('origin.6ee9ca9d8cf9b5b9a29b.png') no-repeat center top; \n    /* background-image: url('../../assets/home/origin.png') no-repeat center top ; */\n    /* max-width: 100%;\n    max-height: 100%;\n    width: 100%; */\n    /* object-fit: contain; */\n    /* background-repeat: no-repeat;\n     */\n     background-size: cover;\n     height: 100% !important;\n}\n.min-card{\n    /* width: 200px !important; */\n    height: 300px !important;\n}\n.faqs{\nwidth: 240px;\n}\n.chat-box{\n    width: 240px;\n    color: white;\n    font-size: 20px !important;\n}\n.news{\n    width: 240px;\n}\n.btn-lg{\n  width: 90%;\n}"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section style=\"width:99%; margin-bottom:20px; padding-left:10px;\">\n<div class=\"row\">\n <div class=\"col-md-9\">\n   <!-- Work flow Screen starts -->\n  <mat-card class=\"example-card  wrok-flow\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title><h5>Sunita,Welcome to GIMS</h5></mat-card-title>\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n      <button mat-raised-button color=\"primary\" (click)=\"navigate()\"> Initiate New Request</button>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n </div>\n <!-- Workflow sccreen Ends -->\n <!-- Chat Box starts -->\n <div class=\"col-md-3 min-card\">\n  <mat-card class=\"chat-box\">\n      <mat-card-content>\n          <h1 style=\"text-align:center;margin-top:20%\"><i class=\"material-icons\" style=\"font-size:70px\">\n              help_outline\n              </i> \n            </h1>\n            <h6 style=\"font-size:20px; margin:20px;\">Not Sure How to <span class=\"margin-left:10px\">Get Started? </span></h6>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-raised-button color=\"primary\" class=\"btn-lg\" style=\"margin:10px;\">Let's chat</button>\n          </mat-card-actions>\n    \n  </mat-card>\n</div>\n</div>\n</section>\n<!-- Bootom pane starts -->\n<section style=\"width:99%;padding-left:10px;\">\n<div class=\"row\">\n  <!-- Origins section starts -->\n<div class=\"col-md-6\" style=\"height:300px;\">\n  <mat-card class=\"origins\">\n  </mat-card>\n</div>\n<!-- Faqs section starts here -->\n<div class=\"col-md-3 min-card\">\n  <mat-card class=\"example-card faqs\">\n    <img mat-card-image src=\"../../assets/home/faq.png\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n        <mat-list>\n            <h3 mat-subheader>FAQ</h3>\n            <mat-divider></mat-divider>            \n            <mat-list-item *ngFor=\"let faq of faqs\">\n              <p mat-line> {{faq}} </p>\n            </mat-list-item>\n          </mat-list>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n\n</div>\n<!-- News section starts here -->\n<div class=\"col-md-3 min-card\">\n  <mat-card class=\"example-card news\">\n    <img mat-card-image src=\"../../assets/home/news.png\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n<!--  News section ends here -->\n</div>\n</section>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = (function () {
    function HomePageComponent(_router) {
        this._router = _router;
        this.faqs = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.faqs = ["How to Start Applying for a Visa?", "How to Start Applying for a Visa?", "How to Start Applying for a Visa?"];
    };
    HomePageComponent.prototype.navigate = function () {
        this._router.navigate(['WT_GIMS_E/initiate_req']);
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("./src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__("./src/app/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HomePageComponent);

var _a;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "./src/app/initiate-request/initiate-request.component.css":
/***/ (function(module, exports) {

module.exports = ".card-header-1{\n    display: inline !important;\n}\n.pi-button{\n    display: inline !important;\n    float: right !important;\n}\n.info-ro{\n    border-bottom: 1px solid #dcdcdc !important;\n    margin-left: 1px;\n    width:90% !important;\n}\n.row.info-ro .col-md-6 .example-full-width .mat-input-wrapper.mat-form-field-wrapper {\n    padding-bottom: 0 !important;\n}\n.immi-profile{\n    margin-left:3% !important;\n    margin-top: 2% !important;\n}\n.stepper-div{\n    margin-top:2% !important;\n}\n.card-header-section{\n    margin-bottom: 10px !important;\n}"

/***/ }),

/***/ "./src/app/initiate-request/initiate-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container immi-profile\">\n<div class=\"row\">\n<div class=\"col-md-3 stepper-div\">\n<h4 class=\"color-blue page-title\">Immigiration Profile</h4>\n<div>\n    <mat-vertical-stepper #stepper>\n        <ng-template matStepperIcon=\"edit\">\n            <mat-icon>done</mat-icon>\n          </ng-template>\n        <mat-step label=\"step 1\">\n          step 1 content\n          <div>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n          </mat-step>\n        <mat-step label=\"step 2\">\n          step 2 content\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n          \n          </mat-step>\n        <mat-step label=\"step 3\">\n          step 3 content\n          <div>\n            <button mat-button (click)=\"stepper.reset()\">Reset</button>\n          </div>\n          </mat-step>\n        \n      </mat-vertical-stepper>\n  </div>\n</div>\n\n<div class=\"col-md-9\">\n\n  \n<mat-card class=\"example-card\">\n<div class=\"card-header-section\">\n  <h4 class=\"card-header-1 color-blue\"> Personal Info</h4>\n  <button mat-button color=\"primary\" class=\"pi-button\"> Edit Personal Info</button>\n  <br>\n</div>\n<mat-card-content>\n  <div class=\"row card-content\">\n    <!-- Right Pane -->\n    <div class=\"col-md-6 right-pane\">\n      <div class=\"row\">\n        <div class=\"row info-ro\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Overall Experience\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"22 years 9 months\">\n          </mat-form-field>\n        </div>\n      </div>\n        <div class=\"row info-ro\">\n          <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Qualification\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"BE\">\n          </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row info-ro\">        \n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Total year of Experience\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"16\">\n          </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row info-ro\">        \n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Current Work Location\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Carlifonia\">\n          </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row info-ro\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Nationality\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Indian\">\n          </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row info-ro\">        \n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Additional Citizenship\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"--\">\n          </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row info-ro\">        \n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Date of Birth\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"21 August 1974\">\n          </mat-form-field>\n        </div>\n        </div>\n        <!-- <div class=\"col-md-12\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Current residential Address\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-12\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"B72106 Blue ridge, Pune Maharashrta-411057\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-12\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Current Residential Address\">\n          </mat-form-field>\n        </div> -->\n        <!-- House no -->\n        <!-- <div class=\"col-md-12\">\n          <mat-form-field>\n            <mat-select placeholder=\"Visa Sub Type\">\n              <mat-option *ngFor=\"let hs of hsarray\" [value]=\"hs\">\n                {{hs}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div> -->\n        <!-- <div class=\"col-md-12\">\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"State\" value=\"Sushi\">\n                </mat-form-field>              \n        </div>\n        <div class=\"col-md-12\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Country\" value=\"Sushi\">\n              </mat-form-field>              \n      </div> -->\n      </div>\n    </div>\n    <!-- Right pane Ends -->\n    <!-- Left pane Starts -->\n    <div class=\"col-md-6 left-pane\">\n      <div class=\"row\">\n          <div class=\"row info-ro\">        \n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"IT experience(months)\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"24\">\n          </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row info-ro\">                \n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Qualification Specialization\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Computer Science\">\n          </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row info-ro\">        \n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Contact No\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"+1-8860809910\">\n          </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row info-ro\">        \n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Current Work Address\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"PDC2\">\n          </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row info-ro\">        \n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Citizenship\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Indian\">\n          </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row info-ro\">        \n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Maritial Status\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6 left-col\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Married\">\n          </mat-form-field>\n        </div>\n        </div>       \n            <!-- <div class=\"col-md-12\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput disabled value=\"\">\n                </mat-form-field>\n              </div>\n            \n        <div class=\"col-md-12\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"Permanent Address\">\n          </mat-form-field>\n        </div>\n       \n        <div class=\"col-md-12\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"B-194 sec-44 Noida , G.B Nagar-201301\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-12\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput disabled value=\"\">          \n              </mat-form-field>              \n      </div>\n        <div class=\"col-md-12\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"City\" value=\"Sushi\">\n              </mat-form-field>              \n      </div>\n      <div class=\"col-md-12\">\n          <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Zip Code\" value=\"Sushi\">\n            </mat-form-field>              \n    </div>\n    <div class=\"col-md-12\">\n        <mat-form-field class=\"example-full-width\">\n            <input matInput disabled value=\"\">          \n          </mat-form-field>              \n  </div> -->\n      </div>\n    </div>\n    <!-- Left pane ends -->\n  </div>\n  <div class=\"row\">\n  <div class=\"col-md-6\">\n   <div class=\"row\">\n      <mat-form-field class=\"example-full-width\">\n          <input matInput disabled value=\"Current residential Address\">\n        </mat-form-field>\n   </div>\n    \n  </div>\n      <div class=\"row\">\n          <mat-form-field class=\"example-full-width\">\n              <input matInput disabled value=\"Current residential Address\">\n            </mat-form-field>\n       </div>\n  </div>\n</mat-card-content>\n<mat-card-actions>\n  <button mat-button>Cancel</button>\n  <button mat-raised-button color=\"primary\">Submit</button>\n</mat-card-actions>\n</mat-card>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/initiate-request/initiate-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitiateRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InitiateRequestComponent = (function () {
    function InitiateRequestComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.hsarray = ["ABC", "BDC"];
    }
    InitiateRequestComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    return InitiateRequestComponent;
}());
InitiateRequestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-initiate-request',
        template: __webpack_require__("./src/app/initiate-request/initiate-request.component.html"),
        styles: [__webpack_require__("./src/app/initiate-request/initiate-request.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
], InitiateRequestComponent);

var _a;
//# sourceMappingURL=initiate-request.component.js.map

/***/ }),

/***/ "./src/app/lca-initiation/lca-initiation.component.css":
/***/ (function(module, exports) {

module.exports = ".tip-container{\n    background-color:#f6f6f6;\n    border-radius: 2px 2px 2px 2px;   \n    padding:20px 20px;     \n}\n.div-tips>h6{\ncolor: #6dc24b;\nmargin-bottom: 5px;\n}\n.tip-container>div,.tip-container>span{\n  margin-bottom:2px;\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.proj-details{\n  margin-top:10px;\n  margin-bottom: 20px;\n\n}\n.left-align-div{\n margin-left:-43px;\n}\nhr{\n  margin-top:3px;\n  padding: 3px;\n}\n.visa{\n  margin-left:-29px;\n}\n.form-header{\n   font-weight: 800;\n}\n.activeBg > div {\n  float: left;\n}\n.activeBg {\n  background-color: #e8f8ff;\n  margin-bottom: 20px;\n  padding-top: 20px;\n  float: left;\n}\n.cs-detail{\n  margin-bottom:20px;\n}\n.icon-input{\n  width: 90%;\n}"

/***/ }),

/***/ "./src/app/lca-initiation/lca-initiation.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container row\">\n<form [formGroup]=\"firstFormGroup\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <!--  Card Header starts  -->\n    </mat-card-header>\n    <mat-card-content>\n      <section class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 header\">\n            <h6>Initiation</h6>\n            <p>Internal Assignment</p>\n          </div>\n          <div class=\"col-md-6 text-right\">\n            <button mat-button color=\"primary\" (click)=\"back()\">Back</button>\n          </div>\n        </div>\n        <span layout=\"row\">\n          <hr flex/>\n        </span>\n        <div class=\"row\">\n          <div class=\"col-8\">\n            <!-- General Information  Section-->\n            <div class=\"container\">\n              <div class=\"row\">\n                    <mat-radio-group class=\"example-radio-group col-md-12 row\" [(ngModel)]=\"reqType\" name=\"reqType\" [ngModelOptions]=\"{standalone: true}\">\n                        <mat-radio-button class=\"example-radio-button col-md-6\" (change)=\"setreqType(season)\" *ngFor=\"let season of radioItems; let i = index\" [value]=\"season\" [attr.checked]=\"i === 0 ? true : null\">\n                          {{season.name}}\n                        </mat-radio-button>\n                      </mat-radio-group>\n              </div>\n              <div>\n                <mat-form-field>\n                  <mat-select placeholder=\"Work Permit/ Visa Type\" formControlName=\"visaType\">\n                    <mat-option *ngFor=\"let food of permitType\" [value]=\"food.value\">\n                      {{ food.viewValue }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"row key-field\" *ngIf=\"firstFormGroup.value.visaType==1\">\n                <div class=\"col-md-12\" style=\"margin-bottom:20px\">\n                  <h6>Base Application Details</h6>\n                </div>\n                <div class=\"col-md-12\" *ngFor=\"let app of applications\">\n                  <div class=\"activeBg\">\n                    <div class=\"col-md-1 col-sm-12 col-xs-12\">\n                      <span>\n                        <mat-radio-group>\n                          <mat-radio-button value=\"1\" [checked]=\"app.selected\"></mat-radio-button>\n                        </mat-radio-group>\n                      </span>\n                    </div>\n                    <div class=\"col-md-3 col-sm-12\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"# Application\" class=\"read-only-content\" disabled value=\"{{app.reqNo}}\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Destination Country\" class=\"read-only-content\" disabled value=\"{{app.desCountry}}\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Request Sub Type\" class=\"read-only-content\" disabled value=\"H1B Cap Exepmt\">\n                      </mat-form-field>\n                    </div>\n                  </div>  \n                </div>\n              </div>\n              <div class=\"\">\n                <h6>General Details</h6>\n              </div>\n              <div class=\"\">\n                <app-general-details></app-general-details>\n              </div>\n              <div class=\"row\" *ngIf=\"firstFormGroup.value.visaType==1\">\n                <div class=\"req-field col-md-6 col-sm-12 col-xs-12\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Typeof E/T/A Application\" formControlName=\"state\">\n                      <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n                        {{ state }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"req-field col-md-6 col-sm-12 col-xs-12\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Processing Type\" formControlName=\"city\">\n                      <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\n                        {{ city }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"firstFormGroup.value.visaType!=1\">\n                <div class=\"req-field col-md-6 col-sm-12 col-xs-12\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"State\" formControlName=\"state\">\n                      <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n                        {{ state }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"req-field col-md-6 col-sm-12 col-xs-12\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"City\" formControlName=\"city\">\n                      <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\n                        {{ city }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <!-- Customer Information Section -->\n              <div class=\"cs-details\" *ngIf=\"firstFormGroup.value.visaType!=1\">\n                <h6 style=\"margin-bottom:10px\">Customer Details</h6>\n              </div>\n\n              <!-- Post Project selection area -->\n              <div class=\"row\" *ngIf=\"firstFormGroup.value.visaType!=1\">\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Customer Name\" class=\"read-only-content\" disabled value=\"Credit Suisse\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Project Name\" class=\"read-only-content\" disabled value=\"Myriad\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"firstFormGroup.value.visaType!=1\">\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Approving Authority\" class=\"read-only-content\" disabled value=\"Anand Desai\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Address(Assignment)\" formControlName=\"assignmentAddress\">\n                      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                        {{ food.viewValue }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\" \" *ngIf=\"firstFormGroup.value.visaType!=1\">\n                <h6>Other Details</h6>\n              </div>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"firstFormGroup.value.visaType!=1\">\n                <div class=\"other-details\" *ngIf=\"showSearch() && firstFormGroup.value.visaType!=1\">\n                  <mat-form-field>\n                    <input type=\"text\" class=\"icon-input\" placeholder=\"Employee No\" aria-label=\"Number\" matInput formControlName=\"search\">\n                    <span (click)=\"getPerson()\"><mat-icon style=\"cursor:pointer\"> search</mat-icon></span>\n                  </mat-form-field>\n                </div>\n                <div class=\"row\" *ngIf=\"searchResult===true\">\n                  <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Employee Number\" class=\"read-only-content\" disabled value=\"{{resultObject.id}}\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Employee Name\" class=\"read-only-content\" disabled value=\"{{resultObject.name}}\">\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"searchResult===true\">\n                  <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Approving Authority\" class=\"read-only-content\" disabled value=\"{{resultObject.manager}}\">\n                    </mat-form-field>\n                  </div>\n                </div>\n              <div class=\"row\" *ngIf=\"firstFormGroup.value.visaType===0 || searchResult===true\">\n                <div class=\"req-field col-md-6 col-sm-12 col-xs-12\">\n                  <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker1\" formControlName=\"startDate\" placeholder=\"Start date (mm/dd/yyyy)\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                  </mat-form-field>\n                </div>\n                <div class=\"req-field col-md-6 col-sm-6 col-xs-12\">\n                  <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"End date (mm/dd/yyyy)\" formControlName=\"endDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker2></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"!showSearch() && firstFormGroup.value.visaType!=1 || searchResult===true\">\n                <div class=\"req-field col-md-6 col-sm-6 col-xs-6 \">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Employee Role\" formControlName=\"imgRole\">\n                      <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n                        {{ state }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"req-field col-md-6 col-sm-6 col-xs-6\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Immigiration  Role\" formControlName=\"assignmentAddress\">\n                      <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n                        {{ state }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <!-- Since show/hide logic was not clear hence updated its logic here so that it can be updated later -->\n              <div class=\"row\" *ngIf=\"!showSearch() && firstFormGroup.value.visaType!=1 || searchResult===true\">\n                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"IMS Eligiblity\" class=\"read-only-content\" disabled value=\"IMS Eligiblity\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Competency Eligiblity\" class=\"read-only-content\" disabled value=\"Competency Eligiblity\">\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- Tips and Disclaimer section -->\n          <div class=\"col-4\">\n            <!-- on Desktop and large screens -->\n            <div class=\"container tip-container d-none d-sm-block\">\n              <div class=\"div-tips hidden-xs row\">\n                <h6>Disclaimer</h6>\n              </div>\n              <div class=\"row hidden-xs\">\n                <p>\n                  {{screenHint}}\n                </p>\n              </div>\n            </div>\n            <div class=\"container d-block d-sm-none\">\n              <mat-icon aria-label=\"Example icon-button\" (click)=\"tooltip.show()\">info</mat-icon>\n              <span matTooltip=\"{{screenHint}}\" #tooltip=\"matTooltip\" [matTooltipPosition]=\"below\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8 col-sm-12 col-xs-12\">\n            <button mat-raised-button class=\"float-left color-default\" (click)=\"back()\">Back</button>\n          </div>\n          <div class=\"col-md-4 col-sm-12 col-xs-12 float-right\">\n            <button mat-raised-button class=\"mat-reset\">Reset</button>\n            <button mat-raised-button class=\"float-right\" color=\"primary\">Submit</button>\n          </div>\n        </div>\n      </section>\n      <!--  General Details Section -->\n      <!-- <h5> General Details</h5> -->\n      <div>\n\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <div class=\"col-12\">\n        <div>\n\n        </div>\n\n      </div>\n    </mat-card-actions>\n  </mat-card>\n</form>\n</section>\n"

/***/ }),

/***/ "./src/app/lca-initiation/lca-initiation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LcaInitiationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LcaInitiationComponent = (function () {
    function LcaInitiationComponent(_formBuilder, _location, _router) {
        this._formBuilder = _formBuilder;
        this._location = _location;
        this._router = _router;
        this.isLinear = false;
        this.radioItems = [{ code: 'one', name: 'For Self' }, { code: 'two', name: 'For Others' }];
        this.rule = { mode: true };
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.permitType = [{ value: '0', viewValue: 'Work Permit Processing' },
            { value: '1', viewValue: 'Extension/Amendment/Transfer' },
            { value: '2', viewValue: 'Others' }];
        this.states = ['Boston', 'Oston', 'Toston'];
        this.cities = ['New York', 'California', 'Los Angles'];
        this.screenHint = "Lorem ipsum dolor sit amet\n  consectetur adipisicing elit. Deserunt voluptate dolores saepe non, cumque ad officia alias distinctio\n  quibusdam laboriosam nihil quos eius minus aut tempore repellendus rem tempora ducimus! Lorem ipsum\n  dolor sit amet consectetur adipisicing elit. Ut sunt iusto ipsum nobis commodi similique fuga earum?\n  Alias iste dolorum, aspernatur impedit esse aliquid. Recusandae nihil exercitationem deleniti mollitia\n  veniam";
        this.applications = [{ selected: 'true', reqNo: 'IN-329296', desCountry: 'USA' },
            { selected: 'true', reqNo: 'IN-329298', desCountry: 'USA' }];
        this.searchResult = false;
    }
    LcaInitiationComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            assignmentLoaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            assignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            wiproDivision: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            sourceCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            destCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            visaType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            assignmentAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            imgRole: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            search: ['']
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    LcaInitiationComponent.prototype.back = function () {
        this._router.navigate(['/WT_GIMS_E']);
    };
    LcaInitiationComponent.prototype.setreqType = function (value) {
        console.log('req is ', value);
        this.req = value.code;
    };
    LcaInitiationComponent.prototype.showSearch = function () {
        if (this.req === 'two') {
            return true;
        }
    };
    LcaInitiationComponent.prototype.getPerson = function () {
        this.resultObject = {
            name: 'Anis Alam',
            id: 329296,
            manager: 'Varun Singh'
        };
        this.searchResult = true;
    };
    return LcaInitiationComponent;
}());
LcaInitiationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-lca-initiation',
        template: __webpack_require__("./src/app/lca-initiation/lca-initiation.component.html"),
        styles: [__webpack_require__("./src/app/lca-initiation/lca-initiation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LcaInitiationComponent);

var _a, _b, _c;
//# sourceMappingURL=lca-initiation.component.js.map

/***/ }),

/***/ "./src/app/project-picker/project-picker.component.css":
/***/ (function(module, exports) {

module.exports = ".done > button{\n    margin-right: 29px;\n    margin-bottom: 5px;\n}\n\n.customer-detail-head{\n    padding-left: 20px\n}\n\n.icon-input{\n    width:80% !important;\n}\n\n.btnsss{\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/project-picker/project-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<article>\n<mat-accordion>\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <mat-icon> work</mat-icon>\n          <span class=\"color-primary customer-detail-head\">Choose Customer/Project</span>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <form [formGroup]=\"projectForm\" (submit)=\"saveAssignment(projectForm)\">\n      <div class=\"col-md-12\">\n                <mat-form-field>\n                  <input type=\"text\" class=\"icon-input\" placeholder=\"Manager Emp. No/Email Id\" aria-label=\"Number\" matInput formControlName=\"manager\" [matAutocomplete]=\"auto\">\n                  <span (click)=\"getPerson()\"><mat-icon style=\"cursor:pointer\"> search</mat-icon></span>\n                  <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let manager of managerArray\" [value]=\"manager.value\">\n                      {{ manager.value }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n          </div>\n          <div class=\"col-md-12\">\n              <mat-form-field> \n                  <mat-select placeholder=\"Assignment For\" formControlName=\"AssignmentFor\">\n                    <mat-option *ngFor=\"let assignment of assignments\" [value]=\"assignment\">\n                      {{ assignment.projName }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-12\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Customer Name\" class=\"read-only-content\" disabled value=\"{{projectForm.value.AssignmentFor.client}}\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-12\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Approving Authority\" class=\"read-only-content\" disabled value=\"{{projectForm.value.manager}}\">\n                </mat-form-field>\n                  </div>\n                 <div class=\"col-md-12 done\">\n                    <button mat-raised-button color=\"primary\" class=\"float-right\">OK</button>      \n                 </div> \n                 </form>\n    </mat-expansion-panel>\n  </mat-accordion>\n</article>"

/***/ }),

/***/ "./src/app/project-picker/project-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectPickerComponent = (function () {
    function ProjectPickerComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.assignments = [
            { client: 'Suman Sikandar', projName: 'Dummy_Wipro_internal_Projects' },
            { client: 'Sundar Marikani', projName: 'Credit Suisse' },
            { client: 'MArck Taco', projName: 'Telstra' }
        ];
        this.managerArray = [
            { empid: '329123', value: 'Karthikeyan' },
            { empid: '329124', value: 'Suman Sikandar' },
            { empid: '329122', value: 'Alex Reynolds' },
            { empid: '329128', value: 'Varun Singh' },
            { empid: '329120', value: 'Basav Raj' },
        ];
        this.step = 1;
        this.options = ['One', 'Two', 'Three'];
        this.projectDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ProjectPickerComponent.prototype.ngOnInit = function () {
        this.projectForm = this._formBuilder.group({
            manager: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            AssignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            ApprovingAutority: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    };
    ProjectPickerComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ProjectPickerComponent.prototype.saveAssignment = function (formdata) {
        console.log('form data', formdata.value);
        this.projectDetails.emit(formdata.value);
        this.step = 1;
    };
    ProjectPickerComponent.prototype.getPerson = function () {
        console.log('hello world');
    };
    return ProjectPickerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
    __metadata("design:type", Object)
], ProjectPickerComponent.prototype, "projectDetails", void 0);
ProjectPickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-picker',
        template: __webpack_require__("./src/app/project-picker/project-picker.component.html"),
        styles: [__webpack_require__("./src/app/project-picker/project-picker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
], ProjectPickerComponent);

var _a;
//# sourceMappingURL=project-picker.component.js.map

/***/ }),

/***/ "./src/app/router-animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");

function routerTransition() {
    return slideToLeft();
}
function slideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'relative', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'relative', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'relative', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'relative', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'relative', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'relative', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'relative', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'relative', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router-animation.js.map

/***/ }),

/***/ "./src/app/shared-services/gims-shared-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimsSharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GimsSharedService = (function () {
    function GimsSharedService() {
    }
    GimsSharedService.prototype.saveGeneralDetails = function (generalDetails) {
        this.generalDetails = generalDetails;
    };
    GimsSharedService.prototype.getGeneralDetails = function () {
        return this.generalDetails;
    };
    return GimsSharedService;
}());
GimsSharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GimsSharedService);

//# sourceMappingURL=gims-shared-service.service.js.map

/***/ }),

/***/ "./src/app/side-nav-menu/side-nav-menu.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-nav li i {\n    padding: 10px 20px 10px 17px;\n    font-size: 23px\n}\n.navbar-nav {\n    width: 300px;\n}\n.menu {\n    cursor: pointer;\n}\n.navbar-nav li span{\n    top: -5px;\n    position: relative;\n}\nli.nav-item.active {\n    color: #fff;\n    background-color: #0e3570;\n}\nli.nav-item.menu {\n    padding: 15px 0;\n}\nli.nav-item {\n    padding: 10px 0;\n}\n.nav-item{\n    cursor: pointer;\n}\n.nav-item:hover:not(:first-child){\n    background-color: #0e3570;\ncolor: white;    \n}\nli>a{\n    text-decoration: none;\n}\nli>a:hover{\ncolor:white;\n}\n"

/***/ }),

/***/ "./src/app/side-nav-menu/side-nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav\">\n\t<li class=\"nav-item menu\"><i class=\"icon-menu\" (click)='openMenu(menuFlag)'></i><span>Wipro GIMS</span></li>\n\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/WT_GIMS_E/home']\"><i class=\"icon-home\"></i><span>Home</span></a></li>\n\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/WT_GIMS_E']\"><i class=\"icon-circle_add\"></i><span>Initiate</span></a></li>\n\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-application\"></i><span>My Applications</span></a></li>\n\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-task\"></i><span>My Tasks</span></a></li>\n\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-knowledge\"></i><span>Knowledge Base</span></a></li>\n</ul>"

/***/ }),

/***/ "./src/app/side-nav-menu/side-nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavMenuComponent = (function () {
    function SideNavMenuComponent() {
        this.menuFlag = false;
        this.slideMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SideNavMenuComponent.prototype.ngOnInit = function () { };
    SideNavMenuComponent.prototype.openMenu = function (status) {
        this.menuFlag = !status;
        this.slideMenu.emit(this.menuFlag);
    };
    return SideNavMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], SideNavMenuComponent.prototype, "slideMenu", void 0);
SideNavMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-side-nav-menu',
        template: __webpack_require__("./src/app/side-nav-menu/side-nav-menu.component.html"),
        styles: [__webpack_require__("./src/app/side-nav-menu/side-nav-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SideNavMenuComponent);

var _a;
//# sourceMappingURL=side-nav-menu.component.js.map

/***/ }),

/***/ "./src/app/work-progress/work-progress.component.css":
/***/ (function(module, exports) {

module.exports = "article>h1{\n    margin:100px;\n    padding-bottom: 25px;\n}"

/***/ }),

/***/ "./src/app/work-progress/work-progress.component.html":
/***/ (function(module, exports) {

module.exports = "  <article>\n      <h1>Coming  soon..!</h1>\n  </article>  "

/***/ }),

/***/ "./src/app/work-progress/work-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animation__ = __webpack_require__("./src/app/router-animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkProgressComponent = (function () {
    function WorkProgressComponent() {
    }
    WorkProgressComponent.prototype.ngOnInit = function () {
    };
    return WorkProgressComponent;
}());
WorkProgressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-work-progress',
        template: __webpack_require__("./src/app/work-progress/work-progress.component.html"),
        styles: [__webpack_require__("./src/app/work-progress/work-progress.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animation__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], WorkProgressComponent);

//# sourceMappingURL=work-progress.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map