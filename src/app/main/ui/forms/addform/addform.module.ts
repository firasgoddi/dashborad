import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule,MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { FormsComponent } from 'app/main/ui/forms/forms.component';
import { AddformComponent } from '../addform/addform.component';

const routes: Routes = [
    {
        path     : 'addForm',
        component: AddformComponent
    }
];

@NgModule({
    declarations: [
        FormsComponent,
        AddformComponent
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
export class UIAddFormsModule
{
}
