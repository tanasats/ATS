import { UserAddComponent } from './components/user-add/user-add.component';
import { UserComponent } from './components/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [{ path: 'add', component: UserAddComponent }],
  },

  // {path:'',component:UserComponent},
  // {path:'add',component:UserAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
