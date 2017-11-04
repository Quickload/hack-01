import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import Helmet from 'react-helmet';

import { fetchJobsAsync } from '../actions/doFetchJobsAsync';

const hoc = compose(
  connect((state: Object) => ({
    // jobs: getResults(state),
  }), (dispatch: Function) => ({
    fetchJobs: () => dispatch(fetchJobsAsync()),
  })),
  lifecycle({
    componentDidMount() {
      const {fetchJobs} = this.props;
      fetchJobs();
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
