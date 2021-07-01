import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { RoleAddComponent } from './components/role-add/role-add.component';
import { MatButtonModule } from '@angular/material/button';
import { RoleEditComponent } from './components/role-edit/role-edit.component';


@NgModule({
  declarations: [
    RoleComponent,
    RoleListComponent,
    RoleAddComponent,
    RoleEditComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    MatButtonModule
  ]
})
export class RoleModule { }
