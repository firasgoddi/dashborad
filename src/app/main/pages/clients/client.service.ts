import { Injectable } from '@angular/core';

import { Resolve } from "@angular/router";

import { AbstractService } from "../../../abstract.service";

import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpRequest } from "@angular/common/http";
import { Compte } from './modal/clients';
@Injectable({
  providedIn: 'root'
})
export class ClientService extends AbstractService {
  urlbase="http://104.225.221.31:9100";
  constructor(private _httpClient: HttpClient) {
    super();
   }

 /**
     * Get events
     *
     * @returns {Promise<any>}
         */


        getallcompte():  Observable<Compte> | Promise<any> | any
        {
           
              return  this._httpClient.get<Compte>(this.urlbase+'/sages/getallcompte',this.httpOptions).toPromise()
                    .then((response: any) => {
                       return response;
                    });
        }
        get(id:number):Observable<Compte> | Promise<any> | any
        {
           return this._httpClient.get<Compte>(this.urlbase+'/sages/getcomptebyid/'+id,this.httpOptions).toPromise()
            .then((response: any) => {
               return response;
            },
            (err)=>{
             console.log("err")  
              console.log(err)
            });
        }
}
