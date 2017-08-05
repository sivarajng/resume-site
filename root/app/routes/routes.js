System.register(["@angular/router", "../components/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, index_1, router, appRoutes;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            router = [
                { path: '', redirectTo: 'skills', pathMatch: 'full' },
                { path: 'home', component: index_1.Home },
                { path: 'skills', component: index_1.Skills },
                { path: 'certifications', component: index_1.Certifications },
                { path: 'experience', component: index_1.Experience },
                { path: 'academy', component: index_1.Academy },
                { path: 'projects', component: index_1.Projects },
            ];
            // export const appRoutes: ModuleWithProviders = RouterModule.forRoot(router);
            exports_1("appRoutes", appRoutes = router_1.RouterModule.forRoot(router));
        }
    };
});
//# sourceMappingURL=routes.js.map