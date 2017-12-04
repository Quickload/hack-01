import React from 'react';
import { pure } from 'recompose';

export const FilterCheckbox = ({value, id, handleCheckboxOnChange, tags}) => (
  <div className="float-left checks">
    <input
      type="checkbox"
      id={id}
      value={value}
      checked={tags.indexOf(value) > -1}
      onChange={handleCheckboxOnChange}
    />
    <label htmlFor={id}>
      {value}
    </label>
  </div>
);

export default pure(FilterCheckbox);
