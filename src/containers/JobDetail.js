import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import styled from 'styled-components';

import App from './App';
import Loader from '../components/shared/Loader';
import Filter from './Filter';
import JobDetailCard from '../components/JobDetailCard';
import { getIsFetchingSelectedJobs, getSelectedJob } from '../reducers/jobs/selector';
import { fetchSelectedJobAsync } from '../actions/doFetchSelectedJobAsync';

const JobDetailWrapper = styled.div`
  margin: ${({theme}) => theme.spacing.xsmall}px ${({theme}) => theme.spacing.small}px;
`;

const hoc = compose(
  connect((state) => ({
    isFetchingSelectedJob: getIsFetchingSelectedJobs(state),
    selectedJob: getSelectedJob(state),
  }), (dispatch) => ({
    fetchSelectedJob: (id) => dispatch(fetchSelectedJobAsync(id)),
  })),
  lifecycle({
    componentDidMount() {
      const {fetchSelectedJob} = this.props;
      const { id } = this.props.match.params;
      fetchSelectedJob(id);
    },
  }),
  pure,
);

const JobDetail = ({isFetchingSelectedJob, selectedJob}) => (
  <App>
    {isFetchingSelectedJob ?
      <Loader />
    :
      <JobDetailWrapper>
        <JobDetailCard job={selectedJob} />
      </JobDetailWrapper>
    }
  </App>
);

export default hoc(JobDetail)
