import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatTableModule,MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';
import { AddprojetComponent } from './addprojet/addprojet.component';
import { ProjetsComponent } from 'app/main/ui/projets/projets.component';


const routes: Routes = [
    {
        path     : 'projets',
        component: ProjetsComponent,
        
    },
    {
        path     : 'addprojet',
        component: AddprojetComponent
    }   
];

@NgModule({
    declarations: [
        ProjetsComponent,
        AddprojetComponent
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
        FormsModule
    ]
})
export class UIProjetsModule
{
}
