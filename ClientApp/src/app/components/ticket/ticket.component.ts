import { Component, ElementRef, EventEmitter, Host, HostListener, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';
import { getCommits } from '../../../../modules/github-api-caller'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket:Ticket | null= null;
  @Output() openingTicket = new EventEmitter<number>();
  @Output() deletingTicket = new EventEmitter<number>();

  showContextMenu = false;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {

  }

  openTicket(){
    this.openingTicket.emit(this.ticket?.id);
  }

  deleteTicket(){
    this.deletingTicket.emit(this.ticket?.id);
  }

  gitHubRequest(){
    getCommits();
  }

  @HostListener('dragstart', ['$event'])
  dragStart(event: any){
    this.element.nativeElement.classList.add('dragging');
  }

  @HostListener('dragend', ['$event'])
  dragEnd(event: any){
    this.element.nativeElement.classList.remove('dragging');

    const header = document.querySelector('.chosen-board-header');
    const columnId = header?.getAttribute('data-columnId');
    if (this.ticket && columnId){
      this.ticket.statusId = +columnId;
    }
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
