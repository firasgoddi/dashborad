import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  product:Product;
  id: number;
 
  constructor(public dialog: MatDialog,public fb: FormBuilder,private activatedRoute:ActivatedRoute,public productService:ProductserviceService,private router: Router) {
 
   }
   
   

  ngOnInit() {
    this.get();
     
    }

get(){
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    
      this.productService.getbyid(this.id).then((response) => {
        console.log(response);
        
        this.product = response;
      
        
        ;}
        ,
    (err) =>{
      console.log(err)
    })
  //   this.productService.getbyid("2").subscribe(response => {
  //     console.log(response);
  //     this.product = response;}
  //     ,
  // (err) =>{
  //   console.log(err)
  // })
}
}