import { Component, OnInit } from '@angular/core';
import { category } from '../model/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
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
  constructor(public activatedRoute:ActivatedRoute,public fb: FormBuilder,public categoryService:CategoryService) {  }

  ngOnInit() {
  this.get();
  this.categoryForm.controls['nameEN'].disable();
  this.categoryForm.controls['nameFR'].disable();
  this.categoryForm.controls['descriptionEN'].disable();
  this.categoryForm.controls['descriptionFR'].disable();
  this.categoryForm.controls['harvestperioden'].disable()
    this.categoryForm.controls['harvestperiodfr'].disable();
  this.categoryForm.controls['locationen'].disable();
  this.categoryForm.controls['locationfr'].disable();
  this.categoryForm.controls['statusEN'].disable();
  this.categoryForm.controls['statusFR'].disable();
  this.categoryForm.controls['storageen'].disable();
  this.categoryForm.controls['storagefr'].disable();
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
}