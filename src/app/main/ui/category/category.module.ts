import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import {MatCardModule} from '@angular/material/card';

import { CategoryComponent } from 'app/main/ui/category/category.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { DetailComponent } from './detail/detail.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';

const routes: Routes = [
    {
        path     : 'Category',
        component: CategoryComponent
    },
    {
        path     : 'addCategory',
        component: AddcategoryComponent
    },
    {
        path     : 'detail/:id',
        component: DetailComponent
    },
    {
        path     : 'deleteCategory',
        component: DeletecategoryComponent
    }
];

@NgModule({
    declarations: [
        CategoryComponent,
        AddcategoryComponent,
        DetailComponent,
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
export class UICategoryModule
{
}
