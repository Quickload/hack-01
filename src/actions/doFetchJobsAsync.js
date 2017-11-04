export const REQUEST_JOBS = 'REQUEST_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const SELECT_JOB = 'SELECT_JOB';

export const selectJob = job => ({
  type: SELECT_JOB,
  job,
});

export const requestJobs = jobs => ({
  type: REQUEST_JOBS,
  jobs,
});

export const receiveJobs = (jobs, json) => ({
  type: RECEIVE_JOBS,
  jobs,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now(),
});

export const fetchJobsAsync = job => dispatch => {
  dispatch(requestJobs(job))
  return fetch('https://us-central1-job-f4a75.cloudfunctions.net/jobs')
    .then(response => response.json())
    .then(json => dispatch(receiveJobs(job, json)))
};
