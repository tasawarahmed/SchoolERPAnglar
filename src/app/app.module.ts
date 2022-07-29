import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrComponent } from '../app/components/toastr/toastr.component';
import { Sweetalert2Component } from '../app/components/sweetalert2/sweetalert2.component';
import { FontAwesomeComponent } from './components/font-awesome/font-awesome.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { DataService } from './helpers/data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ToastrComponent,
    Sweetalert2Component,
    FontAwesomeComponent,
    BootstrapComponent,
    UserRegistrationFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
