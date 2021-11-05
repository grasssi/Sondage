import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty'
})
export class EmptyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    console.log(value);
    
    if (value==null){
      return "غير متوفر";
    }else
    return value;
    
  }

}
