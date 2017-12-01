import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import styled from 'styled-components';
// import GeoPoint from 'geopoint';

import pickUpIcon from '../images/icons/pick.svg';
import dropOffIcon from '../images/icons/drop.svg';
import JobDetailMap from './JobDetailMap';

const DropCitySpan = styled.span`
    font-weight: bold;
`;

const JobDetailCard = ({ job, markerLocation, setMarkerLocation }) => (
    <div>
        {/* <div className="container status">
            <div className="row">
                <div className="col-12">
                    Status: <strong>Confirmed</strong>
                </div>
            </div>
        </div> */}
        <div className="container whiteBG">
            <div className="details">
                <div className="row">
                    <div className="col-6">
                        <span className="city">{job.PickCity}</span>
                        <span className="port">{job.PickStation}</span>
                        <span className="pickupDate teal">
                            <img src={pickUpIcon} alt="pickup"/> {job.PickDate}, {job.PickTime}
                        </span>
                    </div>
                    <div className="col-6 textRight detailsRight">
                        <span className="city">{job.QuotePrice}</span>
                        <span className="distance">{(job.distance && job.distance.text) || '300 miles'} to <DropCitySpan>{job.DropCity}</DropCitySpan></span>
                        <span className="pickupDate accentOrange">{job.DropDate}, {job.DropTime}
                            <img src={dropOffIcon} alt="dropoff" />
                        </span>
                    </div>
                </div>
                <hr className="double" />
                <div className="col-12">
                    { job.ShipType.tags.map((tag) => {
                        return <span key={tag} className="badge meta">{tag}</span>
                    })}
                </div>
                <hr className="double" />
                <div className="row">
                    <div className="col-6">
                        <img src={pickUpIcon} alt="pickup" className="float-left pickIcon" />
                        <div className="float-left">
                            <label className="addressLabel">Pick Up</label>
                            <span className="address">{job.PickCity}, {job.PickState} {job.PickZip}</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={dropOffIcon} alt="dropoff" className="float-left pickIcon" />
                        <div className="float-left">
                            <label className="addressLabel">Drop-off</label>
                            <span className="address">{job.DropCity}, {job.DropState} {job.DropZip}</span>
                        </div>
                    </div>
                </div>
                {job && job.location &&
                    <div>
                        <hr className="double" />
                        <br />
                        <p className="city">Pick Up Location</p>
                        <br />
                        <JobDetailMap location={job.location} />
                        <hr className="double" />
                    </div>
                }
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

export default pure(JobDetailCard);
