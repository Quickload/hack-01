import axios from 'axios';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const FAILED_USER = 'FAILED_USER';

export const isFetchingUser = () => ({
  type: REQUEST_USER,
});

export const failedToRetreiveUser = (error) => ({
  type: FAILED_USER,
  error
});

export const receivedUser = (json) => {
  return {
    type: RECEIVE_USER,
    user: json,
    receivedAt: Date.now(),
  };
};

export const fetchUserAsync = (userId = 'zW1dz12t8DbmaC0dhr5D') => dispatch => {
  dispatch(isFetchingUser());
  axios.get('https://us-central1-quickload-f4a75.cloudfunctions.net/user', {
    params: {userId}
  })
    .then(function (response) {
      setTimeout(dispatch(receivedUser(response.data)), 2000);
    })
    .catch(function (error) {
      console.log(error);
      dispatch(failedToRetreiveUser(error));
    });
};
