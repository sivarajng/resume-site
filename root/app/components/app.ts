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
    { name: 'Email', color: 'primary' ,url:"mailto:?Subject=Cool%20profile%20of%20Sivaraj%20Nagaraj%2C%20check%20it%20out.&Body=Hey%2C%0A%0AI%20came%20across%20a%20cool%20profile%20of%20Sivaraj%20Nagaraj%2C%20check%20it%20out.%0Ahttp%3A//sivaraj-nagaraj.herokuapp.com"},
    { name: 'Facebook', color: 'primary' ,url:"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com%2F"},
    { name: 'Google+', color: 'warn' ,url:"https://plus.google.com/share?url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com%2F"},
    { name: 'LinkedIn', color: '#ffff00' ,url:"http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com%2F&title=Hey%2C%20I%20came%20across%20a%20cool%20profile%20of%20Sivaraj%20Nagaraj%2C%20check%20it%20out."},
    { name: 'Twitter', color: 'yellow' ,url:"https://twitter.com/intent/tweet?url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com%2F&text=Hey%2C%20I%20came%20across%20a%20cool%20profile%20of%20Sivaraj%20Nagaraj%2C%20check%20it%20out."},

  ];

shareChip(name){
  alert(name)
}

}