import { Component } from '@angular/core';
import { Portrait, Resume } from '../components'
import { GlobalData } from '../services/globalData'


@Component({
  selector: 'app',
  templateUrl: './app/templates/app.html',
  styles:[`
  
  .example-container {
  position: absolute;
right: 20px;
    bottom: 20px;
}
  
  .example-container-chip {
  position: absolute;
right: 20px;
    bottom: 80px;
}

.example-button-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.example-button-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.mat-fab.mat-accent, .mat-mini-fab.mat-accent, .mat-raised-button.mat-accent {
    background-color: #ff0000;
}
  
  `]


})

export class App {

  constructor(private globalData: GlobalData) {

    console.log('globalData ', this.globalData.getResumeData())
  }

showToggle = false;

toggleChip(){
this.showToggle = !this.showToggle;
}
 social = [
    { name: 'Facebook', color: 'primary' ,url:"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com"},
    { name: 'Twitter', color: 'yellow' ,url:"https://twitter.com/intent/tweet?url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com&text=Sivaraj%20Nagaraj%20-%20Software%20Engineer"},
    { name: 'Google+', color: 'warn' ,url:"https://plus.google.com/share?url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com"},
    { name: 'LinkedIn', color: '#ffff00' ,url:"http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com&title=Sivaraj%20Nagaraj%20-%20Software%20Engineer"}

  ];

shareChip(name){
  alert(name)
}

}