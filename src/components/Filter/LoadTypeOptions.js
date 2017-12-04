import React from 'react';
import { pure } from 'recompose';

import {FilterCheckbox} from './FilterCheckbox';

const LoadTypeOptions = props => (
  <div className="row">
    <div className="col-12 searchTop">
      <FilterCheckbox id="Container" value="Container" {...props} />
      <FilterCheckbox id="Pallet" value="Pallet" {...props} />
      <FilterCheckbox id="FTL" value="FTL" {...props} />
      <FilterCheckbox id="LTL" value="LTL" {...props} />
    </div>
  </div>
);

export default pure(LoadTypeOptions);
