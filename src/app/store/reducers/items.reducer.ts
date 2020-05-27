import { createReducer, on } from '@ngrx/store';
import { setItems , unSetItems } from '../actions';

export interface ItemsState {
    items: any; 
}

export const initialItemsState: ItemsState = {
    items: null
}

const _itemsReducer = createReducer(initialItemsState,

    on(setItems, (state , {items}) => ({ ...state, items:items })),
    on(unSetItems, state => ({ ...state, items:null})),
    
);

export function itemsReducer(state, action) {
    return _itemsReducer(state, action);
}