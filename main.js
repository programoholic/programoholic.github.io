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

/***/ "./src/app/add-template-dialog/add-template-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/add-template-dialog/add-template-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n    width: 100%;\n  }\n\n  .add-action button{\n    margin: 5px;\n    width: 120px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXRlbXBsYXRlLWRpYWxvZy9hZGQtdGVtcGxhdGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0dBQ2I7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osYUFBYTtHQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRkLXRlbXBsYXRlLWRpYWxvZy9hZGQtdGVtcGxhdGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hZGQtYWN0aW9uIGJ1dHRvbntcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/add-template-dialog/add-template-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/add-template-dialog/add-template-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title class=\"color-blue\">\n  <i class=\"material-icons\">add</i> Add Template\n</h1>\n<div mat-dialog-content> \n  <mat-horizontal-stepper [linear]=\"true\" #stepper>\n      <mat-step [stepControl]=\"addTemplateMetaInfoForm\">\n        <form [formGroup]=\"addTemplateMetaInfoForm\">\n          <ng-template matStepLabel>Meta information</ng-template>\n          <div class=\"row\">\n          <div class=\"col-md-12\">\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput name=\"name\"  placeholder=\"Enter Template Name...\"  formControlName=\"name\">\n                </mat-form-field>\n          </div>\n          <div class=\"col-md-12\">\n              <mat-form-field class=\"example-full-width\">\n                  <textarea matInput \n                            placeholder=\"Enter Temlpate Description...\" \n                            formControlName=\"description\"\n                            matTextareaAutosize \n                            matAutosizeMinRows=5 \n                            matAutosizeMaxRows=10\n                            ></textarea>\n                </mat-form-field>\n              </div>\n            </div>\n          <div>\n            <button mat-flat-button matStepperNext [disabled]=\"!addTemplateMetaInfoForm.valid\">\n              Next\n              <i class=\"material-icons\">keyboard_arrow_right</i>\n            </button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"addTemplateScriptForm\">\n        <form [formGroup]=\"addTemplateScriptForm\">\n          <ng-template matStepLabel>\n            Template Script\n          </ng-template>\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <mat-form-field class=\"example-full-width\">\n                  <textarea matInput \n                            placeholder=\"Enter Temlpate Script\" \n                            formControlName=\"templateScript\"\n                            matTextareaAutosize \n                            matAutosizeMinRows=10 \n                            matAutosizeMaxRows=15\n                            ></textarea>\n                </mat-form-field>\n          </div>\n          <div class=\"col-md-1\">\n                 OR\n          </div>\n          <div class=\"col-md-3\">\n             <app-fileupload [accept]=\"txt\" (fileData)='parseTemplateScript($event)'></app-fileupload>\n           </div>\n          </div>\n         <div class=\"row\">\n          <button mat-button matStepperPrevious>\n              <i class=\"material-icons\">keyboard_arrow_left</i>\n            Back\n          </button>\n          <button mat-button matStepperNext>\n            Next\n            <i class=\"material-icons\">keyboard_arrow_right</i>\n          </button>\n         </div>\n            \n         \n        </form>\n      </mat-step>\n      <mat-step>\n          <form [formGroup]=\"addTemplateFileForm\">\n              <ng-template matStepLabel>\n                Template Script\n              </ng-template>\n              <div class=\"row\">\n                <div class=\"col-md-7\">\n                  <mat-form-field class=\"example-full-width\">\n                      <textarea matInput \n                                placeholder=\"Enter Temlpate Script\" \n                                formControlName=\"templateFile\"\n                                matTextareaAutosize \n                                matAutosizeMinRows=10 \n                                matAutosizeMaxRows=15\n                                ></textarea>\n                    </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                     OR\n              </div>\n              <div class=\"col-md-3\">\n                 <app-fileupload [accept]=\"txt\" (fileData)='parseTemplateFile($event)'></app-fileupload>\n               </div>\n              </div>\n             <div class=\"row\">\n              <button mat-button matStepperPrevious>\n                  <i class=\"material-icons\">keyboard_arrow_left</i>\n                Back\n              </button>\n              <button mat-button (click)=\"stepper.reset()\">Reset</button>\n             </div>\n            </form>\n      </mat-step>\n    </mat-horizontal-stepper>\n</div>\n<div mat-dialog-actions class=\"add-action\" align=\"end\">\n  <button mat-flat-button [mat-dialog-close]=\"\" color=\"warn\" (click)=\"onNoClick()\">\n  <i class=\"material-icons\">close</i>\n    Close\n  </button>\n  <button mat-flat-button color=\"accent\" cdkFocusInitial>\n      <i class=\"material-icons\">verified_user</i>  \n    Validate\n  </button>\n  <button mat-flat-button color=\"primary\" \n  [disabled] = \"!(addTemplateFileForm.valid && addTemplateMetaInfoForm.valid && addTemplateScriptForm.valid)\"\n  >\n      <i class=\"material-icons\">check</i>  \n    Save\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/add-template-dialog/add-template-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/add-template-dialog/add-template-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddTemplateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTemplateDialogComponent", function() { return AddTemplateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTemplateDialogComponent = /** @class */ (function () {
    function AddTemplateDialogComponent(_fb) {
        this._fb = _fb;
        this.createForm();
    }
    AddTemplateDialogComponent.prototype.createForm = function () {
        this.addTemplateMetaInfoForm = this._fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
        });
        this.addTemplateScriptForm = this._fb.group({
            templateScript: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.addTemplateFileForm = this._fb.group({
            templateFile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    AddTemplateDialogComponent.prototype.ngOnInit = function () {
    };
    AddTemplateDialogComponent.prototype.parseTemplateScript = function (e) {
        var _this = this;
        console.log('inside add', e);
        var input = e;
        var reader = new FileReader();
        reader.onload = function () {
            // this 'text' is the content of the file
            var text = reader.result;
            _this.addTemplateScriptForm.patchValue({
                templateScript: text
            });
            console.log('content is', text);
        };
        reader.readAsText(input[0]);
    };
    AddTemplateDialogComponent.prototype.parseTemplateFile = function (e) {
        console.log('inside add', e);
        var input = e;
        var reader = new FileReader();
        //   reader.onload = () => {
        //     // this 'text' is the content of the file
        //     var text = reader.result;
        //     this.addTemplateScriptForm.patchValue({
        //       templateScript: text
        //     });
        //     console.log('content is',text);
        // }
        // reader.readAsText(input[0]);
    };
    AddTemplateDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-template-dialog',
            template: __webpack_require__(/*! ./add-template-dialog.component.html */ "./src/app/add-template-dialog/add-template-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-template-dialog.component.css */ "./src/app/add-template-dialog/add-template-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddTemplateDialogComponent);
    return AddTemplateDialogComponent;
}());



/***/ }),

/***/ "./src/app/app-bar/app-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/app-bar/app-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-widgets li {\n    padding-left: 20px;\n}\n.avtar{\n    width: 22px;\n    border-radius: 50%\n}\n.side-widgets {\n    position: relative;\n    top: 5px;\n}\n.side-widgets li a {\n    font-size: 22px;\n}\n.mat-sidenav-container {\n    background: rgba(172, 32, 32, 0.08);\n  }\n.bg-light {\n    background-color: #fff !important;\n    border-radius: 0px;\n}\n.blank-grow {\n    flex: 1 1 auto;\n  }\n.icon-logout{\n    margin-top: -5px;\n  }\n.icon{\n    border-radius: 50%;\n    /* padding: 10px; */\n    border: 1px solid #0e3570;\n    border-style: dashed;\n    /* font-size: 340px; */\n    padding: 8px;\n    margin-right: 12px;\n    margin-top: -10px;\n  }\n.logo-text{\n      position: absolute;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0NBQ1o7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksb0NBQW9DO0dBQ3JDO0FBQ0Q7SUFDRSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0NBQ3RCO0FBQ0M7SUFDRSxlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7R0FDbkI7QUFDRDtNQUNJLG1CQUFtQjtHQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtd2lkZ2V0cyBsaSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmF2dGFye1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJVxufVxuLnNpZGUtd2lkZ2V0cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xufVxuLnNpZGUtd2lkZ2V0cyBsaSBhIHtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTcyLCAzMiwgMzIsIDAuMDgpO1xuICB9XG4gIC5iZy1saWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbiAgLmJsYW5rLWdyb3cge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gIC5pY29uLWxvZ291dHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICB9XG4gIC5pY29ue1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZTM1NzA7XG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gICAgLyogZm9udC1zaXplOiAzNDBweDsgKi9cbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICB9XG4gIC5sb2dvLXRleHR7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app-bar/app-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/app-bar/app-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-light bg-light\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand color-blue\" [routerLink]=\"['/WT_GIMS_E']\"> \n                <i class=\"color-blue icon material-icons\">flash_on</i>            \n               <span class=\"logo-text\"> TemplateX </span>\n            </a>\n        </div>\n        <ul class=\"nav navbar-nav navbar-right color-blue side-widgets\">\n            <!-- <li><a href=\"#\"><i class=\"icon-info color-blue\"></i></a></li>  -->\n            <li><a class=\"icon-logout color-blue\" (click)=\"login()\" title=\"Logout\"></a></li>\n        </ul>\n      </div>\n    </nav>"

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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
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
    function AppBarComponent(dialog) {
        this.dialog = dialog;
    }
    AppBarComponent.prototype.ngOnInit = function () {
    };
    AppBarComponent.prototype.login = function () {
        var dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], {
            width: '550px',
            // height:'300px'
            hasBackdrop: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    AppBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-bar',
            template: __webpack_require__(/*! ./app-bar.component.html */ "./src/app/app-bar/app-bar.component.html"),
            styles: [__webpack_require__(/*! ./app-bar.component.css */ "./src/app/app-bar/app-bar.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AppBarComponent);
    return AppBarComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"test\"> -->\n  <!-- <ag-grid-angular\n      #agGrid\n      style=\"width: 500px; height: 500px;\"\n      id=\"myGrid\"\n      class=\"ag-theme-balham\"\n      [columnDefs]=\"columnDefs\"\n      [defaultColDef]=\"defaultColDef\"\n      [components]=\"components\"\n      [rowBuffer]=\"rowBuffer\"\n      [rowSelection]=\"rowSelection\"\n      [rowDeselection]=\"true\"\n      [rowModelType]=\"rowModelType\"\n      [paginationPageSize]=\"paginationPageSize\"\n      [cacheOverflowSize]=\"cacheOverflowSize\"\n      [maxConcurrentDatasourceRequests]=\"maxConcurrentDatasourceRequests\"\n      [infiniteInitialRowCount]=\"infiniteInitialRowCount\"\n      [maxBlocksInCache]=\"maxBlocksInCache\"\n      [rowData]=\"rowData\"\n      (gridReady)=\"onGridReady($event)\"\n    ></ag-grid-angular> -->\n<!-- </div> -->\n<!-- <ag-grid-angular\nstyle=\"width: 500px; height: 500px;\"\nid=\"myGrid\"\nclass=\"ag-theme-balham\"\n[columnDefs]=\"columnDefs\"\n[floatingFilter]=\"true\"\n[debug]=\"true\"\n[defaultColDef]=\"defaultColDef\"\n[rowSelection]=\"rowSelection\"\n[rowDeselection]=\"true\"\n[rowModelType]=\"rowModelType\"\n[paginationPageSize]=\"paginationPageSize\"\n[cacheOverflowSize]=\"cacheOverflowSize\"\n[maxConcurrentDatasourceRequests]=\"maxConcurrentDatasourceRequests\"\n[infiniteInitialRowCount]=\"infiniteInitialRowCount\"\n[maxBlocksInCache]=\"maxBlocksInCache\"\n[getRowNodeId]=\"getRowNodeId\"\n[rowData]=\"rowData\"\n(gridReady)=\"onGridReady($event)\"\n></ag-grid-angular> -->\n\n<!-- <ag-grid-angular\n      #agGrid\n      style=\"width: 1024px; height: 600px;\"\n      id=\"myGrid\"\n      class=\"ag-theme-balham\"\n      [columnDefs]=\"columnDefs\"\n      [debug]=\"true\"\n      [defaultColDef]=\"defaultColDef\"\n      [rowSelection]=\"rowSelection\"\n      [rowModelType]=\"rowModelType\"\n      [paginationPageSize]=\"paginationPageSize\"\n      [cacheOverflowSize]=\"cacheOverflowSize\"\n      [maxConcurrentDatasourceRequests]=\"maxConcurrentDatasourceRequests\"\n      [infiniteInitialRowCount]=\"infiniteInitialRowCount\"\n      [maxBlocksInCache]=\"maxBlocksInCache\"\n      [getRowNodeId]=\"getRowNodeId\"\n      [cacheBlockSize] = \"cacheBlockSize\"\n      [components]=\"components\"\n      [rowData]=\"rowData\"\n      (gridReady)=\"onGridReady($event)\"\n    ></ag-grid-angular> -->\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'TemplateX';
        this.columnDefs = [
            {
                headerName: "ID",
                width: 50,
                valueGetter: "node.id",
                cellRenderer: "loadingCellRenderer",
                sortable: false,
                suppressMenu: true,
                checkBoxSelection: true,
                headerCheckboxSelection: true
            },
            {
                headerName: "Athlete",
                field: "athlete",
                width: 150,
                filter: "agTextColumnFilter",
                filterParams: {
                    // filterOptions: ["equals", "lessThan", "greaterThan"],
                    filterOptions: ["equals", "contains", "startswith"],
                    suppressAndOrCondition: true
                }
            },
            {
                headerName: "Age",
                field: "age",
                width: 90,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                }
            },
            {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            },
            {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            }, {
                headerName: "Country",
                field: "country",
                width: 120,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            },
            {
                headerName: "Year",
                field: "year",
                width: 90,
                filter: "agTextColumnFilter",
                filterParams: {
                    filterOptions: ["contains", "equals", "startsWith", "endsWith"],
                    suppressAndOrCondition: true,
                    applyButton: true,
                    clearButton: true
                }
            },
            {
                headerName: "Date",
                field: "date",
                width: 110
            },
            {
                headerName: "Sport",
                field: "sport",
                width: 110,
                suppressMenu: true
            },
            {
                headerName: "Gold",
                field: "gold",
                width: 100,
                suppressMenu: true
            },
            {
                headerName: "Silver",
                field: "silver",
                width: 100,
                suppressMenu: true
            },
            {
                headerName: "Bronze",
                field: "bronze",
                width: 100,
                suppressMenu: true
            },
            {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            },
            {
                headerName: "Total",
                field: "country",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "country",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "country",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            }, {
                headerName: "Total",
                field: "total",
                width: 100,
                suppressMenu: true
            },
        ];
        this.defaultColDef = {
            sortable: true,
            resizable: true
        };
        this.rowSelection = "multiple";
        this.rowModelType = "infinite";
        this.paginationPageSize = 1000;
        this.cacheOverflowSize = 5;
        this.cacheBlockSize = 1000;
        this.maxConcurrentDatasourceRequests = 2;
        this.infiniteInitialRowCount = 1;
        this.maxBlocksInCache = 5;
        this.getRowNodeId = function (item) {
            return item.id;
        };
        this.components = {
            loadingCellRenderer: function (params) {
                if (params.value !== undefined) {
                    return params.value;
                }
                else {
                    return '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/images/loading.gif">';
                }
            }
        };
    }
    AppComponent.prototype.onGridReady = function (params) {
        var _this = this;
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.http
            .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
            .subscribe(function (data) {
            data.forEach(function (data, index) {
                data.id = "R" + (index + 1);
            });
            var dataSource = {
                rowCount: null,
                self: _this,
                getRows: function (params) {
                    var self = _this;
                    console.log("asking for " + params.startRow + " to " + params.endRow);
                    setTimeout(function () {
                        var _this = this;
                        var dataAfterSortingAndFiltering = sortAndFilter(data, params.sortModel, params.filterModel);
                        var rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);
                        var lastRow = -1;
                        debugger;
                        if (dataAfterSortingAndFiltering.length <= params.endRow) {
                            lastRow = dataAfterSortingAndFiltering.length;
                        }
                        var getDataFromServer = function () {
                            // the 'this' pointer is referring to the window obj, why?
                            if (_this.activeEffect == "fade") { }
                            dataSource.self.http
                                .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
                                .subscribe(function (data) {
                                data.forEach(function (data, index) {
                                    data.id = "R" + (index + 1);
                                });
                                var rowsThisPage = data.slice(params.startRow, params.endRow);
                                params.successCallback(rowsThisPage, lastRow);
                            });
                        };
                        if (rowsThisPage.length === 0) {
                            getDataFromServer.apply(this, []);
                        }
                        else {
                            params.successCallback(rowsThisPage, lastRow);
                        }
                    }, 3000);
                }
            };
            params.api.setDatasource(dataSource);
        });
    };
    // sortAndFilter(data,sortModel,ilterModel){
    //    console.log('data is ',data,' sort modal is ',sortModel);
    // }
    AppComponent.prototype.onGridReadys = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.http
            .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
            .subscribe(function (data) {
            var dataSource = {
                rowCount: null,
                getRows: function (params) {
                    console.log("asking for " + params.startRow + " to " + params.endRow);
                    setTimeout(function () {
                        var rowsThisPage = data.slice(params.startRow, params.endRow);
                        var lastRow = -1;
                        if (data.length <= params.endRow) {
                            lastRow = data.length;
                        }
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                }
            };
            params.api.setDatasource(dataSource);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _core_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/app-routing.module */ "./src/app/core/app-routing.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _side_nav_menu_side_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./side-nav-menu/side-nav-menu.component */ "./src/app/side-nav-menu/side-nav-menu.component.ts");
/* harmony import */ var _app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-bar/app-bar.component */ "./src/app/app-bar/app-bar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _template_management_template_management_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./template-management/template-management.component */ "./src/app/template-management/template-management.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _add_template_dialog_add_template_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-template-dialog/add-template-dialog.component */ "./src/app/add-template-dialog/add-template-dialog.component.ts");
/* harmony import */ var _widget_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widget/fileupload/fileupload.component */ "./src/app/widget/fileupload/fileupload.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                _side_nav_menu_side_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__["SideNavMenuComponent"],
                _app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_11__["AppBarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _template_management_template_management_component__WEBPACK_IMPORTED_MODULE_14__["TemplateManagementComponent"],
                _add_template_dialog_add_template_dialog_component__WEBPACK_IMPORTED_MODULE_16__["AddTemplateDialogComponent"],
                _widget_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_17__["FileuploadComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_18__["LandingPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _add_template_dialog_add_template_dialog_component__WEBPACK_IMPORTED_MODULE_16__["AddTemplateDialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/app-routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _template_management_template_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template-management/template-management.component */ "./src/app/template-management/template-management.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// const routesNames = RoutesConfig.routesNames;
var routes = [
    //   {path: routesNames.home, component: HomePageComponent, pathMatch: 'full'},
    //   {path: routesNames.heroes.basePath, loadChildren: () => import('./modules/heroes/heroes.module').then(m => m.HeroesModule)},
    //   {path: routesNames.error404, component: Error404PageComponent},
    //   {path: 'en', redirectTo: ''}, // because english language is the default one
    //   // otherwise redirect to 404
    //   {path: '**', redirectTo: RoutesConfig.routes.error404}
    { path: 'HOME', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"],
        children: [
            { path: 'CS_MANAGE_TEMPLATE_E', component: _template_management_template_management_component__WEBPACK_IMPORTED_MODULE_3__["TemplateManagementComponent"] },
            { path: 'CS_LANDING_PAGE_E', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
            { path: '', redirectTo: 'CS_LANDING_PAGE_E', pathMatch: 'full' },
        ]
    },
    { path: '', redirectTo: 'HOME', pathMatch: 'full' },
    { path: '**', redirectTo: 'HOME', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    initialNavigation: 'enabled',
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                    useHash: true
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\n    height: inherit;    \n}\nsection, aside {\n    transition: width 1.25s;\n}\narticle, menuActive > article  {\n    transition: padding 1.25s;\n}\naside {\n    background-color: #ffda29;\n    padding: 0;\n    height: 100%;\n    overflow: hidden;\n    float: left;\n    position: fixed;\n    width: 60px;\n    z-index: 99;\n}\narticle { width: 100%; min-height: 1000px; overflow: hidden; float: left; \n    background-color: #f0f0f0; box-shadow: 0px 0px 7px -2px #333 inset;\n    padding-left: 60px;\n}\n.menuActive > article {\n    padding-left: 200px;  \n}\n.menuActive > aside {\n    width: 200px;    \n}\napp-appbar {\n    box-shadow: 0px 0px 7px -2px #000;\n    display: block;\n    margin-bottom: 30px\n}\napp-gims-app-screen {\n    padding: 20px 0;\n    display: block;\n    min-height: 800px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0NBQ2Y7QUFDRCxVQUFVLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO0lBQ3JFLDBCQUEwQixDQUFDLHdDQUF3QztJQUNuRSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XG4gICAgaGVpZ2h0OiBpbmhlcml0OyAgICBcbn1cbnNlY3Rpb24sIGFzaWRlIHtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAxLjI1cztcbn1cbmFydGljbGUsIG1lbnVBY3RpdmUgPiBhcnRpY2xlICB7XG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAxLjI1cztcbn1cbmFzaWRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkYTI5O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHotaW5kZXg6IDk5O1xufVxuYXJ0aWNsZSB7IHdpZHRoOiAxMDAlOyBtaW4taGVpZ2h0OiAxMDAwcHg7IG92ZXJmbG93OiBoaWRkZW47IGZsb2F0OiBsZWZ0OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyBib3gtc2hhZG93OiAwcHggMHB4IDdweCAtMnB4ICMzMzMgaW5zZXQ7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuLm1lbnVBY3RpdmUgPiBhcnRpY2xlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwMHB4OyAgXG59XG4ubWVudUFjdGl2ZSA+IGFzaWRlIHtcbiAgICB3aWR0aDogMjAwcHg7ICAgIFxufVxuYXBwLWFwcGJhciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggLTJweCAjMDAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHhcbn1cbmFwcC1naW1zLWFwcC1zY3JlZW4ge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\" class=\"menu-bar\" [class.mat-elevation-z4]=\"true\">{{title}}</mat-toolbar> -->\n<section [ngClass]=\"{'menuActive': menuStatus}\">\n        <aside>\n          <app-side-nav-menu (slideMenu)=\"menuSlide($event)\"></app-side-nav-menu>\n        </aside>\n        <article>\n         <app-app-bar></app-app-bar>\n          <router-outlet></router-outlet>\n        </article>\n</section>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
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

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.menuStatus = false;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.menuSlide = function (event) {
        this.menuStatus = event;
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".template-container  {\n    width: 96%;\n    margin-left: 2%;\n   }\n   .template-card{\n       border-radius: 0px !important;\n       box-shadow: none !important;\n       padding-left: 0px !important;\n       padding-right: 0px !important;\n       min-height: 80vh;\n       /* background-color: rgb(181, 191, 212); */\n   }\n   .logo-img path {\n    fill:red;\n}\n   /* .logo{\n    background-color: red;\n    mask:url('/assets/home/App-Logo.svg') no-repeat center;\n} */\n   .content-card{\n    height: 200px;\n    margin: 10px;\n    border-radius: 0px;\n    box-shadow:none !important;\n    border: 1px solid;\n}\n   .content-icon{\n    height: 100px;\n    width:100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQjtHQUNEO09BQ0ksOEJBQThCO09BQzlCLDRCQUE0QjtPQUM1Qiw2QkFBNkI7T0FDN0IsOEJBQThCO09BQzlCLGlCQUFpQjtPQUNqQiwyQ0FBMkM7SUFDOUM7R0FFSjtJQUNJLFNBQVM7Q0FDWjtHQUNEOzs7SUFHSTtHQUVKO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGtCQUFrQjtDQUNyQjtHQUNEO0lBQ0ksY0FBYztJQUNkLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1wbGF0ZS1jb250YWluZXIgIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgIH1cbiAgIC50ZW1wbGF0ZS1jYXJke1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MSwgMTkxLCAyMTIpOyAqL1xuICAgfVxuXG4ubG9nby1pbWcgcGF0aCB7XG4gICAgZmlsbDpyZWQ7XG59XG4vKiAubG9nb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgbWFzazp1cmwoJy9hc3NldHMvaG9tZS9BcHAtTG9nby5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xufSAqL1xuXG4uY29udGVudC1jYXJke1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5jb250ZW50LWljb257XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDoxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"template-container\">\n  <mat-card class=\"template-card\">\n    <mat-card-header>\n      <!-- <mat-card-title class=\"color-blue\">Template Dashboard</mat-card-title> -->\n      <mat-card-subtitle></mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"conatiner-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"logo\">\n\n            </div>\n            <div class=\"icon\">\n  <i class=\"material-icons\">\n      flash_on\n                    </i>\n            </div>\n            <!-- <img src=\"./assets/home/App-Logo.svg\" class=\"logo-img\" width=\"600\" alt=\"\"/> -->\n          </div>\n          <div class=\"col-md-6\">\n            <h1>\n              Build a Better and Business and Faster\n            </h1>\n            <p>\n\n              You can try to adjust the hight of your texarea by applying matTextareaAutosize and assigning values for properties matAutosizeMinRows\n              and matAutosizeMaxRows\n            </p>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-top:20%\">\n            <div class=\"col-md-4\">\n             <mat-card class=\"content-card\">\n               <div>\n                   Download Template File\n                 </div>\n                 <div>\n                    <!-- <i class=\"material-icons\">\n                        arrow_downward\n                    </i> -->\n                    <img class=\"content-icon\" src=\"./assets/home/download.svg\">\n                 </div>\n             </mat-card>\n             \n            </div>\n            <div class=\"col-md-4\">\n                <mat-card class=\"content-card\">\n                    <div>\n                       Upload Data\n                      </div>\n                      <div>\n                          <!-- <i class=\"material-icons\">\n                              arrow_upward\n                          </i> -->\n                          <img class=\"content-icon\" src=\"./assets/home/upload.svg\">                          \n                          \n                       </div>\n                  </mat-card>\n            </div>\n            <div class=\"col-md-4\">\n                <mat-card class=\"content-card\">\n                    <div>\n                        Generate\n                      </div>\n                      <div>\n                          <!-- <i class=\"material-icons\">\n                              arrow_downward\n                          </i> -->\n                          <img class=\"content-icon\" src=\"./assets/home/hydro-power.svg\">                                                    \n                       </div>\n                  </mat-card>\n            </div>\n          </div>\n      </div>\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n    </mat-card-actions>\n  </mat-card>\n</section>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
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

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title class=\"color-blue\">\n  <i class=\"material-icons\" color=\"primary\">vpn_key</i> Login as Admin\n</h1>\n<div mat-dialog-content class=\"container-fluid\">\n    <form [formGroup]=\"loginForm\">\n        <mat-form-field class=\"col-md-12\">\n          <input type=\"email\" matInput placeholder=\"Enter email address...\"  formControlName=\"email\">\n          <i class=\"material-icons\" matSuffix>email</i> \n        </mat-form-field>\n        <mat-form-field class=\"col-md-12\">\n          <input type=\"password\" matInput placeholder=\"Enter password...\"  formControlName=\"password\">\n          <i class=\"material-icons\" matSuffix>vpn_key</i>         \n        </mat-form-field>\n      </form>\n \n</div>\n<div mat-dialog-actions class=\"pull-right\">\n  <button mat-button color=\"warn\" [mat-dialog-close]=\"true\"> <i class=\"material-icons\" matPrefix>close</i>Cancel</button>\n  <button mat-button color=\"primary\" cdkFocusInitial [disabled]=\"!loginForm.valid\" (click)=\"loginUser(loginForm.value)\" id=\"loginBtn\"> <i class=\"material-icons\" matPrefix>check</i>Login as Admin</button>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_fb, _loginSrvc) {
        this._fb = _fb;
        this._loginSrvc = _loginSrvc;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this._fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (values) {
        console.log('values are', values);
        this._loginSrvc.loginUserAsAdmin(values).subscribe(function (result) {
        }, function (error) {
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(_utilSrvc, _http) {
        this._utilSrvc = _utilSrvc;
        this._http = _http;
        this.secretKey = "ANIS_WASE_2015_BATCH_MAVERICK";
    }
    LoginService.prototype.loginUserAsAdmin = function (payload) {
        var url = "login/admin";
        debugger;
        var requestObj = this._utilSrvc.constructRequestObject(url, "POST", payload);
        // const encryptTag = this.encrypt('emailpwd'); 
        var encryptedPwd = this.encrypt('username:' + payload.email + '|p|password:' + payload.password);
        var headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'logToken': "" + encryptedPwd
        });
        //  headers.append(this.encrypt('password'),this.encrypt(payload.password));   
        payload = {
            username: 'A9En9YgcgnXmhYp5xJs' + Math.random() + 'GJUxjvuYOHa+01+E/tjDePM8=',
            password: '22U38LMwOaItDOEJIiR1' + Math.random() + 'CAHcrs9RQ4a+qL0/p0eyO4c='
        };
        requestObj.body = payload;
        requestObj.headers = headerss;
        console.log('headers are', requestObj.headers);
        return this._http.post(requestObj.url, requestObj.body, { headers: headerss });
    };
    LoginService.prototype.encrypt = function (value) {
        return crypto_js__WEBPACK_IMPORTED_MODULE_3__["AES"].encrypt(value, this.secretKey.trim()).toString();
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/side-nav-menu/side-nav-menu.component.css":
/*!***********************************************************!*\
  !*** ./src/app/side-nav-menu/side-nav-menu.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n    cursor: pointer;\n}\nli.nav-item.menu {\n    padding: 15px 0;\n}\n.navbar-nav {\n    width: 300px;\n}\n.nav-item>a{\n    text-decoration: none !important;\n    color: inherit !important;\n    padding-top: 5px !important;\n    padding-bottom: 5px !important;    \n}\n.nav-item>a:hover{\ncolor:white;\n}\n.nav-item{\n    cursor: pointer;\n}\n.navbar-nav li i {\n    padding: 10px 20px 10px 17px;\n    font-size: 23px\n}\n.navbar-nav li span{\n    top: -5px;\n    position: relative;\n}\nli.nav-item {\n    padding: 10px 0;\n}\n.side-menu .nav-item{\nwidth: 100%;\n}\nli.nav-item.active {\n    color: #fff;\n    background-color: #0e3570;\n}\n.nav-item:hover:not(:first-child),.nav-item a:hover{\n    background-color: #0e3570;\n    color: white;    \n}\n.nav-icon{\n    padding-left: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXYtbWVudS9zaWRlLW5hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksaUNBQWlDO0lBQ2pDLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsK0JBQStCO0NBQ2xDO0FBQ0Q7QUFDQSxZQUFZO0NBQ1g7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFVBQVU7SUFDVixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0FBQ0EsWUFBWTtDQUNYO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksNkJBQTZCO0NBQ2hDIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1uYXYtbWVudS9zaWRlLW5hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxubGkubmF2LWl0ZW0ubWVudSB7XG4gICAgcGFkZGluZzogMTVweCAwO1xufVxuLm5hdmJhci1uYXYge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbi5uYXYtaXRlbT5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDsgICAgXG59XG4ubmF2LWl0ZW0+YTpob3ZlcntcbmNvbG9yOndoaXRlO1xufVxuLm5hdi1pdGVte1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZiYXItbmF2IGxpIGkge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDE3cHg7XG4gICAgZm9udC1zaXplOiAyM3B4XG59XG4ubmF2YmFyLW5hdiBsaSBzcGFue1xuICAgIHRvcDogLTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5saS5uYXYtaXRlbSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xufVxuLnNpZGUtbWVudSAubmF2LWl0ZW17XG53aWR0aDogMTAwJTtcbn1cbmxpLm5hdi1pdGVtLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMzU3MDtcbn1cbi5uYXYtaXRlbTpob3Zlcjpub3QoOmZpcnN0LWNoaWxkKSwubmF2LWl0ZW0gYTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUzNTcwO1xuICAgIGNvbG9yOiB3aGl0ZTsgICAgXG59XG4ubmF2LWljb257XG4gICAgcGFkZGluZy1sZWZ0OiAycHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/side-nav-menu/side-nav-menu.component.html":
/*!************************************************************!*\
  !*** ./src/app/side-nav-menu/side-nav-menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav side-menu\">\n    <li class=\"nav-item menu\"><i class=\"icon-menu\" (click)='openMenu(menuFlag)'></i><span>TemplateX</span></li>\n    <li class=\"nav-item \" [routerLink]=\"['/HOME/CS_LANDING_PAGE_E']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-home nav-icon\"></i><span>Home</span></a></li>\n    <li class=\"nav-item \" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/WT_GIMS_E']\"><i class=\"icon-circle_add nav-icon\"></i><span>Initiate</span></a></li>\n    <li class=\"nav-item\" [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-application nav-icon\"></i><span>My Applications</span></a></li>\n    <li class=\"nav-item \" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-task nav-icon\"></i><span>My Tasks</span></a></li>\n    <li class=\"nav-item \" [routerLink]=\"['/HOME/CS_MANAGE_TEMPLATE_E']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-knowledge nav-icon\"></i><span>Template Managment</span></a></li>\n</ul>"

/***/ }),

/***/ "./src/app/side-nav-menu/side-nav-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/side-nav-menu/side-nav-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: SideNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavMenuComponent", function() { return SideNavMenuComponent; });
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

var SideNavMenuComponent = /** @class */ (function () {
    function SideNavMenuComponent() {
        this.menuFlag = false;
        this.slideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SideNavMenuComponent.prototype.ngOnInit = function () { };
    SideNavMenuComponent.prototype.openMenu = function (status) {
        this.menuFlag = !status;
        this.slideMenu.emit(this.menuFlag);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SideNavMenuComponent.prototype, "slideMenu", void 0);
    SideNavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav-menu',
            template: __webpack_require__(/*! ./side-nav-menu.component.html */ "./src/app/side-nav-menu/side-nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-nav-menu.component.css */ "./src/app/side-nav-menu/side-nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideNavMenuComponent);
    return SideNavMenuComponent;
}());



/***/ }),

/***/ "./src/app/template-management/template-management.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/template-management/template-management.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .template-container  {\n    width: 96%;\n    margin-left: 2%;\n   }\n   .template-card{\n       border-radius: 0px !important;\n       box-shadow: none !important;\n       padding-left: 0px !important;\n       padding-right: 0px !important;\n       \n   }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGUtbWFuYWdlbWVudC90ZW1wbGF0ZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCO0dBQ0Q7T0FDSSw4QkFBOEI7T0FDOUIsNEJBQTRCO09BQzVCLDZCQUE2QjtPQUM3Qiw4QkFBOEI7O0lBRWpDIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGUtbWFuYWdlbWVudC90ZW1wbGF0ZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLnRlbXBsYXRlLWNvbnRhaW5lciAge1xuICAgIHdpZHRoOiA5NiU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgfVxuICAgLnRlbXBsYXRlLWNhcmR7XG4gICAgICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgXG4gICB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/template-management/template-management.component.html":
/*!************************************************************************!*\
  !*** ./src/app/template-management/template-management.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"template-container\">\n  <mat-card class=\"template-card\">\n    <mat-card-header>\n      <mat-card-title class=\"color-blue\">Template Dashboard</mat-card-title>\n      <mat-card-subtitle></mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"conatiner-fluid\">\n        <mat-list>\n          <h3 mat-subheader>List of Templates for Myriad</h3>\n          <mat-list-item *ngFor=\"let folder of folders\">\n              <!-- <img matListAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n              <img matListAvatar src=\"./assets/home/templ.png\" alt=\"Photo of a Shiba Inu\">\n             \n              <h3 matLine> {{folder.name}} </h3>\n              <p matLine>\n                <span> {{folder.desc}} </span>\n              </p>\n                <button mat-icon-button color=\"warn\" class=\"pull-right\">\n                    <i class=\"material-icons\">delete</i>\n                  </button> \n                  <button mat-icon-button color=\"accent\" class=\"pull-right\">\n                      <i class=\"material-icons\">info</i>\n                    </button>\n                  <button mat-icon-button color=\"primary\" class=\"pull-right\">\n                      <i class=\"material-icons\">edit</i>\n                    </button> \n            <mat-divider></mat-divider>              \n            </mat-list-item>\n        </mat-list>\n        <mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n        </mat-paginator>\n      </div>\n\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n      <button mat-raised-button \n             color=\"primary\" \n             style=\"margin-right: 20px;\"\n             (click)=\"openCreateDialog()\"\n             >\n        <i class=\"material-icons\">add</i> Add New Template</button>\n    </mat-card-actions>\n  </mat-card>\n</section>\n"

/***/ }),

/***/ "./src/app/template-management/template-management.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/template-management/template-management.component.ts ***!
  \**********************************************************************/
/*! exports provided: TemplateManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateManagementComponent", function() { return TemplateManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _utility_animation_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/animation/animation */ "./src/app/utility/animation/animation.ts");
/* harmony import */ var _add_template_dialog_add_template_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-template-dialog/add-template-dialog.component */ "./src/app/add-template-dialog/add-template-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TemplateManagementComponent = /** @class */ (function () {
    function TemplateManagementComponent(_dialog) {
        this._dialog = _dialog;
        this.folders = [];
    }
    TemplateManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.folders = [
                {
                    name: 'Add Column',
                    desc: 'This Template is used to generate scripts for Adding a coulmn',
                },
                {
                    name: 'Feed Configuration',
                    desc: 'This template is to generate script for feed configuration',
                },
                {
                    name: 'Delete Column',
                    desc: 'This template is used to generate script for deleteing a column',
                },
                {
                    name: 'Delete Column',
                    desc: 'This template is used to generate script for deleteing a column',
                },
                {
                    name: 'Delete Column',
                    desc: 'This template is used to generate script for deleteing a column',
                },
                {
                    name: 'Delete Column',
                    desc: 'This template is used to generate script for deleteing a column',
                },
                {
                    name: 'Delete Column',
                    desc: 'This template is used to generate script for deleteing a column',
                }
            ];
        }, 100);
    };
    TemplateManagementComponent.prototype.openCreateDialog = function () {
        var dialogRef = this._dialog.open(_add_template_dialog_add_template_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddTemplateDialogComponent"], {
            width: '70%',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    TemplateManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template-management',
            template: __webpack_require__(/*! ./template-management.component.html */ "./src/app/template-management/template-management.component.html"),
            styles: [__webpack_require__(/*! ./template-management.component.css */ "./src/app/template-management/template-management.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', Object(_utility_animation_animation__WEBPACK_IMPORTED_MODULE_3__["fadeIn"])()),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeOut', Object(_utility_animation_animation__WEBPACK_IMPORTED_MODULE_3__["fadeOut"])())
            ]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], TemplateManagementComponent);
    return TemplateManagementComponent;
}());



/***/ }),

/***/ "./src/app/utility/animation/animation.ts":
/*!************************************************!*\
  !*** ./src/app/utility/animation/animation.ts ***!
  \************************************************/
/*! exports provided: fadeIn, fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function fadeIn(selector, duration) {
    if (selector === void 0) { selector = ':enter'; }
    if (duration === void 0) { duration = '400ms ease-out'; }
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(selector, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-5px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('60ms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        transform: 'translateY(0px)'
                    }))
                ])
            ], { optional: true })
        ])
    ];
}
function fadeOut(selector, duration) {
    if (selector === void 0) { selector = ':leave'; }
    if (duration === void 0) { duration = 300; }
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(selector, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('30ms', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0
                    }))
                ])
            ], { optional: true })
        ])
    ];
}


/***/ }),

/***/ "./src/app/utility/utility.service.ts":
/*!********************************************!*\
  !*** ./src/app/utility/utility.service.ts ***!
  \********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilityService = /** @class */ (function () {
    function UtilityService() {
        this.BASE_URL = window.location.origin + "/api/v1/";
        // this.constructRequestObject("1","POST","f")
    }
    UtilityService.prototype.constructRequestObject = function (url, method, payload) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        var requestOptions = {
            headers: headers,
            body: payload,
            method: method,
            url: this.BASE_URL + url,
            withCredentials: true
        };
        return requestOptions;
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/widget/fileupload/fileupload.component.css":
/*!************************************************************!*\
  !*** ./src/app/widget/fileupload/fileupload.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input_fileupload--hidden{\n    display:none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0L2ZpbGV1cGxvYWQvZmlsZXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtHQUNkIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0L2ZpbGV1cGxvYWQvZmlsZXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0X2ZpbGV1cGxvYWQtLWhpZGRlbntcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/widget/fileupload/fileupload.component.html":
/*!*************************************************************!*\
  !*** ./src/app/widget/fileupload/fileupload.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button\n        (click)=\"onClick($event)\"\n>\n  <i class=\"material-icons\">attachment</i>\n  {{chooseLabel}}</button>\n<input #fileUpload\n       type=\"file\"\n       class=\"input_fileupload--hidden\"\n       (input)=\"onInput($event)\"\n       (change)=\"onFileSelected($event)\"\n       [(ngModel)]=\"inputFileName\"\n       [accept]=\"accept\"\n>\n\n<div *ngFor=\"let f of files\">\n  <span>{{(f.name.length>8)?(f.name.substr(1,8)):f.name}}</span>\n  <button mat-icon-button\n          color=\"primary\"\n          [attr.title]=\"deleteButtonLabel?deleteButtonLabel:null\"\n          (click)=\"removeFile(event,f)\"\n  >\n    <!-- <mat-icon></mat-icon> -->\n  <i class=\"material-icons\">{{deleteButtonIcon}}</i>    \n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/widget/fileupload/fileupload.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/widget/fileupload/fileupload.component.ts ***!
  \***********************************************************/
/*! exports provided: FileuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileuploadComponent", function() { return FileuploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileuploadComponent = /** @class */ (function () {
    // @Output()
    // fileContent = new EventEmitter();
    function FileuploadComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.auto = true;
        this.chooseLabel = 'Choose';
        this.uploadLabel = 'Upload';
        this.cancelLabel = 'Cance';
        this.deleteButtonIcon = 'close';
        /**
         *
         */
        this.fileData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.files = [];
    }
    FileuploadComponent.prototype.ngOnInit = function () {
    };
    FileuploadComponent.prototype.onClick = function (event) {
        if (this.fileUpload)
            this.fileUpload.nativeElement.click();
    };
    FileuploadComponent.prototype.onInput = function (event) {
    };
    FileuploadComponent.prototype.onFileSelected = function (event) {
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        console.log('event::::::', event);
        console.log('file::::::', files[0]);
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            //if(!this.isFileSelected(file)){
            if (this.validate(file)) {
                //      if(this.isImage(file)) {
                file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                //      }
                if (!this.isMultiple()) {
                    this.files = [];
                }
                this.files.push(files[i]);
                //  }
            }
            //}
        }
        // this.fileContent.emit(files)
        this.fileData.emit(files);
    };
    FileuploadComponent.prototype.removeFile = function (event, file) {
        var ix;
        if (this.files && -1 !== (ix = this.files.indexOf(file))) {
            this.files.splice(ix, 1);
            this.clearInputElement();
        }
    };
    FileuploadComponent.prototype.validate = function (file) {
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var f = _a[_i];
            if (f.name === file.name
                && f.lastModified === file.lastModified
                && f.size === f.size
                && f.type === f.type) {
                return false;
            }
        }
        return true;
    };
    FileuploadComponent.prototype.clearInputElement = function () {
        this.fileUpload.nativeElement.value = '';
    };
    FileuploadComponent.prototype.isMultiple = function () {
        return this.multiple;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "names", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "method", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "accept", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "maxFileSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "auto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "withCredentials", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "invalidFileSizeMessageSummary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "invalidFileSizeMessageDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "invalidFileTypeMessageSummary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "invalidFileTypeMessageDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "previewWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "chooseLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "uploadLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "cancelLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "customUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "showUploadButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "showCancelButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "dataUriPrefix", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "deleteButtonLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "deleteButtonIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "showUploadInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileuploadComponent.prototype, "fileData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileUpload'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FileuploadComponent.prototype, "fileUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FileuploadComponent.prototype, "files", void 0);
    FileuploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fileupload',
            template: __webpack_require__(/*! ./fileupload.component.html */ "./src/app/widget/fileupload/fileupload.component.html"),
            styles: [__webpack_require__(/*! ./fileupload.component.css */ "./src/app/widget/fileupload/fileupload.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], FileuploadComponent);
    return FileuploadComponent;
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

module.exports = __webpack_require__(/*! /Users/programoholic/workspace/TemplateX/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map