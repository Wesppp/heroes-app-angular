import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit {
  hide: boolean = true
  userNotExist: boolean = false
  existNickname: string = ''
  restoredPassword: string = ''

  constructor(private userService: UserService) { }

  restore(name: string) {
    name = name.trim()
    if (!name) { return }

    this.userService.restore(name)
      .subscribe(user => {
        this.restoredPassword = ''
        this.userNotExist = true
        if (user.length) {
          console.log(user)
          this.userNotExist = false
          this.restoredPassword = user[0].password
        }
      })
  }

  ngOnInit(): void {
  }

}
