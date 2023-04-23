import {combineReducers, configureStore} from '@reduxjs/toolkit';

import popupReducer from './slices/popup/popup.slice';
import userReducer from './slices/user/userSlice';
import {userApi} from './slices/user/user.slice'

const rootReducer = combineReducers({
    user: userReducer,
    [userApi.reducerPath] : userApi.reducer,
    popup: popupReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
