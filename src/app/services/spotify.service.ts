import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class SpotifyService {

  artists:any[]=[];
  urlSearch:string= "https://api.spotify.com/v1/search";


  constructor( private http:Http) { }

  getArtists(term:string){
    let query = `q=${ term }&type=artist`;
    let url = this.urlSearch + query;

      return this.http.get( url )
             .map( response=>{
                console.log(response);
             })
  }

}
