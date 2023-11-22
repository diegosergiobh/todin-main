import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {


  private readonly API = 'http://localhost:5000/tasks';
  private token = localStorage.getItem('TOKEN');


  constructor(private http: HttpClient) { }

  getById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.API}/${id}`);
  }

  list(){
    return this.http.get<Task[]>(this.API);
  }

  create(task: Task){
    return this.http.post(this.API, task).pipe(first());
  }

  update(task: Task): Observable<void>{
    return this.http.put<void>(`${this.API}/${task.id}`, task);
  }

  remove(id: number){
    return this.http.delete(`${this.API}/${id}`).pipe(first());
  }

}
