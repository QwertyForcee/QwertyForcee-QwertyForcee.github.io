import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { ProjectStatsComponent } from './components/project-stats/project-stats.component';
import { ProjectTeamComponent } from './components/project-team/project-team.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';

const projectOverviewRoutes: Routes = [
  { path: 'board', component: BoardComponent},
  { path: 'stats', component: ProjectStatsComponent},
  { path: 'team', component: ProjectTeamComponent},

]

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'projects', component: UserProjectsComponent },
  { path: 'prj/:id', component: ProjectOverviewComponent, children: projectOverviewRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
