import { Component, inject, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoanService } from '../../_services/loan.service';
import { TableComponent } from '../../shared/components/table/table.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-createloan',
  imports: [TableComponent, CommonModule],
  templateUrl: './createloan.component.html',
  styleUrl: './createloan.component.scss',
})
export class CreateloanComponent implements OnInit {
  loans: any[] = [];
  showModal: boolean = false;
  // loanForm: FormGroup;
  loading: boolean = false;
  private loanService = inject(LoanService);

  // constructor( private fb: FormBuilder) {
  //   this.loanForm = this.fb.group({
  //     userId: [''],
  //     gender: [''],
  //     dob: [''],
  //     aadhaar: [''],
  //     address: [''],
  //     income: [''],
  //     employmentType: [''],
  //     loanProductId: [''],
  //     requestedAmount: [''],
  //     requestedTenure: [''],
  //     interestRate: [''],
  //     purpose: [''],
  //   });
  // }

  ngOnInit() {
    this.fetchLoans();
  }

  fetchLoans() {
    this.loading = true;
    this.loanService.getAllLoans().subscribe({
      next: (data: any) => {
        this.loans = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  // openAddLoanModal() {
  //   this.showModal = true;
  //   this.loanForm.reset();
  // }

  // closeModal() {
  //   this.showModal = false;
  // }

  // submitLoan() {
  //   if (this.loanForm.valid) {
  //     this.loanService.addLoan(this.loanForm.value).subscribe({
  //       next: () => {
  //         this.closeModal();
  //         this.fetchLoans();
  //       },
  //       error: () => {
  //         /* handle error */
  //       },
  //     });
  //   }
  // }
}
