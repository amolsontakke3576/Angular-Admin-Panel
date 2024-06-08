import { Component, OnInit, inject } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { MessageService } from 'primeng/api';

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
  private messageService: MessageService = inject(MessageService);

  constructor() {
    this.language = this.languageService.languageConstants;
  }

  public togglePasswordTextType(): void {
    this.passwordTextType = !this.passwordTextType;
  }

  public onClickTerm(): void {
    this.form.controls['acceptTerm'].setValue(!this.form.controls['acceptTerm'].value);
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      acceptTerm: [false],
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.validateForm) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.form.controls['email'].value, this.form.controls['password'].value)
        .then((userCredential) => {
          const user = userCredential.user;
          this.messageService.add({
            severity: 'success',
            summary: 'User Created',
            detail: 'User sign up successfully',
          });
          this.router.navigate(['/admin/sign-in']);
        })
        .catch((error) => {
          const errorMessage = error.message;
          this.messageService.add({ severity: 'error', summary: 'Failed to sign up', detail: errorMessage });
        });
    }
  }

  public get validateForm(): boolean {
    return (
      this.form.valid &&
      this.form.controls['password'].value === this.form.controls['confirmPassword'].value &&
      this.form.controls['acceptTerm'].value
    );
  }
}
