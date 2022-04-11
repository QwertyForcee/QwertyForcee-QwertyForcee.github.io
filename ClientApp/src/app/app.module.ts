import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { BoardComponent } from './components/board/board.component';
import { ProjectStatsComponent } from './components/project-stats/project-stats.component';
import { ProjectTeamComponent } from './components/project-team/project-team.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { BoardSettingsComponent } from './components/board-settings/board-settings.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    FooterComponent,
    SignInComponent,
    UserProjectsComponent,
    ProjectOverviewComponent,
    BoardComponent,
    ProjectStatsComponent,
    ProjectTeamComponent,
    TicketComponent,
    NewTicketComponent,
    ViewTicketComponent,
    BoardSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
