import { Component, ElementRef, EventEmitter, Host, HostListener, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket | null = null;
  @Output() openingTicket = new EventEmitter<number>();
  @Output() deletingTicket = new EventEmitter<number>();

  showContextMenu = false;

  touchX: any;
  touchY: any;
  touchEnded = true;
  allowedToMoveTicket = false;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {

  }

  get headerColor() {
    return this.ticket?.priority?.headerColor ?? 'white';
  }

  get backGroundColor() {
    return this.ticket?.priority?.backgroundColor ?? 'white';
  }

  get verticalLineColor() {
    return this.ticket?.priority?.verticalLibeColor;
  }

  openTicket() {
    this.openingTicket.emit(this.ticket?.id);
  }

  deleteTicket() {
    this.deletingTicket.emit(this.ticket?.id);
  }

  @HostListener('dragstart', ['$event'])
  dragStart(event: any) {
    console.log('LOG: dragStart');

    this.element.nativeElement.classList.add('dragging');
  }

  @HostListener('dragend', ['$event'])
  dragEnd(event: any) {
    console.log('LOG: dragend');

    this.element.nativeElement.classList.remove('dragging');

    const header = document.querySelector('.chosen-board-header');
    console.log('DRAGEND: header', header);

    const columnId = header?.getAttribute('data-columnId');
    console.log('DRAGEND: columnId', columnId);
    if (this.ticket && columnId) {
      this.ticket.statusId = +columnId;
      console.log('DRAGEND: ticket.statusId', this.ticket.statusId);
    }
  }

  @HostListener('click', ['$event'])
  click(event: any) {
    this.showContextMenu = false;
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(event: any) {
    this.showContextMenu = false;
  }

  @HostListener('touchstart', ['$event'])
  touchstart(event: any) {
    console.log('LOG: touchstart');

    this.allowedToMoveTicket = false;
    this.touchEnded = false;

    setTimeout(() => {
      if (!this.touchEnded) {
        this.element.nativeElement.classList.add('dragging');
        const board = document.querySelector<HTMLElement>('.board');
        if (board) {
          board.style.overflow = 'hidden';
        }
        this.allowedToMoveTicket = true;
      }
    }, 1000);
  }

  @HostListener('touchend', ['$event'])
  touchend(event: any) {
    console.log('LOG: touchend');

    this.touchEnded = true;
    if (this.allowedToMoveTicket) {
      this.element.nativeElement.classList.remove('dragging');

      const board = document.querySelector<HTMLElement>('.board');
      if (board) {
        board.style.overflow = 'auto';
      }

      const columnId = document.elementsFromPoint(this.touchX, this.touchY).find((el: any) => el.className === 'board-column')?.getAttribute('data-columnId');
      if (this.ticket && columnId) {
        this.ticket.statusId = +columnId;
      }
    }
  }

  @HostListener('touchmove', ['$event'])
  touchmove(event: any) {
    console.log('LOG: touchmove');

    this.touchX = event.targetTouches[0].pageX;
    this.touchY = event.targetTouches[0].pageY;
  }

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.showContextMenu = true;
    setTimeout(() => {
      const menu = this.element.nativeElement.querySelector('.context-menu');
      menu.style.top = `${event.clientY}px`;
      menu.style.left = `${event.clientX}px`;
    }, 0)

  }
}
