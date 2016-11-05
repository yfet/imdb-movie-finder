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
    @Input()
    totalResults: number;
    @Input()
    notFound: boolean;

    constructor() {
        this.movies = [];
        this.totalResults = 0;
    }

    hasMovies(): boolean {
        return (this.totalResults > 0);
    }

    moviesCount(): number {
        return this.totalResults;
    }
    
}