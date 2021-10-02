import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css'],
})
export class ActivityAddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  public testdata: String = 'hello test';

  formActivity = this.formBuilder.group({
    actid: ['', [Validators.required]],
    actname: ['', [Validators.required]],
    // firstName:['',[Validators.required]],
    // lastName:['',[Validators.required]],
    actdetail: [''],
    //dob: ['', [Validators.required]],
    gender: ['', [Validators.required]],
  });






  allComplete: boolean = false;
  updateAllComplete() {
    this.allComplete = this.faculty.every((t) => t.completed);
    console.log("updateAllComplete() return ",this.allComplete);
  }
  someComplete(): boolean {
    return (
      this.faculty.filter((t) => t.completed).length > 0 && !this.allComplete
    );
  }
  setAllfaculty(completed: boolean) {
    this.allComplete = completed;
    this.faculty.forEach((t) => (t.completed = completed));
  }
  faculty = [
    { id: 1, name: 'คณะมนุษยศาสตร์และสังคมศาสตร์', completed: false },
    { id: 2, name: 'คณะวิทยาศาสตร์', completed: false },
    { id: 2, name: 'คณะวิศวกรรมศาสตร์', completed: false },
    { id: 2, name: 'คณะพยาบาลศาสตร์', completed: false },
    { id: 2, name: 'คณะศึกษาศาสตร์', completed: false },
    { id: 2, name: 'คณะศิลปกรรมศาสตร์', completed: false },
    { id: 2, name: 'คณะเภสัชศาสตร์', completed: false },
    { id: 2, name: 'คณะเทคโนโลยี', completed: false },
    { id: 2, name: 'คณะการบัญชีและการจัดการ', completed: false },
    { id: 2, name: 'คณะการท่องเที่ยงและการโรงแรม', completed: false },
    {
      id: 2,
      name: 'คณะสถาปัตยกรรมศาสตร์ ผังเมืองและนฤมิตศิลป์',
      completed: false,
    },
    { id: 2, name: 'คณะวิทยาการสารสนเทศ', completed: false },
    { id: 2, name: 'วิทยาลัยการเมืองการปกครอง', completed: false },
    { id: 2, name: 'คณะสาธารณสุขศาสตร์', completed: false },
    { id: 2, name: 'คณะแพทยศาสตร์', completed: false },
    { id: 2, name: 'คณะสิ่งแวดล้อมและทรัพยากรศาสตร์', completed: false },
    { id: 2, name: 'คณะสัตวแพทย์', completed: false },
  ];

  test() {
    //console.log(this.faculty.every((t)=>t.completed));
    console.log(this.faculty)
  }

  saveForm() {
    if (this.formActivity.valid) {
      console.log('Profile form data :: ', this.formActivity.value);
    }
  }

  get fa() {
    return this.formActivity.controls;
  }

  ngOnInit(): void {}
}
