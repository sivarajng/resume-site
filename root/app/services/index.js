System.register(["./common", "./api", "./globalData"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (common_1_1) {
                exports_1({
                    "CommonService": common_1_1["CommonService"]
                });
            },
            function (api_1_1) {
                exports_1({
                    "APIService": api_1_1["APIService"]
                });
            },
            function (globalData_1_1) {
                exports_1({
                    "GlobalData": globalData_1_1["GlobalData"]
                });
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map