import { Injectable } from '@angular/core';

const siteData = {
    navigation: ["Home", "About"]
};

console.log(siteData);
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
