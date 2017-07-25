import { Component } from '@angular/core';
import { Portrait, Resume } from '../components'
import { GlobalData } from '../services/globalData'


@Component({
  selector: 'app',
  templateUrl: './app/templates/app.html'


})

export class App {

  constructor(private globalData: GlobalData) {

    console.log('globalData ', this.globalData.getResumeData())
  }


}