import { USER_LOGIN, USER_LOGOUT } from '../constants';

const initialState = {
  isAuth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case USER_LOGOUT:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
