import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(
    private http: HttpClient
  ) { }

  private urlHttp: string = 'https://pokeapi.co/api/v2/';
  
  httpGet(url: string): any {
    return this.http.get(this.urlHttp + url);
  }

  httpPost(url: string, data: any): any {
    return this.http.post(this.urlHttp + url, data);
  }
}
