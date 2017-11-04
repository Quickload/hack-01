import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Button from '../components/Button';
import CityText from '../components/CityText';
import { fetchJobsAsync } from '../actions/doFetchJobsAsync';

const hoc = compose(
  connect((state) => ({
    // jobs: getResults(state),
  }), (dispatch) => ({
    fetchJobs: () => dispatch(fetchJobsAsync()),
  })),
  lifecycle({
    // componentDidMount() {
    //   const {fetchJobs} = this.props;
    //   fetchJobs();
    // },
  }),
  pure,
);

const Home = props => (
  <div>
    <Helmet>
      <title>Home Page</title>
    </Helmet>

    <h1>Home</h1>

    <div className="meta">Miami</div>
    <Button>Sign Up</Button>

  </div>
)

export default hoc(Home)
