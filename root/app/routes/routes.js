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
                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                { path: 'dashboard', component: index_1.Dashboard },
                { path: 'tasks', component: index_1.Tasks },
                { path: 'projects', component: index_1.Projects },
                { path: 'blazerLevel', component: index_1.BlazerLevel }
            ];
            exports_1("appRoutes", appRoutes = router_1.RouterModule.forRoot(router));
            // export const appRoutes = RouterModule.forRoot(router); 
        }
    };
});
//# sourceMappingURL=routes.js.map