import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'userFilterByName',
  pure: false
})
export class UserFilterByNamePipe implements PipeTransform {

  transform(value: Array<User>, ...args: string[]): Array<User> {
    if (!args[0]) {
      return value;
    }
    return value.filter(user => user.name.includes(args[0]));
  }

}
