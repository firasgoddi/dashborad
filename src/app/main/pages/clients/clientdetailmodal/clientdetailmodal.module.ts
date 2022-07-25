import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule,MatToolbarModule, MatIconModule, MatInputModule,  MatCardModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';

import { ClientdetailmodalComponent } from '../clientdetailmodal/clientdetailmodal.component';

const routes = [

];

@NgModule({
    declarations: [
        
        ClientdetailmodalComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        FuseSharedModule,
        FuseCountdownModule
    ]
})
export class ClientdetailmodalModule
{
}
