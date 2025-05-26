import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RepaymentService } from '../../_services/repayment.service';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { TableComponent } from '../../shared/components/table/table.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    TableComponent,
    ButtonComponent,
    FormsModule,
    CommonModule,
    NzModalModule,
  ],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss',
})
export class DocumentsComponent implements OnInit{
   repaymentData: any[] = [];
  columns: any[] = [];
  selectedId: number | null = null;

  @ViewChild('radioTpl', { static: true }) radioTpl!: TemplateRef<any>;

  constructor(
    private repaymentService: RepaymentService,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.repaymentService.getBankStmts().subscribe((data: any[]) => {
      this.repaymentData = data.flatMap((loan) =>
        (loan.bankStatements || []).map((stmt: any) => ({
          ...stmt,
          loanApplicationId: loan.loanApplicationId,
          userId: loan.userId,
          income: loan.income,
          requestedAmount: loan.requestedAmount,
          interestRate: loan.interestRate,
          loanStatus: loan.status,
          message: '',
        }))
      );

      this.columns = [
        {
          field: 'select',
          header: 'Select',
          type: 'custom',
          customTemplate: this.radioTpl,
        },
        { field: 'documentName', header: 'Document Name' },
        { field: 'loanApplicationId', header: 'Loan App ID' },
        { field: 'userId', header: 'User ID' },
        { field: 'income', header: 'Income' },
        { field: 'requestedAmount', header: 'Requested Amount' },
        { field: 'interestRate', header: 'Interest Rate' },
        { field: 'message', header: 'Message' },
      ];
    });
  }

  onSubmit(): void {
    const selected = this.repaymentData.find(
      (item) => item.bankStatementId === this.selectedId
    );
    if (!selected) return;

    selected.message = `Document submitted`;
    localStorage.setItem('submittedDocument', JSON.stringify(selected));

    this.modal.success({
      nzTitle: 'Success',
      nzContent: `Document uploaded for ${selected.documentName}`,
    });
  }
}
