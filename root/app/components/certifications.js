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
                        { name: "Learning Bootstrap 2 ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "1F2E96EF62A1482898F022A033FD60DF", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=1F2E96EF62A1482898F022A033FD60DF" },
                        { name: "Focus on Your Skills ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "32DEE3491A3E4B349614CCE4AEF8B914", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=32DEE3491A3E4B349614CCE4AEF8B914" },
                        { name: "Bootstrap 3 Essential Training ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "1A5D1D958613470E993C81B8BE2FD73F", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=1A5D1D958613470E993C81B8BE2FD73F" },
                        { name: "Learning Node.js ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "6BB52F29A77D491EA226A063DAE86D9B", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=6BB52F29A77D491EA226A063DAE86D9B" },
                        { name: "Learning Visual Studio Team Services ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "12CC3B173EB14DC5B8AE2E3C9077CE97", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=12CC3B173EB14DC5B8AE2E3C9077CE97" },
                        { name: "Visual Studio 2013 for Windows Store Developers ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "95F389FBA674478995CF308669AE9035", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=95F389FBA674478995CF308669AE9035" },
                        { name: "Learning React.js ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "AA8E74B9F16C4D77B1EE2C4C68DBA4D4", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=AA8E74B9F16C4D77B1EE2C4C68DBA4D4" },
                        { name: "React Native: Building Mobile Apps ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "559F58334EA94D78B9FA3287D64AE376", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=559F58334EA94D78B9FA3287D64AE376" },
                        { name: "Reactive Programming in iOS with RxSwift ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "94737F1117EB4601B1969BD42E7E5552", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=94737F1117EB4601B1969BD42E7E5552" },
                        { name: "Building a Mobile App with AngularJS 1 and Ionic ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "0524470E580748769C73C624EA67643A", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=0524470E580748769C73C624EA67643A" },
                        { name: "Learning AngularJS 2 ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "D11A077DB1334046B3E0F24F26804FA9", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=D11A077DB1334046B3E0F24F26804FA9" },
                        { name: "Learning Angular 2 Directives ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "E2854E8E38A34EF78894564C59B27AC8", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=E2854E8E38A34EF78894564C59B27AC8" },
                        { name: "Ionic 2 and AngularFire2: Building Mobile Apps ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "E0B94340A7E6452E80B8575A8161B169", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=E0B94340A7E6452E80B8575A8161B169" },
                        { name: "Learning ECMAScript 6 ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "C032AC77591E4DDCBA42C7B57E2D4A5B", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=C032AC77591E4DDCBA42C7B57E2D4A5B" },
                        { name: "Learning React Native ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "45234589555146D1B3A8039C7858C020", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=45234589555146D1B3A8039C7858C020" },
                        { name: "Learning JIRA Software ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "275CBEDA825C47ECA85BED27F2C1C1CE", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=275CBEDA825C47ECA85BED27F2C1C1CE" },
                        { name: "Learning Redux ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "E1B4ADB8393A4FC09C9273171E6FB239", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=E1B4ADB8393A4FC09C9273171E6FB239" },
                        { name: "Learning Cloud Computing: The Cloud and DevOps ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "2BAE4781D0784909A818F02549741B38", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=2BAE4781D0784909A818F02549741B38" },
                        { name: "Learning Cloud Computing: Cloud Security ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "9A16FE8D641D48C6B6C97313E13A3B9C", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=9A16FE8D641D48C6B6C97313E13A3B9C" },
                        { name: "Microsoft Cloud: Explore Cloud Services ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "4C9E31D0FCB94B34A9B49ADAF0B05FE9", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=4C9E31D0FCB94B34A9B49ADAF0B05FE9" },
                        { name: "Switching to ES6 in Node.js ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "5ABE2D8192304BCF81D88DFC84E31BAF", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=5ABE2D8192304BCF81D88DFC84E31BAF" },
                        { name: "Microsoft Azure for Developers ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "E18D672AD77748CD89B03E7E84A6B05B", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=E18D672AD77748CD89B03E7E84A6B05B" },
                        { name: "Angular 2 Essential Training ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "1815E9F1EF6945309780F2E9F6B609D0", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=1815E9F1EF6945309780F2E9F6B609D0" },
                        { name: "Learning MongoDB ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "1BAD6892812D422C8651C8896C1A9799", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=1BAD6892812D422C8651C8896C1A9799" },
                        { name: "MEAN Stack and MongoDB: Development Techniques ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "6AE1FC0ABECF43EC9DD0A547D69AD9D2", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=6AE1FC0ABECF43EC9DD0A547D69AD9D2" },
                        { name: "Learning Java Lambda Expressions ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "6940D8B65D5141768B246E66B9213A5C", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=6940D8B65D5141768B246E66B9213A5C" },
                        { name: "Python 3 Essential Training ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "F63522E214FC454EB43CC9EA8A7F6BDA", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=F63522E214FC454EB43CC9EA8A7F6BDA" },
                        { name: "Learning Python for Data Science, with Tim Fox and Elephant Scale ", tag: "lynda", icon: "./images/skills/lynda.png", certificateNo: "9C09495508B44EE4BFDD03D6FE13187F", certificateUrl: "https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=9C09495508B44EE4BFDD03D6FE13187F" },
                        { name: "in update", tag: "pluralsight", icon: "./images/skills/ps.ico" }
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