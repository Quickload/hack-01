import { combineReducers } from 'redux';
import {
  REQUEST_USER,
  RECEIVE_USER
} from '../actions/doFetchUserAsync';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  user: null
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        user: action.user,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default user;
