import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GammeService } from '../gamme.service';
import { Marque } from '../modal/gamme';

@Component({
  selector: 'app-deletegamme',
  templateUrl: './deletegamme.component.html',
  styleUrls: ['./deletegamme.component.scss']
})
export class DeletegammeComponent implements OnInit {
id:number;
marque:Marque;
marqueForm: FormGroup = new FormGroup({
  
   
  nameEN: new FormControl('', [Validators.required ]),
  nameFR: new FormControl('', [Validators.required ]),
  descriptionEN : new FormControl('', [Validators.required ]),
  descriptionFR : new FormControl('', [Validators.required ]),

});
  constructor(public router:Router,public activatedRoute:ActivatedRoute,public gammeService:GammeService) { }

  ngOnInit() {
    this.get();
  }
  get(){

  
    this.activatedRoute.params.subscribe((params)=>{
  this.gammeService.getbyid(this.id).then((data:any)=>{
    this.marque=data;
    console.log(data);
    this.marqueForm.controls['nameEN'].setValue(data.nameEN);
    this.marqueForm.controls['nameFR'].setValue(data.nameFR);
    this.marqueForm.controls['descriptionEN'].setValue(data.descriptionEN);
    this.marqueForm.controls['descriptionFR'].setValue(data.descriptionFR);
    

})
})
 
}
submit(){
  this.gammeService.updateMarque(this.id,this.marque).then(response => {
    this.router.navigate(['/ui/Products']);
})
}

}
