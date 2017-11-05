import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, withHandlers, lifecycle } from 'recompose';
import { withRouter } from 'react-router'
import styled from 'styled-components';

import App from './App';
import Loader from '../components/shared/Loader';
import Filter from './Filter';
import JobCard from '../components/JobCard';
import { getIsFetchingJobs, getJobs } from '../reducers/jobs/selector';
import { fetchJobsAsync } from '../actions/doFetchJobsAsync';
import { clearSelectedJobAction } from '../actions/doFetchSelectedJobAsync';

const SearchListWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.xsmall}px ${({ theme }) => theme.spacing.small}px;
`;

const hoc = compose(
  withRouter,
  connect((state) => ({
    isFetchingJobs: getIsFetchingJobs(state),
    jobs: getJobs(state),
  }), (dispatch) => ({
    fetchJobs: () => dispatch(fetchJobsAsync()),
    clearSelectedJob: () => dispatch(clearSelectedJobAction())
  })),
  withHandlers({
    cardRedirect: ({ history }) => id => {
      history.push(`/job/${id}`);
    }
  }),
lifecycle({
  componentDidMount() {
    const { fetchJobs, clearSelectedJob } = this.props;
    fetchJobs();
    clearSelectedJob();
  },
}),
  pure,
);

const Search = ({ isFetchingJobs, jobs, cardRedirect }) => (
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
                <JobCard
                  cardRedirect={cardRedirect}
                  job={job} />
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
