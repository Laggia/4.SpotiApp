import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {
  artistas:any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio spotify listo!');
  }

  getArtistas(){
    let url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';
    let headers = new HttpHeaders({
      'authorization' : 'Bearer BQCco1Zj3guBC8qF4vCEO_ZBy-48N0opwH3fcVRg8kfNF_Zn47mbTXtuQbOU_i4a8sjMCVeJRxsAwuXUNzM'
    });

    return this.http.get(url, { headers });
  }
}
