import { Component } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { APIService, GlobalData } from '../services/index'

@Component({
    selector: 'projects',
    templateUrl: './app/templates/projects.html'
})

export class Projects {

    constructor(private apiService: APIService, private globalData: GlobalData) { }
    projectName = "";
    projectId = "";
    projectList = [];
    selectedProject = { name: "", _id: "" };

    addProject() {
        this.apiService.addProject(this.projectName);
        this.projectName = "";
        this.apiService.getProject().subscribe(data => { this.projectList = data.projectList });
    }

    ngAfterViewInit() {
        // ngOnInit() {

        this.apiService.getProject().subscribe(data => {
            console.log('data.projectList', data.projectList);
            this.projectList = data.projectList;

            let sPrjt: any = this.globalData.getSelectedProject();
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
        this.apiService.getProject().subscribe(data => { console.log('data.projectList', data.projectList); this.projectList = data.projectList });
    }
}