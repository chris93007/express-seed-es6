import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private projects =  [
        {"name": "VW", "id": 2012, "manager": "Orange", "team": "dsad231ff"},
        {"name": "Audi", "id": 2011, "manager": "Black", "team": "gwregre345"},
        {"name": "Renault", "id": 2005, "manager": "Gray", "team": "h354htr"},
        {"name": "BMW", "id": 2003, "manager": "Blue", "team": "j6w54qgh"},
        {"name": "Mercedes", "id": 1995, "manager": "Orange", "team": "hrtwy34"},
        {"name": "Volvo", "id": 2005, "manager": "Black", "team": "jejtyj"},
        {"name": "Honda", "id": 2012, "manager": "Yellow", "team": "g43gr"},
        {"name": "Jaguar", "id": 2013, "manager": "Orange", "team": "greg34"},
        {"name": "Ford", "id": 2000, "manager": "Black", "team": "h54hw5"},
        {"name": "Fiat", "id": 2013, "manager": "Red", "team": "245t2s"},
        {"name": "Renault", "id": 2005, "manager": "Gray", "team": "h354htr"},
        {"name": "BMW", "id": 2003, "manager": "Blue", "team": "j6w54qgh"},
        {"name": "Mercedes", "id": 1995, "manager": "Orange", "team": "hrtwy34"},
        {"name": "Volvo", "id": 2005, "manager": "Black", "team": "jejtyj"},
        {"name": "Honda", "id": 2012, "manager": "Yellow", "team": "g43gr"},
        {"name": "Jaguar", "id": 2013, "manager": "Orange", "team": "greg34"},
        {"name": "Ford", "id": 2000, "manager": "Black", "team": "h54hw5"},
        {"name": "Fiat", "id": 2013, "manager": "Red", "team": "245t2s"}
    ]

}
