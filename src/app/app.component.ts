import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from './heading/heading.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadingComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'conference-tciket-generator';
}
