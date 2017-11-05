import {
  REQUEST_JOBS,
  RECEIVE_JOBS,
  FAILED_JOBS,
} from '../../actions/doFetchJobsAsync';

const initialState = {
  isFetching: false,
  error: null,
  jobs: null,
};

export const jobs = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_JOBS:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case FAILED_JOBS:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case RECEIVE_JOBS:
      return {
        ...state,
        isFetching: false,
        error: null,
        jobs: action.jobs,
        lastUpdated: action.receivedAt,
      }
    default:
      return state
  }
};

export default jobs;
