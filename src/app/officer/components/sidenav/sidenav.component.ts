import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() isExpanded: boolean | undefined;
  @Output() toggleMenu = new EventEmitter();
  public routeLinks = [
    { link: "/officer", name: "หน้าหลัก", icon: "dashboard" },
    { link: "/officer/activity", name: "จัดการกิจกรรม", icon: "domain" },
    { link: "/officer/member", name: "จัดการผู้ใช้งาน", icon: "person" },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
