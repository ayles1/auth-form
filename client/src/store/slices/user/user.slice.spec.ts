import { describe, expect, it } from 'vitest';

import userReducer, { userActions } from './user.slice';

const initialState = {
  email: '',
  id: '',
  isActivated: false,
  isAuth: false
};

const user = {
  email: 'example@example.ru',
  isActivated: true,
  isAuth: true,
  id: 'example-id'
};

describe('userSlice', () => {
  it('Should return default state when passed an empty action', () => {
    const result = userReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('Should set user with "setUser" action', () => {
    const action = {
      type: userActions.setUser.type,
      payload: user
    };

    const result = userReducer(initialState, action);

    expect(result).toBe(user);
  });

  it('Should log out user with "logOut" action', () => {
    const loggedUser = user;
    const action = { type: userActions.removeUser.type };

    const result = userReducer(loggedUser, action);

    expect(result).toStrictEqual(initialState);
  });
});
