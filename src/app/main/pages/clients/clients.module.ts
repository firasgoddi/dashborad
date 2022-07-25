import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { MatButtonModule, MatFormFieldModule,MatToolbarModule, MatIconModule, MatInputModule,  MatCardModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';

import { ClientsComponent } from 'app/main/pages/clients/clients.component';
import { ClientdetailmodalComponent } from './clientdetailmodal/clientdetailmodal.component';


const routes = [
    {
        path     : 'Clients',
        component: ClientsComponent
    },
    {
        path     : 'Clientdetailmodal/:id',
        component: ClientdetailmodalComponent
    }
,
];

@NgModule({
    declarations: [
        ClientsComponent,
        ClientdetailmodalComponent,
       
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
export class ClientsModule
{
}
