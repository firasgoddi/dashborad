import { NgModule } from '@angular/core';

import { Login2Module } from 'app/main/pages/authentication/login-2/login-2.module';
import { Register2Module } from 'app/main/pages/authentication/register-2/register-2.module';
import { ComingSoonModule } from 'app/main/pages/coming-soon/coming-soon.module';
import { Error404Module } from 'app/main/pages/errors/404/error-404.module';
import { Error500Module } from 'app/main/pages/errors/500/error-500.module';
import { MaintenanceModule } from 'app/main/pages/maintenance/maintenence.module';
import { CommonModule } from '@angular/common';

//Translate
import { TranslateModule } from '@ngx-translate/core';
import { UsersModule } from 'app/main/pages/users/users.module';
import { ClientsModule } from './clients/clients.module';
import { UserDetailModalModule } from 'app/main/pages/userdetailmodal/userdetailmodal.module';


@NgModule({
    imports: [     
        // Authentication       
        Login2Module,    
     
        Register2Module,
        // Coming-soon
        ComingSoonModule,
        // Errors
        Error404Module,
        Error500Module,
        // Maintenance
        MaintenanceModule,
        
        UsersModule,
        ClientsModule,
        UserDetailModalModule

              
    ],
    declarations: []
})
export class PagesModule
{

}
