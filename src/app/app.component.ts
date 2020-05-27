import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductsService } from './services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{

  orderSubscription : Subscription = new Subscription();

  constructor(
    private _productService : ProductsService
  ) { }

  ngOnInit() {

    this.orderSubscription = this._productService.getOrder().subscribe(
      resp => console.log(resp)
    );

  }


  ngOnDestroy(){

    this.orderSubscription.unsubscribe();

  }


}
