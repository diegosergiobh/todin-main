import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit{

  tasks: Task[] = [];
  currentDate: string = '';
  userName!: string | null;

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('USER_NAME');
    this.listTasks();
    this.updateDateTime();
  }

  listTasks(){
    this.tasksService.list()
      .subscribe(dados => this.tasks = dados); 
  }

  editTask(task: Task) {
    this.router.navigate(['/tasks/editar', task.id]);
  }  

  deteleTask(id: string){
    this.tasksService.remove(id)
      .pipe(first())
      .subscribe({
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.listTasks();
        }
      })
  }

  updateDateTime(){
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
  }
}