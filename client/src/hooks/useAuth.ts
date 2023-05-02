import useTypedSelector from './redux/useTypedSelector';

export const useAuth = () => {
  const { isAuth, email, id } = useTypedSelector((state) => state.user);

  return {
    isAuth,
    email,
    id
  };
};
