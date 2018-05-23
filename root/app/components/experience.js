System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Experience;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Experience = class Experience {
                constructor() {
                    this.experiences = [
                        {
                            designation: "Software Development Engineer",
                            company: "Hike Messenger",
                            location: "Bengaluru",
                            from: "Dec-2017",
                            to: "Present",
                            summary: [
                                "Working as an Mobile App (React Native) and Backend (Node.js) developer by designing and developing both Frontend and Backend modules as well as developing API Services.",
                                "Worked on Multi domain Mobile apps and API services like Food catalogue (Zomato), Book Movie Tickets (Justickets), Cab  Booking (Ola), Content (News/Media) oriented Apps as an extension to the core app.",
                                "Strong programming Skills in JavaScript (ECMA2016 / ES6 Standard), Mobility, Web technologies and Scripting Languages."
                               
                            ],
                            achievement: [
                                "<b>In a short span of time involved, developed and published apps</b> like Online Food catalogue, Movie Ticket Book, Cab Book and optimizations for existing apps was much appreciated by Product Manager."
                                
                            ]
                        },
                        {
                            designation: "Senior Engineer",
                            company: "Brillio",
                            location: "Bengaluru",
                            from: "Mar-2017",
                            to: "Dec-2017",
                            summary: [
                                "Worked as a MEAN Stack (Node, Angular, MongoDB, Express) and React-Native Developer by designing and developing both Frontend and Backend modules as well as developing API Services.",
                                "Managing a team of four peoples and experienced in deploying Cloud Solutions like Microsoft Azure, Heroku and IBM Bluemix.",
                                "Also working in compliance with Agile Methodologies through JIRA and Visual Studio Team Services.",
                                "Strong programming Skills in NodeJS (ECMA2016 / ES6 Standard), Core Java, Mobility, Web technologies and Scripting Languages.",
                                "Worked on Hybrid Mobile App Developments (Android / iOS) by leveraging high end frameworks like Ionic and React-Native."
                            ],
                            achievement: [
                                "<b>Awarded with “Team Excellence“</b> for Jun’17– a recognition for the Teams that shown high level of performance and quality delivery.",
                                "<b>Developed an in-house prototype for Task Tracker portal</b> through cutting edge technologies which has both Server and Client side apps."
                            ]
                        },
                        {
                            designation: "Technology Analyst",
                            company: "Infosys Ltd.",
                            location: "Bengaluru",
                            from: "Apr-2015",
                            to: "Mar-2017",
                            summary: [
                                "Worked as a Technology Analyst with good knowledge of HealthCare and Retail Chain business processes."
                            ],
                            achievement: [
                                "<b>Awarded with “Bravo Awards”</b> for Q1 FY’16-This Individual Award is a recognition and appreciation of outstanding performance. The purview of this encompasses the extra mile that employees go in terms of effort, innovation and creativity displayed in their roles and responsibilities.",
                                "<b>Designed and Developed an Admin level Dashboard</b> using cutting edge Web and Backend components (MEAN Stack) for Reporting and Frequent command execution on an existing Application Platform.",
                                "<b>Worked on a series of Automation Tools and Scripts</b> which lead to a drastic reduction in Manual Efforts and recognized as Client Value-adds.",
                                "<b>Performed as an active team player and a self-motivator</b> with excellent communication skills, presentation and interpersonal skills which helped to build productive relationships with colleagues, clients and vendors across all functional and technical disciplines."
                            ]
                        },
                        {
                            designation: "Software Engineer",
                            company: "SYNTEL Ltd.",
                            location: "Pune",
                            from: "Dec-2012",
                            to: "Apr-2015",
                            summary: [
                                "Worked as an Analyst Programmer in Healthcare Vertical under Application Development and Support projects."
                            ],
                            achievement: [
                                "<b>Awarded with “SMART“</b> for FY’13– a value award for showing the characteristic to define a problem so as to include its solution or where that is not possible, an approach to the solution.",
                                "<b>Designed and developed a first of its kind Mobile App</b> for the Syntel PSM Team on Android platform, which has the features like Online Dashboard and it was most appreciated among the project managers."
                            ]
                        },
                    ];
                }
            };
            Experience = __decorate([
                core_1.Component({
                    selector: 'experience',
                    templateUrl: './app/templates/experience.html',
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
            ], Experience);
            exports_1("Experience", Experience);
        }
    };
});
//# sourceMappingURL=experience.js.map
