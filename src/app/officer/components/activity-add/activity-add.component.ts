import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {
  constructor(private formBuilder:FormBuilder) { }

  formActivity = this.formBuilder.group({
    actId:['',[Validators.required]],
    actName:['',[Validators.required]],
  })
  get fa() {  return this.formActivity.controls; }

  saveForm(){
    if(this.formActivity.valid){
      console.log('Profile form data :: ', this.formActivity.value);
    }
  }



  ngOnInit(): void {
  }

}
