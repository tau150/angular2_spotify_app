import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',

})
export class ArtistComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService, private location:Location) { }

  artist:any;
  topTracks:any[];


  ngOnInit() {

    this.activatedRoute.params.map(parametros => parametros ['id'])
        .subscribe(id=>{
          this._spotifyService.getArtist(id)
              .subscribe( response=>{
                 this.artist=response;
                 console.log(this.artist);
              });
        });

        this.activatedRoute.params.map(parametros => parametros ['id'])
            .subscribe(id=>{
              this._spotifyService.getTopTracks(id)
                  .subscribe( response=>{
                     this.topTracks= response;

                  });
            });



  }

}
