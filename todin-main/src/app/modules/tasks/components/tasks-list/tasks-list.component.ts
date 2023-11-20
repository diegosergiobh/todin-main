import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit{

  tasks!: Task[];

  constructor(private tasksService: TasksService){}

  ngOnInit(): void {
    this.listTasks();
  }

  listTasks(){
    this.tasksService.list()
      .subscribe(dados => this.tasks = dados);
  }

}