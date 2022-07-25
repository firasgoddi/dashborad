import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../form.service';
import { Activity } from '../modal/activity';

@Component({
  selector: 'app-deleteform',
  templateUrl: './deleteform.component.html',
  styleUrls: ['./deleteform.component.scss']
})
export class DeleteformComponent implements OnInit {
id:number;
activity:Activity;

activityForm:FormGroup = new FormGroup({
  nameFR: new FormControl('', [Validators.required ]),
  nameEN : new FormControl('', [Validators.required ]),
  descriptionEN : new FormControl('', ),
  descriptionFR : new FormControl('', )
  

});

  constructor(public dialog: MatDialog,public fb: FormBuilder,public activityService:FormService,private activatedRoute:ActivatedRoute) { 


  }

  ngOnInit() {
    this.get();
    
      
  }
  get(){
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    
      this.activityService.getbyid(this.id).then((response) => {
        console.log(response);
        
        this.activity = response;

        this.activityForm.get('nameFR').setValue(response.titleFR);
        this.activityForm.get('nameEN').setValue(response.titleEN);
        this.activityForm.get('descriptionEN').setValue(response.descriptionEN);
        this.activityForm.get('descriptionFR').setValue(response.descriptionFR);
           console.log(this.activity);
        ;}
        ,
    (err) =>{
      console.log(err)
    })

  }
  
  updateForm(){
    this.activityService.updateActivity(this.id,this.activity).then(response => {
    console.log(response);
  })
  }

}
