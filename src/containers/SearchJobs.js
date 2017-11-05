import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import styled from 'styled-components';

import Loader from '../components/shared/Loader';
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
  isFetchingJobs ?
    <Loader />
  :
    <SearchListWrapper>
      {jobs ? jobs.map(job =>
        <div key={Math.random().toString(36).substring(2, 15)} className="card">
          <div className="row">
            <div className="col-6">
              <div className="city">{job.PickCity}</div>
              <div className="port">{job.PickStation}</div>
              <span className="pickupDate teal">
                <img src="img/icons/pick.svg" alt="pick up" />
                &nbsp;
                {job.PickDate}, {job.PickTime}
              </span>
            </div>
            <div className="col-6 textRight">
              <div className="orderNum">
                {job.QLNumber}
                &nbsp;
                <img src="img/icons/icon-pin-orange.svg" alt="pick up" />
              </div>
              <span className="price">{job.QuotePrice}</span>
            </div>
            <div className="col-12">
              <hr />
              <span className="badge meta darkBG">Container</span>
              &nbsp;
              <span className="badge meta">40 ft</span>
              &nbsp;
              <span className="badge meta">Dry</span>
            </div>
            <div className="col-12 textRight">
              <hr />
              <span className="distance">... miles to</span>
              &nbsp;
              <span className="destination">{job.DropCity}</span>
              <div className="pickupDate accentOrange">
              {job.PickDate}, {job.PickTime}
                &nbsp;
                <img src="img/icons/drop.svg"  alt="drop off" />
              </div>
            </div>
          </div>
        </div>
      ) :
        <p>No jobs yet...</p>
      }
    </SearchListWrapper>
);

export default hoc(Search)
