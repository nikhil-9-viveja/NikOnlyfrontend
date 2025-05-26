import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from '../../_services/loan.service';
import { CommonModule } from '@angular/common';
import {
  TableComponent,
  TableColumn,
} from '../../shared/components/table/table.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-replaymentloan',
  standalone: true,
  imports: [CommonModule, TableComponent, ButtonComponent],
  templateUrl: './replaymentloan.component.html',
  styleUrl: './replaymentloan.component.scss',
})
export class ReplaymentloanComponent implements OnInit {
   userId: number | null = null;
  loanId: number | null = null;
  loanDetails: any[] = []; // Changed to array to store multiple loans
  emis: any[] = [];
  loading: boolean = false;

  emiColumns: TableColumn[] = [
    { header: 'EMI #', field: 'InstallmentNumber', type: 'number' },
    { header: 'Due Date', field: 'DueDate', type: 'date' },
    { header: 'Principal', field: 'PrincipalAmount', type: 'number' },
    { header: 'Interest', field: 'InterestAmount', type: 'number' },
    { header: 'Total', field: 'TotalAmount', type: 'number' },
    { header: 'Status', field: 'Status', type: 'text' },
    { header: 'Fine', field: 'Fine', type: 'number' },
  ];

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.userId = params['userId'] ? +params['userId'] : null;
      this.loanId = params['loanId'] ? +params['loanId'] : null;
      
      if (this.userId) {
        this.loadUserLoans();
      } else if (this.loanId) {
        this.loadLoanDetails();
      }
    });
  }

  loadUserLoans() {
    if (this.userId) {
      this.loading = true;
      this.loanService.getLoansData().subscribe({
        next: (loans: any[]) => {
          this.loanDetails = loans.filter(l => l.UserId === this.userId);
          this.loading = false;
          
          // If there's only one loan, load its EMIs automatically
          if (this.loanDetails.length === 1) {
            this.loanId = this.loanDetails[0].LoanApplicationId;
            this.loadEmis();
          }
        },
        error: (error) => {
          console.error('Error loading user loans:', error);
          this.loading = false;
        },
      });
    }
  }

  loadLoanDetails() {
    if (this.loanId) {
      this.loading = true;
      this.loanService.getLoansData().subscribe({
        next: (loans: any[]) => {
          const loan = loans.find(l => l.LoanApplicationId === this.loanId);
          if (loan) {
            this.loanDetails = [loan]; // Store as array for consistent template rendering
            this.userId = loan.UserId;
            this.loadEmis();
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading loan details:', error);
          this.loading = false;
        },
      });
    }
  }

  loadEmis() {
    if (!this.loanDetails.length) return;

    const loan = this.loanDetails[0]; // Get the first loan (for single loan view)
    const principal = loan.RequestedAmount;
    const rate = loan.InterestRate / 100 / 12; // Monthly interest rate
    const tenure = loan.RequestedTenure;

    // Calculate EMI using the formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi =
      (principal * rate * Math.pow(1 + rate, tenure)) /
      (Math.pow(1 + rate, tenure) - 1);

    this.emis = Array.from({ length: tenure }, (_, i) => {
      const installmentNumber = i + 1;
      const dueDate = new Date();
      dueDate.setMonth(dueDate.getMonth() + installmentNumber);

      const interestAmount = principal * rate;
      const principalAmount = emi - interestAmount;

      return {
        InstallmentNumber: installmentNumber,
        DueDate: dueDate.toISOString(),
        PrincipalAmount: principalAmount.toFixed(2),
        InterestAmount: interestAmount.toFixed(2),
        TotalAmount: emi.toFixed(2),
        Status: 'Pending',
        Fine: 0,
      };
    });
  }

  addFine(emi: any) {
    emi.Fine += 500;
    emi.Status = 'Overdue';
  }

  payEmi(emi: any) {
    emi.Status = 'Paid';
  }
}
