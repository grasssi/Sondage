import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    //La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON.
    return value.filter((item: any) => {
      return item.ram?.capacite?.toLowerCase().includes(args) ||
      item.systeme?.systeme?.toLowerCase().includes(args) ||
      item.type?.type?.toLowerCase().includes(args) ||
      item.SerialNumber?.toLowerCase().includes(args) ||
      item.service?.nomService?.toLowerCase().includes(args)||
      item.owner?.firstName?.toLowerCase().includes(args)||
      item.owner?.lastName?.toLowerCase().includes(args)||
      item.domaine?.toLowerCase().includes(args)||
      item.application?.application?.toLowerCase().includes(args)||
      item.situation?.toLowerCase().includes(args)||
      item.Marque?.marque?.toLowerCase().includes(args);



    });
  }
}
