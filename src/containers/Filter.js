import React from 'react';
import {
  compose,
  pure,
  withState,
  withHandlers,
} from 'recompose';

import Tag from '../components/Filter/Tag';
import FilterOptions from './FilterOptions';
import Sort from './Sort';
import {
  FILTER_BY_PICKUP_CITY,
  FILTER_BY_DROPOFF_CITY,
  FILTER_BY_LOAD_TYPE,
  FILTER_BY_TRUCK_TYPE,
  FILTER_BY_ACCESSORIAL,
} from '../constants/filter';

const hoc = compose(
  withState('filterBy', 'setFilterBy', FILTER_BY_PICKUP_CITY),
  withHandlers({
    handleChangeFilterBy: ({setFilterBy}) => selectedFilterBy => () => {
      setFilterBy(selectedFilterBy)
    },
    removeTag: ({tags, setTags}) => tag => () => {
      const index = tags.indexOf(tag);
      const updatedTags = tags.slice();
      if (index > -1) {
        updatedTags.splice(index, 1);
      }
      setTags(updatedTags);
    },
    addTag: ({tags, setTags, searchValue, handleSearchInput}) => () => {
      if (!searchValue || !searchValue.length) return false;
      const index = tags.indexOf(searchValue);
      if (index === -1) {
        setTags([
          ...tags,
          searchValue,
        ]);
        handleSearchInput(null, '');
      }
    },
    resetTags: ({setTags}) => () => {
      setTags(['Near Me']);
    },
    handleCheckboxOnChange: ({tags, setTags}) => e => {
      const value = e.target.value;
      const index = tags.indexOf(value);
      if (index === -1) {
        setTags([
          ...tags,
          value,
        ]);
      } else {
        const updatedTags = tags.slice();
        updatedTags.splice(index, 1);
        setTags(updatedTags);
      }
    },
    checkIfIsChecked: ({tags}) => e => {
      console.log(e.target);
      return true;
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
  searchValue,
  handleSearchInput,
  addTag,
  resetTags,
  sortBy,
  handleChangeSortBy,
  handleCheckboxOnChange,
  checkIfIsChecked,
}) => (
  <div className="whiteBG">
    <div className="searchHeader">
      <div className="row">
        <div className="col-6">
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
              <a className="dropdown-item" onClick={handleChangeFilterBy(FILTER_BY_PICKUP_CITY)}>
                {FILTER_BY_PICKUP_CITY}
              </a>
              <a className="dropdown-item" onClick={handleChangeFilterBy(FILTER_BY_DROPOFF_CITY)}>
                {FILTER_BY_DROPOFF_CITY}
              </a>
              <a className="dropdown-item" onClick={handleChangeFilterBy(FILTER_BY_LOAD_TYPE)}>
                {FILTER_BY_LOAD_TYPE}
              </a>
              <a className="dropdown-item" onClick={handleChangeFilterBy(FILTER_BY_TRUCK_TYPE)}>
                {FILTER_BY_TRUCK_TYPE}
              </a>
              <a className="dropdown-item" onClick={handleChangeFilterBy(FILTER_BY_ACCESSORIAL)}>
                {FILTER_BY_ACCESSORIAL}
              </a>
            </div>
          </div>
        </div>

        <div className="col-6">
          <Sort sortBy={sortBy} handleChangeSortBy={handleChangeSortBy} />
        </div>
      </div>

    </div>

    <FilterOptions
      filterBy={filterBy}
      searchValue={searchValue}
      handleSearchInput={handleSearchInput}
      handleCheckboxOnChange={handleCheckboxOnChange}
      checkIfIsChecked={checkIfIsChecked}
      tags={tags}
    />

    <div className="lightBG tagArea">
      {tags && tags.map(tag => (
        <Tag
          key={Math.random().toString(36).substring(2, 15)}
          label={tag}
          onClick={removeTag(tag)}
        />
      ))}
    </div>

    <div className="container searchCTAs">
      <div className="row">
        <div className="col-6 textRight">
          <a className="btnLink" onClick={resetTags}>
            CLEAR
          </a>
        </div>
        <div className="col-6 textLeft">
          <a className="btn orangeBG" onClick={addTag}>
            Search
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default hoc(Filter)
