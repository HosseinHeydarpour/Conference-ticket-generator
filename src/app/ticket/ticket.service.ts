import { Injectable } from '@angular/core';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  user: User | undefined;
  constructor() {}

  setUser(userData: User) {
    this.user = userData;
  }

  getuser() {
    if (!this.user) return;
    return this.user;
  }
}
