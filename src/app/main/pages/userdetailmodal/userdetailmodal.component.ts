import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetailmodal',
  templateUrl: './userdetailmodal.component.html',
  styleUrls: ['./userdetailmodal.component.scss']
})
export class UserdetailmodalComponent implements OnInit {
  Privelege: string;
  Listofprivelege: string[] = ['Commercial', 'Sécretaie', 'Gérant'];
  constructor() { }

  ngOnInit() {
  }

}
