import { SET_CURRENT_ACCOUNT } from '../constants';

export default function currentAccount(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_ACCOUNT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
