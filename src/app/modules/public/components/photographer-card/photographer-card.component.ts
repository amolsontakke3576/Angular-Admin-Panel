import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Photographer } from 'src/app/core/models/photographer.model';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-photographer-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardModule, AvatarModule],
  templateUrl: './photographer-card.component.html',
  styleUrl: './photographer-card.component.scss',
})
export class PhotographerCardComponent {
  @Input() photographers: Photographer[] = [];

  public onViewProfile(photographer:Photographer): void {}

  public onSendEnquiry(photographer:Photographer): void {}
}
