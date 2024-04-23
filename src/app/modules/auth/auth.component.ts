import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import packageJson from '../../../../package.json';
import { LanguageService } from 'src/app/core/services/language.service';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    standalone: true,
    imports: [AngularSvgIconModule, RouterOutlet],
})
export class AuthComponent implements OnInit {
  public appJson: any = packageJson;
  public language: any;
  
  private languageService: LanguageService = inject(LanguageService);

  constructor() {
    this.language = this.languageService.languageConstants;
  }

  ngOnInit(): void {}
}
