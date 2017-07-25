System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/material", "@angular/platform-browser/animations", "./components/index", "./services/index", "@angular/http", "./startup", "hammerjs"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    function startupServiceFactory(startupService) {
        return () => startupService.load();
    }
    exports_1("startupServiceFactory", startupServiceFactory);
    var core_1, platform_browser_1, forms_1, material_1, animations_1, index_1, index_2, http_1, startup_1, AppModule;
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
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (startup_1_1) {
                startup_1 = startup_1_1;
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
                        http_1.HttpModule
                        // , appRoutes
                    ],
                    declarations: [
                        index_1.App, index_1.Portrait, index_1.Resume
                    ],
                    bootstrap: [
                        index_1.App
                    ],
                    providers: [
                        startup_1.StartupService,
                        {
                            // Provider for APP_INITIALIZER
                            provide: core_1.APP_INITIALIZER,
                            useFactory: startupServiceFactory,
                            deps: [startup_1.StartupService],
                            multi: true
                        },
                        index_2.GlobalData,
                        index_2.CommonService,
                        index_2.APIService
                    ]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.modules.js.map