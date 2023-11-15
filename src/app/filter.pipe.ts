import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (!value) return null;
    if (!args) return value;

    const filterValue = args.toString().toLowerCase();
    return value.filter(function (item:any) {
      return JSON.stringify(item).toLowerCase().includes(filterValue);
    });
  }

}
