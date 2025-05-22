import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../_services/admin.service';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  // signupForm: FormGroup;
  // isLoading = false;
  // showPassword = false;
  // errorMessage = '';

  // constructor(private fb: FormBuilder, private router: Router,private adminservice:AdminService) {
  //   this.signupForm = this.fb.group(
  //     {
  //       name: ['', [Validators.required, Validators.minLength(8)]],
  //       email: ['', [Validators.required, Validators.email]],
  //       phoneNumber: [
  //         '',
  //         [Validators.required, Validators.pattern('^[0-9]{10}$')],
  //       ],
  //       password: [
  //         '',
  //         [
  //           Validators.required,
  //           Validators.minLength(8),
  //           Validators.pattern(
  //             '^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$'
  //           ),
  //         ],
  //       ],
  //       confirmPassword: ['', [Validators.required]],
  //     },
  //     {
  //       validators: this.passwordMatchValidator,
  //     }
  //   );
  // }

  // ngOnInit(): void {}

  // passwordMatchValidator(form: FormGroup) {
  //   const password = form.get('password');
  //   const confirmPassword = form.get('confirmPassword');

  //   if (password?.value !== confirmPassword?.value) {
  //     confirmPassword?.setErrors({ passwordMismatch: true });
  //   } else {
  //     confirmPassword?.setErrors(null);
  //   }
  // }

  // togglePasswordVisibility(): void {
  //   this.showPassword = !this.showPassword;
  // }

  // onSubmit(): void {
  //   if (this.signupForm.valid) {
  //     this.isLoading = true;
  //     this.errorMessage = '';

  //     // Here you would typically call your registration service
  //     // For example:
  //     this.adminservice.signUpData(this.signupForm.value).subscribe({
  //       next: (response) => {
  //         this.router.navigate(['/signin']);
  //         console.log("Register data:",response)
  //       },
  //       error: (error) => {
  //         this.errorMessage = 'Registration failed. Please try again.';
  //         this.isLoading = false;
  //       }
  //     });

  //     // For now, we'll just simulate a delay
  //     setTimeout(() => {
  //       this.isLoading = false;
  //       this.router.navigate(['/signin']);
  //     }, 1000);
  //   }
  // }

  // getErrorMessage(controlName: string): string {
  //   const control = this.signupForm.get(controlName);
  //   if (control?.hasError('required')) {
  //     return `${controlName} is required`;
  //   }
  //   if (control?.hasError('minlength')) {
  //     return `${controlName} must be at least ${control.errors?.['minlength'].requiredLength} characters`;
  //   }
  //   if (control?.hasError('email')) {
  //     return 'Please enter a valid email address';
  //   }
  //   if (control?.hasError('pattern')) {
  //     if (controlName === 'phoneNumber') {
  //       return 'Please enter a valid 10-digit phone number';
  //     }
  //     if (controlName === 'password') {
  //       return 'Password must contain at least one alphabet, one number, and one special character (!@#$%^&*)';
  //     }
  //   }
  //   if (control?.hasError('passwordMismatch')) {
  //     return 'Passwords do not match';
  //   }
  //   return '';
  // }
  // redirect(){
  //   this.router.navigate(['/signin'])
  // }

}
