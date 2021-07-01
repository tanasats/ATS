import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
  id:any;
  private subs: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subs=this.route.params.subscribe(params=>{
      this.id=+params['id']||'No ID parameter';
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
