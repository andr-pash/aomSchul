import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { } from '@angular/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OfferListPageComponent } from './offer-list-page/offer-list-page.component';
import { ClientListPageComponent } from './client-list-page/client-list-page.component';
import { ClientProfilePageComponent } from './client-profile-page/client-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    OfferListPageComponent,
    ClientListPageComponent,
    ClientProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
