/* eslint-disable import/prefer-default-export */

import { SET_CURRENT_ACCOUNT } from '../constants';

export const setAccount = account => ({
  type: SET_CURRENT_ACCOUNT,
  payload: {
    account,
  },
});

export const unsetAccount = () => ({
  type: SET_CURRENT_ACCOUNT,
  payload: {
    account: {},
  },
});
