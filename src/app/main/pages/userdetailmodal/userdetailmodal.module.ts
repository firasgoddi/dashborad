import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule,  MatCardModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';
import {MatDialogModule} from '@angular/material/dialog';
import { UserdetailmodalComponent} from 'app/main/pages/userdetailmodal/userdetailmodal.component';

const routes = [
    {
        path     : 'Userdetailmodal',
        component: UserdetailmodalComponent
    }
];

@NgModule({
    declarations: [
        UserdetailmodalComponent
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
        MatRadioModule
    ]
})
export class UserDetailModalModule
{
}
