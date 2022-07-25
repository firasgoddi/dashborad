import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import {SharedParamService} from '@fuse/services/shared.params.service';
import { navigation } from 'app/navigation/navigation';
import { locale as english } from 'app/layout/components/toolbar/i18n/en';
import { locale as turkish } from 'app/layout/components/toolbar/i18n/tr';
import { locale as arabic } from 'app/layout/components/toolbar/i18n/ar';
import { locale as frensh } from 'app/layout/components/toolbar/i18n/fr';
import { FuseTranslationLoaderService } from "@fuse/services/translation-loader.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "angular-2-local-storage";

export interface StateGroup {
    letter: string;
    names: string[];
  }
@Component( {
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
} )

export class ToolbarComponent implements OnInit, OnDestroy {
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];

    // Private
    private _unsubscribeAll: Subject<any>;
    private config;
    
    stateGroups: StateGroup[] ;

    stateGroupOptions: Observable<StateGroup[]>;
    
     user;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     */
    constructor(
            private router:Router,
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        private _sharedParamService:SharedParamService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _localStorageService: LocalStorageService
    ) {
        // Load the translations
        this._fuseTranslationLoaderService.loadTranslations(english, turkish,arabic,frensh);
        // Set the defaults
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                id: 'en',
                title: 'English',
                flag: 'us'
            },
            {
                id: 'tr',
                title: 'Turkish',
                flag: 'tr'
            },
            {
                id: 'ar',
                title: 'عربية',
                flag: 'tn'
            },{
                id: 'fr',
                title: 'Français',
                flag: 'fr'
            }
        ];

        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
        
        this._sharedParamService.connectedUser = this._localStorageService.get('connectedUser');
        
        this._sharedParamService.connectedUser
        .subscribe((user) => {
            this.user = user;
            if(this.config)
               {
                    if(!this.user)
                    {
                   this.config.layout.navbar.hidden = true;
                    }
                    else{
                        this.config.layout.navbar.hidden  = false;
                    } 
                    this._fuseConfigService.setConfig(this.config);
               }
        });
            
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe( takeUntil( this._unsubscribeAll ) )
            .subscribe(( settings ) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
               
                this.config = settings;
                
            } );

        // Set the selected language from default languages
        this.selectedLanguage = _.find( this.languages, { 'id': this._translateService.currentLang } );
      
       
            }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen( key ): void {
        this._fuseSidebarService.getSidebar( key ).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
    search( value ): void {
        // Do your search here...
        console.log( value );
    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage( lang ): void {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;
        this._sharedParamService.usedLangage=lang;
        this._sharedParamService.clearCountriesList();
       
        // Use the selected language for translations
        this._translateService.use( lang.id );
        if('ar'=== lang.id)
            {
        this._sharedParamService.config = 'rtl';
        this._sharedParamService.align = 'text-align :right';
        this.config.layout.navbar.position = 'right';
        this._fuseConfigService.setConfig(this.config)
            }
        else{
            this.config.layout.navbar.position = 'left';
            this._sharedParamService.config = 'ltr';
            this._sharedParamService.align = 'text-align :left';
        }
    }
    prepareLink()
    {
        return this.user.avatar.replace("?dl=0","?raw=1");
    }
    gotoConnectPage()
    {
        this.router.navigate(['/pages/auth/login']);
    }
    
    logout(){
        this._localStorageService.clearAll();
        this.router.navigate(['/pages/home']).then(() => {
            window.location.reload();
        });
    }
    
    
  
    
    goToPage(page:string)
    {
        if(page==='profile')
            {
        this.router.navigate(['/pages/profile']);
            }
        else if(page ==='mail')
            {
            this.router.navigate(['/apps/mail']);
            }
    }
}
