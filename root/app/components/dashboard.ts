import { Component } from '@angular/core';
import { APIService, GlobalData } from '../services/index'
@Component({
    selector: 'dashboard',
    templateUrl: './app/templates/dashboard.html'
})

export class Dashboard {



    constructor(private apiService: APIService, private globalData: GlobalData) { }
    projectCount = 0;
    taskCount = 0;
    openCount = 0;
    inprogressCount = 0;
    completedCount = 0;
    projectList = [];



    ngAfterViewInit() {
        // ngOnInit() {

        this.apiService.getProject().subscribe(data => {
            console.log('data.projectList', data.projectList);
            this.projectCount = data.projectList.length;
            this.projectList = data.projectList;

            let sPrjt: any = this.globalData.getSelectedProject();
            if (sPrjt.name) {

            }
            else {
                this.globalData.setSelectedProject(this.projectList[0]);
            }
        });

        this.apiService.getTaskAll().subscribe(data => {
            console.log('data.projectList', data.projectList);

            this.taskCount = data.taskList.length;

            this.openCount = data.taskList.filter(item => item.status == 'Open').length;
            this.inprogressCount = data.taskList.filter(item => item.status == 'In progress').length;
            this.completedCount = data.taskList.filter(item => item.status == 'Completed').length;




        });

    }


}