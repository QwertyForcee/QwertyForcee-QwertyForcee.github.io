import { Component, ElementRef, EventEmitter, Host, HostListener, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Output() openingTicket = new EventEmitter<void>(); 

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    
  }

  openTicket(){
    this.openingTicket.emit();
  }

  @HostListener('dragstart', ['$event'])
  dragStart(event: any){
    this.element.nativeElement.classList.add('dragging');
  }

  @HostListener('dragend', ['$event'])
  dragEnd(event: any){
    this.element.nativeElement.classList.remove('dragging');
    
  }
}
