import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseModalWindowComponent } from '../base-modal-window/base-modal-window.component';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent extends BaseModalWindowComponent {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
