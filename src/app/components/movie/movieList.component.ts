import { Component, Input } from '@angular/core';

import { MovieComponent } from './movie.component';
import Movie from '../model/movie.model';

@Component({
    selector: 'movie-list',
    templateUrl: './movieList.component.html'
})
export class MovieListComponent {
    @Input()
    movies: Array<Movie>;

    constructor() {
        this.movies = [];
    }

    hasMovies(): boolean {
        if (this.movies) {
            return (this.movies.length > 0);
        }
        return false;
    }

    moviesCount(): number {
        if (this.hasMovies()) {
            return (this.movies.length);
        }
        return 0;
    }
    
}