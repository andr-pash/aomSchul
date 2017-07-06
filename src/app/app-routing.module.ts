import { ClientListPageComponent } from './client-list-page/client-list-page.component';
import { ClientProfilePageComponent } from './client-profile-page/client-profile-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OfferListPageComponent } from './offer-list-page/offer-list-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'clients',
    component: ClientListPageComponent
  },
  {
    path: 'offers',
    component: OfferListPageComponent
  },
  {
    path: 'clientProfile',
    component: ClientProfilePageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
