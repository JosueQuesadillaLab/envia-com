import { Component, OnInit , OnDestroy} from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../store/actions';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent implements OnInit , OnDestroy {

  productsList : Array<any>;
  itemsSubscription : Subscription = new Subscription();

  constructor(
    private store : Store<AppState>
  ) { }

  ngOnInit() {

    this.itemsSubscription = this.store.select('products').pipe(
      filter ( productList => productList.products != null) 
    ).subscribe(
      productList => {
          const { products } = productList;
          this.productsList = products;
      }
  );
    
  }

  ngOnDestroy(){
    this.itemsSubscription.unsubscribe();
  }

  up(){
    window.scroll(0,0);
  }

}
