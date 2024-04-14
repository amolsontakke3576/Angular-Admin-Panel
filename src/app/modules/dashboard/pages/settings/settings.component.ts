import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
