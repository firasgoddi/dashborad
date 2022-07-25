import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { MatDialog } from '@angular/material';
import { IconSvgExample } from 'assets/angular-material-examples/icon-svg/icon-svg-example';
import { privelege } from './model/privelege';
import { PrivelegeService } from './privelege.service';

@Component({
  selector: 'app-privelege',
  templateUrl: './privelege.component.html',
  styleUrls: ['./privelege.component.scss']
})
export class PrivelegeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','gestionActivite','gestionCategory','gestionCompte','gestionDisscusion','gestionMarque','gestionUser','gestionProduit','Action'];
  dataSource:privelege;
  priveleges:any[]=[]; 
  constructor(public privelegeS:PrivelegeService,public dialog: MatDialog) { }

  ngOnInit() {
    this.loadAccess();
   
  }
  
  loadAccess(){
    this.privelegeS.getallprivelege().then(data =>{
      console.log(data);
      this.priveleges=data;  
    
    console.log(this.priveleges);
  
  })
}

ondelete(id: number) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.privelegeS.deletePriv(id);
    
  }
  this.loadAccess();
}


}
