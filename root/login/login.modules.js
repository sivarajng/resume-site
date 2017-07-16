System.register(["@angular/core", "@angular/platform-browser", "@angular/material", "@angular/platform-browser/animations", "./component.login"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, material_1, animations_1, component_login_1, LoginModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            },
            function (component_login_1_1) {
                component_login_1 = component_login_1_1;
            }
        ],
        execute: function () {
            LoginModule = class LoginModule {
            };
            LoginModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule, material_1.MdInputModule, material_1.MaterialModule, material_1.MdNativeDateModule
                    ],
                    declarations: [
                        component_login_1.LoginComponent
                    ],
                    bootstrap: [
                        component_login_1.LoginComponent
                    ],
                })
            ], LoginModule);
            exports_1("LoginModule", LoginModule);
        }
    };
});
//# sourceMappingURL=login.modules.js.map