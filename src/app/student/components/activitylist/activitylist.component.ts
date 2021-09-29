import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activitylist',
  templateUrl: './activitylist.component.html',
  styleUrls: ['./activitylist.component.css']
})
export class ActivitylistComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    console.log("activity list component")
    let activityid = this.activatedRoute.snapshot.params.id;
    console.log(activityid); 

  }

}
