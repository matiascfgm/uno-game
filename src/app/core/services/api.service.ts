import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  public createGame(gameId: string, gamePassword: string, player: string) {
    return this.http.post(`${environment.url}/api/create-game/${gameId}/${gamePassword}/${player}`, {});
  }

  public joinGame(gameId: string, gamePassword: string, player: string) {
    return this.http.post(`${environment.url}/api/join-game/${gameId}/${gamePassword}/${player}`, {});
  }
}
