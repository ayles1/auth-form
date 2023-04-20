import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IPopup {
    isOpen: boolean;
    message: string;
    variant?: 'contained' | 'outlined';
    type: 'success' | 'warn' | 'error';
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const initialState: IPopup = {
    isOpen: false,
    variant: undefined,
    message: '',
    type: 'success',
    position: 'top-left'
};

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopup(state, action: PayloadAction<Omit<IPopup, 'isOpen'>>) {
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.position = action.payload.position;
            state.variant = action.payload.variant;
            state.isOpen = true;
            return state;
        },
        toggleOpen(state, action: PayloadAction<boolean>) {
            return { ...state, isOpen: action.payload };
        },
        clearUser(state) {
            state = initialState;
        }
    }
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
