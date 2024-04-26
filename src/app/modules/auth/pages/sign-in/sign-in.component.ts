import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxComponent } from 'src/app/shared/components/checkbox/checkbox.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    FloatLabelModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    NgClass,
    NgIf,
    ButtonComponent,
    CheckboxComponent,
  ],
})
export class SignInComponent implements OnInit {
  public form!: FormGroup;
  public submitted = false;
  public passwordTextType!: boolean;
  public language: any;

  private languageService: LanguageService = inject(LanguageService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);

  constructor() {
    this.language = this.languageService.languageConstants;
  }

  public onClick(): void {
    console.log('Button clicked');
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public togglePasswordTextType(): void {
    this.passwordTextType = !this.passwordTextType;
  }

  public onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.router.navigate(['/dashboard/overview']);
  }
}
