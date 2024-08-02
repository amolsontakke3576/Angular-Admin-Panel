import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { GoogleMapComponent } from '../components/google-map/google-map.component';
import { PhotographerCardComponent } from '../components/photographer-card/photographer-card.component';
import { FooterComponent } from '../../layout/components/footer/footer.component';
import { DropdownModule } from 'primeng/dropdown';
import { Photographer } from 'src/app/core/models/photographer.model';
import { InputTextModule } from 'primeng/inputtext';
import { PHOTOGRAPHY_TYPES, STATES } from 'src/app/core/utils/constants';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PHOTOGRAPHERS } from 'src/app/core/utils/dummy';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    DropdownModule,
    FooterComponent,
    GoogleMapComponent,
    PhotographerCardComponent,
    InputTextModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public form: FormGroup;
  public photographyTypeOptions: { label: string; value: string }[] = PHOTOGRAPHY_TYPES;
  public statesOptions: { key: string; name: string }[] = STATES;
  public photographers: Photographer[] = PHOTOGRAPHERS;

  private fb: FormBuilder = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      search: [''],
      type: [''],
      state: [''],
    });
  }
}
