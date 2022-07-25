import { Injectable } from '@angular/core';;
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
import {  User } from '../../pages/users/modal/user';
import { AbstractService } from 'app/abstract.service';
import { HttpClient } from '@angular/common/http';

import {Message} from '../chat/model/message';

@Injectable({
  providedIn: 'root'
})

export class ChatserviceService extends AbstractService  {
  urlbase="http://104.225.221.31:9100";
  url="http://104.225.221.31:9100/addMessage";
  websocket: WebSocket;
  chatMessages: User[] = [];
  constructor(private _httpClient: HttpClient) { 
   super();


  }


  addmsg(msg:Message):  Observable<Message> | Promise<any> | any
  {
 
let re:String=
"{\"sender\":\""+msg.sender+"\",";
if(msg.subject!="")re+="\"subject\":\""+msg.subject+"\",";
if(msg.message!="")re+="\"message\":\""+msg.message+"\",";

re+="}";

console.log(re);
        return  this._httpClient.post(this.urlbase+'/sages/addMessage',re,this.httpOptions
        ).toPromise()
              .then((response: any) => {
               
                 return response;
                
              });
  } 
  
  public openWebSocket(){
    this.websocket = new WebSocket('ws://104.225.221.31:9100/chat');

    this.websocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.websocket.onmessage = (event) => {
      const User = JSON.parse(event.data);
      this.chatMessages.push(User);
    };

    this.websocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(message: Message){
    this.websocket.send(JSON.stringify(Message));
  }

    public closeWebSocket() {
      this.websocket.close();
    }
    getDisc():  Observable<Object> | Promise<any> | any
    {
       
          return  this._httpClient.get<Object>(this.urlbase+'/sages/getalldisscussion',this.httpOptions).toPromise()
                .then((response: any) => {
                   return response;
                });
    }
    getDis():  Observable<Object> | Promise<any> | any
    {
       
          return  this._httpClient.get<Object>(this.urlbase+'/sages/getdis',this.httpOptions).toPromise()
                .then((response: any) => {
                   return response;
                });
    }
    getmessage(id:number):  Observable<Object> | Promise<any> | any
    {
       
          return  this._httpClient.get<Object>(this.urlbase+'/compte/getmessages?mc='+id,this.httpOptions).toPromise()
                .then((response: any) => {
                   return response;
                });
    }

  }
  








