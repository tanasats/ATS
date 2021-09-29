import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  showFiller = false;
  public isExpanded=false;

  constructor() {}
  ngOnInit(): void {
  }

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  // dataToggleCollapse(el: any) {
  //   console.log(el)
  //   let state = el.target.getAttribute('aria-expanded') === 'true';
  //   //console.log(state);
  //   el.target.setAttribute('aria-expanded', !state);
  //   el.target.classList.add('collapsed');
  //   let nel = el.target.nextElementSibling;
  //   if (!state) nel.classList.add('show');
  //   else nel.classList.remove('show');
  // }
  // sidebarToggle() {
  //   let el = document.getElementById('sidebar');
  //   if (el) {
  //     if (el.style.marginLeft == '-220px') {
  //       el.style.marginLeft = '0px';
  //     } else {
  //       el.style.marginLeft = '-220px';
  //     }
  //   }
  //   console.log(el?.style.marginLeft);
  // }  

}
