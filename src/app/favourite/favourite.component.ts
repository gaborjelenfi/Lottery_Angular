import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Fav } from '../fav';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  animations: [
    trigger('selected', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-200px)'
        }),
        animate('300ms', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({
          transform: 'translateX(200px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class FavouriteComponent implements OnInit {
  faStar = faStar;
  faTrash = faTrash;

  constructor(public connectionService: ConnectionService) { }

  ngOnInit() {
    this.getAllFavourites();
  }

  getAllFavourites(): void {
    this.connectionService.getAllFavourites()
      .subscribe(favourites => this.connectionService.favourites = favourites);
  }

  delete(favourite: Fav) {
    this.connectionService.deleteFavourite(favourite).subscribe();
  }

}
