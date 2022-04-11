import { Injectable, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { Project } from '../models/project';
import { Ticket } from '../models/ticket';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MockServerService {

  constructor() {
    this.setProjects();
  }

  projects: Project[] = [];
  users: User[] = [];
  tickets: Ticket[] = [];
  comments: Comment[] = [];

  getAllProjects(): Project[] {
    return this.projects;
  }
  getProjects(userId: number): Project[] {
    return this.projects.filter(proj => proj.members.some(membr => membr.id === userId));
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

}
