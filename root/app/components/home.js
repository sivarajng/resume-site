System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Home;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Home = class Home {
            };
            Home = __decorate([
                core_1.Component({
                    selector: 'home',
                    templateUrl: './app/templates/home.html',
                    styles: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
                        `  ul { padding-left:20px; list-style:none; }
li { margin-bottom:10px; }
li:before {    
    font-family: 'FontAwesome';
    content: '\\f111';
    color: #3ee6bf;
    margin:0 5px 0 -15px;
}`]
                })
            ], Home);
            exports_1("Home", Home);
        }
    };
});
//# sourceMappingURL=home.js.map