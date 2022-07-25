import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule,  MatCardModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';
import {MatDialogModule} from '@angular/material/dialog';
import { UsersComponent} from 'app/main/pages/users/users.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';
const routes = [
    {
        path     : 'deleteUser',
        component: DeleteuserComponent
    }
];

@NgModule({
    declarations: [
        UsersComponent,
        DeleteuserComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        FuseSharedModule,
        FuseCountdownModule,
        MatToolbarModule,
        MatSlideToggleModule
    ]
})
export class deleteUserModule
{
}
