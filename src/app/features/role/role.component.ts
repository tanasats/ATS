import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

openModal(modalID:string){
  let btn = document.createElement("button");
  btn.setAttribute("data-bs-toggle","modal");
  btn.setAttribute("data-bs-target","#"+modalID);
  btn.setAttribute("hidden","true");
  document.body.appendChild(btn);
  btn.click();
  document.body.removeChild(btn);
}

}
