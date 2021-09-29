import { CheckCardComponent } from './../components/check-card/check-card.component';
import { ActivitylistComponent } from './components/activitylist/activitylist.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckpointComponent } from './components/checkpoint/checkpoint.component';

const routes: Routes = [
  // {path:'', component:StudentComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'**',redirectTo:'',pathMatch:'full'}
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: '',component:HomeComponent},
      { path: 'register', component:RegisterComponent },
      { path: 'activity/:id', component:ActivitylistComponent},
      { path: 'checkpoint' , component:CheckpointComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
