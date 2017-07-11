System.register(["@angular/core", "@angular/forms", "../services/index"], function (exports_1, context_1) {
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
    var core_1, forms_1, index_1, Tasks;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            Tasks = class Tasks {
                constructor(apiService, globalData) {
                    this.apiService = apiService;
                    this.globalData = globalData;
                    this.selectedProject = { _id: null, name: null };
                    this.myControl = new forms_1.FormControl();
                    this.taskInfo = {};
                    this.taskSummary = "";
                    this.taskStatus = "";
                    this.taskAssignee = "";
                    this.taskAssigneeId = "";
                    this.taskId = "";
                    this.taskList = [];
                    this.statusList = ["Open", "In progress", "Completed"];
                    this.userFindList = [];
                }
                ngAfterViewInit() {
                    this.selectedProject = this.globalData.getSelectedProject();
                    this.apiService.getTask(this.selectedProject._id).subscribe(data => { console.log('data.taskList', data.taskList); this.taskList = data.taskList; });
                    // this.apiService.getAllUser().subscribe(data=>{this.userFindList = data.userList });
                }
                addTask() {
                    this.apiService.addTask(this.taskSummary, this.taskStatus, this.taskAssigneeId, this.taskAssignee, this.selectedProject._id);
                    this.taskSummary = "";
                    this.taskStatus = "";
                    this.taskAssignee = "";
                    this.taskAssigneeId = "";
                    this.apiService.getTask(this.selectedProject._id).subscribe(data => { this.taskList = data.taskList; });
                }
                // ngAfterViewInit() {
                ngOnInit() {
                }
                deleteTask(taskId) {
                    this.apiService.deleteTask(taskId);
                }
                editTask(item) {
                    this.taskSummary = item.summary;
                    this.taskStatus = item.status;
                    this.taskAssigneeId = item.assigneeId;
                    this.selectedProject._id = item.projectId;
                    this.taskAssignee = item.assignee;
                    this.taskId = item._id;
                }
                updateTask() {
                    this.apiService.updateTask(this.taskSummary, this.taskStatus, this.taskAssigneeId, this.taskAssignee, this.taskId, this.selectedProject._id);
                    this.taskSummary = "";
                    this.taskStatus = "";
                    this.taskAssigneeId = "";
                    this.taskAssignee = "";
                    this.taskId = "";
                }
                refresh() {
                    this.apiService.getTask(this.selectedProject._id).subscribe(data => { this.taskList = data.taskList; });
                }
                findUser() {
                    // alert(JSON.stringify(this.taskAssignee));
                    this.apiService.findUser(this.taskAssignee).subscribe(data => {
                        this.userFindList = data.userFindList;
                    });
                }
                selectUser(user) {
                    this.taskAssignee = user.displayName;
                    this.taskAssigneeId = user._id;
                }
            };
            Tasks = __decorate([
                core_1.Component({
                    selector: 'tasks',
                    templateUrl: './app/templates/tasks.html'
                }),
                __metadata("design:paramtypes", [index_1.APIService, index_1.GlobalData])
            ], Tasks);
            exports_1("Tasks", Tasks);
        }
    };
});
//# sourceMappingURL=tasks.js.map