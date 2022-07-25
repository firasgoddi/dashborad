import { Injectable } from '@angular/core';

import { AbstractService } from "app/abstract.service";

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegister } from "app/main/pages/authentication/model/userRegister";
import { HttpRequest } from "@angular/common/http";
import { Activity } from './modal/activity';
@Injectable({
  providedIn: 'root'
})
export class FormService extends AbstractService{

  constructor(private _httpClient:HttpClient) { super();}

  urlbase="http://104.225.221.31:9100";
  addactivity(activity:Activity,image:any):  Observable<Activity> | Promise<any> | any
  {
 
let re:String=
"{\"titleFR\":\""+activity.nameFR+"\",";
if(activity.descriptionFR!="")re+="\"descriptionFR\":\""+activity.descriptionFR+"\",";
if(activity.descriptionEN!="")re+="\"descriptionEN\":\""+activity.descriptionEN+"\",";
if(image.id!=null)re+="\"image\":{\"id\":"+image.id+"},";
re+="\"titleEN\":\""+activity.nameEN+"\"";
re+="}";

console.log(re);
        return  this._httpClient.post(this.urlbase+'/sages/addActivity',re,
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
      this.addactivity(file,response[0]);
      return response;

    })

 }

   /**
     * Get events
     *
     * @returns {Promise<any>}
         */

 deleteActivity(id):  Observable<Activity> | Promise<any> | any
 {
    return this._httpClient.delete(this.urlbase+'/sages/deleteActivite/'+id,this.httpOptions).toPromise()
     .then((response: any) => {
        return response;
     });
 }
 getbyid(id):Observable<Activity> | Promise<any> | any
 {
    return this._httpClient.get<Activity>(this.urlbase+'/sages/getactivitybyid/'+id,this.httpOptions).toPromise()
     .then((response: any) => {
        return response;
     },
     (err)=>{
      console.log("err")  
       console.log(err)
     });
 }
 updateActivity(id:number,activity:Activity):Observable<Activity> | Promise<any> | any
 {
    
   let re:String=
"{\"titleFR\":\""+activity.nameFR+"\",";
if(activity.descriptionFR!="")re+="\"descriptionFR\":\""+activity.descriptionFR+"\",";
if(activity.descriptionEN!="")re+="\"descriptionEN\":\""+activity.descriptionEN+"\",";
re+="\"titleEN\":\""+activity.nameEN+"\"";
re+="}";

console.log(re);
    return this._httpClient.put(this.urlbase+'/sages/updateActivity/'+id,re,this.httpOptions).toPromise()
     .then((response: any) => {
        return response;
     },
     (err)=>{
      console.log("err")  
       console.log(err)
     });
 }
 /**
     * Get events
     *
     * @returns {Promise<any>}
         */


        getallactivity():  Observable<Activity> | Promise<any> | any
        {
           
              return  this._httpClient.get<Activity>(this.urlbase+'/compte/getallactivitie',this.httpOptions).toPromise()
                    .then((response: any) => {
                       return response;
                    });
        }
        /**
     * Get events
     *
     * @returns {Promise<any>}
         */
        addmark(activity:Activity):  Observable<Activity> | Promise<any> | any
        {
          return  this._httpClient.post<Activity>(this.url+'/sages/addMarque',activity,this.httpOptions).toPromise()
          .then((response: any) => {
           
             return response;
            
          });
}
}
