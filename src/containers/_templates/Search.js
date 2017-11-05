import React from 'react';
import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Button from '../components/Button';
import CityText from '../components/CityText';
import { getIsFetching, getUser } from '../reducers/user/selector';

const hoc = compose(
  connect((state) => ({
    jobs: getJobs(state),
  }), () => ({})),
  pure,
);

const Search = props => (
	<div>
		<header className="header">
		<div className="container">
				<div className="row">
					<div className="col-8 col-xs-8 float-left">
					<a href="#"><img src="img/icons/quickload-truck.svg" /></a>
					</div>
					<div className="col-2 col-xs-2 float-right">
						<a href="#"><img src="img/icons/icon-pin.svg" /></a>
					</div>
					<div className="col-2 float-right">
						<a href="#"><img src="img/icons/icon-search.svg" /></a>
					</div>
			</div>
			</div>
		</header>
		<div className="container p0">
			<div className="searchHeader">
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
						<span className="pickupDate teal"><img src="img/icons/pick.svg" /> Nov 29, Morning</span>
					</div>
					<div className="col-6 textRight">
						<span className="orderNum">Rw5t1j4 <img src="img/icons/icon-pin-orange.svg" /></span><br />
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
						<span className="pickupDate accentOrange">Nov 29, Afternoon <img src="img/icons/drop.svg" /></span>
					</div>
				</div>
			</div>

			<div className="card">
				<div className="row">
					<div className="col-6">
						<span className="city">Miami</span><br />
						<span className="port">Port of Miami</span><br />
						<span className="pickupDate teal"><img src="img/icons/pick.svg" /> Nov 29, Morning</span>
					</div>
					<div className="col-6 textRight">
						<span className="orderNum">Rw5t1j4 <img src="img/icons/icon-pin-orange.svg" width="20" /></span><br />
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
						<span className="pickupDate accentOrange">Nov 29, Afternoon <img src="img/icons/drop.svg" /></span>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default hoc(Search)
