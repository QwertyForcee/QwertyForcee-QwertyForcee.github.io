import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BoardSettingsComponent } from './components/board-settings/board-settings.component';
import { BoardComponent } from './components/board/board.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { ProjectStatsComponent } from './components/project-stats/project-stats.component';
import { ProjectTeamComponent } from './components/project-team/project-team.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';

const projectOverviewRoutes: Routes = [
  { path: '', component: BoardComponent},
  { path: 'board', component: BoardComponent},
  { path: 'stats', component: ProjectStatsComponent},
  { path: 'team', component: ProjectTeamComponent},
  { path: 'setting', component: BoardSettingsComponent}
]

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'projects', component: UserProjectsComponent, canActivate: [AuthGuard] },
  { path: 'prj/:id', component: ProjectOverviewComponent, children: projectOverviewRoutes, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
