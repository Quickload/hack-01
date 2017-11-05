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
  <header className="header">
<div className="container">
			<div className="row">
				<div className="col-8 float-left">
				<a href="#"><img src="img/icons/back.svg" /></a>
				</div>
				<div className="col-4 float-right textRight">
					<a href="#" className="btn orangeBG">ACCEPT</a>
				</div>
		</div>
		</div>
	</header>
<div className="container whiteBG">
	<div className="details">

			<div className="row">
				<div className="col-6">
					<span className="city">Miami</span>
					<span class="port">Port of Miami</span>
					<span class="pickupDate teal"><img src="img/icons/pick.svg" /> Nov 29, Morning</span>
				</div>
				<div class="col-6 textRight detailsRight">
					<span class="distance">350 miles to</span>
					<span class="destination">Sebatian</span>
					<span class="port">Port of Miami</span>
					<span class="pickupDate accentOrange">Nov 29, Afternoon <img src="img/icons/drop.svg" /></span>
				</div>
			</div>
			<hr />
			<div class="row">
				<div class="col-6">
						 <span class="orderNum">Rw5t1j4 <img src="img/icons/icon-pin-orange.svg" width="20"></span>
				</div>
				<div class="col-6 textRight">
					<span class="price">$300.00</span>
				</div>
				<div class="col-12">
					<hr />
					<span class="badge meta darkBG">Container</span>
					<span class="badge meta">40 ft</span>
					<span class="badge meta">Dry</span>
				</div>
					<hr class="double">
				<div class="col-12 pickDrop">
					<img src="img/icons/pick.svg" class="float-left pickIcon">
					<div class="float-left">
						<label class="addressLabel">Pick Up</label>
						<span class="address">Miami, FL 33130</span>
					</div>
				</div>
				<div class="col-12 pickDrop">
					<img src="img/icons/drop.svg" class="float-left pickIcon">
					<div class="float-left">
						<label class="addressLabel">Drop-off</label>
						<span class="address">Miami, FL 33130</span>
					</div>
				</div>
				<div class="col-12 map">
					<img src="img/map.png" width="100%">
				</div>

			</div>
		</div>
	</div>
</div>
)

export default hoc(Home)
