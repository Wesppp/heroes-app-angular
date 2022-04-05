import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], field: string, search: string = ''): any[] {
    if (!search.trim()) {return data}

    return data.filter(data => {
      return data[field].toLowerCase().includes(search.toLowerCase())
    })
  }

}
