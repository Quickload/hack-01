import React from 'react';
import { pure } from 'recompose';

import closeIcon from '../../images/icons/icon-close-sm.svg';

const Tag = ({label, onClick}) => (
  <span className="tag secOrange">
    {label}
    &nbsp;
    <a className="removeTag" onClick={() => onClick()}>
      <img src={closeIcon} alt="remove filter" />
    </a>
  </span>
);

export default pure(Tag);
