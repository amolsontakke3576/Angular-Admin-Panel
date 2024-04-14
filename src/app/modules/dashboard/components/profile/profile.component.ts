import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../pages/page-header/page-header.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
