import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({
    required: true,
  })
  type!: 'button' | 'submit';
  @Input() ifDisabled: boolean = false;
}
