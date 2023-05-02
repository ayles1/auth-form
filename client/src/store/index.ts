import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { AuthApi } from '@/api/auth/authApi';

import popupReducer from './slices/popup/popup.slice';
import userReducer from './slices/user/user.slice';

const rootReducer = combineReducers({
  [AuthApi.reducerPath]: AuthApi.reducer,
  user: userReducer,
  popup: popupReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
