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

}
