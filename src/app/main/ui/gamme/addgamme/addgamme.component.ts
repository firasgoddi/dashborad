import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GammeService } from '../gamme.service';
@Component({
  selector: 'app-addgamme',
  templateUrl: './addgamme.component.html',
  styleUrls: ['./addgamme.component.scss']
})
export class AddgammeComponent implements OnInit {
  imageURL: string;
  uploadForm2: FormGroup;
  marqueForm: FormGroup ;
  constructor(public fb: FormBuilder,public gammeService:GammeService,public router:Router) { 
    this.marqueForm=this.fb.group({
      nameFR: new FormControl('', [Validators.required ]),
      nameEN : new FormControl('', [Validators.required ]),
      descriptionEN : new FormControl('', ),
      descriptionFR : new FormControl('', ),
      avatar: ['']
  })
  }

  ngOnInit() {
  }
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
     
    this.marqueForm.get('avatar').setValue(file);
    }

    submit(){
   
      let x:any;
      x=this.marqueForm.get('avatar').value;
      console.log(this.marqueForm.get('avatar').value);
       this.gammeService.addphoto(this.marqueForm.value,x);
    }
}
