import { Component } from '@angular/core';
import { DropComponent } from './drop/drop.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DropComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {}
