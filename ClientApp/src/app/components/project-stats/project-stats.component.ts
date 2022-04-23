import { Component, OnInit } from '@angular/core';
import { Commit } from 'modules/GitHubIntegrationModule/commit-model';
import { Contributor } from 'modules/GitHubIntegrationModule/contributor';
import { GitHubAPI } from 'modules/GitHubIntegrationModule/github.api';
import { ChartDataModel } from 'src/app/models/chart-data-model';
import { AuthorScore } from './commit-chart-model';

@Component({
  selector: 'app-project-stats',
  templateUrl: './project-stats.component.html',
  styleUrls: ['./project-stats.component.scss']
})
export class ProjectStatsComponent implements OnInit {

  mockData1: ChartDataModel[] = [
    { color: '#b851e0', percent: 30, label: 'Maxim (15)' },
    { color: '#239fa8', percent: 30, label: 'Joe (15)' },
    { color: '#0a632b', percent: 15, label: 'Nadya (8)' },
    { color: '#e7ff96', percent: 20, label: 'Kirill(10)' },
    { color: '#00ff96', percent: 5, label: 'Kirill2(1)' },
  ]

  mockData2: ChartDataModel[] = [
    { color: '#993f3f', percent: 60, label: 'BUG' },
    { color: '#3f9699', percent: 40, label: 'FEATURE' },
  ]

  contibutorsData: any = [];
  contributersCount: number = 0;
  loadCharts = false;

  constructor() { }

  async ngOnInit(): Promise<void> {
    const username = localStorage.getItem('github_username');
    const repository = localStorage.getItem('github_repository')
    if (username && repository) {

      const contributers = await GitHubAPI.getContributors(username, repository);
      console.log(contributers);

      if (Array.isArray(contributers)) {

        this.contributersCount = contributers.length ?? 0;
        const allContributions = contributers.map((count: Contributor) => count.contributionsCount).reduce((val: number, count: number) => val += count, 0);
        this.contibutorsData = contributers.map((c: Contributor) => {
          return {
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            label: `${c.name} (${c.contributionsCount})`,
            percent: (c.contributionsCount / allContributions * 100).toFixed(2),
          }
        });

        this.loadCharts = true;
      }

      //color: `#${Math.random()}${Math.random()}${Math.random()}`,

    }
  }

}
