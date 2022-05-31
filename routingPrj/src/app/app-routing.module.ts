import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from "./comp/admin-home/admin-home.component";
import { ContactUsComponent } from "./comp/contact-us/contact-us.component";
import { CustomerHomeComponent } from "./comp/customer-home/customer-home.component";
import { HomeComponent } from "./comp/home/home.component";
import { Page404Component } from "./page404/page404.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AuthGuard]
  },
 
  {
    path: 'customer',
    component: CustomerHomeComponent,
    canActivate: [AuthGuard]
  },
 
  {
    path: 'guest',
    component: ContactUsComponent,
    canActivate: [AuthGuard]
    
  },
 
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  // route object to add to the app-routing.module.ts
  {
    path: 'page404',
    component: Page404Component,
  },
  {
    path: '**',
    component: Page404Component,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
