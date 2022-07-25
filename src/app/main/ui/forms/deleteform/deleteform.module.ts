import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatDialog,MatTableModule,MatDatepickerModule, MatFormFieldModule, MatIconModule,MatCardModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';


import { DeleteformComponent } from '../deleteform/deleteform.component';

const routes: Routes = [
    {
        path     : 'deleteForm',
        component: DeleteformComponent
    }
];

@NgModule({
    declarations: [
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
        MatCardModule,
        MatDialog
    ]
})
export class UIAddFormsModule
{
}
