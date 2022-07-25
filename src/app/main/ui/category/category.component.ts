import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CategoryService } from './category.service';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';
import { DetailComponent } from './detail/detail.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categorys:any[]=[];
  constructor(public dialog: MatDialog,public categoryService:CategoryService) { }

  ngOnInit() {
    this.loadcategory();
  }
  loadcategory(){
    this.categoryService.getallcat().then(data =>{
      console.log(data);
      this.categorys=data;  
    
    console.log(this.categorys);
  })
  }
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '600px',
      height : '700px'
     
    });
    dialogRef.componentInstance.id=id;
console.log(id);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  
  openDialog2(id:number): void {
    const dialogRef = this.dialog.open(DeletecategoryComponent, {
      width: '600px',
      height: '700px'
     
    });

    dialogRef.componentInstance.id=id;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  ondelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.categoryService.deletecategory(id);
      this.loadcategory();
    }
   
  }
}
