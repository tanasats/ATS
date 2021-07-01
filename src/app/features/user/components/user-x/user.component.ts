import { FormGroup,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit {
  formCreate = new FormGroup({
    name: new FormControl('')
  });
  constructor() {}

  ngOnInit(): void {
    // initial value to form by formControl
  }

}