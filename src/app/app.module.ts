import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddDogComponent } from './add-dog/add-dog.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    HeaderComponent,
    SidenavComponent,
    AddDogComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
