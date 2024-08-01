import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularSvgIconModule, SvgIconRegistryService, SvgLoader } from 'angular-svg-icon';
import { NavbarMenuComponent } from 'src/app/modules/layout/components/navbar/navbar-menu/navbar-menu.component';
import { NavbarMobileComponent } from 'src/app/modules/layout/components/navbar/navbar-mobile/navbar-mobilecomponent';
import { ProfileMenuComponent } from 'src/app/modules/layout/components/navbar/profile-menu/profile-menu.component';
import packageJson from '../../../../../../package.json';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AngularSvgIconModule, NavbarMenuComponent, ProfileMenuComponent, NavbarMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public appJson: any = packageJson;

}
