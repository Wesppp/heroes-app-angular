import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";
import {MessageService} from "../../services/message.service";
import {UserAddDialogComponent} from "./user-add-dialog/user-add-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.scss']
})
export class UsersCRUDComponent implements OnInit {
  search: string = ''
  user: User = {id: 0, name: '', password: '', role: 'user'}
  users: User[] = []
  isAdd: boolean = false;
  isProgessBarVisible: boolean = true;
  value: number = 50;

  constructor(private userService: UserService,
              private messageService: MessageService,
              public dialog: MatDialog,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.messageService.clear()

    this.getUsers()

    this.globalService.updateObservable$.subscribe(res => {
      if(res.refresh){
        this.getUsers();
      }
    })
  }

  filter(role: string) {
    this.userService.getUsers()
      .subscribe(users => {
        if (users.length) {
          this.users = users.slice(1).filter( (user) => user.role === role)
        } else {
          this.globalService.openSnackBar('Error')
        }
      })
  }

  showAll() {
    this.getUsers()
  }

  addModal() {
    this.dialog.open(UserAddDialogComponent);
  }

  close() {
    this.isAdd = false
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => {
        if (users.length) {
          this.users = users.slice(1)
          this.isProgessBarVisible = false
        } else {
          this.globalService.openSnackBar('Error')
        }
      })
  }
}

