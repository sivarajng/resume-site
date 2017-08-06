import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './app/templates/projects.html',
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

export class Projects {

  projects = [
    {
      name: "Cloud Server and Mobile App for digitizing Dealer activities",
      client: "Leading Car Manufacturer ",
      coreApplications: ["NodeJS, AngularJS, MongoDB, Microsoft Azure, socket.io, Android, iOS, JIRA, SVN"],
      teamSize: 8,
      from: "from",
      to: "to",
      summary: [
        "Project is on designing and developing a Backend Server (on Azure Cloud) for Hybrid Mobile App targeted for Android and iOS devices. The Server enables multiple functionalities that makes the Frontend Mobile Apps to execute various functionalities for the Car dealer’s and made the activities easy for a Leading Car Manufacturer. My role involves designing and developing the Server logics, API services, Chat module by leveraging the socket.io as well as."

      ],
      roles: [
        "Managing requirement gathering, system analysis and finalization of technical / functional specification based on Business Logic and Operations."
        , "	Managing a group of peoples and allocating tasks through JIRA."
        , "	Work on the design and development of the Server Logics and integrate with the Frontend functionalities."
        , "	Coordinating with Clients regularly on Status and taking care of new requirements, providing active resolutions on the challenges raised."

      ]
    },
    {
      name: "Community based E-Commerece platform (Mobile App and API Services) ",
      client: "Leading Pop Culture Toy Producer",
      coreApplications: ["React-Native, ReactJS, NodeJS, Microsoft Azure, Android, iOS, JIRA, Git, Directus CMS, Google FireBase"],
      teamSize: 6,
      from: "from",
      to: "to",
      summary: [
        "The project is on designing and developing a Mobile First App using a very recent technology 'React-Native' and ReactJS as well as developing API services that will be consumed by the Mobile App. The App enables a digital platform for the client and creates a new community based eco-system which also incorporates e-commerce and payment gateways. "

      ],
      roles: [
        "Managing requirement gathering, system analysis and finalization of technical / functional specification based on Business Logic and Operations."
        , "Managing a couple of peoples."
        , "Work on the design and development of the Mobile Application from prototype to development, testing, implementation and Go Live."
        , "Coordinating with Clients regularly on Status and taking care of new requirements, providing active resolutions on the challenges raised."

      ]
    },
    {
      name: "name",
      client: "client",
      coreApplications: ["coreApplications"],
      teamSize: 1,
      from: "from",
      to: "to",
      summary: [
        "summary"

      ],
      roles: [
        "roles"
      ]
    },
    {
      name: "name",
      client: "client",
      coreApplications: ["coreApplications"],
      teamSize: 1,
      from: "from",
      to: "to",
      summary: [
        "summary"

      ],
      roles: [
        "roles"
      ]
    },
    {
      name: "name",
      client: "client",
      coreApplications: ["coreApplications"],
      teamSize: 1,
      from: "from",
      to: "to",
      summary: [
        "summary"

      ],
      roles: [
        "roles"
      ]
    },
  ]
  // projects = [
  //   {
  //     name: "name",
  //     client: "client",
  //     coreApplications: ["coreApplications"],
  //     teamSize: 1,
  //     from: "from",
  //     to: "to",
  //     summary: [
  //       "summary"

  //     ],
  //     roles: [
  //      "roles"
  //     ]
  //   },
  // ]
}