import counterReducer from './counterReducer';
import userReducer from './userInfoReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  counter: counterReducer,
  userInfo: userReducer
});

export default reducers;
