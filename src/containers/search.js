import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Button from '../components/Button';
import CityText from '../components/CityText';
import { fetchJobsAsync } from '../actions/doFetchJobsAsync';

const hoc = compose(
  connect((state) => ({
    // jobs: getResults(state),
  }), (dispatch) => ({
    fetchJobs: () => dispatch(fetchJobsAsync()),
  })),
  lifecycle({
    // componentDidMount() {
    //   const {fetchJobs} = this.props;
    //   fetchJobs();
    // },
  }),
  pure,
);

const Home = props => (
<div>
  <header className="">
	<div className="container">
			<div className="row">
				<div className="col-8 col-xs-8 float-left">
				<a href="#"><img src="../svg/icons/quickload-truck.svg" /></a>
				</div>
				<div className="col-2 col-xs-2 float-right">
					<a href="#"><img src="../svg/icons/icon-pin.svg" /></a>
				</div>
				<div className="col-2 float-right">
					<a href="#"><img src="../svg/icons/icon-search.svg" /></a>
				</div>
		</div>
		</div>
	</header>
  <div className="container p0">
  <div className="searchHeader">
			<div className="row">
			<div className="col-12">
				<div className="dropdown">
				  <a className="btn quickLoadSort dropdown-toggle textLeft"  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					  <span className="filterBy">Filter By:</span> Pickup City
				  </a>
				  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">Dropoff City</a>
					<a className="dropdown-item" href="#">Load Type</a>
					<a className="dropdown-item" href="#">Truck Type</a>
					<a className="dropdown-item" href="#">Accessorial</a>
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-12 searchTop">
				<img src="svg/icons/icon-map-near.svg" />
				<input type="text" className="secOrange citySearch" placeholder="Enter City Name">
			</div>
		</div>
		</div>
        <div className="row">
        <div className="col-6">
          <h2 className="quickLoad">
            <span className="secOrange">Quick</span>Load Board
          </h2>
        </div>
        <div className="col-6">
          <div className="dropdown">
            <button className="btn quickLoadSort dropdown-toggle textRight" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort by Distance
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
	<div className="container">
		<div className="card">
			<div className="row">
				<div className="col-6">
					<span className="city">Miami</span><br />
					<span className="port">Port of Miami</span><br />
					<span className="pickupDate teal"><img src="../svg/icons/pick.svg" /> Nov 29, Morning</span>				
				</div>
				<div className="col-6 textRight">
          <span className="orderNum">Rw5t1j4 <img src="../svg/icons/icon-pin-orange.svg" /></span><br />
          <span className="price">$300.00</span>
				</div>
				<div className="col-12">
					<hr />
					<span className="badge meta darkBG">Container</span>
					<span className="badge meta">40 ft</span>
					<span className="badge meta">Dry</span>
				</div>
				<div className="col-12 textRight">
					<hr />
					<span className="distance">350 miles to</span> 
					<span className="destination">Sebatian</span><br />
					<span className="pickupDate accentOrange">Nov 29, Afternoon <img src="../svg/icons/drop.svg" /></span>
				</div>
			</div>		
		</div>
		
		<div className="card">
			<div className="row">
				<div className="col-6">
					<span className="city">Miami</span><br />
					<span className="port">Port of Miami</span><br />
					<span className="pickupDate teal"><img src="../svg/icons/pick.svg" /> Nov 29, Morning</span>				
				</div>
				<div className="col-6 textRight">
          <span className="orderNum">Rw5t1j4 <img src="../svg/icons/icon-pin-orange.svg" width="20" /></span><br />
<span className="price">$300.00</span>
				</div>
				<div className="col-12">
					<hr />
					<span className="badge meta">Container</span>
					<span className="badge meta">40 ft</span>
					<span className="badge meta">Dry</span>
				</div>
				<div className="col-12 textRight">
					<hr />
					<span className="distance">350 miles to</span> 
					<span className="destination">Sebatian</span><br />
					<span className="pickupDate accentOrange">Nov 29, Afternoon <img src="../svg/icons/drop.svg" /></span>
				</div>
			</div>		
		</div>
	</div>
</div>
)

export default hoc(Home)
