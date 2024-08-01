import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-photographer-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './photographer-card.component.html',
  styleUrl: './photographer-card.component.scss',
})
export class PhotographerCardComponent {
  @Input() photographers: any[] = [];

  public onViewProfile(): void {}
}
