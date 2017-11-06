import React from 'react';
import {
  compose,
  pure,
  withState,
  withHandlers,
} from 'recompose';

import mapIcon from '../../images/icons/icon-map-near.svg';

const hoc = compose(
  withHandlers({
    handleOnChange: ({handlePickupCityTag}) => e => {
      console.log(e);
    },
  }),
  pure,
);

const PickupCityOptions = ({pickupCityValue, handleOnChange}) => (
  <div className="row">
    <div className="col-12 searchTop">
      <img src={mapIcon} alt="map icon" />
      <input
        type="text"
        className="secOrange citySearch"
        placeholder="Enter City Name"
        value={pickupCityValue}
        onBlur={() => handleOnChange()} />
    </div>
  </div>
);

export default hoc(PickupCityOptions);
