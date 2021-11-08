import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty'
})
export class EmptyPipe implements PipeTransform {
  count: number = 0

  transform(value: any, ...args: unknown[]): any {
    this.count=0;
    for (let i = 1; i <= value.length-1; i++) {
        this.count += Number(value[i]);
    }
    const res = Math.round(((this.count) / (value.length-1)) * 100);
    return res +"% Oui" ;

  }

}
