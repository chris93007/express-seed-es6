import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pmo-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  private active:string;

  navigateTo(link){
    this.active=link;
    // this.router.navigate(['project-management'])
    this.router.navigateByUrl(`/project-management/(pmRoutes:${link})`);
  }

}
