System.register(["@angular/core", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, index_1, BlazerLevel;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            BlazerLevel = class BlazerLevel {
                constructor(apiService, globalData) {
                    this.apiService = apiService;
                    this.globalData = globalData;
                    this.levelList = [
                        { "name": " 0→499", "point": "Beginner" },
                        { "name": " 500→2499", "point": "Novice ( Your current level )" },
                        { "name": " 2500→4999", "point": "Intermediate" },
                        { "name": " 5000→7499", "point": "Professional" },
                        { "name": " 7500→9999", "point": "Expert" },
                        { "name": " 10000→19999", "point": "Master" },
                        { "name": " 20000→49999", "point": "Grand Master" },
                        { "name": " 50000++", "point": "Enlightened" },
                    ];
                }
                // ngAfterViewInit() {
                ngOnInit() {
                }
            };
            BlazerLevel = __decorate([
                core_1.Component({
                    selector: 'blazer-level',
                    templateUrl: './app/templates/blazerLevel.html'
                }),
                __metadata("design:paramtypes", [index_1.APIService, index_1.GlobalData])
            ], BlazerLevel);
            exports_1("BlazerLevel", BlazerLevel);
        }
    };
});
//# sourceMappingURL=blazerLevel.js.map