import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrivelegeService } from '../privelege.service';

@Component({
  selector: 'app-addprivelege',
  templateUrl: './addprivelege.component.html',
  styleUrls: ['./addprivelege.component.scss']
})
export class AddprivelegeComponent implements OnInit {
  privelegeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required ]),
    gestionActivite : new FormControl(false, ),
    gestionCompte : new FormControl(false, ),
    gestionProduit : new FormControl(false, ),
    gestionUser : new FormControl(false, ),
    gestionCategory : new FormControl(false, ),
    gestionDisscusion: new FormControl(false, ),
    gestionMarque: new FormControl(false, ),
  });
  constructor(public privelegeService:PrivelegeService) { }

  ngOnInit() {
    this.privelegeForm.get('gestionActivite').setValue(false);
    this.privelegeForm.get('gestionCompte').setValue(false);
    this.privelegeForm.get('gestionProduit').setValue(false);
    this.privelegeForm.get('gestionUser').setValue(false);
    this.privelegeForm.get('gestionCategory').setValue(false);
    this.privelegeForm.get('gestionDisscusion').setValue(false);
    this.privelegeForm.get('gestionMarque').setValue(false);
  }
add(){
this.privelegeService.addprivelege(this.privelegeForm.value);
  console.log(this.privelegeForm.value);
}
}
