import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { FormGroup } from '@angular/forms';
import { ProductserviceService } from './productservice.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;

  products:any[]=[];

  id:number;
  constructor(public dialog: MatDialog,private location: Location , public productService:ProductserviceService,public router:Router) {
 
   }

  
  ngOnInit() {
    this.loadproducts();
  
  }
 
  loadproducts(){
    this.productService.getallproduit().then(data =>{
      console.log(data);
      this.products=data;  
  

    console.log(this.products);
   
  })
  }
 
  ondelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.productService.deleteProduct(id);
      
    }
    this.loadproducts();
  }
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(DeleteproductComponent, {
      width: '650px',
      height : '400px'
     
    });
  
    dialogRef.componentInstance.id=id;
console.log(id);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}
