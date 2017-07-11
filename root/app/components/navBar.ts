import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService,APIService } from '../services/index';
import { Subscription } from 'rxjs/Subscription';

declare var $: any;

@Component({
  selector: 'nav-bar',
  //directives: [ HelloComponent ],
  templateUrl: './app/templates/navBar.html'


})

export class NavBar {

  constructor(private commonService: CommonService,private  apiService:APIService) {
  }

  loggedInUserProfile = {};

  ngOnInit() {


  }

  ngAfterViewInit() {
  
    this.apiService.getCurrUser().subscribe(data=>{this.loggedInUserProfile =data.currUser });
  }


  onSideNavToggle() {
    this.commonService.notifyOther({ option: 'onSideNavToggle', value: 'onSideNavToggle' });
      this.apiService.getCurrUser().subscribe(data=>{this.loggedInUserProfile = data.currUser;console.log('loggedInUserProfile',this.loggedInUserProfile)});
  }

}