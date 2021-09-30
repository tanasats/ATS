import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {
  constructor(private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    address:['',[Validators.required]],
    dob:['',[Validators.required]],
    gender:['',[Validators.required]]
  });
 
  saveForm(){
    if(this.profileForm.valid){
      console.log('Profile form data :: ', this.profileForm.value);
    }
  }

  get fp()
  {
      return this.profileForm.controls;
  }
  ngOnInit(): void {
  }

}
