import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {
  captcha: string = ''
  isCorrect: boolean = true
  randomSymbols: string = this.globalService.makeCaptcha()

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private globalService: GlobalService) {
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
      this.randomSymbols = this.globalService.makeCaptcha()
    }
  }
}
