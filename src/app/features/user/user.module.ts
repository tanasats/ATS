import { RolenamePipe } from './../../pipe/rolename.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './components/user-edit/user-edit.component';



@NgModule({
  declarations: [
    UserComponent,
    UserAddComponent,
    UserEditComponent,
    RolenamePipe,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }