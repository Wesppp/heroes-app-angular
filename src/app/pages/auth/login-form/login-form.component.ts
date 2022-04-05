import {Component, OnInit} from '@angular/core';
import {User} from "../../../shared/interfaces/user";
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {GlobalService} from "../../../shared/services/global.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide: boolean = true;
  user: User = {id: 0, name: '', password: '', role: 'user'}
  isExistUser: boolean = false

  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthService,
              private globalService: GlobalService) {
  }

  ngOnInit(): void {

  }

  login(name: string, password: string) {
    name = name.trim()
    if (!name || !password) {return}

      this.userService.login({ name, password } as User)
        .subscribe(user => {
          this.isExistUser = true
          if (user.length) {
            user.forEach(user => {
              if (user.name === name && user.password === password) {
                this.isExistUser = false
                this.authService.role = user.role!
                this.router.navigate(['/captcha'])
              }
            })
          }
        }, error => this.globalService.openSnackBar(error.message))
  }
}
