import axios from 'axios';

export const REQUEST_JOBS = 'REQUEST_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const FAILED_JOBS = 'FAILED_JOBS';
export const SELECTED_JOB = 'SELECTED_JOB';
export const IS_FETCHING_SELECTED_JOB = 'IS_FETCHING_SELECTED_JOB';
export const FAILED_SELECTED_JOB = 'FAILED_SELECTED_JOB';

const apiUrl = `https://us-central1-quickload-f4a75.cloudfunctions.net`;

export const isFetchingJobs = () => ({
  type: REQUEST_JOBS,
});

export const failedToRetreiveJobs = (error) => ({
  type: FAILED_JOBS,
  error
});

export const receivedJobs = (json) => {
  return {
    type: RECEIVE_JOBS,
    jobs: json,
    receivedAt: Date.now(),
  };
};

export const isFetchingSelectedJob = () => ({
  type: IS_FETCHING_SELECTED_JOB,
});

export const failedToRetreiveSelectedJob = (error) => ({
  type: FAILED_SELECTED_JOB,
  error
});

export const fetchJobsAsync = () => dispatch => {
  dispatch(isFetchingJobs());
  axios.get(`${apiUrl}/jobs`)
    .then(function (response) {
      dispatch(receivedJobs(response.data));
    })
    .catch(function (error) {
      console.log(error);
      dispatch(failedToRetreiveJobs(error));
    });
};