import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatTooltipModule} from '@angular/material/tooltip';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ActivitylistComponent } from './components/activitylist/activitylist.component';
import { CheckpointComponent } from './components/checkpoint/checkpoint.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
 


@NgModule({
  declarations: [
    StudentComponent,
    RegisterComponent,
    HomeComponent,
    ActivitylistComponent,
    CheckpointComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatIconModule,MatSidenavModule,MatListModule,MatExpansionModule,MatToolbarModule,MatButtonModule,MatTooltipModule
  ]
})
export class StudentModule { }
