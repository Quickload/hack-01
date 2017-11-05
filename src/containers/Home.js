import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import Helmet from 'react-helmet';

import { getIsFetching, getUser } from '../reducers/user/selector';
import { fetchUserAsync } from '../actions/doFetchUserAsync';
import { fetchJobsAsync } from '../actions/doFetchJobsAsync';

const hoc = compose(
  connect((state: Object) => ({
    isFetching: getIsFetching(state),
    user: getUser(state),
  }), (dispatch: Function) => ({
    fetchUser: () => dispatch(fetchUserAsync()),
    fetchJobs: () => dispatch(fetchJobsAsync()),
  })),
  lifecycle({
    componentDidMount() {
      const {fetchUser, fetchJobs} = this.props;
      fetchUser();
      fetchJobs();
    },
  }),
  pure,
);

const Home = ({user}) => (
  <div>
    <Helmet>
      <title>Home Page</title>
    </Helmet>

    <h1>Hello, {user && user.name}</h1>
  </div>
)

export default hoc(Home)
