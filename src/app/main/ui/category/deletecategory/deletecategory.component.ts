import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { category } from '../model/category';

@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.scss']
})
export class DeletecategoryComponent implements OnInit {
  Category:category;
  id: number;
  categoryForm: FormGroup = new FormGroup({
  
   
    nameEN: new FormControl('', [Validators.required ]),
    nameFR: new FormControl('', [Validators.required ]),
    descriptionEN : new FormControl('', [Validators.required ]),
    descriptionFR : new FormControl('', [Validators.required ]),
    harvestperioden : new FormControl('', [Validators.required ]),
    harvestperiodfr : new FormControl('', [Validators.required ]),
    locationen : new FormControl('', [Validators.required ]),
    locationfr : new FormControl('', [Validators.required ]),
    statusEN : new FormControl('', [Validators.required ]),
    statusFR : new FormControl('', [Validators.required ]),
    storageen : new FormControl('', [Validators.required ]),
    storagefr: new FormControl('', [Validators.required ]),
    marque_id : new FormControl('', [Validators.required ]),
  });
  constructor(public dialog: MatDialog,public activatedRoute:ActivatedRoute,public categoryService:CategoryService) { }

  ngOnInit() {
    this.get();
  }

  get(){

  
    this.activatedRoute.params.subscribe((params)=>{
  this.categoryService.getbyid(this.id).then((data:any)=>{
    this.Category=data;
    console.log(data);
    this.categoryForm.controls['nameEN'].setValue(data.nameEN);
    this.categoryForm.controls['nameFR'].setValue(data.nameFR);
    this.categoryForm.controls['descriptionEN'].setValue(data.descriptionEN);
    this.categoryForm.controls['descriptionFR'].setValue(data.descriptionFR);
    this.categoryForm.controls['harvestperioden'].setValue(data.nameEN);
    this.categoryForm.controls['harvestperiodfr'].setValue(data.nameFR);
    this.categoryForm.controls['locationen'].setValue(data.descriptionEN);
    this.categoryForm.controls['locationfr'].setValue(data.descriptionFR);
    this.categoryForm.controls['statusEN'].setValue(data.statusEN);
    this.categoryForm.controls['statusFR'].setValue(data.statusFR);
    this.categoryForm.controls['storageen'].setValue(data.storageEN);
    this.categoryForm.controls['storagefr'].setValue(data.storageFR);
})
})
 

}
updateForm(){
  this.categoryService.updateCategory(this.id,this.categoryForm.value).then(response => {
  console.log(response);
})
}

}
