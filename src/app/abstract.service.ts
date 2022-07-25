import { environment } from '../environments/environment';
import { HttpHeaders } from "@angular/common/http";


export class AbstractService{
    
    url : string = environment.backendUrl+':'+environment.backendPort;
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    
    httpOptionsMultipart = {
            headers: new HttpHeaders({
              'Content-Type':  'multipart/form-data'
            })
          };
}