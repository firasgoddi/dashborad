import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClientdetailmodalComponent } from './clientdetailmodal/clientdetailmodal.component';
import {UsersService} from '../users.service';
import { ClientService } from './client.service';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients:any[]=[];
  constructor(public dialog: MatDialog,private clientService:ClientService ) { }

  ngOnInit() {
 this.loadclients();
  }

  openDialogclient(id:number): void {
   
    const dialogRef = this.dialog.open(ClientdetailmodalComponent, {

      width: '600px',
      height: '500px'
     
    });
    dialogRef.componentInstance.id=id;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  loadclients(){
    this.clientService.getallcompte().then(data =>{
      console.log(data);
      this.clients=data;  
    
    console.log(this.clients);
  })
  }
 
}
