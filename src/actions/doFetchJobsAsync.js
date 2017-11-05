import axios from 'axios';

export const REQUEST_JOBS = 'REQUEST_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const FAILED_JOBS = 'FAILED_JOBS';

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