import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  term:string="";

  constructor( private _spotifyService: SpotifyService ) { }

  ngOnInit() {

  }

  searchArtists(){
    this._spotifyService.getArtists(this.term)
        .subscribe( );

  }

}
