import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './app/templates/experience.html',
  styleUrls: ['card.css'],
  styles: [`
  .container {
	border:0px solid #000;
	padding:20px;
	overflow:hidden;
	height:100%;
	}
.container span {
	display:inline-block;
	*float:left;
	}
  
  
  `]
})

export class Experience {

  experiences = [
    {
      designation: "Senior Engineer",
      company: "Brillio",
      location: "Bengaluru",
      from: "Mar-2017",
      to: "Present",
      summary: [
        "Working as a MEAN Stack (Node, Angular, MongoDB, Express) Developer by designing and developing both Frontend and Backend modules as well as developing API Services."
        , "Managing a team of four peoples and experienced in deploying Cloud Solutions like Microsoft Azure, Heroku and IBM Bluemix."
        , "Also working in compliance with Agile Methodologies through JIRA and Visual Studio Team Services."
        , "Strong programming Skills in NodeJS (ECMA2016 / ES6 Standard), Core Java, Mobility, Web technologies and Scripting Languages."
        , "Worked on Hybrid Mobile App Developments (Android / iOS) by leveraging high end frameworks like Ionic and React-Native."
      ],
      achievement: [
        "<b>Awarded with “Team Excellence“</b> for Jun’17– a recognition for the Teams that shown high level of performance and quality delivery."
        , "<b>Developed an in-house prototype for Task Tracker portal</b> through cutting edge technologies which has both Server and Client side apps."
      ]
    },

    {
      designation: "Technology Analyst",
      company: "Infosys Ltd.",
      location: "Bengaluru",
      from: "Apr-2015",
      to: "Mar-2017",
      summary: [
        "Worked as a Technology Analyst with good knowledge of HealthCare and Retail Chain business processes."

      ],
      achievement: [
        "<b>Awarded with “Bravo Awards”</b> for Q1 FY’16-This Individual Award is a recognition and appreciation of outstanding performance. The purview of this encompasses the extra mile that employees go in terms of effort, innovation and creativity displayed in their roles and responsibilities."
        , "<b>Designed and Developed an Admin level Dashboard</b> using cutting edge Web and Backend components (MEAN Stack) for Reporting and Frequent command execution on an existing Application Platform."
        , "<b>Worked on a series of Automation Tools and Scripts</b> which lead to a drastic reduction in Manual Efforts and recognized as Client Value-adds."
        , "<b>Performed as an active team player and a self-motivator</b> with excellent communication skills, presentation and interpersonal skills which helped to build productive relationships with colleagues, clients and vendors across all functional and technical disciplines."
      ]
    },

    {
      designation: "Software Engineer",
      company: "SYNTEL Ltd.",
      location: "Pune",
      from: "Dec-2012",
      to: "Apr-2015",
      summary: [
        "Worked as an Analyst Programmer in Healthcare Vertical under Application Development and Support projects."
      ],
      achievement: [
        "<b>Awarded with “SMART“</b> for FY’13– a value award for showing the characteristic to define a problem so as to include its solution or where that is not possible, an approach to the solution."
        , "<b>Designed and developed a first of its kind Mobile App</b> for the Syntel PSM Team on Android platform, which has the features like Online Dashboard and it was most appreciated among the project managers."
      ]
    },




  ]
}