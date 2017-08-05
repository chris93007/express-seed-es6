import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-add-timesheet-entry',
  templateUrl: './add-timesheet-entry.component.html',
  styleUrls: ['./add-timesheet-entry.component.scss']
})
export class AddTimesheetEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private entryDate :any;
  private duration :any;
  private activity :any;
  private project :any;

  private displayEntries:Array<string>=[];
  private totalHours:number=0;

  private activities =[
    {label:"Select activity", value:null}, 
    {label:"Design",value:{id:'design', name:'Design'}}, 
    {label:"Development",value:{id:'dev', name:'Development'}}, 
    {label:"Planning", value:{id:'plan', name:'Planning'}} 
    ];
  private projects = [
    {label:"Select project",value:null},
    {label:"Alveo",value:{id:'alveo', name:'Alveo'}},
    {label:"Allegiant",value:{id:'allegiant', name:'Allegiant'}},
    {label:"P10 Internal",value:{id:'p10', name:'P10 Internal'}}
    ];

    addEntry(){
      console.log(this.project)
      this.totalHours+=this.duration
      let entry=`${this.duration} hours on ${this.activity.name} for ${this.project.name}`;
      console.log(entry)
      this.displayEntries.push(entry);
    }

    saveTimesheet(){
      console.log('call API')
    }
}
