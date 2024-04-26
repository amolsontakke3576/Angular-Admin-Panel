import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-two-steps',
  templateUrl: './two-steps.component.html',
  styleUrls: ['./two-steps.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, ButtonComponent],
})
export class TwoStepsComponent {
  public language: any;

  private languageService: LanguageService = inject(LanguageService);
  private router: Router = inject(Router);

  constructor() {
    this.language = this.languageService.languageConstants;
  }
  public inputs = Array(6);

  public onSubmit(): void {
    this.router.navigate(['/dashboard']);
  }
}
