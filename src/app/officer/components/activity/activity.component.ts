import { ActivityService } from './../../../services/activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activitylist:any
  constructor(private activityServie:ActivityService) { }

  ngOnInit(): void {
    this.getallActivity();
  }

  getallActivity(){
    this.activityServie.getall().subscribe(
      (res) => {
        console.log("activityService=>res: ",res);
        this.activitylist = res;
      },
      (err) => {
        console.log("activityService=>err: ",err)
      }  
    )
  }

}
