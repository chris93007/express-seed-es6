import { Component } from '@angular/core';

import { UserService } from './providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!!!!!!!!!!';

  constructor(private userService:UserService){

  }

  ngOnInit(){
    this.userService.userRole="admin";
    this.userService.userID="P10E0142";
  }

}
