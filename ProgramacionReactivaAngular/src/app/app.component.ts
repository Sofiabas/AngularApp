import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDataService } from './services/api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // title = 'programacionReactivaSmael';
  // movies: any[] = [];
  // moviesRateTop$!: Observable<any[]>;
  // constructor(private apiDataServices: ApiDataService) {}
  // ngOnInit() {
  //   this.apiDataServices.getDataApiObservable().subscribe((data) => {
  //     this.movies = data.results;
  //   });
  //   console.log(this.moviesRateTop$);
  // }
  // ngOnDestroy() {}
}
