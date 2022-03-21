import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../user";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], search: string = ''): User[] {
    if (!search.trim()) {return users}

    return users.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
