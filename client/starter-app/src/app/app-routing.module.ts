import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { ApprovalsComponent } from './pages/approvals/approvals.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';

const routes: Routes = [
  {
    path: 'timesheet', component:TimesheetComponent
  },
  {
    path: 'approvals', component:ApprovalsComponent
  },
  {
    path: 'projects', component:ProjectManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
