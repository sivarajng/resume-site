import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './app/templates/home.html',
  styles: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    `  ul { padding-left:20px; list-style:none; }
li { margin-bottom:10px; }
li:before {    
    font-family: 'FontAwesome';
    content: '\\f111';
    color: #3ee6bf;
    margin:0 5px 0 -15px;
}
.carousel-indicators .active {
    width: 12px;
    height: 12px;
    margin: 0;
    background-color: #00a27d !important;
}

.carousel-indicators li {
border: 1px solid #00a27d !important;
  }


`]
})

export class Home {

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.carousel').carousel({
        interval: 3000
      });

      $('.carousel').carousel('cycle');
    });
  }

}