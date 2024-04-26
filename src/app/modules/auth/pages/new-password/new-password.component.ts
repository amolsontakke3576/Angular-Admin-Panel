import { Component, OnInit, inject } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    ButtonComponent,
    FloatLabelModule,
  ],
})
export class NewPasswordComponent implements OnInit {
  public language: any;
  public form!: FormGroup;
  public submitted: boolean = false;

  private languageService: LanguageService = inject(LanguageService);
  private router: Router = inject(Router);
  private formBuilder: FormBuilder = inject(FormBuilder);

  constructor() {
    this.language = this.languageService.languageConstants;
  }
  public inputs = Array(6);

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.router.navigate(['/dashboard']);
    }
  }
}
