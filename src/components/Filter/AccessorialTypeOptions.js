import React from 'react';
import { pure } from 'recompose';

const AccessorialTypeOptions = () => (
  <div className="row">
    <div className="col-12 searchTop">
      <div className="float-left checks">
        <input type="checkbox" id="Forklift" />
        <label htmlFor="Forklift">
          Forklift
        </label>
      </div>
      <div className="float-left checks">
        <input type="checkbox" id="Liftgate" />
        <label htmlFor="Liftgate">
          Liftgate
        </label>
      </div>
      <div className="float-left checks">
        <input type="checkbox" id="Tarp" />
        <label htmlFor="Tarp">
          Tarp
        </label>
      </div>
      <div className="float-left checks">
        <input type="checkbox" id="Overweight" />
        <label htmlFor="Overweight">
          Overweight
        </label>
      </div>
      <div className="float-left checks">
        <input type="checkbox" id="SuperDuperLongOption" />
        <label htmlFor="SuperDuperLongOption">
          Super Duper Long Option
        </label>
      </div>
    </div>
  </div>
);

export default pure(AccessorialTypeOptions);
