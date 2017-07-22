System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/material", "@angular/platform-browser/animations", "./components/index", "./routes/routes", "./services/index", "@angular/http", "hammerjs"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, material_1, animations_1, index_1, routes_1, index_2, http_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        animations_1.BrowserAnimationsModule,
                        forms_1.FormsModule,
                        material_1.MdInputModule,
                        material_1.MaterialModule,
                        material_1.MdNativeDateModule,
                        routes_1.appRoutes,
                        http_1.HttpModule
                    ],
                    declarations: [
                        index_1.AppComponent,
                        index_1.SideNav,
                        index_1.NavBar,
                        index_1.RouterView,
                        index_1.Dashboard,
                        index_1.Tasks,
                        index_1.Projects,
                        index_1.StatusFilterPipe,
                        index_1.BlazerLevel,
                        index_1.Portrait,
                        index_1.RootContent
                    ],
                    bootstrap: [
                        index_1.AppComponent
                    ],
                    providers: [index_2.CommonService, index_2.APIService, index_2.GlobalData]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.modules.js.map