import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import jobs from './jobs/jobs';
import user from './user/user';
import emails from './emails/emails';

export default combineReducers({
  routing: routerReducer,
  jobs,
  user,
  emails,
})
