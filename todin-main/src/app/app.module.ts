import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './core/auth/components/login/login.component';
import { TasksListComponent } from './modules/tasks/components/tasks-list/tasks-list.component';
import { CreateTaskComponent } from './modules/tasks/components/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksListComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
