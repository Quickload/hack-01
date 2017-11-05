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
  <header>
<div className="container">
			<div className="row">
				<div className="col-8 col-xs-8 float-left">
				<a href="#"><img src="../svg/icons/quickload-truck.svg" /></a>
				</div>
				<div className="col-2 col-xs-2 float-right">
					<a href="#"><img src="../svg/icons/icon-pin.svg" /></a>
				</div>
				<div className="col-2 float-right">
					<a href="#"><img src="../svg/icons/icon-search-active.svg" /></a>
				</div>
		</div>
		</div>
	</header>
<div className="container whiteBG">
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
		</div>
		<div className="row">
			<div className="col-12 searchTop">
			<div className="float-left checks">
					<label>
					  <input type="checkbox">
					  Flatbed
					</label>
				</div>
				<div className="float-left checks">
				<label>
				  <input type="checkbox">
				  Dry Van
				</label>
				</div>
				<div className="float-left checks">
				<label >
				  <input type="checkbox">
				  Reefer
				</label>
				</div>
				<div className="float-left checks">
				<label>
				  <input type="checkbox">
				  Container
				</label>
				</div>
				
				
			</div>
		</div>
		</div>
</div>

<div className="container p0">
	<div className="lightBG tagArea">
		<span className="tag secOrange">Near Me <a href="#" className="removeTag"><img src="../svg/icons/icon-close-sm.svg" /></a></span>
	</div>
</div>
	<div className="container searchCTAs">
	<div className="row">
		<div className="col-6 textRight">
			<a href="#" className="btnLink">CLEAR</a>
		</div>
		<div className="col-6 textLeft">
			<a href="#" className="btn orangeBG">Search</a>
		</div>
	</div>
</div>
	<div className="container">
		<!-- start pickup option -->
		<div className="card">
			<div className="row">
				<div className="col-6">
					<span className="city">Miami</span>
					<span className="port">Port of Miami</span>
					<span className="pickupDate teal"><img src="../svg/icons/pick.svg" /> Nov 29, Morning</span>				
				</div>
				<div className="col-6 textRight">					<span className="orderNum">Rw5t1j4 <img src="../svg/icons/pin-selected.svg" width="20"></span>
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
					<span className="destination">Sebatian</span>
					<span className="pickupDate accentOrange">Nov 29, Afternoon <img src="../svg/icons/drop.svg" /></span>
				</div>
			</div>		
		</div>
		<div className="card">
			<div class="row">
				<div class="col-6">
					<span class="city">Miami</span>
					<span class="port">Port of Miami</span>
					<span class="pickupDate teal"><img src="../svg/icons/pick.svg" /> Nov 29, Morning</span>				
				</div>
				<div class="col-6 textRight">					<span class="orderNum">Rw5t1j4 <img src="../svg/icons/pin-unselected.svg" width="20"></span>
<span class="price">$300.00</span>
				</div>
				<div class="col-12">
					<hr />
					<span class="badge meta">Container</span>
					<span class="badge meta">40 ft</span>
					<span class="badge meta">Dry</span>
				</div>
				<div class="col-12 textRight">
					<hr />
					<span class="distance">350 miles to</span> 
					<span class="destination">Sebatian</span>
					<span class="pickupDate accentOrange">Nov 29, Afternoon <img src="../svg/icons/drop.svg" /></span>
				</div>
			</div>		
		</div>
	</div>
</div>
)

export default hoc(Home)
