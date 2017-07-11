import { Component, Pipe, PipeTransform } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { FormControl } from '@angular/forms';
import { APIService, GlobalData } from '../services/index';

@Component({
    selector: 'tasks',
    templateUrl: './app/templates/tasks.html'
})

export class Tasks {


    ngAfterViewInit() {
        this.selectedProject = this.globalData.getSelectedProject();
        this.apiService.getTask(this.selectedProject._id).subscribe(data => { console.log('data.taskList', data.taskList); this.taskList = data.taskList });
        // this.apiService.getAllUser().subscribe(data=>{this.userFindList = data.userList });
    }

    constructor(private apiService: APIService, private globalData: GlobalData) { }
    selectedProject: any = { _id: null, name: null };
    myControl = new FormControl();
    taskInfo = {};
    taskSummary = "";
    taskStatus = "";
    taskAssignee = "";
    taskAssigneeId = "";
    taskId = "";
    taskList = [];
    statusList = ["Open", "In progress", "Completed"];
    userFindList = [];

    addTask() {
        this.apiService.addTask(this.taskSummary, this.taskStatus, this.taskAssigneeId,this.taskAssignee, this.selectedProject._id);
        this.taskSummary = "";
        this.taskStatus = "";
        this.taskAssignee = "";
        this.taskAssigneeId = "";
        this.apiService.getTask(this.selectedProject._id).subscribe(data => { this.taskList = data.taskList });
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
        this.apiService.updateTask(
            this.taskSummary,
            this.taskStatus,
            this.taskAssigneeId,
            this.taskAssignee,
            this.taskId,
            this.selectedProject._id
        );

        this.taskSummary = "";
        this.taskStatus = "";
        this.taskAssigneeId = "";
        this.taskAssignee = "";
        this.taskId = "";
    }
    refresh() {
        this.apiService.getTask(this.selectedProject._id).subscribe(data => { this.taskList = data.taskList });
    }

    findUser() {
        // alert(JSON.stringify(this.taskAssignee));
        this.apiService.findUser(this.taskAssignee).subscribe(
            data => {
                this.userFindList = data.userFindList;
            }
        );
    }

    selectUser(user) {
        
        this.taskAssignee = user.displayName;
        this.taskAssigneeId = user._id;
    }
}

