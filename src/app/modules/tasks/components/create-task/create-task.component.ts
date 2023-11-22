import { LoginService } from './../../../../core/auth/services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  private taskId?: string;
  userId!: string;

  constructor(
    private taskService: TasksService,
    private location: Location,
    private route: ActivatedRoute,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.userId = this.loginService.getUserId();
    this.buildForm();
    this.getIdFromUrl();
  }

  private buildForm(): void{
    this.form = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      done: new FormControl(false),
      deadline: new FormControl("2023-11-15T09:00:00.000"),
      userId: new FormControl(this.userId),
    });
  }

  public getIdFromUrl(){
    this.taskId = this.route.snapshot.params['id'];
    if(this.taskId){
      this.getTaskById();
    }
  }

  private getTaskById(){
    this.taskService
      .getById(this.taskId!)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.form.patchValue(res);
        },
        error: (err) => {
          console.log(err);
        },
      })
  }

  onSave(){
    if(this.taskId){
      this.onUpdate();
    } else {
      this.onCreate();
    }
  }

  onCreate() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submitted');
      this.taskService
        .create(this.form.getRawValue())
        .pipe(first())
        .subscribe({
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.location.back()
          }
        })
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  onUpdate(){
    this.submitted = true;
    if(this.form.valid){
      this.taskService
        .update(this.form.getRawValue())
        .pipe(first())
        .subscribe({
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.location.back()
          }
        })
    }
  }
}
