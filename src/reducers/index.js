import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import runtime from './runtime';
import account from './account';

export default combineReducers({
  user,
  runtime,
  account,
  form: formReducer,
});
