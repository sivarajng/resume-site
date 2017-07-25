System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "rxjs/add/operator/catch"], function (exports_1, context_1) {
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
    var core_1, http_1, StartupService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            }
        ],
        execute: function () {
            StartupService = class StartupService {
                constructor(http) {
                    this.http = http;
                }
                // This is the method you want to call at bootstrap
                // Important: It should return a Promise
                load() {
                    this.resumeData = null;
                    return this.http
                        .get('/resume')
                        .map((res) => res.json())
                        .toPromise()
                        .then((data) => { this.resumeData = data; console.log('APP_INIT', this.resumeData); })
                        .catch((err) => Promise.resolve());
                }
                getResumeData() {
                    return this.resumeData;
                }
            };
            StartupService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], StartupService);
            exports_1("StartupService", StartupService);
        }
    };
});
//# sourceMappingURL=startup.js.map