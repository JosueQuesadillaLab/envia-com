import { createReducer, on } from '@ngrx/store';
import { setProducts , unsetProducts } from '../actions';

export interface ProductsState {
    products: []; 
}

export const productsState: ProductsState = {
   products: null
}

const _productsReducer = createReducer(productsState,

    on(setProducts, (state , {products}) => ({ ...state, products: products})),
    on(unsetProducts, state => ({ ...state, products: null })),

);

export function productsReducer(state, action) {
    return _productsReducer(state, action);
}