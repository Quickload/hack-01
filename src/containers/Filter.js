import React from 'react';
import {
  compose,
  pure,
  withState,
  withHandlers,
} from 'recompose';

import Tag from '../components/Filter/Tag';
import FilterOptions from './FilterOptions';
import {
  FILTER_BY_PICKUP_CITY,
  FILTER_BY_DROPOFF_CITY,
  FILTER_BY_LOAD_TYPE,
  FILTER_BY_TRUCK_TYPE,
  FILTER_BY_ACCESSORIAL,
} from '../constants/filter';

const hoc = compose(
  withState('filterBy', 'setFilterBy', FILTER_BY_PICKUP_CITY),
  withState('tags', 'setTags', ['Near Me']),
  withState('pickupCityValue', 'setPickupCityValue', 'Near Me'),
  withHandlers({
    handleChangeFilterBy: ({setFilterBy}) => selectedFilterBy => {
      setFilterBy(selectedFilterBy)
    },
    removeTag: ({tags, setTags}) => tag => {
      const index = tags.indexOf(tag);
      const updatedTags = tags.slice();
      if (index > -1) {
        updatedTags.splice(index, 1);
      }
      setTags(updatedTags);
    },
    handlePickupCityTag: ({tags, setTags, pickupCityValue, setPickupCityValue}) => value => {
      console.log(value);
    },
  }),
  pure,
);

const Filter = ({
  filterIsOpen,
  setFilterIsOpen,
  handleChangeFilterBy,
  filterBy,
  tags,
  removeTag,
  pickupCityValue,
  setPickupCityValue,
  handlePickupCityTag,
}) => (
  <div className="whiteBG">
    <div className="searchHeader">
      <div className="row">
        <div className="col-12">
          <div className="dropdown">
            <a
              className="btn quickLoadSort dropdown-toggle textLeft"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="filterBy">Filter By:</span> {filterBy}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" onClick={() => handleChangeFilterBy(FILTER_BY_PICKUP_CITY)}>
                {FILTER_BY_PICKUP_CITY}
              </a>
              <a className="dropdown-item" onClick={() => handleChangeFilterBy(FILTER_BY_DROPOFF_CITY)}>
                {FILTER_BY_DROPOFF_CITY}
              </a>
              <a className="dropdown-item" onClick={() => handleChangeFilterBy(FILTER_BY_LOAD_TYPE)}>
                {FILTER_BY_LOAD_TYPE}
              </a>
              <a className="dropdown-item" onClick={() => handleChangeFilterBy(FILTER_BY_TRUCK_TYPE)}>
                {FILTER_BY_TRUCK_TYPE}
              </a>
              <a className="dropdown-item" onClick={() => handleChangeFilterBy(FILTER_BY_ACCESSORIAL)}>
                {FILTER_BY_ACCESSORIAL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FilterOptions
      filterBy={filterBy}
      pickupCityValue={pickupCityValue}
      handlePickupCityTag={handlePickupCityTag}
    />

    <div className="lightBG tagArea">
      {tags.map(tag => (
        <Tag
          key={Math.random().toString(36).substring(2, 15)}
          label={tag}
          onClick={() => removeTag(tag)}
        />
      ))}
    </div>
  </div>
);

export default hoc(Filter)
