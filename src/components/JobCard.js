import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import styled from 'styled-components';

import pickUpIcon from '../images/icons/pick.svg';
import dropOffIcon from '../images/icons/drop.svg';

const JobCardLink = styled.div`
  cursor: pointer;
`;

const JobCard = ({job, cardRedirect}) => (
  <JobCardLink onClick={() => cardRedirect(job.jobId)} className="card">
    <div className="row">
      <div className="col-6">
        <div className="city">{job.PickCity}</div>
        <div className="port">{job.PickStation}</div>
        <span className="pickupDate teal">
          <img src={pickUpIcon} alt="pick up" />
          &nbsp;
          {job.PickDate}, {job.PickTime}
        </span>
      </div>
      <div className="col-6 textRight">
        <div className="orderNum">
          {job.QLNumber}
          {/*
            &nbsp;
            <img src={orangePickUpIcon} alt="pick up" />
          */}
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
          <img src={dropOffIcon}  alt="drop off" />
        </div>
      </div>
    </div>
  </JobCardLink>
);

JobCard.propTypes = {
  job: PropTypes.object,
};

JobCard.defaultProps = {
  job: null,
};

export default pure(JobCard)
