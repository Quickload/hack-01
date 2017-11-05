import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import pickUpIcon from '../images/icons/pick.svg';
import dropOffIcon from '../images/icons/drop.svg';

const JobDetailCard = ({job}) => (
  <div className="card">
    <div className="row">
      <div className="col-6">
        <div className="city">{job ? job.PickCity : 'Pick City'}</div>
        <div className="port">{job ? job.PickStation : 'Pick Station'}</div>
        <span className="pickupDate teal">
          <img src={pickUpIcon} alt="pick up" />
          &nbsp;
          {job ? job.PickDate : 'Pick Date'}, {job ? job.PickTime : 'Pick Time'}
        </span>
      </div>
      <div className="col-6 textRight">
        <div className="orderNum">
          {job ? job.QLNumber: 'QLNumber'}
          {/*
            &nbsp;
            <img src={orangePickUpIcon} alt="pick up" />
          */}
        </div>
        <span className="price">{job ? job.QuotePrice : 'Quote Price'}</span>
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
        <span className="destination">{job ? job.DropCity : 'Drop City'}</span>
        <div className="pickupDate accentOrange">
        {job ? job.PickDate : 'Pick Date'}, {job ? job.PickTime : 'PickTime'}
          &nbsp;
          <img src={dropOffIcon}  alt="drop off" />
        </div>
      </div>
    </div>
  </div>
);

JobDetailCard.propTypes = {
  job: PropTypes.object,
};

JobDetailCard.defaultProps = {
  job: null,
};

export default pure(JobDetailCard)
