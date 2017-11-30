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
  withState('searchValue', 'setSearchValue', ''),
  withState('tags', 'setTags', ['Near Me']),
  connect((state) => ({
    isFetchingJobs: getIsFetchingJobs(state),
    jobs: getJobs(state),
  }), (dispatch) => ({
    fetchJobs: () => dispatch(fetchJobsAsync()),
    clearSelectedJob: () => dispatch(clearSelectedJobAction())
  })),
  withState('filterIsOpen', 'setFilterIsOpen', false),
  withHandlers({
    handleSearchInput: ({setSearchValue}) => (e, value) => {
      const newValue = (e && e.target && e.target.value) || value || '';
      setSearchValue(newValue);
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

const lowcaseString = str => str.toString().toLowerCase();

const hasInArray = (e, tag) => {
  if (
    lowcaseString(e.PickCity).indexOf(lowcaseString(tag)) !== -1 ||
    lowcaseString(e.PickStation).indexOf(lowcaseString(tag)) !== -1 ||
    lowcaseString(e.LoadType).indexOf(lowcaseString(tag)) !== -1 ||
    lowcaseString(e.ContainerSize).indexOf(lowcaseString(tag)) !== -1 ||
    lowcaseString(e.ContainerType).indexOf(lowcaseString(tag)) !== -1 ||
    lowcaseString(e.DropCity).indexOf(lowcaseString(tag)) !== -1
  ) return e;
  return false;
};

const Search = props => {
  const {
    isFetchingJobs,
    jobs,
    filterIsOpen,
    cardRedirect,
    tags,
  } = props;

  const searchableTags = tags && tags.reduce((c, tag) => {
    if (tag !== 'Near Me') {
      c.push(lowcaseString(tag));
    }
    return c;
  }, []);

  return (
    <App>
      {isFetchingJobs ?
        <Loader />
      :
        <div>
          <Filter {...props} />
          <SearchListWrapper filterIsOpen={filterIsOpen}>
            <div className="row">
              {jobs ? jobs.filter(j =>
                searchableTags && searchableTags.length ? searchableTags.find(t => hasInArray(j, t)) : j
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
};

export default hoc(Search)
