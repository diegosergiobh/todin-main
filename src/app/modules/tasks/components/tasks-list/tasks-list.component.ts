import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit{

  tasks: Task[] = [];

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.listTasks();
  }

  listTasks(){
    this.tasksService.list()
      .subscribe(dados => this.tasks = dados);
  }

  editTask(task: Task) {
    this.router.navigate(['/tasks/editar', task.id]);
  }  

}