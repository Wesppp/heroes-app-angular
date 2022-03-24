import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HeroService} from "../../../hero.service";
import {Hero} from "../../../hero";
import {HeroesComponent} from "../heroes.component";

@Component({
  selector: 'app-herro-add-dialog',
  templateUrl: './herro-add-dialog.component.html',
  styleUrls: ['./herro-add-dialog.component.scss']
})
export class HerroAddDialogComponent implements OnInit {

  name: string = '';

  constructor(private snackBar: MatSnackBar,
              private heroService: HeroService,
              private heroesComponent: HeroesComponent) { }

  ngOnInit(): void {
  }

  add(name: string): void {
    if (this.heroService.isRepeat(this.heroesComponent.heroes, name)) {
      name = name.trim()
      if (!name) {
        return
      }
      this.heroService.addHero({name} as Hero).subscribe()
      this.openSnackBar(name, 'A hero was added')
    } else {
      this.openSnackBar(name, "this hero is already exist!")
    }
  }

  openSnackBar(name: string, message: string) {
    name = name.trim()
    if (!name) {
      return
    }

    this.snackBar.open(`${message}`, '', {
      duration: 2000
    })
  }
}
