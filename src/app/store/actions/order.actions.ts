import { createAction, props } from '@ngrx/store';

export const setOrder = createAction(
    '[Order] Set Order',
    props<{ data: any }>()
);

export const unSetOrder = createAction('[Order] UnSet Order');
