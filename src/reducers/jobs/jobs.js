import {
  REQUEST_JOBS,
  RECEIVE_JOBS,
  FAILED_JOBS,
} from '../../actions/doFetchJobsAsync';

import {
  SELECTED_JOB,
  IS_FETCHING_SELECTED_JOB,
  FAILED_SELECTED_JOB,
  CLEAR_SELECTED_JOB,
} from '../../actions/doFetchSelectedJobAsync';

const initialState = {
  isFetching: false,
  error: null,
  jobs: null,
  isFetchingSelectedJob: false,
  selectedJobError: null,
  selectedJob: null
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
    case IS_FETCHING_SELECTED_JOB:
      return {
        ...state,
        isFetchingSelectedJob: true,
        selectedJobError: null,
      }
    case FAILED_SELECTED_JOB:
      return {
        ...state,
        isFetchingSelectedJob: false,
        selectedJobError: action.error,
      }
    case SELECTED_JOB:
      return {
        ...state,
        isFetchingSelectedJob: false,
        selectedJobError: null,
        selectedJob: action.selectedJob,
        lastUpdated: action.receivedAt,
      }
    case CLEAR_SELECTED_JOB:
      return {
        ...state,
        selectedJob: null,
      }
    default:
      return state
  }
};

export default jobs;
