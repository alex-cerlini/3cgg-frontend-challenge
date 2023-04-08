import { createAction } from '@reduxjs/toolkit';

export const addFavorite = createAction('addFavorite', (id: number) => ({
  payload: id,
}));

export const removeFavorite = createAction<number>('removeString');
