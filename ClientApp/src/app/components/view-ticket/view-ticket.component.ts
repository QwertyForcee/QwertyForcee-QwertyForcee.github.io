import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseModalWindowComponent } from '../base-modal-window/base-modal-window.component';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent extends BaseModalWindowComponent {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
