import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  sub: any;
  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    console.log('start Component');
    this.sub = this._MoviesService.getTrending('movie').subscribe((data) => {
      this.trendingMovies = data.results.slice(0, 10);
    });
    this.sub = this._MoviesService.getTrending('tv').subscribe((data) => {
      this.trendingTv = data.results.slice(0, 10);
    });
    this.sub = this._MoviesService.getTrending('person').subscribe((data) => {
      this.trendingPeople = data.results.slice(0, 10);
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log('Destroy Component');
  }
}
