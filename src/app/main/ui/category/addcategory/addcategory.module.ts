import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import {MatCardModule} from '@angular/material/card';

import { AddcategoryComponent } from 'app/main/ui/category/addcategory/addcategory.component';


const routes: Routes = [
    {
        path     : 'addCategory',
        component: AddcategoryComponent
    }
];

@NgModule({
    declarations: [

        AddcategoryComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        FuseSharedModule,
        MatCardModule
    ]
})
export class UIAddCategoryModule
{
}
