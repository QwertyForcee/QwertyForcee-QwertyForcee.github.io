import { AfterViewChecked, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Status } from 'src/app/models/status';
import { Ticket } from 'src/app/models/ticket';
import { MockServerService } from 'src/app/services/mock-server.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, AfterViewChecked {

  headersEventsInited = false;
  tickets: Ticket[] = [];
  statuses: Status[] = [];

  creatingNewTicket = false;
  viewTicket = false;

  constructor(private mockService: MockServerService, private element: ElementRef) { }

  ngAfterViewChecked(): void {
    if (!this.headersEventsInited) {
      this.headersEventsInited = true;
      const headers = this.element.nativeElement.querySelectorAll('div.board-column');
      headers.forEach((header: any) => {
        header.addEventListener('dragover', (e: any) => {
          const draggable = document.querySelector('.dragging')!;
          header.appendChild(draggable);
        })
      })
    }
  }

  ngOnInit(): void {
    this.statuses = this.mockService.getStatuses();
    this.tickets = this.mockService.getTickets();

  }

  getTicketsByStatusId(statusId: number) {
    return this.tickets.filter(t => t.statusId === statusId);
  }

  createNewTicket() {
    this.creatingNewTicket = true;
  }

  openTicket() {
    this.viewTicket = true;
  }
}
