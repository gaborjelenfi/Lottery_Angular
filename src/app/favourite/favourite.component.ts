import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  faStar = faStar;

  constructor(private connectionService: ConnectionService) { }
  favourites: number[];

  ngOnInit() {
    this.getAllFavourites();
  }

  getAllFavourites(): void {
    this.connectionService.getAllFavourites()
      .subscribe(favourites => this.favourites = favourites);
  }

}
