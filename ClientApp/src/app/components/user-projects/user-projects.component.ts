import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { MockServerService } from 'src/app/services/mock-server.service';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.scss']
})
export class UserProjectsComponent implements OnInit {

  constructor(private mockService: MockServerService) { }

  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = this.mockService.getAllProjects();
    console.log(this.projects);

  }

}
