import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  standalone: true,
  imports: [ClickOutsideDirective, RouterLink, AngularSvgIconModule],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'translateY(0)',
          visibility: 'visible',
        }),
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
          visibility: 'hidden',
        }),
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class ProfileMenuComponent {
  public isOpen = false;
  public profileMenu = [
    {
      title: 'Your Profile',
      icon: './assets/icons/heroicons/outline/user-circle.svg',
      link: '/dashboard/profile',
    },
    {
      title: 'Settings',
      icon: './assets/icons/heroicons/outline/cog-6-tooth.svg',
      link: '/dashboard/settings',
    },
    {
      title: 'Log out',
      icon: './assets/icons/heroicons/outline/logout.svg',
      link: '/',
    },
  ];

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
