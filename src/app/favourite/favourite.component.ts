import { Component, OnInit, DoCheck } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Fav } from '../fav';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit, DoCheck {
  faStar = faStar;

  constructor(private connectionService: ConnectionService) { }
  favourites: Fav[];

  ngOnInit() {
    this.getAllFavourites();
  }

  ngDoCheck() {
    this.getAllFavourites();
  }

  getAllFavourites(): void {
    this.connectionService.getAllFavourites()
      .subscribe(favourites => this.favourites = favourites);
  }

}
