import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  update = new BehaviorSubject<any>('');
  updateObservable$ = this.update.asObservable();

  updateComponent(data: any) {
    if (data) {
      this.update.next(data);
    }
  }

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    this.snackBar.open(`${message}`, '', {
      duration: 2000
    })
  }

  makeCaptcha() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
}
