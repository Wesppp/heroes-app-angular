import {Component, OnInit} from '@angular/core';
import {User} from "../../user";
import {UserService} from "../../user.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide: boolean = true;
  logNickname: string = ''
  logPassword: string = ''
  isExistUser: boolean = false

  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  login(name: string, password: string) {
    name = name.trim()
    if (!name || !password) {return}

      this.userService.login({ name, password } as User)
        .subscribe(user => {
          this.isExistUser = true
          if (user.length && user[0].password === password) {
            this.isExistUser = false
            this.authService.isLoggedIn = true
            this.router.navigate(['/dashboard'])
          }
        })
  }
}