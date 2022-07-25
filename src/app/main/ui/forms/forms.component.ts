import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DeleteformComponent } from './deleteform/deleteform.component';
import { FormService } from './form.service';
@Component({
    selector   : 'forms',
    templateUrl: './forms.component.html',
    styleUrls  : ['./forms.component.scss']
})
export class FormsComponent implements OnInit
{
   activity:[]=[];
   id:number;
    constructor(public dialog: MatDialog,public activityService:FormService)
    {}


   
    ngOnInit(): void{
      this.loadActivity()
    }
   
    open(): void {
        const dialogRef = this.dialog.open(DeleteformComponent, {
          width: '500px',
          height: '150px'
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
         
        });
      }
      loadActivity(){
        this.activityService.getallactivity().then(data =>{
          console.log(data);
          this.activity=data;  
        
        console.log(this.activity);
      })
      }
    Ondelete(id:number){
   if (confirm('Are you sure to delete this record ?') == true) {
      this.activityService.deleteActivity(id);
      
    }
    this.loadActivity();
    }
}
