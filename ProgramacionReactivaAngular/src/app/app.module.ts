import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { ApiDataService } from './services/api-data.service';
import { MoviesObservableComponent } from './components/movies-observable/movies-observable.component';
import { MoviesPromiseComponent } from './components/movies-promise/movies-promise.component';
import { MoviesObservableFilteredComponent } from './components/movies-observable-filtered/movies-observable-filtered.component';

@NgModule({
  declarations: [AppComponent, MoviesObservableComponent, MoviesPromiseComponent, MoviesObservableFilteredComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
