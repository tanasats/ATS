import { ActivityEditComponent } from './components/activity-edit/activity-edit.component';
import { ActivityAddComponent } from './components/activity-add/activity-add.component';
import { MemberComponent } from './components/member/member.component';
import { ActivityComponent } from './components/activity/activity.component';
import { HomeComponent } from './components/home/home.component';
import { OfficerComponent } from './officer.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
    component: OfficerComponent ,
    children:[
      {path: '', component: HomeComponent},
      {path: 'activity',component: ActivityComponent},
      {path: 'activity/add',component:ActivityAddComponent},
      {path: 'activity/edit',component:ActivityEditComponent},
      {path: 'member',component: MemberComponent}
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficerRoutingModule {}
