
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../store/actions';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit , OnDestroy{

  openCart : boolean ;
  productsList : Array<any>;
  orderNumber: number = 0 ;
  cartSubscription : Subscription = new Subscription();

  total: any;
  subtotal : any = 0 ;
  tax: any = 0 ;

  constructor(
    private store : Store<AppState>
  ) { }

  ngOnInit() {

    this.cartSubscription = this.store.select('cart').subscribe( resp =>{ 
      const { open } = resp;
      this.openCart = open;
    } );

    this.store.select('order').pipe(
      filter ( dataorder => dataorder.data != null )
    ).subscribe(
      dataorder => {
        // console.log(order);
        const { data } = dataorder;
        const { order } = data;
        const { id } = order;
        this.orderNumber = id;

      }
    );

    this.store.select('items').pipe(
      filter ( itemsList => itemsList.items != null) 
    ).subscribe(
      itemsList => {
        
        
        const { items } = itemsList;
        this.productsList = items;

        this.getTotal(this.productsList);



      }
    );

  }

  ngOnDestroy(){

    this.cartSubscription.unsubscribe();

  }

  closeCart(){
    this.store.dispatch( actions.closeCart() );
  }


  getTotal( items ){

    this.subtotal = 0 ;

    items.forEach(element => {

      const { price } = element;
      this.subtotal = this.subtotal + parseFloat(price);

    });


  }

}
