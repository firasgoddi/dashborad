import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatCardModule,MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { DeletegammeComponent } from '../deletegamme/deletegamme.component';

const routes: Routes = [
    {
        path     : 'deletegamme',
        component: DeletegammeComponent
    }
];

@NgModule({
    declarations: [
        
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
export class UIDeleteGammeModule
{
}
