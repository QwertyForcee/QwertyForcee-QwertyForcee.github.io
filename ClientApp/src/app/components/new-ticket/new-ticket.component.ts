import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Priority } from 'src/app/models/priority';
import { Ticket } from 'src/app/models/ticket';
import { User } from 'src/app/models/user';
import { MockServerService } from 'src/app/services/mock-server.service';
import { BaseModalWindowComponent } from '../base-modal-window/base-modal-window.component';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent extends BaseModalWindowComponent {

  newTicketForm: FormGroup;
  priorities: Priority[] = [];
  users: User[] = [];

  constructor(private mockService: MockServerService) {
    super();

    this.newTicketForm = new FormGroup(
      {
        "title": new FormControl("", Validators.required),
        "type": new FormControl("", Validators.required),
        "priority": new FormControl(0, Validators.required),
        "assignedToId": new FormControl(0, Validators.required),
        "description": new FormControl(),
      }
    );
  }

  get isValidForm() {
    return this.newTicketForm.valid;
  }

  ngOnInit(): void {
    this.users = this.mockService.getUsers();
    this.priorities = this.mockService.getPriorities();
  }

  submit() {
    if (this.newTicketForm.valid) {
      const formValues = this.newTicketForm.value;
      const ticket = {
        id: this.mockService.getNextTicketId(),
        title: formValues.title,
        type: formValues.type,
        priority: this.priorities.find(p => p.id === +formValues.priority),
        description: formValues.description,
        assignedTo: this.users.find(u => u.id === +formValues.assignedToId),
        statusId: 1,

      } as Ticket;

      console.log(ticket);

      this.mockService.addNewTicket(ticket);
      this.close();
    }
  }
}
