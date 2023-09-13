import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Coin } from './interfaces/Icoin.list'

@Injectable({
  providedIn: 'root'
})
export class CoinConvertionService {
  private apiUrl = 'https://api.exchangerate.host/'

  constructor(private http:HttpClient) { }

  coinList(): Observable<Coin[]>{
    return this.http.get<any>(`${this.apiUrl}/symbols`).pipe(
      map((response)=>{
        return Object.keys(response.symbols).map((key)=>({
          code: key,
          description: response.symbols[key].description,
        }))
      })
    )
  }

  coinConvert(fromCoin: string, toCoin: string, amount: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}convert?from=${fromCoin}&to=${toCoin}&amount=${amount}`);
  }

}
