import React from 'react';
import { pure } from 'recompose';

import {FilterCheckbox} from './FilterCheckbox';

const AccessorialTypeOptions = props => (
  <div className="row">
    <div className="col-12 searchTop">
      <FilterCheckbox id="Thermal" value="Thermal" {...props} />
      <FilterCheckbox id="SideOpen" value="Side Open" {...props} />
      <FilterCheckbox id="CarCarrier" value="Car Carrier" {...props} />
      <FilterCheckbox id="OpenTop" value="Open Top" {...props} />
      <FilterCheckbox id="Forklift" value="Forklift" {...props} />
      <FilterCheckbox id="Liftgate" value="Liftgate" {...props} />
      <FilterCheckbox id="Tarp" value="Tarp" {...props} />
      <FilterCheckbox id="Overweight" value="Overweight" {...props} />
    </div>
  </div>
);

export default pure(AccessorialTypeOptions);
