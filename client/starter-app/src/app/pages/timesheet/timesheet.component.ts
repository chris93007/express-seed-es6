import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  constructor() { }
  private show:boolean=true;

  ngOnInit() {
  }

  refreshData(ev){
    this.show=false;
    setTimeout(()=>{
      this.timesheets.push(ev);
      this.show=true;
    },500)

  }

  private timesheets =  [
      {"date":new Date(), "status":"Pending" ,"activities":[
          {"duration":3,"activity":"Design","project":"P10 Internal"},
          {"duration":2,"activity":"Development","project":"P10 Internal"},
          {"duration":3,"activity":"Planing","project":"P10 Internal"},
        ]},
      {"date":new Date(), "status":"Pending" ,"activities":[
          {"duration":3,"activity":"Design","project":"P10 Internal"},
          {"duration":2,"activity":"Development","project":"P10 Internal"},
          {"duration":3,"activity":"Planing","project":"P10 Internal"},
        ]},
      {"date":new Date(), "status":"Pending" ,"activities":[
          {"duration":3,"activity":"Design","project":"P10 Internal"},
          {"duration":2,"activity":"Development","project":"P10 Internal"},
          {"duration":3,"activity":"Planing","project":"P10 Internal"},
        ]},
      {"date":new Date(), "status":"Pending" ,"activities":[
          {"duration":3,"activity":"Design","project":"P10 Internal"},
          {"duration":2,"activity":"Development","project":"P10 Internal"},
          {"duration":3,"activity":"Planing","project":"P10 Internal"},
        ]}
    ];

}
