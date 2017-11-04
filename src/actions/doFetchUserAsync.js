import userData from '../data/user';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

export const requestUser = () => ({
  type: REQUEST_USER,
});

export const receiveUser = (json) => {
  return {
    type: RECEIVE_USER,
    user: json,
    receivedAt: Date.now(),
  };
};

export const fetchUserAsync = () => dispatch => {
  dispatch(requestUser());
  // return fetch('https://us-central1-quickload-f4a75.cloudfunctions.net/user?userId=zW1dz12t8DbmaC0dhr5D')
  //   .then(response => response.json())
  //   .then(json => dispatch(receiveUser(json)))
  dispatch(receiveUser(userData));
};
