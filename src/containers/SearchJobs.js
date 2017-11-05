import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import styled from 'styled-components';

import App from './App';
import Loader from '../components/shared/Loader';
import Filter from './Filter';
import JobCard from '../components/JobCard';
import { getIsFetchingJobs, getJobs } from '../reducers/jobs/selector';
import { fetchJobsAsync } from '../actions/doFetchJobsAsync';

const SearchListWrapper = styled.div`
  margin: ${({theme}) => theme.spacing.xsmall}px ${({theme}) => theme.spacing.small}px;
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
      <div>
        <Filter />
        <SearchListWrapper>
          <div className="row">
            {jobs ? jobs.map(job =>
              <div
                key={Math.random().toString(36).substring(2, 15)}
                className="col-6"
              >
                <JobCard job={job} />
              </div>
            ) :
              <p>No jobs yet...</p>
            }
          </div>
        </SearchListWrapper>
      </div>
    }
  </App>
);

export default hoc(Search)
