import { createReducer, on } from '@ngrx/store';
import { openCart , closeCart } from '../actions';

export interface CartState {
    open: boolean; 
}

export const initialCartState: CartState = {
    open: false
}

const _cartReducer = createReducer(initialCartState,

    // on(openCart, (state , {items}) => ({ ...state, items: items})),
    on(openCart, state => ({ ...state, open: true })),
    on(closeCart, state => ({ ...state, open: false})),
    
);

export function cartReducer(state, action) {
    return _cartReducer(state, action);
}