import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {
    baseUrl = "";
    // baseUrl = "https://taskimon.herokuapp.com";
    constructor(private http: Http) {

    }

    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    private options = new RequestOptions({ headers: this.headers });
    private urlParams = new URLSearchParams();
    private formData = "";
    private body = new FormData();




    getCurrUser() {
        return this.http.get(this.baseUrl + '/api/1/users/currUser').map(
            (res: Response) => {
                return res.json();
            }

        );
    }
    getAllUser() {
        return this.http.get(this.baseUrl + '/api/1/users/list').map(
            (res: Response) => {
                return res.json();
            }

        );
    }
    findUser(userNameContains) {
        return this.http.get(this.baseUrl + '/api/1/users/find?userNameContains=' + userNameContains).map(
            (res: Response) => {
                return res.json();
            }

        );
    }

    getProject() {
        return this.http.get(this.baseUrl + '/api/1/projects/list').map(
            (res: Response) => {
                return res.json();
            }

        );
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

        return this.http.get(this.baseUrl + '/api/1/tasks/list?projectId=' + projectId).map(
            (res: Response) => {
                return res.json();
            }

        );
    }

    getTaskAll() {
        return this.http.get(this.baseUrl + '/api/1/tasks/listAll').map(
            (res: Response) => {
                return res.json();
            }

        );
    }

    addTask(taskSummary, taskStatus, taskAssigneeId, taskAssignee, projectId) {


        this.urlParams.set('taskSummary', taskSummary);
        this.urlParams.set('taskStatus', taskStatus);
        this.urlParams.set('taskAssigneeId', taskAssigneeId)
        this.urlParams.set('taskAssignee', taskAssignee)
        this.urlParams.set('projectId', projectId)

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
        this.urlParams.set('taskAssigneeId', taskAssigneeId)
        this.urlParams.set('taskAssignee', taskAssignee)
        this.urlParams.set('taskId', taskId)
        this.urlParams.set('projectId', projectId)

        this.http.post(this.baseUrl + '/api/1/tasks/update', this.urlParams, this.options)
            .toPromise()
            .then(response => response.json())
            .catch();

    }

}
