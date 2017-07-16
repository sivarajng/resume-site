System.register(["@angular/platform-browser-dynamic", "@angular/core", "./login.modules"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, login_modules_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_modules_1_1) {
                login_modules_1 = login_modules_1_1;
            }
        ],
        execute: function () {
            core_1.enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(login_modules_1.LoginModule);
        }
    };
});
//# sourceMappingURL=login.boot.js.map