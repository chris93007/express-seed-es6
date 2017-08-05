import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule, TooltipModule } from 'ngx-bootstrap';
import { CalendarModule, InputMaskModule, DropdownModule, DataListModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Guards
import { ApprovalsGuard } from './guards/approvals.guard';
import { ProjectManagementGuard } from './guards/project-management.guard';

//Pages
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { ApprovalsComponent } from './pages/approvals/approvals.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';

//Providers
import { UserService } from './providers/user.service';
import { UtilityService } from './providers/utility.service';
import { TimesheetService} from './providers/timesheet.service';

//Components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AddTimesheetEntryComponent } from './components/add-timesheet-entry/add-timesheet-entry.component';
import { ListProjectsComponent } from './pages/project-management/projects/list-projects/list-projects.component';
import { ListActivitiesComponent } from './pages/project-management/activities/list-activities/list-activities.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideMenuComponent,
    TimesheetComponent,
    ApprovalsComponent,
    ProjectManagementComponent,
    AddTimesheetEntryComponent,
    ListProjectsComponent,
    ListActivitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    CalendarModule,
    InputMaskModule,
    DropdownModule,
    DataListModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers:[ 
    UserService,
    ApprovalsGuard,
    ProjectManagementGuard,
    UtilityService,
    TimesheetService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
