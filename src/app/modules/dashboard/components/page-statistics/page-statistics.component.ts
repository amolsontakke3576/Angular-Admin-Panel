import { Component, Input } from '@angular/core';
import { Statistics } from 'src/app/core/models/overview';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-statistics',
  standalone: true,
  imports: [CommonModule, TooltipModule,SkeletonModule],
  templateUrl: './page-statistics.component.html',
  styleUrl: './page-statistics.component.scss'
})
export class PageStatisticsComponent {
  @Input() public statistics: Statistics[] = [];
  @Input() public loading: boolean = true;

}
