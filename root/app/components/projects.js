System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Projects;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Projects = class Projects {
                constructor() {
                    this.projects = [
                        {
                            name: "Senior Engineer",
                            client: "Brillio",
                            coreApplications: "Bengaluru",
                            teamSize: "Mar-2017",
                            from: "Mar-2017",
                            to: "Present",
                            summary: [
                                "Working as a MEAN Stack (Node, Angular, MongoDB, Express) Developer by designing and developing both Frontend and Backend modules as well as developing API Services.",
                                "Managing a team of four peoples and experienced in deploying Cloud Solutions like Microsoft Azure, Heroku and IBM Bluemix.",
                                "Also working in compliance with Agile Methodologies through JIRA and Visual Studio Team Services.",
                                "Strong programming Skills in NodeJS (ECMA2016 / ES6 Standard), Core Java, Mobility, Web technologies and Scripting Languages.",
                                "Worked on Hybrid Mobile App Developments (Android / iOS) by leveraging high end frameworks like Ionic and React-Native."
                            ],
                            roles: [
                                "<b>Awarded with “Team Excellence“</b> for Jun’17– a recognition for the Teams that shown high level of performance and quality delivery.",
                                "<b>Developed an in-house prototype for Task Tracker portal</b> through cutting edge technologies which has both Server and Client side apps."
                            ]
                        },
                    ];
                }
            };
            Projects = __decorate([
                core_1.Component({
                    selector: 'projects',
                    templateUrl: './app/templates/projects.html',
                    styleUrls: ['card.css'],
                    styles: [`
  .container {
	border:0px solid #000;
	padding:20px;
	overflow:hidden;
	height:100%;
	}
.container span {
	display:inline-block;
	*float:left;
	}
  
  
  `]
                })
            ], Projects);
            exports_1("Projects", Projects);
        }
    };
});
//# sourceMappingURL=projects.js.map