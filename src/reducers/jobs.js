import { combineReducers } from 'redux';
import {
  SELECT_JOB,
  REQUEST_JOBS,
  RECEIVE_JOBS
} from '../actions/doFetchJobsAsync';

export const selectedJob = (state = null, action) => {
  switch (action.type) {
    case SELECT_JOB:
      return action.jobs;
    default:
      return state;
  }
};

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: null,
};

export const jobs = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_JOBS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      }
    case RECEIVE_JOBS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.jobs,
        lastUpdated: action.receivedAt,
      }
    default:
      return state
  }
};

export default jobs;
