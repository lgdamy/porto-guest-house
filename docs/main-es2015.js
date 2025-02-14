(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_atividades_ar_livre_atividades_ar_livre_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/atividades-ar-livre/atividades-ar-livre.component */ "./src/app/pages/atividades-ar-livre/atividades-ar-livre.component.ts");
/* harmony import */ var _pages_atividades_criancas_atividades_criancas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/atividades-criancas/atividades-criancas.component */ "./src/app/pages/atividades-criancas/atividades-criancas.component.ts");
/* harmony import */ var _pages_cultura_cultura_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/cultura/cultura.component */ "./src/app/pages/cultura/cultura.component.ts");
/* harmony import */ var _pages_gastronomia_gastronomia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/gastronomia/gastronomia.component */ "./src/app/pages/gastronomia/gastronomia.component.ts");
/* harmony import */ var _pages_lembrancas_lembrancas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/lembrancas/lembrancas.component */ "./src/app/pages/lembrancas/lembrancas.component.ts");
/* harmony import */ var _pages_menu_inicial_menu_inicial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/menu-inicial/menu-inicial.component */ "./src/app/pages/menu-inicial/menu-inicial.component.ts");
/* harmony import */ var _pages_mercados_mercados_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/mercados/mercados.component */ "./src/app/pages/mercados/mercados.component.ts");
/* harmony import */ var _pages_pontos_turisticos_atividades_pontos_turisticos_atividades_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pontos-turisticos-atividades/pontos-turisticos-atividades.component */ "./src/app/pages/pontos-turisticos-atividades/pontos-turisticos-atividades.component.ts");
/* harmony import */ var _pages_roteiros_prontos_roteiros_prontos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/roteiros-prontos/roteiros-prontos.component */ "./src/app/pages/roteiros-prontos/roteiros-prontos.component.ts");
/* harmony import */ var _pages_vida_noturna_vida_noturna_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/vida-noturna/vida-noturna.component */ "./src/app/pages/vida-noturna/vida-noturna.component.ts");














const routes = [
    {
        path: '',
        component: _pages_menu_inicial_menu_inicial_component__WEBPACK_IMPORTED_MODULE_7__["MenuInicialComponent"]
    },
    {
        path: 'atividades-ar-livre',
        component: _pages_atividades_ar_livre_atividades_ar_livre_component__WEBPACK_IMPORTED_MODULE_2__["AtividadesArLivreComponent"]
    },
    {
        path: 'atividades-criancas',
        component: _pages_atividades_criancas_atividades_criancas_component__WEBPACK_IMPORTED_MODULE_3__["AtividadesCriancasComponent"]
    },
    {
        path: 'cultura',
        component: _pages_cultura_cultura_component__WEBPACK_IMPORTED_MODULE_4__["CulturaComponent"]
    },
    {
        path: 'gastronomia',
        component: _pages_gastronomia_gastronomia_component__WEBPACK_IMPORTED_MODULE_5__["GastronomiaComponent"]
    },
    {
        path: 'lembrancas',
        component: _pages_lembrancas_lembrancas_component__WEBPACK_IMPORTED_MODULE_6__["LembrancasComponent"]
    },
    {
        path: 'mercados',
        component: _pages_mercados_mercados_component__WEBPACK_IMPORTED_MODULE_8__["MercadosComponent"]
    },
    {
        path: 'pontos-turisticos-atividades',
        component: _pages_pontos_turisticos_atividades_pontos_turisticos_atividades_component__WEBPACK_IMPORTED_MODULE_9__["PontosTuristicosAtividadesComponent"]
    },
    {
        path: 'roteiros-prontos',
        component: _pages_roteiros_prontos_roteiros_prontos_component__WEBPACK_IMPORTED_MODULE_10__["RoteirosProntosComponent"]
    },
    {
        path: 'vida-noturna',
        component: _pages_vida_noturna_vida_noturna_component__WEBPACK_IMPORTED_MODULE_11__["VidaNoturnaComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nav-bar/nav-bar.component */ "./src/app/common/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'porto-guest-house';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_common_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 136px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    top: 64px;\n  }\n}\n@media screen and (max-width: 599px) {\n  .container[_ngcontent-%COMP%] {\n    top: 56px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhaWFkcm9nYXNpbC5jb20vbGdkYW15L3dvcmtzcGFjZS9kYW15dGVjL3BvcnRvLWd1ZXN0LWhvdXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDSjtBREFJO0VBUko7SUFTUSxTQUFBO0VDR047QUFDRjtBREZJO0VBWEo7SUFZUSxTQUFBO0VDS047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMzZweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB0b3A6IDY0cHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiA1OTlweCl7XG4gICAgICAgIHRvcDogNTZweDtcbiAgICB9XG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMzZweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHRvcDogNjRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgdG9wOiA1NnB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _pages_menu_inicial_menu_inicial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/menu-inicial/menu-inicial.component */ "./src/app/pages/menu-inicial/menu-inicial.component.ts");
/* harmony import */ var _common_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/nav-bar/nav-bar.component */ "./src/app/common/nav-bar/nav-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-translate-multi-http-loader */ "./node_modules/ngx-translate-multi-http-loader/__ivy_ngcc__/fesm2015/ngx-translate-multi-http-loader.js");
/* harmony import */ var _pages_pontos_turisticos_atividades_pontos_turisticos_atividades_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/pontos-turisticos-atividades/pontos-turisticos-atividades.component */ "./src/app/pages/pontos-turisticos-atividades/pontos-turisticos-atividades.component.ts");
/* harmony import */ var _pages_gastronomia_gastronomia_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/gastronomia/gastronomia.component */ "./src/app/pages/gastronomia/gastronomia.component.ts");
/* harmony import */ var _pages_mercados_mercados_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/mercados/mercados.component */ "./src/app/pages/mercados/mercados.component.ts");
/* harmony import */ var _pages_vida_noturna_vida_noturna_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/vida-noturna/vida-noturna.component */ "./src/app/pages/vida-noturna/vida-noturna.component.ts");
/* harmony import */ var _pages_atividades_criancas_atividades_criancas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/atividades-criancas/atividades-criancas.component */ "./src/app/pages/atividades-criancas/atividades-criancas.component.ts");
/* harmony import */ var _pages_atividades_ar_livre_atividades_ar_livre_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/atividades-ar-livre/atividades-ar-livre.component */ "./src/app/pages/atividades-ar-livre/atividades-ar-livre.component.ts");
/* harmony import */ var _pages_lembrancas_lembrancas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/lembrancas/lembrancas.component */ "./src/app/pages/lembrancas/lembrancas.component.ts");
/* harmony import */ var _pages_cultura_cultura_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/cultura/cultura.component */ "./src/app/pages/cultura/cultura.component.ts");
/* harmony import */ var _pages_roteiros_prontos_roteiros_prontos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/roteiros-prontos/roteiros-prontos.component */ "./src/app/pages/roteiros-prontos/roteiros-prontos.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




























function HttpLoaderFactory(http) {
    return new ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_15__["MultiTranslateHttpLoader"](http, [
        { prefix: './assets/i18n/', suffix: '.json' },
        { prefix: './assets/i18n/menu-inicial/', suffix: '.json' },
        { prefix: './assets/i18n/atividades-ar-livre/', suffix: '.json' },
        { prefix: './assets/i18n/atividades-criancas/', suffix: '.json' },
        { prefix: './assets/i18n/cultura/', suffix: '.json' },
        { prefix: './assets/i18n/gastronomia/', suffix: '.json' },
        { prefix: './assets/i18n/lembrancas/', suffix: '.json' },
        { prefix: './assets/i18n/mercados/', suffix: '.json' },
        { prefix: './assets/i18n/pontos-turisticos-atividades/', suffix: '.json' },
        { prefix: './assets/i18n/roteiros-prontos/', suffix: '.json' },
        { prefix: './assets/i18n/vida-noturna/', suffix: '.json' },
    ]);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_25__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_25__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                defaultLanguage: 'pt',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _pages_menu_inicial_menu_inicial_component__WEBPACK_IMPORTED_MODULE_12__["MenuInicialComponent"],
        _common_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
        _pages_pontos_turisticos_atividades_pontos_turisticos_atividades_component__WEBPACK_IMPORTED_MODULE_16__["PontosTuristicosAtividadesComponent"],
        _pages_gastronomia_gastronomia_component__WEBPACK_IMPORTED_MODULE_17__["GastronomiaComponent"],
        _pages_mercados_mercados_component__WEBPACK_IMPORTED_MODULE_18__["MercadosComponent"],
        _pages_vida_noturna_vida_noturna_component__WEBPACK_IMPORTED_MODULE_19__["VidaNoturnaComponent"],
        _pages_atividades_criancas_atividades_criancas_component__WEBPACK_IMPORTED_MODULE_20__["AtividadesCriancasComponent"],
        _pages_atividades_ar_livre_atividades_ar_livre_component__WEBPACK_IMPORTED_MODULE_21__["AtividadesArLivreComponent"],
        _pages_lembrancas_lembrancas_component__WEBPACK_IMPORTED_MODULE_22__["LembrancasComponent"],
        _pages_cultura_cultura_component__WEBPACK_IMPORTED_MODULE_23__["CulturaComponent"],
        _pages_roteiros_prontos_roteiros_prontos_component__WEBPACK_IMPORTED_MODULE_24__["RoteirosProntosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _pages_menu_inicial_menu_inicial_component__WEBPACK_IMPORTED_MODULE_12__["MenuInicialComponent"],
                    _common_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                    _pages_pontos_turisticos_atividades_pontos_turisticos_atividades_component__WEBPACK_IMPORTED_MODULE_16__["PontosTuristicosAtividadesComponent"],
                    _pages_gastronomia_gastronomia_component__WEBPACK_IMPORTED_MODULE_17__["GastronomiaComponent"],
                    _pages_mercados_mercados_component__WEBPACK_IMPORTED_MODULE_18__["MercadosComponent"],
                    _pages_vida_noturna_vida_noturna_component__WEBPACK_IMPORTED_MODULE_19__["VidaNoturnaComponent"],
                    _pages_atividades_criancas_atividades_criancas_component__WEBPACK_IMPORTED_MODULE_20__["AtividadesCriancasComponent"],
                    _pages_atividades_ar_livre_atividades_ar_livre_component__WEBPACK_IMPORTED_MODULE_21__["AtividadesArLivreComponent"],
                    _pages_lembrancas_lembrancas_component__WEBPACK_IMPORTED_MODULE_22__["LembrancasComponent"],
                    _pages_cultura_cultura_component__WEBPACK_IMPORTED_MODULE_23__["CulturaComponent"],
                    _pages_roteiros_prontos_roteiros_prontos_component__WEBPACK_IMPORTED_MODULE_24__["RoteirosProntosComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                        defaultLanguage: 'pt',
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                        }
                    }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_25__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_25__["HashLocationStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/animations.ts":
/*!**************************************!*\
  !*** ./src/app/common/animations.ts ***!
  \**************************************/
/*! exports provided: slideInOut, fadeInOut, AnimatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOut", function() { return slideInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedComponent", function() { return AnimatedComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



const slideInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s 0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)', opacity: 0 }))
    ])
]);
const fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s 0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);
class AnimatedComponent {
    constructor() {
        this.transitionComplete = false;
        this.animateRoute = true;
    }
    ngOnInit() {
        setTimeout(() => this.transitionComplete = true, 500);
    }
}
AnimatedComponent.ɵfac = function AnimatedComponent_Factory(t) { return new (t || AnimatedComponent)(); };
AnimatedComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AnimatedComponent, hostVars: 1, hostBindings: function AnimatedComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵupdateSyntheticHostBinding"]("@routeAnimation", ctx.animateRoute);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnimatedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], null, { animateRoute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['@routeAnimation']
        }] }); })();


/***/ }),

/***/ "./src/app/common/constants/routes.ts":
/*!********************************************!*\
  !*** ./src/app/common/constants/routes.ts ***!
  \********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
const routes = [
    'pontos-turisticos-atividades',
    'gastronomia',
    'mercados',
    'vida-noturna',
    'atividades-criancas',
    'atividades-ar-livre',
    'lembrancas',
    'cultura',
    'roteiros-prontos'
];


/***/ }),

/***/ "./src/app/common/nav-bar/nav-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/routes */ "./src/app/common/constants/routes.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function NavBarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
} }
function NavBarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", route_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "pages." + route_r7));
} }
function NavBarComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const lang_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeLang(lang_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("svgIcon", lang_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r8.toUpperCase());
} }
function NavBarComponent_mat_toolbar_row_19_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", route_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "pages." + route_r12));
} }
function NavBarComponent_mat_toolbar_row_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_mat_toolbar_row_19_button_1_Template, 3, 4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.availableRoutes.slice(0, 4));
} }
function NavBarComponent_mat_toolbar_row_20_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", route_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "pages." + route_r14));
} }
function NavBarComponent_mat_toolbar_row_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_mat_toolbar_row_20_button_2_Template, 3, 4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.availableRoutes.slice(4));
} }
class NavBarComponent {
    constructor(registry, domSanitizer, router, translateService) {
        this.registry = registry;
        this.domSanitizer = domSanitizer;
        this.router = router;
        this.translateService = translateService;
        this.shownav = true;
        this.availableRoutes = _constants_routes__WEBPACK_IMPORTED_MODULE_2__["routes"];
        this.availableLangs = ['en', 'es', 'fr', 'pt'];
        this.maxVisibleDesktop = 10;
    }
    ngOnInit() {
        this.i18nIcons();
        this.startingLang();
        this.mobile = window.innerWidth <= 768;
        window.onresize = () => this.mobile = window.innerWidth <= 768;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe(() => {
            var _a;
            this.shownav = this.router.url !== '/';
            this.currentRoute = (_a = _constants_routes__WEBPACK_IMPORTED_MODULE_2__["routes"].find(route => this.router.url.includes(route))) !== null && _a !== void 0 ? _a : 'index';
        });
    }
    i18nIcons() {
        this.availableLangs.forEach(lang => {
            this.registry.addSvgIcon(lang, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/i18n/${lang}.svg`));
        });
    }
    startingLang() {
        if (window.localStorage.getItem('lang') && this.availableLangs.includes(window.localStorage.getItem('lang'))) {
            this.translateService.use(window.localStorage.getItem('lang'));
            return;
        }
        if (navigator.language && this.availableLangs.includes(navigator.language.slice(0, 2))) {
            this.translateService.use(navigator.language.slice(0, 2));
        }
    }
    changeLang(lang) {
        this.translateService.use(lang);
        window.localStorage.setItem('lang', lang);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 21, vars: 9, consts: [["color", "primary", 1, "mat-elevation-z6"], ["mat-icon-button", "", "aria-label", "menu", 3, "matMenuTriggerFor", 4, "ngIf"], ["navmenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "title"], [1, "h-space"], ["mat-icon-button", "", "aria-label", "home", "routerLink", ""], ["mat-icon-button", "", "aria-label", "translate", 3, "matMenuTriggerFor"], ["i18nMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "desktop-items", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], [3, "svgIcon"], [1, "desktop-items"], ["mat-button", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "routerLink"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_button_2_Template, 3, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavBarComponent_button_5_Template, 3, 4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavBarComponent_button_18_Template, 3, 2, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavBarComponent_mat_toolbar_row_19_Template, 2, 1, "mat-toolbar-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavBarComponent_mat_toolbar_row_20_Template, 3, 1, "mat-toolbar-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shownav && ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableRoutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "pages." + ctx.currentRoute));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableLangs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shownav && !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shownav && !ctx.mobile);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".h-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n\n.desktop-items[_ngcontent-%COMP%] {\n  flex: content;\n}\n\n.title[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhaWFkcm9nYXNpbC5jb20vbGdkYW15L3dvcmtzcGFjZS9kYW15dGVjL3BvcnRvLWd1ZXN0LWhvdXNlL3NyYy9hcHAvY29tbW9uL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FEREE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmgtc3BhY2Uge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxubWF0LXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAyO1xufVxuLmRlc2t0b3AtaXRlbXN7XG4gICAgZmxleDogY29udGVudDtcbn1cbi50aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59IiwiLmgtc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5kZXNrdG9wLWl0ZW1zIHtcbiAgZmxleDogY29udGVudDtcbn1cblxuLnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/atividades-ar-livre/atividades-ar-livre.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/atividades-ar-livre/atividades-ar-livre.component.ts ***!
  \****************************************************************************/
/*! exports provided: AtividadesArLivreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadesArLivreComponent", function() { return AtividadesArLivreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function AtividadesArLivreComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "atividades-ar-livre." + i_r1 + ".title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "atividades-ar-livre." + i_r1 + ".content"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "hide-panel-content": a0 }; };
const _c1 = function () { return [1, 2, 3, 4]; };
class AtividadesArLivreComponent extends src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["AnimatedComponent"] {
    ngOnInit() {
    }
}
AtividadesArLivreComponent.ɵfac = function AtividadesArLivreComponent_Factory(t) { return ɵAtividadesArLivreComponent_BaseFactory(t || AtividadesArLivreComponent); };
AtividadesArLivreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AtividadesArLivreComponent, selectors: [["app-atividades-ar-livre"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function AtividadesArLivreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AtividadesArLivreComponent_mat_expansion_panel_1_Template, 7, 6, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.transitionComplete));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0aXZpZGFkZXMtYXItbGl2cmUvYXRpdmlkYWRlcy1hci1saXZyZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]] } });
const ɵAtividadesArLivreComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AtividadesArLivreComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AtividadesArLivreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-atividades-ar-livre',
                templateUrl: './atividades-ar-livre.component.html',
                styleUrls: ['./atividades-ar-livre.component.scss'],
                animations: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/atividades-criancas/atividades-criancas.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/atividades-criancas/atividades-criancas.component.ts ***!
  \****************************************************************************/
/*! exports provided: AtividadesCriancasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadesCriancasComponent", function() { return AtividadesCriancasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function AtividadesCriancasComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "atividades-criancas." + i_r1 + ".title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "atividades-criancas." + i_r1 + ".content"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "hide-panel-content": a0 }; };
const _c1 = function () { return [1, 2, 3, 4]; };
class AtividadesCriancasComponent extends src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["AnimatedComponent"] {
    ngOnInit() {
    }
}
AtividadesCriancasComponent.ɵfac = function AtividadesCriancasComponent_Factory(t) { return ɵAtividadesCriancasComponent_BaseFactory(t || AtividadesCriancasComponent); };
AtividadesCriancasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AtividadesCriancasComponent, selectors: [["app-atividades-criancas"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function AtividadesCriancasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AtividadesCriancasComponent_mat_expansion_panel_1_Template, 7, 6, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.transitionComplete));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0aXZpZGFkZXMtY3JpYW5jYXMvYXRpdmlkYWRlcy1jcmlhbmNhcy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]] } });
const ɵAtividadesCriancasComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AtividadesCriancasComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AtividadesCriancasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-atividades-criancas',
                templateUrl: './atividades-criancas.component.html',
                styleUrls: ['./atividades-criancas.component.scss'],
                animations: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/cultura/cultura.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/cultura/cultura.component.ts ***!
  \****************************************************/
/*! exports provided: CulturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CulturaComponent", function() { return CulturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function CulturaComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "cultura." + i_r1 + ".title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "cultura." + i_r1 + ".content"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "hide-panel-content": a0 }; };
const _c1 = function () { return [1, 2, 3, 4]; };
class CulturaComponent extends src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["AnimatedComponent"] {
    ngOnInit() {
    }
}
CulturaComponent.ɵfac = function CulturaComponent_Factory(t) { return ɵCulturaComponent_BaseFactory(t || CulturaComponent); };
CulturaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CulturaComponent, selectors: [["app-cultura"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function CulturaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CulturaComponent_mat_expansion_panel_1_Template, 7, 6, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.transitionComplete));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1bHR1cmEvY3VsdHVyYS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]] } });
const ɵCulturaComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CulturaComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CulturaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cultura',
                templateUrl: './cultura.component.html',
                styleUrls: ['./cultura.component.scss'],
                animations: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/gastronomia/gastronomia.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/gastronomia/gastronomia.component.ts ***!
  \************************************************************/
/*! exports provided: GastronomiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GastronomiaComponent", function() { return GastronomiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function GastronomiaComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "gastronomia." + i_r1 + ".title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "gastronomia." + i_r1 + ".content"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "hide-panel-content": a0 }; };
const _c1 = function () { return [1, 2, 3, 4]; };
class GastronomiaComponent extends src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["AnimatedComponent"] {
    ngOnInit() {
    }
}
GastronomiaComponent.ɵfac = function GastronomiaComponent_Factory(t) { return ɵGastronomiaComponent_BaseFactory(t || GastronomiaComponent); };
GastronomiaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GastronomiaComponent, selectors: [["app-gastronomia"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function GastronomiaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GastronomiaComponent_mat_expansion_panel_1_Template, 7, 6, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.transitionComplete));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhc3Ryb25vbWlhL2dhc3Ryb25vbWlhLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]] } });
const ɵGastronomiaComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GastronomiaComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GastronomiaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gastronomia',
                templateUrl: './gastronomia.component.html',
                styleUrls: ['./gastronomia.component.scss'],
                animations: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/lembrancas/lembrancas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/lembrancas/lembrancas.component.ts ***!
  \**********************************************************/
/*! exports provided: LembrancasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LembrancasComponent", function() { return LembrancasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function LembrancasComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "lembrancas." + i_r1 + ".title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "lembrancas." + i_r1 + ".content"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "hide-panel-content": a0 }; };
const _c1 = function () { return [1, 2, 3, 4]; };
class LembrancasComponent extends src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["AnimatedComponent"] {
    ngOnInit() {
    }
}
LembrancasComponent.ɵfac = function LembrancasComponent_Factory(t) { return ɵLembrancasComponent_BaseFactory(t || LembrancasComponent); };
LembrancasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LembrancasComponent, selectors: [["app-lembrancas"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function LembrancasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LembrancasComponent_mat_expansion_panel_1_Template, 7, 6, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.transitionComplete));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlbWJyYW5jYXMvbGVtYnJhbmNhcy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]] } });
const ɵLembrancasComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LembrancasComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LembrancasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lembrancas',
                templateUrl: './lembrancas.component.html',
                styleUrls: ['./lembrancas.component.scss'],
                animations: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/menu-inicial/menu-inicial.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/menu-inicial/menu-inicial.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuInicialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuInicialComponent", function() { return MenuInicialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var src_app_common_constants_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/constants/routes */ "./src/app/common/constants/routes.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









function MenuInicialComponent_mat_grid_tile_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tile ", route_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", route_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "pages." + route_r1));
} }
class MenuInicialComponent extends src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["AnimatedComponent"] {
    ngOnInit() {
        this.availableRoutes = src_app_common_constants_routes__WEBPACK_IMPORTED_MODULE_2__["routes"];
        this.gridCols = window.innerWidth <= 768 ? 2 : 3;
    }
    onResize(event) {
        this.gridCols = event.target.innerWidth <= 768 ? 2 : 3;
    }
}
MenuInicialComponent.ɵfac = function MenuInicialComponent_Factory(t) { return ɵMenuInicialComponent_BaseFactory(t || MenuInicialComponent); };
MenuInicialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuInicialComponent, selectors: [["app-menu-inicial"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 11, consts: [[1, "container"], ["rowHeight", "4:3", 3, "cols", "resize"], [3, "class", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "secondary", 3, "routerLink"]], template: function MenuInicialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function MenuInicialComponent_Template_mat_grid_list_resize_10_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuInicialComponent_mat_grid_tile_11_Template, 4, 7, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "menu-inicial.welcome"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "menu-inicial.p1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "menu-inicial.p2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.gridCols);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableRoutes);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n  padding: 0 12px;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%] {\n  overflow-x: hidden !important;\n  white-space: pre-wrap !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: -72px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n}\n\n.tile[_ngcontent-%COMP%] {\n  background-size: 100%;\n}\n\n.tile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-shadow: #fff 0px 0px 1px;\n  -webkit-font-smoothing: antialiased;\n  font-size: larger;\n  font-weight: bold;\n  width: 100%;\n  height: 100%;\n}\n\n.tile.pontos-turisticos-atividades[_ngcontent-%COMP%] {\n  background-image: url(https://picsum.photos/401/301?grayscale&blur=1);\n}\n\n.tile.gastronomia[_ngcontent-%COMP%] {\n  background-image: url(https://picsum.photos/402/302?grayscale&blur=1);\n}\n\n.tile.vida-noturna[_ngcontent-%COMP%] {\n  background-image: url(https://picsum.photos/403/304?grayscale&blur=1);\n}\n\n.tile.mercados[_ngcontent-%COMP%] {\n  background-image: url(https://picsum.photos/404/304?grayscale&blur=1);\n}\n\n.tile.lembrancas[_ngcontent-%COMP%] {\n  background-image: url(https://picsum.photos/405/305?grayscale&blur=1);\n}\n\n.tile.cultura[_ngcontent-%COMP%] {\n  background-image: url(https://picsum.photos/406/306?grayscale&blur=1);\n}\n\n.tile.roteiros-prontos[_ngcontent-%COMP%] {\n  background-image: url(https://picsum.photos/407/307?grayscale&blur=1);\n}\n\n.tile.atividades-ar-livre[_ngcontent-%COMP%] {\n  background-image: url(https://picsum.photos/408/308?grayscale&blur=1);\n}\n\n.tile.atividades-criancas[_ngcontent-%COMP%] {\n  background-image: url(https://picsum.photos/409/309?grayscale&blur=1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhaWFkcm9nYXNpbC5jb20vbGdkYW15L3dvcmtzcGFjZS9kYW15dGVjL3BvcnRvLWd1ZXN0LWhvdXNlL3NyYy9hcHAvcGFnZXMvbWVudS1pbmljaWFsL21lbnUtaW5pY2lhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS1pbmljaWFsL21lbnUtaW5pY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSw2QkFBQTtFQUNBLGdDQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNHSjs7QURGSTtFQVJKO0lBU1EsUUFBQTtFQ0tOO0FBQ0Y7O0FESEE7RUFDSSxxQkFBQTtBQ01KOztBRExJO0VBQ0ksNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ09SOztBRExJO0VBQ0kscUVBQUE7QUNPUjs7QURMSTtFQUNJLHFFQUFBO0FDT1I7O0FETEk7RUFDSSxxRUFBQTtBQ09SOztBRExJO0VBQ0kscUVBQUE7QUNPUjs7QURMSTtFQUNJLHFFQUFBO0FDT1I7O0FETEk7RUFDSSxxRUFBQTtBQ09SOztBRExJO0VBQ0kscUVBQUE7QUNPUjs7QURMSTtFQUNJLHFFQUFBO0FDT1I7O0FETEk7RUFDSSxxRUFBQTtBQ09SIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS1pbmljaWFsL21lbnUtaW5pY2lhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxucCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG59XG5oMiB7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5idXR0b24ge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC03MnB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cbn1cbi50aWxlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgJiBidXR0b24ge1xuICAgICAgICB0ZXh0LXNoYWRvdzogI2ZmZiAwcHggMHB4IDFweDtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJi5wb250b3MtdHVyaXN0aWNvcy1hdGl2aWRhZGVze1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzQwMS8zMDE/Z3JheXNjYWxlJmJsdXI9MSlcbiAgICB9XG4gICAgJi5nYXN0cm9ub21pYSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpY3N1bS5waG90b3MvNDAyLzMwMj9ncmF5c2NhbGUmYmx1cj0xKVxuICAgIH1cbiAgICAmLnZpZGEtbm90dXJuYSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpY3N1bS5waG90b3MvNDAzLzMwND9ncmF5c2NhbGUmYmx1cj0xKVxuICAgIH1cbiAgICAmLm1lcmNhZG9zIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcGljc3VtLnBob3Rvcy80MDQvMzA0P2dyYXlzY2FsZSZibHVyPTEpXG4gICAgfVxuICAgICYubGVtYnJhbmNhcyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpY3N1bS5waG90b3MvNDA1LzMwNT9ncmF5c2NhbGUmYmx1cj0xKVxuICAgIH1cbiAgICAmLmN1bHR1cmEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzQwNi8zMDY/Z3JheXNjYWxlJmJsdXI9MSlcbiAgICB9XG4gICAgJi5yb3RlaXJvcy1wcm9udG9zIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcGljc3VtLnBob3Rvcy80MDcvMzA3P2dyYXlzY2FsZSZibHVyPTEpXG4gICAgfVxuICAgICYuYXRpdmlkYWRlcy1hci1saXZyZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpY3N1bS5waG90b3MvNDA4LzMwOD9ncmF5c2NhbGUmYmx1cj0xKVxuICAgIH1cbiAgICAmLmF0aXZpZGFkZXMtY3JpYW5jYXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzQwOS8zMDk/Z3JheXNjYWxlJmJsdXI9MSlcbiAgICB9XG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuaDIge1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbmJ1dHRvbiB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNzJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbi50aWxlIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuLnRpbGUgYnV0dG9uIHtcbiAgdGV4dC1zaGFkb3c6ICNmZmYgMHB4IDBweCAxcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udGlsZS5wb250b3MtdHVyaXN0aWNvcy1hdGl2aWRhZGVzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcGljc3VtLnBob3Rvcy80MDEvMzAxP2dyYXlzY2FsZSZibHVyPTEpO1xufVxuLnRpbGUuZ2FzdHJvbm9taWEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzQwMi8zMDI/Z3JheXNjYWxlJmJsdXI9MSk7XG59XG4udGlsZS52aWRhLW5vdHVybmEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzQwMy8zMDQ/Z3JheXNjYWxlJmJsdXI9MSk7XG59XG4udGlsZS5tZXJjYWRvcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpY3N1bS5waG90b3MvNDA0LzMwND9ncmF5c2NhbGUmYmx1cj0xKTtcbn1cbi50aWxlLmxlbWJyYW5jYXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzQwNS8zMDU/Z3JheXNjYWxlJmJsdXI9MSk7XG59XG4udGlsZS5jdWx0dXJhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcGljc3VtLnBob3Rvcy80MDYvMzA2P2dyYXlzY2FsZSZibHVyPTEpO1xufVxuLnRpbGUucm90ZWlyb3MtcHJvbnRvcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpY3N1bS5waG90b3MvNDA3LzMwNz9ncmF5c2NhbGUmYmx1cj0xKTtcbn1cbi50aWxlLmF0aXZpZGFkZXMtYXItbGl2cmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzQwOC8zMDg/Z3JheXNjYWxlJmJsdXI9MSk7XG59XG4udGlsZS5hdGl2aWRhZGVzLWNyaWFuY2FzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcGljc3VtLnBob3Rvcy80MDkvMzA5P2dyYXlzY2FsZSZibHVyPTEpO1xufSJdfQ== */"], data: { animation: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["fadeInOut"]] } });
const ɵMenuInicialComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MenuInicialComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuInicialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-inicial',
                templateUrl: './menu-inicial.component.html',
                styleUrls: ['./menu-inicial.component.scss'],
                animations: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["fadeInOut"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/mercados/mercados.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/mercados/mercados.component.ts ***!
  \******************************************************/
/*! exports provided: MercadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercadosComponent", function() { return MercadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function MercadosComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "mercados." + i_r1 + ".title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "mercados." + i_r1 + ".content"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "hide-panel-content": a0 }; };
const _c1 = function () { return [1, 2, 3, 4]; };
class MercadosComponent extends src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["AnimatedComponent"] {
    ngOnInit() {
    }
}
MercadosComponent.ɵfac = function MercadosComponent_Factory(t) { return ɵMercadosComponent_BaseFactory(t || MercadosComponent); };
MercadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MercadosComponent, selectors: [["app-mercados"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function MercadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MercadosComponent_mat_expansion_panel_1_Template, 7, 6, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.transitionComplete));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lcmNhZG9zL21lcmNhZG9zLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]] } });
const ɵMercadosComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MercadosComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MercadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mercados',
                templateUrl: './mercados.component.html',
                styleUrls: ['./mercados.component.scss'],
                animations: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pontos-turisticos-atividades/pontos-turisticos-atividades.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/pontos-turisticos-atividades/pontos-turisticos-atividades.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PontosTuristicosAtividadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PontosTuristicosAtividadesComponent", function() { return PontosTuristicosAtividadesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function PontosTuristicosAtividadesComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "pontos-turisticos-atividades." + i_r1 + ".title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "pontos-turisticos-atividades." + i_r1 + ".content"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "hide-panel-content": a0 }; };
const _c1 = function () { return [1, 2, 3, 4]; };
class PontosTuristicosAtividadesComponent extends src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["AnimatedComponent"] {
    ngOnInit() {
    }
}
PontosTuristicosAtividadesComponent.ɵfac = function PontosTuristicosAtividadesComponent_Factory(t) { return ɵPontosTuristicosAtividadesComponent_BaseFactory(t || PontosTuristicosAtividadesComponent); };
PontosTuristicosAtividadesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PontosTuristicosAtividadesComponent, selectors: [["app-pontos-turisticos-atividades"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function PontosTuristicosAtividadesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PontosTuristicosAtividadesComponent_mat_expansion_panel_1_Template, 7, 6, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.transitionComplete));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhaWFkcm9nYXNpbC5jb20vbGdkYW15L3dvcmtzcGFjZS9kYW15dGVjL3BvcnRvLWd1ZXN0LWhvdXNlL3NyYy9hcHAvcGFnZXMvcG9udG9zLXR1cmlzdGljb3MtYXRpdmlkYWRlcy9wb250b3MtdHVyaXN0aWNvcy1hdGl2aWRhZGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb250b3MtdHVyaXN0aWNvcy1hdGl2aWRhZGVzL3BvbnRvcy10dXJpc3RpY29zLWF0aXZpZGFkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9udG9zLXR1cmlzdGljb3MtYXRpdmlkYWRlcy9wb250b3MtdHVyaXN0aWNvcy1hdGl2aWRhZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iLCJwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */"], data: { animation: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]] } });
const ɵPontosTuristicosAtividadesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PontosTuristicosAtividadesComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PontosTuristicosAtividadesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pontos-turisticos-atividades',
                templateUrl: './pontos-turisticos-atividades.component.html',
                styleUrls: ['./pontos-turisticos-atividades.component.scss'],
                animations: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/roteiros-prontos/roteiros-prontos.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/roteiros-prontos/roteiros-prontos.component.ts ***!
  \**********************************************************************/
/*! exports provided: RoteirosProntosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoteirosProntosComponent", function() { return RoteirosProntosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function RoteirosProntosComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "roteiros-prontos." + i_r1 + ".title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "roteiros-prontos." + i_r1 + ".content"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "hide-panel-content": a0 }; };
const _c1 = function () { return [1, 2, 3, 4]; };
class RoteirosProntosComponent extends src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["AnimatedComponent"] {
    ngOnInit() {
    }
}
RoteirosProntosComponent.ɵfac = function RoteirosProntosComponent_Factory(t) { return ɵRoteirosProntosComponent_BaseFactory(t || RoteirosProntosComponent); };
RoteirosProntosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoteirosProntosComponent, selectors: [["app-roteiros-prontos"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function RoteirosProntosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoteirosProntosComponent_mat_expansion_panel_1_Template, 7, 6, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.transitionComplete));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvdGVpcm9zLXByb250b3Mvcm90ZWlyb3MtcHJvbnRvcy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]] } });
const ɵRoteirosProntosComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RoteirosProntosComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoteirosProntosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roteiros-prontos',
                templateUrl: './roteiros-prontos.component.html',
                styleUrls: ['./roteiros-prontos.component.scss'],
                animations: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/vida-noturna/vida-noturna.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/vida-noturna/vida-noturna.component.ts ***!
  \**************************************************************/
/*! exports provided: VidaNoturnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VidaNoturnaComponent", function() { return VidaNoturnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function VidaNoturnaComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "roteiros-prontos." + i_r1 + ".title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "roteiros-prontos." + i_r1 + ".content"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "hide-panel-content": a0 }; };
const _c1 = function () { return [1, 2, 3, 4]; };
class VidaNoturnaComponent extends src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["AnimatedComponent"] {
    ngOnInit() {
    }
}
VidaNoturnaComponent.ɵfac = function VidaNoturnaComponent_Factory(t) { return ɵVidaNoturnaComponent_BaseFactory(t || VidaNoturnaComponent); };
VidaNoturnaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VidaNoturnaComponent, selectors: [["app-vida-noturna"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function VidaNoturnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VidaNoturnaComponent_mat_expansion_panel_1_Template, 7, 6, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.transitionComplete));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGEtbm90dXJuYS92aWRhLW5vdHVybmEuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]] } });
const ɵVidaNoturnaComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](VidaNoturnaComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VidaNoturnaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vida-noturna',
                templateUrl: './vida-noturna.component.html',
                styleUrls: ['./vida-noturna.component.scss'],
                animations: [src_app_common_animations__WEBPACK_IMPORTED_MODULE_1__["slideInOut"]],
            }]
    }], null, null); })();


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
const environment = {
    production: false,
    routes: [{}]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/raiadrogasil.com/lgdamy/workspace/damytec/porto-guest-house/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map