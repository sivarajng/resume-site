import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './app/templates/experience.html',
  styleUrls: ['card.css']
})

export class Experience {

  experiences = [
    {
      designation: "Senior Engineer",
      company: "Brillio",
      location: "Bengaluru",
      from: "Mar 2017",
      to: "Mar 2017",
      summary: [
        "Working as a MEAN Stack (Node, Angular, MongoDB, Express) Developer by designing and developing both Frontend and Backend modules as well as developing API Services."
        , "Managing a team of four peoples and experienced in deploying Cloud Solutions like Microsoft Azure, Heroku and IBM Bluemix."
        , "Also working in compliance with Agile Methodologies through JIRA and Visual Studio Team Services."
        , "Strong programming Skills in NodeJS (ECMA2016 / ES6 Standard), Core Java, Mobility, Web technologies and Scripting Languages."
        , "Worked on Hybrid Mobile App Developments (Android / iOS) by leveraging high end frameworks like Ionic and React-Native."
      ],
      achievement: [
        "<b>Awarded with “Team Excellence“ for Jun’17</b>– a recognition for the Teams that shown high level of performance and quality delivery."
        , "Developed an in-house prototype for Task Tracker portal through cutting edge technologies which has both Server and Client side apps."
      ]
    },




  ]
}