import { Component } from '@angular/core';


@Component({
  selector: 'skills',
  templateUrl: './app/templates/skills.html',
  
  styles: [`
 md-tab-content {
  overflow: auto;
}  
  /* Styles go here */

.wrapper {
    position:relative;
    margin:0 auto;
    overflow:hidden;
	padding:5px;
  	height:50px;
}

.list {
    position:absolute;
    left:0px;
    top:0px;
  	min-width:3000px;
  	margin-left:12px;
    margin-top:0px;
}

.list li{
	display:table-cell;
    position:relative;
    text-align:center;
    cursor:grab;
    cursor:-webkit-grab;
    color:#efefef;
    vertical-align:middle;
}

.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover{
border-bottom-color: #2196F3;
    border-bottom-style: solid;
    border-bottom-width: 5px;
        color: #2196F3 !important; 
    cursor: default;
    background-color: #fff;
    border: 0px solid #ddd !important; 

}

.bb{
 border-bottom-color: #2196F3;
    border-bottom-style: solid;
    border-bottom-width: 5px; 
}

.scroller {
  text-align:center;
  cursor:pointer;
  display:none;
  padding:7px;
  padding-top:11px;
  white-space:no-wrap;
  vertical-align:middle;
  background-color:#fff;
}

.scroller-right{
  float:right;
}

.scroller-left {
  float:left;
}
  `]
})

export class Skills {
  tabs: any[] = [];
  tagFilter: any = "";
  constructor() {
    this.tagFilter = 'all';
    for (var i = 1; i < 21; i++) {
      this.tabs.push({
        name: "Tab" + i,
        active: i === 1 ? true : false
      });
    }
    this.tabs = [
      { name: "All", active: true },
      { name: "Programming", active: false },
      { name: "Mobile", active: false },
      { name: "UI", active: false },
      { name: "Server", active: false },
      { name: "Cloud", active: false },
      { name: "Databases", active: false },
      { name: "Applications", active: false },
      { name: "Tools", active: false },
      { name: "Operating Systems", active: false },
    ]
  }

  ngAfterViewInit() {
    var hidWidth;
    var scrollBarWidths = 40;

    var widthOfList = function () {
      var itemsWidth = 0;
      $('.list li').each(function () {
        var itemWidth = $(this).outerWidth();
        itemsWidth += itemWidth;
      });
      return itemsWidth;
    };

    var widthOfHidden = function () {
      return (($('.wrapper').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
    };

    var getLeftPosi = function () {
      return $('.list').position().left;
    };

    var reAdjust = function () {
      if (($('.wrapper').outerWidth()) < widthOfList()) {
        $('.scroller-right').show();
      }
      else {
        $('.scroller-right').hide();
      }

      if (getLeftPosi() < 0) {
        $('.scroller-left').show();
      }
      else {
        $('.item').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow');
        $('.scroller-left').hide();
      }
    }

    reAdjust();

    $(window).on('resize', function (e) {
      reAdjust();
    });

    $('.scroller-right').click(function () {

      $('.scroller-left').fadeIn('slow');
      $('.scroller-right').fadeOut('slow');

      $('.list').animate({ left: "+=" + widthOfHidden() + "px" }, 'slow', function () {

      });
    });

    $('.scroller-left').click(function () {

      $('.scroller-right').fadeIn('slow');
      $('.scroller-left').fadeOut('slow');

      $('.list').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow', function () {

      });
    });
  }

  aaa(tab) {
    // alert("asasas");
    for (var i in this.tabs) {
      console.log(i)
      if (this.tabs[i].name == tab.name) {
        this.tabs[i].active = true;
      }
      else {
        this.tabs[i].active = false;
      }

      switch (tab.name) {

        case 'All':
          this.tagFilter = 'all';
          break;

        case 'Programming':
          this.tagFilter = 'programming';
          break;

        case 'Server':
          this.tagFilter = 'server';
          break;

        case 'Cloud':
          this.tagFilter = 'cloud';
          break;

        case 'Databases':
          this.tagFilter = 'database';
          break;

        case 'Applications':
          this.tagFilter = 'application';
          break;

        case 'Tools':
          this.tagFilter = 'tool';
          break;

        case 'UI':
          this.tagFilter = 'ui';
          break;

        case 'Mobile':
          this.tagFilter = 'mobile';
          break;

        case 'Operating Systems':
          this.tagFilter = 'os';
          break;

        default:
          this.tagFilter = 'all';

      }
    }
  }

  getStyle(tab) {
    // alert("asasas");
    for (var i in this.tabs) {
      console.log(555555555555555555555555)
      if (this.tabs[i].name == tab.name) {
        return "border-bottom-color: #ff00ff;border-bottom-style: solid;"
      }
      else {
        return "border-bottom-color: red;border-bottom-style: solid;"

      }
    }
  }
  skills = [
    { name: "Node JS", tag: "programming", icon: "./images/skills/nodejs.png" },
    { name: "Angular JS ( 1 & 2 )", tag: "programming", icon: "./images/skills/angularjs.png" },
    { name: "Core Java", tag: "programming", icon: "./images/skills/java.png" },
    { name: "React JS", tag: "programming", icon: "./images/skills/reactjs.png" },
    { name: "React-Native", tag: "programming", icon: "./images/skills/reactjs.png" },
    { name: "Python", tag: "programming", icon: "./images/skills/python.png" },
    { name: "jQuery", tag: "programming", icon: "./images/skills/jquery.png" },
    { name: "Mobility (Native and Cross-Platform)", tag: "programming", icon: "./images/skills/mobile.png" },
    { name: "JavaScript (ES6)", tag: "programming", icon: "./images/skills/nodejs.png" },
    { name: "VBScript", tag: "programming", icon: "./images/skills/vb.png" },
    { name: "Shell Scripting", tag: "programming", icon: "./images/skills/shell.png" },
    { name: "SQL", tag: "programming", icon: "./images/skills/sql.png" },
    { name: "API / REST Services", tag: "programming", icon: "./images/skills/api.png" },

    { name: "HTML5", tag: "ui", icon: "./images/skills/html5.png" },
    { name: "CSS", tag: "ui", icon: "./images/skills/css.png" },
    { name: "Bootstrap", tag: "ui", icon: "./images/skills/bootstrap.png" },
    { name: "Angular", tag: "ui", icon: "./images/skills/angularjs.png" },
    { name: "React", tag: "ui", icon: "./images/skills/reactjs.png" },

    { name: "Express JS ", tag: "server", icon: "./images/skills/nodejs.png" },
    { name: "Apache Tomcat (J2EE)", tag: "server", icon: "./images/skills/tomcat.png" },

    { name: "React-Native", tag: "mobile", icon: "./images/skills/reactjs.png" },
    { name: "Cordova", tag: "mobile", icon: "./images/skills/cordova.png" },
    { name: "Ionic", tag: "mobile", icon: "./images/skills/ionic.png" },
    { name: "Android", tag: "mobile", icon: "./images/skills/android.png" },

    { name: "Microsoft Azure", tag: "cloud", icon: "./images/skills/azure.png" },
    { name: "Heroku", tag: "cloud", icon: "./images/skills/heroku.png" },
    { name: "IBM Bluemix", tag: "cloud", icon: "./images/skills/bluemix.jpg" },
    { name: "Google FireBase", tag: "cloud", icon: "./images/skills/firebase2.png" },
    { name: "AWS (Beginner)", tag: "cloud", icon: "./images/skills/aws.png" },


    { name: "MongoDB", tag: "database", icon: "./images/skills/mongodb.png" },
    { name: "PostgreSQL", tag: "database", icon: "./images/skills/postgresql.png" },
    { name: "Microsoft SQL Server", tag: "database", icon: "./images/skills/mssql.png" },

    { name: "Windows", tag: "os", icon: "./images/skills/windows.png" },
    { name: "Linux/Unix", tag: "os", icon: "./images/skills/linux.png" },
    { name: "HP-UX", tag: "os", icon: "./images/skills/linux.png" },

    { name: "Atlassian JIRA", tag: "tool", icon: "./images/skills/jira.png" },
    { name: "Visual Studio Team Services", tag: "tool", icon: "./images/skills/vsts.png" },
    { name: "SVN", tag: "tool", icon: "./images/skills/svn.png" },
    { name: "Git", tag: "tool", icon: "./images/skills/git.png" },
    { name: "Bitbucket", tag: "tool", icon: "./images/skills/bitbucket.ico" },
    { name: "Azure Portal", tag: "tool", icon: "./images/skills/azure.png" },
    { name: "Directus CMS", tag: "tool", icon: "./images/skills/cms.png" },

    { name: "Eclipse", tag: "application", icon: "./images/skills/eclipse2.png" },
    { name: "Visual Studio", tag: "application", icon: "./images/skills/visualstudio.png" },
    { name: "Visual Studio Code", tag: "application", icon: "./images/skills/visualstudio.png" },
    { name: "Android Studio", tag: "application", icon: "./images/skills/android.png" },
    { name: "IntelliJ WebStrom", tag: "application", icon: "./images/skills/intellij.png" },







  ];


}