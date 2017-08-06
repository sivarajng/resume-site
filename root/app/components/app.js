System.register(["@angular/core", "../services/globalData"], function (exports_1, context_1) {
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
    var core_1, globalData_1, App;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (globalData_1_1) {
                globalData_1 = globalData_1_1;
            }
        ],
        execute: function () {
            App = class App {
                constructor(globalData) {
                    this.globalData = globalData;
                    this.showToggle = false;
                    this.social = [
                        { name: 'Facebook', color: 'primary', url: "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com" },
                        { name: 'Twitter', color: 'yellow', url: "https://twitter.com/intent/tweet?url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com&text=Sivaraj%20Nagaraj%20-%20Software%20Engineer" },
                        { name: 'Google+', color: 'warn', url: "https://plus.google.com/share?url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com" },
                        { name: 'LinkedIn', color: '#ffff00', url: "http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com&title=Sivaraj%20Nagaraj%20-%20Software%20Engineer" }
                    ];
                    console.log('globalData ', this.globalData.getResumeData());
                }
                toggleChip() {
                    this.showToggle = !this.showToggle;
                }
                shareChip(name) {
                    alert(name);
                }
            };
            App = __decorate([
                core_1.Component({
                    selector: 'app',
                    templateUrl: './app/templates/app.html',
                    styles: [`
  
  .example-container {
  position: absolute;
right: 20px;
    bottom: 20px;
}
  
  .example-container-chip {
  position: absolute;
right: 20px;
    bottom: 80px;
}

.example-button-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.example-button-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.mat-fab.mat-accent, .mat-mini-fab.mat-accent, .mat-raised-button.mat-accent {
    background-color: #ff0000;
}
  
  `]
                }),
                __metadata("design:paramtypes", [globalData_1.GlobalData])
            ], App);
            exports_1("App", App);
        }
    };
});
//# sourceMappingURL=app.js.map