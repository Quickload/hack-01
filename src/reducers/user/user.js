import {
  REQUEST_USER,
  RECEIVE_USER,
  FAILED_USER,
} from '../../actions/doFetchUserAsync';

const initialState = {
  isFetching: false,
  error: null,
  user: null
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FAILED_USER:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        error: null,
        user: action.user,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default user;
