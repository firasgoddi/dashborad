import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { User } from '../modal/user';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  addForm: FormGroup;

  
  signin: FormGroup = new FormGroup({
    
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  selected = 'option2';
  hide = true;
  priveleges:any[]=[];
  constructor(public userService:UsersService,private _formBuilder: FormBuilder,public router:Router) { }

  ngOnInit() {
    this.addForm = this._formBuilder.group({
      
      username: new FormControl('', [Validators.required ]),
      password: new FormControl('', [Validators.required ]),
      privelege_id : new FormControl('', [Validators.required ]),
     
    });
    this.getallaccess();

  }
  get passwordInput() { return this.signin.get('password'); }  
  addcompte() :void{
    this.userService.addcompte(this.addForm.value);
    console.log(this.addForm.value);
    this.router.navigate(['/pages/Users']);
  }

  getallaccess(){
   
    this.userService.getallprivelege().then(data =>{
      console.log(data);
      this.priveleges=data;  
    
    console.log(this.priveleges);
  })
}
}