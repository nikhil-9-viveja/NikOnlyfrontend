import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TableComponent,
  TableColumn,
} from '../../shared/components/table/table.component';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-usermessage',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './usermessage.component.html',
  styleUrl: './usermessage.component.scss',
})
export class UsermessageComponent implements OnInit {
  columns: TableColumn[] = [
    { header: 'Name', field: 'Name', width: '200px' },
    { header: 'Phone Number', field: 'PhoneNumber', width: '150px' },
    {
      header: 'Loan Amount',
      field: 'LoanAmountRequired',
      type: 'number',
      width: '150px',
    },
    { header: 'Purpose', field: 'LoanPurpose', width: '200px' },
    { header: 'Created At', field: 'CreatedAt', type: 'date', width: '180px' },
  ];

  data: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.data = this.userService.getLoanEnquires();
    
  }

  onRowClick(row: any): void {
    console.log('Selected loan enquiry:', row);
  }
}
