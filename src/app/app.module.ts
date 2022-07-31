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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { DataService } from './helpers/data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker/task-tracker.component';
import { HeaderComponent } from './task-tracker/header/header.component';
import { ButtonComponent } from './task-tracker/button/button.component';
import { TasksComponent } from './task-tracker/tasks/tasks.component';
import { TaskItemComponent } from './task-tracker/task-item/task-item.component';
import { TaskService } from './task-tracker/task.service';
import { AddTaskComponent } from './task-tracker/add-task/add-task.component';
import { UiService } from './task-tracker/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ToastrComponent,
    Sweetalert2Component,
    FontAwesomeComponent,
    BootstrapComponent,
    UserRegistrationFormComponent,
    TaskTrackerComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [
    DataService,
    TaskService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
