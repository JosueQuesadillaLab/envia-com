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
  private apiproducts = environment.apiProducts;

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
      'Authorization':  'Bearer ' + environment.token
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getProducts(){
    return this.http.get( this.apiproducts , this.httpOptions);
  }

  getOrder(){
    
    return this.http.get( this.apiurl , this.httpOptions );

  }

}
