import { BarChartOutline } from '@ant-design/icons-angular/icons';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';



@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule],
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
}
