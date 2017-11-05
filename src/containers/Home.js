import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import Helmet from 'react-helmet';

import { fetchUserAsync } from '../actions/doFetchUserAsync';
import { getIsFetchingUser, getUser } from '../reducers/user/selector';

const hoc = compose(
  connect((state) => ({
    isFetchingUser: getIsFetchingUser(state),
    user: getUser(state),
  }), (dispatch) => ({
    fetchUser: () => dispatch(fetchUserAsync()),
  })),
  lifecycle({
    componentDidMount() {
      const {isFetchingUser, user, fetchUser} = this.props;
      if (!isFetchingUser && !user) {
        fetchUser();
      }
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
