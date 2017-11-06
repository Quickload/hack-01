import React from 'react';
import { pure } from 'recompose';

const TruckTypeOptions = () => (
  <div className="row">
    <div className="col-12 searchTop">
      <div className="float-left checks">
        <label>
          <input type="checkbox" />
          Flatbed
        </label>
      </div>
      <div className="float-left checks">
        <label>
          <input type="checkbox" />
          Dry Van
        </label>
      </div>
      <div className="float-left checks">
        <label>
          <input type="checkbox" />
          Reefer
        </label>
      </div>
      <div className="float-left checks">
        <label>
          <input type="checkbox" />
          Container
        </label>
      </div>
    </div>
  </div>
);

export default pure(TruckTypeOptions);
