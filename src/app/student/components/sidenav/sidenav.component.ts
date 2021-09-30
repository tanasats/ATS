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
    { link: "/student", name: "หน้าหลัก", icon: "dashboard" },
    { link: "/student/checkpoint", name: "การเช็คชื่อ", icon: "fingerprint" },
    { link: "/student/register", name: "ลงทะเบียนกิจกรรม", icon: "assignment" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
}
