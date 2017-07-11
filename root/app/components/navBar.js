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
    var core_1, index_1, NavBar;
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
            NavBar = class NavBar {
                constructor(commonService, apiService) {
                    this.commonService = commonService;
                    this.apiService = apiService;
                    this.loggedInUserProfile = {};
                }
                ngOnInit() {
                }
                ngAfterViewInit() {
                    this.apiService.getCurrUser().subscribe(data => { this.loggedInUserProfile = data.currUser; });
                }
                onSideNavToggle() {
                    this.commonService.notifyOther({ option: 'onSideNavToggle', value: 'onSideNavToggle' });
                    this.apiService.getCurrUser().subscribe(data => { this.loggedInUserProfile = data.currUser; console.log('loggedInUserProfile', this.loggedInUserProfile); });
                }
            };
            NavBar = __decorate([
                core_1.Component({
                    selector: 'nav-bar',
                    //directives: [ HelloComponent ],
                    templateUrl: './app/templates/navBar.html'
                }),
                __metadata("design:paramtypes", [index_1.CommonService, index_1.APIService])
            ], NavBar);
            exports_1("NavBar", NavBar);
        }
    };
});
//# sourceMappingURL=navBar.js.map