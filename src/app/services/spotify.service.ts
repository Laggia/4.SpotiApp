import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlSpotify:string = 'https://api.spotify.com/v1/';
  token:string = 'BQBVMkScmbnJNnp8mR4I7_1jsKArmnlzRdLSTLimJLbeVfARwAbilVir1cMOFIA8mYKWSyuJN_UI4hWrAmw';
  tracks:any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio spotify listo!');
  }

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'authorization' : 'Bearer ' + this.token
    });

    return headers;
  }

  getTop( id:string  ){
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
    return this.http.get(url, { headers:this.getHeaders() })
              .map( (resp:any) =>
                this.tracks = resp.tracks
              );
  }

  getArtista( id:string ){
    let url = `${ this.urlSpotify }artists/${ id }`;

    return this.http.get(url, { headers:this.getHeaders() });
                // .map( (resp:any) => {
                //   this.artistas = resp.artists.items;
                //   return this.artistas;
                // });

  }

  getArtistas( termino:string ){
    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers })
                .map( (resp:any) => {
                  this.artistas = resp.artists.items;
                  return this.artistas;
                });
  }
}
