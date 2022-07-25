import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Projet } from '../model/projet';
import { takeUntil } from 'rxjs/operators';
import { ProjetsService } from '../../projets.service';
@Component({
  selector: 'addprojet',
  templateUrl: './addprojet.component.html',
  styleUrls: ['./addprojet.component.scss']
})
export class AddprojetComponent implements OnInit, OnDestroy {
  projetform: FormGroup;
  projet :Projet={}; 
  // Horizontal Stepper
  horizontalStepperStep1: FormGroup;
  horizontalStepperStep2: FormGroup;
  horizontalStepperStep3: FormGroup;

  // Vertical Stepper
  verticalStepperStep1: FormGroup;
  verticalStepperStep2: FormGroup;
  verticalStepperStep3: FormGroup;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _formBuilder: FormBuilder,public projetService:ProjetsService
  ) { }

  ngOnInit():void {
    this.projetform = this._formBuilder.group({
    
      nomProjet :['', Validators.required],
      nbreTache : ['', Validators.required],
      description   : ['', Validators.required],
      DateDebut  : ['', Validators.required],
      DateFin      : ['', Validators.required],
      
      
      
  });
    this._unsubscribeAll = new Subject();
  }
  ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    addprojet() :void{
      this.projetService.addprojet(this.projet);
      console.log(this.projet);
    }
}
