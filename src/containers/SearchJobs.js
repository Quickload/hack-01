import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, withHandlers, withState, lifecycle } from 'recompose';
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
  withState('filterIsOpen', 'setFilterIsOpen', false),
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

const Search = ({
  isFetchingJobs,
  jobs,
  filterIsOpen,
  setFilterIsOpen,
  cardRedirect,
  handleInput,
  text,
}) => (
  <App>
    <Filter filterIsOpen={filterIsOpen} setFilterIsOpen={setFilterIsOpen} />

    {isFetchingJobs ?
      <Loader />
      :
      <div>
        <input
          type="text"
          className="form-control"
          id="search"
          aria-describedby="search"
          placeholder="Search..."
          value = {text}
          onChange={handleInput}
        />
        <SearchListWrapper filterIsOpen={filterIsOpen}>
          <div className="row">
            {jobs ? jobs.filter(j =>
              j.PickCity.toString().toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
              j.PickStation.toString().toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
              j.LoadType.toString().toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
              j.ContainerSize.toString().toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
              j.ContainerType.toString().toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
              j.DropCity.toString().toLowerCase().indexOf(text.toLowerCase()) !== -1
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
