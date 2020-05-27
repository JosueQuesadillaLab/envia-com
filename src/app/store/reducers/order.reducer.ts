import { createReducer, on } from '@ngrx/store';
import { setOrder , unSetOrder } from '../actions';

export interface OrderState {
    data: any; 
}

export const initialOrderState: OrderState = {
    data: null
}

const _orderReducer = createReducer(initialOrderState,

    on(setOrder, (state , {data}) => ({ ...state, data: {...data}})),
    on(unSetOrder, state => ({ ...state, data:null})),

);

export function orderReducer(state, action) {
    return _orderReducer(state, action);
}