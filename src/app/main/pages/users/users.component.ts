import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserdetailmodalComponent } from '../userdetailmodal/userdetailmodal.component';
import { Router } from "@angular/router";
import { UsersService } from '../users.service';
import { User } from './modal/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any[]=[];
  displayedColumns: string[] = ['id','username','password','actions'];
  dataSource:User;
  constructor(public dialog: MatDialog,public router:Router,public usersService:UsersService) { }

  ngOnInit() {
    this.loadusers();
    
  }
  loadusers(){
    this.usersService.getallusers().then(data =>{
      console.log(data);
      this.users=data;  
    
    console.log(this.users);
  })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserdetailmodalComponent, {
      width: '500px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  delete()
    {
        
        
       
            this.router.navigate(['/pages/Users/deleteUser']);
        
       
    }

}
