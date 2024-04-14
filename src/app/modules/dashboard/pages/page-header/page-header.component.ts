import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  @Input() public title: string = '';
  @Input() public breadcrumb: string = '';
  @Input() public buttons: { label: string; active: boolean }[] = [];
}
