import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, withState, withHandlers, lifecycle } from 'recompose';
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
  withState('text', 'updateText', ''),
  connect((state) => ({
    isFetchingJobs: getIsFetchingJobs(state),
    jobs: getJobs(state),
  }), (dispatch) => ({
    fetchJobs: () => dispatch(fetchJobsAsync()),
    clearSelectedJob: () => dispatch(clearSelectedJobAction())
  })),
  withHandlers({
    handleInput: props => e => {
      props.updateText(e.target.value);
      console.log('myText: ', e.target.value);
    },
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

const Search = ({ isFetchingJobs, jobs, cardRedirect, handleInput, text }) => (
  <App>
    {isFetchingJobs ?
      <Loader />
      :
      <div>
        {/* <Filter /> */}
        <input
          type="text"
          className="form-control"
          id="search"
          aria-describedby="search"
          placeholder="Search..."
          value = {text}
          onChange={handleInput}
        />
        <SearchListWrapper>
          <div className="row">
            {jobs ? jobs.filter(j =>
              j.PickCity.indexOf(text) !== -1 ||
              j.PickStation.indexOf(text) !== -1 ||
              j.LoadType.toString().indexOf(text) !== -1 ||
              j.ContainerSize.toString().indexOf(text) !== -1 ||
              j.ContainerType.toString().indexOf(text) !== -1 ||
              j.DropCity.indexOf(text) !== -1
            ).map(job =>
              <div
                key={Math.random().toString(36).substring(2, 15)}
                className="col-md-6 col-lg-4 col-xl-3"
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
