import useTypedSelector from './redux/useTypedSelector';

export const useAuth = () => {
    const { email, token, _id } = useTypedSelector((state) => state.user);

    return {
        isAuth: !!token,
        email,
        token,
        _id
    };
};
