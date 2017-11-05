import jobsData from '../data/jobs';

export const REQUEST_JOBS = 'REQUEST_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';

export const isFetchingJobs = () => ({
  type: REQUEST_JOBS,
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
  // return fetch('https://us-central1-quickload-f4a75.cloudfunctions.net/jobs?jobsId=zW1dz12t8DbmaC0dhr5D')
  //   .then(response => response.json())
  //   .then(json => dispatch(receivedJobs(json)))
  dispatch(receivedJobs(jobsData));
};
