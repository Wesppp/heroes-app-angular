import { Component, OnInit } from '@angular/core';
import { User } from "../../../shared/interfaces/user";
import { UserService } from "../../../shared/services/user.service";
import {Router} from "@angular/router";
import {GlobalService} from "../../../shared/services/global.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide: boolean = true
  user: User = {id: 0, name: '', password: '', role: 'user'}
  repeatPassword: string = ''
  isRepeatUser: boolean = false
  users: User[] = [];

  constructor(private userService: UserService,
              private router: Router,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users)
  }

  register(name: string, password: string) {
    name = name.trim()
    if (!name || !password) { return }

    if (this.userService.isRepeat(this.users, name)) {
      this.isRepeatUser = false
      this.userService.register({name, password} as User)
        .subscribe(user => {
          console.log(user)
            this.users.push(user)
            this.router.navigate(['/login-form'])
        }, error => this.globalService.openSnackBar(error.message))
    } else {
      this.isRepeatUser = true
    }
  }
}
