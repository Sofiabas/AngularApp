import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  movies: any[] = [];
  moviesPromise!: Promise<any>;
  moviesRateTop$!: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.moviesRateTop$ = new Observable((suscription) => {
      this.doFetch(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=c9c649f8dc1856154cf88a683b935a6e'
      ).subscribe((data) => {
        this.movies = data.results;
        suscription.next(this.movies);
      });
    });

    this.moviesPromise = new Promise((resolve, reject) => {
      this.doFetch(
        'https://api.themoviedb.org/3/trending/tv/week?api_key=c9c649f8dc1856154cf88a683b935a6e'
      ).subscribe((data) => {
        this.movies = data.results;
        resolve(this.movies);
      });
    });
  }

  doFetch(url: any): Observable<any> {
    return this.http.get(url);
  }

  getMoviePromise() {
    return this.moviesPromise;
  }

  getMovieObservable() {
    return this.moviesRateTop$;
  }

  getMoviesVote8More(): Observable<any> {
    return this.moviesRateTop$.pipe(
      map((movies) => movies.filter((movie) => movie.vote_average >= 8))
    );
  }
}
