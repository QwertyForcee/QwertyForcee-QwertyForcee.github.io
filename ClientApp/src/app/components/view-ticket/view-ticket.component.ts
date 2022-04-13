import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket';
import { User } from 'src/app/models/user';
import { MockServerService } from 'src/app/services/mock-server.service';
import { BaseModalWindowComponent } from '../base-modal-window/base-modal-window.component';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent extends BaseModalWindowComponent {

  @Input() ticket!: Ticket;

  users:User[] = [];
  commentForm: FormGroup;

  constructor(private mockService: MockServerService) {
    super();
    this.commentForm = new FormGroup(
      {
        "message": new FormControl("", Validators.required),
      }
    );
  }

  ngOnInit(): void {
    this.users = this.mockService.getUsers();
    console.log(this.users);

  }

  submit() {
    if (this.commentForm.valid) {
      console.log(this.commentForm);

    }
  }
}
