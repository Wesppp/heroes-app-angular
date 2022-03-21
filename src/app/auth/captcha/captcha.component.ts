import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {
  captcha: string = ''
  isCorrect: boolean = true
  randomSymbols: string = this.userService.makeCaptcha()

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(captcha: string) {
    if (captcha === this.randomSymbols) {
      this.isCorrect = true
      this.authService.isLoggedIn = true
      this.router.navigate(['/dashboard'])
    } else {
      this.isCorrect = false
      this.randomSymbols = this.userService.makeCaptcha()
    }
  }
}
