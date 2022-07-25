import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule,MatRadioModule,MatTableModule,MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';
import {MatDialogModule} from '@angular/material/dialog';
import { UsersComponent} from 'app/main/pages/users/users.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AdduserComponent } from '../users/adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
const routes = [
    {
        path     : 'Users',
        component: UsersComponent
    },
    {
        path     : 'addUser',
        component: AdduserComponent
    },
    {
        path     : 'deleteUser',
        component: DeleteuserComponent
    }
];

@NgModule({
    declarations: [
        UsersComponent,
        AdduserComponent,
        DeleteuserComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatStepperModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatTableModule,
        MatDatepickerModule,
        FuseSharedModule,
        FuseCountdownModule,
        MatToolbarModule,
        MatSlideToggleModule
    ]
})
export class UsersModule
{
}
