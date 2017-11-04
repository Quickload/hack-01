import { combineReducers } from 'redux';
import {
  SELECT_JOB,
  REQUEST_JOBS,
  RECEIVE_JOBS
} from '../actions/doFetchJobsAsync';

const selectedJob = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_JOB:
      return action.jobs
    default:
      return state
  }
};

const jobs = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_JOBS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_JOBS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.jobs,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
};

const jobsReducers = combineReducers({
  jobs,
  selectedJob
});

export default jobsReducers;
