import React from 'react';

import PickupCityOptions from '../components/Filter/PickupCityOptions';
import DropoffCityOptions from '../components/Filter/DropoffCityOptions';
import LoadTypeOptions from '../components/Filter/LoadTypeOptions';
import TruckTypeOptions from '../components/Filter/TruckTypeOptions';
import AccessorialTypeOptions from '../components/Filter/AccessorialTypeOptions';

import {
  FILTER_BY_PICKUP_CITY,
  FILTER_BY_DROPOFF_CITY,
  FILTER_BY_LOAD_TYPE,
  FILTER_BY_TRUCK_TYPE,
  FILTER_BY_ACCESSORIAL,
} from '../constants/filter';

const FilterOptions = props => {
  let filterToShow = <PickupCityOptions {...props} />;
  switch (props.filterBy) {
    case FILTER_BY_PICKUP_CITY:
      filterToShow = <PickupCityOptions {...props} />;
      break;
    case FILTER_BY_DROPOFF_CITY:
      filterToShow = <DropoffCityOptions {...props} />;
      break;
    case FILTER_BY_LOAD_TYPE:
      filterToShow = <LoadTypeOptions {...props} />;
      break;
    case FILTER_BY_TRUCK_TYPE:
      filterToShow = <TruckTypeOptions {...props} />;
      break;
    case FILTER_BY_ACCESSORIAL:
      filterToShow = <AccessorialTypeOptions {...props} />;
      break;
    default:
      return filterToShow;
  }
  return filterToShow;
}

export default FilterOptions;
