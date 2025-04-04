import { Component, inject, signal } from '@angular/core';
import { TicketService } from './ticket.service';
import { UsernamePipe } from '../username.pipe';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [UsernamePipe],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
})
export class TicketComponent {
  ticketService = inject(TicketService);

  user = this.ticketService.user.asReadonly();

  constructor() {}

  get randomNumber() {
    return String(Math.floor(Math.random() * 100000)).padStart(5, '0');
  }
}
