import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-movies-observable-filtered',
  templateUrl: './movies-observable-filtered.component.html',
  styleUrls: ['./movies-observable-filtered.component.css'],
})
export class MoviesObservableFilteredComponent implements OnInit {
  movieFiltered$!: Observable<any>;

  constructor(private movieService: ApiDataService) {}

  ngOnInit(): void {
    this.movieFiltered$ = this.movieService.getMoviesVote8More();
  }
}
