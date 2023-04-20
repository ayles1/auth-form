import { combineReducers, configureStore } from '@reduxjs/toolkit';

import popupReducer from './slices/popupSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
    user: userReducer,
    popup: popupReducer
});

const store = configureStore({
    reducer: rootReducer
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
