import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CepProvider {

  constructor(private http: HttpClient) {
    
  }

  public consultarEnderecoPeloCep(cep : string) : Observable<any> {
    const url = `https://viacep.com.br/ws/${cep}/json`;
    
    let headerValues = new HttpHeaders();
    headerValues.append('Content-Type', 'application/json');
    headerValues.append('Access-Control-Allow-Origin', '*');

    return this.http.get(url, {headers: headerValues});    
  }

}
