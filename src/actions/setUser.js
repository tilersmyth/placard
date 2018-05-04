import { USER_LOGIN, USER_LOGOUT } from '../constants';

export const userLogin = user => ({
  type: USER_LOGIN,
  payload: {
    isAuth: true,
    ...user,
  },
});

export const userLogout = () => ({
  type: USER_LOGOUT,
  payload: {
    isAuth: false,
  },
});
