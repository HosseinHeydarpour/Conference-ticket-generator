import { Injectable, signal } from '@angular/core';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  user = signal<User | undefined>(undefined);
  constructor() {}

  setUser(userData: User) {
    this.user.set(userData);
  }
}
