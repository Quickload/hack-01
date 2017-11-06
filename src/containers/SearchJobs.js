import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  pure,
  withState,
  lifecycle,
} from 'recompose';
import styled from 'styled-components';

import App from './App';
import Loader from '../components/shared/Loader';
import Filter from './Filter';
import JobCard from '../components/JobCard';
import { getIsFetchingJobs, getJobs } from '../reducers/jobs/selector';
import { fetchJobsAsync } from '../actions/doFetchJobsAsync';

const SearchListWrapper = styled.div`
  margin: ${({theme}) => theme.spacing.xsmall}px ${({theme}) => theme.spacing.small}px;
  ${({filterIsOpen}) => filterIsOpen && `
    filter: blur(5px);
    transition: .25s linear;
    pointer-events: none;
  `}
`;

const ErrorMessage = styled.div`
  width: 100%;
  margin: 40px 0;
  text-align: center;
`;

const hoc = compose(
  connect((state) => ({
    isFetchingJobs: getIsFetchingJobs(state),
    jobs: getJobs(state),
  }), (dispatch) => ({
    fetchJobs: () => dispatch(fetchJobsAsync()),
  })),
  withState('filterIsOpen', 'setFilterIsOpen', false),
  lifecycle({
    componentDidMount() {
      const {fetchJobs} = this.props;
      fetchJobs();
    },
  }),
  pure,
);

const Search = ({isFetchingJobs, jobs, filterIsOpen, setFilterIsOpen}) => (
  <App>
    <Filter filterIsOpen={filterIsOpen} setFilterIsOpen={setFilterIsOpen} />

    {isFetchingJobs ?
      <Loader />
    :
      <div>
        <SearchListWrapper filterIsOpen={filterIsOpen}>
          <div className="row">
            {jobs ? jobs.map(job =>
              <div
                key={Math.random().toString(36).substring(2, 15)}
                className="col-md-6 col-lg-4 col-xl-3"
              >
                <JobCard job={job} />
              </div>
            ) :
              <ErrorMessage>
                <p><strong>No jobs available right now.</strong></p>
                <br />
                <p>Please check back soon.</p>
              </ErrorMessage>
            }
          </div>
        </SearchListWrapper>
      </div>
    }
  </App>
);

export default hoc(Search)
