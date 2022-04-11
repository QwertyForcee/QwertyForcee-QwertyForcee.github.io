import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Output() openingTicket = new EventEmitter<void>(); 

  constructor() { }

  ngOnInit(): void {
    
  }

  openTicket(){
    this.openingTicket.emit();
  }

}
