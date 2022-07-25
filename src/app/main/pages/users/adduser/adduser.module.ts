import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule,MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';
import {MatDialogModule} from '@angular/material/dialog';
import { UsersComponent} from 'app/main/pages/users/users.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AdduserComponent } from '../adduser/adduser.component';
const routes = [
    {
        path     : 'addUser',
        component: AdduserComponent
    }
];

@NgModule({
    declarations: [
        UsersComponent,
        AdduserComponent
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
      
    ]
})
export class addUserModule
{
}
