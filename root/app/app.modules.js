System.register(["@angular/core", "@angular/platform-browser", "@angular/platform-browser/animations", "@angular/forms", "@angular/material", "@angular/cdk", "./components/index", "./routes/routes", "./services/index", "@angular/http", "./startup", "./components/skillFilter", "hammerjs"], function (exports_1, context_1) {
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
    var core_1, platform_browser_1, animations_1, forms_1, material_1, cdk_1, index_1, routes_1, index_2, http_1, startup_1, skillFilter_1, AppMaterialModule, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (cdk_1_1) {
                cdk_1 = cdk_1_1;
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
            function (startup_1_1) {
                startup_1 = startup_1_1;
            },
            function (skillFilter_1_1) {
                skillFilter_1 = skillFilter_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            AppMaterialModule = class AppMaterialModule {
            };
            AppMaterialModule = __decorate([
                core_1.NgModule({
                    exports: [
                        cdk_1.CdkTableModule,
                        material_1.MdAutocompleteModule,
                        material_1.MdButtonModule,
                        material_1.MdButtonToggleModule,
                        material_1.MdCardModule,
                        material_1.MdCheckboxModule,
                        material_1.MdChipsModule,
                        material_1.MdCoreModule,
                        material_1.MdDatepickerModule,
                        material_1.MdDialogModule,
                        material_1.MdExpansionModule,
                        material_1.MdGridListModule,
                        material_1.MdIconModule,
                        material_1.MdInputModule,
                        material_1.MdListModule,
                        material_1.MdMenuModule,
                        material_1.MdNativeDateModule,
                        material_1.MdPaginatorModule,
                        material_1.MdProgressBarModule,
                        material_1.MdProgressSpinnerModule,
                        material_1.MdRadioModule,
                        material_1.MdRippleModule,
                        material_1.MdSelectModule,
                        material_1.MdSidenavModule,
                        material_1.MdSliderModule,
                        material_1.MdSlideToggleModule,
                        material_1.MdSnackBarModule,
                        material_1.MdSortModule,
                        material_1.MdTableModule,
                        material_1.MdTabsModule,
                        material_1.MdToolbarModule,
                        material_1.MdTooltipModule,
                    ]
                })
            ], AppMaterialModule);
            exports_1("AppMaterialModule", AppMaterialModule);
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        animations_1.BrowserAnimationsModule,
                        forms_1.FormsModule,
                        material_1.MdInputModule,
                        AppMaterialModule,
                        http_1.HttpModule,
                        routes_1.appRoutes
                    ],
                    declarations: [
                        index_1.App,
                        index_1.Portrait,
                        index_1.Resume,
                        index_1.NavBar,
                        index_1.Home,
                        index_1.Skills,
                        index_1.Certifications,
                        index_1.Experience,
                        index_1.Academy,
                        index_1.Projects,
                        skillFilter_1.SkillFilter
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