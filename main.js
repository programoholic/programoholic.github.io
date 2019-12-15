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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-bar/app-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/app-bar/app-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item{\n    text-decoration: none;\n    color: #fff;\n   \n    margin-left: 20px;\n}\n.nav-item i{\n\n}\n.nav-item:hover{\n    color: #48acc0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTs7SUFFWixrQkFBa0I7Q0FDckI7QUFDRDs7Q0FFQztBQUNEO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVte1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgIFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm5hdi1pdGVtIGl7XG5cbn1cbi5uYXYtaXRlbTpob3ZlcntcbiAgICBjb2xvcjogIzQ4YWNjMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-bar/app-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/app-bar/app-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <div>\n          <a class=\"nav-item\" href=\"https://www.linkedin.com/in/programoholic/\" target=\"_blank\">  <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i> </a>\n          <a class=\"nav-item\" href=\"https://stackoverflow.com/users/8175467/programoholic\" target=\"_blank\">  <i class=\"fa fa-stack-overflow\" aria-hidden=\"true\"></i></a>\n          <a class=\"nav-item\" href=\"https://stackoverflow.com/users/8175467/programoholic\" target=\"_blank\">   <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n          <a class=\"nav-item\" href=\"https://medium.com/@programoholic\" target=\"_blank\">   <i class=\"fa fa-rss\" aria-hidden=\"true\"></i></a>\n\n          \n    </div>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/app-bar/app-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/app-bar/app-bar.component.ts ***!
  \**********************************************/
/*! exports provided: AppBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarComponent", function() { return AppBarComponent; });
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

var AppBarComponent = /** @class */ (function () {
    function AppBarComponent() {
    }
    AppBarComponent.prototype.ngOnInit = function () {
    };
    AppBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar',
            template: __webpack_require__(/*! ./app-bar.component.html */ "./src/app/app-bar/app-bar.component.html"),
            styles: [__webpack_require__(/*! ./app-bar.component.css */ "./src/app/app-bar/app-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppBarComponent);
    return AppBarComponent;
}());



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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'HOME', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: '', redirectTo: 'HOME', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'HOME', pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container{\n    margin:0;\n    padding:0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main-container container-fluid\">\n        <app-bar></app-bar>\n        <router-outlet></router-outlet>\n        <app-footer> </app-footer>\n</section>\n"

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
        this.title = 'programoholic';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _core_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var _app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-bar/app-bar.component */ "./src/app/app-bar/app-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
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
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_6__["AppBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _core_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/material/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/material/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n    height: 40px;\n}\n.footer-text{\n    text-align: center !important;\n    font-size: 1.5rem;\n    font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5mb290ZXItdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div color=\"primary\" class=\"footer mat-primary mat-toolbar\">\n  <div class=\"footer-text\">  Made with <mat-icon style=\"color:red; position: absolute; padding-top:5px;\">favorite</mat-icon> <span style=\"margin-left:25px\"> . Inspired by 3rdwavemedia  </span>  </div>  \n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about{ \n}\n.profile-pic{\n    height: 240px;\n    width: 240px;\n    border-radius: 5px;\n}\n.content-s{\n    padding: 35px;    \n    min-height:336px;\n    /* width:98%; */\n    color:#fff;\n    background-color: #46abbf;\n}\n.lead{\n    font-size: 2.25rem;\n    font-weight: 300;  \n    margin-bottom: 10px;\n}\n.about{\n    \n    \n}\n.sub-lead{\n    font-size: 1.75rem;\n    font-weight: 400;\n    line-height: 1.4;\n}\n.t-skill{\n    box-shadow: none !important;\n    min-height: 300px;\n    /* min-width: 320px; */\n    width:90%;\n    margin-right: 5px;\n    margin-bottom: 50px;\n\n}\n.head-icon{\n    text-align: center;\n    margin-top: -40px !important;\n}\n.h-ico{\n    height: 30px;\n}\n.skill-section{\n    margin-top: 50px;\n    margin-right: 5%;\n    margin-left:5%;\n}\n.head-text{\n    text-align: center;\n    padding-top: 20px;\n}\n.skill-li-icon{\n    height: 18px !important;\n    width: 18px !important;\n    font-size: 18px !important;\n    font-weight: bolder !important;\n    margin-right: 15px;\n}\n.skill-card{\n   \n}\n/* .head-title{\n    text-align: center;\n} */\n.skill-summ{\n    width: 50%;\n    display: inline-block !important;\n    font-size: 1.5rem;\n    margin: 2rem;\n}\n.skill-area{\n    text-align: center !important;\n}\n.secondry-text{\n    color: #58677c !important;\n}\n.skill{\n    padding-top: 0px !important;\n    padding-bottom: 0px !important;\n    margin-top: -8px;\n    margin-bottom: -15px;\n}\n.client-sec{\n    min-height: 300px;\n    box-shadow: none !important;\n}\n.company{\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7OztDQUdDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsNkJBQTZCO0NBQ2hDO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixtQkFBbUI7Q0FDdEI7QUFDRDs7Q0FFQztBQUNEOztJQUVJO0FBQ0o7SUFDSSxXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0NBQy9CO0FBQ0Q7SUFDSSxzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dHsgXG59XG4ucHJvZmlsZS1waWN7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRlbnQtc3tcbiAgICBwYWRkaW5nOiAzNXB4OyAgICBcbiAgICBtaW4taGVpZ2h0OjMzNnB4O1xuICAgIC8qIHdpZHRoOjk4JTsgKi9cbiAgICBjb2xvcjojZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NmFiYmY7XG59XG5cbi5sZWFke1xuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwOyAgXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5hYm91dHtcbiAgICBcbiAgICBcbn1cbi5zdWItbGVhZHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xufVxuLnQtc2tpbGx7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIC8qIG1pbi13aWR0aDogMzIwcHg7ICovXG4gICAgd2lkdGg6OTAlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbn1cbi5oZWFkLWljb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC00MHB4ICFpbXBvcnRhbnQ7XG59XG4uaC1pY297XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuLnNraWxsLXNlY3Rpb257XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OjUlO1xufVxuLmhlYWQtdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uc2tpbGwtbGktaWNvbntcbiAgICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uc2tpbGwtY2FyZHtcbiAgIFxufVxuLyogLmhlYWQtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAqL1xuLnNraWxsLXN1bW17XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW46IDJyZW07XG59XG4uc2tpbGwtYXJlYXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5zZWNvbmRyeS10ZXh0e1xuICAgIGNvbG9yOiAjNTg2NzdjICFpbXBvcnRhbnQ7XG59XG4uc2tpbGx7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xufVxuLmNsaWVudC1zZWN7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNvbXBhbnl7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about container-fluid\">\n  <div class=\"row content-s\">\n      <div class=\"col-md-1\"></div>    \n    <div class=\" col-md-3 col-sm-12 avatar-section\">\n      <div class=\"avatar\">\n        <img src=\"./assets/image.png\" class=\"profile-pic\" alt=\"profile photo\">\n      </div>\n    </div>\n    <div class=\"col-md-7 col-sm-12\">\n      <div class=\"lead\"> Hello, My name is</div>\n      <h2 class=\"\"> Anis Alam </h2>\n      <div class=\"lead sub-lead\">\n        I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web\n        development on my blog and regularly speak at various web conferences and meetups. Want to know how I may help your\n        project? Check out my project case studies and resume.\n      </div>\n      <div>\n        <button mat-raised-button color=\"primary\"> Hire Me</button>\n      </div>\n    </div>\n    <div class=\"col-md-1\"></div>    \n  </div>\n  <div class=\"row\">\n    <!-- <div class=\"col-md-3\"> </div> -->\n    <div clas=\"col-md-12 skill-area\" style=\"text-align:center\"> \n       <div class=\"head-title\">\n         <h3> Skills Overview </h3> \n       </div>\n       <div class=\"skill-summ secondry-text\">\n          I have more than 4 years' experience building rich web applications for clients all over the world. \n          Below is a quick overview of my main technical skill sets and tools I use.\n          Want to find out more about my experience? \n          <a mat-button color=\"primary\" routerLink=\".\"> Check out my online resume . </a>\n       </div>\n    </div>\n    <!-- <div class=\"col-md-3\"> </div>     -->\n  </div>\n  <div class=\"row skill-section\">\n    <div class=\"col-md-4 skill-card\">\n      <mat-card class=\"t-skill\">\n        <div class=\"head-icon\">\n          <button mat-fab color=\"accent\">\n            <img src=\"./assets/frontend-icon.svg\" alt=\"front-end pic\" class=\"h-ico\" />\n          </button>\n        </div>\n        <div class=\"main-area\">\n                <h4 class=\"head-text\"> Frontend </h4>\n                <mat-list role=\"list\" class=\"skill-list\">\n                        <mat-list-item role=\"listitem\" *ngFor=\"let skill of frontEndSkillArr\" class=\"secondry-text skill\">\n                            <mat-icon color=\"accent\" class=\"skill-li-icon\">check</mat-icon>\n                            {{skill}}\n                        </mat-list-item>\n                </mat-list>\n            </div>\n      </mat-card>\n    </div>\n    <div class=\"col-md-4 skill-card\">\n      <mat-card class=\"t-skill\">\n        <div class=\"head-icon\">\n          <button mat-fab color=\"accent\" class=\"\">\n            <img src=\"./assets/back-icon.svg\" alt=\"front-end pic\" class=\"h-ico\" />\n          </button>\n        </div>\n        <div class=\"main-area\">\n            <h4 class=\"head-text\"> Backend </h4>\n            <mat-list role=\"list\" class=\"skill-list\">\n                    <mat-list-item role=\"listitem\" *ngFor=\"let skill of backEndSkillArr\" class=\"secondry-text skill\">\n                        <mat-icon color=\"accent\" class=\"skill-li-icon\">check</mat-icon>\n                        {{skill}}\n                    </mat-list-item>\n            </mat-list>\n        </div>\n      </mat-card>\n    </div>\n    <div class=\"col-md-4 skill-card\">\n      <mat-card class=\"t-skill\">\n        <div class=\"head-icon\">\n          <button mat-fab color=\"accent\">\n            <img src=\"./assets/other-skill.svg\" alt=\"front-end pic\" class=\"h-ico\" />\n          </button>\n        </div>\n        <div class=\"main-area\">\n                <h4 class=\"head-text\"> Others </h4>\n                <mat-list role=\"list\" class=\"skill-list\">\n                        <mat-list-item role=\"listitem\" *ngFor=\"let skill of otherEndSkillArr\" class=\"secondry-text skill\">\n                            <mat-icon color=\"accent\" class=\"skill-li-icon\">check</mat-icon>\n                            {{skill}}\n                        </mat-list-item>\n                </mat-list>\n            </div>\n      </mat-card>\n    </div>\n  </div>\n  <div class=\"row\">\n     <mat-card class=\"col-md-12 client-sec\">\n        <h3 class=\"head-text\"> Clients I have worked with </h3>         \n      <div style=\"margin-left:20%\">\n         <!-- <div class=\"company\">\n             <button mat-button class=\"\">\n                <img src=\"./assets/cs-logo.png\" height=\"100px\" width=\"200px\"/>\n             </button>  \n         </div>\n         <div class=\"company\">\n            <button mat-button class=\"\">\n               <img src=\"./assets/db-logo.png\" height=\"100px\" width=\"200px\"/>\n            </button>  \n        </div> -->\n        <div class=\"company\">\n            <img src=\"./assets/cs-logo.png\" height=\"170px\" width=\"300px\"/> \n        </div>\n        <div class=\"company\">\n            <img src=\"./assets/db-logo.png\" height=\"170px\" width=\"300px\"/> \n        </div>\n        <div class=\"company\">\n            <img src=\"./assets/sr-logo.png\" height=\"50px\" width=\"300px\"/> \n        </div>\n      </div>        \n     </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.frontEndSkillArr = ["Angular/ React/ Redux / JQuery",
            "JavaScript / TypeScript / ", " Bootstrap / Flex Layout",
            " HTML / LESS / SASS / SCSS",
            "WebPack / Gulp.js "
        ];
        this.backEndSkillArr = ["Node.js / Express.js ", " Apche Cassandra / MongoDB",
            "Apache kafka / Socket.io / Redis", "Java / Spring-boot REST",
            "Oauth / Mongoose",
        ];
        this.otherEndSkillArr = [
            "Unit Testing / Jasmine / Karma  ",
            "Chai/ Mocha ",
            "DevOps / CI-CD / Teamcity",
            "Jenkins / JIRA ", " Git / SVN / BitBucket"
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/programoholic/workspace/programoholic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map