import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../services/common';
import { Subscription } from 'rxjs/Subscription';
// import $ from 'jquery';
declare var $: any;


@Component({
    selector: 'side-nav',
    //directives: [ HelloComponent ],
    templateUrl: './app/templates/side-nav.html'
})

export class SideNav {
    private subscription: Subscription;

    constructor(private commonService: CommonService) {

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
        this.subscription = this.commonService.notifyObservable$.subscribe(
            (res) => {
                if (res.hasOwnProperty('option') && res.option === 'onSideNavToggle') {

                    this.onSideNavToggle();
                }
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}