import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeletegammeComponent } from './deletegamme/deletegamme.component';
import { GammeService } from './gamme.service';

@Component({
  selector: 'app-gamme',
  templateUrl: './gamme.component.html',
  styleUrls: ['./gamme.component.scss']
})
export class GammeComponent implements OnInit {
Marque: any []=[];

  constructor(public gammeService:GammeService,public dialog: MatDialog) { }

  ngOnInit() {
    this.loadgamme();
  }
  loadgamme(){
    this.gammeService.getallmarque().then(data =>{
      console.log(data);
      this.Marque=data;  
    
    console.log(this.Marque);
  })
  }
  ondelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.gammeService.deleteMarque(id);
      
    }
    this.loadgamme();
  }
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(DeletegammeComponent, {
      width: '650px',
      height : '400px'
     
    });
  
    dialogRef.componentInstance.id=id;
console.log(id);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}
