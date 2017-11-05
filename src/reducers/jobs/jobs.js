import {
  REQUEST_JOBS,
  RECEIVE_JOBS
} from '../../actions/doFetchJobsAsync';

const initialState = {
  isFetching: false,
  hasError: false,
  jobs: null,
};

export const jobs = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_JOBS:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      }
    case RECEIVE_JOBS:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        jobs: action.jobs,
        lastUpdated: action.receivedAt,
      }
    default:
      return state
  }
};

export default jobs;
