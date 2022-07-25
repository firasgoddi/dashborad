import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatRadioModule,MatTableModule,MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';
import { PrivelegeComponent } from '../privelege/privelege.component';
import { AddprivelegeComponent } from './addprivelege/addprivelege.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [
    {
        path     : 'Privelege',
        component: PrivelegeComponent,
        
    },
    {
        path     : 'addPrivelege',
        component: AddprivelegeComponent,
        
    },
 
];

@NgModule({
    declarations: [
        PrivelegeComponent,
        AddprivelegeComponent,
   
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
        MatCheckboxModule,
        MatRadioModule
    ]
})
export class UIPrivelegeModule
{
}
