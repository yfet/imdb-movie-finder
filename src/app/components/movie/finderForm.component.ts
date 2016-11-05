import { Component } from '@angular/core';

import { MovieListComponent } from './movieList.component';
import { AjaxLoaderComponent } from '../utils/ajaxLoader.component';

import { MovieService } from './service/movie.service';
import Movie from '../model/movie.model';

@Component({
  selector: 'finder-form',
  templateUrl: 'finderForm.component.html',
  providers: [MovieService]
})
export class FinderFormComponent {
  movies: Array<Movie>;
  totalResults: number = 0;
  beginFetching: boolean = false;
  fetchResponse: string = "True";

  constructor(private movieService: MovieService) {
    this.movies = [];
  }
  notFound(): boolean {
    return (this.fetchResponse == "False");
  }
  onSubmit(title: HTMLInputElement) {
    this.movies.splice(0, this.movies.length);
    this.totalResults = 0;
    this.beginFetching = true;
    this.fetchResponse = "True";
    var plot = "";
    var actors = "";
    this.movieService
      .getMovies(title.value)
      .subscribe(
        data => {
          this.totalResults = data.totalResults;
          this.fetchResponse = data.Response;
          console.log(typeof this.fetchResponse);
          if (this.fetchResponse == "True") {
            data.Search.map (
            item => {
              this.movieService
                .getOneMovie(item.imdbID)
                .subscribe(
                  details => {
                    plot = details.Plot;
                    actors = details.Actors
                  },
                  error => alert(error),
                  () => {
                    this.movies.push(new Movie(
                      item.Title,
                      item.Year,
                      item.Poster,
                      item.imdbID
                    )
                    .setPlot(plot)
                    .setActors(actors)
                    .checkMovie());
                  }
                )
            });
          }
        },
        error => alert(error),
        () => {
          this.beginFetching = false;
          console.log('complete ...')
        }
      );
      console.log(this.movies);
  }
}
