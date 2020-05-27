import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductsService } from './services/products.service';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import * as actions from './store/actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{

  orderSubscription : Subscription = new Subscription();
  items : any = [];

  constructor(
    private _productService : ProductsService,
    public store : Store<AppState>
  ) { }

  ngOnInit() {

    this.orderSubscription = this._productService.getOrder().subscribe(
      resp => {
              
        this.store.dispatch( actions.setOrder( { data: resp }) );

        this.items = resp;

        const { order } = this.items;
        const { items } = order;
        const { id } = order;

        this.store.dispatch( actions.setItems( { items: items }) );

      }
    );

    
    this._productService.getProducts().subscribe(
      resp =>{

        this.store.dispatch( actions.setProducts( { products: resp }) );

      }
    );



  }


  ngOnDestroy(){

    this.orderSubscription.unsubscribe();

  }


}
