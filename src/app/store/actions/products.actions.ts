import { createAction, props } from '@ngrx/store';

export const setProducts = createAction(
    '[Products] Set Products',
    props<{ products: any }>()
);

export const unsetProducts = createAction('[Products] UnSet Products');
