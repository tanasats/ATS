//import { UserModule } from './features/user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

import { UserModule } from './features/user/user.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';

import { StudentModule } from './student/student.module';
import { CardActivityComponent } from './components/card-activity/card-activity.component';
import { CheckCardComponent } from './components/check-card/check-card.component';
import { CheckQrComponent } from './components/check-qr/check-qr.component';
import { CheckGpsComponent } from './components/check-gps/check-gps.component';
import { Bs5testComponent } from './components/bs5test/bs5test.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    ContactFormComponent, LoginComponent, CardActivityComponent, 
    CheckCardComponent, CheckQrComponent, CheckGpsComponent, Bs5testComponent, ToolbarComponent, FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatTooltipModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    StudentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
