import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Pipe({
  name: 'user',
  // pure: false
})
export class UserPipe implements PipeTransform {

  transform(value: User, ...args: string[]): string {
    if(!value) {
      return '';
    }
    return `user[name:${value.name} isadmin:${value.isAdmin}]`;
  }
}