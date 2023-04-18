import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IUser {
    email: string;
    token: string | null;
    _id: string | null;
}

const initialState: IUser = {
    email: '',
    token: null,
    _id: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state = action.payload;
        },
        clearUser(state) {
            state = initialState;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;