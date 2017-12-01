import React from 'react';
import {
  pure,
} from 'recompose';
import styled from 'styled-components';

// import SortOptions from './SortOptions';
import {
  SORT_BY_DISTANCE,
  SORT_BY_PRICE,
  SORT_BY_DATE,
} from '../constants/sort';

const SortBySpan = styled.span`
    font-size:16px;
    color:#535353;
    font-weight:normal;
    padding-right:8px;
`


const Sort = ({
  handleChangeSortBy,
  sortBy,
}) => (
  <div className="whiteBG">
    <div className="searchHeader">
      <div className="dropdown textRight">
        <a
          className="btn quickLoadSort dropdown-toggle textRight"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <SortBySpan>Sort by {sortBy}</SortBySpan>
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" onClick={() => handleChangeSortBy(SORT_BY_DISTANCE)}>
            {SORT_BY_DISTANCE}
          </a>
          <a className="dropdown-item" onClick={() => handleChangeSortBy(SORT_BY_PRICE)}>
            {SORT_BY_PRICE}
          </a>
          <a className="dropdown-item" onClick={() => handleChangeSortBy(SORT_BY_DATE)}>
            {SORT_BY_DATE}
          </a>
        </div>
      </div>
    </div>

  </div>
);

export default pure(Sort)
