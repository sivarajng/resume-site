import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { StartupService } from '../startup';

@Injectable()
export class APIService {

     constructor( private startupService: StartupService) {
         this.startupService = startupService;

         console.log('API ',this.startupService.getResumeData())

    }

      

}
