import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatserviceService } from './chatservice.service';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class  ChatComponent implements OnInit, OnDestroy {
  diss: any;
 
 
  id:number;

  constructor(private chatService:ChatserviceService,private activatedRoute:ActivatedRoute ) {  }
  ngOnInit(): void {
    
    this.chatService.openWebSocket();
    this.getdiscussion();
  }

  ngOnDestroy(): void {
    this.chatService.closeWebSocket();
  }

 // sendMessage(sendForm: NgForm) {
    //const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    //this.chatService.sendMessage(chatMessageDto);
    //sendForm.controls.message.reset();
  //}
  getdiscussion(){
    this.chatService.getDisc().then((response) => {

      console.log(response);
      this.diss=response;
          ;}
      ,
  (err) =>{
    console.log(err)
  })
}



  }
 


  





