import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule,MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { FormsComponent } from 'app/main/ui/forms/forms.component';
import { AddformComponent } from './addform/addform.component';
import { DeleteformComponent } from './deleteform/deleteform.component';

const routes: Routes = [
    {
        path     : 'forms',
        component: FormsComponent
    },
    {
        path     : 'addForm',
        component: AddformComponent
    },
    {
        path     : 'deleteForm/:id',
        component: DeleteformComponent
    }   
];

@NgModule({
    declarations: [
        FormsComponent,
        AddformComponent,
        DeleteformComponent
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
export class UIFormsModule
{
}
