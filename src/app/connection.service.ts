import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Fav } from './fav';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  favourites: Fav[];
  private url = 'api/favourites';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

  getAllFavourites(): Observable<Fav[]> {
    return this.http.get<Fav[]>(this.url)
      .pipe(
        catchError(this.handleError<Fav[]>('getFavourites', []))
      );
  }

  addFavourite(fav: Fav): Observable<Fav> {
    return this.http.post<Fav>(this.url, fav, this.httpOptions)
      .pipe(
        catchError(this.handleError<Fav>('addFavourite')),
      );
  }

  deleteFavourite(fav: Fav): Observable<Fav> {
    this.favourites = this.favourites.filter(f => f !== fav);
    const url = `${this.url}/${fav.id}`;
    return this.http.delete<Fav>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Fav>('deleteFavourite'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
