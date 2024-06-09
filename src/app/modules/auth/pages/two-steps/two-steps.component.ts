import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { MessageService } from 'primeng/api';
declare const window: any;

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
  private messageService: MessageService = inject(MessageService);

  constructor() {
    this.language = this.languageService.languageConstants;
  }
  public inputs = Array(6);

  public onSubmit(): void {
    console.log(this.inputs);
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

  private sendOTP() {
    const auth = getAuth();
    const phoneNumber = this.form.controls['mobileNo'].value;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        this.messageService.add({ severity: 'success', summary: 'OTP sent to your mobile' });

      })
      .catch((error) => {
        this.messageService.add({ severity: 'error', summary: 'Failed to sent OTP on entered number', detail: error });
      });
  }
}
