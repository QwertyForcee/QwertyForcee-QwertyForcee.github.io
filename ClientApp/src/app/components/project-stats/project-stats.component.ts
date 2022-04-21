declare const getCommits:any; 
 
import { Component, OnInit } from '@angular/core';
import { ChartDataModel } from 'src/app/models/chart-data-model';
import { AuthorScore } from './commit-chart-model';
import { getCommits as getCommits } from '../../../assets/modules/GitHubIntegrationModule/github.api.js';
//declare const getCommits:any;

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
  loadCharts = false;
  
  constructor() { }

  async ngOnInit(): Promise<void> {
    const username = localStorage.getItem('github_username');
    const repository = localStorage.getItem('github_repository')
    if (username && repository) {
      const commits = await getCommits(username, repository);

      if (Array.isArray(commits)) {
        const authorsScores: AuthorScore[] = [];

        commits.forEach(c => {
          const [authorId, authorName] = [c.author.id, c.author.login]

          const aScore = authorsScores.find(sc => sc.authorId === authorId);
          if (aScore) {
            aScore.score += 1;
          } else {
            authorsScores.push({
              score: 1,
              authorId,
              authorName,
            } as AuthorScore);
          }
        });

        const commitsCount = authorsScores.map((sc: AuthorScore) => sc.score).reduce((val: number, sc: number) => val += sc, 0);
        this.contibutorsData = authorsScores.map((aScore: AuthorScore) => {
          return {
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            label: `${aScore.authorName} (${aScore.score})`,
            percent: (aScore.score / commitsCount * 100).toFixed(2),
          }
        });
        
        this.loadCharts = true;
      }

      //color: `#${Math.random()}${Math.random()}${Math.random()}`,

    }
  }

}
