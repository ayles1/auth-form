import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IUser {
  id: string;
  email: string;
  isActivated: boolean;
  isAuth: boolean;
}

const initialState: IUser = {
  id: '',
  email: '',
  isActivated: false,
  isAuth: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      return action.payload;
    },
    activateUser(state) {
      return { ...state, isActivated: true };
    },
    removeUser(state) {
      return initialState;
    }
  }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
