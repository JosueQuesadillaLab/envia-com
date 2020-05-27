import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
    order: reducers.OrderState,
    items: reducers.ItemsState
}


export const appReducers: ActionReducerMap<AppState> = {
   order: reducers.orderReducer,
   items: reducers.itemsReducer
}