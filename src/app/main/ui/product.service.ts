import { Injectable } from '@angular/core';
import { AbstractService } from "app/abstract.service";

import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractService{

  constructor(private _httpClient: HttpClient) {
    super();
   }

   /**
     * Get events
     *
     * @returns {Promise<any>}
         */

         
}
