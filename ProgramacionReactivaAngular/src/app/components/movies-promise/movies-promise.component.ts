import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-movies-promise',
  templateUrl: './movies-promise.component.html',
  styleUrls: ['./movies-promise.component.css'],
})
export class MoviesPromiseComponent implements OnInit {
  movies: any[] = [];
  moviesPromise!: Promise<any[]>;

  constructor(private movieService: ApiDataService) {}

  ngOnInit(): void {
    this.moviesPromise = this.movieService.getMoviePromise();
    this.moviesPromise.then((movie) => {
      this.movies = movie;
    });
  }
}
