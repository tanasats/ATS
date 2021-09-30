import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { OfficerRoutingModule } from './officer-routing.module';
import { OfficerComponent } from './officer.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ActivityComponent } from './components/activity/activity.component';
import { MemberComponent } from './components/member/member.component';
import { ActivityAddComponent } from './components/activity-add/activity-add.component';
import { ActivityEditComponent } from './components/activity-edit/activity-edit.component';


@NgModule({
  declarations: [
    OfficerComponent,
    HomeComponent,
    SidenavComponent,
    ActivityComponent,
    MemberComponent,
    ActivityAddComponent,
    ActivityEditComponent
  ],
  imports: [
    CommonModule,
    OfficerRoutingModule,
    BrowserModule,BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    MatIconModule,MatSidenavModule,MatListModule,MatExpansionModule,MatToolbarModule,
    MatButtonModule,MatTooltipModule,MatFormFieldModule,MatDatepickerModule,
    MatInputModule,MatCardModule,MatRadioModule,MatSelectModule,MatNativeDateModule
  ]
})
export class OfficerModule { }
