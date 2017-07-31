import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './app/templates/home.html',
  styles:['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  `  ul { padding-left:20px; list-style:none; }
li { margin-bottom:10px; }
li:before {    
    font-family: 'FontAwesome';
    content: '\\f111';
    color: #3ee6bf;
    margin:0 5px 0 -15px;
}`]
})

export class Home {

}