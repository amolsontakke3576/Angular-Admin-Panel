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
import { LanguageService } from 'src/app/core/services/language.service';
import { ThemeService } from 'src/app/core/services/theme.service';

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
  public themeColors: { label: string; name: string; code: string }[];
  public language: any;

  private languageService: LanguageService = inject(LanguageService);

  private fb: FormBuilder = inject(FormBuilder);
  public themeService: ThemeService = inject(ThemeService);

  constructor() {
    this.form = this.fb.group({
      search: [''],
      type: [''],
      state: [''],
    });

    this.language = this.languageService.languageConstants;


    this.themeColors = [
      {
        name: 'base',
        label: this.language.base,
        code: '#e11d48',
      },
      {
        name: 'yellow',
        label: this.language.yellow,
        code: '#f59e0b',
      },
      {
        name: 'green',
        label: this.language.green,
        code: '#22c55e',
      },
      {
        name: 'blue',
        label: this.language.blue,
        code: '#3b82f6',
      },
      {
        name: 'orange',
        label: this.language.orange,
        code: '#ea580c',
      },
      {
        name: 'red',
        label: this.language.red,
        code: '#cc0022',
      },
      {
        name: 'violet',
        label: this.language.violet,
        code: '#6d28d9',
      },
    ];
  }


  toggleThemeColor(color: string) {
    this.themeService.theme.update((theme) => {
      return { ...theme, color: color };
    });
  }
}
