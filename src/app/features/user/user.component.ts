import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  confirmDelete() {
    console.log('confirm Delete');
    this.closeModal();
  }

  // Utility 
  openModal(modalid: string) {
    let btn = document.createElement('button');
    btn.setAttribute('data-bs-toggle', 'modal');
    btn.setAttribute('data-bs-target', '#' + modalid);
    btn.setAttribute('hidden', 'true');
    document.body.appendChild(btn);
    btn.click();
    document.body.removeChild(btn);
  }
  closeModal() {
    let btnclose = <HTMLElement>document.querySelector('button.btn-close');
    btnclose.click();
  }
}
