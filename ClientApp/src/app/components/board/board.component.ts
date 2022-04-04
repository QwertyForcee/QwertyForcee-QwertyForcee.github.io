import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MockServerService } from 'src/app/services/mock-server.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private mockService: MockServerService) { }

  ngOnInit(): void {
    const headers = document.querySelectorAll('.board-column');
    headers.forEach(header => {
      header.addEventListener('dragover', (e)=> {
        const draggable = document.querySelector('.dragging')!;
        header.appendChild(draggable);
      })
    })
     
  }

  creatingNewTicket = false;
  viewTicket = false;

  createNewTicket(){
    this.creatingNewTicket = true;
  }

  openTicket() {
    this.viewTicket = true;
  }
}
