import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersPipes'
})
export class UsersPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    return null;
  }

}
