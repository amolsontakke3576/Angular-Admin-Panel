import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() checkboxLabel: string = '';
  @Output() checkboxClick = new EventEmitter<void>();

  public onClickCheckbox(): void {
    this.checkboxClick.emit();
  }
}
