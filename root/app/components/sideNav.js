System.register(["@angular/core", "../services/common"], function (exports_1, context_1) {
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
    var core_1, common_1, SideNav;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            SideNav = class SideNav {
                constructor(commonService) {
                    this.commonService = commonService;
                }
                ngAfterViewInit() {
                    $(document).ready(function () {
                        $('#menu').multilevelpushmenu({
                            containersToPush: [$('#router-content')],
                            menuWidth: '200px',
                            menuHeight: '100%',
                            collapsed: true
                        });
                        $('#menu').multilevelpushmenu('option', 'menuHeight', $(document).height());
                        $('#menu').multilevelpushmenu('redraw');
                    });
                    $(window).resize(function () {
                        $('#menu').multilevelpushmenu('option', 'menuHeight', $(document).height());
                        $('#menu').multilevelpushmenu('redraw');
                    });
                    // $(".multilevelpushmenu_wrapper .multilevelpushmenu_inactive").addClass("toggle_top");
                }
                onSideNavToggle() {
                    var menuExpanded = $('#menu').multilevelpushmenu('menuexpanded', $('#menu').multilevelpushmenu('findmenusbytitle', 'Menu').first());
                    if (menuExpanded) {
                        //    $(".multilevelpushmenu_wrapper .multilevelpushmenu_inactive").css({top: ''});
                        $('#menu').multilevelpushmenu('collapse');
                        // $(".multilevelpushmenu_wrapper .multilevelpushmenu_inactive").removeClass("toggle_top");
                        setTimeout(function () {
                            $(".multilevelpushmenu_wrapper .multilevelpushmenu_inactive").css({ top: '' });
                        }, 100);
                        $(".multilevelpushmenu_wrapper .multilevelpushmenu_inactive").css({ top: '' });
                    }
                    else {
                        // $(".multilevelpushmenu_wrapper .multilevelpushmenu_inactive").addClass("toggle_top");
                        $(".multilevelpushmenu_wrapper .multilevelpushmenu_inactive").css({ top: '50px' });
                        $('#menu').multilevelpushmenu('expand');
                    }
                }
                ngOnInit() {
                    this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
                        if (res.hasOwnProperty('option') && res.option === 'onSideNavToggle') {
                            this.onSideNavToggle();
                        }
                    });
                }
                ngOnDestroy() {
                    this.subscription.unsubscribe();
                }
            };
            SideNav = __decorate([
                core_1.Component({
                    selector: 'side-nav',
                    //directives: [ HelloComponent ],
                    templateUrl: './app/templates/side-nav.html'
                }),
                __metadata("design:paramtypes", [common_1.CommonService])
            ], SideNav);
            exports_1("SideNav", SideNav);
        }
    };
});
//# sourceMappingURL=sideNav.js.map