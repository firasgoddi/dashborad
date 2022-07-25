import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { TranslateService } from '@ngx-translate/core';
import { Auth } from '../model/auth';
import { AuthService } from "app/main/pages/authentication/authentication.service";
import { SharedParamService } from "@fuse/services/shared.params.service";
import { Router } from "@angular/router";
import { Users } from '../model/Users';
@Component({
    selector     : 'login-2',
    templateUrl  : './login-2.component.html',
    styleUrls    : ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class Login2Component implements OnInit

{ 
     u = new Users();
        loginForm: FormGroup;
    user: Auth={
            email:'',
            passeword:''
    };
    priveleges: any;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private privelegeS: AuthService,
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _translateService: TranslateService,
        private authService: AuthService,        
        private _sharedParamService:SharedParamService,
        private router:Router
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
        this.loadAccess();
    }
    
    loadAccess(){
        this.privelegeS.getallprivelege().then(data =>{
          console.log(data);
          this.priveleges=data;  
        
        console.log(this.priveleges);
     this.u.gestionProduit=this.priveleges[1].gestionProduit;
        console.log(this.u.gestionProduit);
      })
    }
    

    authenticate()
    {
      
       //if() this.priveleges
     //   Users.gestionProduit.valueOf()
      //let u =Users (true, true);

        this.authService.authenticate(this.user).then(res =>{
            this.router.navigate(['/pages/Users']);
        });
        //console.log('email is',this.user.email);
    }
}
