import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'pmo-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private userService:UserService
  ) { }

  private role:string;

  ngOnInit() {
    this.role=this.userService.userRole;
    console.log(this.role)
  }

}
