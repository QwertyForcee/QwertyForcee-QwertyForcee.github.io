import { Component, OnInit } from '@angular/core';
import { ChartDataModel } from 'src/app/models/chart-data-model';

@Component({
  selector: 'app-project-stats',
  templateUrl: './project-stats.component.html',
  styleUrls: ['./project-stats.component.scss']
})
export class ProjectStatsComponent implements OnInit {

  mockData1: ChartDataModel[] = [
    { color: '#b851e0', percent: 30 , label: 'Maxim'},
    { color: '#239fa8', percent: 30 , label: 'Joe'},
    { color: '#0a632b', percent: 15 , label: 'Nadya'},
    { color: '#e7ff96', percent: 20 , label: 'Kirill'},
    { color: '#00ff96', percent: 5 , label: 'Kirill2'},
  ]

  mockData2: ChartDataModel[] = [
    { color: '#993f3f', percent: 60 , label: 'BUG'},
    { color: '#3f9699', percent: 40 , label: 'FEATURE'},
  ]


  constructor() { }

  ngOnInit(): void {

  }

}
