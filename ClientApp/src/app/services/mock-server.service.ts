import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Comment } from '../models/comment';
import { Priority } from '../models/priority';
import { Project } from '../models/project';
import { Status } from '../models/status';
import { Ticket } from '../models/ticket';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MockServerService {

  constructor() {
    this.setUsers();
    this.setPriorities();
    this.setProjects();
    this.setStatuses();
    this.setTickets();

  }

  projects: Project[] = [];
  users: User[] = [];
  tickets: Ticket[] = [];
  comments: Comment[] = [];
  statuses: Status[] = [];
  priorities: Priority[] = [];

  ticketsSub: Subject<Ticket[]> = new Subject<Ticket[]>();
  tickets$: Observable<Ticket[]> = this.ticketsSub.asObservable();

  ticketsChangedSub: Subject<void>= new Subject<void>();
  ticketsChanged$:Observable<void> = this.ticketsChangedSub.asObservable();

  getAllProjects(): Project[] {
    return this.projects;
  }
  getProjects(userId: number): Project[] {
    return this.projects.filter(proj => proj.members.some(membr => membr.id === userId));
  }

  getTickets(): void{
    this.ticketsSub.next(this.tickets);
  }

  getStatuses() {
    return this.statuses;
  }

  getPriorities() {
    return this.priorities;
  }

  getUsers(){
    return this.users;
  }

  addNewTicket(ticket:Ticket){
    if (ticket){
      this.tickets.push(ticket);
    }
    this.ticketsSub.next(this.tickets);
    //this.ticketsChangedSub.next();    
  }

  private setUsers() {
    this.users = [
      {
        id: 1,
        name: 'Maxim',
        email: 'admin@admin.com'
      } as User,
      {
        id: 2,
        name: 'Joe',
        email: 'joe@joe.com'
      } as User,
    ]
  }

  private setPriorities() {
    this.priorities = [
      { id: 1, name: 'high priority' },
      { id: 2, name: 'medium priority' },
      { id: 3, name: 'low priority' },

    ]
  }

  private setProjects(): void {
    this.projects = [
      {
        id: 1,
        name: 'MyLinuxOS',
        avatar: 'https://sun9-32.userapi.com/impf/AnFKT-gNYUTtwhIU6uVlvAIyYKJKu48qv-jO2w/gKC8CMourvA.jpg?size=789x779&quality=96&sign=8c43b3474d3143f9c1d84291a945cb7d&type=album',
        updatedOn: new Date(),

      } as Project,

      {
        id: 2,
        name: 'MyChat',
        avatar: 'https://sun9-53.userapi.com/impf/NH983_S95DXePJBjpBz-FeLI1duM8edBBO82XA/EccHADL3WVY.jpg?size=793x685&quality=96&sign=622b772a4dd303fe5d1c3f07aba55887&type=album',
        updatedOn: new Date(),

      } as Project,

      {
        id: 3,
        name: 'Instagram',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png',
        updatedOn: new Date(),

      } as Project,

      {
        id: 4,
        name: 'Figma',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        updatedOn: new Date(),
      } as Project,
    ];
  }

  private setStatuses() {
    this.statuses = [
      {
        id: 1,
        name: 'New',
      },
      {
        id: 2,
        name: 'Approved',
      },
      {
        id: 3,
        name: 'Develop',
      },
      {
        id: 4,
        name: 'Ready',
      },
      {
        id: 5,
        name: 'QA',
      },
      {
        id: 6,
        name: 'Testing',
      },
      {
        id: 7,
        name: 'Done',
      },

      {
        id: 7,
        name: 'Done2',
      },
    ]
  }

  private setTickets() {
    const [low_pr, medium_pr, high_pr] = [...this.priorities];
    const [user1, user2] = [...this.users];
    this.tickets = [
      {
        id: 3001,
        assignedTo: user1,
        statusId: 1,
        type: 'bug',
        priority: low_pr,
        description: 'fix button on sign up form and make it do 10.5 api calls to currency.com',
      } as Ticket,

      {
        id: 3002,
        assignedTo: user1,
        statusId: 1,
        type: 'bug',
        priority: low_pr,
        description: 'fix select on sign up form',
      } as Ticket,
      {
        id: 3015,
        assignedTo: user1,
        statusId: 1,
        type: 'bug',
        priority: medium_pr,
        description: 'fix 2 buttons on sign up form',
      } as Ticket,
      {
        id: 3006,
        assignedTo: user1,
        statusId: 1,
        type: 'bug',
        priority: medium_pr,
        description: 'fix logout',
      } as Ticket,

      {
        id: 3018,
        assignedTo: user2,
        statusId: 2,
        type: 'bug',
        priority: medium_pr,
        description: 'fix button on sign up form',
      } as Ticket,

      {
        id: 3020,
        assignedTo: user2,
        statusId: 2,
        type: 'bug',
        priority: low_pr,
        description: 'fix everything on sign up form',
      } as Ticket,

      {
        id: 3007,
        assignedTo: user2,
        statusId: 3,
        type: 'bug',
        priority: high_pr,
        description: 'fix styles',
      } as Ticket,

      {
        id: 3066,
        assignedTo: user2,
        statusId: 4,
        type: 'bug',
        priority: high_pr,
        description: 'fix all buttons',
      } as Ticket,

      {
        id: 3024,
        assignedTo: user1,
        statusId: 5,
        type: 'bug',
        priority: low_pr,
        description: 'fix button on sign up form',
      } as Ticket,
    ];

  }
}
