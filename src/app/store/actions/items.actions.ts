import { createAction, props } from '@ngrx/store';

export const setItems = createAction(
    '[Order Items ] Set Order Items',
    props<{ items: any }>()
);

export const unSetItems = createAction('[Order Items] UnSet Items');