import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  declarations: [
    TasksListComponent,
    CreateTaskComponent,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
