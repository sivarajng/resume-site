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
    var core_1, index_1, Projects;
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
            Projects = class Projects {
                constructor(apiService, globalData) {
                    this.apiService = apiService;
                    this.globalData = globalData;
                    this.projectName = "";
                    this.projectId = "";
                    this.projectList = [];
                    this.selectedProject = { name: "", _id: "" };
                }
                addProject() {
                    this.apiService.addProject(this.projectName);
                    this.projectName = "";
                    this.apiService.getProject().subscribe(data => { this.projectList = data.projectList; });
                }
                ngAfterViewInit() {
                    // ngOnInit() {
                    this.apiService.getProject().subscribe(data => {
                        console.log('data.projectList', data.projectList);
                        this.projectList = data.projectList;
                        let sPrjt = this.globalData.getSelectedProject();
                        if (sPrjt.name) {
                            this.selectedProject = { name: sPrjt.name, _id: sPrjt._id };
                        }
                        else {
                            this.globalData.setSelectedProject(this.projectList[0]);
                            this.selectedProject = { name: this.projectList[0].name, _id: this.projectList[0]._id };
                        }
                    });
                }
                deleteProject(projectId) {
                    this.apiService.deleteProject(projectId);
                }
                selectProject(item) {
                    this.globalData.setSelectedProject(item);
                    this.selectedProject = { name: item.name, _id: item._id };
                }
                editProject(item) {
                    this.projectName = item.name;
                    this.projectId = item._id;
                }
                updateProject(item) {
                    this.apiService.updateProject(this.projectId, this.projectName);
                    this.projectName = "";
                    this.projectId = "";
                }
                refresh() {
                    this.apiService.getProject().subscribe(data => { console.log('data.projectList', data.projectList); this.projectList = data.projectList; });
                }
            };
            Projects = __decorate([
                core_1.Component({
                    selector: 'projects',
                    templateUrl: './app/templates/projects.html'
                }),
                __metadata("design:paramtypes", [index_1.APIService, index_1.GlobalData])
            ], Projects);
            exports_1("Projects", Projects);
        }
    };
});
//# sourceMappingURL=projects.js.map