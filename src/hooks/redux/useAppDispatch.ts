import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const useAppDispatch = <T extends ActionCreatorsMapObject>(actions: T): T => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
export default useAppDispatch;
