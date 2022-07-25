import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";

import { AbstractService } from "../../abstract.service";

import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpRequest } from "@angular/common/http";
import { User } from './users/modal/user';
import { privelege } from '../ui/privelege/model/privelege';


@Injectable({
  providedIn: 'root'
})
export class UsersService extends AbstractService {
  urlbase="http://104.225.221.31:9100";
  constructor( private _httpClient: HttpClient) {
    super();
   }



   /**
     * Get events
     *
     * @returns {Promise<any>}
         */


        getallusers():  Observable<User> | Promise<any> | any
        {
           
              return  this._httpClient.get(this.urlbase+'/sages/getalluser',this.httpOptions).toPromise()
                    .then((response: any) => {
                       return response;
                    });
        }

          /**
     * Get events
     *
     * @returns {Promise<any>}
         */
        addcompte(user:User):  Observable<User> | Promise<any> | any
    {

      let re:String=
      "{\"username\":\""+user.username+"\","
      +"\"password\":\""+user.password+"\","
    
    
      
      +"\"privilege\":{\"id\":"+user.privelege_id+"}}";
       
          return  this._httpClient.post<String>(this.urlbase+'/sages/addUser',re,this.httpOptions).toPromise()
                .then((response: any) => {
                   return response;
                },
                (err)=>{
                  console.log(err);
    } )}

          /**
     * Get events
     *
     * @returns {Promise<any>}
         */


        getallprivelege():  Observable<privelege> | Promise<any> | any
        {
           
              return  this._httpClient.get<privelege>(this.urlbase+'/sages/getallprivilege',this.httpOptions).toPromise()
                    .then((response: any) => {
                    
                       return response;
                    });
        }


        
          /**
     * Get events
     *
     * @returns {Promise<any>}
         */


        delete():  Observable<privelege> | Promise<any> | any
        {
           
              return  this._httpClient.get<privelege>(this.urlbase+'/sages/getallprivilege',this.httpOptions).toPromise()
                    .then((response: any) => {
                    
                       return response;
                    });
        }
    

}
