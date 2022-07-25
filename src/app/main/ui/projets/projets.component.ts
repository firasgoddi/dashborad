import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Projet } from '../projets/model/projet';
import { takeUntil } from 'rxjs/operators';
import { ProjetsService } from '../projets.service';


@Component({
  selector: 'projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit, OnDestroy
 {

    displayedColumns: string[] = ['id', 'nomprojet'];
    projets:any[]=[]; 
    projet :Projet[]=[]; 
  form: FormGroup;
  dataSource:Projet;
id:any;

  // Horizontal Stepper
  horizontalStepperStep1: FormGroup;
  horizontalStepperStep2: FormGroup;
  horizontalStepperStep3: FormGroup;

  // Vertical Stepper
  verticalStepperStep1: FormGroup;
  verticalStepperStep2: FormGroup;
  verticalStepperStep3: FormGroup;
  private _unsubscribeAll: Subject<any>;

   /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
  
  
  constructor(
    private _formBuilder: FormBuilder,public projetService:ProjetsService
  )
   {
     
    this._unsubscribeAll = new Subject();
    
   }
   

   ngOnInit()
   {
      this.loadprojets();

       
   }
   loadprojets(){
    this.projetService.getallprojets().then(data =>{
      console.log(data);
      this.projets=data;  
    
    console.log(this.projets);
  })
}


   updateProjet(id:any){
       this.projetService.updateProjet(id,this.projet).then(res=>{

       }); 

   }
   deleteProjet(id:any){
       this.projetService.deleteProjet(id);
   }
   getProjet(id:any){
       this.projetService.getprojet(id);
   }
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }
  finishHorizontalStepper(): void
    {
        alert('You have finished the horizontal stepper!');
    }

    /**
     * Finish the vertical stepper
     */
    finishVerticalStepper(): void
    {
        alert('You have finished the vertical stepper!');
    }

}
