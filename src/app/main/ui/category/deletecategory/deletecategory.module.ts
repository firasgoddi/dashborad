import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import {MatCardModule} from '@angular/material/card';

import { DeletecategoryComponent } from 'app/main/ui/category/deletecategory/deletecategory.component';


const routes: Routes = [
    {
        path     : 'deleteCategory',
        component: DeletecategoryComponent
    }
];

@NgModule({
    declarations: [

        DeletecategoryComponent
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
