import {Component, OnInit} from '@angular/core';
import {User} from "../../../interfaces/user";
import {UserService} from "../../../services/user.service";
import {GlobalService} from "../../../services/global.service";

@Component({
  selector: 'app-user-add-dialog',
  templateUrl: './user-add-dialog.component.html',
  styleUrls: ['./user-add-dialog.component.scss']
})
export class UserAddDialogComponent implements OnInit {

  user: User = {id: 0, name: '', password: '', role: ''}
  users: User[] = [];

  constructor(private userService: UserService,
              private globalService: GlobalService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users.slice(1)
      })
  }

  ngOnDestroy(): void {
    this.globalService.updateComponent({refresh: true});
  }

  save(name: string, password: string, role: string) {
    if (this.userService.isRepeat(this.users, name)) {
      this.userService.register({name, password, role} as User).subscribe(user => {
          if (user) {
            this.globalService.openSnackBar('User was added')
          }
        })
    } else {
      this.globalService.openSnackBar('This user already exist!')
    }
  }
}
