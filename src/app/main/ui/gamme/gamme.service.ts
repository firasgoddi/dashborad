import { Injectable } from '@angular/core';
import { AbstractService } from "app/abstract.service";

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Marque } from './modal/gamme';
@Injectable({
  providedIn: 'root'
})
export class GammeService extends AbstractService {
  urlbase="http://104.225.221.31:9100";
  constructor(private _httpClient: HttpClient ) { 
    super();
  }

     /**
     * Get events
     *
     * @returns {Promise<any>}
         */

getallmarque():  Observable<Marque> | Promise<any> | any
{
   
      return  this._httpClient.get<Marque>(this.urlbase+'/sages/getallmarque',this.httpOptions).toPromise()
            .then((response: any) => {
               return response;
            });
}
        addmarque(product:Marque,image:any):  Observable<Marque> | Promise<any> | any
        {
       
      let re:String=
      "{\"nameFR\":\""+product.nameFR+"\",";
      if(product.descriptionFR!="")re+="\"descriptionFR\":\""+product.descriptionFR+"\",";
      if(product.descriptionEN!="")re+="\"descriptionEN\":\""+product.descriptionEN+"\",";
      if(image.id!=null)re+="\"image\":{\"id\":"+image.id+"},";
      re+="\"nameEN\":\""+product.nameEN+"\"";
      re+="}";
      
      console.log(re);
              return  this._httpClient.post(this.urlbase+'/sages/addMarque',re,
              {
               
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
              }
              ).toPromise()
                    .then((response: any) => {
                     
                       return response;
                      
                    });
        } 
        
        
        //this.urlbase+'/sages/file/upload'
        addphoto(file,y):   Observable<any> | Promise<any> | any
        {
         
         const fd=new FormData();
         fd.append('file',y);
      
         let x=this._httpClient.post(
          this.urlbase+'/sages/file/upload',
            fd
          ).toPromise().then((response: any) => {
            console.log(response[0]);
            this.addmarque(file,response[0]);
            return response;
      
          })
      
       }

       deleteMarque(id):  Observable<Marque> | Promise<any> | any
       {
          return this._httpClient.delete(this.urlbase+'/sages/deleteMarque/'+id,this.httpOptions).toPromise()
           .then((response: any) => {
              return response;
           });
       }
       updateMarque(id:number,marque:Marque):Observable<Marque> | Promise<any> | any
       {
          
        let re:String=
        "{\"nameFR\":\""+marque.nameFR+"\",";
        if(marque.descriptionFR!="")re+="\"descriptionFR\":\""+marque.descriptionFR+"\",";
        if(marque.descriptionEN!="")re+="\"descriptionEN\":\""+marque.descriptionEN+"\",";
          re+="\"nameEN\":\""+marque.nameEN+"\"}";
      console.log(re);
      console.log(this.urlbase+'/sages/updateMarque/'+id)
          return this._httpClient.put(this.urlbase+'/sages/updateMarque/'+id,re,this.httpOptions).toPromise()
           .then((response: any) => {
             
              return response;
           },
           (err)=>{
            console.log("err")  
             console.log(err)
           });
       }

       getbyid(id):Observable<Marque> | Promise<any> | any
       {
          return this._httpClient.get<Marque>(this.urlbase+'/sages/getmarquebyid/'+id,this.httpOptions).toPromise()
           .then((response: any) => {
          
              return response;
           },
           (err)=>{
            console.log("err")  
             console.log(err)
           });
       }



}
