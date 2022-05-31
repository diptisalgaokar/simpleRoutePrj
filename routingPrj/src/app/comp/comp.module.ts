import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    ContactUsComponent,
    CustomerHomeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompModule { }
