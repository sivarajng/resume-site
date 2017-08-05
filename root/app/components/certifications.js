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
    var core_1, Certifications;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Certifications = class Certifications {
                constructor() {
                    this.tabs = [];
                    this.tagFilter = "";
                    this.certifications = [
                        { name: "IBM Cloud Platform Application Development V1 (Bluemix)", tag: "ibm", icon: "./images/skills/ibm.png" },
                        { name: "IBM Rational Associate Application Developer V8", tag: "ibm", icon: "./images/skills/ibm.png" },
                        { name: "IBM DB2 9 Fundamentals Certification", tag: "ibm", icon: "./images/skills/ibm.png" },
                        { name: "Node JS", tag: "lynda", icon: "./images/skills/lynda.png" },
                        { name: "Node JS", tag: "lynda", icon: "./images/skills/lynda.png" },
                        { name: "Node JS", tag: "lynda", icon: "./images/skills/lynda.png" },
                        { name: "Node JS", tag: "pluralsight", icon: "./images/skills/ps.ico" },
                        { name: "Node JS", tag: "pluralsight", icon: "./images/skills/ps.ico" },
                        { name: "Node JS", tag: "pluralsight", icon: "./images/skills/ps.ico" },
                    ];
                    this.tagFilter = 'all';
                    for (var i = 1; i < 21; i++) {
                        this.tabs.push({
                            name: "Tab" + i,
                            active: i === 1 ? true : false
                        });
                    }
                    this.tabs = [
                        { name: "All", active: true },
                        { name: "IBM", active: false },
                        { name: "Lynda", active: false },
                        { name: "Pluralsight", active: false },
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
                        switch (tab.name) {
                            case 'All':
                                this.tagFilter = 'all';
                                break;
                            case 'IBM':
                                this.tagFilter = 'ibm';
                                break;
                            case 'Lynda':
                                this.tagFilter = 'lynda';
                                break;
                            case 'Pluralsight':
                                this.tagFilter = 'pluralsight';
                                break;
                            default:
                                this.tagFilter = 'all';
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
            Certifications = __decorate([
                core_1.Component({
                    selector: 'certifications',
                    templateUrl: './app/templates/certifications.html',
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
                }),
                __metadata("design:paramtypes", [])
            ], Certifications);
            exports_1("Certifications", Certifications);
        }
    };
});
//# sourceMappingURL=certifications.js.map