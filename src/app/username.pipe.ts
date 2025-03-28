import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username',
  standalone: true,
})
export class UsernamePipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    return `@${value}`;
  }
}
