import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 11, name: 'Shelly', power: 1000},
      { id: 12, name: 'Narco', power: 800 },
      { id: 13, name: 'Bombasto', power: 2000 },
      { id: 14, name: 'Nita', power: 500 },
      { id: 15, name: 'Dynamike', power: 9000 },
      { id: 16, name: 'Frank', power: 1000 },
      { id: 17, name: 'Dynama', power: 1100 },
      { id: 18, name: 'Fang', power: 850 },
      { id: 19, name: 'Magma', power: 200 },
      { id: 20, name: 'Spike', power: 3000 }
    ]

    const users = [
      {id: 11, name:'admin', password: 'admin', role: 'admin'}
    ]
    return {heroes, users}
  }

  genId(heroes: Hero[], users: User[]): number {
    return (heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11) ||
      (users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11) ;
  }


  constructor() { }
}
