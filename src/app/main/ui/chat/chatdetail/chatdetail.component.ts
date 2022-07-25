import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatserviceService } from '../chatservice.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import { Message } from '../model/message';
import { User } from '../../../pages/users/modal/user';
import * as io from "socket.io-client";
@Component({
  selector: 'app-chatdetail',
  templateUrl: './chatdetail.component.html',
  styleUrls: ['./chatdetail.component.scss']
})
export class ChatdetailComponent implements OnInit {
  id: number;
  user:User;
  text: String;
  selectedConversation: any;
  events: Array<any> = []
  message =new Message();
  messages=[];
  msg: String;
  chatForm: FormGroup ;
  socket = io('http://104.225.221.31:9100/chat');
  constructor(public dialog: MatDialog,private chatService:ChatserviceService,public fb: FormBuilder,private activatedRoute:ActivatedRoute,private router: Router) {
    this.chatForm = this.fb.group({
      
      message: new FormControl('', [Validators.required ]),
      
     
    });



   }

  buildConversationsArray(conversations) {
    let array = [];

    for (let conversation in conversations) {
      array.push(conversations[conversation]);
    }

    return array
  }
  ngOnInit() {
    this.get(this.id);
  }
  get(id :number){
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    
      this.chatService.getmessage(this.id).then((response) => {
    
        this.message=response;
        console.log(response);
        ;}
     
        ,
    (err) =>{
      console.log(err)
    })
}


sendMessage() {
  this.chatService.addmsg(this.chatForm.value).then((result) => {
    this.socket.emit('save-message', result);
  }, (err) => {
    console.log(err);
  });
}
}
