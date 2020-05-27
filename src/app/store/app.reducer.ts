import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
    order: reducers.OrderState,
    items: reducers.ItemsState,
    cart: reducers.CartState,
    products: reducers.ProductsState
}


export const appReducers: ActionReducerMap<AppState> = {
   order: reducers.orderReducer,
   items: reducers.itemsReducer,
   cart: reducers.cartReducer,
   products: reducers.productsReducer
}