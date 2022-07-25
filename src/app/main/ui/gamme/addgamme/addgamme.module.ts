import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatCardModule,MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';


import { AddgammeComponent } from '../addgamme/addgamme.component';

const routes: Routes = [
    {
        path     : 'addGamme',
        component: AddgammeComponent
    }
];

@NgModule({
    declarations: [
        
        AddgammeComponent
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
export class UIGammeModule
{
}
