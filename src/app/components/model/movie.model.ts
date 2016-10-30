export default class Movie {
    title: string;
    poster: string;
    imdbID: string;
    year: string;
    plot: string;
    actors: string;

    constructor(title: string, year: string, poster: string, imdbID: string) {
        this.title = title;
        this.year = year;
        this.poster = poster;
        this.imdbID = imdbID;
    }
    checkMovie(): Movie {
        if (this.poster == 'N/A') {
            this.poster = '';
        }
        return this;
    }
    setPlot(plot: string) : Movie {
        this.plot = plot;
        return this;
    }
    setActors(actors: string): Movie {
        this.actors = actors;
        return this;
    }
}