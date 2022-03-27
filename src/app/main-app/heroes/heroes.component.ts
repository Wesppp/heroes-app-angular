import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import {Hero} from '../../hero';
import {HeroService} from '../../hero.service';
import {MatDialog} from "@angular/material/dialog";
import {HerroAddDialogComponent} from "./herro-add-dialog/herro-add-dialog.component";
import {GlobalService} from "../../global.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  value: number = 50
  isProgessBarVisible: boolean = true;
  heroes: Hero[] = [];
  search: string = '';

  constructor(private heroService: HeroService,
              public dialog: MatDialog,
              private globalService: GlobalService) {
  }

  ngOnInit(): void {
    this.getHeroes()

    this.globalService.updateObservable$.subscribe(res => {
      if(res.refresh){
        console.log("update")
        this.getHeroes();
      }
    })
  }

  openDialog() {
    this.dialog.open(HerroAddDialogComponent);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes
        this.isProgessBarVisible = false
      });
  }

  delete(hero: Hero): void {
    swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary hero!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero.id).subscribe();
      }
    })
  }
}
