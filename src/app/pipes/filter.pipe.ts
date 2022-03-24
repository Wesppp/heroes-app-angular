import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], search: string = ''): any[] {
    if (!search.trim()) {return users}

    return users.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
