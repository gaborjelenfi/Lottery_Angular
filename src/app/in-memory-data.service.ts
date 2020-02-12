import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Fav } from './fav';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const favourites = [
      {id: 0, nums: [1, 5, 8, 40, 42]},
      {id: 1, nums: [2, 5, 6, 23, 33]},
      {id: 2, nums: [2, 3, 25, 39, 40]},
      {id: 3, nums: [9, 15, 16, 32, 42]},
      {id: 4, nums: [10, 13, 28, 44, 45]},
      {id: 5, nums: [1, 5, 8, 40, 42]},
      {id: 6, nums: [2, 5, 6, 23, 33]},
      {id: 7, nums: [2, 3, 25, 39, 40]},
      {id: 8, nums: [9, 15, 16, 32, 42]},
      {id: 9, nums: [10, 13, 28, 44, 45]}
    ];
    return {favourites};
  }

  genId(favourites: Fav[]): number {
    return favourites.length > 0 ? Math.max(...favourites.map(favourite => favourite.id)) + 1 : 0;
  }
}
