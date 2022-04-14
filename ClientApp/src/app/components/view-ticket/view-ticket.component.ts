import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/models/comment';
import { Priority } from 'src/app/models/priority';
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

  @Input() ticket: Ticket | null = null;

  users:User[] = [];
  priorities: Priority[] = [];
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
    this.priorities = this.mockService.getPriorities();
  }

  submit() {
    if (this.commentForm.valid) {
      const comment = {user: this.mockService.getCurrentUser(), text: this.commentForm.value.message} as Comment;
      if (this.ticket && !this.ticket?.comments){
        this.ticket.comments = [];
      }

      this.ticket?.comments.push(comment);
    }
  }
}
