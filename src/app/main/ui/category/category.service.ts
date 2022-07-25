import { Injectable } from '@angular/core';
import { AbstractService } from "app/abstract.service";

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { category } from '../category/model/category';
import { Marque } from '../gamme/modal/gamme';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends AbstractService  {
   urlbase="http://104.225.221.31:9100";
 
  constructor(private _httpClient: HttpClient) {super(); }

  



    /**
     * Get events
     *
     * @returns {Promise<any>}
         */
        addcategory(cat:category):  Observable<category> | Promise<any> | any
        {

         let re:String=
         "{\"nameFR\":\""+cat.nameFR+"\","
         +"\"nameEN\":\""+cat.nameEN+"\","
         if(cat.descriptionFR!="")re+="\"descriptionFR\":\""+cat.descriptionFR+"\",";
         if(cat.descriptionEN!="")re+="\"descriptionEN\":\""+cat.descriptionEN+"\",";
         if(cat.harvestperiodfr!="")re+="\"harvestperiodFR\":\""+cat.harvestperiodfr+"\",";
         if(cat.harvestperioden!="")re+="\"harvestperiodEN\":\""+cat.harvestperioden+"\",";
         if(cat.locationfr!="")re+="\"locationFR\":\""+cat.locationfr+"\",";
         if(cat.locationen!="")re+="\"locationEN\":\""+cat.locationen+"\",";
         if(cat.statusFR!="")re+="\"statusFR\":\""+cat.statusFR+"\",";
         if(cat.statusEN!="")re+="\"statusEN\":\""+cat.statusEN+"\",";
         if(cat.storagefr!="")re+="\"storageFR\":\""+cat.storagefr+"\",";
         if(cat.storageen!="")re+="\"storageEN\":\""+cat.storageen+"\",";
         re+="\"marque\":{\"id\":"+cat.marque_id+"}}";
           
              return  this._httpClient.post(this.urlbase+'/sages/addCategory',re,
              {
               
               headers: new HttpHeaders({ 'Content-Type': 'application/json' })
             }
             ).toPromise()
                    .then((response: any) => {
                       return response;
                    });
        } 

        deletecategory(id):  Observable<category> | Promise<any> | any
        {
           return this._httpClient.delete(this.urlbase+'/sages/deleteCategory/'+id,this.httpOptions).toPromise()
            .then((response: any) => {
               return response;
            });
        }
    
        /**
     * Get events
     *Category:category)
     * @returns {Promise<any>}
         */


        getallcategory():  Observable<category> | Promise<any> | any
        {
           
              return  this._httpClient.get<category>(this.urlbase+'/sages/getallcategory',this.httpOptions).toPromise()
                    .then((response: any) => {
                       return response;
                    });
        }      /**
        * Get events
        *
        * @returns {Promise<any>}
            */
   
   
           getallcat():  Observable<category> | Promise<any> | any
           {
              
                 return  this._httpClient.get<category>(this.urlbase+'/sages/getallcategory',this.httpOptions).toPromise()
                       .then((response: any) => {
                          return response;
                       });
           }
           getallmarque():  Observable<Marque> | Promise<any> | any
           {
              
                 return  this._httpClient.get<Marque>(this.urlbase+'/sages/getallmarque',this.httpOptions).toPromise()
                       .then((response: any) => {
                          return response;
                       });
           }
           getbyid(id):Observable<category> | Promise<any> | any
           {
              return this._httpClient.get<category>(this.urlbase+'/sages/getcategorybyid/'+id,this.httpOptions).toPromise()
               .then((response: any) => {
              
                  return response;
               },
               (err)=>{
                console.log("err")  
                 console.log(err)
               });
           }
           updateCategory(id:number,cat:category):Observable<category> | Promise<any> | any
           {
              
            let re:String=
            "{\"nameFR\":\""+cat.nameFR+"\",";
            if(cat.descriptionFR!="")re+="\"descriptionFR\":\""+cat.descriptionFR+"\",";
            if(cat.descriptionEN!="")re+="\"descriptionEN\":\""+cat.descriptionEN+"\",";
            if(cat.harvestperiodfr!="")re+="\"harvestperiodFR\":\""+cat.harvestperiodfr+"\",";
            if(cat.harvestperioden!="")re+="\"harvestperiodEN\":\""+cat.harvestperioden+"\",";
            if(cat.locationfr!="")re+="\"locationFR\":\""+cat.locationfr+"\",";
            if(cat.locationen!="")re+="\"locationEN\":\""+cat.locationen+"\",";
            if(cat.statusFR!="")re+="\"statusFR\":\""+cat.statusFR+"\",";
            if(cat.statusEN!="")re+="\"statusEN\":\""+cat.statusEN+"\",";
            if(cat.storagefr!="")re+="\"storageFR\":\""+cat.storagefr+"\",";
            if(cat.storageen!="")re+="\"storageEN\":\""+cat.storageen+"\",";
              re+="\"nameEN\":\""+cat.nameEN+"\"}";
          console.log(re);
          console.log(this.urlbase+'/sages/updateCategory/'+id)
              return this._httpClient.put(this.urlbase+'/sages/updateCategory/'+id,re,this.httpOptions).toPromise()
               .then((response: any) => {
                 
                  return response;
               },
               (err)=>{
                console.log("err")  
                 console.log(err)
               });
           }
}
