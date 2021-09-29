import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: any;
  userdel = { id: 0, fullname: '' };
  rolesdata: any;

  // formUpdate = new FormGroup({
  //   id: new FormControl('', Validators.required),
  //   fullname: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });
  // formCreate = new FormGroup({
  //   id: new FormControl(''),
  //   fullname: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl('',Validators.required),
  //   roleid: new FormControl(''),
  // });

  formUpdate = this.fb.group({
    id: '',
    fullname: ['', Validators.required],
    email: ['', Validators.required], 
    password: ['', Validators.required],
    roleid:''
  });
  get fu() {
    return this.formUpdate.controls;
  }

  formCreate = this.fb.group({
    id: '',
    fullname: ['', Validators.required],
    email: ['', Validators.required], 
    password: ['', Validators.required],
    roleid:''
  });
  get fc() {
    return this.formUpdate.controls;
  }


  roleid_array: any[] = [];

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAll();
    this.getAllRoles();
  }

  onCbChange(e: any) { 
    //console.log(e);
    console.log(e.target.checked);
    console.log(e.target.value);
    
    if (e.target.checked) {
      this.roleid_array.push(e.target.value);
    } else {
      let index = this.roleid_array.findIndex(element=>element===e.target.value);
      console.log('index '+index);
      let result = this.roleid_array.splice(index, 1);
    }
    console.log(this.roleid_array);
  }

  getAll() {
    this.userService.getall().subscribe(
      (res) => {
        //console.log('subscribe:rxjs -->(res)');  console.log(res);
        this.users = res;
        console.log(this.users);
      },
      (err) => {
        //console.log('subscribe:rxjs -->(err)');  console.log(err);
        if (err.message) {
          //this.showNotify(err.message);
        } else {
          //this.showNotify(err);
        }
      }
    );
  }

  getAllRoles() {
    this.userService.getallroles().subscribe(
      (res) => {
        //console.log('subscribe:rxjs -->(res)');  console.log(res);
        this.rolesdata = res;
        console.log(this.rolesdata);
      },
      (err) => {
        //console.log('subscribe:rxjs -->(err)');  console.log(err);
        if (err.message) {
          //this.showNotify(err.message);
        } else {
          //this.showNotify(err);
        }
      }
    );
  }

  onDelete(data: any) {
    console.log(data);
    this.userdel = data;
    //this.deletemsg = data.name;
    this.openModal('modalFormDelete');
  }
  submitDelete() {
    this.userService.delete(this.userdel.id).subscribe(
      (res) => {
        if (res.affectedRows) {
          console.log(res);
          console.log('confirm Delete');
          this.getAll();
          this.closeModal();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onUpdate(data: any) {
    this.formUpdate.patchValue(data);
    this.openModal('modalFormUpdate');
  }
  submitUpdate() {
    if (this.formUpdate.valid) {
      let data = this.formUpdate.value;
      console.log(data);
      this.userService.update(data.id, data).subscribe(
        (res) => {
          console.log(res);
          if (res.changedRows) {
            this.getAll();
            this.closeModal();
            this.formUpdate.reset();
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  onCreate() {
    this.openModal('modalFormCreate');
  }
  submitCreate() {
    if (this.formCreate.valid) {
      let data = this.formCreate.value;
      //data.password = 'password';
      data.id = null;
      data.roleid=this.roleid_array;
      let rolelist = data.roleid;
      if(data.roleid){ 
        delete data.roleid;
      }
      console.log(data);


      this.userService.insert(data).subscribe(
        (res) => {
          console.log(res);
          if (res.affectedRows) {
            this.userService.adduserrole(data.id,1).subscribe(
              (res)=>{
                console.log('add user role');
                console.log(res);
              },
              (err)=>{
                console.log(err);
              }
            )
            this.getAll();
            this.closeModal();
            this.formCreate.reset();

          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  addUserRole(id:any,roleid:any){
    
  }

  // Utility
  openModal(modalID: string) {
    let btn = document.createElement('button');
    btn.setAttribute('data-bs-toggle', 'modal');
    btn.setAttribute('data-bs-target', '#' + modalID);
    btn.setAttribute('hidden', 'true');
    document.body.appendChild(btn);
    btn.click();
    document.body.removeChild(btn);
  }

  closeModal() {
    let collection = document.getElementsByClassName('btn-close');
    //console.log(collection);
    [].map.call(collection, (el: HTMLElement) => {
      el.click();
    });

    //Array.prototype.map.call(collection,(el:HTMLElement)=>{el.click()});

    // [].forEach.call(collection,function(el:HTMLElement){el.click()})
  }
}


