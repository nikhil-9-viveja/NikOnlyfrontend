import { Component, inject, OnInit } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { AdminService } from '../../_services/admin.service';

@Component({
  selector: 'app-dashboard',
  imports: [NzCarouselModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  
  loanType:any;
  private adminService=inject(AdminService)

  ngOnInit(): void {
    this.adminService.getLoanProducts().subscribe(data=>{
      console.log(data.length)
      this.loanType=data
    })
  }


}
