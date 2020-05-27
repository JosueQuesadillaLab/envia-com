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

    this.itemsSubscription = this.store.select('items').pipe(
      filter ( itemsList => itemsList.items != null) 
    ).subscribe(
      itemsList => {
          const { items } = itemsList;
          this.productsList = items;
          console.log(this.productsList);
      }
  );
    
  }

  ngOnDestroy(){
    this.itemsSubscription.unsubscribe();
  }

}
