import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Comment } from '../models/comment';
import { Priority } from '../models/priority';
import { Project } from '../models/project';
import { SignInModel } from '../models/sign-in-model';
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

    localStorage.setItem('github_username', 'moment');
    localStorage.setItem('github_repository', 'moment-timezone')

    if (localStorage['debugLoggenIn'] && JSON.parse(localStorage['debugLoggenIn']) === true) {
      this.currentUser = this.users[0];
    }
  }

  currentUser: User | null = null;
  projects: Project[] = [];
  users: User[] = [];
  tickets: Ticket[] = [];
  comments: Comment[] = [];
  statuses: Status[] = [];
  priorities: Priority[] = [];

  ticketsSub: Subject<Ticket[]> = new Subject<Ticket[]>();
  tickets$: Observable<Ticket[]> = this.ticketsSub.asObservable();

  ticketsChangedSub: Subject<void> = new Subject<void>();
  ticketsChanged$: Observable<void> = this.ticketsChangedSub.asObservable();

  signIn(model: SignInModel): boolean {
    if (model) {
      const user = this.users.find(u => u.email === model.email && u.password === model.password);
      if (user) {
        this.currentUser = user;
        return true;
      }
    }
    return false;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getAllProjects(): Project[] {
    return this.projects;
  }
  getProjects(userId: number): Project[] {
    return this.projects.filter(proj => proj.members.some(membr => membr.id === userId));
  }

  getTickets(): void {
    this.ticketsSub.next(this.tickets);
  }

  getStatuses() {
    return this.statuses;
  }

  getPriorities() {
    return this.priorities;
  }

  getUsers() {
    return this.users;
  }

  addNewTicket(ticket: Ticket) {
    if (ticket) {
      this.tickets.push(ticket);
    }
    this.ticketsSub.next(this.tickets);
    //this.ticketsChangedSub.next();
  }

  updateTicket(updatedTicket: Ticket) {
    if (updatedTicket) {
      const ticket = this.tickets.find(t => t.id === updatedTicket.id);
      if (ticket) {
        ticket.description = updatedTicket.description;
        ticket.assignedTo = updatedTicket.assignedTo;
        ticket.priority = updatedTicket.priority;
      }
      this.ticketsSub.next(this.tickets);
      return true;
    }
    return false;
  }

  deleteTicket(ticketId: number | string) {
    this.tickets = this.tickets.filter(t => t.id !== +ticketId);

    this.ticketsSub.next(this.tickets);
  }

  getNextTicketId() {
    return Math.max(...this.tickets.map(t => t.id)) + 1;
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
      {
        id: 3,
        name: 'User',
        email: 'user@gmail.com',
        password: 'user'
      } as User,
    ]
  }

  private setPriorities() {
    this.priorities = [
      { id: 1, name: 'high priority', headerColor: '#fa7f7f', verticalLibeColor: '#c44341', backgroundColor: '#ffb3b3' },
      { id: 2, name: 'medium priority', headerColor: '#94D4EF', backgroundColor: '#D0F2F6' },
      { id: 3, name: 'low priority', headerColor: '#FFF', backgroundColor: '#FFF' },

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
        id: 8,
        name: 'Done2',
      },
    ]
  }

  private setTickets() {
    const [high_pr, medium_pr, low_pr] = [...this.priorities];
    const [user1, user2] = [...this.users];
    this.tickets = [
      {
        id: 3001,
        assignedTo: user1,
        statusId: 1,
        type: 'bug',
        priority: low_pr,
        title: 'fix button on sign up form and make it do 10.5 api calls to currency.com',
        description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
      } as Ticket,

      {
        id: 3002,
        assignedTo: user1,
        statusId: 1,
        type: 'bug',
        priority: low_pr,
        title: 'fix select on sign up form',
        description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
      } as Ticket,
      {
        id: 3015,
        assignedTo: user1,
        statusId: 1,
        type: 'bug',
        priority: medium_pr,
        title: 'fix 2 buttons on sign up form',
        description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
      } as Ticket,
      {
        id: 3006,
        assignedTo: user1,
        statusId: 1,
        type: 'bug',
        priority: medium_pr,
        title: 'fix logout',
        description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
      } as Ticket,

      {
        id: 3018,
        assignedTo: user2,
        statusId: 2,
        type: 'bug',
        priority: medium_pr,
        title: 'fix button on sign up form',
        description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
      } as Ticket,

      {
        id: 3020,
        assignedTo: user2,
        statusId: 2,
        type: 'bug',
        priority: high_pr,
        title: 'fix everything on sign up form',
        description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
      } as Ticket,

      {
        id: 3007,
        assignedTo: user2,
        statusId: 3,
        type: 'bug',
        priority: low_pr,
        title: 'fix styles',
        description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
      } as Ticket,

      {
        id: 3066,
        assignedTo: user2,
        statusId: 4,
        type: 'bug',
        priority: high_pr,
        title: 'fix all buttons',
        description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
      } as Ticket,

      {
        id: 3024,
        assignedTo: user1,
        statusId: 5,
        type: 'bug',
        priority: low_pr,
        title: 'fix button on sign up form',
        description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
      } as Ticket,
    ];

  }
}
