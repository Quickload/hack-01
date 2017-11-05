import {
  REQUEST_USER,
  RECEIVE_USER
} from '../../actions/doFetchUserAsync';

const initialState = {
  isFetching: false,
  hasError: false,
  user: null
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };
    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        user: action.user,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default user;
