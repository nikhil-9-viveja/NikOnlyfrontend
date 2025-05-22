import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit{
  signinForm: FormGroup;
  isLoading = false;
  showPassword = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.signinForm = this.fb.group({
      adminId: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.signinForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      // Here you would typically call your authentication service
      // For example:
      // this.authService.login(this.signinForm.value).subscribe({
      //   next: (response) => {
      //     this.router.navigate(['/dashboard']);
      //   },
      //   error: (error) => {
      //     this.errorMessage = 'Invalid credentials. Please try again.';
      //     this.isLoading = false;
      //   }
      // });

      // For now, we'll just simulate a delay
      setTimeout(() => {
        this.isLoading = false;
        // Remove this in production and use actual authentication
        if (
          this.signinForm.value.adminId === 'admin' &&
          this.signinForm.value.password === 'password'
        ) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid credentials. Please try again.';
        }
      }, 1000);
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.signinForm.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName} is required`;
    }
    if (control?.hasError('minlength')) {
      return `${controlName} must be at least ${control.errors?.['minlength'].requiredLength} characters`;
    }
    return '';
  }
}
