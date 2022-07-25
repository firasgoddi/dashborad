import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatTableModule,MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatRadioModule} from '@angular/material/radio';
import { AddprivelegeComponent } from '../addprivelege/addprivelege.component';



const routes: Routes = [
    {
        path     : 'addPrivelege',
        component: AddprivelegeComponent,
        
    },
 
];

@NgModule({
    declarations: [
        
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
        MatRadioModule
    ]
})
export class UIPrivelegeModule
{
}
