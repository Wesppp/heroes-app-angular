import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../../../shared/services/hero.service";
import {Hero} from "../../../../shared/interfaces/hero";
import {GlobalService} from "../../../../shared/services/global.service";

@Component({
  selector: 'app-herro-add-dialog',
  templateUrl: './herro-add-dialog.component.html',
  styleUrls: ['./herro-add-dialog.component.scss']
})
export class HerroAddDialogComponent implements OnInit {

  name: string = '';
  heroes: Hero[] = []

  constructor(private heroService: HeroService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this.globalService.updateComponent({refresh: true});
  }

  add(name: string): void {
    if (this.heroService.isRepeat(this.heroes, name)) {
      name = name.trim()
      if (!name) {
        return
      }
      this.heroService.addHero({name} as Hero).subscribe(hero => {
        if (hero) {
          this.globalService.openSnackBar('A hero was added')
        }
      })
    } else {
      this.globalService.openSnackBar("this hero is already exist!")
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes
      });
  }
}
