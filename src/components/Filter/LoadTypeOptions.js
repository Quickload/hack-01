import React from 'react';
import { pure } from 'recompose';

const LoadTypeOptions = () => (
  <div className="row">
    <div className="col-12 searchTop">
      <div className="float-left checks">
        <input type="checkbox" id="Flatbed" />
        <label htmlFor="Flatbed">
          Flatbed
        </label>
      </div>
      <div className="float-left checks">
        <input type="checkbox" id="FTL" />
        <label htmlFor="FTL">
          FTL
        </label>
      </div>
      <div className="float-left checks">
        <input type="checkbox" id="LTL" />
        <label htmlFor="LTL">
          LTL
        </label>
      </div>
    </div>
  </div>
);

export default pure(LoadTypeOptions);
