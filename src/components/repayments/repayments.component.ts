import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { LoanService } from '../../_services/loan.service';
import {
  TableColumn,
  TableComponent,
} from '../../shared/components/table/table.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repayments',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './repayments.component.html',
  styleUrl: './repayments.component.scss',
})
export class RepaymentsComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = null;
  loans: any[] = [];
  selectedLoan: any = null;
  emis: any[] = [];
  loading: boolean = false;

  userColumns: TableColumn[] = [
    { header: 'Name', field: 'firstName', type: 'text' },
    { header: 'Email', field: 'email', type: 'text' },
    { header: 'Phone', field: 'phoneNumber', type: 'text' },
  ];

  // loanColumns: TableColumn[] = [
  //   { header: 'Loan ID', field: 'LoanApplicationId', type: 'number' },
  //   { header: 'Product', field: 'LoanProductId', type: 'number' },
  //   { header: 'Amount', field: 'RequestedAmount', type: 'number' },
  //   { header: 'Status', field: 'Status', type: 'text' },
  // ];

  // emiColumns: TableColumn[] = [
  //   { header: 'EMI #', field: 'InstallmentNumber', type: 'number' },
  //   { header: 'Due Date', field: 'DueDate', type: 'date' },
  //   { header: 'Principal', field: 'PrincipalAmount', type: 'number' },
  //   { header: 'Interest', field: 'InterestAmount', type: 'number' },
  //   { header: 'Total', field: 'TotalAmount', type: 'number' },
  //   { header: 'Status', field: 'Status', type: 'text' },
  //   { header: 'Fine', field: 'Fine', type: 'number' },
  // ];

  constructor(
    private userService: UserService,
    private loanService: LoanService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.loading = false;
      },
    });
  }

  onUserSelect(user: any) {
    if (user && user.userId) {
      this.router.navigate(['/repayment/user', user.userId]);
    }
  }

  onLoanSelect(loan: any) {
    this.router.navigate(['/repayment/loan', loan.LoanApplicationId]);
  }
}
