import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatSnackBarModule,MatCardModule,MatTableModule,MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';

import { AddProductComponent } from '../add-product/add-product.component';
import { MatSnackBar } from '@angular/material';


const routes: Routes = [
    {
        path     : 'addProduct',
        component: AddProductComponent,
        
    },
 
];

@NgModule({
    declarations: [
      
        AddProductComponent
   
    ],
  

    imports     : [
        RouterModule.forChild(routes),
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatTableModule,
        FuseSharedModule,
        FormsModule,
        MatSnackBarModule,
        MatCardModule,
        MatSnackBar
    ]
})
export class UIAddProductModule
{
}
