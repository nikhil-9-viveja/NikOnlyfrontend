import { BarChartOutline } from '@ant-design/icons-angular/icons';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { UserService } from '../_services/user.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule,CommonModule],
   providers: [
    {
      provide: NZ_ICONS,
      useValue: [BarChartOutline],
    },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCollapsed = false;
  showDot = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    const allUsers = this.userService.userDetails;
    
    // Option 1: Check for recently created users (e.g., today)
    const today = new Date().toISOString().split('T')[0];
    this.showDot = allUsers.some(user => user.createdAt === today);

    // Option 2: Show dot if userId is above a threshold (e.g., new users > 5)
    // this.showDot = allUsers.some(user => user.userId > 5);
  }
}
