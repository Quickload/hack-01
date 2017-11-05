import { createSelector } from 'reselect';

export const getJobsState = state => state && state.jobs;
// export const selectedJobState = state => state && state.selectedJob

export const getIsFetchingJobs = createSelector(
  getJobsState,
  jobs => (jobs && jobs.isFetching) || false
);

export const getJobs = createSelector(
  getJobsState,
  jobs => (jobs && jobs.jobs) || null
);

export const getIsFetchingSelectedJob = createSelector(
  getJobsState,
  jobs => (jobs && jobs.isFetchingSelectedJob) || false
);

export const getSelectedJob = createSelector(
  getJobsState,
  jobs => (jobs && jobs.selectedJob) || null
)
