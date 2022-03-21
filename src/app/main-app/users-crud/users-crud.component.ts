import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import {User} from "../../user";
import {MessageService} from "../../message.service";

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.scss']
})
export class UsersCRUDComponent implements OnInit {
  search: string = ''
  user: User = {id: 0, name: '', password: ''}
  users: User[] = []
  isAdd: boolean = false;

  constructor(private userService: UserService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.clear()
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users.slice(1)
      })
  }

  add() {
    this.isAdd = true
  }

  save(name: string, password: string) {
    this.userService.register({name, password} as User).subscribe(
      user => {this.users.push(user)}
    )
    this.isAdd = false
  }

  close() {
    this.isAdd = false
  }
}

