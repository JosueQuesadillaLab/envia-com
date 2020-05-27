import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiurl = environment.apiurl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
      'Authorization':  'Bearer ' + environment.token
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getOrder(){
    
    console.log(this.apiurl);

    return this.http.get( this.apiurl , this.httpOptions );

  }

}
