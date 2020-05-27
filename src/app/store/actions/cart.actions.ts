import { createAction, props } from '@ngrx/store';

// export const setItems = createAction(
//     '[Order Items ] Set Order Items',
//     props<{ items: any }>()
// );
export const openCart = createAction('[Cart Component] Open Cart Panel');
export const closeCart = createAction('[Cart Component] Close Cart Panel');

