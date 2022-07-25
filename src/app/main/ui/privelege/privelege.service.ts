import { Injectable } from '@angular/core';

import { AbstractService } from "app/abstract.service";

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { privelege } from './model/privelege';
@Injectable({
  providedIn: 'root'
})
export class PrivelegeService  extends AbstractService{
  urlbase="http://104.225.221.31:9100";
  constructor(private _httpClient: HttpClient) { super();}

  
  addprivelege(priv:privelege):  Observable<privelege> | Promise<any> | any
  {
   
    let re:String=
    "{\"name\":\""+priv.name+"\",";
    re+="\"gestionActivite\":"+priv.gestionActivite+",";
  re+="\"gestionCategory\":"+priv.gestionCategory+",";
 re+="\"gestionCompte\":"+priv.gestionCompte+",";
  re+="\"gestionDisscusion\":"+priv.gestionDisscusion+",";
   re+="\"gestionMarque\":"+priv.gestionMarque+",";
re+="\"gestionUser\":"+priv.gestionUser+",";
   re+="\"gestionProduit\":"+priv.gestionProduit;
    
    re+="}";
    
    console.log(re);
    return  this._httpClient.post(this.urlbase+'/sages/addPrivilege',re,
    {
     
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    ).toPromise()
          .then((response: any) => {
           
             return response;
            
          });
} 
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


        deletePriv(id):  Observable<privelege> | Promise<any> | any
        {
           
              return  this._httpClient.delete<privelege>(this.urlbase+'/sages/deletePrivilege'+id,this.httpOptions).toPromise()
                    .then((response: any) => {
                    
                       return response;
                    });
        }
    

  
}
