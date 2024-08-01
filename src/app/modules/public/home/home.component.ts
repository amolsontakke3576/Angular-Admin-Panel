import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { GoogleMapComponent } from '../components/google-map/google-map.component';
import { PhotographerCardComponent } from '../components/photographer-card/photographer-card.component';
import { FooterComponent } from '../../layout/components/footer/footer.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FloatLabelModule, DropdownModule, FooterComponent, GoogleMapComponent, PhotographerCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public photographers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  public states: any[] = [];
}
