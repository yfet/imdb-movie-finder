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

    detailsFetched: boolean = false;

    constructor(private movieService: MovieService) {
        if (this.movie) {
            this.fetchDetails();
        }
    }

    fetchDetails(): void {
        this.movieService
            .getOneMovie(this.movie.imdbID)
            .subscribe(
                data => console.log(data),
                error => alert(error),
                () =>  {
                    this.detailsFetched = true;
                }
            );
        
    }

}