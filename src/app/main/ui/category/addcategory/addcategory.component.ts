import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {
  marque:[]=[];
  categoryForm: FormGroup = new FormGroup({
  
   
    nameEN: new FormControl('', [Validators.required ]),
    nameFR: new FormControl('', [Validators.required ]),
    descriptionEN : new FormControl('', ),
    descriptionFR : new FormControl('', ),
    harvestperioden : new FormControl('', ),
    harvestperiodfr : new FormControl('', ),
    locationen : new FormControl('', ),
    locationfr : new FormControl('', ),
    statusen : new FormControl('', ),
    statusfr : new FormControl('', ),
    storageen : new FormControl('', ),
    storagefr: new FormControl('', ),
    marque_id : new FormControl('', [Validators.required ]),
  });

  constructor(public categoryService:CategoryService,public router:Router) { }

  ngOnInit() {
    this.loadmarque();
  }
  submitForm() 
  {
    
    this.categoryService.addcategory(this.categoryForm.value);
    console.log(this.categoryForm.value);
    //this.router.navigate(['/ui/Category']);
    //console.log(this.uploadForm.value);
  }
  loadmarque(){
    this.categoryService.getallmarque().then(data =>{
      console.log(data);
      this.marque=data;  
    
    console.log(this.marque);
  })
  }
}
