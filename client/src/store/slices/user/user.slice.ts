import {createSlice} from '@reduxjs/toolkit';


export interface IUser {
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        isActivated: boolean;
    }
}

const initialState: IUser = {
    accessToken: '',
    refreshToken: '',
    user: {
        id: '',
        email: '',
        isActivated: false
    }
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

export const userActions = userSlice.actions;


export default userSlice.reducer;

