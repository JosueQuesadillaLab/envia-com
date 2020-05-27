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

  constructor(
    private store : Store<AppState>
  ) { }

  ngOnInit() {

  }

  openCartShopping(){
    console.log("click")
    this.store.dispatch( actions.openCart() );
  }


}
