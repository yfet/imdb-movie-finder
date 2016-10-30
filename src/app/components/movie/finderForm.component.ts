import { Component } from '@angular/core';

import { MovieListComponent } from './movieList.component';
import { MovieService } from './service/movie.service';
import Movie from '../model/movie.model';

@Component({
  selector: 'finder-form',
  templateUrl: 'finderForm.component.html',
  providers: [MovieService]
})
export class FinderFormComponent {
  movies: Array<Movie>;

  constructor(private movieService: MovieService) {
    this.movies = [];
  }
  onSubmit(title: HTMLInputElement) {
    this.movies.splice(0, this.movies.length);
    var plot = "";
    var actors = "";
    this.movieService
      .getMovies(title.value)
      .subscribe(
        data => data.Search.map(
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
          }),
        error => alert(error),
        () => console.log('complete ...')
      );
      console.log(this.movies);
  }
}
