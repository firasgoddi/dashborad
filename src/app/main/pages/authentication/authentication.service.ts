import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { AbstractService } from "app/abstract.service";
import { Auth } from './model/auth';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { UserRegister } from "app/main/pages/authentication/model/userRegister";
import { HttpRequest } from "@angular/common/http";
import { privelege } from "app/main/ui/privelege/model/privelege";
@Injectable()
export class AuthService extends AbstractService
{
    urlbase="http://104.225.221.31:9100";
    constructor(
            private _httpClient: HttpClient
        )
        {
        super();
        }
    /**
     * Get events
     *
     * @returns {Promise<any>}
         */
    authenticate(user:Auth):  Observable<any> | Promise<any> | any
    {
       
        var promise= new Promise((resolve, reject) =>{
            /* missing implementation */
            resolve({
                'user':'admin',
                'password':'password'
            });
          });
        
        return promise;
    }
    
    
    /**
     * Get events
     *
     * @returns {Promise<any>}
     */
    register(user:UserRegister):  Observable<any> | Promise<any> | any
    {
       
          return  this._httpClient.post(this.url+'/es/register',user,this.httpOptions).toPromise()
                .then((response: any) => {
                   return response;
                });
    }
    
    /**
     * Get list Roles
     *
     * @returns {Promise<any>}
     */
    getRoles():  Observable<any> | Promise<any> | any
    {
       
          return  this._httpClient.get(this.url+'/es/getRolesApplication',this.httpOptions).toPromise()
                .then((response: any) => {
                   return response;
                });
    }
    
    getallprivelege():  Observable<privelege> | Promise<any> | any
    {
       
          return  this._httpClient.get<privelege>(this.urlbase+'/sages/getallprivilege',this.httpOptions).toPromise()
                .then((response: any) => {
                
                   return response;
                });
    }

    
     /**
     * Get list Roles
    *
    * @returns {Promise<any>}
    */
    getSpecialityApplication():  Observable<any> | Promise<any> | any
   {
      
         return  this._httpClient.get(this.url+'/es/getSpecialityApplication',this.httpOptions).toPromise()
               .then((response: any) => {
                  return response;
               });
   }
    
    
   uploadPhotoProfile(file) :  Observable<any> | Promise<any> | any
   {
       const data: FormData = new FormData();
   data.append('file', file);
   const newRequest = new HttpRequest('POST', this.url+'/dropboxservice/uploadFile', data, {
   reportProgress: true,
   responseType: 'text'
   });
   return this._httpClient.request(newRequest).toPromise()
   .then((response: any) => {
       return response;
    });
  }
   
   
   updateUserLinks(userLink:any):  Observable<any> | Promise<any> | any
   {
      return this._httpClient.put(this.url+'/es/updateLinkProfile',userLink,this.httpOptions).toPromise()
       .then((response: any) => {
          return response;
       });
   }
   
   
   getUserBySpeciality(speciality:any):  Observable<any> | Promise<any> | any
   {
       
       return this._httpClient.get(this.url+'/es/getUsersBySpecialities/'+speciality,this.httpOptions).toPromise()
       .then((response: any) => {
           return response;
        });
       
   }
   
}