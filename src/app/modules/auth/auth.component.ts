import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import packageJson from '../../../../package.json';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    standalone: true,
    imports: [AngularSvgIconModule, RouterOutlet],
})
export class AuthComponent implements OnInit {
  public appJson: any = packageJson;
  constructor() {}

  ngOnInit(): void {}
}