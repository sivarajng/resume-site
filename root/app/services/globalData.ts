import { Injectable } from '@angular/core';


@Injectable()
export class GlobalData {
    constructor() {

    }

    selectedProject = {};

    setSelectedProject(data) {
        this.selectedProject = data;
    }

    getSelectedProject() {
        return this.selectedProject;
    }
}
