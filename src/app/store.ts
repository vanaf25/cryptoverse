import {Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coinsApi } from '../rtkApi/api'
import counterReducer from '../features/counter/counterSlice';
export const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(coinsApi.middleware),
})
setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;