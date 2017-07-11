import { Component } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { APIService, GlobalData } from '../services/index'

@Component({
    selector: 'blazer-level',
    templateUrl: './app/templates/blazerLevel.html'
})

export class BlazerLevel {

    constructor(private apiService: APIService, private globalData: GlobalData) { }

    levelList = [
        { "name": " 0→499", "point": "Beginner" },
        { "name": " 500→2499", "point": "Novice ( Your current level )" },
        { "name": " 2500→4999", "point": "Intermediate" },
        { "name": " 5000→7499", "point": "Professional" },
        { "name": " 7500→9999", "point": "Expert" },
        { "name": " 10000→19999", "point": "Master" },
        { "name": " 20000→49999", "point": "Grand Master" },
        { "name": " 50000++", "point": "Enlightened" },
    ];


    // ngAfterViewInit() {
    ngOnInit() {



    }

}