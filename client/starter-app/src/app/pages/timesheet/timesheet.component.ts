import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private timesheets =  [
        {"project": "Alveo", "date": 2012, "status": "Pending", "activity": "dsad231ff"},
        {"project": "Alveo", "date": 2011, "status": "Pending", "activity": "gwregre345"},
        {"project": "Alveo", "date": 2005, "status": "Approved", "activity": "h354htr"},
        {"project": "Allegiant", "date": 2003, "status": "Denied", "activity": "j6w54qgh"},
        {"project": "Allegiant", "date": 1995, "status": "Pending", "activity": "hrtwy34"},
        {"project": "Allegiant", "date": 2005, "status": "Pending", "activity": "jejtyj"},
        {"project": "Allegiant", "date": 2012, "status": "Yellow", "activity": "g43gr"},
        {"project": "P10 Internal", "date": 2013, "status": "Pending", "activity": "greg34"},
        {"project": "P10 Internal", "date": 2000, "status": "Pending", "activity": "h54hw5"},
        {"project": "P10 Internal", "date": 2013, "status": "Red", "activity": "245t2s"},
        {"project": "Alveo", "date": 2005, "status": "Approved", "activity": "h354htr"},
        {"project": "Allegiant", "date": 2003, "status": "Denied", "activity": "j6w54qgh"},
        {"project": "Allegiant", "date": 1995, "status": "Pending", "activity": "hrtwy34"},
        {"project": "Allegiant", "date": 2005, "status": "Pending", "activity": "jejtyj"},
        {"project": "Allegiant", "date": 2012, "status": "Yellow", "activity": "g43gr"},
        {"project": "P10 Internal", "date": 2013, "status": "Pending", "activity": "greg34"},
        {"project": "P10 Internal", "date": 2000, "status": "Pending", "activity": "h54hw5"},
        {"project": "P10 Internal", "date": 2013, "status": "Red", "activity": "245t2s"}
    ]

}
