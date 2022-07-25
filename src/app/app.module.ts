import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule }   from '@angular/forms';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';
import { DirDirective } from "app/layout/components/directive/dir.directive";
import { LocalStorageModule } from 'angular-2-local-storage';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from "app/main/apps/config/http.interceptor.request";




const appRoutes: Routes = [
   {
         path        : 'pages',
         loadChildren: './main/pages/pages.module#PagesModule'
    },
   {
        path        : 'ui',
        loadChildren: './main/ui/ui.module#UIModule'
    },
  
    {
        path      : '**',
        redirectTo: '/pages/auth/login-2'
    }
];

@NgModule({
    declarations: [
        AppComponent,
       
        
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,
        MatSelectModule,
        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,
        LocalStorageModule.forRoot({
            prefix: 'app',
            storageType: 'localStorage'
        })
    ], providers: [
                   {
                       provide: HTTP_INTERCEPTORS,
                       useClass: AppInterceptor,
                       multi: true
                     }
                   ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
