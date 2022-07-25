import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatTableModule,MatDatepickerModule, MatFormFieldModule, MatIconModule,MatCardModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';

import { DeleteproductComponent } from '../deleteproduct/deleteproduct.component';



const routes: Routes = [
    {
        path     : 'deleteProduct',
        component: DeleteproductComponent,
        
    },
 
];

@NgModule({
    declarations: [
      
        DeleteproductComponent
   
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
export class UIDeleteProductModule
{
}
