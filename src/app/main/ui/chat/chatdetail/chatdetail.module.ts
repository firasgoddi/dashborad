import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import { ChatComponent } from 'app/main/ui/chat/chat.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { ChatdetailComponent } from './chatdetail.component';



const routes: Routes = [
    
];

@NgModule({
    declarations: [
        
        ChatdetailComponent
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
        MatListModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
       
        FormsModule
    ]
})
export class UIChatdetailModule
{
}
