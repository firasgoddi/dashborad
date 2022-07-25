import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatTableModule,MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';

import { AddprojetComponent } from './addprojet.component';

const routes: Routes = [
    {
        path     : 'addprojet',
        component: AddprojetComponent
    }
];

@NgModule({
    declarations: [
        AddprojetComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        MatStepperModule,
        MatTableModule,
        FuseSharedModule,
    ]
})
export class UIAddProjetsModule
{
}
