import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../interfaces/user";
import {UserService} from "../../../services/user.service";
import {GlobalService} from "../../../services/global.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  isEdit: boolean = false
  @Input() user: User = {id: 0, name: '', password: '', role: 'user'}
  @Input() users: User[] = []

  constructor(private userService: UserService,
              private globalService: GlobalService) {
  }

  ngOnInit(): void {
  }

  edit() {
    this.isEdit = true
  }

  delete(user: User) {
    swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(user.id).subscribe()
        this.globalService.updateComponent({refresh: true});
      }
    })
  }

  save(user: User) {
    this.isEdit = false
    this.userService.editUser(user).subscribe()
  }
}
