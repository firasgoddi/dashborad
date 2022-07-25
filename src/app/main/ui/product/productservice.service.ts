import { Injectable } from '@angular/core';
import { AbstractService } from "app/abstract.service";

import { Observable } from "rxjs";
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Product } from './model/product';
import { category } from '../category/model/category';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService extends AbstractService  {
 body:any;
urlbase="http://104.225.221.31:9100";
  constructor(private _httpClient: HttpClient) { super();}


     /**
     * Get events
     *
     * @returns {Promise<any>}
         */
  addproduct(product:Product,image:any):  Observable<Product> | Promise<any> | any
  {
 
let re:String=
"{\"nameFR\":\""+product.nameFR+"\","
+"\"nameEN\":\""+product.nameEN+"\",";
if(product.descriptionFR!="")re+="\"descriptionFR\":\""+product.descriptionFR+"\",";
if(product.descriptionEN!="")re+="\"descriptionEN\":\""+product.descriptionEN+"\",";
if(product.paletFR!="")re+="\"paletFR\":\""+product.paletFR+"\",";
if(product.paletEN!="")re+="\"paletEN\":\""+product.paletEN+"\",";
if(product.boxpalet)re+="\"boxpalet\":"+product.boxpalet+",";
if(product.netweightpalet)re+="\"netweightpalet\":"+product.netweightpalet+",";
if(product.grosweightpalet)re+="\"grosweightpalet\":"+product.grosweightpalet+",";
if(product.heightpalet)re+="\"heightpalet\":"+product.heightpalet+",";
if(product.palet20)re+="\"palet20\":"+product.palet20+",";
if(product.palet40)re+="\"palet40\":"+product.palet40+",";
if(product.cat!=null)re+="\"category\":{\"id\":"+product.cat+"},"
if(image.id!=null)re+="\"image\":{\"id\":"+image.id+"},";
re+="\"isTop\":1";
re+="}";

console.log(re);
        return  this._httpClient.post(this.urlbase+'/sages/addProduit',re,
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
      this.addproduct(file,response[0]);
      return response;

    })

 }


 /**ajouterprod(file,product:Product){
   
    const data= this.addphoto(file);
    (err)=>{
      console.log("err")  
       console.log(err)
     };
    product.image[0]=data;
    const prod=this.addproduct(product);
 }
  /**
     * Get events
     *
     * @returns {Promise<any>}
         */

 deleteProduct(id):  Observable<Product> | Promise<any> | any
 {
    return this._httpClient.delete(this.urlbase+'/sages/deleteProduit/'+id,this.httpOptions).toPromise()
     .then((response: any) => {
        return response;
     });
 }
 getbyid(id):Observable<Product> | Promise<any> | any
 {
    return this._httpClient.get<Product>(this.urlbase+'/sages/getproduitbyid/'+id,this.httpOptions).toPromise()
     .then((response: any) => {
        return response;
     },
     (err)=>{
      console.log("err")  
       console.log(err)
     });
 }
 updateproduct(id,product:Product):Observable<Product> | Promise<any> | any
 {
   let re:String=
   "{\"nameFR\":\""+product.nameFR+"\","
   +"\"nameEN\":\""+product.nameEN+"\",";
   if(product.descriptionFR!="")re+="\"descriptionFR\":\""+product.descriptionFR+"\",";
   if(product.descriptionEN!="")re+="\"descriptionEN\":\""+product.descriptionEN+"\",";
   if(product.paletFR!="")re+="\"paletFR\":\""+product.paletFR+"\",";
   if(product.paletEN!="")re+="\"paletEN\":\""+product.paletEN+"\",";
   if(product.boxpalet)re+="\"boxpalet\":"+product.boxpalet+",";
   if(product.netweightpalet)re+="\"netweightpalet\":"+product.netweightpalet+",";
   if(product.grosweightpalet)re+="\"grosweightpalet\":"+product.grosweightpalet+",";
   if(product.heightpalet)re+="\"heightpalet\":"+product.heightpalet+",";
   if(product.palet20)re+="\"palet20\":"+product.palet20+",";
   if(product.palet40)re+="\"palet40\":"+product.palet40+",";
   re+="}";
console.log(re)
    return this._httpClient.put<Product>(this.urlbase+'/sages/updateProduit/'+id,re,this.httpOptions).toPromise()
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


        getallproduit():  Observable<Product> | Promise<any> | any
        {
           
              return  this._httpClient.get(this.urlbase+'/sages/getallproduit',this.httpOptions).toPromise()
                    .then((response: any) => {
                    
                       return response;
                    });
        }
        /**
     * Get events
     *
     * @returns {Promise<any>}
         */


        getallcategory():  Observable<category> | Promise<any> | any
        {
           
              return  this._httpClient.get<category>(this.urlbase+'/sages/getallcategory',this.httpOptions).toPromise()
                    .then((response: any) => {
                       return response;
                    });
        }
      }



