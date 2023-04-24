import useTypedSelector from './redux/useTypedSelector';

export const useAuth = () => {
    const { user,accessToken,refreshToken} = useTypedSelector((state) => state.user);

    return {
        isAuth: !!accessToken,
        email:user.email,
        accessToken,
        id:user.id
    };
};
