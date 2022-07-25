import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientService } from '../client.service';
import { Compte } from '../modal/clients';
@Component({
  selector: 'app-clientdetailmodal',
  templateUrl: './clientdetailmodal.component.html',
  styleUrls: ['./clientdetailmodal.component.scss']
})
export class ClientdetailmodalComponent implements OnInit {
  clients:Compte;
id:number;
  detailclient : FormGroup = new FormGroup({
    fullname : new FormControl('', [Validators.required ]),
  
    country : new FormControl('', [Validators.required ]),
    email : new FormControl('', [Validators.required ]),
    phone : new FormControl('', [Validators.required ]),
    image : new FormControl('', [Validators.required ]),
  
  });
  constructor( private clientService:ClientService,private activatedRoute:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.get();
   
   this.detailclient.controls['fullname'].disable();
   this.detailclient.controls['country'].disable();
   this.detailclient.controls['email'].disable();
   this.detailclient.controls['phone'].disable();
  }
get() {

  console.log(this.id)
  
  this.activatedRoute.params.subscribe((params)=>{
this.clientService.get(this.id).then((data:any)=>{
  this.clients=data;
  console.log(data);
  this.detailclient.controls['fullname'].setValue(data.fullname);
  this.detailclient.controls['country'].setValue(data.country);
  this.detailclient.controls['email'].setValue(data.email);
  this.detailclient.controls['phone'].setValue(data.phone);
})
  })
}
}

