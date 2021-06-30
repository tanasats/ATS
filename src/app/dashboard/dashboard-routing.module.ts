import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'user',
        loadChildren: () =>
          import('../features/user/user-routing.module').then(
            (m) => m.UserRoutingModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
