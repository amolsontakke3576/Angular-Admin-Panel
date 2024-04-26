import { Component, OnInit, inject } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    FloatLabelModule,
    AngularSvgIconModule,
    ButtonComponent,
  ],
})
export class SignUpComponent implements OnInit {
  public form!: FormGroup;
  public language: any;
  public submitted = false;
  public con = false;
  public passwordTextType!: boolean;

  private languageService: LanguageService = inject(LanguageService);
  private router: Router = inject(Router);
  private formBuilder: FormBuilder = inject(FormBuilder);

  constructor() {
    this.language = this.languageService.languageConstants;
  }

  public togglePasswordTextType(): void {
    this.passwordTextType = !this.passwordTextType;
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.router.navigate(['/admin/sign-in']);
    }
  }
}
