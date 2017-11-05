import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import styled from 'styled-components';

import App from './App';
import Loader from '../components/shared/Loader';
import JobCard from '../components/JobCard';
import { getIsFetchingJobs, getJobs } from '../reducers/jobs/selector';
import { fetchJobsAsync } from '../actions/doFetchJobsAsync';

const SearchListWrapper = styled.div`
  margin: ${({theme}) => theme.spacing.medium}px 0;
`;

const hoc = compose(
  connect((state) => ({
    isFetchingJobs: getIsFetchingJobs(state),
    jobs: getJobs(state),
  }), (dispatch) => ({
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

const Search = ({isFetchingJobs, jobs}) => (
  <App>
    {isFetchingJobs ?
      <Loader />
    :
      <SearchListWrapper>
        {jobs ? jobs.map(job =>
          <JobCard key={Math.random().toString(36).substring(2, 15)} job={job} />
        ) :
          <p>No jobs yet...</p>
        }
      </SearchListWrapper>
    }
  </App>
);

export default hoc(Search)
