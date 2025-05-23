import { Component, inject, OnInit } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { AdminService } from '../../_services/admin.service';
import { LoanService } from '../../_services/loan.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [NzCarouselModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  
  loanType:any;
  emiplans:any;
  private adminService=inject(AdminService)
  private loanService=inject(LoanService)

  ngOnInit(): void {
    this.loanType=this.adminService.getLoanProducts()
    this.emiplans=this.loanService.getEmiPlans()
  }


}
