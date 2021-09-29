import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.css']
})
export class CardActivityComponent implements OnInit {
  @Input() ACTIVITY_ITEM:any;
  @Input() PICTURE:string="";
  @Input() TITLE:string="TITLE";
  @Input() DESCRIPTION:string="DESCRIPTION";
  constructor() { }

  ngOnInit(): void {
  }

}
