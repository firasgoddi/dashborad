import { Component, OnInit ,ViewChild} from '@angular/core';
import { bind } from '@angular/core/src/render3';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';
import { ProductserviceService } from '../productservice.service';
import { HttpEventType, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import { ProductComponent } from '../product.component';
import { MatSnackBar,MatSnackBarModule } from '@angular/material';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {
  
  private previousUrl: string;
  imageURL: string;
  product : Product={};
  category :any []=[];
  selectedFile:File=null;
  uploadForm: FormGroup;
  selected:any;
  message : string;
x:any[]=[];
  productForm: FormGroup ;
  y: any;
  durationInSeconds = 5;
  constructor( public fb: FormBuilder, private router: Router,private _snackBar: MatSnackBar, public productService:ProductserviceService,private _httpClient: HttpClient ) {
  
    this.productForm=this.fb.group({
        nameFR: new FormControl('', [Validators.required ]),
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
        avatar: ['']
    })
  }

  ngOnInit() {
    this.loadcategory();
  }
 showPreview(event) {
  const file = (event.target as HTMLInputElement).files[0];
   
  this.productForm.get('avatar').setValue(file);

    // File Preview
  //  const reader = new FileReader();
  //  reader.onload = () => {
  //    this.imageURL = reader.result as string;
 //   }
//    reader.readAsDataURL(file)//
  }

  loadcategory() {
    this.productService.getallcategory().then(data =>{
      console.log(data);
      this.category=data  ;  
    
    console.log(this.category);
    this.selected = this.category.values;
  })}
  
  submitForm() 
  {

    //this.productService.ajouterprod(this.uploadForm.value,this.productForm.value);
    console.log(this.productForm.value);
    
    this.productService.addproduct(this.productForm.value,this.y);
  
  }

  submit(){
   
    let x:any;
    x=this.productForm.get('avatar').value;
    console.log(this.productForm.get('avatar').value);
     this.productService.addphoto(this.productForm.value,x);
     
     this.router.navigate(['/ui/Products'])
     
  
  }

/* onupload(){
    const fd=new FormData();
    fd.append('image',this.productForm.get('avatar').value);
  
  this.productService.addphoto(fd);
    console.log(this.productService.addphoto(fd));
    //this.productService.addproduct(this.productForm.value);
  }
  */
 openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 3000,
 });
  
}


}
