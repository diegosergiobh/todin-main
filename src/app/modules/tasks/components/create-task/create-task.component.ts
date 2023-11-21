import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private taskForm: FormBuilder,
    private taskService: TasksService,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const task = this.route.snapshot.data['task'];

    this.form = this.taskForm.group({
      id: [null],
      title: [null, [Validators.required]],
      category: [null, [Validators.required]],
      done: [false],
      deadline: ["2023-11-15T09:00:00.000"],
      userId: ["54da4694-cd9e-44e9-8273-ad9a4f276788"],
    });
  }

  onSubmit() {
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
            this.location.back();
          }
        })
    }
  }

  onCancel() {
    this.location.back();
  }
}
{

}
