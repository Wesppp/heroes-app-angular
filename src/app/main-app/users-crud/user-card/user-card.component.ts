import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../user";
import {UserService} from "../../../user.service";
import {UsersCRUDComponent} from "../users-crud.component";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  isEdit: boolean = false
  @Input() user: User = {id: 0, name: '', password: ''}

  constructor(private userService: UserService,
              private usersCRUDComponent: UsersCRUDComponent) { }

  ngOnInit(): void {
  }

  edit() {
    this.isEdit = true
  }

  delete(user: User) {
    this.usersCRUDComponent.users = this.usersCRUDComponent.users.filter(u => u !== user)
    this.userService.deleteUser(user.id).subscribe()
  }

  save(user: User) {
    this.isEdit = false
    this.userService.editUser(user).subscribe()
  }
}
