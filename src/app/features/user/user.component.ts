import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: any;
  userdel = { id: 0, name: '' };

  formUpdate = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  get fu() {
    return this.formUpdate.controls;
  }
  formCreate = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  get fc() {
    return this.formUpdate.controls;
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAll();
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
      data.password = 'password';
      data.id = null;
      console.log(data);

      this.userService.insert(data).subscribe(
        (res) => {
          console.log(res);
          if (res.affectedRows) {
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
