import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  viewingTicket: Subject<boolean> = new Subject<boolean>();
  viewingTicket$: Observable<boolean> = this.viewingTicket.asObservable();

  constructor() { }

  ngOnInit(): void {

  }

  creatingNewTicket = false;
  viewTicket = false;

  createNewTicket(){
    this.creatingNewTicket = true;
  }

  setViewTicket(value:boolean){
    this.viewTicket = value;
  }
}
