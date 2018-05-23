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
                            name: "MicroApps and Content App",
                            client: "",
                            coreApplications: ["React-Native, Redux, Node.JS, MongoDB, Google Cloud Platform"],
                            teamSize: 8,
                            from: "from",
                            to: "to",
                            summary: [
                                "Hike Messenger is an Indian revival of Whatsapp. This project is about designing and developing a React-Native micro apps on top of the Core Platform and also developing Backend Services (on GCP) for the micro apps. We created micro apps and API services like Food catalogue (Zomato), Book Movie Tickets (Justickets), Cab Booking (Ola), etc. from scratch by partnering with respective service vendors and few of them were published to millions of users. Also developing a content (News/Entertainment) oriented app from scratch."
                            ],
                            roles: [
                                "Designing and developing the Micro Apps from scratch. Taken ownership of the App publish pipeline like alpha to production release.",
                                "Implement Analytics service and capture key user events and based on that enhance the app’s user flow.",
                                "Work on the design and development of the Server side logics and integrate with the Mobile App functionalities.",
                                "Contributing for the content app’s data source analysis for Tamil language part and also translation elements for the content app."
                            ]
                        },
                        {
                            name: "Cloud Server and Mobile App for digitizing Dealer activities",
                            client: "Leading Car Manufacturer ",
                            coreApplications: ["NodeJS, AngularJS, MongoDB, Microsoft Azure, socket.io, Android, iOS, JIRA, SVN"],
                            teamSize: 8,
                            from: "from",
                            to: "to",
                            summary: [
                                "Project is on designing and developing a Backend Server (on Azure Cloud) for Hybrid Mobile App targeted for Android and iOS devices. The Server enables multiple functionalities that makes the Frontend Mobile Apps to execute various functionalities for the Car dealer’s and made the activities easy for a Leading Car Manufacturer. My role involves designing and developing the Server logics, API services, Chat module by leveraging the socket.io as well as."
                            ],
                            roles: [
                                "Managing requirement gathering, system analysis and finalization of technical / functional specification based on Business Logic and Operations.",
                                "	Managing a group of peoples and allocating tasks through JIRA.",
                                "	Work on the design and development of the Server Logics and integrate with the Frontend functionalities.",
                                "	Coordinating with Clients regularly on Status and taking care of new requirements, providing active resolutions on the challenges raised."
                            ]
                        },
                        {
                            name: "Community based E-Commerece platform (Mobile App and API Services) ",
                            client: "Leading Pop Culture Toy Producer",
                            coreApplications: ["React-Native, ReactJS, NodeJS, Microsoft Azure, Android, iOS, JIRA, Git, Directus CMS, Google FireBase"],
                            teamSize: 6,
                            from: "from",
                            to: "to",
                            summary: [
                                "The project is on designing and developing a Mobile First App using a very recent technology 'React-Native' and ReactJS as well as developing API services that will be consumed by the Mobile App. The App enables a digital platform for the client and creates a new community based eco-system which also incorporates e-commerce and payment gateways. "
                            ],
                            roles: [
                                "Managing requirement gathering, system analysis and finalization of technical / functional specification based on Business Logic and Operations.",
                                "Managing a couple of peoples.",
                                "Work on the design and development of the Mobile Application from prototype to development, testing, implementation and Go Live.",
                                "Coordinating with Clients regularly on Status and taking care of new requirements, providing active resolutions on the challenges raised."
                            ]
                        },
                        {
                            name: "WebApp and Push Report Solution for a CPG customer",
                            client: "Well reputed Global Company in CPG and Retail Chain",
                            coreApplications: ["Java, AngularJS, Spring, PostgreSQL, Tomcat, Pentaho Business Analytics Server"],
                            teamSize: 6,
                            from: "from",
                            to: "to",
                            summary: [
                                "This is a Web Application with Backend Reporting Module which provides front end UI to view and upload Data to Backend Database in form of Form Data and File uploads. The Backend module involves a Data Extraction and Template Report Generation which will send the Report to end user’s devices on a scheduled basis. The users are from around 10+ Markets around the globe."
                            ],
                            roles: [
                                "Managing requirement gathering, system analysis and finalization of technical / functional specification based on Business Logic and Operations.",
                                "Preparing Requirement and Design Documents.",
                                "Work on the design and development of the Web Application and Push Report Solution from prototype to development, testing, implementation and Go Live.",
                                "Coordinating with Clients regularly on Status and taking care of new requirements, providing active resolutions on the challenges raised."
                            ]
                        },
                        {
                            name: "Reporting Solution for a CPG customer",
                            client: "Well reputed Global Company in CPG and Retail Chain",
                            coreApplications: ["Java, Pentaho Business Analytics, Data Integration, PostgreSQL, Tomcat, Selenium, AngularJS"],
                            teamSize: 15,
                            from: "from",
                            to: "to",
                            summary: [
                                "This is a multi-module project providing Standard and Custom Reporting solutions to Business users which has around 30+ on board Markets around the globe. The Reporting Engine is powered by Pentaho Business Analytics / Data Integration suite which runs on top of 4 PROD and 2 QA Server instances hosted on private Cloud infrastructure. It operates as less or equal to DevOps model."
                            ],
                            roles: [
                                "Designing and implementing Reporting Schemas based on Business Logic and Operations.",
                                "Manage and Perform Periodic Application Upgrades/Patches and Application specific Server Maintenance.",
                                "Perform Functional and Regression testing on Application Server, ETL and Reports.",
                                "Design, Build and Execute ETL Scripts and Flows using Pentaho Data Integration.",
                                "Undertake development and enhancement of custom functions based on Client requirements, deployment and providing support for the Reports and Data.",
                                "Coordinating with Clients around the globe while on boarding new Markets on the platform and providing active resolutions on the issues raised.",
                                "Automating recurring workflows using suitable technologies.",
                                "Being responsible for co-ordination with Internal Team, Testing Team and Product Team in task delivery in terms of timely query resolutions, follow-up and being within the allotted deadline.",
                                "Research and do RCA on the Application Specific issues and come up with a permanent or workaround solutions."
                            ]
                        },
                        {
                            name: "Mobile OPC UA Client for accessing Plant KPI Data",
                            client: "A leading Manufacturing Industry",
                            coreApplications: ["Java, Mobility, Android Studio, OPC UA SDK, OPC UA Server/Client, DeviceAnywhere"],
                            teamSize: 4,
                            from: "from",
                            to: "to",
                            summary: [
                                "The project is on developing, testing and implementing a solution that allows monitoring of various real time KPI’s in Process and Manufacturing Industries by expose the sensor data on Android based Hand held devices using the latest evolving technologies. Thereby, augment the solution by bringing the IIOT and M2M technologies using the Industry open communication standard OPC-UA."
                            ],
                            roles: [
                                "Managing requirement gathering, system analysis and finalization of technical / functional specification.",
                                "Work on the design and development of Android App using OPC UA SDK from prototype to implementation by following Iterative SDLC Model.",
                                "Work on separate modules like Server Authentication, Session Persistence, Graphs and Charts, UI, Subscription management etc. and do Integration.",
                                "Do actual testing and debugging on Broad range on Devices through DeviceAnywhere – Keynote platform and work on the generic defects/bugs.",
                                "Interfacing with Clients for business requirements gathering, providing active resolutions on the concerns/functionality defects raised by clients."
                            ]
                        },
                        {
                            name: "Server/Application Migration and Testing",
                            client: "Well reputed Global Company in CPG and Retail Chain",
                            coreApplications: ["Java, AngularJS, Oracle, Pro*C, MS SQL Server, TFS, MicroFocus, HPQC, Shell Scripting, IBM WebSphere MQ, Visual Studio, SoapUI, HPUX"],
                            teamSize: 5,
                            from: "from",
                            to: "to",
                            summary: [
                                "This was a complete Production Server Migration along with Application Upgrades and involves deep level of testing that includes Functional Testing, Regression Testing, SIT, UAT, End-to- End and Failover Testing. Diverse Applications with different technological platforms from different projects are involved in the migration and testing."
                            ],
                            roles: [
                                "Having regular meetings with clients and vendors to come up with final Testing, Business Validation Plans, Action Items and responding to client queries and new requirements.",
                                "Dealing, preparing and reviewing with Test cases for each application as per the Business requirement and Validation Plan.",
                                "Executing all levels of Testing like Functional, SIT, Regression etc. as per Test Plan and actively work on the resolution for the raised defects. Documenting the Results and uploading same in ALM Tool.",
                                "Rebuilding executables for compatibility with new Server and Application platform.",
                                "Provide complete Hyper-Care and Go-Live support until the New Application/Server is stable.",
                                "Individually handled Application migration and testing on HPUX PA-RISC to Itanium."
                            ]
                        }
                    ];
                    // projects = [
                    //   {
                    //     name: "name",
                    //     client: "client",
                    //     coreApplications: ["coreApplications"],
                    //     teamSize: 1,
                    //     from: "from",
                    //     to: "to",
                    //     summary: [
                    //       "summary"
                    //     ],
                    //     roles: [
                    //      "roles"
                    //     ]
                    //   },
                    // ]
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
