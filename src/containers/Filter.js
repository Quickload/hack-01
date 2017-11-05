import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';

const FilterWrapperGrid = styled.div`
  height: 60px;
`;

const Filter = () => (
  <div className="searchHeader">
    <FilterWrapperGrid className="row">
      <div className="col-6">
        <h2 className="quickLoad">
          <span className="secOrange">Quick</span>Load Board
        </h2>
      </div>
      <div className="col-6">
        <div className="dropdown">
          <button className="btn quickLoadSort dropdown-toggle textRight" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort by Distance
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
    </FilterWrapperGrid>
  </div>
);

export default pure(Filter)
