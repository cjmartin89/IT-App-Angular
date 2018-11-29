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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n<app-quotes></app-quotes>"

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
        this.loadedFeature = 'quote';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _quotes_quote_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes/quote.service */ "./src/app/quotes/quote.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _quotes_quote_edit_quote_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quotes/quote-edit/quote-edit.component */ "./src/app/quotes/quote-edit/quote-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _quotes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quotes/filter.pipe */ "./src/app/quotes/filter.pipe.ts");
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
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__["QuotesComponent"],
                _quotes_quote_edit_quote_edit_component__WEBPACK_IMPORTED_MODULE_9__["QuoteEditComponent"],
                _quotes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"]
            ],
            providers: [_quotes_quote_service__WEBPACK_IMPORTED_MODULE_6__["QuoteService"], _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-style {\n    background-color: black;\n}\n\n.text-color {\n    color: #80bd01;\n}\n\n.navbar-collapse {\n    padding: 5px;\n}\n\n.logo {\n    color: white;\n    font-size: 40px;\n}\n\n#header {\n    border-bottom: 3px solid #80bd01;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"container-fluid header-style\" id=\"header\">\n        <div class=\"navbar-header\">\n            <a href=\"#\" class=\"navbar-brand logo\">Miami Beach</a>\n            <a href=\"#\" class=\"navbar-brand text-color\">Quotes</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <!-- <li><a href=\"#\" (click)=\"onGet()\">Get Quotes</a></li>\n                <li><a href=\"#\" (click)=\"onSelect('quote')\">Add Quote</a></li> -->\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _quotes_quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quotes/quote.service */ "./src/app/quotes/quote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataStorageService, quoteService) {
        this.dataStorageService = dataStorageService;
        this.quoteService = quoteService;
        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.onSelect = function (feature) {
        this.featureSelected.emit(feature);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "featureSelected", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"], _quotes_quote_service__WEBPACK_IMPORTED_MODULE_2__["QuoteService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/quotes/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/quotes/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterString, propName) {
        if (filterString === '') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            console.log(item[propName]);
            if (item[propName] === filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/quotes/quote-edit/quote-edit.component.css":
/*!************************************************************!*\
  !*** ./src/app/quotes/quote-edit/quote-edit.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-success {\n    background-color: #80bd01 !important;\n}\n\n.btn {\n    margin-right: 5px;\n}\n\n.margin-left {\n    margin-left: 5px;\n}\n\n.margin-top {\n    margin-top: 5px;\n}"

/***/ }),

/***/ "./src/app/quotes/quote-edit/quote-edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/quotes/quote-edit/quote-edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form (ngSubmit)=\"onAddItem(f)\" #f=\"ngForm\"\n      >\n        <div class=\"row margin-top\">\n          <div class=\"col-sm-5 form-group margin-left\">\n            <label for=\"quote\">Quote</label>\n            <input\n              type=\"text\"\n              id=\"quote\"\n              class=\"form-control\"\n              name=\"quote\"\n              ngModel\n              >\n          </div>\n          <div class=\"col-sm-2 form-group\">\n            <label for=\"person\">Person</label>\n            <input\n              type=\"text\"\n              id=\"person\"\n              class=\"form-control\"\n              name=\"person\"\n              ngModel\n              >\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 margin-left\">\n            <button class=\"btn btn-success\" type=\"submit\" (click)=\"onAddItem\">{{ editMode ? 'Update' : 'Add'}}</button>\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDeleteQuote()\">Delete</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/quotes/quote-edit/quote-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/quotes/quote-edit/quote-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: QuoteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteEditComponent", function() { return QuoteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _quotes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quotes.model */ "./src/app/quotes/quotes.model.ts");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quote.service */ "./src/app/quotes/quote.service.ts");
/* harmony import */ var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuoteEditComponent = /** @class */ (function () {
    function QuoteEditComponent(quoteService, dataService) {
        this.quoteService = quoteService;
        this.dataService = dataService;
        this.quoteAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editMode = false;
    }
    QuoteEditComponent.prototype.onAddItem = function (form) {
        var _this = this;
        var value = form.value;
        var person = value.person;
        var quote = value.quote;
        var newQuote = new _quotes_model__WEBPACK_IMPORTED_MODULE_2__["Quote"](person, quote, 0);
        if (this.editMode) {
            this.quoteService.updateQuote(this.editedItemIndex, newQuote)
                .subscribe(function (response) {
                console.log(response);
            });
            this.editMode = false;
            form.reset();
            this.dataService.getQuotes();
        }
        else {
            this.dataService.storeQuotes(newQuote)
                .subscribe(function (response) {
                console.log(response.status);
                if (response.status === 200) {
                    console.log("Response = 200");
                    _this.dataService.getQuotes();
                }
            }, function (error) { return console.log(error); });
        }
        form.reset();
    };
    QuoteEditComponent.prototype.onClear = function () {
        console.log("Clear Clicked");
        this.quoteForm.reset();
        this.editMode = false;
    };
    QuoteEditComponent.prototype.onDeleteQuote = function () {
        this.quoteService.deleteQuote(this.editedItemIndex)
            .subscribe(function (response) {
            console.log(response);
        });
        this.quoteForm.reset();
        this.dataService.getQuotes();
    };
    QuoteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quoteService.startedEditing
            .subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.quoteService.getQuote(index);
            _this.quoteForm.setValue({
                person: _this.editedItem.person,
                quote: _this.editedItem.quote
            });
        });
    };
    QuoteEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], QuoteEditComponent.prototype, "quoteForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuoteEditComponent.prototype, "quoteAdded", void 0);
    QuoteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-edit',
            template: __webpack_require__(/*! ./quote-edit.component.html */ "./src/app/quotes/quote-edit/quote-edit.component.html"),
            styles: [__webpack_require__(/*! ./quote-edit.component.css */ "./src/app/quotes/quote-edit/quote-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_quote_service__WEBPACK_IMPORTED_MODULE_3__["QuoteService"], src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]])
    ], QuoteEditComponent);
    return QuoteEditComponent;
}());



/***/ }),

/***/ "./src/app/quotes/quote.service.ts":
/*!*****************************************!*\
  !*** ./src/app/quotes/quote.service.ts ***!
  \*****************************************/
/*! exports provided: QuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return QuoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuoteService = /** @class */ (function () {
    function QuoteService(http) {
        this.http = http;
        this.quotesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.baseUrl = 'https://calm-savannah-82295.herokuapp.com/quotes';
        this.quotes = [];
    }
    QuoteService.prototype.setQuotes = function (quotes) {
        this.quotes = quotes;
        this.quotesChanged.next(this.quotes.slice());
    };
    QuoteService.prototype.addQuote = function (newQuote) {
        this.quotes.push(newQuote);
    };
    QuoteService.prototype.getQuotes = function () {
        return this.quotes.slice();
    };
    QuoteService.prototype.getQuote = function (index) {
        return this.quotes[index];
    };
    QuoteService.prototype.updateQuote = function (index, newQuote) {
        var quoteToUpdate = this.quotes[index];
        var pk = quoteToUpdate.pk;
        var url = this.baseUrl + '/' + pk + '/';
        return this.http.put(url, newQuote);
    };
    QuoteService.prototype.deleteQuote = function (index) {
        var quoteToDelete = this.quotes[index];
        var pk = quoteToDelete.pk;
        var url = this.baseUrl + '/' + pk + '/';
        return this.http.delete(url);
    };
    QuoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], QuoteService);
    return QuoteService;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/*!*********************************************!*\
  !*** ./src/app/quotes/quotes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quote {\n    margin-bottom: 10px;\n}\n\n.card {\n    width: 31% !important;\n    display: inline-block;\n    margin: 10px;\n}\n\n.searchLabel {\n    margin-left: 10px;\n}\n\n.searchInput {\n    width: 30%;\n    margin-left: 10px;\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}"

/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-quote-edit \n    (quoteAdded)=\"onQuoteAdded($event)\">\n  </app-quote-edit>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n    <div class=\"col-sm-5 form-group margin-left\">\n        <label for=\"quote\" class=\"searchLabel\">Filter by Person</label>\n        <input type=\"text\" class=\"searchInput\" [(ngModel)]=\"filteredStatus\">\n    </div>\n  <div class=\"col-xs-12\">\n    <a href=\"#\" class=\"list-group-item clearfix quote card\" \n    *ngFor=\"let quote of quotes | filter:filteredStatus:'person'; let i = index\"\n    (click)=\"onEditItem(i)\"\n    >\n      <div class=\"pull-left\">\n        <h4 class=\"list-group-item-heading\">{{quote.quote}}</h4>\n        <h4 class=\"list-group-item-text\">{{quote.person}}</h4>\n      </div>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote.service */ "./src/app/quotes/quote.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(dataStorageService, quoteService) {
        this.dataStorageService = dataStorageService;
        this.quoteService = quoteService;
        this.filteredStatus = '';
    }
    QuotesComponent.prototype.onGetData = function () {
        this.dataStorageService.getQuotes();
    };
    QuotesComponent.prototype.onQuoteAdded = function (quote) {
        this.quotes.push(quote);
        console.log(this.quotes);
    };
    QuotesComponent.prototype.refreshQuotes = function () {
        var _this = this;
        this.quoteService.quotesChanged
            .subscribe(function (quotes) {
            _this.quotes = quotes;
        });
    };
    QuotesComponent.prototype.onEditItem = function (index) {
        this.quoteService.startedEditing.next(index);
    };
    QuotesComponent.prototype.ngOnInit = function () {
        this.dataStorageService.getQuotes();
        this.refreshQuotes();
    };
    QuotesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"], _quote_service__WEBPACK_IMPORTED_MODULE_1__["QuoteService"]])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.model.ts":
/*!****************************************!*\
  !*** ./src/app/quotes/quotes.model.ts ***!
  \****************************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(person, quote, pk) {
        this.person = person;
        this.quote = quote;
        this.pk = pk;
    }
    return Quote;
}());



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _quotes_quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quotes/quote.service */ "./src/app/quotes/quote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, quoteService) {
        this.http = http;
        this.quoteService = quoteService;
        this.baseUrl = 'https://calm-savannah-82295.herokuapp.com/quotes';
    }
    DataStorageService.prototype.storeQuotes = function (quote) {
        return this.http.post(this.baseUrl, quote);
    };
    DataStorageService.prototype.getQuotes = function () {
        var _this = this;
        this.http.get(this.baseUrl)
            .subscribe(function (response) {
            var quotes = response.json();
            _this.quoteService.setQuotes(quotes);
        });
    };
    DataStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _quotes_quote_service__WEBPACK_IMPORTED_MODULE_2__["QuoteService"]])
    ], DataStorageService);
    return DataStorageService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chrismartin/OneDrive/Projects/IT-App/IT-App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map