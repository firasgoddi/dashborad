import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.scss']
})
export class DeleteproductComponent implements OnInit {
  
  id: number;
  product:Product;
  productForm: FormGroup ;
  constructor(private activatedRoute:ActivatedRoute,
    private router: Router,public productService:ProductserviceService,public fb: FormBuilder)  { 
      this.productForm=this.fb.group({
        nameFR: [this.productForm.value.nameFR],
        nameEN : new FormControl('', [Validators.required ]),
    descriptionEN : new FormControl('', ),
    descriptionFR : new FormControl('', ),
    netweightpalet : new FormControl('', ),
    heightpalet : new FormControl('', ),
    grosweightpalet : new FormControl('', ),
    boxpalet : new FormControl('', ),
    paletEN : new FormControl('',),
    paletFR: new FormControl('', ),
    palet40 : new FormControl('', ),
    palet20 : new FormControl('', ),
    cat : new FormControl('', [Validators.required ]),
    })
  }
    

  ngOnInit() {
    
    this.get();
  }
 
   get(){
    this.activatedRoute.params.subscribe((params)=>{
      this.productService.getbyid(this.id).then((data:any)=>{
        this.product=data;
        console.log(data);
        this.productForm.controls['nameEN'].setValue(data.nameEN);
        this.productForm.controls['nameFR'].setValue(data.nameFR);
        this.productForm.controls['descriptionEN'].setValue(data.descriptionEN);
        this.productForm.controls['descriptionFR'].setValue(data.descriptionFR);
        this.productForm.controls['netweightpalet'].setValue(data.netweightpalet);
        this.productForm.controls['heightpalet'].setValue(data.heightpalet);
        this.productForm.controls['boxpalet'].setValue(data.boxpalet);
        
        this.productForm.controls['palet20'].setValue(data.palet20);
        this.productForm.controls['palet40'].setValue(data.palet40);
        this.productForm.controls['paletFR'].setValue(data.paletFR);
        this.productForm.controls['paletEN'].setValue(data.paletEN);
        this.productForm.controls['cat'].setValue(data.cat);
    })
    })

}
update(){
  this.productService.updateproduct(this.id,this.product).then(response => {
    this.router.navigate(['/ui/Products']);
})
}
}
