import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class StartupService {

    private resumeData: any;

    constructor(private http: Http) { }

    // This is the method you want to call at bootstrap
    // Important: It should return a Promise
    load(): Promise<any> {

        this.resumeData = null;

        return this.http
            .get('/resume')
            .map((res: Response) => res.json())
            .toPromise()
            .then((data: any) => { this.resumeData = data; console.log('APP_INIT', this.resumeData) })
            .catch((err: any) => Promise.resolve());
    }

    getResumeData(): any {
        return this.resumeData;
    }

}