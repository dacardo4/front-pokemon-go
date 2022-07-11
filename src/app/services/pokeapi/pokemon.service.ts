import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServicesService } from '../data-services.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private _httpService: DataServicesService,
  ) { }

  private localUrl: string = `pokemon/1`;

  getOnePokemonByID(id: number): Observable<any> {
    let url: string = `${this.localUrl}`;
    return this._httpService.httpGet(url+id);
  }
}
