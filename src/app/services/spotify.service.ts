import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class SpotifyService {

  artists:any[]=[];
  urlSearch:string= "https://api.spotify.com/v1/search";
  urlArtist:string= "https://api.spotify.com/v1/artists";
  urlTopTracks:string= "https://api.spotify.com/v1/artists";


  constructor( private http: Http) { }



  getArtists(term:string){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDQQeOyP_Szo8UeRW8D9Xf8q-gBGZnMunDiFWnJvhKZxtVcIyB6yaAZ89DxScRWKqEarWVqpUQtIt7YsUTKVg' );


    let query = `?q=${ term }&type=artist`;
    let url = this.urlSearch + query;

      return this.http.get( url, { headers } )
             .map( response =>{

                this.artists = response.json().artists.items;
             })

  }



  getArtist(id:string){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDQQeOyP_Szo8UeRW8D9Xf8q-gBGZnMunDiFWnJvhKZxtVcIyB6yaAZ89DxScRWKqEarWVqpUQtIt7YsUTKVg' );


    let query = `/${ id }`;
    let url = this.urlArtist + query;

      return this.http.get( url, { headers } )
             .map( response =>{
               return response.json();

             })

  }


  getTopTracks(id:string){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDQQeOyP_Szo8UeRW8D9Xf8q-gBGZnMunDiFWnJvhKZxtVcIyB6yaAZ89DxScRWKqEarWVqpUQtIt7YsUTKVg' );


    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlTopTracks + query;

      return this.http.get( url, { headers } )
             .map( response =>{
              //  console.log(response.json().tracks);
               let tracks = response.json().tracks;
               return tracks;

             })

  }


}
