import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activityList: any[] = [
    { id: '1',title: 'xxxx', description: 'yyyy', picture: 'http://lorempixel.com/400/401/' },
    { id: '2',title: '1111', description: '2222', picture: 'http://lorempixel.com/400/402/' },
  ];
  constructor() {}

  ngOnInit(): void {}

  test() {
    console.log('test()');
    this.activityList=[
      { id:'3' ,title: 'aaa', description: 'bbb', picture: 'http://lorempixel.com/400/403/' },
      { id:'4' ,title: 'กกก', description: 'ขขข', picture: 'http://lorempixel.com/400/404/' },
    ]
  }
}
