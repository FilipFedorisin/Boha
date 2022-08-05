import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import ModalReducer from 'src/redux/slices/modal';

import { userApi } from 'src/redux/services/user';

export function makeStore() {
  return configureStore({
    reducer: {
      ModalReducer,
      [userApi.reducerPath]: userApi.reducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
