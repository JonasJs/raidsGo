import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer.js';
import GroupsReducer from './GroupsReducer.js';

export default combineReducers({
  auth: AuthReducer,
  group: GroupsReducer,
});
