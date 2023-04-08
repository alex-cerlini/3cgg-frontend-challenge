import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { addFavorite, removeFavorite } from './actions';
import { initialState, RootState } from './state';

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addFavorite, (state: RootState, action) => {
    if (!state.favorites.includes(action.payload)) {
      state.favorites.push(action.payload);
    }
  });

  builder.addCase(
    removeFavorite,
    (state: RootState, action: PayloadAction<number>) => {
      const index = state.favorites.indexOf(action.payload);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    }
  );
});

export default reducer;
