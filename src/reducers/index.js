import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import jobs from './jobs';
import user from './user';

export default combineReducers({
  routing: routerReducer,
  jobs,
  user,
})
