import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-modal-window',
  templateUrl: './base-modal-window.component.html',
  styleUrls: ['./base-modal-window.component.scss']
})
export class BaseModalWindowComponent implements OnInit {

  @Output() closeEmitter: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public close() {
    this.closeEmitter.emit();
  }

  @HostListener('document:keydown.escape', ['$event'])
  escapePressed(event: KeyboardEvent) {
    this.closeEmitter.emit();
  }


}
