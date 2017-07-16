import { Component } from '@angular/core';
import { MdInputModule } from '@angular/material';
declare var $: any;
@Component({
  selector: 'login',
  //directives: [ HelloComponent ],
  templateUrl: './login/templates/loginForm.html'


})

export class LoginComponent {

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.carousel').carousel({
        interval: 3000
      })
    });

  }
}