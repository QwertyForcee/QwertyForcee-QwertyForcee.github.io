import { isNgTemplate } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Commit } from 'modules/GitHubIntegrationModule/commit-model';
import { GitHubAPI } from 'modules/GitHubIntegrationModule/github.api';
import { parseCommit } from 'modules/GitHubIntegrationModule/parse-commit';
import { parseCommitUrl } from 'modules/GitHubIntegrationModule/parse-commit-url';
import { validSearchResponse } from 'modules/GitHubIntegrationModule/search-result-validation';
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

  users: User[] = [];
  priorities: Priority[] = [];

  ticketForm: FormGroup;
  commentForm: FormGroup;

  searchCommits: Commit[] | null = null;
  displayCommits = false;

  get hideButtonState() {
    return this.displayCommits ? 'Hide' : 'Show';
  }

  get isValidForm() {
    return this.commentForm.valid;
  }

  constructor(private mockService: MockServerService) {
    super();
    this.commentForm = new FormGroup(
      {
        "message": new FormControl("", Validators.required),
      }
    );
    this.ticketForm = new FormGroup(
      {
        "type": new FormControl("", Validators.required),
        "priority": new FormControl(0, Validators.required),
        "assignedToId": new FormControl(0, Validators.required),
        "description": new FormControl(),
      }
    )
  }

  ngOnInit(): void {
    this.users = this.mockService.getUsers();
    this.priorities = this.mockService.getPriorities();

    this.ticketForm.setValue({
      "type": this.ticket?.type,
      "priority": this.ticket?.priority.id,
      "assignedToId": this.ticket?.assignedTo.id,
      "description": this.ticket?.description
    })


  }

  commentFormSubmit() {
    if (this.commentForm.valid) {
      const comment = { user: this.mockService.getCurrentUser(), text: this.commentForm.value.message } as Comment;
      if (this.ticket && !this.ticket?.comments) {
        this.ticket.comments = [];
      }

      this.ticket?.comments?.push(comment);
      this.commentForm.patchValue({
        message: '',
      })
    }
  }

  ticketFormSubmit() {
    if (this.ticketForm.valid) {
      const formValues = this.ticketForm.value;
      const ticket = this.ticket;

      if (ticket) {
        ticket.priority = this.priorities.find(p => p.id === +formValues.priority) ?? ticket.priority;
        ticket.description = formValues.description;
        ticket.assignedTo = this.users.find(u => u.id === +formValues.assignedToId) ?? ticket.assignedTo;
        const updateResult = this.mockService.updateTicket(ticket);
        if (updateResult)
          this.close();

      }
    }
  }

  async loadCommits() {
    const username = localStorage.getItem('github_username');
    const repository = localStorage.getItem('github_repository')
    if (username && repository) {
      const result = await GitHubAPI.searchCommitsByMessage(username, repository, 'fix');
      if (validSearchResponse(result)) {
        this.searchCommits = result.items.map((i: any) => parseCommit(i, username, repository))
        this.displayCommits = true;
      }
    }
  }

  toggleHideBut() {
    this.displayCommits = !this.displayCommits;
  }
}
