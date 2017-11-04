import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import Helmet from 'react-helmet';

import { getIsFetching, getUser } from '../reducers/user/selector';
import { fetchUserAsync } from '../actions/doFetchUserAsync';

const hoc = compose(
  connect((state: Object) => ({
    isFetching: getIsFetching(state),
    user: getUser(state),
  }), (dispatch: Function) => ({
    fetchUser: () => dispatch(fetchUserAsync()),
  })),
  lifecycle({
    componentDidMount() {
      const {fetchUser} = this.props;
      fetchUser();
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
