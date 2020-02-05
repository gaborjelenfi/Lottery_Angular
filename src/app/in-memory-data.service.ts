import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const favourites = [
      [1, 5, 8, 40, 42],
      [2, 5, 6, 23, 33],
      [2, 3, 25, 39, 40],
      [9, 15, 16, 32, 42],
      [10, 13, 28, 44, 45],
    ];
    return {favourites};
  }

  constructor() { }
}
