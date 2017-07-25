import { Injectable } from '@angular/core';
import { StartupService } from '../startup';


@Injectable()
export class GlobalData {


    selectedProject = {};
    resumeData = {}

    constructor(private startupService: StartupService) {
        this.resumeData = this.startupService.getResumeData();
    }


    setSelectedProject(data) {
        this.selectedProject = data;
    }

    getSelectedProject() {
        return this.selectedProject;
    }

    getResumeData() {
        return this.resumeData;
    }
}
