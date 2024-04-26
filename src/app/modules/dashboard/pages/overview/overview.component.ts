import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { CardModule } from 'primeng/card';
import { Statistics } from 'src/app/core/models/overview';
import { PageStatisticsComponent } from '../../components/page-statistics/page-statistics.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [PageHeaderComponent, CardModule, PageStatisticsComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  public stats: Statistics[] = [
    {
      title: 'Total Enquiries',
      value: 100,
      className: '',
      icon: 'pi pi-envelope',
      tooltip: '',
    },
    {
      title: 'Total Bookings',
      value: 100,
      className: '',
      icon: 'pi pi-address-book',
      tooltip: '',
    },
    {
      title: 'Total Customers',
      value: 100,
      className: '',
      icon: 'pi pi-user',
      tooltip: '',
    },
  ];
}
