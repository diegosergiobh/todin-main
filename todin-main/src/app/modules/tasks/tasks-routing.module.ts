import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const routes: Routes = [
  { path: '', component: TasksListComponent, canActivate: [authGuard] },
  { path: 'novo', component: CreateTaskComponent },
  { path: 'editar/:id', component: CreateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
