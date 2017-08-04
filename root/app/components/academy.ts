import { Component } from '@angular/core';

@Component({
  selector: 'academy',
  templateUrl: './app/templates/academy.html',
  styleUrls: ['card.css']
})

export class Academy {

  academy = [
    {
      course: "B.E. (Electronics and Communication Engineering)",
      institute: "Sona College of Technology, Salem.",
      year: 2012,
      score: "87.70 %",
      cgpa: "8.77/10"
    },
    {
      course: "Class 12 (HSC)",
      institute: "The Gugai Hr. Sec. School, Salem.",
      year: 2008,
      score: "93.25 %",
      cgpa: null
    },
    {
      course: "Class 10 (SSLC)",
      institute: "The Gugai Hr. Sec. School, Salem.",
      year: 2006,
      score: "89.40 %",
      cgpa: null
    }



  ]
}