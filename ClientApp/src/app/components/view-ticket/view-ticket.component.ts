import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseModalWindowComponent } from '../base-modal-window/base-modal-window.component';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent extends BaseModalWindowComponent {

  commentForm: FormGroup;

  constructor() {
    super();
    this.commentForm = new FormGroup(
      {
        "message": new FormControl("", Validators.required),
        "user": new FormControl(),
        "ticket": new FormControl(),
      }
    );
  }

  ngOnInit(): void {
  }

  submit(){
    if (this.commentForm.valid){
      console.log(this.commentForm);
      
    }
  }
}
