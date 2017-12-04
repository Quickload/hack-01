import React from 'react';
import { pure } from 'recompose';

import {FilterCheckbox} from './FilterCheckbox';

const TruckTypeOptions = props => (
  <div className="row">
    <div className="col-12 searchTop">
      <FilterCheckbox id="Flatbed" value="Flatbed" {...props} />
      <FilterCheckbox id="FlatRack" value="Flat Rack" {...props} />
      <FilterCheckbox id="Dry" value="Dry" {...props} />
      <FilterCheckbox id="Tunnel" value="Tunnel" {...props} />
      <FilterCheckbox id="Tank" value="Tank" {...props} />
      <FilterCheckbox id="HalfHeight" value="Half Height" {...props} />
    </div>
  </div>
);

export default pure(TruckTypeOptions);
