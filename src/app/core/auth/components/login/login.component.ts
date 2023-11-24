import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { LoginCredentials } from '../../models/login-credentials.model';
import { first } from 'rxjs';
import { UserToken } from '../../models/user-token.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  submitted: boolean = false;
  showSuccessMessage: boolean = false;
  email: string = '';
  invalidEmail: boolean = false;
  showPassword: boolean= false;

  @ViewChild('forgotPasswordModal') forgotPasswordModal!: TemplateRef<any>;

  constructor(private loginService: LoginService, private router: Router, private modalService: NgbModal){}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
  }

  public login(): void {
    const payload: LoginCredentials = this.loginForm.getRawValue();
    this.loginService
      .login(payload)
      .pipe(first())
      .subscribe({
        next: (res: UserToken) => {
          localStorage.setItem('TOKEN', res.token);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.router.navigate(['/tasks']);
        },
      });
  }

  openModal() {
    this.modalService.open(this.forgotPasswordModal);
  }

  closeModal(modal: any) {
    this.email = '';
    this.invalidEmail = false;
    this.showSuccessMessage = false;
    modal.close();
  }

  sendEmail(modal: any) {
    if (!this.email || !this.email.includes('@') || !this.email.includes('.')) {
      this.invalidEmail = true;
      return;
    }

    this.invalidEmail = false;
    this.showSuccessMessage = true;

    setTimeout(() => {
      this.email = '';
      this.showSuccessMessage = false;
      modal.close();
    }, 3000);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
}