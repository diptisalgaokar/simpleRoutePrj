import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';

/*import { AdminHomeComponent } from './comp/admin-home/admin-home.component';
import { CustomerHomeComponent } from './comp/customer-home/customer-home.component';
import { ContactUsComponent } from './comp/contact-us/contact-us.component';

import { HomeComponent } from './comp/home/home.component';*/

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
    /*AdminHomeComponent,
    CustomerHomeComponent,
    ContactUsComponent,
    HomeComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
