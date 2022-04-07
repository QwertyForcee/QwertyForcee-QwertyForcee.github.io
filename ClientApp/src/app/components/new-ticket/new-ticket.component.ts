import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Priority } from 'src/app/models/priority';
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
        "type": new FormControl(),
        "priority": new FormControl(),
        "assignedTo": new FormControl(),
        "description": new FormControl(),
      }
    );
  }

  ngOnInit(): void {
    this.users =  this.mockService.getUsers();
    this.priorities = this.mockService.getPriorities();
  }

  submit() {
    console.log(this.newTicketForm);
  }
}
