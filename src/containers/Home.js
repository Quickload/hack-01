import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import Helmet from 'react-helmet';

import { fetchUserAsync } from '../actions/doFetchUserAsync';

const hoc = compose(
  connect((state: Object) => ({
    // jobs: getResults(state),
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

const Home = props => (
  <div>
    <Helmet>
      <title>Home Page</title>
    </Helmet>

    <h1>Home</h1>
  </div>
)

export default hoc(Home)
