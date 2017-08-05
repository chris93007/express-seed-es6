import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    console.log("logout");
  }

}
