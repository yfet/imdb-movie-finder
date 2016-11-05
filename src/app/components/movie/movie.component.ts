import { Component, Input } from '@angular/core';

import Movie from '../model/movie.model';
import { MovieService } from './service/movie.service';

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    providers: [MovieService]
})
export class MovieComponent {
    @Input()
    movie: Movie;

    constructor(private movieService: MovieService) {
        
    }
}