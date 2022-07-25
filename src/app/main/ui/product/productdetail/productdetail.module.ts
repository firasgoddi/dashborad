import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatTableModule,MatDatepickerModule, MatFormFieldModule, MatIconModule,MatCardModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';

import { ProductdetailComponent } from '../productdetail/productdetail.component';



const routes: Routes = [
   
];

@NgModule({
    declarations: [
      
        ProductdetailComponent
   
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
        MatCardModule
    ]
})
export class UIProductDetailModule
{
}
