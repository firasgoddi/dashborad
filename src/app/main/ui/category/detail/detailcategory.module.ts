import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import {MatCardModule} from '@angular/material/card';

import { DetailComponent } from 'app/main/ui/category/detail/detail.component';


const routes: Routes = [
    {
        path     : 'detail',
        component: DetailComponent
    }
];

@NgModule({
    declarations: [

        DetailComponent
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
export class UICategoryDetailModule
{
}
