System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/toPromise"], function (exports_1, context_1) {
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
    var core_1, http_1, APIService, _a;
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
            }
        ],
        execute: function () {
            APIService = class APIService {
                // baseUrl = "https://taskimon.herokuapp.com";
                constructor(http) {
                    this.http = http;
                    this.baseUrl = "";
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                    this.urlParams = new http_1.URLSearchParams();
                    this.formData = "";
                    this.body = new FormData();
                }
                getCurrUser() {
                    return this.http.get(this.baseUrl + '/api/1/users/currUser').map((res) => {
                        return res.json();
                    });
                }
                getAllUser() {
                    return this.http.get(this.baseUrl + '/api/1/users/list').map((res) => {
                        return res.json();
                    });
                }
                findUser(userNameContains) {
                    return this.http.get(this.baseUrl + '/api/1/users/find?userNameContains=' + userNameContains).map((res) => {
                        return res.json();
                    });
                }
                getProject() {
                    return this.http.get(this.baseUrl + '/api/1/projects/list').map((res) => {
                        return res.json();
                    });
                }
                addProject(data) {
                    this.formData = "projectName=" + data;
                    this.body.append('projectName', data);
                    // this.urlParams.append('projectName', data);
                    this.urlParams.set('projectName', data);
                    this.http.post(this.baseUrl + '/api/1/projects/add', this.urlParams, this.options)
                        .toPromise()
                        .then(response => response.json())
                        .catch();
                }
                updateProject(projectId, projectName) {
                    this.urlParams.set('projectId', projectId);
                    this.urlParams.set('projectName', projectName);
                    this.http.post(this.baseUrl + '/api/1/projects/update', this.urlParams, this.options)
                        .toPromise()
                        .then(response => response.json())
                        .catch();
                }
                deleteProject(data) {
                    this.urlParams.set('projectId', data);
                    this.http.post(this.baseUrl + '/api/1/projects/delete', this.urlParams, this.options)
                        .toPromise()
                        .then(response => response.json())
                        .catch();
                }
                deleteTask(taskId) {
                    this.urlParams.set('taskId', taskId);
                    this.http.post(this.baseUrl + '/api/1/tasks/delete', this.urlParams, this.options)
                        .toPromise()
                        .then(response => response.json())
                        .catch();
                }
                getTask(projectId) {
                    this.urlParams.set('projectId', projectId);
                    // this.http.post(this.baseUrl+'/api/1/tasks/list', this.urlParams, this.options)
                    //     .toPromise()
                    //     .then(response => response.json())
                    //     .catch();
                    return this.http.get(this.baseUrl + '/api/1/tasks/list?projectId=' + projectId).map((res) => {
                        return res.json();
                    });
                }
                getTaskAll() {
                    return this.http.get(this.baseUrl + '/api/1/tasks/listAll').map((res) => {
                        return res.json();
                    });
                }
                addTask(taskSummary, taskStatus, taskAssigneeId, taskAssignee, projectId) {
                    this.urlParams.set('taskSummary', taskSummary);
                    this.urlParams.set('taskStatus', taskStatus);
                    this.urlParams.set('taskAssigneeId', taskAssigneeId);
                    this.urlParams.set('taskAssignee', taskAssignee);
                    this.urlParams.set('projectId', projectId);
                    this.http.post(this.baseUrl + '/api/1/tasks/add', this.urlParams, this.options)
                        .toPromise()
                        .then(response => response.json())
                        .catch();
                    // this.http.post(this.baseUrl+'/api/1/tasks/add', this.urlParams, this.options)
                    //     .toPromise()
                    //     .then(response => {this.getTask()})
                    //     .catch();
                }
                updateTask(taskSummary, taskStatus, taskAssigneeId, taskAssignee, taskId, projectId) {
                    this.urlParams.set('taskSummary', taskSummary);
                    this.urlParams.set('taskStatus', taskStatus);
                    this.urlParams.set('taskAssigneeId', taskAssigneeId);
                    this.urlParams.set('taskAssignee', taskAssignee);
                    this.urlParams.set('taskId', taskId);
                    this.urlParams.set('projectId', projectId);
                    this.http.post(this.baseUrl + '/api/1/tasks/update', this.urlParams, this.options)
                        .toPromise()
                        .then(response => response.json())
                        .catch();
                }
            };
            APIService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
            ], APIService);
            exports_1("APIService", APIService);
        }
    };
});
//# sourceMappingURL=api.js.map