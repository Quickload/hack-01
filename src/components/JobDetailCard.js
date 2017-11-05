import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import pickUpIcon from '../images/icons/pick.svg';
import dropOffIcon from '../images/icons/drop.svg';

const JobDetailCard = ({ job }) => (
    <div>
        <div className="container status">
            <div className="row">
                <div className="col-12">
                    Status: <strong>Confirmed</strong>
                </div>
            </div>
        </div>
        <div className="container whiteBG">
            <div className="details">
                <div className="row">
                    <div className="col-6">
                        <span className="city">Miami</span>
                        <span className="port">Port of Miami</span>
                        <span className="pickupDate teal"><img src="img/icons/pick.svg" /> Nov 29, Morning</span>
                    </div>
                    <div className="col-6 textRight detailsRight">
                        <span className="distance">350 miles to</span>
                        <span className="destination">Sebatian</span>
                        <span className="port">Port of Miami</span>
                        <span className="pickupDate accentOrange">Nov 29, Afternoon <img src="img/icons/drop.svg" /></span>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <span className="orderNum">Rw5t1j4 <img src="img/icons/icon-pin-orange.svg" width="20" /></span>
                    </div>
                    <div className="col-6 textRight">
                        <span className="price">$300.00</span>
                    </div>
                    <div className="col-12">
                        <hr />
                        <span className="badge meta darkBG">Container</span>
                        <span className="badge meta">40 ft</span>
                        <span className="badge meta">Dry</span>
                    </div>
                    <hr className="double" />
                    <div className="col-12 pickDrop">
                        <img src="img/icons/pick.svg" className="float-left pickIcon" />
                        <div className="float-left">
                            <label className="addressLabel">Pick Up</label>
                            <span className="address">Miami, FL 33130</span>
                        </div>
                    </div>
                    <div className="col-12 pickDrop">
                        <img src="img/icons/drop.svg" className="float-left pickIcon" />
                        <div className="float-left">
                            <label className="addressLabel">Drop-off</label>
                            <span className="address">Miami, FL 33130</span>
                        </div>
                    </div>
                    <div className="col-12 map">
                        <img src="img/map.png" width="100%" />
                    </div>
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
