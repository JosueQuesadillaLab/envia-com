import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../store/actions';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  productSubscription : Subscription = new Subscription();
  numberProducts: number = 0;

  constructor(
    private store : Store<AppState>
  ) { }

  ngOnInit() {

    this.productSubscription = this.store.select('items')
        .pipe(
          filter( items => items.items != null)
        )
        .subscribe(
          resp => {

            const { items } = resp;

            let i ;
            this.numberProducts = 0;

            for( i in items){
              this.numberProducts++;
            }

          }
        );

  }

  openCartShopping(){
    this.store.dispatch( actions.openCart() );
  }


}
