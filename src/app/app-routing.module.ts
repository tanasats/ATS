import { LoginComponent } from './components/login/login.component';
import { CheckGpsComponent } from './components/check-gps/check-gps.component';
import { CheckQrComponent } from './components/check-qr/check-qr.component';
import { CheckCardComponent } from './components/check-card/check-card.component';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
//   },
//   { path: '**', redirectTo: '', pathMatch: 'full' },

//   // {path:'home',component:HomeComponent},
//   // {path: '',redirectTo:'home',pathMatch:'full'}
// ];
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'checkcard', component: CheckCardComponent },
  { path: 'checkqr', component: CheckQrComponent },
  { path: 'checkgps', component: CheckGpsComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user-routing.module').then(
        (m) => m.UserRoutingModule
      ),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student-routing.module').then(
        (m) => m.StudentRoutingModule
      ),
  },
   {
     path: 'officer',
     loadChildren:()=>
       import('./officer/officer-routing.module').then(
         (m) => m.OfficerRoutingModule
       ),
   },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
