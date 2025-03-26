import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from './heading/heading.component';
import { FormComponent } from './form/form.component';
import { TicketService } from './ticket/ticket.service';
import { User } from './user.model';
import { tick } from '@angular/core/testing';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadingComponent, FormComponent, TicketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'conference-tciket-generator';
  ticketService = inject(TicketService);

  user = this.ticketService.user.asReadonly();
}
