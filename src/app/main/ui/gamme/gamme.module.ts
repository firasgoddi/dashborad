import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatCardModule,MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { GammeComponent } from 'app/main/ui/gamme/gamme.component';
import { AddgammeComponent } from './addgamme/addgamme.component';
import { DeletegammeComponent } from './deletegamme/deletegamme.component';

const routes: Routes = [
    {
        path     : 'Gamme',
        component: GammeComponent
    },
    {
        path     : 'addGamme',
        component: AddgammeComponent
    },
    {
        path     : 'modifierGamme/:id',
        component: DeletegammeComponent
    },
];

@NgModule({
    declarations: [
        GammeComponent,
        AddgammeComponent,
        DeletegammeComponent
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
