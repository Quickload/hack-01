import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import styled from 'styled-components';

import App from './App';
import Loader from '../components/shared/Loader';
import JobDetailCard from '../components/JobDetailCard';
import { getIsFetchingSelectedJob, getSelectedJob } from '../reducers/jobs/selector';
import { fetchSelectedJobAsync } from '../actions/doFetchSelectedJobAsync';
import { fetchUserAsync } from '../actions/doFetchUserAsync';
import { getIsFetchingUser, getUser } from '../reducers/user/selector';

const JobDetailWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.xsmall}px ${({ theme }) => theme.spacing.small}px;
`;

const hoc = compose(
    connect((state) => ({
        isFetching: getIsFetchingSelectedJob(state),
        selectedJob: getSelectedJob(state),
        user: getUser(state),
        isFetchingUser: getIsFetchingUser(state),
    }), (dispatch) => ({
        fetchSelectedJob: (id) => dispatch(fetchSelectedJobAsync(id)),
        fetchUser: () => dispatch(fetchUserAsync()),
    })),
    lifecycle({
        componentDidMount() {
            const { fetchSelectedJob, user, fetchUser, isFetchingUser } = this.props;
            const { id } = this.props.match.params;
            fetchSelectedJob(id);

            if (!isFetchingUser && !user) {
                fetchUser();
            }
        },
    }),
    pure,
);

const JobDetail = ({ isFetching, selectedJob, user, isFetchingUser }) => (
    <App>
        {isFetching || isFetchingUser ?
            <Loader />
            :
            <JobDetailWrapper>
                {selectedJob ?
                    <JobDetailCard
                        job={selectedJob}
                        user={user}
                    />
                    :
                    <h3>Sorry, job not available at the moment</h3>
                }
            </JobDetailWrapper>
        }
    </App>
);

export default hoc(JobDetail)
