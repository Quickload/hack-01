import axios from 'axios';

export const SELECTED_JOB = 'SELECTED_JOB';
export const IS_FETCHING_SELECTED_JOB = 'IS_FETCHING_SELECTED_JOB';
export const FAILED_SELECTED_JOB = 'FAILED_SELECTED_JOB';
export const CLEAR_SELECTED_JOB = 'CLEAR_SELECTED_JOB';

const apiUrl = `https://us-central1-quickload-f4a75.cloudfunctions.net`;

export const isFetchingSelectedJob = () => ({
  type: IS_FETCHING_SELECTED_JOB,
});

export const failedToRetreiveSelectedJob = (error) => ({
  type: FAILED_SELECTED_JOB,
  error
});


export const selectedJob = (json) => {
  return {
    type: SELECTED_JOB,
    selectedJob: json,
    receivedAt: Date.now(),
  };
};

export const clearSelectedJob = () => ({
  type: CLEAR_SELECTED_JOB,
});


export const clearSelectedJobAction = () => dispatch => {
  dispatch(clearSelectedJob())
}

export const fetchSelectedJobAsync = jobId => dispatch => {
  dispatch(isFetchingSelectedJob());

  axios.get(`${apiUrl}/job?jobId=${jobId}`)
    .then(function (response) {
      dispatch(selectedJob(response.data));
    })
    .catch(function (error) {
      console.log(error);
      dispatch(failedToRetreiveSelectedJob(error));
    });
};
