System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Skills;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Skills = class Skills {
                constructor() {
                    this.tabs = [];
                    this.skills = [
                        { name: "Node JS", tag: "language", icon: "./images/skills/nodejs.png" },
                        { name: "Angular JS ( 1 & 2 )", tag: "language", icon: "./images/skills/angularjs.png" },
                        { name: "Core Java", tag: "language", icon: "./images/skills/java.png" },
                        { name: "React JS", tag: "language", icon: "./images/skills/reactjs.png" },
                        { name: "React-Native", tag: "language", icon: "./images/skills/reactjs.png" },
                        { name: "Python", tag: "language", icon: "./images/skills/python.png" },
                        { name: "Android", tag: "language", icon: "./images/skills/android.png" },
                        { name: "Mobility (Native and Cross-Platform)", tag: "language", icon: "./images/skills/mobile.png" },
                        { name: "JavaScript (ES6)", tag: "language", icon: "./images/skills/nodejs.png" },
                        { name: "VBScript", tag: "language", icon: "./images/skills/vb.png" },
                        { name: "Shell Scripting", tag: "language", icon: "./images/skills/shell.png" },
                        { name: "SQL", tag: "language", icon: "./images/skills/sql.png" },
                        { name: "REST", tag: "language", icon: "./images/skills/rest.png" },
                        { name: "API Services", tag: "language", icon: "./images/skills/api.png" },
                        { name: "HTML5", tag: "language", icon: "./images/skills/html5.png" },
                        { name: "CSS", tag: "language", icon: "./images/skills/css.png" },
                        { name: "jQuery", tag: "language", icon: "./images/skills/jquery.png" },
                        { name: "Bootstrap", tag: "language", icon: "./images/skills/bootstrap.png" },
                        { name: "Express JS ", tag: "language", icon: "./images/skills/nodejs.png" },
                        { name: "Apache Tomcat (J2EE)", tag: "language", icon: "./images/skills/tomcat.png" },
                        { name: "Microsoft Azure", tag: "language", icon: "./images/skills/azure.png" },
                        { name: "Heroku", tag: "language", icon: "./images/skills/heroku.png" },
                        { name: "IBM Bluemix", tag: "language", icon: "./images/skills/bluemix.jpg" },
                        { name: "Google FireBase", tag: "language", icon: "./images/skills/firebase2.png" },
                        { name: "AWS (Beginner)", tag: "language", icon: "./images/skills/aws.png" },
                        { name: "MongoDB", tag: "language", icon: "./images/skills/mongodb.png" },
                        { name: "PostgreSQL", tag: "language", icon: "./images/skills/postgresql.png" },
                        { name: "Microsoft SQL Server", tag: "language", icon: "./images/skills/mssql.png" },
                        { name: "Windows", tag: "language", icon: "./images/skills/windows.png" },
                        { name: "Linux/Unix", tag: "language", icon: "./images/skills/linux.png" },
                        { name: "HP-UX", tag: "language", icon: "./images/skills/linux.png" },
                        { name: "Atlassian JIRA", tag: "language", icon: "./images/skills/jira.png" },
                        { name: "Visual Studio Team Services", tag: "language", icon: "./images/skills/visualstudio.png" },
                        { name: "SVN", tag: "language", icon: "./images/skills/svn.png" },
                        { name: "Git", tag: "language", icon: "./images/skills/git.png" },
                        { name: "Bitbucket", tag: "language", icon: "./images/skills/bitbucket.ico" },
                        { name: "Azure Portal", tag: "language", icon: "./images/skills/azure.png" },
                        { name: "Directus CMS", tag: "language", icon: "./images/skills/cms.png" },
                        { name: "Eclipse", tag: "language", icon: "./images/skills/jira.png" },
                        { name: "Visual Studio", tag: "language", icon: "./images/skills/visualstudio.png" },
                        { name: "Visual Studio Code", tag: "language", icon: "./images/skills/bitbucket.ico" },
                        { name: "Android Studio", tag: "language", icon: "./images/skills/svn.png" },
                        { name: "IntelliJ WebStrom", tag: "language", icon: "./images/skills/git.png" },
                    ];
                    for (var i = 1; i < 21; i++) {
                        this.tabs.push({
                            name: "Tab" + i,
                            active: i === 1 ? true : false
                        });
                    }
                    this.tabs = [
                        { name: "All", active: true },
                        { name: "Programming", active: false },
                        { name: "Server", active: false },
                        { name: "Cloud", active: false },
                        { name: "Databases", active: false },
                        { name: "Applications", active: false },
                        { name: "Tools", active: false },
                    ];
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
                    };
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
                        console.log(i);
                        if (this.tabs[i].name == tab.name) {
                            this.tabs[i].active = true;
                        }
                        else {
                            this.tabs[i].active = false;
                        }
                    }
                }
                getStyle(tab) {
                    // alert("asasas");
                    for (var i in this.tabs) {
                        console.log(555555555555555555555555);
                        if (this.tabs[i].name == tab.name) {
                            return "border-bottom-color: #ff00ff;border-bottom-style: solid;";
                        }
                        else {
                            return "border-bottom-color: red;border-bottom-style: solid;";
                        }
                    }
                }
            };
            Skills = __decorate([
                core_1.Component({
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
  border-bottom-color: red;
    border-bottom-style: solid;
        color: #555;
    cursor: default;
    background-color: #fff;
    border: 0px solid #ddd !important; 

}

.bb{
  border-bottom-color: red; 
    border-bottom-style: solid;
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
                }),
                __metadata("design:paramtypes", [])
            ], Skills);
            exports_1("Skills", Skills);
        }
    };
});
//# sourceMappingURL=skills.js.map