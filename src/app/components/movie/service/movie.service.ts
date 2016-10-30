import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  constructor(private http: Http) {

  }

  getMovies(title: string) {
    return this.http
      .get('http://www.omdbapi.com/?s=' + title)
      .map(
        res => res.json()
      );

  }

  getOneMovie(imdbID: string) {
    return this.http
      .get('http://www.omdbapi.com/?i=' + imdbID)
      .map(
        res => res.json()
      );
  }
}
