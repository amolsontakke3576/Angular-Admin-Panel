import { Component, OnInit, inject } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/core/services/theme.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, AngularSvgIconModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  public language: any;
  public themeColors: { label: string; name: string; code: string }[];
  public themeMode: { name: string; code: string }[];

  private languageService: LanguageService = inject(LanguageService);

  constructor(public themeService: ThemeService) {
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
    this.themeMode = [
      { name: this.language.light, code: 'light' },
      { name: this.language.dark, code: 'dark' },
    ];
  }

  toggleThemeMode() {
    this.themeService.theme.update((theme) => {
      const mode = !this.themeService.isDark ? 'dark' : 'light';
      return { ...theme, mode: mode };
    });
  }

  toggleThemeColor(color: string) {
    this.themeService.theme.update((theme) => {
      return { ...theme, color: color };
    });
  }
}
