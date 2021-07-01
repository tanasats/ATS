import { RoleEditComponent } from './components/role-edit/role-edit.component';
import { RoleAddComponent } from './components/role-add/role-add.component';
import { RoleComponent } from './role.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'',component:RoleComponent,children:[
  //   {path:'add',component:RoleAddComponent}
  // ]},
  {path:'',component:RoleComponent},
  {path:'add',component:RoleAddComponent},
  {path:'edit',component:RoleEditComponent},
  {path:'edit/:id',component:RoleEditComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
