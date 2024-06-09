import { Component, inject } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { Router, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import packageJson from 'package.json';
import { ToastModule } from 'primeng/toast';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgClass, RouterOutlet, ToastModule, ResponsiveHelperComponent],
})
export class AppComponent {
  public appJson: any = packageJson;
  title = this.appJson.displayName;

  private router: Router = inject(Router);

  constructor(public themeService: ThemeService) {
    // Initialize Firebase
    const app = initializeApp(environment.firebaseConfig);
    getAnalytics(app);
  }
}
