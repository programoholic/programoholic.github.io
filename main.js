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


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
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

module.exports = "<div class=\"test\">\n  <!-- <ag-grid-angular\n      #agGrid\n      style=\"width: 500px; height: 500px;\"\n      id=\"myGrid\"\n      class=\"ag-theme-balham\"\n      [columnDefs]=\"columnDefs\"\n      [defaultColDef]=\"defaultColDef\"\n      [components]=\"components\"\n      [rowBuffer]=\"rowBuffer\"\n      [rowSelection]=\"rowSelection\"\n      [rowDeselection]=\"true\"\n      [rowModelType]=\"rowModelType\"\n      [paginationPageSize]=\"paginationPageSize\"\n      [cacheOverflowSize]=\"cacheOverflowSize\"\n      [maxConcurrentDatasourceRequests]=\"maxConcurrentDatasourceRequests\"\n      [infiniteInitialRowCount]=\"infiniteInitialRowCount\"\n      [maxBlocksInCache]=\"maxBlocksInCache\"\n      [rowData]=\"rowData\"\n      (gridReady)=\"onGridReady($event)\"\n    ></ag-grid-angular> -->\n</div>\n<!-- <ag-grid-angular\nstyle=\"width: 500px; height: 500px;\"\nid=\"myGrid\"\nclass=\"ag-theme-balham\"\n[columnDefs]=\"columnDefs\"\n[floatingFilter]=\"true\"\n[debug]=\"true\"\n[defaultColDef]=\"defaultColDef\"\n[rowSelection]=\"rowSelection\"\n[rowDeselection]=\"true\"\n[rowModelType]=\"rowModelType\"\n[paginationPageSize]=\"paginationPageSize\"\n[cacheOverflowSize]=\"cacheOverflowSize\"\n[maxConcurrentDatasourceRequests]=\"maxConcurrentDatasourceRequests\"\n[infiniteInitialRowCount]=\"infiniteInitialRowCount\"\n[maxBlocksInCache]=\"maxBlocksInCache\"\n[getRowNodeId]=\"getRowNodeId\"\n[rowData]=\"rowData\"\n(gridReady)=\"onGridReady($event)\"\n></ag-grid-angular> -->\n\n<ag-grid-angular\n      #agGrid\n      style=\"width: 1024px; height: 600px;\"\n      id=\"myGrid\"\n      class=\"ag-theme-balham\"\n      [columnDefs]=\"columnDefs\"\n      [debug]=\"true\"\n      [defaultColDef]=\"defaultColDef\"\n      [rowSelection]=\"rowSelection\"\n      [rowModelType]=\"rowModelType\"\n      [paginationPageSize]=\"paginationPageSize\"\n      [cacheOverflowSize]=\"cacheOverflowSize\"\n      [maxConcurrentDatasourceRequests]=\"maxConcurrentDatasourceRequests\"\n      [infiniteInitialRowCount]=\"infiniteInitialRowCount\"\n      [maxBlocksInCache]=\"maxBlocksInCache\"\n      [getRowNodeId]=\"getRowNodeId\"\n      [cacheBlockSize] = \"cacheBlockSize\"\n      [components]=\"components\"\n      [rowData]=\"rowData\"\n      (gridReady)=\"onGridReady($event)\"\n    ></ag-grid-angular>\n"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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