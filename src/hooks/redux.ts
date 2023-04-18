import { RootState } from '@/store';
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


export const useAppDispatch = <T extends ActionCreatorsMapObject>(actions: T): T => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;