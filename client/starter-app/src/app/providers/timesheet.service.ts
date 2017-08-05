import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http'; 

import { UtilityService } from './utility.service';

@Injectable()
export class TimesheetService {

  constructor(
    private http:Http,
    private utility :UtilityService
  ) { }

  getTimesheet(){
    return this.http.get(`${this.utility.baseURL}/timesheet`)
  }

  addTimesheet(){
    return
  }

  editTimesheet(){
    return
  }

}
