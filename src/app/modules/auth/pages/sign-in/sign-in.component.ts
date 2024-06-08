import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { LanguageService } from 'src/app/core/services/language.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxComponent } from 'src/app/shared/components/checkbox/checkbox.component';
import { environment } from 'src/environments/environment';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth';
import { MessageService } from 'primeng/api';

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
  public loginOptions = environment.loginOptions;

  private languageService: LanguageService = inject(LanguageService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);
  private messageService: MessageService = inject(MessageService);

  constructor() {
    this.language = this.languageService.languageConstants;
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

  public onFacebookLogin(): void {
    // Facebook App ID and app secret is required to configure on firebase Authentication section
    // const provider = new FacebookAuthProvider();
    // const auth = getAuth();
    // provider.setCustomParameters({
    //   display: 'popup',
    // });
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     const user = result.user;
    //     const credential = FacebookAuthProvider.credentialFromResult(result);
    //     const accessToken = credential?.accessToken;
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = FacebookAuthProvider.credentialFromError(error);
    //     this.messageService.add({ severity: 'error', summary: 'Failed to Facebook login', detail: errorMessage });
    //   });
  }

  public onTwitterLogin(): void {
    // Twitter API key and API secret is required to configure on firebase Authentication section.
    // const provider = new TwitterAuthProvider();
    // const auth = getAuth();
    // auth.useDeviceLanguage();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    //     // You can use these server side with your app's credentials to access the Twitter API.
    //     const credential = TwitterAuthProvider.credentialFromResult(result);
    //     const token = credential?.accessToken;
    //     const secret = credential?.secret;
    //     this.redirectToDashboard();
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     this.messageService.add({ severity: 'error', summary: 'Failed to X (Twitter) login', detail: errorMessage });
    //   });
  }

  public onGoogleLogin(): void {
    // Initialize Google Login
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        this.redirectToDashboard();
      })
      .catch((error) => {
        const errorMessage = error.message;
        this.messageService.add({ severity: 'error', summary: 'Failed to Google login', detail: errorMessage });
      });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.form.controls['email'].value, this.form.controls['password'].value)
        .then((userCredential) => {
          const user = userCredential.user;
          this.redirectToDashboard();
        })
        .catch((error) => {
          const errorMessage = error.message;
          this.messageService.add({ severity: 'error', summary: 'Failed to login', detail: errorMessage });
        });
    }
  }

  private redirectToDashboard(): void {
    this.router.navigate(['/dashboard/overview']);
  }
}
