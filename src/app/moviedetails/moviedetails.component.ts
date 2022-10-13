import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  id: string = '';
  movieDetails: any = {};
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService
  ) {
    this.id = _ActivatedRoute.snapshot.params['moviId'];
    _MoviesService.getMoviesDetails(this.id).subscribe((data) => {
      this.movieDetails = data;
    });
  }

  ngOnInit(): void {}
}
