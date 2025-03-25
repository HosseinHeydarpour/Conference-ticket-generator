import { Component, viewChild, ViewChild } from '@angular/core';
import { DropComponent } from './drop/drop.component';
import { ButtonComponent } from '../button/button.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DropComponent, ButtonComponent, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private form = viewChild<NgForm>('form');
  onSubmit() {
    console.log(this.form()?.form.value.email);
    console.log('Submitted!');
  }
}
