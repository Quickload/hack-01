import React from 'react';
import {pure} from 'recompose';

import mapIcon from '../../images/icons/icon-map-near.svg';

const PickupCityOptions = ({
  searchValue,
  handleSearchInput,
}) => (
  <div className="row">
    <div className="col-12 searchTop">
      <img src={mapIcon} alt="map icon" />
      <input
        type="text"
        className="secOrange citySearch"
        placeholder="Enter City Name"
        value={searchValue}
        onChange={handleSearchInput} />
    </div>
  </div>
);

export default pure(PickupCityOptions);
