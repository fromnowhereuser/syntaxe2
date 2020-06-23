import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilterByName'
})
export class UserFilterByNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
