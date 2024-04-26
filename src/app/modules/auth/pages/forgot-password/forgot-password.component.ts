import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, ButtonComponent, FloatLabelModule],
})
export class ForgotPasswordComponent implements OnInit {
  public form!: FormGroup;
  public language: any;
  public submitted = false;

  private languageService: LanguageService = inject(LanguageService);
  private router: Router = inject(Router);
  private formBuilder: FormBuilder = inject(FormBuilder);

  constructor() {
    this.language = this.languageService.languageConstants;
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.router.navigate(['/admin/sign-in']);
    }
  }
}
