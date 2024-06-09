import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { MessageService } from 'primeng/api';

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
  private messageService: MessageService = inject(MessageService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);

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
      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:4200/admin/reset-password',
        handleCodeInApp: true,
      };
      const auth = getAuth();
      sendSignInLinkToEmail(auth, this.form.controls['email'].value, actionCodeSettings)
        .then(() => {
          this.router.navigate(['/admin/sign-in']);
          this.messageService.add({ severity: 'success', summary: 'Verification link sent to your email address' });
        })
        .catch((error) => {
          const errorMessage = error.message;
          this.messageService.add({ severity: 'error', summary: 'Failed to sent reset link', detail: errorMessage });
        });
    }
  }
}
