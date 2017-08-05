import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Guards
import { ApprovalsGuard } from './guards/approvals.guard';
import { ProjectManagementGuard } from './guards/project-management.guard';

//Pages
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { ApprovalsComponent } from './pages/approvals/approvals.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';



const routes: Routes = [
  { path: '', redirectTo: '/timesheet', pathMatch: 'full' },
  {
    path: 'timesheet', component:TimesheetComponent
  },
  {
    path: 'approvals', component:ApprovalsComponent, canActivate:[ApprovalsGuard]
  },
  {
    path: 'projects', component:ProjectManagementComponent, canActivate:[ProjectManagementGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
