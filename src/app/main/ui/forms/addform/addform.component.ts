import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {
  imageURL: string;
  activityForm: FormGroup;
  constructor(public fb: FormBuilder,public formService:FormService) { 
    this.activityForm=this.fb.group({
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
    this.activityForm.patchValue({
      avatar: file
    });
    this.activityForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  submit(){
    let x:any;
    x=this.activityForm.get('avatar').value;
    console.log(this.activityForm.get('avatar').value);
     this.formService.addphoto(this.activityForm.value,x);
  }
}
