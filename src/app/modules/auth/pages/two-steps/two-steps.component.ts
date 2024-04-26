import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-steps',
  templateUrl: './two-steps.component.html',
  styleUrls: ['./two-steps.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, FloatLabelModule, ButtonComponent],
})
export class TwoStepsComponent implements OnInit {
  public form!: FormGroup;
  public language: any;
  public validateOtp: boolean = false;

  private languageService: LanguageService = inject(LanguageService);
  private router: Router = inject(Router);
  private formBuilder: FormBuilder = inject(FormBuilder);

  constructor() {
    this.language = this.languageService.languageConstants;
  }
  public inputs = Array(6);

  public onSubmit(): void {
    if (this.form.valid) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mobileNo: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    });
  }

  public onGetOtp(): void {
    this.validateOtp = !this.validateOtp;
  }
}
