import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-movies-observable',
  templateUrl: './movies-observable.component.html',
  styleUrls: ['./movies-observable.component.css'],
})
export class MoviesObservableComponent implements OnInit {
  movies: any[] = [];
  suscriber: any;

  constructor(private movieService: ApiDataService) {}

  ngOnInit(): void {
    this.suscriber = this.movieService
      .getMovieObservable()
      .subscribe((data) => {
        this.movies = data;
      });
  }

  ngOnDestroy(): void {
    this.suscriber.unsubscribe();
  }
}
