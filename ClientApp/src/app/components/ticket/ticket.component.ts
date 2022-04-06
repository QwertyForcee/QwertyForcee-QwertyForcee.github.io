import { Component, ElementRef, EventEmitter, Host, HostListener, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket:Ticket | null= null;
  @Output() openingTicket = new EventEmitter<void>();

  showContextMenu = false;

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

  @HostListener('click', ['$event'])
  click(event: any){
    this.showContextMenu = false;
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(event: any){
    this.showContextMenu = false;
  }

  onRightClick(event: MouseEvent){
    event.preventDefault();
    this.showContextMenu = true;
    setTimeout(()=>{
      const menu = this.element.nativeElement.querySelector('.context-menu');
      menu.style.top = `${event.clientY}px`;
      menu.style.left = `${event.clientX}px`;
    },0)

  }
}
