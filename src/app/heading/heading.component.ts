import { Component, inject } from '@angular/core';
import { TicketService } from '../ticket/ticket.service';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
})
export class HeadingComponent {
  ticketService = inject(TicketService);

  user = this.ticketService.userInfo!;

  get firstName() {
    return this.user()?.name.split(' ')[0];
  }

  get lastName() {
    return this.user()?.name.split(' ')[1];
  }
}
