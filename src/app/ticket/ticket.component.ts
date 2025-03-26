import { Component, inject, signal } from '@angular/core';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
})
export class TicketComponent {
  ticketService = inject(TicketService);

  user = this.ticketService.user.asReadonly();

  constructor() {}
}
