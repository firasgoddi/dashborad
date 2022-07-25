import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { AbstractService } from "app/abstract.service";

import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { UserRegister } from "app/main/pages/authentication/model/userRegister";
import { HttpRequest } from "@angular/common/http";
import { Projet } from "./projets/model/projet";

@Injectable({
  providedIn: 'root'
})
export class ProjetsService extends AbstractService {

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
        addprojet(projet:Projet):  Observable<Projet> | Promise<any> | any
    {
       
          return  this._httpClient.post<Projet>(this.url+'/administrateur/addProjet',projet,this.httpOptions).toPromise()
                .then((response: any) => {
                   return response;
                });
    }  
    getallprojets():  Observable<Projet> | Promise<any> | any
    {
       
          return  this._httpClient.get<Projet>(this.url+'/administrateur/getallprojet',this.httpOptions).toPromise()
                .then((response: any) => {
                   return response;
                });
    }
    updateProjet(id,Projet):  Observable<Projet> | Promise<any> | any
    {
       return this._httpClient.put(this.url+'/administrateur/EditProjet/'+id,Projet,this.httpOptions).toPromise()
        .then((response: any) => {
           return response;
        });
    }
    getprojet(id):  Observable<Projet> | Promise<any> | any
    {
       
          return  this._httpClient.get<Projet>(this.url+'/administrateur/getprojet/'+id,this.httpOptions).toPromise()
                .then((response: any) => {
                   return response;
                });
    }

    deleteProjet(id):  Observable<Projet> | Promise<any> | any
    {
       return this._httpClient.delete(this.url+'/administrateur/deleteProjet/'+id,this.httpOptions).toPromise()
        .then((response: any) => {
           return response;
        });
    }
     
}
